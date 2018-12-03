// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e32903){if((e32903 instanceof Error)){
var e = e32903;
return "Error: Unable to stringify";
} else {
throw e32903;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32906 = arguments.length;
switch (G__32906) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32904_SHARP_){
if(typeof p1__32904_SHARP_ === 'string'){
return p1__32904_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32904_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32909 = arguments.length;
var i__4532__auto___32910 = (0);
while(true){
if((i__4532__auto___32910 < len__4531__auto___32909)){
args__4534__auto__.push((arguments[i__4532__auto___32910]));

var G__32911 = (i__4532__auto___32910 + (1));
i__4532__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32908){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32913 = arguments.length;
var i__4532__auto___32914 = (0);
while(true){
if((i__4532__auto___32914 < len__4531__auto___32913)){
args__4534__auto__.push((arguments[i__4532__auto___32914]));

var G__32915 = (i__4532__auto___32914 + (1));
i__4532__auto___32914 = G__32915;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32912){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32912));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32916){
var map__32917 = p__32916;
var map__32917__$1 = ((((!((map__32917 == null)))?(((((map__32917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32917):map__32917);
var message = cljs.core.get.call(null,map__32917__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32917__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29042__auto___32996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___32996,ch){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___32996,ch){
return (function (state_32968){
var state_val_32969 = (state_32968[(1)]);
if((state_val_32969 === (7))){
var inst_32964 = (state_32968[(2)]);
var state_32968__$1 = state_32968;
var statearr_32970_32997 = state_32968__$1;
(statearr_32970_32997[(2)] = inst_32964);

(statearr_32970_32997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (1))){
var state_32968__$1 = state_32968;
var statearr_32971_32998 = state_32968__$1;
(statearr_32971_32998[(2)] = null);

(statearr_32971_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (4))){
var inst_32921 = (state_32968[(7)]);
var inst_32921__$1 = (state_32968[(2)]);
var state_32968__$1 = (function (){var statearr_32972 = state_32968;
(statearr_32972[(7)] = inst_32921__$1);

return statearr_32972;
})();
if(cljs.core.truth_(inst_32921__$1)){
var statearr_32973_32999 = state_32968__$1;
(statearr_32973_32999[(1)] = (5));

} else {
var statearr_32974_33000 = state_32968__$1;
(statearr_32974_33000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (15))){
var inst_32928 = (state_32968[(8)]);
var inst_32943 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32928);
var inst_32944 = cljs.core.first.call(null,inst_32943);
var inst_32945 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32944);
var inst_32946 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32945)].join('');
var inst_32947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32946);
var state_32968__$1 = state_32968;
var statearr_32975_33001 = state_32968__$1;
(statearr_32975_33001[(2)] = inst_32947);

(statearr_32975_33001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (13))){
var inst_32952 = (state_32968[(2)]);
var state_32968__$1 = state_32968;
var statearr_32976_33002 = state_32968__$1;
(statearr_32976_33002[(2)] = inst_32952);

(statearr_32976_33002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (6))){
var state_32968__$1 = state_32968;
var statearr_32977_33003 = state_32968__$1;
(statearr_32977_33003[(2)] = null);

(statearr_32977_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (17))){
var inst_32950 = (state_32968[(2)]);
var state_32968__$1 = state_32968;
var statearr_32978_33004 = state_32968__$1;
(statearr_32978_33004[(2)] = inst_32950);

(statearr_32978_33004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (3))){
var inst_32966 = (state_32968[(2)]);
var state_32968__$1 = state_32968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32968__$1,inst_32966);
} else {
if((state_val_32969 === (12))){
var inst_32927 = (state_32968[(9)]);
var inst_32941 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32927,opts);
var state_32968__$1 = state_32968;
if(cljs.core.truth_(inst_32941)){
var statearr_32979_33005 = state_32968__$1;
(statearr_32979_33005[(1)] = (15));

} else {
var statearr_32980_33006 = state_32968__$1;
(statearr_32980_33006[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (2))){
var state_32968__$1 = state_32968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32968__$1,(4),ch);
} else {
if((state_val_32969 === (11))){
var inst_32928 = (state_32968[(8)]);
var inst_32933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32934 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32928);
var inst_32935 = cljs.core.async.timeout.call(null,(1000));
var inst_32936 = [inst_32934,inst_32935];
var inst_32937 = (new cljs.core.PersistentVector(null,2,(5),inst_32933,inst_32936,null));
var state_32968__$1 = state_32968;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32968__$1,(14),inst_32937);
} else {
if((state_val_32969 === (9))){
var inst_32928 = (state_32968[(8)]);
var inst_32954 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32955 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32928);
var inst_32956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32955);
var inst_32957 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32956)].join('');
var inst_32958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32957);
var state_32968__$1 = (function (){var statearr_32981 = state_32968;
(statearr_32981[(10)] = inst_32954);

return statearr_32981;
})();
var statearr_32982_33007 = state_32968__$1;
(statearr_32982_33007[(2)] = inst_32958);

(statearr_32982_33007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (5))){
var inst_32921 = (state_32968[(7)]);
var inst_32923 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32924 = (new cljs.core.PersistentArrayMap(null,2,inst_32923,null));
var inst_32925 = (new cljs.core.PersistentHashSet(null,inst_32924,null));
var inst_32926 = figwheel.client.focus_msgs.call(null,inst_32925,inst_32921);
var inst_32927 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32926);
var inst_32928 = cljs.core.first.call(null,inst_32926);
var inst_32929 = figwheel.client.autoload_QMARK_.call(null);
var state_32968__$1 = (function (){var statearr_32983 = state_32968;
(statearr_32983[(8)] = inst_32928);

(statearr_32983[(9)] = inst_32927);

return statearr_32983;
})();
if(cljs.core.truth_(inst_32929)){
var statearr_32984_33008 = state_32968__$1;
(statearr_32984_33008[(1)] = (8));

} else {
var statearr_32985_33009 = state_32968__$1;
(statearr_32985_33009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (14))){
var inst_32939 = (state_32968[(2)]);
var state_32968__$1 = state_32968;
var statearr_32986_33010 = state_32968__$1;
(statearr_32986_33010[(2)] = inst_32939);

(statearr_32986_33010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (16))){
var state_32968__$1 = state_32968;
var statearr_32987_33011 = state_32968__$1;
(statearr_32987_33011[(2)] = null);

(statearr_32987_33011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (10))){
var inst_32960 = (state_32968[(2)]);
var state_32968__$1 = (function (){var statearr_32988 = state_32968;
(statearr_32988[(11)] = inst_32960);

return statearr_32988;
})();
var statearr_32989_33012 = state_32968__$1;
(statearr_32989_33012[(2)] = null);

(statearr_32989_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32969 === (8))){
var inst_32927 = (state_32968[(9)]);
var inst_32931 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32927,opts);
var state_32968__$1 = state_32968;
if(cljs.core.truth_(inst_32931)){
var statearr_32990_33013 = state_32968__$1;
(statearr_32990_33013[(1)] = (11));

} else {
var statearr_32991_33014 = state_32968__$1;
(statearr_32991_33014[(1)] = (12));

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
});})(c__29042__auto___32996,ch))
;
return ((function (switch__28951__auto__,c__29042__auto___32996,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____0 = (function (){
var statearr_32992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32992[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__);

(statearr_32992[(1)] = (1));

return statearr_32992;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____1 = (function (state_32968){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_32968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e32993){if((e32993 instanceof Object)){
var ex__28955__auto__ = e32993;
var statearr_32994_33015 = state_32968;
(statearr_32994_33015[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33016 = state_32968;
state_32968 = G__33016;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__ = function(state_32968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____1.call(this,state_32968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28952__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___32996,ch))
})();
var state__29044__auto__ = (function (){var statearr_32995 = f__29043__auto__.call(null);
(statearr_32995[(6)] = c__29042__auto___32996);

return statearr_32995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___32996,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33017_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33017_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33021 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33021){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33019 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33020 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33019,_STAR_print_fn_STAR_33020,sb,base_path_33021){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_33019,_STAR_print_fn_STAR_33020,sb,base_path_33021))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33020;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33019;
}}catch (e33018){if((e33018 instanceof Error)){
var e = e33018;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33021], null));
} else {
var e = e33018;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33021))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33022){
var map__33023 = p__33022;
var map__33023__$1 = ((((!((map__33023 == null)))?(((((map__33023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33023):map__33023);
var opts = map__33023__$1;
var build_id = cljs.core.get.call(null,map__33023__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33023,map__33023__$1,opts,build_id){
return (function (p__33025){
var vec__33026 = p__33025;
var seq__33027 = cljs.core.seq.call(null,vec__33026);
var first__33028 = cljs.core.first.call(null,seq__33027);
var seq__33027__$1 = cljs.core.next.call(null,seq__33027);
var map__33029 = first__33028;
var map__33029__$1 = ((((!((map__33029 == null)))?(((((map__33029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33029):map__33029);
var msg = map__33029__$1;
var msg_name = cljs.core.get.call(null,map__33029__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33027__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33026,seq__33027,first__33028,seq__33027__$1,map__33029,map__33029__$1,msg,msg_name,_,map__33023,map__33023__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33026,seq__33027,first__33028,seq__33027__$1,map__33029,map__33029__$1,msg,msg_name,_,map__33023,map__33023__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33023,map__33023__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33031){
var vec__33032 = p__33031;
var seq__33033 = cljs.core.seq.call(null,vec__33032);
var first__33034 = cljs.core.first.call(null,seq__33033);
var seq__33033__$1 = cljs.core.next.call(null,seq__33033);
var map__33035 = first__33034;
var map__33035__$1 = ((((!((map__33035 == null)))?(((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);
var msg = map__33035__$1;
var msg_name = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33033__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33037){
var map__33038 = p__33037;
var map__33038__$1 = ((((!((map__33038 == null)))?(((((map__33038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33038):map__33038);
var on_compile_warning = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33038,map__33038__$1,on_compile_warning,on_compile_fail){
return (function (p__33040){
var vec__33041 = p__33040;
var seq__33042 = cljs.core.seq.call(null,vec__33041);
var first__33043 = cljs.core.first.call(null,seq__33042);
var seq__33042__$1 = cljs.core.next.call(null,seq__33042);
var map__33044 = first__33043;
var map__33044__$1 = ((((!((map__33044 == null)))?(((((map__33044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33044):map__33044);
var msg = map__33044__$1;
var msg_name = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33042__$1;
var pred__33046 = cljs.core._EQ_;
var expr__33047 = msg_name;
if(cljs.core.truth_(pred__33046.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33047))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33046.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33047))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33038,map__33038__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__,msg_hist,msg_names,msg){
return (function (state_33136){
var state_val_33137 = (state_33136[(1)]);
if((state_val_33137 === (7))){
var inst_33056 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33056)){
var statearr_33138_33185 = state_33136__$1;
(statearr_33138_33185[(1)] = (8));

} else {
var statearr_33139_33186 = state_33136__$1;
(statearr_33139_33186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (20))){
var inst_33130 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33140_33187 = state_33136__$1;
(statearr_33140_33187[(2)] = inst_33130);

(statearr_33140_33187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (27))){
var inst_33126 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33141_33188 = state_33136__$1;
(statearr_33141_33188[(2)] = inst_33126);

(statearr_33141_33188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (1))){
var inst_33049 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33049)){
var statearr_33142_33189 = state_33136__$1;
(statearr_33142_33189[(1)] = (2));

} else {
var statearr_33143_33190 = state_33136__$1;
(statearr_33143_33190[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (24))){
var inst_33128 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33144_33191 = state_33136__$1;
(statearr_33144_33191[(2)] = inst_33128);

(statearr_33144_33191[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (4))){
var inst_33134 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33136__$1,inst_33134);
} else {
if((state_val_33137 === (15))){
var inst_33132 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33145_33192 = state_33136__$1;
(statearr_33145_33192[(2)] = inst_33132);

(statearr_33145_33192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (21))){
var inst_33085 = (state_33136[(2)]);
var inst_33086 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33087 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33086);
var state_33136__$1 = (function (){var statearr_33146 = state_33136;
(statearr_33146[(7)] = inst_33085);

return statearr_33146;
})();
var statearr_33147_33193 = state_33136__$1;
(statearr_33147_33193[(2)] = inst_33087);

(statearr_33147_33193[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (31))){
var inst_33115 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33115)){
var statearr_33148_33194 = state_33136__$1;
(statearr_33148_33194[(1)] = (34));

} else {
var statearr_33149_33195 = state_33136__$1;
(statearr_33149_33195[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (32))){
var inst_33124 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33150_33196 = state_33136__$1;
(statearr_33150_33196[(2)] = inst_33124);

(statearr_33150_33196[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (33))){
var inst_33111 = (state_33136[(2)]);
var inst_33112 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33113 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33112);
var state_33136__$1 = (function (){var statearr_33151 = state_33136;
(statearr_33151[(8)] = inst_33111);

return statearr_33151;
})();
var statearr_33152_33197 = state_33136__$1;
(statearr_33152_33197[(2)] = inst_33113);

(statearr_33152_33197[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (13))){
var inst_33070 = figwheel.client.heads_up.clear.call(null);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(16),inst_33070);
} else {
if((state_val_33137 === (22))){
var inst_33091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33092 = figwheel.client.heads_up.append_warning_message.call(null,inst_33091);
var state_33136__$1 = state_33136;
var statearr_33153_33198 = state_33136__$1;
(statearr_33153_33198[(2)] = inst_33092);

(statearr_33153_33198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (36))){
var inst_33122 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33154_33199 = state_33136__$1;
(statearr_33154_33199[(2)] = inst_33122);

(statearr_33154_33199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (29))){
var inst_33102 = (state_33136[(2)]);
var inst_33103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33104 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33103);
var state_33136__$1 = (function (){var statearr_33155 = state_33136;
(statearr_33155[(9)] = inst_33102);

return statearr_33155;
})();
var statearr_33156_33200 = state_33136__$1;
(statearr_33156_33200[(2)] = inst_33104);

(statearr_33156_33200[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (6))){
var inst_33051 = (state_33136[(10)]);
var state_33136__$1 = state_33136;
var statearr_33157_33201 = state_33136__$1;
(statearr_33157_33201[(2)] = inst_33051);

(statearr_33157_33201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (28))){
var inst_33098 = (state_33136[(2)]);
var inst_33099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33100 = figwheel.client.heads_up.display_warning.call(null,inst_33099);
var state_33136__$1 = (function (){var statearr_33158 = state_33136;
(statearr_33158[(11)] = inst_33098);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(29),inst_33100);
} else {
if((state_val_33137 === (25))){
var inst_33096 = figwheel.client.heads_up.clear.call(null);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(28),inst_33096);
} else {
if((state_val_33137 === (34))){
var inst_33117 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(37),inst_33117);
} else {
if((state_val_33137 === (17))){
var inst_33076 = (state_33136[(2)]);
var inst_33077 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33078 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33077);
var state_33136__$1 = (function (){var statearr_33159 = state_33136;
(statearr_33159[(12)] = inst_33076);

return statearr_33159;
})();
var statearr_33160_33202 = state_33136__$1;
(statearr_33160_33202[(2)] = inst_33078);

(statearr_33160_33202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (3))){
var inst_33068 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33068)){
var statearr_33161_33203 = state_33136__$1;
(statearr_33161_33203[(1)] = (13));

} else {
var statearr_33162_33204 = state_33136__$1;
(statearr_33162_33204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (12))){
var inst_33064 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33163_33205 = state_33136__$1;
(statearr_33163_33205[(2)] = inst_33064);

(statearr_33163_33205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (2))){
var inst_33051 = (state_33136[(10)]);
var inst_33051__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33136__$1 = (function (){var statearr_33164 = state_33136;
(statearr_33164[(10)] = inst_33051__$1);

return statearr_33164;
})();
if(cljs.core.truth_(inst_33051__$1)){
var statearr_33165_33206 = state_33136__$1;
(statearr_33165_33206[(1)] = (5));

} else {
var statearr_33166_33207 = state_33136__$1;
(statearr_33166_33207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (23))){
var inst_33094 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33094)){
var statearr_33167_33208 = state_33136__$1;
(statearr_33167_33208[(1)] = (25));

} else {
var statearr_33168_33209 = state_33136__$1;
(statearr_33168_33209[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (35))){
var state_33136__$1 = state_33136;
var statearr_33169_33210 = state_33136__$1;
(statearr_33169_33210[(2)] = null);

(statearr_33169_33210[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (19))){
var inst_33089 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33089)){
var statearr_33170_33211 = state_33136__$1;
(statearr_33170_33211[(1)] = (22));

} else {
var statearr_33171_33212 = state_33136__$1;
(statearr_33171_33212[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (11))){
var inst_33060 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33172_33213 = state_33136__$1;
(statearr_33172_33213[(2)] = inst_33060);

(statearr_33172_33213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (9))){
var inst_33062 = figwheel.client.heads_up.clear.call(null);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(12),inst_33062);
} else {
if((state_val_33137 === (5))){
var inst_33053 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33136__$1 = state_33136;
var statearr_33173_33214 = state_33136__$1;
(statearr_33173_33214[(2)] = inst_33053);

(statearr_33173_33214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (14))){
var inst_33080 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33080)){
var statearr_33174_33215 = state_33136__$1;
(statearr_33174_33215[(1)] = (18));

} else {
var statearr_33175_33216 = state_33136__$1;
(statearr_33175_33216[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (26))){
var inst_33106 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33106)){
var statearr_33176_33217 = state_33136__$1;
(statearr_33176_33217[(1)] = (30));

} else {
var statearr_33177_33218 = state_33136__$1;
(statearr_33177_33218[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (16))){
var inst_33072 = (state_33136[(2)]);
var inst_33073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33074 = figwheel.client.heads_up.display_exception.call(null,inst_33073);
var state_33136__$1 = (function (){var statearr_33178 = state_33136;
(statearr_33178[(13)] = inst_33072);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(17),inst_33074);
} else {
if((state_val_33137 === (30))){
var inst_33108 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33109 = figwheel.client.heads_up.display_warning.call(null,inst_33108);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(33),inst_33109);
} else {
if((state_val_33137 === (10))){
var inst_33066 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33179_33219 = state_33136__$1;
(statearr_33179_33219[(2)] = inst_33066);

(statearr_33179_33219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (18))){
var inst_33082 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33083 = figwheel.client.heads_up.display_exception.call(null,inst_33082);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(21),inst_33083);
} else {
if((state_val_33137 === (37))){
var inst_33119 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33180_33220 = state_33136__$1;
(statearr_33180_33220[(2)] = inst_33119);

(statearr_33180_33220[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (8))){
var inst_33058 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(11),inst_33058);
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
});})(c__29042__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28951__auto__,c__29042__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____0 = (function (){
var statearr_33181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33181[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__);

(statearr_33181[(1)] = (1));

return statearr_33181;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____1 = (function (state_33136){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_33136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e33182){if((e33182 instanceof Object)){
var ex__28955__auto__ = e33182;
var statearr_33183_33221 = state_33136;
(statearr_33183_33221[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_33136;
state_33136 = G__33222;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__ = function(state_33136){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____1.call(this,state_33136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__,msg_hist,msg_names,msg))
})();
var state__29044__auto__ = (function (){var statearr_33184 = f__29043__auto__.call(null);
(statearr_33184[(6)] = c__29042__auto__);

return statearr_33184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__,msg_hist,msg_names,msg))
);

return c__29042__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29042__auto___33251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___33251,ch){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___33251,ch){
return (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (1))){
var state_33237__$1 = state_33237;
var statearr_33239_33252 = state_33237__$1;
(statearr_33239_33252[(2)] = null);

(statearr_33239_33252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (2))){
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33237__$1,(4),ch);
} else {
if((state_val_33238 === (3))){
var inst_33235 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33237__$1,inst_33235);
} else {
if((state_val_33238 === (4))){
var inst_33225 = (state_33237[(7)]);
var inst_33225__$1 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33240 = state_33237;
(statearr_33240[(7)] = inst_33225__$1);

return statearr_33240;
})();
if(cljs.core.truth_(inst_33225__$1)){
var statearr_33241_33253 = state_33237__$1;
(statearr_33241_33253[(1)] = (5));

} else {
var statearr_33242_33254 = state_33237__$1;
(statearr_33242_33254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (5))){
var inst_33225 = (state_33237[(7)]);
var inst_33227 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33225);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33237__$1,(8),inst_33227);
} else {
if((state_val_33238 === (6))){
var state_33237__$1 = state_33237;
var statearr_33243_33255 = state_33237__$1;
(statearr_33243_33255[(2)] = null);

(statearr_33243_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (7))){
var inst_33233 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33244_33256 = state_33237__$1;
(statearr_33244_33256[(2)] = inst_33233);

(statearr_33244_33256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (8))){
var inst_33229 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33245 = state_33237;
(statearr_33245[(8)] = inst_33229);

return statearr_33245;
})();
var statearr_33246_33257 = state_33237__$1;
(statearr_33246_33257[(2)] = null);

(statearr_33246_33257[(1)] = (2));


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
});})(c__29042__auto___33251,ch))
;
return ((function (switch__28951__auto__,c__29042__auto___33251,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28952__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28952__auto____0 = (function (){
var statearr_33247 = [null,null,null,null,null,null,null,null,null];
(statearr_33247[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28952__auto__);

(statearr_33247[(1)] = (1));

return statearr_33247;
});
var figwheel$client$heads_up_plugin_$_state_machine__28952__auto____1 = (function (state_33237){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_33237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e33248){if((e33248 instanceof Object)){
var ex__28955__auto__ = e33248;
var statearr_33249_33258 = state_33237;
(statearr_33249_33258[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33259 = state_33237;
state_33237 = G__33259;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28952__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28952__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28952__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28952__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___33251,ch))
})();
var state__29044__auto__ = (function (){var statearr_33250 = f__29043__auto__.call(null);
(statearr_33250[(6)] = c__29042__auto___33251);

return statearr_33250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___33251,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__){
return (function (state_33265){
var state_val_33266 = (state_33265[(1)]);
if((state_val_33266 === (1))){
var inst_33260 = cljs.core.async.timeout.call(null,(3000));
var state_33265__$1 = state_33265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33265__$1,(2),inst_33260);
} else {
if((state_val_33266 === (2))){
var inst_33262 = (state_33265[(2)]);
var inst_33263 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33265__$1 = (function (){var statearr_33267 = state_33265;
(statearr_33267[(7)] = inst_33262);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33265__$1,inst_33263);
} else {
return null;
}
}
});})(c__29042__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____0 = (function (){
var statearr_33268 = [null,null,null,null,null,null,null,null];
(statearr_33268[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__);

(statearr_33268[(1)] = (1));

return statearr_33268;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____1 = (function (state_33265){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_33265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e33269){if((e33269 instanceof Object)){
var ex__28955__auto__ = e33269;
var statearr_33270_33272 = state_33265;
(statearr_33270_33272[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33273 = state_33265;
state_33265 = G__33273;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__ = function(state_33265){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____1.call(this,state_33265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28952__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__))
})();
var state__29044__auto__ = (function (){var statearr_33271 = f__29043__auto__.call(null);
(statearr_33271[(6)] = c__29042__auto__);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__))
);

return c__29042__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__,figwheel_version,temp__5457__auto__){
return (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (1))){
var inst_33274 = cljs.core.async.timeout.call(null,(2000));
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33280__$1,(2),inst_33274);
} else {
if((state_val_33281 === (2))){
var inst_33276 = (state_33280[(2)]);
var inst_33277 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33278 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33277);
var state_33280__$1 = (function (){var statearr_33282 = state_33280;
(statearr_33282[(7)] = inst_33276);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33280__$1,inst_33278);
} else {
return null;
}
}
});})(c__29042__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____0 = (function (){
var statearr_33283 = [null,null,null,null,null,null,null,null];
(statearr_33283[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__);

(statearr_33283[(1)] = (1));

return statearr_33283;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____1 = (function (state_33280){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_33280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e33284){if((e33284 instanceof Object)){
var ex__28955__auto__ = e33284;
var statearr_33285_33287 = state_33280;
(statearr_33285_33287[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33288 = state_33280;
state_33280 = G__33288;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29044__auto__ = (function (){var statearr_33286 = f__29043__auto__.call(null);
(statearr_33286[(6)] = c__29042__auto__);

return statearr_33286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__,figwheel_version,temp__5457__auto__))
);

return c__29042__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33289){
var map__33290 = p__33289;
var map__33290__$1 = ((((!((map__33290 == null)))?(((((map__33290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33290):map__33290);
var file = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33292 = "";
var G__33292__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33292),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33292);
var G__33292__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33292__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33292__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33292__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33292__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33293){
var map__33294 = p__33293;
var map__33294__$1 = ((((!((map__33294 == null)))?(((((map__33294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33294):map__33294);
var ed = map__33294__$1;
var formatted_exception = cljs.core.get.call(null,map__33294__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33294__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33294__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33296_33300 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33297_33301 = null;
var count__33298_33302 = (0);
var i__33299_33303 = (0);
while(true){
if((i__33299_33303 < count__33298_33302)){
var msg_33304 = cljs.core._nth.call(null,chunk__33297_33301,i__33299_33303);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33304);


var G__33305 = seq__33296_33300;
var G__33306 = chunk__33297_33301;
var G__33307 = count__33298_33302;
var G__33308 = (i__33299_33303 + (1));
seq__33296_33300 = G__33305;
chunk__33297_33301 = G__33306;
count__33298_33302 = G__33307;
i__33299_33303 = G__33308;
continue;
} else {
var temp__5457__auto___33309 = cljs.core.seq.call(null,seq__33296_33300);
if(temp__5457__auto___33309){
var seq__33296_33310__$1 = temp__5457__auto___33309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33296_33310__$1)){
var c__4351__auto___33311 = cljs.core.chunk_first.call(null,seq__33296_33310__$1);
var G__33312 = cljs.core.chunk_rest.call(null,seq__33296_33310__$1);
var G__33313 = c__4351__auto___33311;
var G__33314 = cljs.core.count.call(null,c__4351__auto___33311);
var G__33315 = (0);
seq__33296_33300 = G__33312;
chunk__33297_33301 = G__33313;
count__33298_33302 = G__33314;
i__33299_33303 = G__33315;
continue;
} else {
var msg_33316 = cljs.core.first.call(null,seq__33296_33310__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33316);


var G__33317 = cljs.core.next.call(null,seq__33296_33310__$1);
var G__33318 = null;
var G__33319 = (0);
var G__33320 = (0);
seq__33296_33300 = G__33317;
chunk__33297_33301 = G__33318;
count__33298_33302 = G__33319;
i__33299_33303 = G__33320;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33321){
var map__33322 = p__33321;
var map__33322__$1 = ((((!((map__33322 == null)))?(((((map__33322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var w = map__33322__$1;
var message = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33324 = cljs.core.seq.call(null,plugins);
var chunk__33325 = null;
var count__33326 = (0);
var i__33327 = (0);
while(true){
if((i__33327 < count__33326)){
var vec__33328 = cljs.core._nth.call(null,chunk__33325,i__33327);
var k = cljs.core.nth.call(null,vec__33328,(0),null);
var plugin = cljs.core.nth.call(null,vec__33328,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33324,chunk__33325,count__33326,i__33327,pl_33334,vec__33328,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33334.call(null,msg_hist);
});})(seq__33324,chunk__33325,count__33326,i__33327,pl_33334,vec__33328,k,plugin))
);
} else {
}


var G__33335 = seq__33324;
var G__33336 = chunk__33325;
var G__33337 = count__33326;
var G__33338 = (i__33327 + (1));
seq__33324 = G__33335;
chunk__33325 = G__33336;
count__33326 = G__33337;
i__33327 = G__33338;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33324);
if(temp__5457__auto__){
var seq__33324__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33324__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33324__$1);
var G__33339 = cljs.core.chunk_rest.call(null,seq__33324__$1);
var G__33340 = c__4351__auto__;
var G__33341 = cljs.core.count.call(null,c__4351__auto__);
var G__33342 = (0);
seq__33324 = G__33339;
chunk__33325 = G__33340;
count__33326 = G__33341;
i__33327 = G__33342;
continue;
} else {
var vec__33331 = cljs.core.first.call(null,seq__33324__$1);
var k = cljs.core.nth.call(null,vec__33331,(0),null);
var plugin = cljs.core.nth.call(null,vec__33331,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33343 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33324,chunk__33325,count__33326,i__33327,pl_33343,vec__33331,k,plugin,seq__33324__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33343.call(null,msg_hist);
});})(seq__33324,chunk__33325,count__33326,i__33327,pl_33343,vec__33331,k,plugin,seq__33324__$1,temp__5457__auto__))
);
} else {
}


var G__33344 = cljs.core.next.call(null,seq__33324__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__33324 = G__33344;
chunk__33325 = G__33345;
count__33326 = G__33346;
i__33327 = G__33347;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33349 = arguments.length;
switch (G__33349) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33350_33355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33351_33356 = null;
var count__33352_33357 = (0);
var i__33353_33358 = (0);
while(true){
if((i__33353_33358 < count__33352_33357)){
var msg_33359 = cljs.core._nth.call(null,chunk__33351_33356,i__33353_33358);
figwheel.client.socket.handle_incoming_message.call(null,msg_33359);


var G__33360 = seq__33350_33355;
var G__33361 = chunk__33351_33356;
var G__33362 = count__33352_33357;
var G__33363 = (i__33353_33358 + (1));
seq__33350_33355 = G__33360;
chunk__33351_33356 = G__33361;
count__33352_33357 = G__33362;
i__33353_33358 = G__33363;
continue;
} else {
var temp__5457__auto___33364 = cljs.core.seq.call(null,seq__33350_33355);
if(temp__5457__auto___33364){
var seq__33350_33365__$1 = temp__5457__auto___33364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33350_33365__$1)){
var c__4351__auto___33366 = cljs.core.chunk_first.call(null,seq__33350_33365__$1);
var G__33367 = cljs.core.chunk_rest.call(null,seq__33350_33365__$1);
var G__33368 = c__4351__auto___33366;
var G__33369 = cljs.core.count.call(null,c__4351__auto___33366);
var G__33370 = (0);
seq__33350_33355 = G__33367;
chunk__33351_33356 = G__33368;
count__33352_33357 = G__33369;
i__33353_33358 = G__33370;
continue;
} else {
var msg_33371 = cljs.core.first.call(null,seq__33350_33365__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33371);


var G__33372 = cljs.core.next.call(null,seq__33350_33365__$1);
var G__33373 = null;
var G__33374 = (0);
var G__33375 = (0);
seq__33350_33355 = G__33372;
chunk__33351_33356 = G__33373;
count__33352_33357 = G__33374;
i__33353_33358 = G__33375;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33380 = arguments.length;
var i__4532__auto___33381 = (0);
while(true){
if((i__4532__auto___33381 < len__4531__auto___33380)){
args__4534__auto__.push((arguments[i__4532__auto___33381]));

var G__33382 = (i__4532__auto___33381 + (1));
i__4532__auto___33381 = G__33382;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33377){
var map__33378 = p__33377;
var map__33378__$1 = ((((!((map__33378 == null)))?(((((map__33378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33378):map__33378);
var opts = map__33378__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33376){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33376));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33383){if((e33383 instanceof Error)){
var e = e33383;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33383;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33384){
var map__33385 = p__33384;
var map__33385__$1 = ((((!((map__33385 == null)))?(((((map__33385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33385):map__33385);
var msg_name = cljs.core.get.call(null,map__33385__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543694785092
