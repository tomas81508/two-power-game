(ns two-power-game.core
  (:require [ysera.test :refer [is= is is-not]]
            [ysera.random :refer [random-nth]]))

(defn create-board
  {:test (fn []
           (is= (create-board 3)
                {[0 0] {:value 0 :id 1}
                 [1 0] {:value 0 :id 2}
                 [2 0] {:value 0 :id 3}
                 [0 1] {:value 0 :id 4}
                 [1 1] {:value 0 :id 5}
                 [2 1] {:value 0 :id 6}
                 [0 2] {:value 0 :id 7}
                 [1 2] {:value 0 :id 8}
                 [2 2] {:value 0 :id 9}}))}
  ([]
   (create-board 3))
  ([board-size]
   (reduce (fn [result x]
             (reduce (fn [a y]
                       (assoc a [x y] {:value 0
                                       :id    (+ (* board-size y) x 1)}))
                     result
                     (range board-size)))
           {}
           (range board-size))))

(defn char->number
  {:test (fn []
           (is= (char->number \1) 1)
           (is= (char->number \5) 5))}
  [x]
  #?(:clj  (- (int x) 48)
     :cljs (int x)))

(defn strings->board
  {:test (fn []
           (is= (strings->board ["420" "22"])
                {[0 0] {:value 4}
                 [1 0] {:value 2}
                 [2 0] {:value 0}
                 [0 1] {:value 2}
                 [1 1] {:value 2}}))}
  [rows]
  (reduce (fn [result [y row]]
            (reduce (fn [a [x char-value]]
                      (assoc a [x y] {:value (char->number char-value)}))
                    result
                    (map-indexed (fn [i v] [i v]) row)))
          {}
          (map-indexed (fn [i v] [i v]) rows)))

(defn get-board-size
  {:test (fn []
           (is= (-> (create-board)
                    (get-board-size))
                3))}
  [board]
  {:pre [(not (contains? board :board))]}
  (->> (keys board)
       (map first)
       (apply max)
       (inc)))

(defn board->strings
  {:test (fn []
           (is= (board->strings {[0 0] {:value 4}
                                 [1 0] {:value 2}
                                 [2 0] {:value 0}
                                 [0 1] {:value 2}
                                 [1 1] {:value 2}})
                ["420"
                 "22"]))}
  [board]
  (->> (keys board)
       (sort-by (juxt second first))
       (partition-all (get-board-size board))
       (map (fn [row]
              (reduce (fn [a cell]
                        (str a (get-in board [cell :value])))
                      ""
                      row)))))

(defn no-duplicate-ids?
  {:test (fn []
           (is (-> (create-board)
                   (no-duplicate-ids?))))}
  [board]
  (let [ids (->> (keys board)
                 (map (fn [cell] (get-in board [cell :id]))))
        unique-ids (set ids)]
    (= (count ids) (count unique-ids))))

(defn create-state
  {:test (fn []
           (is= (create-state)
                {:seed  0
                 :board {[0 0] {:value 0 :id 1}
                         [1 0] {:value 0 :id 2}
                         [2 0] {:value 0 :id 3}
                         [0 1] {:value 0 :id 4}
                         [1 1] {:value 0 :id 5}
                         [2 1] {:value 0 :id 6}
                         [0 2] {:value 0 :id 7}
                         [1 2] {:value 0 :id 8}
                         [2 2] {:value 0 :id 9}}})
           (is= (create-state ["002"
                               "02"]
                              {:kvs [:seed 0]})
                {:seed  0
                 :board {[0 0] {:value 0 :id 1}
                         [1 0] {:value 0 :id 2}
                         [2 0] {:value 2 :id 3}
                         [0 1] {:value 0 :id 4}
                         [1 1] {:value 2 :id 5}
                         [2 1] {:value 0 :id 6}
                         [0 2] {:value 0 :id 7}
                         [1 2] {:value 0 :id 8}
                         [2 2] {:value 0 :id 9}}})
           (is (-> (create-state ["30400"] {:board-size 5})
                   (:board)
                   (no-duplicate-ids?))))}
  ([]
   (create-state [] {}))
  ([strings]
   (create-state strings {}))
  ([strings {kvs        :kvs
             board-size :board-size}]
   (let [explicit-board (strings->board strings)]
     (as-> {:seed  0
            :board (reduce (fn [board cell]
                             (assoc-in board [cell :value] (get-in explicit-board [cell :value])))
                           (if-not (nil? board-size)
                             (create-board board-size)
                             (create-board))
                           (keys explicit-board))} $
           (if (nil? kvs)
             $
             (apply assoc $ kvs))))))

(defn get-id
  {:test (fn []
           (is= (-> (create-state)
                    (get-id [0 0]))
                1)
           (is= (-> (create-state ["0"])
                    (get-id [0 0]))
                1))}
  [state cell]
  (get-in (:board state) [cell :id]))

(defn get-value
  {:test (fn []
           (is= (-> (create-state)
                    (get-value [0 0]))
                0)
           (is= (-> (create-state ["4"])
                    (get-value [0 0]))
                4))}
  [state cell]
  (get-in (:board state) [cell :value]))

