// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__21734 = arguments.length;
switch (G__21734) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21735 = opts;
var map__21735__$1 = ((((!((map__21735 == null)))?(((((map__21735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21735):map__21735);
var ref = cljs.core.get.call(null,map__21735__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21735__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21737 = cljs.core.count.call(null,refs);
switch (G__21737) {
case (1):
var vec__21738 = refs;
var a = cljs.core.nth.call(null,vec__21738,(0),null);
return ((function (vec__21738,a,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21738,a,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21741 = refs;
var a = cljs.core.nth.call(null,vec__21741,(0),null);
var b = cljs.core.nth.call(null,vec__21741,(1),null);
return ((function (vec__21741,a,b,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21741,a,b,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21744 = refs;
var a = cljs.core.nth.call(null,vec__21744,(0),null);
var b = cljs.core.nth.call(null,vec__21744,(1),null);
var c = cljs.core.nth.call(null,vec__21744,(2),null);
return ((function (vec__21744,a,b,c,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21744,a,b,c,G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21737,map__21735,map__21735__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21747 = ref;
cljs.core.reset_BANG_.call(null,G__21747,recalc.call(null));

return G__21747;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21735,map__21735__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21735,map__21735__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21735,map__21735__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21735,map__21735__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21748_21754 = cljs.core.seq.call(null,refs);
var chunk__21749_21755 = null;
var count__21750_21756 = (0);
var i__21751_21757 = (0);
while(true){
if((i__21751_21757 < count__21750_21756)){
var ref_21758__$1 = cljs.core._nth.call(null,chunk__21749_21755,i__21751_21757);
cljs.core.add_watch.call(null,ref_21758__$1,key,watch);


var G__21759 = seq__21748_21754;
var G__21760 = chunk__21749_21755;
var G__21761 = count__21750_21756;
var G__21762 = (i__21751_21757 + (1));
seq__21748_21754 = G__21759;
chunk__21749_21755 = G__21760;
count__21750_21756 = G__21761;
i__21751_21757 = G__21762;
continue;
} else {
var temp__5457__auto___21763 = cljs.core.seq.call(null,seq__21748_21754);
if(temp__5457__auto___21763){
var seq__21748_21764__$1 = temp__5457__auto___21763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21748_21764__$1)){
var c__4351__auto___21765 = cljs.core.chunk_first.call(null,seq__21748_21764__$1);
var G__21766 = cljs.core.chunk_rest.call(null,seq__21748_21764__$1);
var G__21767 = c__4351__auto___21765;
var G__21768 = cljs.core.count.call(null,c__4351__auto___21765);
var G__21769 = (0);
seq__21748_21754 = G__21766;
chunk__21749_21755 = G__21767;
count__21750_21756 = G__21768;
i__21751_21757 = G__21769;
continue;
} else {
var ref_21770__$1 = cljs.core.first.call(null,seq__21748_21764__$1);
cljs.core.add_watch.call(null,ref_21770__$1,key,watch);


var G__21771 = cljs.core.next.call(null,seq__21748_21764__$1);
var G__21772 = null;
var G__21773 = (0);
var G__21774 = (0);
seq__21748_21754 = G__21771;
chunk__21749_21755 = G__21772;
count__21750_21756 = G__21773;
i__21751_21757 = G__21774;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1543694768192
