// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23589__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23586 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23587 = cljs.core.seq.call(null,vec__23586);
var first__23588 = cljs.core.first.call(null,seq__23587);
var seq__23587__$1 = cljs.core.next.call(null,seq__23587);
var tag = first__23588;
var body = seq__23587__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23590__i = 0, G__23590__a = new Array(arguments.length -  0);
while (G__23590__i < G__23590__a.length) {G__23590__a[G__23590__i] = arguments[G__23590__i + 0]; ++G__23590__i;}
  args = new cljs.core.IndexedSeq(G__23590__a,0,null);
} 
return G__23589__delegate.call(this,args);};
G__23589.cljs$lang$maxFixedArity = 0;
G__23589.cljs$lang$applyTo = (function (arglist__23591){
var args = cljs.core.seq(arglist__23591);
return G__23589__delegate(args);
});
G__23589.cljs$core$IFn$_invoke$arity$variadic = G__23589__delegate;
return G__23589;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__23592(s__23593){
return (new cljs.core.LazySeq(null,(function (){
var s__23593__$1 = s__23593;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23593__$1);
if(temp__5457__auto__){
var s__23593__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23593__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23593__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23595 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23594 = (0);
while(true){
if((i__23594 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__23594);
cljs.core.chunk_append.call(null,b__23595,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23596 = (i__23594 + (1));
i__23594 = G__23596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23595),sablono$core$update_arglists_$_iter__23592.call(null,cljs.core.chunk_rest.call(null,s__23593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23595),null);
}
} else {
var args = cljs.core.first.call(null,s__23593__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23592.call(null,cljs.core.rest.call(null,s__23593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23602 = arguments.length;
var i__4532__auto___23603 = (0);
while(true){
if((i__4532__auto___23603 < len__4531__auto___23602)){
args__4534__auto__.push((arguments[i__4532__auto___23603]));

var G__23604 = (i__4532__auto___23603 + (1));
i__4532__auto___23603 = G__23604;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__23598(s__23599){
return (new cljs.core.LazySeq(null,(function (){
var s__23599__$1 = s__23599;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23599__$1);
if(temp__5457__auto__){
var s__23599__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23599__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23599__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23601 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23600 = (0);
while(true){
if((i__23600 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__23600);
cljs.core.chunk_append.call(null,b__23601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23605 = (i__23600 + (1));
i__23600 = G__23605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23601),sablono$core$iter__23598.call(null,cljs.core.chunk_rest.call(null,s__23599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23601),null);
}
} else {
var style = cljs.core.first.call(null,s__23599__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23598.call(null,cljs.core.rest.call(null,s__23599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23597){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23597));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23606 = (function sablono$core$link_to23606(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23609 = arguments.length;
var i__4532__auto___23610 = (0);
while(true){
if((i__4532__auto___23610 < len__4531__auto___23609)){
args__4534__auto__.push((arguments[i__4532__auto___23610]));

var G__23611 = (i__4532__auto___23610 + (1));
i__4532__auto___23610 = G__23611;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23606.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to23606.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23606.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23606.cljs$lang$applyTo = (function (seq23607){
var G__23608 = cljs.core.first.call(null,seq23607);
var seq23607__$1 = cljs.core.next.call(null,seq23607);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23608,seq23607__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23606);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23612 = (function sablono$core$mail_to23612(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23619 = arguments.length;
var i__4532__auto___23620 = (0);
while(true){
if((i__4532__auto___23620 < len__4531__auto___23619)){
args__4534__auto__.push((arguments[i__4532__auto___23620]));

var G__23621 = (i__4532__auto___23620 + (1));
i__4532__auto___23620 = G__23621;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23612.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to23612.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23615){
var vec__23616 = p__23615;
var content = cljs.core.nth.call(null,vec__23616,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23612.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23612.cljs$lang$applyTo = (function (seq23613){
var G__23614 = cljs.core.first.call(null,seq23613);
var seq23613__$1 = cljs.core.next.call(null,seq23613);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23614,seq23613__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23612);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23622 = (function sablono$core$unordered_list23622(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list23622_$_iter__23623(s__23624){
return (new cljs.core.LazySeq(null,(function (){
var s__23624__$1 = s__23624;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23624__$1);
if(temp__5457__auto__){
var s__23624__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23624__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23624__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23626 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23625 = (0);
while(true){
if((i__23625 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23625);
cljs.core.chunk_append.call(null,b__23626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23627 = (i__23625 + (1));
i__23625 = G__23627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23626),sablono$core$unordered_list23622_$_iter__23623.call(null,cljs.core.chunk_rest.call(null,s__23624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23626),null);
}
} else {
var x = cljs.core.first.call(null,s__23624__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23622_$_iter__23623.call(null,cljs.core.rest.call(null,s__23624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23622);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23628 = (function sablono$core$ordered_list23628(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list23628_$_iter__23629(s__23630){
return (new cljs.core.LazySeq(null,(function (){
var s__23630__$1 = s__23630;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23630__$1);
if(temp__5457__auto__){
var s__23630__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23630__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23630__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23632 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23631 = (0);
while(true){
if((i__23631 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23631);
cljs.core.chunk_append.call(null,b__23632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23633 = (i__23631 + (1));
i__23631 = G__23633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23632),sablono$core$ordered_list23628_$_iter__23629.call(null,cljs.core.chunk_rest.call(null,s__23630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23632),null);
}
} else {
var x = cljs.core.first.call(null,s__23630__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23628_$_iter__23629.call(null,cljs.core.rest.call(null,s__23630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23628);
/**
 * Create an image element.
 */
sablono.core.image23634 = (function sablono$core$image23634(var_args){
var G__23636 = arguments.length;
switch (G__23636) {
case 1:
return sablono.core.image23634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23634.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23634.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23634.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23634);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23638_SHARP_,p2__23639_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23638_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23639_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23640_SHARP_,p2__23641_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23640_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23641_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23643 = arguments.length;
switch (G__23643) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23645 = (function sablono$core$color_field23645(var_args){
var G__23647 = arguments.length;
switch (G__23647) {
case 1:
return sablono.core.color_field23645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23645.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23576__auto__);
});

sablono.core.color_field23645.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.color_field23645.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23645);

/**
 * Creates a date input field.
 */
sablono.core.date_field23648 = (function sablono$core$date_field23648(var_args){
var G__23650 = arguments.length;
switch (G__23650) {
case 1:
return sablono.core.date_field23648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23648.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23576__auto__);
});

sablono.core.date_field23648.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.date_field23648.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23648);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23651 = (function sablono$core$datetime_field23651(var_args){
var G__23653 = arguments.length;
switch (G__23653) {
case 1:
return sablono.core.datetime_field23651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23651.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23576__auto__);
});

sablono.core.datetime_field23651.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.datetime_field23651.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23651);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23654 = (function sablono$core$datetime_local_field23654(var_args){
var G__23656 = arguments.length;
switch (G__23656) {
case 1:
return sablono.core.datetime_local_field23654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23654.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23576__auto__);
});

sablono.core.datetime_local_field23654.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.datetime_local_field23654.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23654);

/**
 * Creates a email input field.
 */
sablono.core.email_field23657 = (function sablono$core$email_field23657(var_args){
var G__23659 = arguments.length;
switch (G__23659) {
case 1:
return sablono.core.email_field23657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23657.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23576__auto__);
});

sablono.core.email_field23657.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.email_field23657.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23657);

/**
 * Creates a file input field.
 */
sablono.core.file_field23660 = (function sablono$core$file_field23660(var_args){
var G__23662 = arguments.length;
switch (G__23662) {
case 1:
return sablono.core.file_field23660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23660.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23576__auto__);
});

sablono.core.file_field23660.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.file_field23660.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23660);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23663 = (function sablono$core$hidden_field23663(var_args){
var G__23665 = arguments.length;
switch (G__23665) {
case 1:
return sablono.core.hidden_field23663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23663.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23576__auto__);
});

sablono.core.hidden_field23663.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.hidden_field23663.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23663);

/**
 * Creates a month input field.
 */
sablono.core.month_field23666 = (function sablono$core$month_field23666(var_args){
var G__23668 = arguments.length;
switch (G__23668) {
case 1:
return sablono.core.month_field23666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23666.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23576__auto__);
});

sablono.core.month_field23666.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.month_field23666.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23666);

/**
 * Creates a number input field.
 */
sablono.core.number_field23669 = (function sablono$core$number_field23669(var_args){
var G__23671 = arguments.length;
switch (G__23671) {
case 1:
return sablono.core.number_field23669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23669.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23576__auto__);
});

sablono.core.number_field23669.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.number_field23669.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23669);

/**
 * Creates a password input field.
 */
sablono.core.password_field23672 = (function sablono$core$password_field23672(var_args){
var G__23674 = arguments.length;
switch (G__23674) {
case 1:
return sablono.core.password_field23672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23672.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23576__auto__);
});

sablono.core.password_field23672.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.password_field23672.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23672);

/**
 * Creates a range input field.
 */
sablono.core.range_field23675 = (function sablono$core$range_field23675(var_args){
var G__23677 = arguments.length;
switch (G__23677) {
case 1:
return sablono.core.range_field23675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23675.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23576__auto__);
});

sablono.core.range_field23675.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.range_field23675.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23675);

/**
 * Creates a search input field.
 */
sablono.core.search_field23678 = (function sablono$core$search_field23678(var_args){
var G__23680 = arguments.length;
switch (G__23680) {
case 1:
return sablono.core.search_field23678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23678.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23576__auto__);
});

sablono.core.search_field23678.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.search_field23678.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23678);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23681 = (function sablono$core$tel_field23681(var_args){
var G__23683 = arguments.length;
switch (G__23683) {
case 1:
return sablono.core.tel_field23681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23681.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23576__auto__);
});

sablono.core.tel_field23681.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.tel_field23681.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23681);

/**
 * Creates a text input field.
 */
sablono.core.text_field23684 = (function sablono$core$text_field23684(var_args){
var G__23686 = arguments.length;
switch (G__23686) {
case 1:
return sablono.core.text_field23684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23684.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23576__auto__);
});

sablono.core.text_field23684.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.text_field23684.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23684);

/**
 * Creates a time input field.
 */
sablono.core.time_field23687 = (function sablono$core$time_field23687(var_args){
var G__23689 = arguments.length;
switch (G__23689) {
case 1:
return sablono.core.time_field23687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23687.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23576__auto__);
});

sablono.core.time_field23687.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.time_field23687.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23687);

/**
 * Creates a url input field.
 */
sablono.core.url_field23690 = (function sablono$core$url_field23690(var_args){
var G__23692 = arguments.length;
switch (G__23692) {
case 1:
return sablono.core.url_field23690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23690.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23576__auto__);
});

sablono.core.url_field23690.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.url_field23690.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23690);

/**
 * Creates a week input field.
 */
sablono.core.week_field23693 = (function sablono$core$week_field23693(var_args){
var G__23695 = arguments.length;
switch (G__23695) {
case 1:
return sablono.core.week_field23693.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23693.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23693.cljs$core$IFn$_invoke$arity$1 = (function (name__23576__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23576__auto__);
});

sablono.core.week_field23693.cljs$core$IFn$_invoke$arity$2 = (function (name__23576__auto__,value__23577__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23576__auto__,value__23577__auto__);
});

sablono.core.week_field23693.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23693);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23713 = (function sablono$core$check_box23713(var_args){
var G__23715 = arguments.length;
switch (G__23715) {
case 1:
return sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23713.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23713.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23713);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23717 = (function sablono$core$radio_button23717(var_args){
var G__23719 = arguments.length;
switch (G__23719) {
case 1:
return sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23717.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23717.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23717);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23721 = (function sablono$core$select_options23721(coll){
var iter__4324__auto__ = (function sablono$core$select_options23721_$_iter__23722(s__23723){
return (new cljs.core.LazySeq(null,(function (){
var s__23723__$1 = s__23723;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23723__$1);
if(temp__5457__auto__){
var s__23723__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23723__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__23723__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__23725 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__23724 = (0);
while(true){
if((i__23724 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__23724);
cljs.core.chunk_append.call(null,b__23725,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23726 = x;
var text = cljs.core.nth.call(null,vec__23726,(0),null);
var val = cljs.core.nth.call(null,vec__23726,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23726,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23721.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23732 = (i__23724 + (1));
i__23724 = G__23732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23725),sablono$core$select_options23721_$_iter__23722.call(null,cljs.core.chunk_rest.call(null,s__23723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23725),null);
}
} else {
var x = cljs.core.first.call(null,s__23723__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23729 = x;
var text = cljs.core.nth.call(null,vec__23729,(0),null);
var val = cljs.core.nth.call(null,vec__23729,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23729,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23721.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23721_$_iter__23722.call(null,cljs.core.rest.call(null,s__23723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23721);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23733 = (function sablono$core$drop_down23733(var_args){
var G__23735 = arguments.length;
switch (G__23735) {
case 2:
return sablono.core.drop_down23733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23733.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23733.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23733.call(null,name,options,null);
});

sablono.core.drop_down23733.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23733.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23733);
/**
 * Creates a text area element.
 */
sablono.core.text_area23737 = (function sablono$core$text_area23737(var_args){
var G__23739 = arguments.length;
switch (G__23739) {
case 1:
return sablono.core.text_area23737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23737.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23737.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23737.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23737);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23741 = (function sablono$core$label23741(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23741);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23742 = (function sablono$core$submit_button23742(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23742);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23743 = (function sablono$core$reset_button23743(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23743);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23744 = (function sablono$core$form_to23744(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23751 = arguments.length;
var i__4532__auto___23752 = (0);
while(true){
if((i__4532__auto___23752 < len__4531__auto___23751)){
args__4534__auto__.push((arguments[i__4532__auto___23752]));

var G__23753 = (i__4532__auto___23752 + (1));
i__4532__auto___23752 = G__23753;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23744.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to23744.cljs$core$IFn$_invoke$arity$variadic = (function (p__23747,body){
var vec__23748 = p__23747;
var method = cljs.core.nth.call(null,vec__23748,(0),null);
var action = cljs.core.nth.call(null,vec__23748,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23744.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23744.cljs$lang$applyTo = (function (seq23745){
var G__23746 = cljs.core.first.call(null,seq23745);
var seq23745__$1 = cljs.core.next.call(null,seq23745);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23746,seq23745__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23744);

//# sourceMappingURL=core.js.map?rel=1543694769848
