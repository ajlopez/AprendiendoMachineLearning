
var ttt = require('../lib/ttt');

exports['create empty board'] = function (test) {
	var board = ttt();
	
	test.ok(board);
	test.equal(typeof board, 'object');
	test.equal(board.width(), 3);
	test.equal(board.height(), 3);
	test.equal(board.toString(), '         ');
};

