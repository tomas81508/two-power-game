(ns two-power-game.core
  (:require [ysera.test :refer [is= is is-not]]
            [ysera.random :refer [random-nth]]))

(defn create-board
  {:test (fn []
           (is= (create-board)
                {[0 0] 0 [1 0] 0 [2 0] 0
                 [0 1] 0 [1 1] 0 [2 1] 0
                 [0 2] 0 [1 2] 0 [2 2] 0}))}
  []
  (reduce (fn [result x]
            (reduce (fn [a y]
                      (assoc a [x y] 0))
                    result
                    (range 3)))
          {}
          (range 3)))

(defn char->number
  {:test (fn []
           (is= (char->number \1) 1)
           (is= (char->number \5) 5))}
  [x]
  (- (int x) 48))

(defn strings->board
  {:test (fn []
           (is= (strings->board ["420" "22"])
                {[0 0] 4 [1 0] 2 [2 0] 0
                 [0 1] 2 [1 1] 2}))}
  [rows]
  (reduce (fn [result [y row]]
            (reduce (fn [a [x char-value]]
                      (assoc a [x y] (char->number char-value)))
                    result
                    (map-indexed (fn [i v] [i v]) row)))
          {}
          (map-indexed (fn [i v] [i v]) rows)))

(defn board->strings
  {:test (fn []
           (is= (board->strings {[0 0] 4 [1 0] 2 [2 0] 0
                                 [0 1] 2 [1 1] 2})
                ["420"
                 "22"]))}
  [board]
  (->> (keys board)
       (sort-by (juxt second first))
       (partition-all 3)
       (map (fn [row]
              (reduce (fn [a v]
                        (str a (get board v)))
                      ""
                      row)))))

(defn create-state
  {:test (fn []
           (is= (create-state)
                {:seed  0
                 :board {[0 0] 0 [1 0] 0 [2 0] 0
                         [0 1] 0 [1 1] 0 [2 1] 0
                         [0 2] 0 [1 2] 0 [2 2] 0}})
           (is= (create-state ["002"
                               "02"])
                {:seed  0
                 :board {[0 0] 0 [1 0] 0 [2 0] 2
                         [0 1] 0 [1 1] 2 [2 1] 0
                         [0 2] 0 [1 2] 0 [2 2] 0}}))}
  ([]
   (create-state ""))
  ([strings]
   {:seed  0
    :board (merge (create-board)
                  (strings->board strings))})
  ([strings & kvs]
   (as-> (create-state strings) $
         (apply assoc $ kvs))))

(defn move-left-on-vector
  {:test (fn []
           (is= (move-left-on-vector [2 2 0 0])
                [4 0 0 0])
           (is= (move-left-on-vector [4 2 2 0])
                [4 4 0 0])
           (is= (move-left-on-vector [4 4 2 2 8 0])
                [8 4 8 0 0 0]))}
  [row]
  (let [pre-result (-> (reduce (fn [{working-row :working-row :as a} index]
                                 (let [value (get working-row index)]
                                   (if (= value (get working-row (inc index)))
                                     (-> a
                                         (update :result conj (* 2 value))
                                         (update :working-row (fn [old-row]
                                                                (assoc old-row (inc index) 0))))
                                     (update a :result conj value))))
                               {:working-row row
                                :result      []}
                               (range (count row)))
                       (:result))]
    (as-> pre-result $
          (filter (fn [v] (not= v 0)) $)
          (concat $ (repeat (count row) 0))
          (take (count row) $)
          (into [] $))))

(defn first-non-zero-cell
  {:test (fn []
           (is= (first-non-zero-cell (strings->board ["30400"]) [1 0] [1 0])
                [2 0])
           (is= (first-non-zero-cell (strings->board ["30400"]) [2 0] [1 0])
                nil)
           (is= (first-non-zero-cell (strings->board ["30400"]) [2 0] [-1 0])
                [0 0]))}
  [board cell direction]
  (->> (loop [potential-cells []
              cell cell]
         (let [next-cell (map + cell direction)]
           (if (contains? board next-cell)
             (recur (conj potential-cells next-cell)
                    next-cell)
             potential-cells)))
       (filter (fn [c]
                 (not= (get board c) 0)))
       (first)))

