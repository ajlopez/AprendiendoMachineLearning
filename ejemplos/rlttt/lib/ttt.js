
function TicTacToe(initial) {
	initial = initial || '';
	var board = [ [], [], [] ];
	
	fromString(initial);

	this.width = function () { return board.length; };
	this.height = function () { return board[0].length;};
	
	this.get = function (x, y) { return board[x][y]; };
	
	this.toString = function () {
		var result = '';
		
		for (var x = 0; x < 3; x++)
			result += board[x].join('');
		
		return result;
	}
	
	function fromString(initial) {
		for (k = 0; k < 3 * 3; k++)
			board[Math.floor(k / 3)][k % 3] = initial[k] == null ? ' ' : initial[k];
	}
}

function createTicTacToe(initial) {
	return new TicTacToe(initial);
}

module.exports = createTicTacToe;

