// Compiled by ClojureScript 1.10.339 {}
goog.provide('two_power_game.main');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('two_power_game.input');
goog.require('two_power_game.core');
goog.require('two_power_game.view.app');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof two_power_game !== 'undefined') && (typeof two_power_game.main !== 'undefined') && (typeof two_power_game.main.state_atom !== 'undefined')){
} else {
two_power_game.main.state_atom = cljs.core.atom.call(null,null);
}
if((typeof two_power_game !== 'undefined') && (typeof two_power_game.main !== 'undefined') && (typeof two_power_game.main.initial_state !== 'undefined')){
} else {
two_power_game.main.initial_state = two_power_game.core.create_state.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["000","020","000"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),(3)], null));
}
two_power_game.main.handle_event = (function two_power_game$main$handle_event(p__70080){
var map__70081 = p__70080;
var map__70081__$1 = ((((!((map__70081 == null)))?(((((map__70081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70081):map__70081);
var name = cljs.core.get.call(null,map__70081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.call(null,map__70081__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__70083 = cljs.core._EQ_;
var expr__70084 = name;
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"restart","restart",-1779883612),expr__70084))){
return cljs.core.reset_BANG_.call(null,two_power_game.main.state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [two_power_game.main.initial_state], null));
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"move-left","move-left",-271562811),expr__70084))){
return cljs.core.swap_BANG_.call(null,two_power_game.main.state_atom,((function (pred__70083,expr__70084,map__70081,map__70081__$1,name,data){
return (function (states){
return cljs.core.conj.call(null,states,two_power_game.core.move.call(null,cljs.core.last.call(null,states),new cljs.core.Keyword(null,"left","left",-399115937)));
});})(pred__70083,expr__70084,map__70081,map__70081__$1,name,data))
);
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"move-up","move-up",-1153137133),expr__70084))){
return cljs.core.swap_BANG_.call(null,two_power_game.main.state_atom,((function (pred__70083,expr__70084,map__70081,map__70081__$1,name,data){
return (function (states){
return cljs.core.conj.call(null,states,two_power_game.core.move.call(null,cljs.core.last.call(null,states),new cljs.core.Keyword(null,"up","up",-269712113)));
});})(pred__70083,expr__70084,map__70081,map__70081__$1,name,data))
);
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"move-right","move-right",1661359569),expr__70084))){
return cljs.core.swap_BANG_.call(null,two_power_game.main.state_atom,((function (pred__70083,expr__70084,map__70081,map__70081__$1,name,data){
return (function (states){
return cljs.core.conj.call(null,states,two_power_game.core.move.call(null,cljs.core.last.call(null,states),new cljs.core.Keyword(null,"right","right",-452581833)));
});})(pred__70083,expr__70084,map__70081,map__70081__$1,name,data))
);
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"move-down","move-down",-1149356017),expr__70084))){
return cljs.core.swap_BANG_.call(null,two_power_game.main.state_atom,((function (pred__70083,expr__70084,map__70081,map__70081__$1,name,data){
return (function (states){
return cljs.core.conj.call(null,states,two_power_game.core.move.call(null,cljs.core.last.call(null,states),new cljs.core.Keyword(null,"down","down",1565245570)));
});})(pred__70083,expr__70084,map__70081,map__70081__$1,name,data))
);
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),expr__70084))){
return cljs.core.swap_BANG_.call(null,two_power_game.main.state_atom,((function (pred__70083,expr__70084,map__70081,map__70081__$1,name,data){
return (function (states){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.call(null,states));
});})(pred__70083,expr__70084,map__70081,map__70081__$1,name,data))
);
} else {
if(cljs.core.truth_(pred__70083.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),expr__70084))){
return null;
} else {
return null;
}
}
}
}
}
}
}
});
two_power_game.main.render_BANG_ = (function two_power_game$main$render_BANG_(state){
return rum.core.mount.call(null,two_power_game.view.app.app_component.call(null,state,two_power_game.main.handle_event),document.getElementById("app"));
});
if((cljs.core.deref.call(null,two_power_game.main.state_atom) == null)){
cljs.core.add_watch.call(null,two_power_game.main.state_atom,new cljs.core.Keyword(null,"game-loop","game-loop",-981126027),(function (_,___$1,___$2,states){
return two_power_game.main.render_BANG_.call(null,cljs.core.last.call(null,states));
}));

two_power_game.input.register_input_BANG_.call(null,document.body,two_power_game.main.handle_event);

cljs.core.reset_BANG_.call(null,two_power_game.main.state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [two_power_game.main.initial_state], null));
} else {
}
two_power_game.main.on_js_reload = (function two_power_game$main$on_js_reload(){
return two_power_game.main.render_BANG_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,two_power_game.main.state_atom)));
});

//# sourceMappingURL=main.js.map?rel=1543793353125
