// Compiled by ClojureScript 1.10.339 {}
goog.provide('two_power_game.view.app');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('two_power_game.core');
two_power_game.view.app.header_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem"], null);
two_power_game.view.app.get_box_shadow = (function two_power_game$view$app$get_box_shadow(n){
if((n <= (4))){
return "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px";
} else {
if((n <= (16))){
return "rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px";
} else {
if((n <= (64))){
return "rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px";
} else {
if((n <= (128))){
return "rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px";
} else {
return "rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px";

}
}
}
}
});
two_power_game.view.app.get_color = (function two_power_game$view$app$get_color(n){
var pred__70054 = cljs.core._EQ_;
var expr__70055 = n;
if(cljs.core.truth_(pred__70054.call(null,(0),expr__70055))){
return "antiquewhite";
} else {
if(cljs.core.truth_(pred__70054.call(null,(2),expr__70055))){
return "burlywood";
} else {
if(cljs.core.truth_(pred__70054.call(null,(4),expr__70055))){
return "orange";
} else {
if(cljs.core.truth_(pred__70054.call(null,(8),expr__70055))){
return "tomato";
} else {
if(cljs.core.truth_(pred__70054.call(null,(16),expr__70055))){
return "brown";
} else {
if(cljs.core.truth_(pred__70054.call(null,(32),expr__70055))){
return "indigo";
} else {
if(cljs.core.truth_(pred__70054.call(null,(64),expr__70055))){
return "purple";
} else {
if(cljs.core.truth_(pred__70054.call(null,(128),expr__70055))){
return "red";
} else {
if(cljs.core.truth_(pred__70054.call(null,(256),expr__70055))){
return "darkblue";
} else {
if(cljs.core.truth_(pred__70054.call(null,(512),expr__70055))){
return "green";
} else {
if(cljs.core.truth_(pred__70054.call(null,(1024),expr__70055))){
return "green";
} else {
if(cljs.core.truth_(pred__70054.call(null,(2048),expr__70055))){
return "blue";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__70055)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}
});
two_power_game.view.app.header_component = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,React.createElement("div",({"style": sablono.interpreter.attributes.call(null,cljs.core.merge.call(null,two_power_game.view.app.header_style))}),"The two power game"));
}),null,"header-component");
two_power_game.view.app.simple_game_component = rum.core.build_defc.call(null,(function (state,trigger_event){
return React.createElement("div",({"style": ({"marginBottom": "1rem"})}),(function (){var size = (80);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (size,board){
return (function (row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),row,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),cljs.core.map.call(null,((function (size,board){
return (function (cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cell,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rebeccapurple",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"400%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (size,board){
return (function (){
return cljs.core.println.call(null,cell);
});})(size,board))
], null),two_power_game.core.get_value.call(null,state,cell)], null)], null);
});})(size,board))
,row)], null);
});})(size,board))
,cljs.core.partition.call(null,two_power_game.core.get_board_size.call(null,board),cljs.core.sort_by.call(null,cljs.core.juxt.call(null,cljs.core.second,cljs.core.first),cljs.core.keys.call(null,board)))));
})());
}),null,"simple-game-component");
two_power_game.view.app.transition_game_component = rum.core.build_defc.call(null,(function (state,trigger_event){
var size = (120);
var padding = (15);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",({"key": "board", "style": ({"position": "relative", "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((two_power_game.core.get_board_size.call(null,board) * (size + padding))),"px"].join(''), "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((two_power_game.core.get_board_size.call(null,board) * (size + padding))),"px"].join('')})}),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (size,padding,board){
return (function (cell){
var vec__70057 = cell;
var x = cljs.core.nth.call(null,vec__70057,(0),null);
var y = cljs.core.nth.call(null,vec__70057,(1),null);
var id = two_power_game.core.get_id.call(null,state,cell);
var value = two_power_game.core.get_value.call(null,state,cell);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[two_power_game.view.app.get_box_shadow.call(null,value),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x * (size + padding))),"px)","translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y * (size + padding))),"px)"].join(''),"fade-in 500ms","200ms transform ease",two_power_game.view.app.get_color.call(null,value),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''),value,"inline-block","absolute","10px","8%",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join('')])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"400%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),value], null)], null);
});})(size,padding,board))
,cljs.core.sort_by.call(null,((function (size,padding,board){
return (function (c){
return two_power_game.core.get_id.call(null,state,c);
});})(size,padding,board))
,cljs.core.keys.call(null,board)))));
}),null,"transition-game-component");
two_power_game.view.app.button = (function two_power_game$view$app$button(label,on_click_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["100px","uppercase","white","center","gray","pointer","0.5rem","inline-block","20px","5%"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null),label], null);
});
two_power_game.view.app.app_component = rum.core.build_defc.call(null,(function (state,trigger_event){
return React.createElement("div",({"style": ({})}),sablono.interpreter.interpret.call(null,two_power_game.view.app.header_component.call(null)),sablono.interpreter.interpret.call(null,two_power_game.view.app.transition_game_component.call(null,state,trigger_event)),sablono.interpreter.interpret.call(null,two_power_game.view.app.button.call(null,"Restart",(function (){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"restart","restart",-1779883612)], null));
}))),sablono.interpreter.interpret.call(null,two_power_game.view.app.button.call(null,"Undo",(function (){
return trigger_event.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
}))));
}),null,"app-component");

//# sourceMappingURL=app.js.map?rel=1543791138492
