// Compiled by ClojureScript 1.10.339 {}
goog.provide('ysera.test');
goog.require('cljs.core');
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
ysera.test.cljs_env_QMARK_ = (function ysera$test$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
var ret__4565__auto___24338 = /**
 * Return then if we are generating cljs code and else for Clojure code.
 * https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ
 */
ysera.test.if_cljs = (function ysera$test$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(ysera.test.cljs_env_QMARK_.call(null,_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
ysera.test.if_cljs.cljs$lang$macro = true;

var ret__4565__auto___24343 = (function (){
ysera.test.deftest = (function ysera$test$deftest(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24344 = arguments.length;
var i__4532__auto___24345 = (0);
while(true){
if((i__4532__auto___24345 < len__4531__auto___24344)){
args__4534__auto__.push((arguments[i__4532__auto___24345]));

var G__24346 = (i__4532__auto___24345 + (1));
i__4532__auto___24345 = G__24346;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return ysera.test.deftest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

ysera.test.deftest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","deftest","clojure.test/deftest",-437170741,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),body))),null,(1),null)))));
});

ysera.test.deftest.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ysera.test.deftest.cljs$lang$applyTo = (function (seq24339){
var G__24340 = cljs.core.first.call(null,seq24339);
var seq24339__$1 = cljs.core.next.call(null,seq24339);
var G__24341 = cljs.core.first.call(null,seq24339__$1);
var seq24339__$2 = cljs.core.next.call(null,seq24339__$1);
var G__24342 = cljs.core.first.call(null,seq24339__$2);
var seq24339__$3 = cljs.core.next.call(null,seq24339__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24340,G__24341,G__24342,seq24339__$3);
});

return null;
})()
;
ysera.test.deftest.cljs$lang$macro = true;

var ret__4565__auto___24347 = ysera.test.is = (function ysera$test$is(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","is","clojure.test/is",99955657,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))));
});
ysera.test.is.cljs$lang$macro = true;

var ret__4565__auto___24348 = ysera.test.testing = (function ysera$test$testing(_AMPERSAND_form,_AMPERSAND_env,string,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","testing","clojure.test/testing",2032820290,null),null,(1),null)),(new cljs.core.List(null,string,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});
ysera.test.testing.cljs$lang$macro = true;

var ret__4565__auto___24352 = ysera.test.is_EQ_ = (function ysera$test$is_EQ_(_AMPERSAND_form,_AMPERSAND_env,actual,expected){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__24349__auto__","actual__24349__auto__",873045638,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__24350__auto__","expected__24350__auto__",787018678,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"equal__24351__auto__","equal__24351__auto__",2075945455,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__24349__auto__","actual__24349__auto__",873045638,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__24350__auto__","expected__24350__auto__",787018678,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"equal__24351__auto__","equal__24351__auto__",2075945455,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Actual:\t\t",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__24349__auto__","actual__24349__auto__",873045638,null),null,(1),null)),(new cljs.core.List(null,"\nExpected:\t",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__24350__auto__","expected__24350__auto__",787018678,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","is","clojure.test/is",99955657,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__24349__auto__","actual__24349__auto__",873045638,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__24350__auto__","expected__24350__auto__",787018678,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
ysera.test.is_EQ_.cljs$lang$macro = true;

var ret__4565__auto___24353 = ysera.test.is_not = (function ysera$test$is_not(_AMPERSAND_form,_AMPERSAND_env,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","is","clojure.test/is",99955657,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
ysera.test.is_not.cljs$lang$macro = true;

var ret__4565__auto___24355 = ysera.test.error_QMARK_ = (function ysera$test$error_QMARK_(_AMPERSAND_form,_AMPERSAND_env,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","if-cljs","ysera.test/if-cljs",1739408096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"Not implemented.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,"An error was expected.",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","is","clojure.test/is",99955657,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ysera.test","Exception","ysera.test/Exception",897558672,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__24354__auto__","e__24354__auto__",1158325029,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.test","is","clojure.test/is",99955657,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
ysera.test.error_QMARK_.cljs$lang$macro = true;


//# sourceMappingURL=test.js.map?rel=1543694770439
