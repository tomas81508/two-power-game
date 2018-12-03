// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29102 = arguments.length;
switch (G__29102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29103 = (function (f,blockable,meta29104){
this.f = f;
this.blockable = blockable;
this.meta29104 = meta29104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29105,meta29104__$1){
var self__ = this;
var _29105__$1 = this;
return (new cljs.core.async.t_cljs$core$async29103(self__.f,self__.blockable,meta29104__$1));
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29105){
var self__ = this;
var _29105__$1 = this;
return self__.meta29104;
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29104","meta29104",953160822,null)], null);
});

cljs.core.async.t_cljs$core$async29103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29103";

cljs.core.async.t_cljs$core$async29103.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29103");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29103.
 */
cljs.core.async.__GT_t_cljs$core$async29103 = (function cljs$core$async$__GT_t_cljs$core$async29103(f__$1,blockable__$1,meta29104){
return (new cljs.core.async.t_cljs$core$async29103(f__$1,blockable__$1,meta29104));
});

}

return (new cljs.core.async.t_cljs$core$async29103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29109 = arguments.length;
switch (G__29109) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29112 = arguments.length;
switch (G__29112) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29115 = arguments.length;
switch (G__29115) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29117 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29117);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29117,ret){
return (function (){
return fn1.call(null,val_29117);
});})(val_29117,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29119 = arguments.length;
switch (G__29119) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___29121 = n;
var x_29122 = (0);
while(true){
if((x_29122 < n__4408__auto___29121)){
(a[x_29122] = (0));

var G__29123 = (x_29122 + (1));
x_29122 = G__29123;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29124 = (i + (1));
i = G__29124;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29125 = (function (flag,meta29126){
this.flag = flag;
this.meta29126 = meta29126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29127,meta29126__$1){
var self__ = this;
var _29127__$1 = this;
return (new cljs.core.async.t_cljs$core$async29125(self__.flag,meta29126__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29127){
var self__ = this;
var _29127__$1 = this;
return self__.meta29126;
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29126","meta29126",-750481742,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29125";

cljs.core.async.t_cljs$core$async29125.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29125");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29125.
 */
cljs.core.async.__GT_t_cljs$core$async29125 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29125(flag__$1,meta29126){
return (new cljs.core.async.t_cljs$core$async29125(flag__$1,meta29126));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29125(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29128 = (function (flag,cb,meta29129){
this.flag = flag;
this.cb = cb;
this.meta29129 = meta29129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29130,meta29129__$1){
var self__ = this;
var _29130__$1 = this;
return (new cljs.core.async.t_cljs$core$async29128(self__.flag,self__.cb,meta29129__$1));
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29130){
var self__ = this;
var _29130__$1 = this;
return self__.meta29129;
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29129","meta29129",1908437554,null)], null);
});

cljs.core.async.t_cljs$core$async29128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29128";

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29128");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29128.
 */
cljs.core.async.__GT_t_cljs$core$async29128 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29128(flag__$1,cb__$1,meta29129){
return (new cljs.core.async.t_cljs$core$async29128(flag__$1,cb__$1,meta29129));
});

}

return (new cljs.core.async.t_cljs$core$async29128(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29131_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29131_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29132_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29132_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29133 = (i + (1));
i = G__29133;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29139 = arguments.length;
var i__4532__auto___29140 = (0);
while(true){
if((i__4532__auto___29140 < len__4531__auto___29139)){
args__4534__auto__.push((arguments[i__4532__auto___29140]));

var G__29141 = (i__4532__auto___29140 + (1));
i__4532__auto___29140 = G__29141;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29136){
var map__29137 = p__29136;
var map__29137__$1 = ((((!((map__29137 == null)))?(((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var opts = map__29137__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29134){
var G__29135 = cljs.core.first.call(null,seq29134);
var seq29134__$1 = cljs.core.next.call(null,seq29134);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29135,seq29134__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29143 = arguments.length;
switch (G__29143) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29042__auto___29189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___29189){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___29189){
return (function (state_29167){
var state_val_29168 = (state_29167[(1)]);
if((state_val_29168 === (7))){
var inst_29163 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29169_29190 = state_29167__$1;
(statearr_29169_29190[(2)] = inst_29163);

(statearr_29169_29190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (1))){
var state_29167__$1 = state_29167;
var statearr_29170_29191 = state_29167__$1;
(statearr_29170_29191[(2)] = null);

(statearr_29170_29191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (4))){
var inst_29146 = (state_29167[(7)]);
var inst_29146__$1 = (state_29167[(2)]);
var inst_29147 = (inst_29146__$1 == null);
var state_29167__$1 = (function (){var statearr_29171 = state_29167;
(statearr_29171[(7)] = inst_29146__$1);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29147)){
var statearr_29172_29192 = state_29167__$1;
(statearr_29172_29192[(1)] = (5));

} else {
var statearr_29173_29193 = state_29167__$1;
(statearr_29173_29193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (13))){
var state_29167__$1 = state_29167;
var statearr_29174_29194 = state_29167__$1;
(statearr_29174_29194[(2)] = null);

(statearr_29174_29194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (6))){
var inst_29146 = (state_29167[(7)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29167__$1,(11),to,inst_29146);
} else {
if((state_val_29168 === (3))){
var inst_29165 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29167__$1,inst_29165);
} else {
if((state_val_29168 === (12))){
var state_29167__$1 = state_29167;
var statearr_29175_29195 = state_29167__$1;
(statearr_29175_29195[(2)] = null);

(statearr_29175_29195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (2))){
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29167__$1,(4),from);
} else {
if((state_val_29168 === (11))){
var inst_29156 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
if(cljs.core.truth_(inst_29156)){
var statearr_29176_29196 = state_29167__$1;
(statearr_29176_29196[(1)] = (12));

} else {
var statearr_29177_29197 = state_29167__$1;
(statearr_29177_29197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (9))){
var state_29167__$1 = state_29167;
var statearr_29178_29198 = state_29167__$1;
(statearr_29178_29198[(2)] = null);

(statearr_29178_29198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (5))){
var state_29167__$1 = state_29167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29179_29199 = state_29167__$1;
(statearr_29179_29199[(1)] = (8));

} else {
var statearr_29180_29200 = state_29167__$1;
(statearr_29180_29200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (14))){
var inst_29161 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29181_29201 = state_29167__$1;
(statearr_29181_29201[(2)] = inst_29161);

(statearr_29181_29201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (10))){
var inst_29153 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29182_29202 = state_29167__$1;
(statearr_29182_29202[(2)] = inst_29153);

(statearr_29182_29202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (8))){
var inst_29150 = cljs.core.async.close_BANG_.call(null,to);
var state_29167__$1 = state_29167;
var statearr_29183_29203 = state_29167__$1;
(statearr_29183_29203[(2)] = inst_29150);

(statearr_29183_29203[(1)] = (10));


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
});})(c__29042__auto___29189))
;
return ((function (switch__28951__auto__,c__29042__auto___29189){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_29184 = [null,null,null,null,null,null,null,null];
(statearr_29184[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_29184[(1)] = (1));

return statearr_29184;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_29167){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29185){if((e29185 instanceof Object)){
var ex__28955__auto__ = e29185;
var statearr_29186_29204 = state_29167;
(statearr_29186_29204[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29205 = state_29167;
state_29167 = G__29205;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_29167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_29167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___29189))
})();
var state__29044__auto__ = (function (){var statearr_29187 = f__29043__auto__.call(null);
(statearr_29187[(6)] = c__29042__auto___29189);

return statearr_29187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___29189))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29206){
var vec__29207 = p__29206;
var v = cljs.core.nth.call(null,vec__29207,(0),null);
var p = cljs.core.nth.call(null,vec__29207,(1),null);
var job = vec__29207;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29042__auto___29378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results){
return (function (state_29214){
var state_val_29215 = (state_29214[(1)]);
if((state_val_29215 === (1))){
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29214__$1,(2),res,v);
} else {
if((state_val_29215 === (2))){
var inst_29211 = (state_29214[(2)]);
var inst_29212 = cljs.core.async.close_BANG_.call(null,res);
var state_29214__$1 = (function (){var statearr_29216 = state_29214;
(statearr_29216[(7)] = inst_29211);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29214__$1,inst_29212);
} else {
return null;
}
}
});})(c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results))
;
return ((function (switch__28951__auto__,c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1 = (function (state_29214){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__28955__auto__ = e29218;
var statearr_29219_29379 = state_29214;
(statearr_29219_29379[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29380 = state_29214;
state_29214 = G__29380;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = function(state_29214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1.call(this,state_29214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results))
})();
var state__29044__auto__ = (function (){var statearr_29220 = f__29043__auto__.call(null);
(statearr_29220[(6)] = c__29042__auto___29378);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___29378,res,vec__29207,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29221){
var vec__29222 = p__29221;
var v = cljs.core.nth.call(null,vec__29222,(0),null);
var p = cljs.core.nth.call(null,vec__29222,(1),null);
var job = vec__29222;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___29381 = n;
var __29382 = (0);
while(true){
if((__29382 < n__4408__auto___29381)){
var G__29225_29383 = type;
var G__29225_29384__$1 = (((G__29225_29383 instanceof cljs.core.Keyword))?G__29225_29383.fqn:null);
switch (G__29225_29384__$1) {
case "compute":
var c__29042__auto___29386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29382,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (__29382,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (1))){
var state_29238__$1 = state_29238;
var statearr_29240_29387 = state_29238__$1;
(statearr_29240_29387[(2)] = null);

(statearr_29240_29387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),jobs);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (4))){
var inst_29228 = (state_29238[(2)]);
var inst_29229 = process.call(null,inst_29228);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29229)){
var statearr_29241_29388 = state_29238__$1;
(statearr_29241_29388[(1)] = (5));

} else {
var statearr_29242_29389 = state_29238__$1;
(statearr_29242_29389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var state_29238__$1 = state_29238;
var statearr_29243_29390 = state_29238__$1;
(statearr_29243_29390[(2)] = null);

(statearr_29243_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var state_29238__$1 = state_29238;
var statearr_29244_29391 = state_29238__$1;
(statearr_29244_29391[(2)] = null);

(statearr_29244_29391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (7))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29245_29392 = state_29238__$1;
(statearr_29245_29392[(2)] = inst_29234);

(statearr_29245_29392[(1)] = (3));


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
});})(__29382,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
;
return ((function (__29382,switch__28951__auto__,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_29246 = [null,null,null,null,null,null,null];
(statearr_29246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__);

(statearr_29246[(1)] = (1));

return statearr_29246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1 = (function (state_29238){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29247){if((e29247 instanceof Object)){
var ex__28955__auto__ = e29247;
var statearr_29248_29393 = state_29238;
(statearr_29248_29393[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29394 = state_29238;
state_29238 = G__29394;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__;
})()
;})(__29382,switch__28951__auto__,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
})();
var state__29044__auto__ = (function (){var statearr_29249 = f__29043__auto__.call(null);
(statearr_29249[(6)] = c__29042__auto___29386);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(__29382,c__29042__auto___29386,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
);


break;
case "async":
var c__29042__auto___29395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29382,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (__29382,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function (state_29262){
var state_val_29263 = (state_29262[(1)]);
if((state_val_29263 === (1))){
var state_29262__$1 = state_29262;
var statearr_29264_29396 = state_29262__$1;
(statearr_29264_29396[(2)] = null);

(statearr_29264_29396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (2))){
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29262__$1,(4),jobs);
} else {
if((state_val_29263 === (3))){
var inst_29260 = (state_29262[(2)]);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29262__$1,inst_29260);
} else {
if((state_val_29263 === (4))){
var inst_29252 = (state_29262[(2)]);
var inst_29253 = async.call(null,inst_29252);
var state_29262__$1 = state_29262;
if(cljs.core.truth_(inst_29253)){
var statearr_29265_29397 = state_29262__$1;
(statearr_29265_29397[(1)] = (5));

} else {
var statearr_29266_29398 = state_29262__$1;
(statearr_29266_29398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (5))){
var state_29262__$1 = state_29262;
var statearr_29267_29399 = state_29262__$1;
(statearr_29267_29399[(2)] = null);

(statearr_29267_29399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (6))){
var state_29262__$1 = state_29262;
var statearr_29268_29400 = state_29262__$1;
(statearr_29268_29400[(2)] = null);

(statearr_29268_29400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (7))){
var inst_29258 = (state_29262[(2)]);
var state_29262__$1 = state_29262;
var statearr_29269_29401 = state_29262__$1;
(statearr_29269_29401[(2)] = inst_29258);

(statearr_29269_29401[(1)] = (3));


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
});})(__29382,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
;
return ((function (__29382,switch__28951__auto__,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_29270 = [null,null,null,null,null,null,null];
(statearr_29270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__);

(statearr_29270[(1)] = (1));

return statearr_29270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1 = (function (state_29262){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29271){if((e29271 instanceof Object)){
var ex__28955__auto__ = e29271;
var statearr_29272_29402 = state_29262;
(statearr_29272_29402[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29403 = state_29262;
state_29262 = G__29403;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = function(state_29262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1.call(this,state_29262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__;
})()
;})(__29382,switch__28951__auto__,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
})();
var state__29044__auto__ = (function (){var statearr_29273 = f__29043__auto__.call(null);
(statearr_29273[(6)] = c__29042__auto___29395);

return statearr_29273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(__29382,c__29042__auto___29395,G__29225_29383,G__29225_29384__$1,n__4408__auto___29381,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29225_29384__$1)].join('')));

}

var G__29404 = (__29382 + (1));
__29382 = G__29404;
continue;
} else {
}
break;
}

var c__29042__auto___29405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___29405,jobs,results,process,async){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___29405,jobs,results,process,async){
return (function (state_29295){
var state_val_29296 = (state_29295[(1)]);
if((state_val_29296 === (1))){
var state_29295__$1 = state_29295;
var statearr_29297_29406 = state_29295__$1;
(statearr_29297_29406[(2)] = null);

(statearr_29297_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (2))){
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29295__$1,(4),from);
} else {
if((state_val_29296 === (3))){
var inst_29293 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29295__$1,inst_29293);
} else {
if((state_val_29296 === (4))){
var inst_29276 = (state_29295[(7)]);
var inst_29276__$1 = (state_29295[(2)]);
var inst_29277 = (inst_29276__$1 == null);
var state_29295__$1 = (function (){var statearr_29298 = state_29295;
(statearr_29298[(7)] = inst_29276__$1);

return statearr_29298;
})();
if(cljs.core.truth_(inst_29277)){
var statearr_29299_29407 = state_29295__$1;
(statearr_29299_29407[(1)] = (5));

} else {
var statearr_29300_29408 = state_29295__$1;
(statearr_29300_29408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (5))){
var inst_29279 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29295__$1 = state_29295;
var statearr_29301_29409 = state_29295__$1;
(statearr_29301_29409[(2)] = inst_29279);

(statearr_29301_29409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (6))){
var inst_29281 = (state_29295[(8)]);
var inst_29276 = (state_29295[(7)]);
var inst_29281__$1 = cljs.core.async.chan.call(null,(1));
var inst_29282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29283 = [inst_29276,inst_29281__$1];
var inst_29284 = (new cljs.core.PersistentVector(null,2,(5),inst_29282,inst_29283,null));
var state_29295__$1 = (function (){var statearr_29302 = state_29295;
(statearr_29302[(8)] = inst_29281__$1);

return statearr_29302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(8),jobs,inst_29284);
} else {
if((state_val_29296 === (7))){
var inst_29291 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29303_29410 = state_29295__$1;
(statearr_29303_29410[(2)] = inst_29291);

(statearr_29303_29410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (8))){
var inst_29281 = (state_29295[(8)]);
var inst_29286 = (state_29295[(2)]);
var state_29295__$1 = (function (){var statearr_29304 = state_29295;
(statearr_29304[(9)] = inst_29286);

return statearr_29304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(9),results,inst_29281);
} else {
if((state_val_29296 === (9))){
var inst_29288 = (state_29295[(2)]);
var state_29295__$1 = (function (){var statearr_29305 = state_29295;
(statearr_29305[(10)] = inst_29288);

return statearr_29305;
})();
var statearr_29306_29411 = state_29295__$1;
(statearr_29306_29411[(2)] = null);

(statearr_29306_29411[(1)] = (2));


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
});})(c__29042__auto___29405,jobs,results,process,async))
;
return ((function (switch__28951__auto__,c__29042__auto___29405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_29307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__);

(statearr_29307[(1)] = (1));

return statearr_29307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1 = (function (state_29295){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29308){if((e29308 instanceof Object)){
var ex__28955__auto__ = e29308;
var statearr_29309_29412 = state_29295;
(statearr_29309_29412[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29413 = state_29295;
state_29295 = G__29413;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = function(state_29295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1.call(this,state_29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___29405,jobs,results,process,async))
})();
var state__29044__auto__ = (function (){var statearr_29310 = f__29043__auto__.call(null);
(statearr_29310[(6)] = c__29042__auto___29405);

return statearr_29310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___29405,jobs,results,process,async))
);


var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__,jobs,results,process,async){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__,jobs,results,process,async){
return (function (state_29348){
var state_val_29349 = (state_29348[(1)]);
if((state_val_29349 === (7))){
var inst_29344 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29350_29414 = state_29348__$1;
(statearr_29350_29414[(2)] = inst_29344);

(statearr_29350_29414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (20))){
var state_29348__$1 = state_29348;
var statearr_29351_29415 = state_29348__$1;
(statearr_29351_29415[(2)] = null);

(statearr_29351_29415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (1))){
var state_29348__$1 = state_29348;
var statearr_29352_29416 = state_29348__$1;
(statearr_29352_29416[(2)] = null);

(statearr_29352_29416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (4))){
var inst_29313 = (state_29348[(7)]);
var inst_29313__$1 = (state_29348[(2)]);
var inst_29314 = (inst_29313__$1 == null);
var state_29348__$1 = (function (){var statearr_29353 = state_29348;
(statearr_29353[(7)] = inst_29313__$1);

return statearr_29353;
})();
if(cljs.core.truth_(inst_29314)){
var statearr_29354_29417 = state_29348__$1;
(statearr_29354_29417[(1)] = (5));

} else {
var statearr_29355_29418 = state_29348__$1;
(statearr_29355_29418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (15))){
var inst_29326 = (state_29348[(8)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29348__$1,(18),to,inst_29326);
} else {
if((state_val_29349 === (21))){
var inst_29339 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29356_29419 = state_29348__$1;
(statearr_29356_29419[(2)] = inst_29339);

(statearr_29356_29419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (13))){
var inst_29341 = (state_29348[(2)]);
var state_29348__$1 = (function (){var statearr_29357 = state_29348;
(statearr_29357[(9)] = inst_29341);

return statearr_29357;
})();
var statearr_29358_29420 = state_29348__$1;
(statearr_29358_29420[(2)] = null);

(statearr_29358_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (6))){
var inst_29313 = (state_29348[(7)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(11),inst_29313);
} else {
if((state_val_29349 === (17))){
var inst_29334 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
if(cljs.core.truth_(inst_29334)){
var statearr_29359_29421 = state_29348__$1;
(statearr_29359_29421[(1)] = (19));

} else {
var statearr_29360_29422 = state_29348__$1;
(statearr_29360_29422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (3))){
var inst_29346 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29348__$1,inst_29346);
} else {
if((state_val_29349 === (12))){
var inst_29323 = (state_29348[(10)]);
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(14),inst_29323);
} else {
if((state_val_29349 === (2))){
var state_29348__$1 = state_29348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29348__$1,(4),results);
} else {
if((state_val_29349 === (19))){
var state_29348__$1 = state_29348;
var statearr_29361_29423 = state_29348__$1;
(statearr_29361_29423[(2)] = null);

(statearr_29361_29423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (11))){
var inst_29323 = (state_29348[(2)]);
var state_29348__$1 = (function (){var statearr_29362 = state_29348;
(statearr_29362[(10)] = inst_29323);

return statearr_29362;
})();
var statearr_29363_29424 = state_29348__$1;
(statearr_29363_29424[(2)] = null);

(statearr_29363_29424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (9))){
var state_29348__$1 = state_29348;
var statearr_29364_29425 = state_29348__$1;
(statearr_29364_29425[(2)] = null);

(statearr_29364_29425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (5))){
var state_29348__$1 = state_29348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29365_29426 = state_29348__$1;
(statearr_29365_29426[(1)] = (8));

} else {
var statearr_29366_29427 = state_29348__$1;
(statearr_29366_29427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (14))){
var inst_29328 = (state_29348[(11)]);
var inst_29326 = (state_29348[(8)]);
var inst_29326__$1 = (state_29348[(2)]);
var inst_29327 = (inst_29326__$1 == null);
var inst_29328__$1 = cljs.core.not.call(null,inst_29327);
var state_29348__$1 = (function (){var statearr_29367 = state_29348;
(statearr_29367[(11)] = inst_29328__$1);

(statearr_29367[(8)] = inst_29326__$1);

return statearr_29367;
})();
if(inst_29328__$1){
var statearr_29368_29428 = state_29348__$1;
(statearr_29368_29428[(1)] = (15));

} else {
var statearr_29369_29429 = state_29348__$1;
(statearr_29369_29429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (16))){
var inst_29328 = (state_29348[(11)]);
var state_29348__$1 = state_29348;
var statearr_29370_29430 = state_29348__$1;
(statearr_29370_29430[(2)] = inst_29328);

(statearr_29370_29430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (10))){
var inst_29320 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29371_29431 = state_29348__$1;
(statearr_29371_29431[(2)] = inst_29320);

(statearr_29371_29431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (18))){
var inst_29331 = (state_29348[(2)]);
var state_29348__$1 = state_29348;
var statearr_29372_29432 = state_29348__$1;
(statearr_29372_29432[(2)] = inst_29331);

(statearr_29372_29432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29349 === (8))){
var inst_29317 = cljs.core.async.close_BANG_.call(null,to);
var state_29348__$1 = state_29348;
var statearr_29373_29433 = state_29348__$1;
(statearr_29373_29433[(2)] = inst_29317);

(statearr_29373_29433[(1)] = (10));


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
});})(c__29042__auto__,jobs,results,process,async))
;
return ((function (switch__28951__auto__,c__29042__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_29374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__);

(statearr_29374[(1)] = (1));

return statearr_29374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1 = (function (state_29348){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29375){if((e29375 instanceof Object)){
var ex__28955__auto__ = e29375;
var statearr_29376_29434 = state_29348;
(statearr_29376_29434[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29348;
state_29348 = G__29435;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__ = function(state_29348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1.call(this,state_29348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__,jobs,results,process,async))
})();
var state__29044__auto__ = (function (){var statearr_29377 = f__29043__auto__.call(null);
(statearr_29377[(6)] = c__29042__auto__);

return statearr_29377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__,jobs,results,process,async))
);

return c__29042__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29437 = arguments.length;
switch (G__29437) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29440 = arguments.length;
switch (G__29440) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29443 = arguments.length;
switch (G__29443) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29042__auto___29492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___29492,tc,fc){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___29492,tc,fc){
return (function (state_29469){
var state_val_29470 = (state_29469[(1)]);
if((state_val_29470 === (7))){
var inst_29465 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29471_29493 = state_29469__$1;
(statearr_29471_29493[(2)] = inst_29465);

(statearr_29471_29493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (1))){
var state_29469__$1 = state_29469;
var statearr_29472_29494 = state_29469__$1;
(statearr_29472_29494[(2)] = null);

(statearr_29472_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (4))){
var inst_29446 = (state_29469[(7)]);
var inst_29446__$1 = (state_29469[(2)]);
var inst_29447 = (inst_29446__$1 == null);
var state_29469__$1 = (function (){var statearr_29473 = state_29469;
(statearr_29473[(7)] = inst_29446__$1);

return statearr_29473;
})();
if(cljs.core.truth_(inst_29447)){
var statearr_29474_29495 = state_29469__$1;
(statearr_29474_29495[(1)] = (5));

} else {
var statearr_29475_29496 = state_29469__$1;
(statearr_29475_29496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (13))){
var state_29469__$1 = state_29469;
var statearr_29476_29497 = state_29469__$1;
(statearr_29476_29497[(2)] = null);

(statearr_29476_29497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (6))){
var inst_29446 = (state_29469[(7)]);
var inst_29452 = p.call(null,inst_29446);
var state_29469__$1 = state_29469;
if(cljs.core.truth_(inst_29452)){
var statearr_29477_29498 = state_29469__$1;
(statearr_29477_29498[(1)] = (9));

} else {
var statearr_29478_29499 = state_29469__$1;
(statearr_29478_29499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (3))){
var inst_29467 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29469__$1,inst_29467);
} else {
if((state_val_29470 === (12))){
var state_29469__$1 = state_29469;
var statearr_29479_29500 = state_29469__$1;
(statearr_29479_29500[(2)] = null);

(statearr_29479_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (2))){
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29469__$1,(4),ch);
} else {
if((state_val_29470 === (11))){
var inst_29446 = (state_29469[(7)]);
var inst_29456 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29469__$1,(8),inst_29456,inst_29446);
} else {
if((state_val_29470 === (9))){
var state_29469__$1 = state_29469;
var statearr_29480_29501 = state_29469__$1;
(statearr_29480_29501[(2)] = tc);

(statearr_29480_29501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (5))){
var inst_29449 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29450 = cljs.core.async.close_BANG_.call(null,fc);
var state_29469__$1 = (function (){var statearr_29481 = state_29469;
(statearr_29481[(8)] = inst_29449);

return statearr_29481;
})();
var statearr_29482_29502 = state_29469__$1;
(statearr_29482_29502[(2)] = inst_29450);

(statearr_29482_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (14))){
var inst_29463 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29483_29503 = state_29469__$1;
(statearr_29483_29503[(2)] = inst_29463);

(statearr_29483_29503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (10))){
var state_29469__$1 = state_29469;
var statearr_29484_29504 = state_29469__$1;
(statearr_29484_29504[(2)] = fc);

(statearr_29484_29504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (8))){
var inst_29458 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
if(cljs.core.truth_(inst_29458)){
var statearr_29485_29505 = state_29469__$1;
(statearr_29485_29505[(1)] = (12));

} else {
var statearr_29486_29506 = state_29469__$1;
(statearr_29486_29506[(1)] = (13));

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
});})(c__29042__auto___29492,tc,fc))
;
return ((function (switch__28951__auto__,c__29042__auto___29492,tc,fc){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_29487 = [null,null,null,null,null,null,null,null,null];
(statearr_29487[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_29487[(1)] = (1));

return statearr_29487;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_29469){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29488){if((e29488 instanceof Object)){
var ex__28955__auto__ = e29488;
var statearr_29489_29507 = state_29469;
(statearr_29489_29507[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29508 = state_29469;
state_29469 = G__29508;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_29469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_29469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___29492,tc,fc))
})();
var state__29044__auto__ = (function (){var statearr_29490 = f__29043__auto__.call(null);
(statearr_29490[(6)] = c__29042__auto___29492);

return statearr_29490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___29492,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__){
return (function (state_29529){
var state_val_29530 = (state_29529[(1)]);
if((state_val_29530 === (7))){
var inst_29525 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29531_29549 = state_29529__$1;
(statearr_29531_29549[(2)] = inst_29525);

(statearr_29531_29549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (1))){
var inst_29509 = init;
var state_29529__$1 = (function (){var statearr_29532 = state_29529;
(statearr_29532[(7)] = inst_29509);

return statearr_29532;
})();
var statearr_29533_29550 = state_29529__$1;
(statearr_29533_29550[(2)] = null);

(statearr_29533_29550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (4))){
var inst_29512 = (state_29529[(8)]);
var inst_29512__$1 = (state_29529[(2)]);
var inst_29513 = (inst_29512__$1 == null);
var state_29529__$1 = (function (){var statearr_29534 = state_29529;
(statearr_29534[(8)] = inst_29512__$1);

return statearr_29534;
})();
if(cljs.core.truth_(inst_29513)){
var statearr_29535_29551 = state_29529__$1;
(statearr_29535_29551[(1)] = (5));

} else {
var statearr_29536_29552 = state_29529__$1;
(statearr_29536_29552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (6))){
var inst_29512 = (state_29529[(8)]);
var inst_29509 = (state_29529[(7)]);
var inst_29516 = (state_29529[(9)]);
var inst_29516__$1 = f.call(null,inst_29509,inst_29512);
var inst_29517 = cljs.core.reduced_QMARK_.call(null,inst_29516__$1);
var state_29529__$1 = (function (){var statearr_29537 = state_29529;
(statearr_29537[(9)] = inst_29516__$1);

return statearr_29537;
})();
if(inst_29517){
var statearr_29538_29553 = state_29529__$1;
(statearr_29538_29553[(1)] = (8));

} else {
var statearr_29539_29554 = state_29529__$1;
(statearr_29539_29554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (3))){
var inst_29527 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29529__$1,inst_29527);
} else {
if((state_val_29530 === (2))){
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29529__$1,(4),ch);
} else {
if((state_val_29530 === (9))){
var inst_29516 = (state_29529[(9)]);
var inst_29509 = inst_29516;
var state_29529__$1 = (function (){var statearr_29540 = state_29529;
(statearr_29540[(7)] = inst_29509);

return statearr_29540;
})();
var statearr_29541_29555 = state_29529__$1;
(statearr_29541_29555[(2)] = null);

(statearr_29541_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (5))){
var inst_29509 = (state_29529[(7)]);
var state_29529__$1 = state_29529;
var statearr_29542_29556 = state_29529__$1;
(statearr_29542_29556[(2)] = inst_29509);

(statearr_29542_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (10))){
var inst_29523 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29543_29557 = state_29529__$1;
(statearr_29543_29557[(2)] = inst_29523);

(statearr_29543_29557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (8))){
var inst_29516 = (state_29529[(9)]);
var inst_29519 = cljs.core.deref.call(null,inst_29516);
var state_29529__$1 = state_29529;
var statearr_29544_29558 = state_29529__$1;
(statearr_29544_29558[(2)] = inst_29519);

(statearr_29544_29558[(1)] = (10));


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
});})(c__29042__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28952__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28952__auto____0 = (function (){
var statearr_29545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29545[(0)] = cljs$core$async$reduce_$_state_machine__28952__auto__);

(statearr_29545[(1)] = (1));

return statearr_29545;
});
var cljs$core$async$reduce_$_state_machine__28952__auto____1 = (function (state_29529){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29546){if((e29546 instanceof Object)){
var ex__28955__auto__ = e29546;
var statearr_29547_29559 = state_29529;
(statearr_29547_29559[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_29529;
state_29529 = G__29560;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28952__auto__ = function(state_29529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28952__auto____1.call(this,state_29529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28952__auto____0;
cljs$core$async$reduce_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28952__auto____1;
return cljs$core$async$reduce_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__))
})();
var state__29044__auto__ = (function (){var statearr_29548 = f__29043__auto__.call(null);
(statearr_29548[(6)] = c__29042__auto__);

return statearr_29548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__))
);

return c__29042__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__,f__$1){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__,f__$1){
return (function (state_29566){
var state_val_29567 = (state_29566[(1)]);
if((state_val_29567 === (1))){
var inst_29561 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29566__$1,(2),inst_29561);
} else {
if((state_val_29567 === (2))){
var inst_29563 = (state_29566[(2)]);
var inst_29564 = f__$1.call(null,inst_29563);
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29566__$1,inst_29564);
} else {
return null;
}
}
});})(c__29042__auto__,f__$1))
;
return ((function (switch__28951__auto__,c__29042__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28952__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28952__auto____0 = (function (){
var statearr_29568 = [null,null,null,null,null,null,null];
(statearr_29568[(0)] = cljs$core$async$transduce_$_state_machine__28952__auto__);

(statearr_29568[(1)] = (1));

return statearr_29568;
});
var cljs$core$async$transduce_$_state_machine__28952__auto____1 = (function (state_29566){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29569){if((e29569 instanceof Object)){
var ex__28955__auto__ = e29569;
var statearr_29570_29572 = state_29566;
(statearr_29570_29572[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29573 = state_29566;
state_29566 = G__29573;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28952__auto__ = function(state_29566){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28952__auto____1.call(this,state_29566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28952__auto____0;
cljs$core$async$transduce_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28952__auto____1;
return cljs$core$async$transduce_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__,f__$1))
})();
var state__29044__auto__ = (function (){var statearr_29571 = f__29043__auto__.call(null);
(statearr_29571[(6)] = c__29042__auto__);

return statearr_29571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__,f__$1))
);

return c__29042__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29575 = arguments.length;
switch (G__29575) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__){
return (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (7))){
var inst_29582 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29602_29623 = state_29600__$1;
(statearr_29602_29623[(2)] = inst_29582);

(statearr_29602_29623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (1))){
var inst_29576 = cljs.core.seq.call(null,coll);
var inst_29577 = inst_29576;
var state_29600__$1 = (function (){var statearr_29603 = state_29600;
(statearr_29603[(7)] = inst_29577);

return statearr_29603;
})();
var statearr_29604_29624 = state_29600__$1;
(statearr_29604_29624[(2)] = null);

(statearr_29604_29624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (4))){
var inst_29577 = (state_29600[(7)]);
var inst_29580 = cljs.core.first.call(null,inst_29577);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29600__$1,(7),ch,inst_29580);
} else {
if((state_val_29601 === (13))){
var inst_29594 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29605_29625 = state_29600__$1;
(statearr_29605_29625[(2)] = inst_29594);

(statearr_29605_29625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (6))){
var inst_29585 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
if(cljs.core.truth_(inst_29585)){
var statearr_29606_29626 = state_29600__$1;
(statearr_29606_29626[(1)] = (8));

} else {
var statearr_29607_29627 = state_29600__$1;
(statearr_29607_29627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (3))){
var inst_29598 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29600__$1,inst_29598);
} else {
if((state_val_29601 === (12))){
var state_29600__$1 = state_29600;
var statearr_29608_29628 = state_29600__$1;
(statearr_29608_29628[(2)] = null);

(statearr_29608_29628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (2))){
var inst_29577 = (state_29600[(7)]);
var state_29600__$1 = state_29600;
if(cljs.core.truth_(inst_29577)){
var statearr_29609_29629 = state_29600__$1;
(statearr_29609_29629[(1)] = (4));

} else {
var statearr_29610_29630 = state_29600__$1;
(statearr_29610_29630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (11))){
var inst_29591 = cljs.core.async.close_BANG_.call(null,ch);
var state_29600__$1 = state_29600;
var statearr_29611_29631 = state_29600__$1;
(statearr_29611_29631[(2)] = inst_29591);

(statearr_29611_29631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (9))){
var state_29600__$1 = state_29600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29612_29632 = state_29600__$1;
(statearr_29612_29632[(1)] = (11));

} else {
var statearr_29613_29633 = state_29600__$1;
(statearr_29613_29633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (5))){
var inst_29577 = (state_29600[(7)]);
var state_29600__$1 = state_29600;
var statearr_29614_29634 = state_29600__$1;
(statearr_29614_29634[(2)] = inst_29577);

(statearr_29614_29634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (10))){
var inst_29596 = (state_29600[(2)]);
var state_29600__$1 = state_29600;
var statearr_29615_29635 = state_29600__$1;
(statearr_29615_29635[(2)] = inst_29596);

(statearr_29615_29635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29601 === (8))){
var inst_29577 = (state_29600[(7)]);
var inst_29587 = cljs.core.next.call(null,inst_29577);
var inst_29577__$1 = inst_29587;
var state_29600__$1 = (function (){var statearr_29616 = state_29600;
(statearr_29616[(7)] = inst_29577__$1);

return statearr_29616;
})();
var statearr_29617_29636 = state_29600__$1;
(statearr_29617_29636[(2)] = null);

(statearr_29617_29636[(1)] = (2));


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
});})(c__29042__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_29618 = [null,null,null,null,null,null,null,null];
(statearr_29618[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_29618[(1)] = (1));

return statearr_29618;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_29600){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object)){
var ex__28955__auto__ = e29619;
var statearr_29620_29637 = state_29600;
(statearr_29620_29637[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29638 = state_29600;
state_29600 = G__29638;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__))
})();
var state__29044__auto__ = (function (){var statearr_29621 = f__29043__auto__.call(null);
(statearr_29621[(6)] = c__29042__auto__);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__))
);

return c__29042__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29639 = (function (ch,cs,meta29640){
this.ch = ch;
this.cs = cs;
this.meta29640 = meta29640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29641,meta29640__$1){
var self__ = this;
var _29641__$1 = this;
return (new cljs.core.async.t_cljs$core$async29639(self__.ch,self__.cs,meta29640__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29641){
var self__ = this;
var _29641__$1 = this;
return self__.meta29640;
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29640","meta29640",935905070,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29639";

cljs.core.async.t_cljs$core$async29639.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29639");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29639.
 */
cljs.core.async.__GT_t_cljs$core$async29639 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29639(ch__$1,cs__$1,meta29640){
return (new cljs.core.async.t_cljs$core$async29639(ch__$1,cs__$1,meta29640));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29639(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29042__auto___29861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___29861,cs,m,dchan,dctr,done){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___29861,cs,m,dchan,dctr,done){
return (function (state_29776){
var state_val_29777 = (state_29776[(1)]);
if((state_val_29777 === (7))){
var inst_29772 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29778_29862 = state_29776__$1;
(statearr_29778_29862[(2)] = inst_29772);

(statearr_29778_29862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (20))){
var inst_29675 = (state_29776[(7)]);
var inst_29687 = cljs.core.first.call(null,inst_29675);
var inst_29688 = cljs.core.nth.call(null,inst_29687,(0),null);
var inst_29689 = cljs.core.nth.call(null,inst_29687,(1),null);
var state_29776__$1 = (function (){var statearr_29779 = state_29776;
(statearr_29779[(8)] = inst_29688);

return statearr_29779;
})();
if(cljs.core.truth_(inst_29689)){
var statearr_29780_29863 = state_29776__$1;
(statearr_29780_29863[(1)] = (22));

} else {
var statearr_29781_29864 = state_29776__$1;
(statearr_29781_29864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (27))){
var inst_29719 = (state_29776[(9)]);
var inst_29717 = (state_29776[(10)]);
var inst_29644 = (state_29776[(11)]);
var inst_29724 = (state_29776[(12)]);
var inst_29724__$1 = cljs.core._nth.call(null,inst_29717,inst_29719);
var inst_29725 = cljs.core.async.put_BANG_.call(null,inst_29724__$1,inst_29644,done);
var state_29776__$1 = (function (){var statearr_29782 = state_29776;
(statearr_29782[(12)] = inst_29724__$1);

return statearr_29782;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29783_29865 = state_29776__$1;
(statearr_29783_29865[(1)] = (30));

} else {
var statearr_29784_29866 = state_29776__$1;
(statearr_29784_29866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (1))){
var state_29776__$1 = state_29776;
var statearr_29785_29867 = state_29776__$1;
(statearr_29785_29867[(2)] = null);

(statearr_29785_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (24))){
var inst_29675 = (state_29776[(7)]);
var inst_29694 = (state_29776[(2)]);
var inst_29695 = cljs.core.next.call(null,inst_29675);
var inst_29653 = inst_29695;
var inst_29654 = null;
var inst_29655 = (0);
var inst_29656 = (0);
var state_29776__$1 = (function (){var statearr_29786 = state_29776;
(statearr_29786[(13)] = inst_29694);

(statearr_29786[(14)] = inst_29653);

(statearr_29786[(15)] = inst_29656);

(statearr_29786[(16)] = inst_29654);

(statearr_29786[(17)] = inst_29655);

return statearr_29786;
})();
var statearr_29787_29868 = state_29776__$1;
(statearr_29787_29868[(2)] = null);

(statearr_29787_29868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (39))){
var state_29776__$1 = state_29776;
var statearr_29791_29869 = state_29776__$1;
(statearr_29791_29869[(2)] = null);

(statearr_29791_29869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (4))){
var inst_29644 = (state_29776[(11)]);
var inst_29644__$1 = (state_29776[(2)]);
var inst_29645 = (inst_29644__$1 == null);
var state_29776__$1 = (function (){var statearr_29792 = state_29776;
(statearr_29792[(11)] = inst_29644__$1);

return statearr_29792;
})();
if(cljs.core.truth_(inst_29645)){
var statearr_29793_29870 = state_29776__$1;
(statearr_29793_29870[(1)] = (5));

} else {
var statearr_29794_29871 = state_29776__$1;
(statearr_29794_29871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (15))){
var inst_29653 = (state_29776[(14)]);
var inst_29656 = (state_29776[(15)]);
var inst_29654 = (state_29776[(16)]);
var inst_29655 = (state_29776[(17)]);
var inst_29671 = (state_29776[(2)]);
var inst_29672 = (inst_29656 + (1));
var tmp29788 = inst_29653;
var tmp29789 = inst_29654;
var tmp29790 = inst_29655;
var inst_29653__$1 = tmp29788;
var inst_29654__$1 = tmp29789;
var inst_29655__$1 = tmp29790;
var inst_29656__$1 = inst_29672;
var state_29776__$1 = (function (){var statearr_29795 = state_29776;
(statearr_29795[(14)] = inst_29653__$1);

(statearr_29795[(15)] = inst_29656__$1);

(statearr_29795[(16)] = inst_29654__$1);

(statearr_29795[(17)] = inst_29655__$1);

(statearr_29795[(18)] = inst_29671);

return statearr_29795;
})();
var statearr_29796_29872 = state_29776__$1;
(statearr_29796_29872[(2)] = null);

(statearr_29796_29872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (21))){
var inst_29698 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29800_29873 = state_29776__$1;
(statearr_29800_29873[(2)] = inst_29698);

(statearr_29800_29873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (31))){
var inst_29724 = (state_29776[(12)]);
var inst_29728 = done.call(null,null);
var inst_29729 = cljs.core.async.untap_STAR_.call(null,m,inst_29724);
var state_29776__$1 = (function (){var statearr_29801 = state_29776;
(statearr_29801[(19)] = inst_29728);

return statearr_29801;
})();
var statearr_29802_29874 = state_29776__$1;
(statearr_29802_29874[(2)] = inst_29729);

(statearr_29802_29874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (32))){
var inst_29719 = (state_29776[(9)]);
var inst_29717 = (state_29776[(10)]);
var inst_29718 = (state_29776[(20)]);
var inst_29716 = (state_29776[(21)]);
var inst_29731 = (state_29776[(2)]);
var inst_29732 = (inst_29719 + (1));
var tmp29797 = inst_29717;
var tmp29798 = inst_29718;
var tmp29799 = inst_29716;
var inst_29716__$1 = tmp29799;
var inst_29717__$1 = tmp29797;
var inst_29718__$1 = tmp29798;
var inst_29719__$1 = inst_29732;
var state_29776__$1 = (function (){var statearr_29803 = state_29776;
(statearr_29803[(9)] = inst_29719__$1);

(statearr_29803[(10)] = inst_29717__$1);

(statearr_29803[(20)] = inst_29718__$1);

(statearr_29803[(22)] = inst_29731);

(statearr_29803[(21)] = inst_29716__$1);

return statearr_29803;
})();
var statearr_29804_29875 = state_29776__$1;
(statearr_29804_29875[(2)] = null);

(statearr_29804_29875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (40))){
var inst_29744 = (state_29776[(23)]);
var inst_29748 = done.call(null,null);
var inst_29749 = cljs.core.async.untap_STAR_.call(null,m,inst_29744);
var state_29776__$1 = (function (){var statearr_29805 = state_29776;
(statearr_29805[(24)] = inst_29748);

return statearr_29805;
})();
var statearr_29806_29876 = state_29776__$1;
(statearr_29806_29876[(2)] = inst_29749);

(statearr_29806_29876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (33))){
var inst_29735 = (state_29776[(25)]);
var inst_29737 = cljs.core.chunked_seq_QMARK_.call(null,inst_29735);
var state_29776__$1 = state_29776;
if(inst_29737){
var statearr_29807_29877 = state_29776__$1;
(statearr_29807_29877[(1)] = (36));

} else {
var statearr_29808_29878 = state_29776__$1;
(statearr_29808_29878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (13))){
var inst_29665 = (state_29776[(26)]);
var inst_29668 = cljs.core.async.close_BANG_.call(null,inst_29665);
var state_29776__$1 = state_29776;
var statearr_29809_29879 = state_29776__$1;
(statearr_29809_29879[(2)] = inst_29668);

(statearr_29809_29879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (22))){
var inst_29688 = (state_29776[(8)]);
var inst_29691 = cljs.core.async.close_BANG_.call(null,inst_29688);
var state_29776__$1 = state_29776;
var statearr_29810_29880 = state_29776__$1;
(statearr_29810_29880[(2)] = inst_29691);

(statearr_29810_29880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (36))){
var inst_29735 = (state_29776[(25)]);
var inst_29739 = cljs.core.chunk_first.call(null,inst_29735);
var inst_29740 = cljs.core.chunk_rest.call(null,inst_29735);
var inst_29741 = cljs.core.count.call(null,inst_29739);
var inst_29716 = inst_29740;
var inst_29717 = inst_29739;
var inst_29718 = inst_29741;
var inst_29719 = (0);
var state_29776__$1 = (function (){var statearr_29811 = state_29776;
(statearr_29811[(9)] = inst_29719);

(statearr_29811[(10)] = inst_29717);

(statearr_29811[(20)] = inst_29718);

(statearr_29811[(21)] = inst_29716);

return statearr_29811;
})();
var statearr_29812_29881 = state_29776__$1;
(statearr_29812_29881[(2)] = null);

(statearr_29812_29881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (41))){
var inst_29735 = (state_29776[(25)]);
var inst_29751 = (state_29776[(2)]);
var inst_29752 = cljs.core.next.call(null,inst_29735);
var inst_29716 = inst_29752;
var inst_29717 = null;
var inst_29718 = (0);
var inst_29719 = (0);
var state_29776__$1 = (function (){var statearr_29813 = state_29776;
(statearr_29813[(9)] = inst_29719);

(statearr_29813[(10)] = inst_29717);

(statearr_29813[(20)] = inst_29718);

(statearr_29813[(27)] = inst_29751);

(statearr_29813[(21)] = inst_29716);

return statearr_29813;
})();
var statearr_29814_29882 = state_29776__$1;
(statearr_29814_29882[(2)] = null);

(statearr_29814_29882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (43))){
var state_29776__$1 = state_29776;
var statearr_29815_29883 = state_29776__$1;
(statearr_29815_29883[(2)] = null);

(statearr_29815_29883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (29))){
var inst_29760 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29816_29884 = state_29776__$1;
(statearr_29816_29884[(2)] = inst_29760);

(statearr_29816_29884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (44))){
var inst_29769 = (state_29776[(2)]);
var state_29776__$1 = (function (){var statearr_29817 = state_29776;
(statearr_29817[(28)] = inst_29769);

return statearr_29817;
})();
var statearr_29818_29885 = state_29776__$1;
(statearr_29818_29885[(2)] = null);

(statearr_29818_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (6))){
var inst_29708 = (state_29776[(29)]);
var inst_29707 = cljs.core.deref.call(null,cs);
var inst_29708__$1 = cljs.core.keys.call(null,inst_29707);
var inst_29709 = cljs.core.count.call(null,inst_29708__$1);
var inst_29710 = cljs.core.reset_BANG_.call(null,dctr,inst_29709);
var inst_29715 = cljs.core.seq.call(null,inst_29708__$1);
var inst_29716 = inst_29715;
var inst_29717 = null;
var inst_29718 = (0);
var inst_29719 = (0);
var state_29776__$1 = (function (){var statearr_29819 = state_29776;
(statearr_29819[(9)] = inst_29719);

(statearr_29819[(10)] = inst_29717);

(statearr_29819[(29)] = inst_29708__$1);

(statearr_29819[(20)] = inst_29718);

(statearr_29819[(30)] = inst_29710);

(statearr_29819[(21)] = inst_29716);

return statearr_29819;
})();
var statearr_29820_29886 = state_29776__$1;
(statearr_29820_29886[(2)] = null);

(statearr_29820_29886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (28))){
var inst_29716 = (state_29776[(21)]);
var inst_29735 = (state_29776[(25)]);
var inst_29735__$1 = cljs.core.seq.call(null,inst_29716);
var state_29776__$1 = (function (){var statearr_29821 = state_29776;
(statearr_29821[(25)] = inst_29735__$1);

return statearr_29821;
})();
if(inst_29735__$1){
var statearr_29822_29887 = state_29776__$1;
(statearr_29822_29887[(1)] = (33));

} else {
var statearr_29823_29888 = state_29776__$1;
(statearr_29823_29888[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (25))){
var inst_29719 = (state_29776[(9)]);
var inst_29718 = (state_29776[(20)]);
var inst_29721 = (inst_29719 < inst_29718);
var inst_29722 = inst_29721;
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29722)){
var statearr_29824_29889 = state_29776__$1;
(statearr_29824_29889[(1)] = (27));

} else {
var statearr_29825_29890 = state_29776__$1;
(statearr_29825_29890[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (34))){
var state_29776__$1 = state_29776;
var statearr_29826_29891 = state_29776__$1;
(statearr_29826_29891[(2)] = null);

(statearr_29826_29891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (17))){
var state_29776__$1 = state_29776;
var statearr_29827_29892 = state_29776__$1;
(statearr_29827_29892[(2)] = null);

(statearr_29827_29892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (3))){
var inst_29774 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29776__$1,inst_29774);
} else {
if((state_val_29777 === (12))){
var inst_29703 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29828_29893 = state_29776__$1;
(statearr_29828_29893[(2)] = inst_29703);

(statearr_29828_29893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (2))){
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29776__$1,(4),ch);
} else {
if((state_val_29777 === (23))){
var state_29776__$1 = state_29776;
var statearr_29829_29894 = state_29776__$1;
(statearr_29829_29894[(2)] = null);

(statearr_29829_29894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (35))){
var inst_29758 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29830_29895 = state_29776__$1;
(statearr_29830_29895[(2)] = inst_29758);

(statearr_29830_29895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (19))){
var inst_29675 = (state_29776[(7)]);
var inst_29679 = cljs.core.chunk_first.call(null,inst_29675);
var inst_29680 = cljs.core.chunk_rest.call(null,inst_29675);
var inst_29681 = cljs.core.count.call(null,inst_29679);
var inst_29653 = inst_29680;
var inst_29654 = inst_29679;
var inst_29655 = inst_29681;
var inst_29656 = (0);
var state_29776__$1 = (function (){var statearr_29831 = state_29776;
(statearr_29831[(14)] = inst_29653);

(statearr_29831[(15)] = inst_29656);

(statearr_29831[(16)] = inst_29654);

(statearr_29831[(17)] = inst_29655);

return statearr_29831;
})();
var statearr_29832_29896 = state_29776__$1;
(statearr_29832_29896[(2)] = null);

(statearr_29832_29896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (11))){
var inst_29653 = (state_29776[(14)]);
var inst_29675 = (state_29776[(7)]);
var inst_29675__$1 = cljs.core.seq.call(null,inst_29653);
var state_29776__$1 = (function (){var statearr_29833 = state_29776;
(statearr_29833[(7)] = inst_29675__$1);

return statearr_29833;
})();
if(inst_29675__$1){
var statearr_29834_29897 = state_29776__$1;
(statearr_29834_29897[(1)] = (16));

} else {
var statearr_29835_29898 = state_29776__$1;
(statearr_29835_29898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (9))){
var inst_29705 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29836_29899 = state_29776__$1;
(statearr_29836_29899[(2)] = inst_29705);

(statearr_29836_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (5))){
var inst_29651 = cljs.core.deref.call(null,cs);
var inst_29652 = cljs.core.seq.call(null,inst_29651);
var inst_29653 = inst_29652;
var inst_29654 = null;
var inst_29655 = (0);
var inst_29656 = (0);
var state_29776__$1 = (function (){var statearr_29837 = state_29776;
(statearr_29837[(14)] = inst_29653);

(statearr_29837[(15)] = inst_29656);

(statearr_29837[(16)] = inst_29654);

(statearr_29837[(17)] = inst_29655);

return statearr_29837;
})();
var statearr_29838_29900 = state_29776__$1;
(statearr_29838_29900[(2)] = null);

(statearr_29838_29900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (14))){
var state_29776__$1 = state_29776;
var statearr_29839_29901 = state_29776__$1;
(statearr_29839_29901[(2)] = null);

(statearr_29839_29901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (45))){
var inst_29766 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29840_29902 = state_29776__$1;
(statearr_29840_29902[(2)] = inst_29766);

(statearr_29840_29902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (26))){
var inst_29708 = (state_29776[(29)]);
var inst_29762 = (state_29776[(2)]);
var inst_29763 = cljs.core.seq.call(null,inst_29708);
var state_29776__$1 = (function (){var statearr_29841 = state_29776;
(statearr_29841[(31)] = inst_29762);

return statearr_29841;
})();
if(inst_29763){
var statearr_29842_29903 = state_29776__$1;
(statearr_29842_29903[(1)] = (42));

} else {
var statearr_29843_29904 = state_29776__$1;
(statearr_29843_29904[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (16))){
var inst_29675 = (state_29776[(7)]);
var inst_29677 = cljs.core.chunked_seq_QMARK_.call(null,inst_29675);
var state_29776__$1 = state_29776;
if(inst_29677){
var statearr_29844_29905 = state_29776__$1;
(statearr_29844_29905[(1)] = (19));

} else {
var statearr_29845_29906 = state_29776__$1;
(statearr_29845_29906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (38))){
var inst_29755 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29846_29907 = state_29776__$1;
(statearr_29846_29907[(2)] = inst_29755);

(statearr_29846_29907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (30))){
var state_29776__$1 = state_29776;
var statearr_29847_29908 = state_29776__$1;
(statearr_29847_29908[(2)] = null);

(statearr_29847_29908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (10))){
var inst_29656 = (state_29776[(15)]);
var inst_29654 = (state_29776[(16)]);
var inst_29664 = cljs.core._nth.call(null,inst_29654,inst_29656);
var inst_29665 = cljs.core.nth.call(null,inst_29664,(0),null);
var inst_29666 = cljs.core.nth.call(null,inst_29664,(1),null);
var state_29776__$1 = (function (){var statearr_29848 = state_29776;
(statearr_29848[(26)] = inst_29665);

return statearr_29848;
})();
if(cljs.core.truth_(inst_29666)){
var statearr_29849_29909 = state_29776__$1;
(statearr_29849_29909[(1)] = (13));

} else {
var statearr_29850_29910 = state_29776__$1;
(statearr_29850_29910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (18))){
var inst_29701 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29851_29911 = state_29776__$1;
(statearr_29851_29911[(2)] = inst_29701);

(statearr_29851_29911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (42))){
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29776__$1,(45),dchan);
} else {
if((state_val_29777 === (37))){
var inst_29744 = (state_29776[(23)]);
var inst_29644 = (state_29776[(11)]);
var inst_29735 = (state_29776[(25)]);
var inst_29744__$1 = cljs.core.first.call(null,inst_29735);
var inst_29745 = cljs.core.async.put_BANG_.call(null,inst_29744__$1,inst_29644,done);
var state_29776__$1 = (function (){var statearr_29852 = state_29776;
(statearr_29852[(23)] = inst_29744__$1);

return statearr_29852;
})();
if(cljs.core.truth_(inst_29745)){
var statearr_29853_29912 = state_29776__$1;
(statearr_29853_29912[(1)] = (39));

} else {
var statearr_29854_29913 = state_29776__$1;
(statearr_29854_29913[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (8))){
var inst_29656 = (state_29776[(15)]);
var inst_29655 = (state_29776[(17)]);
var inst_29658 = (inst_29656 < inst_29655);
var inst_29659 = inst_29658;
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29659)){
var statearr_29855_29914 = state_29776__$1;
(statearr_29855_29914[(1)] = (10));

} else {
var statearr_29856_29915 = state_29776__$1;
(statearr_29856_29915[(1)] = (11));

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
});})(c__29042__auto___29861,cs,m,dchan,dctr,done))
;
return ((function (switch__28951__auto__,c__29042__auto___29861,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28952__auto__ = null;
var cljs$core$async$mult_$_state_machine__28952__auto____0 = (function (){
var statearr_29857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29857[(0)] = cljs$core$async$mult_$_state_machine__28952__auto__);

(statearr_29857[(1)] = (1));

return statearr_29857;
});
var cljs$core$async$mult_$_state_machine__28952__auto____1 = (function (state_29776){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_29776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e29858){if((e29858 instanceof Object)){
var ex__28955__auto__ = e29858;
var statearr_29859_29916 = state_29776;
(statearr_29859_29916[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29917 = state_29776;
state_29776 = G__29917;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28952__auto__ = function(state_29776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28952__auto____1.call(this,state_29776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28952__auto____0;
cljs$core$async$mult_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28952__auto____1;
return cljs$core$async$mult_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___29861,cs,m,dchan,dctr,done))
})();
var state__29044__auto__ = (function (){var statearr_29860 = f__29043__auto__.call(null);
(statearr_29860[(6)] = c__29042__auto___29861);

return statearr_29860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___29861,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29919 = arguments.length;
switch (G__29919) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29931 = arguments.length;
var i__4532__auto___29932 = (0);
while(true){
if((i__4532__auto___29932 < len__4531__auto___29931)){
args__4534__auto__.push((arguments[i__4532__auto___29932]));

var G__29933 = (i__4532__auto___29932 + (1));
i__4532__auto___29932 = G__29933;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29925){
var map__29926 = p__29925;
var map__29926__$1 = ((((!((map__29926 == null)))?(((((map__29926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29926):map__29926);
var opts = map__29926__$1;
var statearr_29928_29934 = state;
(statearr_29928_29934[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29926,map__29926__$1,opts){
return (function (val){
var statearr_29929_29935 = state;
(statearr_29929_29935[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29926,map__29926__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29930_29936 = state;
(statearr_29930_29936[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29921){
var G__29922 = cljs.core.first.call(null,seq29921);
var seq29921__$1 = cljs.core.next.call(null,seq29921);
var G__29923 = cljs.core.first.call(null,seq29921__$1);
var seq29921__$2 = cljs.core.next.call(null,seq29921__$1);
var G__29924 = cljs.core.first.call(null,seq29921__$2);
var seq29921__$3 = cljs.core.next.call(null,seq29921__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29922,G__29923,G__29924,seq29921__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29937 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29938){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29938 = meta29938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29939,meta29938__$1){
var self__ = this;
var _29939__$1 = this;
return (new cljs.core.async.t_cljs$core$async29937(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29938__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29939){
var self__ = this;
var _29939__$1 = this;
return self__.meta29938;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29938","meta29938",825395172,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29937";

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29937");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29937.
 */
cljs.core.async.__GT_t_cljs$core$async29937 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29937(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29938){
return (new cljs.core.async.t_cljs$core$async29937(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29938));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29937(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29042__auto___30101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30041){
var state_val_30042 = (state_30041[(1)]);
if((state_val_30042 === (7))){
var inst_29956 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30043_30102 = state_30041__$1;
(statearr_30043_30102[(2)] = inst_29956);

(statearr_30043_30102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (20))){
var inst_29968 = (state_30041[(7)]);
var state_30041__$1 = state_30041;
var statearr_30044_30103 = state_30041__$1;
(statearr_30044_30103[(2)] = inst_29968);

(statearr_30044_30103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (27))){
var state_30041__$1 = state_30041;
var statearr_30045_30104 = state_30041__$1;
(statearr_30045_30104[(2)] = null);

(statearr_30045_30104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (1))){
var inst_29943 = (state_30041[(8)]);
var inst_29943__$1 = calc_state.call(null);
var inst_29945 = (inst_29943__$1 == null);
var inst_29946 = cljs.core.not.call(null,inst_29945);
var state_30041__$1 = (function (){var statearr_30046 = state_30041;
(statearr_30046[(8)] = inst_29943__$1);

return statearr_30046;
})();
if(inst_29946){
var statearr_30047_30105 = state_30041__$1;
(statearr_30047_30105[(1)] = (2));

} else {
var statearr_30048_30106 = state_30041__$1;
(statearr_30048_30106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (24))){
var inst_30015 = (state_30041[(9)]);
var inst_30001 = (state_30041[(10)]);
var inst_29992 = (state_30041[(11)]);
var inst_30015__$1 = inst_29992.call(null,inst_30001);
var state_30041__$1 = (function (){var statearr_30049 = state_30041;
(statearr_30049[(9)] = inst_30015__$1);

return statearr_30049;
})();
if(cljs.core.truth_(inst_30015__$1)){
var statearr_30050_30107 = state_30041__$1;
(statearr_30050_30107[(1)] = (29));

} else {
var statearr_30051_30108 = state_30041__$1;
(statearr_30051_30108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (4))){
var inst_29959 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_29959)){
var statearr_30052_30109 = state_30041__$1;
(statearr_30052_30109[(1)] = (8));

} else {
var statearr_30053_30110 = state_30041__$1;
(statearr_30053_30110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (15))){
var inst_29986 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_29986)){
var statearr_30054_30111 = state_30041__$1;
(statearr_30054_30111[(1)] = (19));

} else {
var statearr_30055_30112 = state_30041__$1;
(statearr_30055_30112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (21))){
var inst_29991 = (state_30041[(12)]);
var inst_29991__$1 = (state_30041[(2)]);
var inst_29992 = cljs.core.get.call(null,inst_29991__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29993 = cljs.core.get.call(null,inst_29991__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29994 = cljs.core.get.call(null,inst_29991__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30041__$1 = (function (){var statearr_30056 = state_30041;
(statearr_30056[(12)] = inst_29991__$1);

(statearr_30056[(11)] = inst_29992);

(statearr_30056[(13)] = inst_29993);

return statearr_30056;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30041__$1,(22),inst_29994);
} else {
if((state_val_30042 === (31))){
var inst_30023 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30023)){
var statearr_30057_30113 = state_30041__$1;
(statearr_30057_30113[(1)] = (32));

} else {
var statearr_30058_30114 = state_30041__$1;
(statearr_30058_30114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (32))){
var inst_30000 = (state_30041[(14)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30041__$1,(35),out,inst_30000);
} else {
if((state_val_30042 === (33))){
var inst_29991 = (state_30041[(12)]);
var inst_29968 = inst_29991;
var state_30041__$1 = (function (){var statearr_30059 = state_30041;
(statearr_30059[(7)] = inst_29968);

return statearr_30059;
})();
var statearr_30060_30115 = state_30041__$1;
(statearr_30060_30115[(2)] = null);

(statearr_30060_30115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (13))){
var inst_29968 = (state_30041[(7)]);
var inst_29975 = inst_29968.cljs$lang$protocol_mask$partition0$;
var inst_29976 = (inst_29975 & (64));
var inst_29977 = inst_29968.cljs$core$ISeq$;
var inst_29978 = (cljs.core.PROTOCOL_SENTINEL === inst_29977);
var inst_29979 = ((inst_29976) || (inst_29978));
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_29979)){
var statearr_30061_30116 = state_30041__$1;
(statearr_30061_30116[(1)] = (16));

} else {
var statearr_30062_30117 = state_30041__$1;
(statearr_30062_30117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (22))){
var inst_30001 = (state_30041[(10)]);
var inst_30000 = (state_30041[(14)]);
var inst_29999 = (state_30041[(2)]);
var inst_30000__$1 = cljs.core.nth.call(null,inst_29999,(0),null);
var inst_30001__$1 = cljs.core.nth.call(null,inst_29999,(1),null);
var inst_30002 = (inst_30000__$1 == null);
var inst_30003 = cljs.core._EQ_.call(null,inst_30001__$1,change);
var inst_30004 = ((inst_30002) || (inst_30003));
var state_30041__$1 = (function (){var statearr_30063 = state_30041;
(statearr_30063[(10)] = inst_30001__$1);

(statearr_30063[(14)] = inst_30000__$1);

return statearr_30063;
})();
if(cljs.core.truth_(inst_30004)){
var statearr_30064_30118 = state_30041__$1;
(statearr_30064_30118[(1)] = (23));

} else {
var statearr_30065_30119 = state_30041__$1;
(statearr_30065_30119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (36))){
var inst_29991 = (state_30041[(12)]);
var inst_29968 = inst_29991;
var state_30041__$1 = (function (){var statearr_30066 = state_30041;
(statearr_30066[(7)] = inst_29968);

return statearr_30066;
})();
var statearr_30067_30120 = state_30041__$1;
(statearr_30067_30120[(2)] = null);

(statearr_30067_30120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (29))){
var inst_30015 = (state_30041[(9)]);
var state_30041__$1 = state_30041;
var statearr_30068_30121 = state_30041__$1;
(statearr_30068_30121[(2)] = inst_30015);

(statearr_30068_30121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (6))){
var state_30041__$1 = state_30041;
var statearr_30069_30122 = state_30041__$1;
(statearr_30069_30122[(2)] = false);

(statearr_30069_30122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (28))){
var inst_30011 = (state_30041[(2)]);
var inst_30012 = calc_state.call(null);
var inst_29968 = inst_30012;
var state_30041__$1 = (function (){var statearr_30070 = state_30041;
(statearr_30070[(15)] = inst_30011);

(statearr_30070[(7)] = inst_29968);

return statearr_30070;
})();
var statearr_30071_30123 = state_30041__$1;
(statearr_30071_30123[(2)] = null);

(statearr_30071_30123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (25))){
var inst_30037 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30072_30124 = state_30041__$1;
(statearr_30072_30124[(2)] = inst_30037);

(statearr_30072_30124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (34))){
var inst_30035 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30073_30125 = state_30041__$1;
(statearr_30073_30125[(2)] = inst_30035);

(statearr_30073_30125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (17))){
var state_30041__$1 = state_30041;
var statearr_30074_30126 = state_30041__$1;
(statearr_30074_30126[(2)] = false);

(statearr_30074_30126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (3))){
var state_30041__$1 = state_30041;
var statearr_30075_30127 = state_30041__$1;
(statearr_30075_30127[(2)] = false);

(statearr_30075_30127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (12))){
var inst_30039 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30041__$1,inst_30039);
} else {
if((state_val_30042 === (2))){
var inst_29943 = (state_30041[(8)]);
var inst_29948 = inst_29943.cljs$lang$protocol_mask$partition0$;
var inst_29949 = (inst_29948 & (64));
var inst_29950 = inst_29943.cljs$core$ISeq$;
var inst_29951 = (cljs.core.PROTOCOL_SENTINEL === inst_29950);
var inst_29952 = ((inst_29949) || (inst_29951));
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_29952)){
var statearr_30076_30128 = state_30041__$1;
(statearr_30076_30128[(1)] = (5));

} else {
var statearr_30077_30129 = state_30041__$1;
(statearr_30077_30129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (23))){
var inst_30000 = (state_30041[(14)]);
var inst_30006 = (inst_30000 == null);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30006)){
var statearr_30078_30130 = state_30041__$1;
(statearr_30078_30130[(1)] = (26));

} else {
var statearr_30079_30131 = state_30041__$1;
(statearr_30079_30131[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (35))){
var inst_30026 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30026)){
var statearr_30080_30132 = state_30041__$1;
(statearr_30080_30132[(1)] = (36));

} else {
var statearr_30081_30133 = state_30041__$1;
(statearr_30081_30133[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (19))){
var inst_29968 = (state_30041[(7)]);
var inst_29988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29968);
var state_30041__$1 = state_30041;
var statearr_30082_30134 = state_30041__$1;
(statearr_30082_30134[(2)] = inst_29988);

(statearr_30082_30134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (11))){
var inst_29968 = (state_30041[(7)]);
var inst_29972 = (inst_29968 == null);
var inst_29973 = cljs.core.not.call(null,inst_29972);
var state_30041__$1 = state_30041;
if(inst_29973){
var statearr_30083_30135 = state_30041__$1;
(statearr_30083_30135[(1)] = (13));

} else {
var statearr_30084_30136 = state_30041__$1;
(statearr_30084_30136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (9))){
var inst_29943 = (state_30041[(8)]);
var state_30041__$1 = state_30041;
var statearr_30085_30137 = state_30041__$1;
(statearr_30085_30137[(2)] = inst_29943);

(statearr_30085_30137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (5))){
var state_30041__$1 = state_30041;
var statearr_30086_30138 = state_30041__$1;
(statearr_30086_30138[(2)] = true);

(statearr_30086_30138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (14))){
var state_30041__$1 = state_30041;
var statearr_30087_30139 = state_30041__$1;
(statearr_30087_30139[(2)] = false);

(statearr_30087_30139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (26))){
var inst_30001 = (state_30041[(10)]);
var inst_30008 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30001);
var state_30041__$1 = state_30041;
var statearr_30088_30140 = state_30041__$1;
(statearr_30088_30140[(2)] = inst_30008);

(statearr_30088_30140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (16))){
var state_30041__$1 = state_30041;
var statearr_30089_30141 = state_30041__$1;
(statearr_30089_30141[(2)] = true);

(statearr_30089_30141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (38))){
var inst_30031 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30090_30142 = state_30041__$1;
(statearr_30090_30142[(2)] = inst_30031);

(statearr_30090_30142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (30))){
var inst_30001 = (state_30041[(10)]);
var inst_29992 = (state_30041[(11)]);
var inst_29993 = (state_30041[(13)]);
var inst_30018 = cljs.core.empty_QMARK_.call(null,inst_29992);
var inst_30019 = inst_29993.call(null,inst_30001);
var inst_30020 = cljs.core.not.call(null,inst_30019);
var inst_30021 = ((inst_30018) && (inst_30020));
var state_30041__$1 = state_30041;
var statearr_30091_30143 = state_30041__$1;
(statearr_30091_30143[(2)] = inst_30021);

(statearr_30091_30143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (10))){
var inst_29943 = (state_30041[(8)]);
var inst_29964 = (state_30041[(2)]);
var inst_29965 = cljs.core.get.call(null,inst_29964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29966 = cljs.core.get.call(null,inst_29964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29967 = cljs.core.get.call(null,inst_29964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29968 = inst_29943;
var state_30041__$1 = (function (){var statearr_30092 = state_30041;
(statearr_30092[(7)] = inst_29968);

(statearr_30092[(16)] = inst_29965);

(statearr_30092[(17)] = inst_29966);

(statearr_30092[(18)] = inst_29967);

return statearr_30092;
})();
var statearr_30093_30144 = state_30041__$1;
(statearr_30093_30144[(2)] = null);

(statearr_30093_30144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (18))){
var inst_29983 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30094_30145 = state_30041__$1;
(statearr_30094_30145[(2)] = inst_29983);

(statearr_30094_30145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (37))){
var state_30041__$1 = state_30041;
var statearr_30095_30146 = state_30041__$1;
(statearr_30095_30146[(2)] = null);

(statearr_30095_30146[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (8))){
var inst_29943 = (state_30041[(8)]);
var inst_29961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29943);
var state_30041__$1 = state_30041;
var statearr_30096_30147 = state_30041__$1;
(statearr_30096_30147[(2)] = inst_29961);

(statearr_30096_30147[(1)] = (10));


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
});})(c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28951__auto__,c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28952__auto__ = null;
var cljs$core$async$mix_$_state_machine__28952__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$mix_$_state_machine__28952__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$mix_$_state_machine__28952__auto____1 = (function (state_30041){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__28955__auto__ = e30098;
var statearr_30099_30148 = state_30041;
(statearr_30099_30148[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30149 = state_30041;
state_30041 = G__30149;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28952__auto__ = function(state_30041){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28952__auto____1.call(this,state_30041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28952__auto____0;
cljs$core$async$mix_$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28952__auto____1;
return cljs$core$async$mix_$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29044__auto__ = (function (){var statearr_30100 = f__29043__auto__.call(null);
(statearr_30100[(6)] = c__29042__auto___30101);

return statearr_30100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30151 = arguments.length;
switch (G__30151) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30155 = arguments.length;
switch (G__30155) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__30153_SHARP_){
if(cljs.core.truth_(p1__30153_SHARP_.call(null,topic))){
return p1__30153_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30153_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30156 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30157){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30157 = meta30157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30158,meta30157__$1){
var self__ = this;
var _30158__$1 = this;
return (new cljs.core.async.t_cljs$core$async30156(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30157__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30158){
var self__ = this;
var _30158__$1 = this;
return self__.meta30157;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30157","meta30157",-314237589,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30156";

cljs.core.async.t_cljs$core$async30156.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30156");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30156.
 */
cljs.core.async.__GT_t_cljs$core$async30156 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30157){
return (new cljs.core.async.t_cljs$core$async30156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30157));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30156(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29042__auto___30276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30276,mults,ensure_mult,p){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30276,mults,ensure_mult,p){
return (function (state_30230){
var state_val_30231 = (state_30230[(1)]);
if((state_val_30231 === (7))){
var inst_30226 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30232_30277 = state_30230__$1;
(statearr_30232_30277[(2)] = inst_30226);

(statearr_30232_30277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (20))){
var state_30230__$1 = state_30230;
var statearr_30233_30278 = state_30230__$1;
(statearr_30233_30278[(2)] = null);

(statearr_30233_30278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (1))){
var state_30230__$1 = state_30230;
var statearr_30234_30279 = state_30230__$1;
(statearr_30234_30279[(2)] = null);

(statearr_30234_30279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (24))){
var inst_30209 = (state_30230[(7)]);
var inst_30218 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30209);
var state_30230__$1 = state_30230;
var statearr_30235_30280 = state_30230__$1;
(statearr_30235_30280[(2)] = inst_30218);

(statearr_30235_30280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (4))){
var inst_30161 = (state_30230[(8)]);
var inst_30161__$1 = (state_30230[(2)]);
var inst_30162 = (inst_30161__$1 == null);
var state_30230__$1 = (function (){var statearr_30236 = state_30230;
(statearr_30236[(8)] = inst_30161__$1);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30237_30281 = state_30230__$1;
(statearr_30237_30281[(1)] = (5));

} else {
var statearr_30238_30282 = state_30230__$1;
(statearr_30238_30282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (15))){
var inst_30203 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30239_30283 = state_30230__$1;
(statearr_30239_30283[(2)] = inst_30203);

(statearr_30239_30283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (21))){
var inst_30223 = (state_30230[(2)]);
var state_30230__$1 = (function (){var statearr_30240 = state_30230;
(statearr_30240[(9)] = inst_30223);

return statearr_30240;
})();
var statearr_30241_30284 = state_30230__$1;
(statearr_30241_30284[(2)] = null);

(statearr_30241_30284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (13))){
var inst_30185 = (state_30230[(10)]);
var inst_30187 = cljs.core.chunked_seq_QMARK_.call(null,inst_30185);
var state_30230__$1 = state_30230;
if(inst_30187){
var statearr_30242_30285 = state_30230__$1;
(statearr_30242_30285[(1)] = (16));

} else {
var statearr_30243_30286 = state_30230__$1;
(statearr_30243_30286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (22))){
var inst_30215 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
if(cljs.core.truth_(inst_30215)){
var statearr_30244_30287 = state_30230__$1;
(statearr_30244_30287[(1)] = (23));

} else {
var statearr_30245_30288 = state_30230__$1;
(statearr_30245_30288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (6))){
var inst_30209 = (state_30230[(7)]);
var inst_30211 = (state_30230[(11)]);
var inst_30161 = (state_30230[(8)]);
var inst_30209__$1 = topic_fn.call(null,inst_30161);
var inst_30210 = cljs.core.deref.call(null,mults);
var inst_30211__$1 = cljs.core.get.call(null,inst_30210,inst_30209__$1);
var state_30230__$1 = (function (){var statearr_30246 = state_30230;
(statearr_30246[(7)] = inst_30209__$1);

(statearr_30246[(11)] = inst_30211__$1);

return statearr_30246;
})();
if(cljs.core.truth_(inst_30211__$1)){
var statearr_30247_30289 = state_30230__$1;
(statearr_30247_30289[(1)] = (19));

} else {
var statearr_30248_30290 = state_30230__$1;
(statearr_30248_30290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (25))){
var inst_30220 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30249_30291 = state_30230__$1;
(statearr_30249_30291[(2)] = inst_30220);

(statearr_30249_30291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (17))){
var inst_30185 = (state_30230[(10)]);
var inst_30194 = cljs.core.first.call(null,inst_30185);
var inst_30195 = cljs.core.async.muxch_STAR_.call(null,inst_30194);
var inst_30196 = cljs.core.async.close_BANG_.call(null,inst_30195);
var inst_30197 = cljs.core.next.call(null,inst_30185);
var inst_30171 = inst_30197;
var inst_30172 = null;
var inst_30173 = (0);
var inst_30174 = (0);
var state_30230__$1 = (function (){var statearr_30250 = state_30230;
(statearr_30250[(12)] = inst_30174);

(statearr_30250[(13)] = inst_30173);

(statearr_30250[(14)] = inst_30172);

(statearr_30250[(15)] = inst_30171);

(statearr_30250[(16)] = inst_30196);

return statearr_30250;
})();
var statearr_30251_30292 = state_30230__$1;
(statearr_30251_30292[(2)] = null);

(statearr_30251_30292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (3))){
var inst_30228 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30230__$1,inst_30228);
} else {
if((state_val_30231 === (12))){
var inst_30205 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30252_30293 = state_30230__$1;
(statearr_30252_30293[(2)] = inst_30205);

(statearr_30252_30293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (2))){
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30230__$1,(4),ch);
} else {
if((state_val_30231 === (23))){
var state_30230__$1 = state_30230;
var statearr_30253_30294 = state_30230__$1;
(statearr_30253_30294[(2)] = null);

(statearr_30253_30294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (19))){
var inst_30211 = (state_30230[(11)]);
var inst_30161 = (state_30230[(8)]);
var inst_30213 = cljs.core.async.muxch_STAR_.call(null,inst_30211);
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30230__$1,(22),inst_30213,inst_30161);
} else {
if((state_val_30231 === (11))){
var inst_30171 = (state_30230[(15)]);
var inst_30185 = (state_30230[(10)]);
var inst_30185__$1 = cljs.core.seq.call(null,inst_30171);
var state_30230__$1 = (function (){var statearr_30254 = state_30230;
(statearr_30254[(10)] = inst_30185__$1);

return statearr_30254;
})();
if(inst_30185__$1){
var statearr_30255_30295 = state_30230__$1;
(statearr_30255_30295[(1)] = (13));

} else {
var statearr_30256_30296 = state_30230__$1;
(statearr_30256_30296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (9))){
var inst_30207 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30257_30297 = state_30230__$1;
(statearr_30257_30297[(2)] = inst_30207);

(statearr_30257_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (5))){
var inst_30168 = cljs.core.deref.call(null,mults);
var inst_30169 = cljs.core.vals.call(null,inst_30168);
var inst_30170 = cljs.core.seq.call(null,inst_30169);
var inst_30171 = inst_30170;
var inst_30172 = null;
var inst_30173 = (0);
var inst_30174 = (0);
var state_30230__$1 = (function (){var statearr_30258 = state_30230;
(statearr_30258[(12)] = inst_30174);

(statearr_30258[(13)] = inst_30173);

(statearr_30258[(14)] = inst_30172);

(statearr_30258[(15)] = inst_30171);

return statearr_30258;
})();
var statearr_30259_30298 = state_30230__$1;
(statearr_30259_30298[(2)] = null);

(statearr_30259_30298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (14))){
var state_30230__$1 = state_30230;
var statearr_30263_30299 = state_30230__$1;
(statearr_30263_30299[(2)] = null);

(statearr_30263_30299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (16))){
var inst_30185 = (state_30230[(10)]);
var inst_30189 = cljs.core.chunk_first.call(null,inst_30185);
var inst_30190 = cljs.core.chunk_rest.call(null,inst_30185);
var inst_30191 = cljs.core.count.call(null,inst_30189);
var inst_30171 = inst_30190;
var inst_30172 = inst_30189;
var inst_30173 = inst_30191;
var inst_30174 = (0);
var state_30230__$1 = (function (){var statearr_30264 = state_30230;
(statearr_30264[(12)] = inst_30174);

(statearr_30264[(13)] = inst_30173);

(statearr_30264[(14)] = inst_30172);

(statearr_30264[(15)] = inst_30171);

return statearr_30264;
})();
var statearr_30265_30300 = state_30230__$1;
(statearr_30265_30300[(2)] = null);

(statearr_30265_30300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (10))){
var inst_30174 = (state_30230[(12)]);
var inst_30173 = (state_30230[(13)]);
var inst_30172 = (state_30230[(14)]);
var inst_30171 = (state_30230[(15)]);
var inst_30179 = cljs.core._nth.call(null,inst_30172,inst_30174);
var inst_30180 = cljs.core.async.muxch_STAR_.call(null,inst_30179);
var inst_30181 = cljs.core.async.close_BANG_.call(null,inst_30180);
var inst_30182 = (inst_30174 + (1));
var tmp30260 = inst_30173;
var tmp30261 = inst_30172;
var tmp30262 = inst_30171;
var inst_30171__$1 = tmp30262;
var inst_30172__$1 = tmp30261;
var inst_30173__$1 = tmp30260;
var inst_30174__$1 = inst_30182;
var state_30230__$1 = (function (){var statearr_30266 = state_30230;
(statearr_30266[(12)] = inst_30174__$1);

(statearr_30266[(13)] = inst_30173__$1);

(statearr_30266[(14)] = inst_30172__$1);

(statearr_30266[(15)] = inst_30171__$1);

(statearr_30266[(17)] = inst_30181);

return statearr_30266;
})();
var statearr_30267_30301 = state_30230__$1;
(statearr_30267_30301[(2)] = null);

(statearr_30267_30301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (18))){
var inst_30200 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30268_30302 = state_30230__$1;
(statearr_30268_30302[(2)] = inst_30200);

(statearr_30268_30302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (8))){
var inst_30174 = (state_30230[(12)]);
var inst_30173 = (state_30230[(13)]);
var inst_30176 = (inst_30174 < inst_30173);
var inst_30177 = inst_30176;
var state_30230__$1 = state_30230;
if(cljs.core.truth_(inst_30177)){
var statearr_30269_30303 = state_30230__$1;
(statearr_30269_30303[(1)] = (10));

} else {
var statearr_30270_30304 = state_30230__$1;
(statearr_30270_30304[(1)] = (11));

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
});})(c__29042__auto___30276,mults,ensure_mult,p))
;
return ((function (switch__28951__auto__,c__29042__auto___30276,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30271[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30271[(1)] = (1));

return statearr_30271;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30230){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30272){if((e30272 instanceof Object)){
var ex__28955__auto__ = e30272;
var statearr_30273_30305 = state_30230;
(statearr_30273_30305[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30306 = state_30230;
state_30230 = G__30306;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30276,mults,ensure_mult,p))
})();
var state__29044__auto__ = (function (){var statearr_30274 = f__29043__auto__.call(null);
(statearr_30274[(6)] = c__29042__auto___30276);

return statearr_30274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30276,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30308 = arguments.length;
switch (G__30308) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30311 = arguments.length;
switch (G__30311) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30314 = arguments.length;
switch (G__30314) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29042__auto___30381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30353){
var state_val_30354 = (state_30353[(1)]);
if((state_val_30354 === (7))){
var state_30353__$1 = state_30353;
var statearr_30355_30382 = state_30353__$1;
(statearr_30355_30382[(2)] = null);

(statearr_30355_30382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (1))){
var state_30353__$1 = state_30353;
var statearr_30356_30383 = state_30353__$1;
(statearr_30356_30383[(2)] = null);

(statearr_30356_30383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (4))){
var inst_30317 = (state_30353[(7)]);
var inst_30319 = (inst_30317 < cnt);
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30319)){
var statearr_30357_30384 = state_30353__$1;
(statearr_30357_30384[(1)] = (6));

} else {
var statearr_30358_30385 = state_30353__$1;
(statearr_30358_30385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (15))){
var inst_30349 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30359_30386 = state_30353__$1;
(statearr_30359_30386[(2)] = inst_30349);

(statearr_30359_30386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (13))){
var inst_30342 = cljs.core.async.close_BANG_.call(null,out);
var state_30353__$1 = state_30353;
var statearr_30360_30387 = state_30353__$1;
(statearr_30360_30387[(2)] = inst_30342);

(statearr_30360_30387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (6))){
var state_30353__$1 = state_30353;
var statearr_30361_30388 = state_30353__$1;
(statearr_30361_30388[(2)] = null);

(statearr_30361_30388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (3))){
var inst_30351 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30353__$1,inst_30351);
} else {
if((state_val_30354 === (12))){
var inst_30339 = (state_30353[(8)]);
var inst_30339__$1 = (state_30353[(2)]);
var inst_30340 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30339__$1);
var state_30353__$1 = (function (){var statearr_30362 = state_30353;
(statearr_30362[(8)] = inst_30339__$1);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30340)){
var statearr_30363_30389 = state_30353__$1;
(statearr_30363_30389[(1)] = (13));

} else {
var statearr_30364_30390 = state_30353__$1;
(statearr_30364_30390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (2))){
var inst_30316 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30317 = (0);
var state_30353__$1 = (function (){var statearr_30365 = state_30353;
(statearr_30365[(7)] = inst_30317);

(statearr_30365[(9)] = inst_30316);

return statearr_30365;
})();
var statearr_30366_30391 = state_30353__$1;
(statearr_30366_30391[(2)] = null);

(statearr_30366_30391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (11))){
var inst_30317 = (state_30353[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30353,(10),Object,null,(9));
var inst_30326 = chs__$1.call(null,inst_30317);
var inst_30327 = done.call(null,inst_30317);
var inst_30328 = cljs.core.async.take_BANG_.call(null,inst_30326,inst_30327);
var state_30353__$1 = state_30353;
var statearr_30367_30392 = state_30353__$1;
(statearr_30367_30392[(2)] = inst_30328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (9))){
var inst_30317 = (state_30353[(7)]);
var inst_30330 = (state_30353[(2)]);
var inst_30331 = (inst_30317 + (1));
var inst_30317__$1 = inst_30331;
var state_30353__$1 = (function (){var statearr_30368 = state_30353;
(statearr_30368[(10)] = inst_30330);

(statearr_30368[(7)] = inst_30317__$1);

return statearr_30368;
})();
var statearr_30369_30393 = state_30353__$1;
(statearr_30369_30393[(2)] = null);

(statearr_30369_30393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (5))){
var inst_30337 = (state_30353[(2)]);
var state_30353__$1 = (function (){var statearr_30370 = state_30353;
(statearr_30370[(11)] = inst_30337);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30353__$1,(12),dchan);
} else {
if((state_val_30354 === (14))){
var inst_30339 = (state_30353[(8)]);
var inst_30344 = cljs.core.apply.call(null,f,inst_30339);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30353__$1,(16),out,inst_30344);
} else {
if((state_val_30354 === (16))){
var inst_30346 = (state_30353[(2)]);
var state_30353__$1 = (function (){var statearr_30371 = state_30353;
(statearr_30371[(12)] = inst_30346);

return statearr_30371;
})();
var statearr_30372_30394 = state_30353__$1;
(statearr_30372_30394[(2)] = null);

(statearr_30372_30394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (10))){
var inst_30321 = (state_30353[(2)]);
var inst_30322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30353__$1 = (function (){var statearr_30373 = state_30353;
(statearr_30373[(13)] = inst_30321);

return statearr_30373;
})();
var statearr_30374_30395 = state_30353__$1;
(statearr_30374_30395[(2)] = inst_30322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (8))){
var inst_30335 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30375_30396 = state_30353__$1;
(statearr_30375_30396[(2)] = inst_30335);

(statearr_30375_30396[(1)] = (5));


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
});})(c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28951__auto__,c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30376[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30376[(1)] = (1));

return statearr_30376;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30353){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30377){if((e30377 instanceof Object)){
var ex__28955__auto__ = e30377;
var statearr_30378_30397 = state_30353;
(statearr_30378_30397[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30398 = state_30353;
state_30353 = G__30398;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29044__auto__ = (function (){var statearr_30379 = f__29043__auto__.call(null);
(statearr_30379[(6)] = c__29042__auto___30381);

return statearr_30379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30381,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30401 = arguments.length;
switch (G__30401) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30455,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30455,out){
return (function (state_30433){
var state_val_30434 = (state_30433[(1)]);
if((state_val_30434 === (7))){
var inst_30413 = (state_30433[(7)]);
var inst_30412 = (state_30433[(8)]);
var inst_30412__$1 = (state_30433[(2)]);
var inst_30413__$1 = cljs.core.nth.call(null,inst_30412__$1,(0),null);
var inst_30414 = cljs.core.nth.call(null,inst_30412__$1,(1),null);
var inst_30415 = (inst_30413__$1 == null);
var state_30433__$1 = (function (){var statearr_30435 = state_30433;
(statearr_30435[(7)] = inst_30413__$1);

(statearr_30435[(9)] = inst_30414);

(statearr_30435[(8)] = inst_30412__$1);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30415)){
var statearr_30436_30456 = state_30433__$1;
(statearr_30436_30456[(1)] = (8));

} else {
var statearr_30437_30457 = state_30433__$1;
(statearr_30437_30457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (1))){
var inst_30402 = cljs.core.vec.call(null,chs);
var inst_30403 = inst_30402;
var state_30433__$1 = (function (){var statearr_30438 = state_30433;
(statearr_30438[(10)] = inst_30403);

return statearr_30438;
})();
var statearr_30439_30458 = state_30433__$1;
(statearr_30439_30458[(2)] = null);

(statearr_30439_30458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (4))){
var inst_30403 = (state_30433[(10)]);
var state_30433__$1 = state_30433;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30433__$1,(7),inst_30403);
} else {
if((state_val_30434 === (6))){
var inst_30429 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30440_30459 = state_30433__$1;
(statearr_30440_30459[(2)] = inst_30429);

(statearr_30440_30459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (3))){
var inst_30431 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30433__$1,inst_30431);
} else {
if((state_val_30434 === (2))){
var inst_30403 = (state_30433[(10)]);
var inst_30405 = cljs.core.count.call(null,inst_30403);
var inst_30406 = (inst_30405 > (0));
var state_30433__$1 = state_30433;
if(cljs.core.truth_(inst_30406)){
var statearr_30442_30460 = state_30433__$1;
(statearr_30442_30460[(1)] = (4));

} else {
var statearr_30443_30461 = state_30433__$1;
(statearr_30443_30461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (11))){
var inst_30403 = (state_30433[(10)]);
var inst_30422 = (state_30433[(2)]);
var tmp30441 = inst_30403;
var inst_30403__$1 = tmp30441;
var state_30433__$1 = (function (){var statearr_30444 = state_30433;
(statearr_30444[(10)] = inst_30403__$1);

(statearr_30444[(11)] = inst_30422);

return statearr_30444;
})();
var statearr_30445_30462 = state_30433__$1;
(statearr_30445_30462[(2)] = null);

(statearr_30445_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (9))){
var inst_30413 = (state_30433[(7)]);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30433__$1,(11),out,inst_30413);
} else {
if((state_val_30434 === (5))){
var inst_30427 = cljs.core.async.close_BANG_.call(null,out);
var state_30433__$1 = state_30433;
var statearr_30446_30463 = state_30433__$1;
(statearr_30446_30463[(2)] = inst_30427);

(statearr_30446_30463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (10))){
var inst_30425 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30447_30464 = state_30433__$1;
(statearr_30447_30464[(2)] = inst_30425);

(statearr_30447_30464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (8))){
var inst_30413 = (state_30433[(7)]);
var inst_30403 = (state_30433[(10)]);
var inst_30414 = (state_30433[(9)]);
var inst_30412 = (state_30433[(8)]);
var inst_30417 = (function (){var cs = inst_30403;
var vec__30408 = inst_30412;
var v = inst_30413;
var c = inst_30414;
return ((function (cs,vec__30408,v,c,inst_30413,inst_30403,inst_30414,inst_30412,state_val_30434,c__29042__auto___30455,out){
return (function (p1__30399_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30399_SHARP_);
});
;})(cs,vec__30408,v,c,inst_30413,inst_30403,inst_30414,inst_30412,state_val_30434,c__29042__auto___30455,out))
})();
var inst_30418 = cljs.core.filterv.call(null,inst_30417,inst_30403);
var inst_30403__$1 = inst_30418;
var state_30433__$1 = (function (){var statearr_30448 = state_30433;
(statearr_30448[(10)] = inst_30403__$1);

return statearr_30448;
})();
var statearr_30449_30465 = state_30433__$1;
(statearr_30449_30465[(2)] = null);

(statearr_30449_30465[(1)] = (2));


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
});})(c__29042__auto___30455,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30455,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30450[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30450[(1)] = (1));

return statearr_30450;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30433){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30451){if((e30451 instanceof Object)){
var ex__28955__auto__ = e30451;
var statearr_30452_30466 = state_30433;
(statearr_30452_30466[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30433;
state_30433 = G__30467;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30455,out))
})();
var state__29044__auto__ = (function (){var statearr_30453 = f__29043__auto__.call(null);
(statearr_30453[(6)] = c__29042__auto___30455);

return statearr_30453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30455,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30469 = arguments.length;
switch (G__30469) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30514,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30514,out){
return (function (state_30493){
var state_val_30494 = (state_30493[(1)]);
if((state_val_30494 === (7))){
var inst_30475 = (state_30493[(7)]);
var inst_30475__$1 = (state_30493[(2)]);
var inst_30476 = (inst_30475__$1 == null);
var inst_30477 = cljs.core.not.call(null,inst_30476);
var state_30493__$1 = (function (){var statearr_30495 = state_30493;
(statearr_30495[(7)] = inst_30475__$1);

return statearr_30495;
})();
if(inst_30477){
var statearr_30496_30515 = state_30493__$1;
(statearr_30496_30515[(1)] = (8));

} else {
var statearr_30497_30516 = state_30493__$1;
(statearr_30497_30516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (1))){
var inst_30470 = (0);
var state_30493__$1 = (function (){var statearr_30498 = state_30493;
(statearr_30498[(8)] = inst_30470);

return statearr_30498;
})();
var statearr_30499_30517 = state_30493__$1;
(statearr_30499_30517[(2)] = null);

(statearr_30499_30517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (4))){
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(7),ch);
} else {
if((state_val_30494 === (6))){
var inst_30488 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30500_30518 = state_30493__$1;
(statearr_30500_30518[(2)] = inst_30488);

(statearr_30500_30518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (3))){
var inst_30490 = (state_30493[(2)]);
var inst_30491 = cljs.core.async.close_BANG_.call(null,out);
var state_30493__$1 = (function (){var statearr_30501 = state_30493;
(statearr_30501[(9)] = inst_30490);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30493__$1,inst_30491);
} else {
if((state_val_30494 === (2))){
var inst_30470 = (state_30493[(8)]);
var inst_30472 = (inst_30470 < n);
var state_30493__$1 = state_30493;
if(cljs.core.truth_(inst_30472)){
var statearr_30502_30519 = state_30493__$1;
(statearr_30502_30519[(1)] = (4));

} else {
var statearr_30503_30520 = state_30493__$1;
(statearr_30503_30520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (11))){
var inst_30470 = (state_30493[(8)]);
var inst_30480 = (state_30493[(2)]);
var inst_30481 = (inst_30470 + (1));
var inst_30470__$1 = inst_30481;
var state_30493__$1 = (function (){var statearr_30504 = state_30493;
(statearr_30504[(10)] = inst_30480);

(statearr_30504[(8)] = inst_30470__$1);

return statearr_30504;
})();
var statearr_30505_30521 = state_30493__$1;
(statearr_30505_30521[(2)] = null);

(statearr_30505_30521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (9))){
var state_30493__$1 = state_30493;
var statearr_30506_30522 = state_30493__$1;
(statearr_30506_30522[(2)] = null);

(statearr_30506_30522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (5))){
var state_30493__$1 = state_30493;
var statearr_30507_30523 = state_30493__$1;
(statearr_30507_30523[(2)] = null);

(statearr_30507_30523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (10))){
var inst_30485 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30508_30524 = state_30493__$1;
(statearr_30508_30524[(2)] = inst_30485);

(statearr_30508_30524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (8))){
var inst_30475 = (state_30493[(7)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30493__$1,(11),out,inst_30475);
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
});})(c__29042__auto___30514,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30514,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30509[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30509[(1)] = (1));

return statearr_30509;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30493){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30510){if((e30510 instanceof Object)){
var ex__28955__auto__ = e30510;
var statearr_30511_30525 = state_30493;
(statearr_30511_30525[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30526 = state_30493;
state_30493 = G__30526;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30514,out))
})();
var state__29044__auto__ = (function (){var statearr_30512 = f__29043__auto__.call(null);
(statearr_30512[(6)] = c__29042__auto___30514);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30514,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30528 = (function (f,ch,meta30529){
this.f = f;
this.ch = ch;
this.meta30529 = meta30529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30530,meta30529__$1){
var self__ = this;
var _30530__$1 = this;
return (new cljs.core.async.t_cljs$core$async30528(self__.f,self__.ch,meta30529__$1));
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30530){
var self__ = this;
var _30530__$1 = this;
return self__.meta30529;
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30531 = (function (f,ch,meta30529,_,fn1,meta30532){
this.f = f;
this.ch = ch;
this.meta30529 = meta30529;
this._ = _;
this.fn1 = fn1;
this.meta30532 = meta30532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30533,meta30532__$1){
var self__ = this;
var _30533__$1 = this;
return (new cljs.core.async.t_cljs$core$async30531(self__.f,self__.ch,self__.meta30529,self__._,self__.fn1,meta30532__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30533){
var self__ = this;
var _30533__$1 = this;
return self__.meta30532;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30527_SHARP_){
return f1.call(null,(((p1__30527_SHARP_ == null))?null:self__.f.call(null,p1__30527_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30529","meta30529",162746633,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30528","cljs.core.async/t_cljs$core$async30528",606764620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30532","meta30532",1779605089,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30531";

cljs.core.async.t_cljs$core$async30531.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30531");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30531.
 */
cljs.core.async.__GT_t_cljs$core$async30531 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30531(f__$1,ch__$1,meta30529__$1,___$2,fn1__$1,meta30532){
return (new cljs.core.async.t_cljs$core$async30531(f__$1,ch__$1,meta30529__$1,___$2,fn1__$1,meta30532));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30531(self__.f,self__.ch,self__.meta30529,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30529","meta30529",162746633,null)], null);
});

cljs.core.async.t_cljs$core$async30528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30528";

cljs.core.async.t_cljs$core$async30528.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30528");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30528.
 */
cljs.core.async.__GT_t_cljs$core$async30528 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30528(f__$1,ch__$1,meta30529){
return (new cljs.core.async.t_cljs$core$async30528(f__$1,ch__$1,meta30529));
});

}

return (new cljs.core.async.t_cljs$core$async30528(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30534 = (function (f,ch,meta30535){
this.f = f;
this.ch = ch;
this.meta30535 = meta30535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30536,meta30535__$1){
var self__ = this;
var _30536__$1 = this;
return (new cljs.core.async.t_cljs$core$async30534(self__.f,self__.ch,meta30535__$1));
});

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30536){
var self__ = this;
var _30536__$1 = this;
return self__.meta30535;
});

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30535","meta30535",688770429,null)], null);
});

cljs.core.async.t_cljs$core$async30534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30534";

cljs.core.async.t_cljs$core$async30534.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30534");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30534.
 */
cljs.core.async.__GT_t_cljs$core$async30534 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30534(f__$1,ch__$1,meta30535){
return (new cljs.core.async.t_cljs$core$async30534(f__$1,ch__$1,meta30535));
});

}

return (new cljs.core.async.t_cljs$core$async30534(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30537 = (function (p,ch,meta30538){
this.p = p;
this.ch = ch;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30539,meta30538__$1){
var self__ = this;
var _30539__$1 = this;
return (new cljs.core.async.t_cljs$core$async30537(self__.p,self__.ch,meta30538__$1));
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30539){
var self__ = this;
var _30539__$1 = this;
return self__.meta30538;
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30538","meta30538",1476811510,null)], null);
});

cljs.core.async.t_cljs$core$async30537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30537";

cljs.core.async.t_cljs$core$async30537.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30537");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30537.
 */
cljs.core.async.__GT_t_cljs$core$async30537 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30537(p__$1,ch__$1,meta30538){
return (new cljs.core.async.t_cljs$core$async30537(p__$1,ch__$1,meta30538));
});

}

return (new cljs.core.async.t_cljs$core$async30537(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30541 = arguments.length;
switch (G__30541) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30581,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30581,out){
return (function (state_30562){
var state_val_30563 = (state_30562[(1)]);
if((state_val_30563 === (7))){
var inst_30558 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30564_30582 = state_30562__$1;
(statearr_30564_30582[(2)] = inst_30558);

(statearr_30564_30582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (1))){
var state_30562__$1 = state_30562;
var statearr_30565_30583 = state_30562__$1;
(statearr_30565_30583[(2)] = null);

(statearr_30565_30583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (4))){
var inst_30544 = (state_30562[(7)]);
var inst_30544__$1 = (state_30562[(2)]);
var inst_30545 = (inst_30544__$1 == null);
var state_30562__$1 = (function (){var statearr_30566 = state_30562;
(statearr_30566[(7)] = inst_30544__$1);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30567_30584 = state_30562__$1;
(statearr_30567_30584[(1)] = (5));

} else {
var statearr_30568_30585 = state_30562__$1;
(statearr_30568_30585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (6))){
var inst_30544 = (state_30562[(7)]);
var inst_30549 = p.call(null,inst_30544);
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30549)){
var statearr_30569_30586 = state_30562__$1;
(statearr_30569_30586[(1)] = (8));

} else {
var statearr_30570_30587 = state_30562__$1;
(statearr_30570_30587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (3))){
var inst_30560 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else {
if((state_val_30563 === (2))){
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(4),ch);
} else {
if((state_val_30563 === (11))){
var inst_30552 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30571_30588 = state_30562__$1;
(statearr_30571_30588[(2)] = inst_30552);

(statearr_30571_30588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (9))){
var state_30562__$1 = state_30562;
var statearr_30572_30589 = state_30562__$1;
(statearr_30572_30589[(2)] = null);

(statearr_30572_30589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (5))){
var inst_30547 = cljs.core.async.close_BANG_.call(null,out);
var state_30562__$1 = state_30562;
var statearr_30573_30590 = state_30562__$1;
(statearr_30573_30590[(2)] = inst_30547);

(statearr_30573_30590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (10))){
var inst_30555 = (state_30562[(2)]);
var state_30562__$1 = (function (){var statearr_30574 = state_30562;
(statearr_30574[(8)] = inst_30555);

return statearr_30574;
})();
var statearr_30575_30591 = state_30562__$1;
(statearr_30575_30591[(2)] = null);

(statearr_30575_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (8))){
var inst_30544 = (state_30562[(7)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30562__$1,(11),out,inst_30544);
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
});})(c__29042__auto___30581,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30581,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30562){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__28955__auto__ = e30577;
var statearr_30578_30592 = state_30562;
(statearr_30578_30592[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30593 = state_30562;
state_30562 = G__30593;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30581,out))
})();
var state__29044__auto__ = (function (){var statearr_30579 = f__29043__auto__.call(null);
(statearr_30579[(6)] = c__29042__auto___30581);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30581,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30595 = arguments.length;
switch (G__30595) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto__){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto__){
return (function (state_30658){
var state_val_30659 = (state_30658[(1)]);
if((state_val_30659 === (7))){
var inst_30654 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30660_30698 = state_30658__$1;
(statearr_30660_30698[(2)] = inst_30654);

(statearr_30660_30698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (20))){
var inst_30624 = (state_30658[(7)]);
var inst_30635 = (state_30658[(2)]);
var inst_30636 = cljs.core.next.call(null,inst_30624);
var inst_30610 = inst_30636;
var inst_30611 = null;
var inst_30612 = (0);
var inst_30613 = (0);
var state_30658__$1 = (function (){var statearr_30661 = state_30658;
(statearr_30661[(8)] = inst_30612);

(statearr_30661[(9)] = inst_30635);

(statearr_30661[(10)] = inst_30613);

(statearr_30661[(11)] = inst_30610);

(statearr_30661[(12)] = inst_30611);

return statearr_30661;
})();
var statearr_30662_30699 = state_30658__$1;
(statearr_30662_30699[(2)] = null);

(statearr_30662_30699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (1))){
var state_30658__$1 = state_30658;
var statearr_30663_30700 = state_30658__$1;
(statearr_30663_30700[(2)] = null);

(statearr_30663_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (4))){
var inst_30599 = (state_30658[(13)]);
var inst_30599__$1 = (state_30658[(2)]);
var inst_30600 = (inst_30599__$1 == null);
var state_30658__$1 = (function (){var statearr_30664 = state_30658;
(statearr_30664[(13)] = inst_30599__$1);

return statearr_30664;
})();
if(cljs.core.truth_(inst_30600)){
var statearr_30665_30701 = state_30658__$1;
(statearr_30665_30701[(1)] = (5));

} else {
var statearr_30666_30702 = state_30658__$1;
(statearr_30666_30702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (15))){
var state_30658__$1 = state_30658;
var statearr_30670_30703 = state_30658__$1;
(statearr_30670_30703[(2)] = null);

(statearr_30670_30703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (21))){
var state_30658__$1 = state_30658;
var statearr_30671_30704 = state_30658__$1;
(statearr_30671_30704[(2)] = null);

(statearr_30671_30704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (13))){
var inst_30612 = (state_30658[(8)]);
var inst_30613 = (state_30658[(10)]);
var inst_30610 = (state_30658[(11)]);
var inst_30611 = (state_30658[(12)]);
var inst_30620 = (state_30658[(2)]);
var inst_30621 = (inst_30613 + (1));
var tmp30667 = inst_30612;
var tmp30668 = inst_30610;
var tmp30669 = inst_30611;
var inst_30610__$1 = tmp30668;
var inst_30611__$1 = tmp30669;
var inst_30612__$1 = tmp30667;
var inst_30613__$1 = inst_30621;
var state_30658__$1 = (function (){var statearr_30672 = state_30658;
(statearr_30672[(8)] = inst_30612__$1);

(statearr_30672[(10)] = inst_30613__$1);

(statearr_30672[(11)] = inst_30610__$1);

(statearr_30672[(12)] = inst_30611__$1);

(statearr_30672[(14)] = inst_30620);

return statearr_30672;
})();
var statearr_30673_30705 = state_30658__$1;
(statearr_30673_30705[(2)] = null);

(statearr_30673_30705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (22))){
var state_30658__$1 = state_30658;
var statearr_30674_30706 = state_30658__$1;
(statearr_30674_30706[(2)] = null);

(statearr_30674_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (6))){
var inst_30599 = (state_30658[(13)]);
var inst_30608 = f.call(null,inst_30599);
var inst_30609 = cljs.core.seq.call(null,inst_30608);
var inst_30610 = inst_30609;
var inst_30611 = null;
var inst_30612 = (0);
var inst_30613 = (0);
var state_30658__$1 = (function (){var statearr_30675 = state_30658;
(statearr_30675[(8)] = inst_30612);

(statearr_30675[(10)] = inst_30613);

(statearr_30675[(11)] = inst_30610);

(statearr_30675[(12)] = inst_30611);

return statearr_30675;
})();
var statearr_30676_30707 = state_30658__$1;
(statearr_30676_30707[(2)] = null);

(statearr_30676_30707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (17))){
var inst_30624 = (state_30658[(7)]);
var inst_30628 = cljs.core.chunk_first.call(null,inst_30624);
var inst_30629 = cljs.core.chunk_rest.call(null,inst_30624);
var inst_30630 = cljs.core.count.call(null,inst_30628);
var inst_30610 = inst_30629;
var inst_30611 = inst_30628;
var inst_30612 = inst_30630;
var inst_30613 = (0);
var state_30658__$1 = (function (){var statearr_30677 = state_30658;
(statearr_30677[(8)] = inst_30612);

(statearr_30677[(10)] = inst_30613);

(statearr_30677[(11)] = inst_30610);

(statearr_30677[(12)] = inst_30611);

return statearr_30677;
})();
var statearr_30678_30708 = state_30658__$1;
(statearr_30678_30708[(2)] = null);

(statearr_30678_30708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (3))){
var inst_30656 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30658__$1,inst_30656);
} else {
if((state_val_30659 === (12))){
var inst_30644 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30679_30709 = state_30658__$1;
(statearr_30679_30709[(2)] = inst_30644);

(statearr_30679_30709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (2))){
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30658__$1,(4),in$);
} else {
if((state_val_30659 === (23))){
var inst_30652 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30680_30710 = state_30658__$1;
(statearr_30680_30710[(2)] = inst_30652);

(statearr_30680_30710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (19))){
var inst_30639 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30681_30711 = state_30658__$1;
(statearr_30681_30711[(2)] = inst_30639);

(statearr_30681_30711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (11))){
var inst_30610 = (state_30658[(11)]);
var inst_30624 = (state_30658[(7)]);
var inst_30624__$1 = cljs.core.seq.call(null,inst_30610);
var state_30658__$1 = (function (){var statearr_30682 = state_30658;
(statearr_30682[(7)] = inst_30624__$1);

return statearr_30682;
})();
if(inst_30624__$1){
var statearr_30683_30712 = state_30658__$1;
(statearr_30683_30712[(1)] = (14));

} else {
var statearr_30684_30713 = state_30658__$1;
(statearr_30684_30713[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (9))){
var inst_30646 = (state_30658[(2)]);
var inst_30647 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30658__$1 = (function (){var statearr_30685 = state_30658;
(statearr_30685[(15)] = inst_30646);

return statearr_30685;
})();
if(cljs.core.truth_(inst_30647)){
var statearr_30686_30714 = state_30658__$1;
(statearr_30686_30714[(1)] = (21));

} else {
var statearr_30687_30715 = state_30658__$1;
(statearr_30687_30715[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (5))){
var inst_30602 = cljs.core.async.close_BANG_.call(null,out);
var state_30658__$1 = state_30658;
var statearr_30688_30716 = state_30658__$1;
(statearr_30688_30716[(2)] = inst_30602);

(statearr_30688_30716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (14))){
var inst_30624 = (state_30658[(7)]);
var inst_30626 = cljs.core.chunked_seq_QMARK_.call(null,inst_30624);
var state_30658__$1 = state_30658;
if(inst_30626){
var statearr_30689_30717 = state_30658__$1;
(statearr_30689_30717[(1)] = (17));

} else {
var statearr_30690_30718 = state_30658__$1;
(statearr_30690_30718[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (16))){
var inst_30642 = (state_30658[(2)]);
var state_30658__$1 = state_30658;
var statearr_30691_30719 = state_30658__$1;
(statearr_30691_30719[(2)] = inst_30642);

(statearr_30691_30719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30659 === (10))){
var inst_30613 = (state_30658[(10)]);
var inst_30611 = (state_30658[(12)]);
var inst_30618 = cljs.core._nth.call(null,inst_30611,inst_30613);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30658__$1,(13),out,inst_30618);
} else {
if((state_val_30659 === (18))){
var inst_30624 = (state_30658[(7)]);
var inst_30633 = cljs.core.first.call(null,inst_30624);
var state_30658__$1 = state_30658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30658__$1,(20),out,inst_30633);
} else {
if((state_val_30659 === (8))){
var inst_30612 = (state_30658[(8)]);
var inst_30613 = (state_30658[(10)]);
var inst_30615 = (inst_30613 < inst_30612);
var inst_30616 = inst_30615;
var state_30658__$1 = state_30658;
if(cljs.core.truth_(inst_30616)){
var statearr_30692_30720 = state_30658__$1;
(statearr_30692_30720[(1)] = (10));

} else {
var statearr_30693_30721 = state_30658__$1;
(statearr_30693_30721[(1)] = (11));

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
});})(c__29042__auto__))
;
return ((function (switch__28951__auto__,c__29042__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____1 = (function (state_30658){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30695){if((e30695 instanceof Object)){
var ex__28955__auto__ = e30695;
var statearr_30696_30722 = state_30658;
(statearr_30696_30722[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30723 = state_30658;
state_30658 = G__30723;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__ = function(state_30658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____1.call(this,state_30658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28952__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto__))
})();
var state__29044__auto__ = (function (){var statearr_30697 = f__29043__auto__.call(null);
(statearr_30697[(6)] = c__29042__auto__);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto__))
);

return c__29042__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30725 = arguments.length;
switch (G__30725) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30728 = arguments.length;
switch (G__30728) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30731 = arguments.length;
switch (G__30731) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30778,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30778,out){
return (function (state_30755){
var state_val_30756 = (state_30755[(1)]);
if((state_val_30756 === (7))){
var inst_30750 = (state_30755[(2)]);
var state_30755__$1 = state_30755;
var statearr_30757_30779 = state_30755__$1;
(statearr_30757_30779[(2)] = inst_30750);

(statearr_30757_30779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (1))){
var inst_30732 = null;
var state_30755__$1 = (function (){var statearr_30758 = state_30755;
(statearr_30758[(7)] = inst_30732);

return statearr_30758;
})();
var statearr_30759_30780 = state_30755__$1;
(statearr_30759_30780[(2)] = null);

(statearr_30759_30780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (4))){
var inst_30735 = (state_30755[(8)]);
var inst_30735__$1 = (state_30755[(2)]);
var inst_30736 = (inst_30735__$1 == null);
var inst_30737 = cljs.core.not.call(null,inst_30736);
var state_30755__$1 = (function (){var statearr_30760 = state_30755;
(statearr_30760[(8)] = inst_30735__$1);

return statearr_30760;
})();
if(inst_30737){
var statearr_30761_30781 = state_30755__$1;
(statearr_30761_30781[(1)] = (5));

} else {
var statearr_30762_30782 = state_30755__$1;
(statearr_30762_30782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (6))){
var state_30755__$1 = state_30755;
var statearr_30763_30783 = state_30755__$1;
(statearr_30763_30783[(2)] = null);

(statearr_30763_30783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (3))){
var inst_30752 = (state_30755[(2)]);
var inst_30753 = cljs.core.async.close_BANG_.call(null,out);
var state_30755__$1 = (function (){var statearr_30764 = state_30755;
(statearr_30764[(9)] = inst_30752);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30755__$1,inst_30753);
} else {
if((state_val_30756 === (2))){
var state_30755__$1 = state_30755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30755__$1,(4),ch);
} else {
if((state_val_30756 === (11))){
var inst_30735 = (state_30755[(8)]);
var inst_30744 = (state_30755[(2)]);
var inst_30732 = inst_30735;
var state_30755__$1 = (function (){var statearr_30765 = state_30755;
(statearr_30765[(10)] = inst_30744);

(statearr_30765[(7)] = inst_30732);

return statearr_30765;
})();
var statearr_30766_30784 = state_30755__$1;
(statearr_30766_30784[(2)] = null);

(statearr_30766_30784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (9))){
var inst_30735 = (state_30755[(8)]);
var state_30755__$1 = state_30755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30755__$1,(11),out,inst_30735);
} else {
if((state_val_30756 === (5))){
var inst_30735 = (state_30755[(8)]);
var inst_30732 = (state_30755[(7)]);
var inst_30739 = cljs.core._EQ_.call(null,inst_30735,inst_30732);
var state_30755__$1 = state_30755;
if(inst_30739){
var statearr_30768_30785 = state_30755__$1;
(statearr_30768_30785[(1)] = (8));

} else {
var statearr_30769_30786 = state_30755__$1;
(statearr_30769_30786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (10))){
var inst_30747 = (state_30755[(2)]);
var state_30755__$1 = state_30755;
var statearr_30770_30787 = state_30755__$1;
(statearr_30770_30787[(2)] = inst_30747);

(statearr_30770_30787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30756 === (8))){
var inst_30732 = (state_30755[(7)]);
var tmp30767 = inst_30732;
var inst_30732__$1 = tmp30767;
var state_30755__$1 = (function (){var statearr_30771 = state_30755;
(statearr_30771[(7)] = inst_30732__$1);

return statearr_30771;
})();
var statearr_30772_30788 = state_30755__$1;
(statearr_30772_30788[(2)] = null);

(statearr_30772_30788[(1)] = (2));


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
});})(c__29042__auto___30778,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30778,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30773[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30773[(1)] = (1));

return statearr_30773;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30755){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30774){if((e30774 instanceof Object)){
var ex__28955__auto__ = e30774;
var statearr_30775_30789 = state_30755;
(statearr_30775_30789[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30790 = state_30755;
state_30755 = G__30790;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30778,out))
})();
var state__29044__auto__ = (function (){var statearr_30776 = f__29043__auto__.call(null);
(statearr_30776[(6)] = c__29042__auto___30778);

return statearr_30776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30792 = arguments.length;
switch (G__30792) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30858,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30858,out){
return (function (state_30830){
var state_val_30831 = (state_30830[(1)]);
if((state_val_30831 === (7))){
var inst_30826 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
var statearr_30832_30859 = state_30830__$1;
(statearr_30832_30859[(2)] = inst_30826);

(statearr_30832_30859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (1))){
var inst_30793 = (new Array(n));
var inst_30794 = inst_30793;
var inst_30795 = (0);
var state_30830__$1 = (function (){var statearr_30833 = state_30830;
(statearr_30833[(7)] = inst_30794);

(statearr_30833[(8)] = inst_30795);

return statearr_30833;
})();
var statearr_30834_30860 = state_30830__$1;
(statearr_30834_30860[(2)] = null);

(statearr_30834_30860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (4))){
var inst_30798 = (state_30830[(9)]);
var inst_30798__$1 = (state_30830[(2)]);
var inst_30799 = (inst_30798__$1 == null);
var inst_30800 = cljs.core.not.call(null,inst_30799);
var state_30830__$1 = (function (){var statearr_30835 = state_30830;
(statearr_30835[(9)] = inst_30798__$1);

return statearr_30835;
})();
if(inst_30800){
var statearr_30836_30861 = state_30830__$1;
(statearr_30836_30861[(1)] = (5));

} else {
var statearr_30837_30862 = state_30830__$1;
(statearr_30837_30862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (15))){
var inst_30820 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
var statearr_30838_30863 = state_30830__$1;
(statearr_30838_30863[(2)] = inst_30820);

(statearr_30838_30863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (13))){
var state_30830__$1 = state_30830;
var statearr_30839_30864 = state_30830__$1;
(statearr_30839_30864[(2)] = null);

(statearr_30839_30864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (6))){
var inst_30795 = (state_30830[(8)]);
var inst_30816 = (inst_30795 > (0));
var state_30830__$1 = state_30830;
if(cljs.core.truth_(inst_30816)){
var statearr_30840_30865 = state_30830__$1;
(statearr_30840_30865[(1)] = (12));

} else {
var statearr_30841_30866 = state_30830__$1;
(statearr_30841_30866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (3))){
var inst_30828 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30830__$1,inst_30828);
} else {
if((state_val_30831 === (12))){
var inst_30794 = (state_30830[(7)]);
var inst_30818 = cljs.core.vec.call(null,inst_30794);
var state_30830__$1 = state_30830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30830__$1,(15),out,inst_30818);
} else {
if((state_val_30831 === (2))){
var state_30830__$1 = state_30830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30830__$1,(4),ch);
} else {
if((state_val_30831 === (11))){
var inst_30810 = (state_30830[(2)]);
var inst_30811 = (new Array(n));
var inst_30794 = inst_30811;
var inst_30795 = (0);
var state_30830__$1 = (function (){var statearr_30842 = state_30830;
(statearr_30842[(7)] = inst_30794);

(statearr_30842[(10)] = inst_30810);

(statearr_30842[(8)] = inst_30795);

return statearr_30842;
})();
var statearr_30843_30867 = state_30830__$1;
(statearr_30843_30867[(2)] = null);

(statearr_30843_30867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (9))){
var inst_30794 = (state_30830[(7)]);
var inst_30808 = cljs.core.vec.call(null,inst_30794);
var state_30830__$1 = state_30830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30830__$1,(11),out,inst_30808);
} else {
if((state_val_30831 === (5))){
var inst_30803 = (state_30830[(11)]);
var inst_30794 = (state_30830[(7)]);
var inst_30795 = (state_30830[(8)]);
var inst_30798 = (state_30830[(9)]);
var inst_30802 = (inst_30794[inst_30795] = inst_30798);
var inst_30803__$1 = (inst_30795 + (1));
var inst_30804 = (inst_30803__$1 < n);
var state_30830__$1 = (function (){var statearr_30844 = state_30830;
(statearr_30844[(11)] = inst_30803__$1);

(statearr_30844[(12)] = inst_30802);

return statearr_30844;
})();
if(cljs.core.truth_(inst_30804)){
var statearr_30845_30868 = state_30830__$1;
(statearr_30845_30868[(1)] = (8));

} else {
var statearr_30846_30869 = state_30830__$1;
(statearr_30846_30869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (14))){
var inst_30823 = (state_30830[(2)]);
var inst_30824 = cljs.core.async.close_BANG_.call(null,out);
var state_30830__$1 = (function (){var statearr_30848 = state_30830;
(statearr_30848[(13)] = inst_30823);

return statearr_30848;
})();
var statearr_30849_30870 = state_30830__$1;
(statearr_30849_30870[(2)] = inst_30824);

(statearr_30849_30870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (10))){
var inst_30814 = (state_30830[(2)]);
var state_30830__$1 = state_30830;
var statearr_30850_30871 = state_30830__$1;
(statearr_30850_30871[(2)] = inst_30814);

(statearr_30850_30871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30831 === (8))){
var inst_30803 = (state_30830[(11)]);
var inst_30794 = (state_30830[(7)]);
var tmp30847 = inst_30794;
var inst_30794__$1 = tmp30847;
var inst_30795 = inst_30803;
var state_30830__$1 = (function (){var statearr_30851 = state_30830;
(statearr_30851[(7)] = inst_30794__$1);

(statearr_30851[(8)] = inst_30795);

return statearr_30851;
})();
var statearr_30852_30872 = state_30830__$1;
(statearr_30852_30872[(2)] = null);

(statearr_30852_30872[(1)] = (2));


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
});})(c__29042__auto___30858,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30858,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30853[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30853[(1)] = (1));

return statearr_30853;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30830){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30854){if((e30854 instanceof Object)){
var ex__28955__auto__ = e30854;
var statearr_30855_30873 = state_30830;
(statearr_30855_30873[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30874 = state_30830;
state_30830 = G__30874;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30858,out))
})();
var state__29044__auto__ = (function (){var statearr_30856 = f__29043__auto__.call(null);
(statearr_30856[(6)] = c__29042__auto___30858);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30858,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30876 = arguments.length;
switch (G__30876) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29042__auto___30946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29042__auto___30946,out){
return (function (){
var f__29043__auto__ = (function (){var switch__28951__auto__ = ((function (c__29042__auto___30946,out){
return (function (state_30918){
var state_val_30919 = (state_30918[(1)]);
if((state_val_30919 === (7))){
var inst_30914 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30920_30947 = state_30918__$1;
(statearr_30920_30947[(2)] = inst_30914);

(statearr_30920_30947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (1))){
var inst_30877 = [];
var inst_30878 = inst_30877;
var inst_30879 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30918__$1 = (function (){var statearr_30921 = state_30918;
(statearr_30921[(7)] = inst_30879);

(statearr_30921[(8)] = inst_30878);

return statearr_30921;
})();
var statearr_30922_30948 = state_30918__$1;
(statearr_30922_30948[(2)] = null);

(statearr_30922_30948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (4))){
var inst_30882 = (state_30918[(9)]);
var inst_30882__$1 = (state_30918[(2)]);
var inst_30883 = (inst_30882__$1 == null);
var inst_30884 = cljs.core.not.call(null,inst_30883);
var state_30918__$1 = (function (){var statearr_30923 = state_30918;
(statearr_30923[(9)] = inst_30882__$1);

return statearr_30923;
})();
if(inst_30884){
var statearr_30924_30949 = state_30918__$1;
(statearr_30924_30949[(1)] = (5));

} else {
var statearr_30925_30950 = state_30918__$1;
(statearr_30925_30950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (15))){
var inst_30908 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30926_30951 = state_30918__$1;
(statearr_30926_30951[(2)] = inst_30908);

(statearr_30926_30951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (13))){
var state_30918__$1 = state_30918;
var statearr_30927_30952 = state_30918__$1;
(statearr_30927_30952[(2)] = null);

(statearr_30927_30952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (6))){
var inst_30878 = (state_30918[(8)]);
var inst_30903 = inst_30878.length;
var inst_30904 = (inst_30903 > (0));
var state_30918__$1 = state_30918;
if(cljs.core.truth_(inst_30904)){
var statearr_30928_30953 = state_30918__$1;
(statearr_30928_30953[(1)] = (12));

} else {
var statearr_30929_30954 = state_30918__$1;
(statearr_30929_30954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (3))){
var inst_30916 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30918__$1,inst_30916);
} else {
if((state_val_30919 === (12))){
var inst_30878 = (state_30918[(8)]);
var inst_30906 = cljs.core.vec.call(null,inst_30878);
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30918__$1,(15),out,inst_30906);
} else {
if((state_val_30919 === (2))){
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30918__$1,(4),ch);
} else {
if((state_val_30919 === (11))){
var inst_30886 = (state_30918[(10)]);
var inst_30882 = (state_30918[(9)]);
var inst_30896 = (state_30918[(2)]);
var inst_30897 = [];
var inst_30898 = inst_30897.push(inst_30882);
var inst_30878 = inst_30897;
var inst_30879 = inst_30886;
var state_30918__$1 = (function (){var statearr_30930 = state_30918;
(statearr_30930[(7)] = inst_30879);

(statearr_30930[(11)] = inst_30898);

(statearr_30930[(12)] = inst_30896);

(statearr_30930[(8)] = inst_30878);

return statearr_30930;
})();
var statearr_30931_30955 = state_30918__$1;
(statearr_30931_30955[(2)] = null);

(statearr_30931_30955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (9))){
var inst_30878 = (state_30918[(8)]);
var inst_30894 = cljs.core.vec.call(null,inst_30878);
var state_30918__$1 = state_30918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30918__$1,(11),out,inst_30894);
} else {
if((state_val_30919 === (5))){
var inst_30879 = (state_30918[(7)]);
var inst_30886 = (state_30918[(10)]);
var inst_30882 = (state_30918[(9)]);
var inst_30886__$1 = f.call(null,inst_30882);
var inst_30887 = cljs.core._EQ_.call(null,inst_30886__$1,inst_30879);
var inst_30888 = cljs.core.keyword_identical_QMARK_.call(null,inst_30879,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30889 = ((inst_30887) || (inst_30888));
var state_30918__$1 = (function (){var statearr_30932 = state_30918;
(statearr_30932[(10)] = inst_30886__$1);

return statearr_30932;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_30933_30956 = state_30918__$1;
(statearr_30933_30956[(1)] = (8));

} else {
var statearr_30934_30957 = state_30918__$1;
(statearr_30934_30957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (14))){
var inst_30911 = (state_30918[(2)]);
var inst_30912 = cljs.core.async.close_BANG_.call(null,out);
var state_30918__$1 = (function (){var statearr_30936 = state_30918;
(statearr_30936[(13)] = inst_30911);

return statearr_30936;
})();
var statearr_30937_30958 = state_30918__$1;
(statearr_30937_30958[(2)] = inst_30912);

(statearr_30937_30958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (10))){
var inst_30901 = (state_30918[(2)]);
var state_30918__$1 = state_30918;
var statearr_30938_30959 = state_30918__$1;
(statearr_30938_30959[(2)] = inst_30901);

(statearr_30938_30959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30919 === (8))){
var inst_30878 = (state_30918[(8)]);
var inst_30886 = (state_30918[(10)]);
var inst_30882 = (state_30918[(9)]);
var inst_30891 = inst_30878.push(inst_30882);
var tmp30935 = inst_30878;
var inst_30878__$1 = tmp30935;
var inst_30879 = inst_30886;
var state_30918__$1 = (function (){var statearr_30939 = state_30918;
(statearr_30939[(7)] = inst_30879);

(statearr_30939[(8)] = inst_30878__$1);

(statearr_30939[(14)] = inst_30891);

return statearr_30939;
})();
var statearr_30940_30960 = state_30918__$1;
(statearr_30940_30960[(2)] = null);

(statearr_30940_30960[(1)] = (2));


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
});})(c__29042__auto___30946,out))
;
return ((function (switch__28951__auto__,c__29042__auto___30946,out){
return (function() {
var cljs$core$async$state_machine__28952__auto__ = null;
var cljs$core$async$state_machine__28952__auto____0 = (function (){
var statearr_30941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30941[(0)] = cljs$core$async$state_machine__28952__auto__);

(statearr_30941[(1)] = (1));

return statearr_30941;
});
var cljs$core$async$state_machine__28952__auto____1 = (function (state_30918){
while(true){
var ret_value__28953__auto__ = (function (){try{while(true){
var result__28954__auto__ = switch__28951__auto__.call(null,state_30918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28954__auto__;
}
break;
}
}catch (e30942){if((e30942 instanceof Object)){
var ex__28955__auto__ = e30942;
var statearr_30943_30961 = state_30918;
(statearr_30943_30961[(5)] = ex__28955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30962 = state_30918;
state_30918 = G__30962;
continue;
} else {
return ret_value__28953__auto__;
}
break;
}
});
cljs$core$async$state_machine__28952__auto__ = function(state_30918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28952__auto____1.call(this,state_30918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28952__auto____0;
cljs$core$async$state_machine__28952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28952__auto____1;
return cljs$core$async$state_machine__28952__auto__;
})()
;})(switch__28951__auto__,c__29042__auto___30946,out))
})();
var state__29044__auto__ = (function (){var statearr_30944 = f__29043__auto__.call(null);
(statearr_30944[(6)] = c__29042__auto___30946);

return statearr_30944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29044__auto__);
});})(c__29042__auto___30946,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543694781245
