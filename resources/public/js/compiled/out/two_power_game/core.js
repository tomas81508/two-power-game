// Compiled by ClojureScript 1.10.339 {}
goog.provide('two_power_game.core');
goog.require('cljs.core');
goog.require('ysera.test');
goog.require('ysera.random');
two_power_game.core.create_board = (function two_power_game$core$create_board(var_args){
var G__69291 = arguments.length;
switch (G__69291) {
case 0:
return two_power_game.core.create_board.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return two_power_game.core.create_board.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
two_power_game.core.create_board.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});

two_power_game.core.create_board.cljs$core$IFn$_invoke$arity$0 = (function (){
return two_power_game.core.create_board.call(null,(3));
});

two_power_game.core.create_board.cljs$core$IFn$_invoke$arity$1 = (function (board_size){
return cljs.core.reduce.call(null,(function (result,x){
return cljs.core.reduce.call(null,(function (a,y){
return cljs.core.assoc.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"id","id",-1388402092),(((board_size * y) + x) + (1))], null));
}),result,cljs.core.range.call(null,board_size));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,board_size));
});

two_power_game.core.create_board.cljs$lang$maxFixedArity = 1;

two_power_game.core.char__GT_number = (function two_power_game$core$char__GT_number(x){
return (x | (0));
});
two_power_game.core.char__GT_number.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.strings__GT_board = (function two_power_game$core$strings__GT_board(rows){
return cljs.core.reduce.call(null,(function (result,p__69293){
var vec__69294 = p__69293;
var y = cljs.core.nth.call(null,vec__69294,(0),null);
var row = cljs.core.nth.call(null,vec__69294,(1),null);
return cljs.core.reduce.call(null,((function (vec__69294,y,row){
return (function (a,p__69297){
var vec__69298 = p__69297;
var x = cljs.core.nth.call(null,vec__69298,(0),null);
var char_value = cljs.core.nth.call(null,vec__69298,(1),null);
return cljs.core.assoc.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),two_power_game.core.char__GT_number.call(null,char_value)], null));
});})(vec__69294,y,row))
,result,cljs.core.map_indexed.call(null,((function (vec__69294,y,row){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(vec__69294,y,row))
,row));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),rows));
});
two_power_game.core.strings__GT_board.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.get_board_size = (function two_power_game$core$get_board_size(board){
if(!(cljs.core.contains_QMARK_.call(null,board,new cljs.core.Keyword(null,"board","board",-1907017633)))){
} else {
throw (new Error("Assert failed: (not (contains? board :board))"));
}

return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,cljs.core.keys.call(null,board))) + (1));
});
two_power_game.core.get_board_size.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.board__GT_strings = (function two_power_game$core$board__GT_strings(board){
return cljs.core.map.call(null,(function (row){
return cljs.core.reduce.call(null,(function (a,cell){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null)))].join('');
}),"",row);
}),cljs.core.partition_all.call(null,two_power_game.core.get_board_size.call(null,board),cljs.core.sort_by.call(null,cljs.core.juxt.call(null,cljs.core.second,cljs.core.first),cljs.core.keys.call(null,board))));
});
two_power_game.core.board__GT_strings.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.no_duplicate_ids_QMARK_ = (function two_power_game$core$no_duplicate_ids_QMARK_(board){
var ids = cljs.core.map.call(null,(function (cell){
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),cljs.core.keys.call(null,board));
var unique_ids = cljs.core.set.call(null,ids);
return cljs.core._EQ_.call(null,cljs.core.count.call(null,ids),cljs.core.count.call(null,unique_ids));
});
two_power_game.core.no_duplicate_ids_QMARK_.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.create_state = (function two_power_game$core$create_state(var_args){
var G__69302 = arguments.length;
switch (G__69302) {
case 0:
return two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
two_power_game.core.create_state.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});

two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return two_power_game.core.create_state.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$1 = (function (strings){
return two_power_game.core.create_state.call(null,strings,cljs.core.PersistentArrayMap.EMPTY);
});

two_power_game.core.create_state.cljs$core$IFn$_invoke$arity$2 = (function (strings,p__69303){
var map__69304 = p__69303;
var map__69304__$1 = ((((!((map__69304 == null)))?(((((map__69304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69304):map__69304);
var kvs = cljs.core.get.call(null,map__69304__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var board_size = cljs.core.get.call(null,map__69304__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var explicit_board = two_power_game.core.strings__GT_board.call(null,strings);
var $ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seed","seed",68613327),(0),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.reduce.call(null,((function (explicit_board,map__69304,map__69304__$1,kvs,board_size){
return (function (board,cell){
return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.get_in.call(null,explicit_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null)));
});})(explicit_board,map__69304,map__69304__$1,kvs,board_size))
,((!((board_size == null)))?two_power_game.core.create_board.call(null,board_size):two_power_game.core.create_board.call(null)),cljs.core.keys.call(null,explicit_board))], null);
if((kvs == null)){
return $;
} else {
return cljs.core.apply.call(null,cljs.core.assoc,$,kvs);
}
});

two_power_game.core.create_state.cljs$lang$maxFixedArity = 2;

two_power_game.core.get_id = (function two_power_game$core$get_id(state,cell){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});
two_power_game.core.get_id.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.get_value = (function two_power_game$core$get_value(state,cell){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null));
});
two_power_game.core.get_value.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.first_non_zero_cell = (function two_power_game$core$first_non_zero_cell(board,cell,direction){
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,board))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? board)"));
}

