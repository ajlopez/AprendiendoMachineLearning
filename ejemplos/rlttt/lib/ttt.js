
function TicTacToe() {
	this.width = function () { return 3; };
	this.height = function () { return 3;};
	this.toString = function () { return '         '; };
}

function createTicTacToe() {
	return new TicTacToe();
}

module.exports = createTicTacToe;

