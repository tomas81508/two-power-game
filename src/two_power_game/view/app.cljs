(ns two-power-game.view.app
  (:require [rum.core :as rum]
            [two-power-game.core :as core]))

(def header-style {:font-size     "200%"
                   :margin-bottom "1rem"
                   :margin-top    "0.5rem"})

(defn get-box-shadow [n]
  (cond (<= n 4)
        "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px"

        (<= n 16)
        "rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"

        (<= n 64)
        "rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px"

        (<= n 128)
        "rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px"

        :else
        "rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px"))

(defn get-color [n]
  (condp = n
    0 "antiquewhite"
    2 "burlywood"
    4 "orange"
    8 "tomato"
    16 "brown"
    32 "indigo"
    64 "purple"
    128 "red"
    256 "darkblue"
    512 "green"
    1024 "green"
    2048 "blue"))

(rum/defc header-component
  []
  [:div
   [:div {:style (merge header-style
                        ;{:background-color "red"}
                        )}
    "The two power game"]])

(rum/defc simple-game-component
  [state trigger-event]
  [:div {:style {:margin-bottom "1rem"}}
   (let [size 80
         board (:board state)]
     (->> (keys board)
          (sort-by (juxt second first))
          (partition (core/get-board-size board))
          (map (fn [row]
                 [:div {:key   row
                        :style {:margin-bottom "10px"
                                :display       "flex"}}
                  (map (fn [cell]
                         [:div {:key   cell
                                :style {:display          "inline-block"
                                        :position         "relative"
                                        :height           (str size "px")
                                        :width            (str size "px")
                                        :border-radius    "8%"
                                        :background-color "rebeccapurple"
                                        :box-shadow       "rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px"
                                        :margin-right     "10px"}}
                          [:div {:style    {:position        "absolute"
                                            :color           "white"
                                            :font-size       "400%"
                                            :display         "flex"
                                            :justify-content "center"
                                            :align-items     "center"
                                            :width           "100%"
                                            :height          "100%"}
                                 :on-click (fn [] (println cell))}
                           (core/get-value state cell)]])
                       row)]))))])

(rum/defc transition-game-component
  [state trigger-event]
  (let [size 120
        padding 15
        board (:board state)]
    [:div
     {:key   "board"
      :style {:position "relative"
              :height   (str (* (core/get-board-size board) (+ size padding)) "px")
              :width    (str (* (core/get-board-size board) (+ size padding)) "px")}}
     (->> (keys board)
          (sort-by (fn [c] (core/get-id state c)))
          (map (fn [cell]
                 (let [[x y] cell
                       id (core/get-id state cell)
                       value (core/get-value state cell)]
                   [:div {:key   id
                          :style {:animation        "fade-in 500ms"
                                  :display          "inline-block"
                                  :z-index          value
                                  :position         "absolute"
                                  :transition       "200ms transform ease"
                                  :transform        (str "translateX(" (* x (+ size padding)) "px)"
                                                         "translateY(" (* y (+ size padding)) "px)")
                                  :height           (str size "px")
                                  :width            (str size "px")
                                  :border-radius    "8%"
                                  :background-color (get-color value)
                                  :box-shadow       (get-box-shadow value)
                                  :margin-right     "10px"}}
                    [:div {:style {:position        "absolute"
                                   :color           "white"
                                   :font-size       "400%"
                                   :display         "flex"
                                   :justify-content "center"
                                   :align-items     "center"
                                   :width           "100%"
                                   :height          "100%"}}
                     value]]))))]))

(defn button [label on-click-fn]
  [:div {:style    {:display          "inline-block"
                    :min-width        "100px"
                    :background-color "gray"
                    :margin-right     "20px"
                    :margin-top       "5px"
                    :margin-bottom    "5px"
                    :padding          "0.5rem"
                    :border-radius    "5%"
                    :text-align       "center"
                    :color            "white"
                    :text-transform   "uppercase"
                    :cursor           "pointer"}
         :on-click on-click-fn}
   label])

(rum/defc app-component
  [state trigger-event]
  [:div {:style {:width        "400px"
                 :margin-left  "auto"
                 :margin-right "auto"}}
   (header-component)
   ;(simple-game-component state trigger-event)
   (transition-game-component state trigger-event)
   (button "Restart" (fn [] (trigger-event {:name :restart})))
   (button "Undo" (fn [] (trigger-event {:name :undo})))])