return cljs.core.first.call(null,cljs.core.filter.call(null,(function (c){
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.Keyword(null,"value","value",305978217)], null)),(0));
}),(function (){var potential_cells = cljs.core.PersistentVector.EMPTY;
var cell__$1 = cell;
while(true){
var next_cell = cljs.core.map.call(null,cljs.core._PLUS_,cell__$1,direction);
if(cljs.core.contains_QMARK_.call(null,board,next_cell)){
var G__69307 = cljs.core.conj.call(null,potential_cells,next_cell);
var G__69308 = next_cell;
potential_cells = G__69307;
cell__$1 = G__69308;
continue;
} else {
return potential_cells;
}
break;
}
})()));
});
two_power_game.core.first_non_zero_cell.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.merging_cells = (function two_power_game$core$merging_cells(board,row,direction){
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,board))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? board)"));
}

var _PERCENT_ = cljs.core.reduce.call(null,(function (board__$1,cell){
var value = cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null));
if(cljs.core.not.call(null,(function (){var and__3938__auto__ = value;
if(cljs.core.truth_(and__3938__auto__)){
return (value > (0));
} else {
return and__3938__auto__;
}
})())){
return board__$1;
} else {
var first_non_zero_cell = two_power_game.core.first_non_zero_cell.call(null,board__$1,cell,direction);
if(!(cljs.core._EQ_.call(null,value,cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_non_zero_cell,new cljs.core.Keyword(null,"value","value",305978217)], null))))){
return board__$1;
} else {
var new_id = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (first_non_zero_cell,value){
return (function (c){
return cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(first_non_zero_cell,value))
,cljs.core.keys.call(null,board__$1))) + (1));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null),((function (new_id,first_non_zero_cell,value){
return (function (x){
return ((2) * x);
});})(new_id,first_non_zero_cell,value))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_non_zero_cell,new cljs.core.Keyword(null,"id","id",-1388402092)], null))),first_non_zero_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"id","id",-1388402092),new_id], null));
}
}
}),board,row);
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,board))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? board)"));
}

return _PERCENT_;
});
two_power_game.core.shifting_zeroes_away = (function two_power_game$core$shifting_zeroes_away(board,row,direction){
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,board))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? board)"));
}

var _PERCENT_ = cljs.core.reduce.call(null,(function (board__$1,cell){
if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,new cljs.core.Keyword(null,"value","value",305978217)], null)),(0))){
return board__$1;
} else {
var first_non_zero_cell = two_power_game.core.first_non_zero_cell.call(null,board__$1,cell,direction);
var first_non_zero_entity = cljs.core.get.call(null,board__$1,first_non_zero_cell);
if(cljs.core.not.call(null,first_non_zero_cell)){
return cljs.core.reduced.call(null,board__$1);
} else {
var new_id = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (first_non_zero_cell,first_non_zero_entity){
return (function (c){
return cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});})(first_non_zero_cell,first_non_zero_entity))
,cljs.core.keys.call(null,board__$1))) + (1));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,board__$1,cell,first_non_zero_entity),first_non_zero_cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"id","id",-1388402092),new_id], null));
}
}
}),board,row);
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,board))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? board)"));
}

