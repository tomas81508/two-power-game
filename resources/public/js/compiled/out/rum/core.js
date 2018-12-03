// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__24157 = cljs.core.seq.call(null,props);
var chunk__24159 = null;
var count__24160 = (0);
var i__24161 = (0);
while(true){
if((i__24161 < count__24160)){
var vec__24163 = cljs.core._nth.call(null,chunk__24159,i__24161);
var k = cljs.core.nth.call(null,vec__24163,(0),null);
var v = cljs.core.nth.call(null,vec__24163,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24169 = seq__24157;
var G__24170 = chunk__24159;
var G__24171 = count__24160;
var G__24172 = (i__24161 + (1));
seq__24157 = G__24169;
chunk__24159 = G__24170;
count__24160 = G__24171;
i__24161 = G__24172;
continue;
} else {
var G__24173 = seq__24157;
var G__24174 = chunk__24159;
var G__24175 = count__24160;
var G__24176 = (i__24161 + (1));
seq__24157 = G__24173;
chunk__24159 = G__24174;
count__24160 = G__24175;
i__24161 = G__24176;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24157);
if(temp__5457__auto__){
var seq__24157__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24157__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24157__$1);
var G__24177 = cljs.core.chunk_rest.call(null,seq__24157__$1);
var G__24178 = c__4351__auto__;
var G__24179 = cljs.core.count.call(null,c__4351__auto__);
var G__24180 = (0);
seq__24157 = G__24177;
chunk__24159 = G__24178;
count__24160 = G__24179;
i__24161 = G__24180;
continue;
} else {
var vec__24166 = cljs.core.first.call(null,seq__24157__$1);
var k = cljs.core.nth.call(null,vec__24166,(0),null);
var v = cljs.core.nth.call(null,vec__24166,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24181 = cljs.core.next.call(null,seq__24157__$1);
var G__24182 = null;
var G__24183 = (0);
var G__24184 = (0);
seq__24157 = G__24181;
chunk__24159 = G__24182;
count__24160 = G__24183;
i__24161 = G__24184;
continue;
} else {
var G__24185 = cljs.core.next.call(null,seq__24157__$1);
var G__24186 = null;
var G__24187 = (0);
var G__24188 = (0);
seq__24157 = G__24185;
chunk__24159 = G__24186;
count__24160 = G__24187;
i__24161 = G__24188;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24190_SHARP_,p2__24189_SHARP_){
return p2__24189_SHARP_.call(null,p1__24190_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24192_SHARP_,p2__24191_SHARP_){
return p2__24191_SHARP_.call(null,old_state,p1__24192_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24193_SHARP_){
return p1__24193_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24195 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24195,(0),null);
var next_state = cljs.core.nth.call(null,vec__24195,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24194_SHARP_){
return p1__24194_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__24198__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__24198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24199__i = 0, G__24199__a = new Array(arguments.length -  0);
while (G__24199__i < G__24199__a.length) {G__24199__a[G__24199__i] = arguments[G__24199__i + 0]; ++G__24199__i;}
  args = new cljs.core.IndexedSeq(G__24199__a,0,null);
} 
return G__24198__delegate.call(this,args);};
G__24198.cljs$lang$maxFixedArity = 0;
G__24198.cljs$lang$applyTo = (function (arglist__24200){
var args = cljs.core.seq(arglist__24200);
return G__24198__delegate(args);
});
G__24198.cljs$core$IFn$_invoke$arity$variadic = G__24198__delegate;
return G__24198;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24201__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24202__i = 0, G__24202__a = new Array(arguments.length -  0);
while (G__24202__i < G__24202__a.length) {G__24202__a[G__24202__i] = arguments[G__24202__i + 0]; ++G__24202__i;}
  args = new cljs.core.IndexedSeq(G__24202__a,0,null);
} 
return G__24201__delegate.call(this,args);};
G__24201.cljs$lang$maxFixedArity = 0;
G__24201.cljs$lang$applyTo = (function (arglist__24203){
var args = cljs.core.seq(arglist__24203);
return G__24201__delegate(args);
});
G__24201.cljs$core$IFn$_invoke$arity$variadic = G__24201__delegate;
return G__24201;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24204__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24205__i = 0, G__24205__a = new Array(arguments.length -  0);
while (G__24205__i < G__24205__a.length) {G__24205__a[G__24205__i] = arguments[G__24205__i + 0]; ++G__24205__i;}
  args = new cljs.core.IndexedSeq(G__24205__a,0,null);
} 
return G__24204__delegate.call(this,args);};
G__24204.cljs$lang$maxFixedArity = 0;
G__24204.cljs$lang$applyTo = (function (arglist__24206){
var args = cljs.core.seq(arglist__24206);
return G__24204__delegate(args);
});
G__24204.cljs$core$IFn$_invoke$arity$variadic = G__24204__delegate;
return G__24204;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__24207_SHARP_){
return setTimeout(p1__24207_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24209 = cljs.core.seq.call(null,queue);
var chunk__24211 = null;
var count__24212 = (0);
var i__24213 = (0);
while(true){
if((i__24213 < count__24212)){
var comp = cljs.core._nth.call(null,chunk__24211,i__24213);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24215 = seq__24209;
var G__24216 = chunk__24211;
var G__24217 = count__24212;
var G__24218 = (i__24213 + (1));
seq__24209 = G__24215;
chunk__24211 = G__24216;
count__24212 = G__24217;
i__24213 = G__24218;
continue;
} else {
var G__24219 = seq__24209;
var G__24220 = chunk__24211;
var G__24221 = count__24212;
var G__24222 = (i__24213 + (1));
seq__24209 = G__24219;
chunk__24211 = G__24220;
count__24212 = G__24221;
i__24213 = G__24222;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24209);
if(temp__5457__auto__){
var seq__24209__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24209__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24209__$1);
var G__24223 = cljs.core.chunk_rest.call(null,seq__24209__$1);
var G__24224 = c__4351__auto__;
var G__24225 = cljs.core.count.call(null,c__4351__auto__);
var G__24226 = (0);
seq__24209 = G__24223;
chunk__24211 = G__24224;
count__24212 = G__24225;
i__24213 = G__24226;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24209__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24227 = cljs.core.next.call(null,seq__24209__$1);
var G__24228 = null;
var G__24229 = (0);
var G__24230 = (0);
seq__24209 = G__24227;
chunk__24211 = G__24228;
count__24212 = G__24229;
i__24213 = G__24230;
continue;
} else {
var G__24231 = cljs.core.next.call(null,seq__24209__$1);
var G__24232 = null;
var G__24233 = (0);
var G__24234 = (0);
seq__24209 = G__24231;
chunk__24211 = G__24232;
count__24212 = G__24233;
i__24213 = G__24234;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__24236 = arguments.length;
switch (G__24236) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24238 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24239 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24239,(0),null);
var next_state = cljs.core.nth.call(null,vec__24239,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24242_24254 = cljs.core.seq.call(null,old_reactions);
var chunk__24243_24255 = null;
var count__24244_24256 = (0);
var i__24245_24257 = (0);
while(true){
if((i__24245_24257 < count__24244_24256)){
var ref_24258 = cljs.core._nth.call(null,chunk__24243_24255,i__24245_24257);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24258)){
} else {
cljs.core.remove_watch.call(null,ref_24258,key);
}


var G__24259 = seq__24242_24254;
var G__24260 = chunk__24243_24255;
var G__24261 = count__24244_24256;
var G__24262 = (i__24245_24257 + (1));
seq__24242_24254 = G__24259;
chunk__24243_24255 = G__24260;
count__24244_24256 = G__24261;
i__24245_24257 = G__24262;
continue;
} else {
var temp__5457__auto___24263 = cljs.core.seq.call(null,seq__24242_24254);
if(temp__5457__auto___24263){
var seq__24242_24264__$1 = temp__5457__auto___24263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24242_24264__$1)){
var c__4351__auto___24265 = cljs.core.chunk_first.call(null,seq__24242_24264__$1);
var G__24266 = cljs.core.chunk_rest.call(null,seq__24242_24264__$1);
var G__24267 = c__4351__auto___24265;
var G__24268 = cljs.core.count.call(null,c__4351__auto___24265);
var G__24269 = (0);
seq__24242_24254 = G__24266;
chunk__24243_24255 = G__24267;
count__24244_24256 = G__24268;
i__24245_24257 = G__24269;
continue;
} else {
var ref_24270 = cljs.core.first.call(null,seq__24242_24264__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24270)){
} else {
cljs.core.remove_watch.call(null,ref_24270,key);
}


var G__24271 = cljs.core.next.call(null,seq__24242_24264__$1);
var G__24272 = null;
var G__24273 = (0);
var G__24274 = (0);
seq__24242_24254 = G__24271;
chunk__24243_24255 = G__24272;
count__24244_24256 = G__24273;
i__24245_24257 = G__24274;
continue;
}
} else {
}
}
break;
}

