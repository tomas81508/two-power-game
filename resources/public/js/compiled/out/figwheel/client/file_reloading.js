// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31151_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31151_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31152 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31153 = null;
var count__31154 = (0);
var i__31155 = (0);
while(true){
if((i__31155 < count__31154)){
var n = cljs.core._nth.call(null,chunk__31153,i__31155);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31156 = seq__31152;
var G__31157 = chunk__31153;
var G__31158 = count__31154;
var G__31159 = (i__31155 + (1));
seq__31152 = G__31156;
chunk__31153 = G__31157;
count__31154 = G__31158;
i__31155 = G__31159;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31152);
if(temp__5457__auto__){
var seq__31152__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31152__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31152__$1);
var G__31160 = cljs.core.chunk_rest.call(null,seq__31152__$1);
var G__31161 = c__4351__auto__;
var G__31162 = cljs.core.count.call(null,c__4351__auto__);
var G__31163 = (0);
seq__31152 = G__31160;
chunk__31153 = G__31161;
count__31154 = G__31162;
i__31155 = G__31163;
continue;
} else {
var n = cljs.core.first.call(null,seq__31152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31164 = cljs.core.next.call(null,seq__31152__$1);
var G__31165 = null;
var G__31166 = (0);
var G__31167 = (0);
seq__31152 = G__31164;
chunk__31153 = G__31165;
count__31154 = G__31166;
i__31155 = G__31167;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31168){
var vec__31169 = p__31168;
var _ = cljs.core.nth.call(null,vec__31169,(0),null);
var v = cljs.core.nth.call(null,vec__31169,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__31172){
var vec__31173 = p__31172;
var k = cljs.core.nth.call(null,vec__31173,(0),null);
var v = cljs.core.nth.call(null,vec__31173,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31185_31193 = cljs.core.seq.call(null,deps);
var chunk__31186_31194 = null;
var count__31187_31195 = (0);
var i__31188_31196 = (0);
while(true){
if((i__31188_31196 < count__31187_31195)){
var dep_31197 = cljs.core._nth.call(null,chunk__31186_31194,i__31188_31196);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_31197;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31197));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31197,(depth + (1)),state);
} else {
}


var G__31198 = seq__31185_31193;
var G__31199 = chunk__31186_31194;
var G__31200 = count__31187_31195;
var G__31201 = (i__31188_31196 + (1));
seq__31185_31193 = G__31198;
chunk__31186_31194 = G__31199;
count__31187_31195 = G__31200;
i__31188_31196 = G__31201;
continue;
} else {
var temp__5457__auto___31202 = cljs.core.seq.call(null,seq__31185_31193);
if(temp__5457__auto___31202){
var seq__31185_31203__$1 = temp__5457__auto___31202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31185_31203__$1)){
var c__4351__auto___31204 = cljs.core.chunk_first.call(null,seq__31185_31203__$1);
var G__31205 = cljs.core.chunk_rest.call(null,seq__31185_31203__$1);
var G__31206 = c__4351__auto___31204;
var G__31207 = cljs.core.count.call(null,c__4351__auto___31204);
var G__31208 = (0);
seq__31185_31193 = G__31205;
chunk__31186_31194 = G__31206;
count__31187_31195 = G__31207;
i__31188_31196 = G__31208;
continue;
} else {
var dep_31209 = cljs.core.first.call(null,seq__31185_31203__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_31209;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31209));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31209,(depth + (1)),state);
} else {
}


