var c;
var ctx;
var offsetLeft;
var offsetTop;

var sprites = {

	uno: {sx: 0, sy: 0, w: 60, h: 90, frames: 9},
	dos:	{sx: 0, sy: 0, w: 60, h: 90, frames: 1},
	tres:	{sx: 0, sy: 0, w: 60, h: 90, frames: 2},
	cuatro:	{sx: 0, sy: 0, w: 60, h: 90, frames: 3},
	claro:	{sx: 0, sy: 270, w: 60, h: 90, frames: 5},
	standard:	{sx: 0, sy: 630, w: 60, h: 90, frames: 4},

};

var loadCanvas = function(){
	c = document.getElementById('canvas');
	offsetLeft = $(c).offset().left;
	offsetTop = $(c).offset().top;
	ctx = c.getContext("2d");
	c.width = 1100;
	c.height = 810;

  	var newGame = new Game(sprites)
  	newGame.initialize(newGame.loop);
  	listener(newGame);
  	CartasMano(newGame);
	listenKey(newGame);
};


var listener = function(Game) {
	$('#canvas').click(function(event) {
		var x = event.pageX - offsetLeft;
   		var y = event.pageY - offsetTop;
		Game.listener(x,y);
	});
};

var CartasMano = function(Game){
	var array = ["dos","uno","tres","cuatro","dos","uno"];
	Game.gameboard.handboard.updateList(array);
};

var listenKey = function(Game) {
	window.addEventListener('keydown', function(e) {
    if(e.keyCode == '38'){
        e.preventDefault();
				Game.gameboard.board.up();

    }
		if(e.keyCode == '40'){
				e.preventDefault();
				Game.gameboard.board.down();
		}
	});
};
