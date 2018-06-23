
var ttt = require('../lib/ttt');

exports['create empty board'] = function (test) {
	var board = ttt();
	
	test.ok(board);
	test.equal(typeof board, 'object');
	test.equal(board.width(), 3);
	test.equal(board.height(), 3);
	test.equal(board.toString(), '         ');
};

exports['create board with some pieces'] = function (test) {
	var board = ttt('OO  X XXO');
	
	test.ok(board);
	test.equal(typeof board, 'object');
	test.equal(board.width(), 3);
	test.equal(board.height(), 3);
	
	test.equal(board.get(0,0), 'O');
	test.equal(board.get(0,1), 'O');
	test.equal(board.get(0,2), ' ');
	
	test.equal(board.get(1,0), ' ');
	test.equal(board.get(1,1), 'X');
	test.equal(board.get(1,2), ' ');
	
	test.equal(board.get(2,0), 'X');
	test.equal(board.get(2,1), 'X');
	test.equal(board.get(2,2), 'O');

	test.equal(board.toString(), 'OO  X XXO');
};