var G__31210 = cljs.core.next.call(null,seq__31185_31203__$1);
var G__31211 = null;
var G__31212 = (0);
var G__31213 = (0);
seq__31185_31193 = G__31210;
chunk__31186_31194 = G__31211;
count__31187_31195 = G__31212;
i__31188_31196 = G__31213;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31189){
var vec__31190 = p__31189;
var seq__31191 = cljs.core.seq.call(null,vec__31190);
var first__31192 = cljs.core.first.call(null,seq__31191);
var seq__31191__$1 = cljs.core.next.call(null,seq__31191);
var x = first__31192;
var xs = seq__31191__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31190,seq__31191,first__31192,seq__31191__$1,x,xs,get_deps__$1){
return (function (p1__31176_SHARP_){
return clojure.set.difference.call(null,p1__31176_SHARP_,x);
});})(vec__31190,seq__31191,first__31192,seq__31191__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31214 = cljs.core.seq.call(null,provides);
var chunk__31215 = null;
var count__31216 = (0);
var i__31217 = (0);
while(true){
if((i__31217 < count__31216)){
var prov = cljs.core._nth.call(null,chunk__31215,i__31217);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31218_31226 = cljs.core.seq.call(null,requires);
var chunk__31219_31227 = null;
var count__31220_31228 = (0);
var i__31221_31229 = (0);
while(true){
if((i__31221_31229 < count__31220_31228)){
var req_31230 = cljs.core._nth.call(null,chunk__31219_31227,i__31221_31229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31230,prov);


var G__31231 = seq__31218_31226;
var G__31232 = chunk__31219_31227;
var G__31233 = count__31220_31228;
var G__31234 = (i__31221_31229 + (1));
seq__31218_31226 = G__31231;
chunk__31219_31227 = G__31232;
count__31220_31228 = G__31233;
i__31221_31229 = G__31234;
continue;
} else {
var temp__5457__auto___31235 = cljs.core.seq.call(null,seq__31218_31226);
if(temp__5457__auto___31235){
var seq__31218_31236__$1 = temp__5457__auto___31235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31218_31236__$1)){
var c__4351__auto___31237 = cljs.core.chunk_first.call(null,seq__31218_31236__$1);
var G__31238 = cljs.core.chunk_rest.call(null,seq__31218_31236__$1);
var G__31239 = c__4351__auto___31237;
var G__31240 = cljs.core.count.call(null,c__4351__auto___31237);
var G__31241 = (0);
seq__31218_31226 = G__31238;
chunk__31219_31227 = G__31239;
count__31220_31228 = G__31240;
i__31221_31229 = G__31241;
continue;
} else {
var req_31242 = cljs.core.first.call(null,seq__31218_31236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31242,prov);


var G__31243 = cljs.core.next.call(null,seq__31218_31236__$1);
var G__31244 = null;
var G__31245 = (0);
var G__31246 = (0);
seq__31218_31226 = G__31243;
chunk__31219_31227 = G__31244;
count__31220_31228 = G__31245;
i__31221_31229 = G__31246;
continue;
}
} else {
}
}
break;
}


var G__31247 = seq__31214;
var G__31248 = chunk__31215;
var G__31249 = count__31216;
var G__31250 = (i__31217 + (1));
seq__31214 = G__31247;
chunk__31215 = G__31248;
count__31216 = G__31249;
i__31217 = G__31250;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31214);
if(temp__5457__auto__){
var seq__31214__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31214__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31214__$1);
var G__31251 = cljs.core.chunk_rest.call(null,seq__31214__$1);
var G__31252 = c__4351__auto__;
var G__31253 = cljs.core.count.call(null,c__4351__auto__);
var G__31254 = (0);
seq__31214 = G__31251;
chunk__31215 = G__31252;
count__31216 = G__31253;
i__31217 = G__31254;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31214__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31222_31255 = cljs.core.seq.call(null,requires);
var chunk__31223_31256 = null;
var count__31224_31257 = (0);
var i__31225_31258 = (0);
while(true){
if((i__31225_31258 < count__31224_31257)){
var req_31259 = cljs.core._nth.call(null,chunk__31223_31256,i__31225_31258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31259,prov);


var G__31260 = seq__31222_31255;
var G__31261 = chunk__31223_31256;
var G__31262 = count__31224_31257;
var G__31263 = (i__31225_31258 + (1));
seq__31222_31255 = G__31260;
chunk__31223_31256 = G__31261;
count__31224_31257 = G__31262;
i__31225_31258 = G__31263;
continue;
} else {
var temp__5457__auto___31264__$1 = cljs.core.seq.call(null,seq__31222_31255);
if(temp__5457__auto___31264__$1){
var seq__31222_31265__$1 = temp__5457__auto___31264__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31222_31265__$1)){
var c__4351__auto___31266 = cljs.core.chunk_first.call(null,seq__31222_31265__$1);
var G__31267 = cljs.core.chunk_rest.call(null,seq__31222_31265__$1);
var G__31268 = c__4351__auto___31266;
var G__31269 = cljs.core.count.call(null,c__4351__auto___31266);
var G__31270 = (0);
seq__31222_31255 = G__31267;
chunk__31223_31256 = G__31268;
count__31224_31257 = G__31269;
i__31225_31258 = G__31270;
continue;
} else {
var req_31271 = cljs.core.first.call(null,seq__31222_31265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31271,prov);


var G__31272 = cljs.core.next.call(null,seq__31222_31265__$1);
var G__31273 = null;
var G__31274 = (0);
var G__31275 = (0);
seq__31222_31255 = G__31272;
chunk__31223_31256 = G__31273;
count__31224_31257 = G__31274;
i__31225_31258 = G__31275;
continue;
}
} else {
}
}
break;
}


