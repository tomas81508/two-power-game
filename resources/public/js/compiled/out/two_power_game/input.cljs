(ns two-power-game.input)

(defn register-input!
  [body trigger-event]
  (body.addEventListener "keydown"
                         (fn [e]
                           (condp = (.-keyCode e)
                             37 (trigger-event {:name :move-left})
                             38 (trigger-event {:name :move-up})
                             39 (trigger-event {:name :move-right})
                             40 (trigger-event {:name :move-down})
                             nil))))