(defn first-non-zero-cell
  {:test (fn []
           (is= (-> (create-state ["30400"] {:board-size 5})
                    (:board)
                    (first-non-zero-cell [1 0] [1 0]))
                [2 0])
           (is= (-> (create-state ["30400"] {:board-size 5})
                    (:board)
                    (first-non-zero-cell [2 0] [1 0]))
                nil)
           (is= (-> (create-state ["30400"] {:board-size 5})
                    (:board)
                    (first-non-zero-cell [2 0] [-1 0]))
                [0 0]))}
  [board cell direction]
  {:pre [(no-duplicate-ids? board)]}
  (->> (loop [potential-cells []
              cell cell]
         (let [next-cell (map + cell direction)]
           (if (contains? board next-cell)
             (recur (conj potential-cells next-cell)
                    next-cell)
             potential-cells)))
       (filter (fn [c] (not= (get-in board [c :value]) 0)))
       (first)))

(defn- merging-cells
  [board row direction]
  {:pre  [(no-duplicate-ids? board)]
   :post [(no-duplicate-ids? board)]}
  (reduce (fn [board cell]
            (let [value (get-in board [cell :value])]
              (if-not (and value (pos? value))
                board
                (let [first-non-zero-cell (first-non-zero-cell board cell direction)]
                  (if-not (= value (get-in board [first-non-zero-cell :value]))
                    board
                    (let [new-id (->> (keys board)
                                      (map (fn [c] (get-in board [c :id])))
                                      (apply max)
                                      (inc))]
                      (-> board
                          (update-in [cell :value] (fn [x] (* 2 x)))
                          (assoc-in [cell :id] (get-in board [first-non-zero-cell :id]))
                          (assoc first-non-zero-cell {:value 0 :id new-id}))))))))
          board
          row))

(defn- shifting-zeroes-away
  [board row direction]
  {:pre  [(no-duplicate-ids? board)]
   :post [(no-duplicate-ids? board)]}
  (reduce (fn [board cell]
            (if (not= (get-in board [cell :value]) 0)
              board
              (let [first-non-zero-cell (first-non-zero-cell board cell direction)
                    first-non-zero-entity (get board first-non-zero-cell)]
                (if-not first-non-zero-cell
                  (reduced board)
                  (let [new-id (->> (keys board)
                                    (map (fn [c] (get-in board [c :id])))
                                    (apply max)
                                    (inc))]
                    (-> board
                        (assoc cell first-non-zero-entity)
                        (assoc first-non-zero-cell {:value 0 :id new-id})))))))
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
       (filter (fn [c] (= (get-value state c) 0)))))

(defn- pre-move
  [state direction sort-fn]
  {:pre  [(no-duplicate-ids? (:board state))]
   :post [(no-duplicate-ids? (:board state))]}
  (let [board-fn (fn [board]
                   (reduce (fn [board row]
                             (-> board
                                 (merging-cells row direction)
                                 (shifting-zeroes-away row direction)))
                           board
                           (->> (keys board)
                                (sort-by sort-fn)
                                (partition-all (get-board-size board)))))]
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
                 "000"])
           (is= (-> (create-state ["22"])
                    (pre-move-left)
                    (get-id [0 0]))
                2))}
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
           (is= (-> (create-state ["000" "020"])
                    (pre-move-down)
                    (get-id [1 2]))
                5)
           (is= (-> (create-state ["222"
                                   "422"])
                    (pre-move-down)
                    (:board)
                    (board->strings))
                ["000"
                 "200"
                 "444"])
           (is= (-> (create-state ["000" "020" "000"])
                    (pre-move-down)
                    (:board)
                    (board->strings))
                ["000" "000" "020"])
           (is= (-> (create-state ["200"
                                   "000"
                                   "220"])
                    (pre-move-down)
                    (:board)
                    (board->strings))
                ["000"
                 "000"
                 "420"]))}
  [state]
  (pre-move state [0 -1] (juxt first (fn [x] (- (second x))))))

(defn- randomly-add-two-at-empty-cell
  {:test (fn []
           (is= (->> (create-state)
                     (randomly-add-two-at-empty-cell)
                     (:board)
                     (vals)
                     (map :value)
                     (apply +))
                2))}
  [state]
  (let [empty-cells (get-empty-cells state)
        [seed cell] (random-nth (:seed state) empty-cells)]
    (-> state
        (assoc :seed seed)
        (assoc-in [:board cell :value] 2))))

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
                                  {:kvs [:seed 2]})
                    (move :up)
                    (:board)
                    (board->strings))
                ["844"
                 "400"
                 "020"])
           (is= (-> (create-state ["000"
                                   "020"
                                   "000"])
                    (move :down)
                    (get-value [1 2]))
                2))}
  [state direction]
  (let [state-after-pre-move (condp = direction
                               :up (pre-move-up state)
                               :right (pre-move-right state)
                               :down (pre-move-down state)
                               :left (pre-move-left state))]
    (if (= (:board state-after-pre-move) (:board state))
      state
      (randomly-add-two-at-empty-cell state-after-pre-move))))