var G__31276 = cljs.core.next.call(null,seq__31214__$1);
var G__31277 = null;
var G__31278 = (0);
var G__31279 = (0);
seq__31214 = G__31276;
chunk__31215 = G__31277;
count__31216 = G__31278;
i__31217 = G__31279;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31280_31284 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31281_31285 = null;
var count__31282_31286 = (0);
var i__31283_31287 = (0);
while(true){
if((i__31283_31287 < count__31282_31286)){
var ns_31288 = cljs.core._nth.call(null,chunk__31281_31285,i__31283_31287);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31288);


var G__31289 = seq__31280_31284;
var G__31290 = chunk__31281_31285;
var G__31291 = count__31282_31286;
var G__31292 = (i__31283_31287 + (1));
seq__31280_31284 = G__31289;
chunk__31281_31285 = G__31290;
count__31282_31286 = G__31291;
i__31283_31287 = G__31292;
continue;
} else {
var temp__5457__auto___31293 = cljs.core.seq.call(null,seq__31280_31284);
if(temp__5457__auto___31293){
var seq__31280_31294__$1 = temp__5457__auto___31293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31280_31294__$1)){
var c__4351__auto___31295 = cljs.core.chunk_first.call(null,seq__31280_31294__$1);
var G__31296 = cljs.core.chunk_rest.call(null,seq__31280_31294__$1);
var G__31297 = c__4351__auto___31295;
var G__31298 = cljs.core.count.call(null,c__4351__auto___31295);
var G__31299 = (0);
seq__31280_31284 = G__31296;
chunk__31281_31285 = G__31297;
count__31282_31286 = G__31298;
i__31283_31287 = G__31299;
continue;
} else {
var ns_31300 = cljs.core.first.call(null,seq__31280_31294__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31300);


var G__31301 = cljs.core.next.call(null,seq__31280_31294__$1);
var G__31302 = null;
var G__31303 = (0);
var G__31304 = (0);
seq__31280_31284 = G__31301;
chunk__31281_31285 = G__31302;
count__31282_31286 = G__31303;
i__31283_31287 = G__31304;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31305__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31306__i = 0, G__31306__a = new Array(arguments.length -  0);
while (G__31306__i < G__31306__a.length) {G__31306__a[G__31306__i] = arguments[G__31306__i + 0]; ++G__31306__i;}
  args = new cljs.core.IndexedSeq(G__31306__a,0,null);
} 
return G__31305__delegate.call(this,args);};
G__31305.cljs$lang$maxFixedArity = 0;
G__31305.cljs$lang$applyTo = (function (arglist__31307){
var args = cljs.core.seq(arglist__31307);
return G__31305__delegate(args);
});
G__31305.cljs$core$IFn$_invoke$arity$variadic = G__31305__delegate;
return G__31305;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31308_SHARP_,p2__31309_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31308_SHARP_)].join('')),p2__31309_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31310_SHARP_,p2__31311_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31310_SHARP_)].join(''),p2__31311_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31312 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31312.addCallback(((function (G__31312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31312))
);

G__31312.addErrback(((function (G__31312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31312))
);

return G__31312;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31313){if((e31313 instanceof Error)){
var e = e31313;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31313;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31314){if((e31314 instanceof Error)){
var e = e31314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31314;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31315 = cljs.core._EQ_;
var expr__31316 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31315.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31316))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31315.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31316))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31315.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31316))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31315,expr__31316){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31315,expr__31316))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31318,callback){
var map__31319 = p__31318;
var map__31319__$1 = ((((!((map__31319 == null)))?(((((map__31319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31319):map__31319);
var file_msg = map__31319__$1;
var request_url = cljs.core.get.call(null,map__31319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31319,map__31319__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31319,map__31319__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__){
return (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (7))){
var inst_31353 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31359_31385 = state_31357__$1;
(statearr_31359_31385[(2)] = inst_31353);

(statearr_31359_31385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (1))){
var state_31357__$1 = state_31357;
var statearr_31360_31386 = state_31357__$1;
(statearr_31360_31386[(2)] = null);

(statearr_31360_31386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (4))){
var inst_31323 = (state_31357[(7)]);
var inst_31323__$1 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31361 = state_31357;
(statearr_31361[(7)] = inst_31323__$1);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31323__$1)){
var statearr_31362_31387 = state_31357__$1;
(statearr_31362_31387[(1)] = (5));

} else {
var statearr_31363_31388 = state_31357__$1;
(statearr_31363_31388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (15))){
var inst_31338 = (state_31357[(8)]);
var inst_31336 = (state_31357[(9)]);
var inst_31340 = inst_31338.call(null,inst_31336);
var state_31357__$1 = state_31357;
var statearr_31364_31389 = state_31357__$1;
(statearr_31364_31389[(2)] = inst_31340);

(statearr_31364_31389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (13))){
var inst_31347 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31365_31390 = state_31357__$1;
(statearr_31365_31390[(2)] = inst_31347);

(statearr_31365_31390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (6))){
var state_31357__$1 = state_31357;
var statearr_31366_31391 = state_31357__$1;
(statearr_31366_31391[(2)] = null);

(statearr_31366_31391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (17))){
var inst_31344 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31367_31392 = state_31357__$1;
(statearr_31367_31392[(2)] = inst_31344);

(statearr_31367_31392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (3))){
var inst_31355 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (12))){
var state_31357__$1 = state_31357;
var statearr_31368_31393 = state_31357__$1;
(statearr_31368_31393[(2)] = null);

(statearr_31368_31393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (2))){
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31358 === (11))){
var inst_31328 = (state_31357[(10)]);
var inst_31334 = figwheel.client.file_reloading.blocking_load.call(null,inst_31328);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31357__$1,(14),inst_31334);
} else {
if((state_val_31358 === (9))){
var inst_31328 = (state_31357[(10)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31328)){
var statearr_31369_31394 = state_31357__$1;
(statearr_31369_31394[(1)] = (11));

} else {
var statearr_31370_31395 = state_31357__$1;
(statearr_31370_31395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var inst_31323 = (state_31357[(7)]);
var inst_31329 = (state_31357[(11)]);
var inst_31328 = cljs.core.nth.call(null,inst_31323,(0),null);
var inst_31329__$1 = cljs.core.nth.call(null,inst_31323,(1),null);
var state_31357__$1 = (function (){var statearr_31371 = state_31357;
(statearr_31371[(10)] = inst_31328);

(statearr_31371[(11)] = inst_31329__$1);

return statearr_31371;
})();
if(cljs.core.truth_(inst_31329__$1)){
var statearr_31372_31396 = state_31357__$1;
(statearr_31372_31396[(1)] = (8));

} else {
var statearr_31373_31397 = state_31357__$1;
(statearr_31373_31397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (14))){
var inst_31338 = (state_31357[(8)]);
var inst_31328 = (state_31357[(10)]);
var inst_31336 = (state_31357[(2)]);
var inst_31337 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31338__$1 = cljs.core.get.call(null,inst_31337,inst_31328);
var state_31357__$1 = (function (){var statearr_31374 = state_31357;
(statearr_31374[(8)] = inst_31338__$1);

(statearr_31374[(9)] = inst_31336);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31338__$1)){
var statearr_31375_31398 = state_31357__$1;
(statearr_31375_31398[(1)] = (15));

} else {
var statearr_31376_31399 = state_31357__$1;
(statearr_31376_31399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (16))){
var inst_31336 = (state_31357[(9)]);
var inst_31342 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31336);
var state_31357__$1 = state_31357;
var statearr_31377_31400 = state_31357__$1;
(statearr_31377_31400[(2)] = inst_31342);

(statearr_31377_31400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (10))){
var inst_31349 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31378 = state_31357;
(statearr_31378[(12)] = inst_31349);

return statearr_31378;
})();
var statearr_31379_31401 = state_31357__$1;
(statearr_31379_31401[(2)] = null);

(statearr_31379_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31329 = (state_31357[(11)]);
var inst_31331 = eval(inst_31329);
var state_31357__$1 = state_31357;
var statearr_31380_31402 = state_31357__$1;
(statearr_31380_31402[(2)] = inst_31331);

(statearr_31380_31402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__29042__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28952__auto__ = null;
var figwheel$client$file_reloading$state_machine__28952__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = figwheel$client$file_reloading$state_machine__28952__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var figwheel$client$file_reloading$state_machine__28952__auto____1 = (function (state_31357){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_31357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__28955__auto__ = e31382;
var statearr_31383_31403 = state_31357;
(statearr_31383_31403[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31404 = state_31357;
state_31357 = G__31404;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28952__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28952__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28952__auto____0;
figwheel$client$file_reloading$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28952__auto____1;
return figwheel$client$file_reloading$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__))
})();
var state__29044__auto__ = (function (){var statearr_31384 = f__29043__auto__.call(null);
(statearr_31384[(6)] = c__29042__auto__);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__))
);

return c__29042__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31406 = arguments.length;
switch (G__31406) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31408,callback){
var map__31409 = p__31408;
var map__31409__$1 = ((((!((map__31409 == null)))?(((((map__31409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);
var file_msg = map__31409__$1;
var namespace = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31409,map__31409__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31409,map__31409__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31411){
var map__31412 = p__31411;
var map__31412__$1 = ((((!((map__31412 == null)))?(((((map__31412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31412):map__31412);
var file_msg = map__31412__$1;
var namespace = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31414){
var map__31415 = p__31414;
var map__31415__$1 = ((((!((map__31415 == null)))?(((((map__31415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31415):map__31415);
var file_msg = map__31415__$1;
var namespace = cljs.core.get.call(null,map__31415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31417,callback){
var map__31418 = p__31417;
var map__31418__$1 = ((((!((map__31418 == null)))?(((((map__31418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31418):map__31418);
var file_msg = map__31418__$1;
var request_url = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29042__auto___31468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___31468,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___31468,out){
return (function (state_31453){
var state_val_31454 = (state_31453[(1)]);
if((state_val_31454 === (1))){
var inst_31427 = cljs.core.seq.call(null,files);
var inst_31428 = cljs.core.first.call(null,inst_31427);
var inst_31429 = cljs.core.next.call(null,inst_31427);
var inst_31430 = files;
var state_31453__$1 = (function (){var statearr_31455 = state_31453;
(statearr_31455[(7)] = inst_31429);

(statearr_31455[(8)] = inst_31430);

(statearr_31455[(9)] = inst_31428);

return statearr_31455;
})();
var statearr_31456_31469 = state_31453__$1;
(statearr_31456_31469[(2)] = null);

(statearr_31456_31469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (2))){
var inst_31430 = (state_31453[(8)]);
var inst_31436 = (state_31453[(10)]);
var inst_31435 = cljs.core.seq.call(null,inst_31430);
var inst_31436__$1 = cljs.core.first.call(null,inst_31435);
var inst_31437 = cljs.core.next.call(null,inst_31435);
var inst_31438 = (inst_31436__$1 == null);
var inst_31439 = cljs.core.not.call(null,inst_31438);
var state_31453__$1 = (function (){var statearr_31457 = state_31453;
(statearr_31457[(11)] = inst_31437);

(statearr_31457[(10)] = inst_31436__$1);

return statearr_31457;
})();
if(inst_31439){
var statearr_31458_31470 = state_31453__$1;
(statearr_31458_31470[(1)] = (4));

} else {
var statearr_31459_31471 = state_31453__$1;
(statearr_31459_31471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (3))){
var inst_31451 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31453__$1,inst_31451);
} else {
if((state_val_31454 === (4))){
var inst_31436 = (state_31453[(10)]);
var inst_31441 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31436);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31453__$1,(7),inst_31441);
} else {
if((state_val_31454 === (5))){
var inst_31447 = cljs.core.async.close_BANG_.call(null,out);
var state_31453__$1 = state_31453;
var statearr_31460_31472 = state_31453__$1;
(statearr_31460_31472[(2)] = inst_31447);

(statearr_31460_31472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (6))){
var inst_31449 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31461_31473 = state_31453__$1;
(statearr_31461_31473[(2)] = inst_31449);

(statearr_31461_31473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (7))){
var inst_31437 = (state_31453[(11)]);
var inst_31443 = (state_31453[(2)]);
var inst_31444 = cljs.core.async.put_BANG_.call(null,out,inst_31443);
var inst_31430 = inst_31437;
var state_31453__$1 = (function (){var statearr_31462 = state_31453;
(statearr_31462[(12)] = inst_31444);

(statearr_31462[(8)] = inst_31430);

return statearr_31462;
})();
var statearr_31463_31474 = state_31453__$1;
(statearr_31463_31474[(2)] = null);

(statearr_31463_31474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29042__auto___31468,out))
;
return ((function (switch__28951__auto__,c__29042__auto___31468,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____0 = (function (){
var statearr_31464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31464[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__);

(statearr_31464[(1)] = (1));

return statearr_31464;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____1 = (function (state_31453){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_31453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e31465){if((e31465 instanceof Object)){
var ex__28955__auto__ = e31465;
var statearr_31466_31475 = state_31453;
(statearr_31466_31475[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31476 = state_31453;
state_31453 = G__31476;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__ = function(state_31453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____1.call(this,state_31453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___31468,out))
})();
var state__29044__auto__ = (function (){var statearr_31467 = f__29043__auto__.call(null);
(statearr_31467[(6)] = c__29042__auto___31468);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___31468,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31477,opts){
var map__31478 = p__31477;
var map__31478__$1 = ((((!((map__31478 == null)))?(((((map__31478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31478):map__31478);
var eval_body = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31480){var e = e31480;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31481_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31482){
var vec__31483 = p__31482;
var k = cljs.core.nth.call(null,vec__31483,(0),null);
var v = cljs.core.nth.call(null,vec__31483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31486){
var vec__31487 = p__31486;
var k = cljs.core.nth.call(null,vec__31487,(0),null);
var v = cljs.core.nth.call(null,vec__31487,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31493,p__31494){
var map__31495 = p__31493;
var map__31495__$1 = ((((!((map__31495 == null)))?(((((map__31495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31495):map__31495);
var opts = map__31495__$1;
var before_jsload = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31496 = p__31494;
var map__31496__$1 = ((((!((map__31496 == null)))?(((((map__31496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31496):map__31496);
var msg = map__31496__$1;
var files = cljs.core.get.call(null,map__31496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31496__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31496__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (7))){
var inst_31512 = (state_31650[(7)]);
var inst_31513 = (state_31650[(8)]);
var inst_31511 = (state_31650[(9)]);
var inst_31510 = (state_31650[(10)]);
var inst_31518 = cljs.core._nth.call(null,inst_31511,inst_31513);
var inst_31519 = figwheel.client.file_reloading.eval_body.call(null,inst_31518,opts);
var inst_31520 = (inst_31513 + (1));
var tmp31652 = inst_31512;
var tmp31653 = inst_31511;
var tmp31654 = inst_31510;
var inst_31510__$1 = tmp31654;
var inst_31511__$1 = tmp31653;
var inst_31512__$1 = tmp31652;
var inst_31513__$1 = inst_31520;
var state_31650__$1 = (function (){var statearr_31655 = state_31650;
(statearr_31655[(7)] = inst_31512__$1);

(statearr_31655[(8)] = inst_31513__$1);

(statearr_31655[(9)] = inst_31511__$1);

(statearr_31655[(10)] = inst_31510__$1);

(statearr_31655[(11)] = inst_31519);

return statearr_31655;
})();
var statearr_31656_31739 = state_31650__$1;
(statearr_31656_31739[(2)] = null);

(statearr_31656_31739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (20))){
var inst_31553 = (state_31650[(12)]);
var inst_31561 = figwheel.client.file_reloading.sort_files.call(null,inst_31553);
var state_31650__$1 = state_31650;
var statearr_31657_31740 = state_31650__$1;
(statearr_31657_31740[(2)] = inst_31561);

(statearr_31657_31740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (27))){
var state_31650__$1 = state_31650;
var statearr_31658_31741 = state_31650__$1;
(statearr_31658_31741[(2)] = null);

(statearr_31658_31741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (1))){
var inst_31502 = (state_31650[(13)]);
var inst_31499 = before_jsload.call(null,files);
var inst_31500 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31501 = (function (){return ((function (inst_31502,inst_31499,inst_31500,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31490_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31490_SHARP_);
});
;})(inst_31502,inst_31499,inst_31500,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31502__$1 = cljs.core.filter.call(null,inst_31501,files);
var inst_31503 = cljs.core.not_empty.call(null,inst_31502__$1);
var state_31650__$1 = (function (){var statearr_31659 = state_31650;
(statearr_31659[(14)] = inst_31500);

(statearr_31659[(13)] = inst_31502__$1);

(statearr_31659[(15)] = inst_31499);

return statearr_31659;
})();
if(cljs.core.truth_(inst_31503)){
var statearr_31660_31742 = state_31650__$1;
(statearr_31660_31742[(1)] = (2));

} else {
var statearr_31661_31743 = state_31650__$1;
(statearr_31661_31743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (24))){
var state_31650__$1 = state_31650;
var statearr_31662_31744 = state_31650__$1;
(statearr_31662_31744[(2)] = null);

(statearr_31662_31744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (39))){
var inst_31603 = (state_31650[(16)]);
var state_31650__$1 = state_31650;
var statearr_31663_31745 = state_31650__$1;
(statearr_31663_31745[(2)] = inst_31603);

(statearr_31663_31745[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (46))){
var inst_31645 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31664_31746 = state_31650__$1;
(statearr_31664_31746[(2)] = inst_31645);

(statearr_31664_31746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (4))){
var inst_31547 = (state_31650[(2)]);
var inst_31548 = cljs.core.List.EMPTY;
var inst_31549 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31548);
var inst_31550 = (function (){return ((function (inst_31547,inst_31548,inst_31549,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31491_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31491_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31491_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31491_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_31547,inst_31548,inst_31549,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31551 = cljs.core.filter.call(null,inst_31550,files);
var inst_31552 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31553 = cljs.core.concat.call(null,inst_31551,inst_31552);
var state_31650__$1 = (function (){var statearr_31665 = state_31650;
(statearr_31665[(12)] = inst_31553);

(statearr_31665[(17)] = inst_31549);

(statearr_31665[(18)] = inst_31547);

return statearr_31665;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31666_31747 = state_31650__$1;
(statearr_31666_31747[(1)] = (16));

} else {
var statearr_31667_31748 = state_31650__$1;
(statearr_31667_31748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (15))){
var inst_31537 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31668_31749 = state_31650__$1;
(statearr_31668_31749[(2)] = inst_31537);

(statearr_31668_31749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (21))){
var inst_31563 = (state_31650[(19)]);
var inst_31563__$1 = (state_31650[(2)]);
var inst_31564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31563__$1);
var state_31650__$1 = (function (){var statearr_31669 = state_31650;
(statearr_31669[(19)] = inst_31563__$1);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31650__$1,(22),inst_31564);
} else {
if((state_val_31651 === (31))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (32))){
var inst_31603 = (state_31650[(16)]);
var inst_31608 = inst_31603.cljs$lang$protocol_mask$partition0$;
var inst_31609 = (inst_31608 & (64));
var inst_31610 = inst_31603.cljs$core$ISeq$;
var inst_31611 = (cljs.core.PROTOCOL_SENTINEL === inst_31610);
var inst_31612 = ((inst_31609) || (inst_31611));
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31612)){
var statearr_31670_31750 = state_31650__$1;
(statearr_31670_31750[(1)] = (35));

} else {
var statearr_31671_31751 = state_31650__$1;
(statearr_31671_31751[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (40))){
var inst_31625 = (state_31650[(20)]);
var inst_31624 = (state_31650[(2)]);
var inst_31625__$1 = cljs.core.get.call(null,inst_31624,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31626 = cljs.core.get.call(null,inst_31624,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31627 = cljs.core.not_empty.call(null,inst_31625__$1);
var state_31650__$1 = (function (){var statearr_31672 = state_31650;
(statearr_31672[(20)] = inst_31625__$1);

(statearr_31672[(21)] = inst_31626);

return statearr_31672;
})();
if(cljs.core.truth_(inst_31627)){
var statearr_31673_31752 = state_31650__$1;
(statearr_31673_31752[(1)] = (41));

} else {
var statearr_31674_31753 = state_31650__$1;
(statearr_31674_31753[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (33))){
var state_31650__$1 = state_31650;
var statearr_31675_31754 = state_31650__$1;
(statearr_31675_31754[(2)] = false);

(statearr_31675_31754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (13))){
var inst_31523 = (state_31650[(22)]);
var inst_31527 = cljs.core.chunk_first.call(null,inst_31523);
var inst_31528 = cljs.core.chunk_rest.call(null,inst_31523);
var inst_31529 = cljs.core.count.call(null,inst_31527);
var inst_31510 = inst_31528;
var inst_31511 = inst_31527;
var inst_31512 = inst_31529;
var inst_31513 = (0);
var state_31650__$1 = (function (){var statearr_31676 = state_31650;
(statearr_31676[(7)] = inst_31512);

(statearr_31676[(8)] = inst_31513);

(statearr_31676[(9)] = inst_31511);

(statearr_31676[(10)] = inst_31510);

return statearr_31676;
})();
var statearr_31677_31755 = state_31650__$1;
(statearr_31677_31755[(2)] = null);

(statearr_31677_31755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (22))){
var inst_31567 = (state_31650[(23)]);
var inst_31563 = (state_31650[(19)]);
var inst_31566 = (state_31650[(24)]);
var inst_31571 = (state_31650[(25)]);
var inst_31566__$1 = (state_31650[(2)]);
var inst_31567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31566__$1);
var inst_31568 = (function (){var all_files = inst_31563;
var res_SINGLEQUOTE_ = inst_31566__$1;
var res = inst_31567__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31567,inst_31563,inst_31566,inst_31571,inst_31566__$1,inst_31567__$1,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31492_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31492_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31567,inst_31563,inst_31566,inst_31571,inst_31566__$1,inst_31567__$1,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31569 = cljs.core.filter.call(null,inst_31568,inst_31566__$1);
var inst_31570 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31570);
var inst_31572 = cljs.core.not_empty.call(null,inst_31571__$1);
var state_31650__$1 = (function (){var statearr_31678 = state_31650;
(statearr_31678[(23)] = inst_31567__$1);

(statearr_31678[(26)] = inst_31569);

(statearr_31678[(24)] = inst_31566__$1);

(statearr_31678[(25)] = inst_31571__$1);

return statearr_31678;
})();
if(cljs.core.truth_(inst_31572)){
var statearr_31679_31756 = state_31650__$1;
(statearr_31679_31756[(1)] = (23));

} else {
var statearr_31680_31757 = state_31650__$1;
(statearr_31680_31757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (36))){
var state_31650__$1 = state_31650;
var statearr_31681_31758 = state_31650__$1;
(statearr_31681_31758[(2)] = false);

(statearr_31681_31758[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (41))){
var inst_31625 = (state_31650[(20)]);
var inst_31629 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31630 = cljs.core.map.call(null,inst_31629,inst_31625);
var inst_31631 = cljs.core.pr_str.call(null,inst_31630);
var inst_31632 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31631)].join('');
var inst_31633 = figwheel.client.utils.log.call(null,inst_31632);
var state_31650__$1 = state_31650;
var statearr_31682_31759 = state_31650__$1;
(statearr_31682_31759[(2)] = inst_31633);

(statearr_31682_31759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (43))){
var inst_31626 = (state_31650[(21)]);
var inst_31636 = (state_31650[(2)]);
var inst_31637 = cljs.core.not_empty.call(null,inst_31626);
var state_31650__$1 = (function (){var statearr_31683 = state_31650;
(statearr_31683[(27)] = inst_31636);

return statearr_31683;
})();
if(cljs.core.truth_(inst_31637)){
var statearr_31684_31760 = state_31650__$1;
(statearr_31684_31760[(1)] = (44));

} else {
var statearr_31685_31761 = state_31650__$1;
(statearr_31685_31761[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (29))){
var inst_31567 = (state_31650[(23)]);
var inst_31563 = (state_31650[(19)]);
var inst_31569 = (state_31650[(26)]);
var inst_31566 = (state_31650[(24)]);
var inst_31571 = (state_31650[(25)]);
var inst_31603 = (state_31650[(16)]);
var inst_31599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31602 = (function (){var all_files = inst_31563;
var res_SINGLEQUOTE_ = inst_31566;
var res = inst_31567;
var files_not_loaded = inst_31569;
var dependencies_that_loaded = inst_31571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31603,inst_31599,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31601){
var map__31686 = p__31601;
var map__31686__$1 = ((((!((map__31686 == null)))?(((((map__31686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);
var namespace = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31603,inst_31599,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31603__$1 = cljs.core.group_by.call(null,inst_31602,inst_31569);
var inst_31605 = (inst_31603__$1 == null);
var inst_31606 = cljs.core.not.call(null,inst_31605);
var state_31650__$1 = (function (){var statearr_31688 = state_31650;
(statearr_31688[(28)] = inst_31599);

(statearr_31688[(16)] = inst_31603__$1);

return statearr_31688;
})();
if(inst_31606){
var statearr_31689_31762 = state_31650__$1;
(statearr_31689_31762[(1)] = (32));

} else {
var statearr_31690_31763 = state_31650__$1;
(statearr_31690_31763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (44))){
var inst_31626 = (state_31650[(21)]);
var inst_31639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31626);
var inst_31640 = cljs.core.pr_str.call(null,inst_31639);
var inst_31641 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31640)].join('');
var inst_31642 = figwheel.client.utils.log.call(null,inst_31641);
var state_31650__$1 = state_31650;
var statearr_31691_31764 = state_31650__$1;
(statearr_31691_31764[(2)] = inst_31642);

(statearr_31691_31764[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (6))){
var inst_31544 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31692_31765 = state_31650__$1;
(statearr_31692_31765[(2)] = inst_31544);

(statearr_31692_31765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (28))){
var inst_31569 = (state_31650[(26)]);
var inst_31596 = (state_31650[(2)]);
var inst_31597 = cljs.core.not_empty.call(null,inst_31569);
var state_31650__$1 = (function (){var statearr_31693 = state_31650;
(statearr_31693[(29)] = inst_31596);

return statearr_31693;
})();
if(cljs.core.truth_(inst_31597)){
var statearr_31694_31766 = state_31650__$1;
(statearr_31694_31766[(1)] = (29));

} else {
var statearr_31695_31767 = state_31650__$1;
(statearr_31695_31767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (25))){
var inst_31567 = (state_31650[(23)]);
var inst_31583 = (state_31650[(2)]);
var inst_31584 = cljs.core.not_empty.call(null,inst_31567);
var state_31650__$1 = (function (){var statearr_31696 = state_31650;
(statearr_31696[(30)] = inst_31583);

return statearr_31696;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31697_31768 = state_31650__$1;
(statearr_31697_31768[(1)] = (26));

} else {
var statearr_31698_31769 = state_31650__$1;
(statearr_31698_31769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (34))){
var inst_31619 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31619)){
var statearr_31699_31770 = state_31650__$1;
(statearr_31699_31770[(1)] = (38));

} else {
var statearr_31700_31771 = state_31650__$1;
(statearr_31700_31771[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (17))){
var state_31650__$1 = state_31650;
var statearr_31701_31772 = state_31650__$1;
(statearr_31701_31772[(2)] = recompile_dependents);

(statearr_31701_31772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (3))){
var state_31650__$1 = state_31650;
var statearr_31702_31773 = state_31650__$1;
(statearr_31702_31773[(2)] = null);

(statearr_31702_31773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (12))){
var inst_31540 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31703_31774 = state_31650__$1;
(statearr_31703_31774[(2)] = inst_31540);

(statearr_31703_31774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (2))){
var inst_31502 = (state_31650[(13)]);
var inst_31509 = cljs.core.seq.call(null,inst_31502);
var inst_31510 = inst_31509;
var inst_31511 = null;
var inst_31512 = (0);
var inst_31513 = (0);
var state_31650__$1 = (function (){var statearr_31704 = state_31650;
(statearr_31704[(7)] = inst_31512);

(statearr_31704[(8)] = inst_31513);

(statearr_31704[(9)] = inst_31511);

(statearr_31704[(10)] = inst_31510);

return statearr_31704;
})();
var statearr_31705_31775 = state_31650__$1;
(statearr_31705_31775[(2)] = null);

(statearr_31705_31775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (23))){
var inst_31567 = (state_31650[(23)]);
var inst_31563 = (state_31650[(19)]);
var inst_31569 = (state_31650[(26)]);
var inst_31566 = (state_31650[(24)]);
var inst_31571 = (state_31650[(25)]);
var inst_31574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31576 = (function (){var all_files = inst_31563;
var res_SINGLEQUOTE_ = inst_31566;
var res = inst_31567;
var files_not_loaded = inst_31569;
var dependencies_that_loaded = inst_31571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31574,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31575){
var map__31706 = p__31575;
var map__31706__$1 = ((((!((map__31706 == null)))?(((((map__31706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31706):map__31706);
var request_url = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31574,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31577 = cljs.core.reverse.call(null,inst_31571);
var inst_31578 = cljs.core.map.call(null,inst_31576,inst_31577);
var inst_31579 = cljs.core.pr_str.call(null,inst_31578);
var inst_31580 = figwheel.client.utils.log.call(null,inst_31579);
var state_31650__$1 = (function (){var statearr_31708 = state_31650;
(statearr_31708[(31)] = inst_31574);

return statearr_31708;
})();
var statearr_31709_31776 = state_31650__$1;
(statearr_31709_31776[(2)] = inst_31580);

(statearr_31709_31776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (35))){
var state_31650__$1 = state_31650;
var statearr_31710_31777 = state_31650__$1;
(statearr_31710_31777[(2)] = true);

(statearr_31710_31777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (19))){
var inst_31553 = (state_31650[(12)]);
var inst_31559 = figwheel.client.file_reloading.expand_files.call(null,inst_31553);
var state_31650__$1 = state_31650;
var statearr_31711_31778 = state_31650__$1;
(statearr_31711_31778[(2)] = inst_31559);

(statearr_31711_31778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (11))){
var state_31650__$1 = state_31650;
var statearr_31712_31779 = state_31650__$1;
(statearr_31712_31779[(2)] = null);

(statearr_31712_31779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (9))){
var inst_31542 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31713_31780 = state_31650__$1;
(statearr_31713_31780[(2)] = inst_31542);

(statearr_31713_31780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (5))){
var inst_31512 = (state_31650[(7)]);
var inst_31513 = (state_31650[(8)]);
var inst_31515 = (inst_31513 < inst_31512);
var inst_31516 = inst_31515;
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31516)){
var statearr_31714_31781 = state_31650__$1;
(statearr_31714_31781[(1)] = (7));

} else {
var statearr_31715_31782 = state_31650__$1;
(statearr_31715_31782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (14))){
var inst_31523 = (state_31650[(22)]);
var inst_31532 = cljs.core.first.call(null,inst_31523);
var inst_31533 = figwheel.client.file_reloading.eval_body.call(null,inst_31532,opts);
var inst_31534 = cljs.core.next.call(null,inst_31523);
var inst_31510 = inst_31534;
var inst_31511 = null;
var inst_31512 = (0);
var inst_31513 = (0);
var state_31650__$1 = (function (){var statearr_31716 = state_31650;
(statearr_31716[(32)] = inst_31533);

(statearr_31716[(7)] = inst_31512);

(statearr_31716[(8)] = inst_31513);

(statearr_31716[(9)] = inst_31511);

(statearr_31716[(10)] = inst_31510);

return statearr_31716;
})();
var statearr_31717_31783 = state_31650__$1;
(statearr_31717_31783[(2)] = null);

(statearr_31717_31783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (45))){
var state_31650__$1 = state_31650;
var statearr_31718_31784 = state_31650__$1;
(statearr_31718_31784[(2)] = null);

(statearr_31718_31784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (26))){
var inst_31567 = (state_31650[(23)]);
var inst_31563 = (state_31650[(19)]);
var inst_31569 = (state_31650[(26)]);
var inst_31566 = (state_31650[(24)]);
var inst_31571 = (state_31650[(25)]);
var inst_31586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31588 = (function (){var all_files = inst_31563;
var res_SINGLEQUOTE_ = inst_31566;
var res = inst_31567;
var files_not_loaded = inst_31569;
var dependencies_that_loaded = inst_31571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31586,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31587){
var map__31719 = p__31587;
var map__31719__$1 = ((((!((map__31719 == null)))?(((((map__31719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31719):map__31719);
var namespace = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31586,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31589 = cljs.core.map.call(null,inst_31588,inst_31567);
var inst_31590 = cljs.core.pr_str.call(null,inst_31589);
var inst_31591 = figwheel.client.utils.log.call(null,inst_31590);
var inst_31592 = (function (){var all_files = inst_31563;
var res_SINGLEQUOTE_ = inst_31566;
var res = inst_31567;
var files_not_loaded = inst_31569;
var dependencies_that_loaded = inst_31571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31586,inst_31588,inst_31589,inst_31590,inst_31591,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31567,inst_31563,inst_31569,inst_31566,inst_31571,inst_31586,inst_31588,inst_31589,inst_31590,inst_31591,state_val_31651,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31593 = setTimeout(inst_31592,(10));
var state_31650__$1 = (function (){var statearr_31721 = state_31650;
(statearr_31721[(33)] = inst_31586);

(statearr_31721[(34)] = inst_31591);

return statearr_31721;
})();
var statearr_31722_31785 = state_31650__$1;
(statearr_31722_31785[(2)] = inst_31593);

(statearr_31722_31785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (16))){
var state_31650__$1 = state_31650;
var statearr_31723_31786 = state_31650__$1;
(statearr_31723_31786[(2)] = reload_dependents);

(statearr_31723_31786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (38))){
var inst_31603 = (state_31650[(16)]);
var inst_31621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31603);
var state_31650__$1 = state_31650;
var statearr_31724_31787 = state_31650__$1;
(statearr_31724_31787[(2)] = inst_31621);

(statearr_31724_31787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (30))){
var state_31650__$1 = state_31650;
var statearr_31725_31788 = state_31650__$1;
(statearr_31725_31788[(2)] = null);

(statearr_31725_31788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (10))){
var inst_31523 = (state_31650[(22)]);
var inst_31525 = cljs.core.chunked_seq_QMARK_.call(null,inst_31523);
var state_31650__$1 = state_31650;
if(inst_31525){
var statearr_31726_31789 = state_31650__$1;
(statearr_31726_31789[(1)] = (13));

} else {
var statearr_31727_31790 = state_31650__$1;
(statearr_31727_31790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (18))){
var inst_31557 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31557)){
var statearr_31728_31791 = state_31650__$1;
(statearr_31728_31791[(1)] = (19));

} else {
var statearr_31729_31792 = state_31650__$1;
(statearr_31729_31792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (42))){
var state_31650__$1 = state_31650;
var statearr_31730_31793 = state_31650__$1;
(statearr_31730_31793[(2)] = null);

(statearr_31730_31793[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (37))){
var inst_31616 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31731_31794 = state_31650__$1;
(statearr_31731_31794[(2)] = inst_31616);

(statearr_31731_31794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (8))){
var inst_31523 = (state_31650[(22)]);
var inst_31510 = (state_31650[(10)]);
var inst_31523__$1 = cljs.core.seq.call(null,inst_31510);
var state_31650__$1 = (function (){var statearr_31732 = state_31650;
(statearr_31732[(22)] = inst_31523__$1);

return statearr_31732;
})();
if(inst_31523__$1){
var statearr_31733_31795 = state_31650__$1;
(statearr_31733_31795[(1)] = (10));

} else {
var statearr_31734_31796 = state_31650__$1;
(statearr_31734_31796[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28951__auto__,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____1 = (function (state_31650){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_31650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__28955__auto__ = e31736;
var statearr_31737_31797 = state_31650;
(statearr_31737_31797[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31798 = state_31650;
state_31650 = G__31798;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29044__auto__ = (function (){var statearr_31738 = f__29043__auto__.call(null);
(statearr_31738[(6)] = c__29042__auto__);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__,map__31495,map__31495__$1,opts,before_jsload,on_jsload,reload_dependents,map__31496,map__31496__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29042__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31801,link){
var map__31802 = p__31801;
var map__31802__$1 = ((((!((map__31802 == null)))?(((((map__31802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var file = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__31802,map__31802__$1,file){
return (function (p1__31799_SHARP_,p2__31800_SHARP_){
if(cljs.core._EQ_.call(null,p1__31799_SHARP_,p2__31800_SHARP_)){
return p1__31799_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__31802,map__31802__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31805){
var map__31806 = p__31805;
var map__31806__$1 = ((((!((map__31806 == null)))?(((((map__31806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31806):map__31806);
var match_length = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31804_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31804_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31808_SHARP_,p2__31809_SHARP_){
return cljs.core.assoc.call(null,p1__31808_SHARP_,cljs.core.get.call(null,p2__31809_SHARP_,key),p2__31809_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31810 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31810);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31810);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31811,p__31812){
var map__31813 = p__31811;
var map__31813__$1 = ((((!((map__31813 == null)))?(((((map__31813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31813):map__31813);
var on_cssload = cljs.core.get.call(null,map__31813__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31814 = p__31812;
var map__31814__$1 = ((((!((map__31814 == null)))?(((((map__31814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31814):map__31814);
var files_msg = map__31814__$1;
var files = cljs.core.get.call(null,map__31814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1543694782388
