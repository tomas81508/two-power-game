// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32615){
var map__32616 = p__32615;
var map__32616__$1 = ((((!((map__32616 == null)))?(((((map__32616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32616):map__32616);
var m = map__32616__$1;
var n = cljs.core.get.call(null,map__32616__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32618_32640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32619_32641 = null;
var count__32620_32642 = (0);
var i__32621_32643 = (0);
while(true){
if((i__32621_32643 < count__32620_32642)){
var f_32644 = cljs.core._nth.call(null,chunk__32619_32641,i__32621_32643);
cljs.core.println.call(null,"  ",f_32644);


var G__32645 = seq__32618_32640;
var G__32646 = chunk__32619_32641;
var G__32647 = count__32620_32642;
var G__32648 = (i__32621_32643 + (1));
seq__32618_32640 = G__32645;
chunk__32619_32641 = G__32646;
count__32620_32642 = G__32647;
i__32621_32643 = G__32648;
continue;
} else {
var temp__5457__auto___32649 = cljs.core.seq.call(null,seq__32618_32640);
if(temp__5457__auto___32649){
var seq__32618_32650__$1 = temp__5457__auto___32649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32618_32650__$1)){
var c__4351__auto___32651 = cljs.core.chunk_first.call(null,seq__32618_32650__$1);
var G__32652 = cljs.core.chunk_rest.call(null,seq__32618_32650__$1);
var G__32653 = c__4351__auto___32651;
var G__32654 = cljs.core.count.call(null,c__4351__auto___32651);
var G__32655 = (0);
seq__32618_32640 = G__32652;
chunk__32619_32641 = G__32653;
count__32620_32642 = G__32654;
i__32621_32643 = G__32655;
continue;
} else {
var f_32656 = cljs.core.first.call(null,seq__32618_32650__$1);
cljs.core.println.call(null,"  ",f_32656);


var G__32657 = cljs.core.next.call(null,seq__32618_32650__$1);
var G__32658 = null;
var G__32659 = (0);
var G__32660 = (0);
seq__32618_32640 = G__32657;
chunk__32619_32641 = G__32658;
count__32620_32642 = G__32659;
i__32621_32643 = G__32660;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32661 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32661);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32661)))?cljs.core.second.call(null,arglists_32661):arglists_32661));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32622_32662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32623_32663 = null;
var count__32624_32664 = (0);
var i__32625_32665 = (0);
while(true){
if((i__32625_32665 < count__32624_32664)){
var vec__32626_32666 = cljs.core._nth.call(null,chunk__32623_32663,i__32625_32665);
var name_32667 = cljs.core.nth.call(null,vec__32626_32666,(0),null);
var map__32629_32668 = cljs.core.nth.call(null,vec__32626_32666,(1),null);
var map__32629_32669__$1 = ((((!((map__32629_32668 == null)))?(((((map__32629_32668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32629_32668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32629_32668):map__32629_32668);
var doc_32670 = cljs.core.get.call(null,map__32629_32669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32671 = cljs.core.get.call(null,map__32629_32669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32667);

cljs.core.println.call(null," ",arglists_32671);

if(cljs.core.truth_(doc_32670)){
cljs.core.println.call(null," ",doc_32670);
} else {
}


var G__32672 = seq__32622_32662;
var G__32673 = chunk__32623_32663;
var G__32674 = count__32624_32664;
var G__32675 = (i__32625_32665 + (1));
seq__32622_32662 = G__32672;
chunk__32623_32663 = G__32673;
count__32624_32664 = G__32674;
i__32625_32665 = G__32675;
continue;
} else {
var temp__5457__auto___32676 = cljs.core.seq.call(null,seq__32622_32662);
if(temp__5457__auto___32676){
var seq__32622_32677__$1 = temp__5457__auto___32676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32622_32677__$1)){
var c__4351__auto___32678 = cljs.core.chunk_first.call(null,seq__32622_32677__$1);
var G__32679 = cljs.core.chunk_rest.call(null,seq__32622_32677__$1);
var G__32680 = c__4351__auto___32678;
var G__32681 = cljs.core.count.call(null,c__4351__auto___32678);
var G__32682 = (0);
seq__32622_32662 = G__32679;
chunk__32623_32663 = G__32680;
count__32624_32664 = G__32681;
i__32625_32665 = G__32682;
continue;
} else {
var vec__32631_32683 = cljs.core.first.call(null,seq__32622_32677__$1);
var name_32684 = cljs.core.nth.call(null,vec__32631_32683,(0),null);
var map__32634_32685 = cljs.core.nth.call(null,vec__32631_32683,(1),null);
var map__32634_32686__$1 = ((((!((map__32634_32685 == null)))?(((((map__32634_32685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32634_32685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32634_32685):map__32634_32685);
var doc_32687 = cljs.core.get.call(null,map__32634_32686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32688 = cljs.core.get.call(null,map__32634_32686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32684);

cljs.core.println.call(null," ",arglists_32688);

if(cljs.core.truth_(doc_32687)){
cljs.core.println.call(null," ",doc_32687);
} else {
}


var G__32689 = cljs.core.next.call(null,seq__32622_32677__$1);
var G__32690 = null;
var G__32691 = (0);
var G__32692 = (0);
seq__32622_32662 = G__32689;
chunk__32623_32663 = G__32690;
count__32624_32664 = G__32691;
i__32625_32665 = G__32692;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__32636 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32637 = null;
var count__32638 = (0);
var i__32639 = (0);
while(true){
if((i__32639 < count__32638)){
var role = cljs.core._nth.call(null,chunk__32637,i__32639);
var temp__5457__auto___32693__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32693__$1)){
var spec_32694 = temp__5457__auto___32693__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32694));
} else {
}


var G__32695 = seq__32636;
var G__32696 = chunk__32637;
var G__32697 = count__32638;
var G__32698 = (i__32639 + (1));
seq__32636 = G__32695;
chunk__32637 = G__32696;
count__32638 = G__32697;
i__32639 = G__32698;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32636);
if(temp__5457__auto____$1){
var seq__32636__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32636__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32636__$1);
var G__32699 = cljs.core.chunk_rest.call(null,seq__32636__$1);
var G__32700 = c__4351__auto__;
var G__32701 = cljs.core.count.call(null,c__4351__auto__);
var G__32702 = (0);
seq__32636 = G__32699;
chunk__32637 = G__32700;
count__32638 = G__32701;
i__32639 = G__32702;
continue;
} else {
var role = cljs.core.first.call(null,seq__32636__$1);
var temp__5457__auto___32703__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32703__$2)){
var spec_32704 = temp__5457__auto___32703__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32704));
} else {
}


var G__32705 = cljs.core.next.call(null,seq__32636__$1);
var G__32706 = null;
var G__32707 = (0);
var G__32708 = (0);
seq__32636 = G__32705;
chunk__32637 = G__32706;
count__32638 = G__32707;
i__32639 = G__32708;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1543694784408