var seq__24246_24275 = cljs.core.seq.call(null,new_reactions);
var chunk__24247_24276 = null;
var count__24248_24277 = (0);
var i__24249_24278 = (0);
while(true){
if((i__24249_24278 < count__24248_24277)){
var ref_24279 = cljs.core._nth.call(null,chunk__24247_24276,i__24249_24278);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24279)){
} else {
cljs.core.add_watch.call(null,ref_24279,key,((function (seq__24246_24275,chunk__24247_24276,count__24248_24277,i__24249_24278,ref_24279,comp,old_reactions,vec__24239,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24238){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24246_24275,chunk__24247_24276,count__24248_24277,i__24249_24278,ref_24279,comp,old_reactions,vec__24239,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24238))
);
}


var G__24280 = seq__24246_24275;
var G__24281 = chunk__24247_24276;
var G__24282 = count__24248_24277;
var G__24283 = (i__24249_24278 + (1));
seq__24246_24275 = G__24280;
chunk__24247_24276 = G__24281;
count__24248_24277 = G__24282;
i__24249_24278 = G__24283;
continue;
} else {
var temp__5457__auto___24284 = cljs.core.seq.call(null,seq__24246_24275);
if(temp__5457__auto___24284){
var seq__24246_24285__$1 = temp__5457__auto___24284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24246_24285__$1)){
var c__4351__auto___24286 = cljs.core.chunk_first.call(null,seq__24246_24285__$1);
var G__24287 = cljs.core.chunk_rest.call(null,seq__24246_24285__$1);
var G__24288 = c__4351__auto___24286;
var G__24289 = cljs.core.count.call(null,c__4351__auto___24286);
var G__24290 = (0);
seq__24246_24275 = G__24287;
chunk__24247_24276 = G__24288;
count__24248_24277 = G__24289;
i__24249_24278 = G__24290;
continue;
} else {
var ref_24291 = cljs.core.first.call(null,seq__24246_24285__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24291)){
} else {
cljs.core.add_watch.call(null,ref_24291,key,((function (seq__24246_24275,chunk__24247_24276,count__24248_24277,i__24249_24278,ref_24291,seq__24246_24285__$1,temp__5457__auto___24284,comp,old_reactions,vec__24239,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24238){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24246_24275,chunk__24247_24276,count__24248_24277,i__24249_24278,ref_24291,seq__24246_24285__$1,temp__5457__auto___24284,comp,old_reactions,vec__24239,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24238))
);
}


var G__24292 = cljs.core.next.call(null,seq__24246_24285__$1);
var G__24293 = null;
var G__24294 = (0);
var G__24295 = (0);
seq__24246_24275 = G__24292;
chunk__24247_24276 = G__24293;
count__24248_24277 = G__24294;
i__24249_24278 = G__24295;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24238;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24296 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24250_24297 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24251_24298 = null;
var count__24252_24299 = (0);
var i__24253_24300 = (0);
while(true){
if((i__24253_24300 < count__24252_24299)){
var ref_24301 = cljs.core._nth.call(null,chunk__24251_24298,i__24253_24300);
cljs.core.remove_watch.call(null,ref_24301,key_24296);


var G__24302 = seq__24250_24297;
var G__24303 = chunk__24251_24298;
var G__24304 = count__24252_24299;
var G__24305 = (i__24253_24300 + (1));
seq__24250_24297 = G__24302;
chunk__24251_24298 = G__24303;
count__24252_24299 = G__24304;
i__24253_24300 = G__24305;
continue;
} else {
var temp__5457__auto___24306 = cljs.core.seq.call(null,seq__24250_24297);
if(temp__5457__auto___24306){
var seq__24250_24307__$1 = temp__5457__auto___24306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24250_24307__$1)){
var c__4351__auto___24308 = cljs.core.chunk_first.call(null,seq__24250_24307__$1);
var G__24309 = cljs.core.chunk_rest.call(null,seq__24250_24307__$1);
var G__24310 = c__4351__auto___24308;
var G__24311 = cljs.core.count.call(null,c__4351__auto___24308);
var G__24312 = (0);
seq__24250_24297 = G__24309;
chunk__24251_24298 = G__24310;
count__24252_24299 = G__24311;
i__24253_24300 = G__24312;
continue;
} else {
var ref_24313 = cljs.core.first.call(null,seq__24250_24307__$1);
cljs.core.remove_watch.call(null,ref_24313,key_24296);


var G__24314 = cljs.core.next.call(null,seq__24250_24307__$1);
var G__24315 = null;
var G__24316 = (0);
var G__24317 = (0);
seq__24250_24297 = G__24314;
chunk__24251_24298 = G__24315;
count__24252_24299 = G__24316;
i__24253_24300 = G__24317;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24324 = arguments.length;
var i__4532__auto___24325 = (0);
while(true){
if((i__4532__auto___24325 < len__4531__auto___24324)){
args__4534__auto__.push((arguments[i__4532__auto___24325]));

var G__24326 = (i__4532__auto___24325 + (1));
i__4532__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24321){
var map__24322 = p__24321;
var map__24322__$1 = ((((!((map__24322 == null)))?(((((map__24322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);
var options = map__24322__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24318){
var G__24319 = cljs.core.first.call(null,seq24318);
var seq24318__$1 = cljs.core.next.call(null,seq24318);
var G__24320 = cljs.core.first.call(null,seq24318__$1);
var seq24318__$2 = cljs.core.next.call(null,seq24318__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24319,G__24320,seq24318__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24330 = arguments.length;
var i__4532__auto___24331 = (0);
while(true){
if((i__4532__auto___24331 < len__4531__auto___24330)){
args__4534__auto__.push((arguments[i__4532__auto___24331]));

var G__24332 = (i__4532__auto___24331 + (1));
i__4532__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24327){
var G__24328 = cljs.core.first.call(null,seq24327);
var seq24327__$1 = cljs.core.next.call(null,seq24327);
var G__24329 = cljs.core.first.call(null,seq24327__$1);
var seq24327__$2 = cljs.core.next.call(null,seq24327__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24328,G__24329,seq24327__$2);
});


//# sourceMappingURL=core.js.map?rel=1543694770318
