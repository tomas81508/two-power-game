// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23759 = arguments.length;
var i__4532__auto___23760 = (0);
while(true){
if((i__4532__auto___23760 < len__4531__auto___23759)){
args__4534__auto__.push((arguments[i__4532__auto___23760]));

var G__23761 = (i__4532__auto___23760 + (1));
i__4532__auto___23760 = G__23761;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq23756){
var G__23757 = cljs.core.first.call(null,seq23756);
var seq23756__$1 = cljs.core.next.call(null,seq23756);
var G__23758 = cljs.core.first.call(null,seq23756__$1);
var seq23756__$2 = cljs.core.next.call(null,seq23756__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23757,G__23758,seq23756__$2);
});


//# sourceMappingURL=util.js.map?rel=1543694769952
