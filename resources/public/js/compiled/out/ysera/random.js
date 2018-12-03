// Compiled by ClojureScript 1.10.339 {}
goog.provide('ysera.random');
goog.require('cljs.core');
goog.require('ysera.test');
goog.require('ysera.collections');
ysera.random.get_pseudo_random_number = (function ysera$random$get_pseudo_random_number(seed){
var xor_right = (function (x,n){
return (x ^ (x >> n));
});
var xor_left = ((function (xor_right){
return (function (x,n){
return (x ^ (x << n));
});})(xor_right))
;
return ((1) + xor_left.call(null,xor_right.call(null,xor_left.call(null,seed,(21)),(35)),(4)));
});
ysera.random.get_random_int = (function ysera$random$get_random_int(seed,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ysera.random.get_pseudo_random_number.call(null,seed),cljs.core.mod.call(null,seed,max)], null);
});
/**
 * Returns a random element of the collection. Returns the tuple [state result].
 */
ysera.random.random_nth = (function ysera$random$random_nth(seed,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,null], null);
} else {
var vec__24363 = ysera.random.get_random_int.call(null,seed,cljs.core.count.call(null,coll));
var new_seed = cljs.core.nth.call(null,vec__24363,(0),null);
var random_number = cljs.core.nth.call(null,vec__24363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.nth.call(null,coll,random_number)], null);
}
});
ysera.random.random_nth.cljs$lang$test = (function (){
ysera.test.is_EQ_.call(null,ysera.random.random_nth.call(null,(0),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"a"], null));

return ysera.test.is_EQ_.call(null,ysera.random.random_nth.call(null,(0),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null));
});
/**
 * Takes (at most) n different random elements from the collection. Returns the tuple [state result].
 *  If the collection contains less elements than n, all elements will be returned in a random order.
 */
ysera.random.take_n_random = (function ysera$random$take_n_random(seed,n,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,null], null);
} else {
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,coll))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,coll], null);
} else {
var vec__24366 = cljs.core.reduce.call(null,(function (p__24369,_){
var vec__24370 = p__24369;
var seed__$1 = cljs.core.nth.call(null,vec__24370,(0),null);
var result = cljs.core.nth.call(null,vec__24370,(1),null);
var rest = cljs.core.nth.call(null,vec__24370,(2),null);
var vec__24373 = ysera.random.random_nth.call(null,seed__$1,rest);
var seed__$2 = cljs.core.nth.call(null,vec__24373,(0),null);
var el = cljs.core.nth.call(null,vec__24373,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,result,el),ysera.collections.remove_one.call(null,rest,el)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,n));
var new_seed = cljs.core.nth.call(null,vec__24366,(0),null);
var result = cljs.core.nth.call(null,vec__24366,(1),null);
var _ = cljs.core.nth.call(null,vec__24366,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.remove.call(null,cljs.core.nil_QMARK_,result)], null);

}
}
});
ysera.random.take_n_random.cljs$lang$test = (function (){
ysera.test.is_EQ_.call(null,ysera.random.take_n_random.call(null,(0),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1130298060341683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c","b"], null)], null));

ysera.test.is_EQ_.call(null,ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null)], null));

ysera.test.is_EQ_.call(null,ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2260595942425364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null)], null));

ysera.test.is_EQ_.call(null,ysera.random.take_n_random.call(null,(2),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71303203),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null));

return ysera.test.is_EQ_.call(null,ysera.random.take_n_random.call(null,(2),(3),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),null], null));
});
ysera.random.shuffle_with_seed = (function ysera$random$shuffle_with_seed(seed,coll){
var vec__24376 = cljs.core.reduce.call(null,(function (p__24379,_){
var vec__24380 = p__24379;
var seed__$1 = cljs.core.nth.call(null,vec__24380,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__24380,(1),null);
var coll__$1 = cljs.core.nth.call(null,vec__24380,(2),null);
var vec__24383 = ysera.random.random_nth.call(null,seed__$1,coll__$1);
var seed__$2 = cljs.core.nth.call(null,vec__24383,(0),null);
var item = cljs.core.nth.call(null,vec__24383,(1),null);
var coll__$2 = cljs.core.remove.call(null,((function (vec__24383,seed__$2,item,vec__24380,seed__$1,shuffled_coll,coll__$1){
return (function (i){
return cljs.core._EQ_.call(null,i,item);
});})(vec__24383,seed__$2,item,vec__24380,seed__$1,shuffled_coll,coll__$1))
,coll__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,shuffled_coll,item),coll__$2], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,cljs.core.count.call(null,coll)));
var new_seed = cljs.core.nth.call(null,vec__24376,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__24376,(1),null);
var _ = cljs.core.nth.call(null,vec__24376,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,shuffled_coll], null);
});
ysera.random.shuffle_with_seed.cljs$lang$test = (function (){
return ysera.test.is_EQ_.call(null,ysera.random.shuffle_with_seed.call(null,(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",new cljs.core.Keyword(null,"b","b",1482224470),(3),"d"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9136436700791295257),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3),"d","a"], null)], null));
});

//# sourceMappingURL=random.js.map?rel=1543694770500
