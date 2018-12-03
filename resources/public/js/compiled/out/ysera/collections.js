// Compiled by ClojureScript 1.10.339 {}
goog.provide('ysera.collections');
goog.require('cljs.core');
goog.require('ysera.test');
/**
 * Gets the index of the given element of the collection.
 */
ysera.collections.index_of = (function ysera$collections$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (y,z){
if(cljs.core._EQ_.call(null,z,x)){
return y;
} else {
return null;
}
}),coll));
});
ysera.collections.index_of.cljs$lang$test = (function (){
ysera.test.is_EQ_.call(null,ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"b"),(1));

ysera.test.is_EQ_.call(null,ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"z"),null);

return ysera.test.is_EQ_.call(null,ysera.collections.index_of.call(null,cljs.core.PersistentVector.EMPTY,"b"),null);
});
/**
 * Determines if the given element is contained in the given collection.
 */
ysera.collections.seq_contains_QMARK_ = (function ysera$collections$seq_contains_QMARK_(coll,x){
return !((ysera.collections.index_of.call(null,coll,x) == null));
});
ysera.collections.seq_contains_QMARK_.cljs$lang$test = (function (){
return ysera.test.is.call(null,ysera.collections.seq_contains_QMARK_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"));
});
/**
 * Removes one instance of the given element in the given collection.
 */
ysera.collections.remove_one = (function ysera$collections$remove_one(coll,x){
var vec__24358 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,x),coll);
var n = cljs.core.nth.call(null,vec__24358,(0),null);
var m = cljs.core.nth.call(null,vec__24358,(1),null);
return cljs.core.concat.call(null,n,cljs.core.rest.call(null,m));
});
ysera.collections.remove_one.cljs$lang$test = (function (){
ysera.test.is_EQ_.call(null,ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","c"], null));

return ysera.test.is_EQ_.call(null,ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","a","c"], null),"a"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c"], null));
});

//# sourceMappingURL=collections.js.map?rel=1543694770465
