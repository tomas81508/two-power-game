(ns two-power-game.main
  (:require [rum.core :as rum]
            [two-power-game.input :refer [register-input!]]
            [two-power-game.core :as core]
            [two-power-game.view.app :refer [app-component]]))

(enable-console-print!)

(defonce state-atom (atom nil))

(defonce initial-state (core/create-state ["000" "020" "000"]
                                          {:board-size 3}))


(defn render! [state]
  (rum/mount (app-component state handle-event)
             (js/document.getElementById "app")))

(when (nil? (deref state-atom))

  (add-watch state-atom
             :game-loop
             (fn [_ _ _ states]
               (render! (last states))))

  (register-input! js/document.body handle-event)

  (reset! state-atom [initial-state]))

(defn on-js-reload []
  (render! (last (deref state-atom))))
