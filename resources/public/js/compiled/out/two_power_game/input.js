// Compiled by ClojureScript 1.10.339 {}
goog.provide('two_power_game.input');
goog.require('cljs.core');
two_power_game.input.register_input_BANG_ = (function two_power_game$input$register_input_BANG_(body,trigger_event){
return body.addEventListener.call(null,"keydown",(function (e){
var pred__40471 = cljs.core._EQ_;
var expr__40472 = e.keyCode;
if(cljs.core.truth_(pred__40471.call(null,(37),expr__40472))){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-left","move-left",-271562811)], null));
} else {
if(cljs.core.truth_(pred__40471.call(null,(38),expr__40472))){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null));
} else {
if(cljs.core.truth_(pred__40471.call(null,(39),expr__40472))){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-right","move-right",1661359569)], null));
} else {
if(cljs.core.truth_(pred__40471.call(null,(40),expr__40472))){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null));
} else {
return null;
}
}
}
}
}));
});

//# sourceMappingURL=input.js.map?rel=1543700978733