(defn- merging-cells
  [board row direction]
  (reduce (fn [result cell]
            (let [value (get result cell)
                  next-cell (map + cell direction)
                  next-value (get result next-cell)]
              (if (= value next-value)
                (-> result
                    (update cell (fn [x] (* 2 x)))
                    (assoc next-cell 0))
                result)))
          board
          row))

(defn- shifting-zeroes-away
  [board row direction]
  (reduce (fn [result cell]
            (if (not= (get result cell) 0)
              result
              (let [first-non-zero-cell (first-non-zero-cell result cell direction)]
                (if-not first-non-zero-cell
                  (reduced result)
                  (-> result
                      (assoc cell (get result first-non-zero-cell))
                      (assoc first-non-zero-cell 0))))))
          board
          row))

(defn get-empty-cells
  {:test (fn []
           (is= (-> (create-state ["202"
                                   "020"
                                   "440"])
                    (get-empty-cells)
                    (set))
                #{[1 0] [0 1] [2 1] [2 2]}))}
  [state]
  (->> (:board state)
       (keys)
       (filter (fn [c] (= (get (:board state) c) 0)))))

(defn- pre-move
  [state direction sort-fn]
  (let [board-fn (fn [board]
                   (reduce (fn [board row]
                             (-> board
                                 (merging-cells row direction)
                                 (shifting-zeroes-away row direction)))
                           board
                           (->> (keys board)
                                (sort-by sort-fn)
                                (partition-all 3))))]
    (update state :board board-fn)))

(defn pre-move-left
  {:test (fn []
           (is= (-> (create-state ["222"
                                   "422"])
                    (pre-move-left)
                    (:board)
                    (board->strings))
                ["420"
                 "440"
                 "000"]))}
  [state]
  (pre-move state [1 0] (juxt second first)))

(defn pre-move-right
  {:test (fn []
           (is= (-> (create-state ["222"
                                   "422"])
                    (pre-move-right)
                    (:board)
                    (board->strings))
                ["024"
                 "044"
                 "000"]))}
  [state]
  (pre-move state [-1 0] (juxt second (fn [x] (- (first x))))))

(defn pre-move-up
  {:test (fn []
           (is= (-> (create-state ["222"
                                   "422"])
                    (pre-move-up)
                    (:board)
                    (board->strings))
                ["244"
                 "400"
                 "000"]))}
  [state]
  (pre-move state [0 1] (juxt first second)))

(defn pre-move-down
  {:test (fn []
           (is= (-> (create-state ["222"
                                   "422"])
                    (pre-move-down)
                    (:board)
                    (board->strings))
                ["000"
                 "200"
                 "444"]))}
  [state]
  (pre-move state [0 -1] (juxt first (fn [x] (- (second x))))))

(defn- randomly-add-two-at-empty-cell
  {:test (fn []
           (is= (->> (create-state)
                     (randomly-add-two-at-empty-cell)
                     (:board)
                     (vals)
                     (apply +))
                2))}
  [state]
  (let [empty-cells (get-empty-cells state)
        [seed cell] (random-nth (:seed state) empty-cells)]
    (-> state
        (assoc :seed seed)
        (assoc-in [:board cell] 2))))

(defn move
  {:test (fn []
           (is= (-> (create-state ["422"
                                   "422"
                                   "400"])
                    (move :up)
                    (:board)
                    (board->strings))
                ["844"
                 "400"
                 "200"])
           (is= (-> (create-state ["422"
                                   "422"
                                   "400"]
                                  :seed 2)
                    (move :up)
                    (:board)
                    (board->strings))
                ["844"
                 "400"
                 "020"]))}
  [state direction]
  (-> (condp = direction
        :up (pre-move-up state)
        :right (pre-move-right state)
        :down (pre-move-down state)
        :left (pre-move-left state))
      (randomly-add-two-at-empty-cell)))