return _PERCENT_;
});
two_power_game.core.get_empty_cells = (function two_power_game$core$get_empty_cells(state){
return cljs.core.filter.call(null,(function (c){
return cljs.core._EQ_.call(null,two_power_game.core.get_value.call(null,state,c),(0));
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)));
});
two_power_game.core.get_empty_cells.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.pre_move = (function two_power_game$core$pre_move(state,direction,sort_fn){
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? (:board state))"));
}

var _PERCENT_ = (function (){var board_fn = (function (board){
return cljs.core.reduce.call(null,(function (board__$1,row){
return two_power_game.core.shifting_zeroes_away.call(null,two_power_game.core.merging_cells.call(null,board__$1,row,direction),row,direction);
}),board,cljs.core.partition_all.call(null,two_power_game.core.get_board_size.call(null,board),cljs.core.sort_by.call(null,sort_fn,cljs.core.keys.call(null,board))));
});
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),board_fn);
})();
if(cljs.core.truth_(two_power_game.core.no_duplicate_ids_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))){
} else {
throw (new Error("Assert failed: (no-duplicate-ids? (:board state))"));
}

return _PERCENT_;
});
two_power_game.core.pre_move_left = (function two_power_game$core$pre_move_left(state){
return two_power_game.core.pre_move.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.juxt.call(null,cljs.core.second,cljs.core.first));
});
two_power_game.core.pre_move_left.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.pre_move_right = (function two_power_game$core$pre_move_right(state){
return two_power_game.core.pre_move.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),cljs.core.juxt.call(null,cljs.core.second,(function (x){
return (- cljs.core.first.call(null,x));
})));
});
two_power_game.core.pre_move_right.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.pre_move_up = (function two_power_game$core$pre_move_up(state){
return two_power_game.core.pre_move.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.juxt.call(null,cljs.core.first,cljs.core.second));
});
two_power_game.core.pre_move_up.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.pre_move_down = (function two_power_game$core$pre_move_down(state){
return two_power_game.core.pre_move.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),cljs.core.juxt.call(null,cljs.core.first,(function (x){
return (- cljs.core.second.call(null,x));
})));
});
two_power_game.core.pre_move_down.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

cljs.core.println.call(null,"Not implemented.");

cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.randomly_add_two_at_empty_cell = (function two_power_game$core$randomly_add_two_at_empty_cell(state){
var empty_cells = two_power_game.core.get_empty_cells.call(null,state);
var vec__69309 = ysera.random.random_nth.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(state),empty_cells);
var seed = cljs.core.nth.call(null,vec__69309,(0),null);
var cell = cljs.core.nth.call(null,vec__69309,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"seed","seed",68613327),seed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),cell,new cljs.core.Keyword(null,"value","value",305978217)], null),(2));
});
two_power_game.core.randomly_add_two_at_empty_cell.cljs$lang$test = (function (){
return cljs.core.println.call(null,"Not implemented.");
});
two_power_game.core.move = (function two_power_game$core$move(state,direction){
var state_after_pre_move = (function (){var pred__69312 = cljs.core._EQ_;
var expr__69313 = direction;
if(cljs.core.truth_(pred__69312.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__69313))){
return two_power_game.core.pre_move_up.call(null,state);
} else {
if(cljs.core.truth_(pred__69312.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__69313))){
return two_power_game.core.pre_move_right.call(null,state);
} else {
if(cljs.core.truth_(pred__69312.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__69313))){
return two_power_game.core.pre_move_down.call(null,state);
} else {
if(cljs.core.truth_(pred__69312.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__69313))){
return two_power_game.core.pre_move_left.call(null,state);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__69313)].join('')));
}
}
}
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state_after_pre_move),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
return two_power_game.core.randomly_add_two_at_empty_cell.call(null,state_after_pre_move);
}
});
two_power_game.core.move.cljs$lang$test = (function (){
cljs.core.println.call(null,"Not implemented.");

cljs.core.println.call(null,"Not implemented.");

return cljs.core.println.call(null,"Not implemented.");
});

//# sourceMappingURL=core.js.map?rel=1543786301225
