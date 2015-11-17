

// SPRITESHEET

var SpriteSheet = new function () {
	this.map = {};

	this.load = function(spriteData, src, callback) {
		this.map = spriteData;
		this.image = new Image();
		this.image.onload = callback;
		this.image.src = src;
	};

	this.draw = function(sprite, x, y) {
		var img = this.map[sprite];
		ctx.drawImage(this.image, img.sx + img.frames * img.w, img.sy, img.w, img.h, x, y, img.w, img.h);
	};
}

// CARD

var Card = function(sprite, x, y) {
	this.x = x;
	this.y = y;
	this.w = 60;
	this.h = 90;
	this.sprite = sprite;
	
	this.draw = function() {
		SpriteSheet.draw(this.sprite, this.x, this.y);
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 1;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
	}
}

// BOARD

var Board = function() {
	this.x = 0;
	this.y = 0;
	this.w = 900;
	this.h = 630;
	this.cell_w = 60; 
	this.cell_h = 90;
	this.list = {};

	for (i = 0; i < 7; i++) {
  		for (j = 0; j < 15; j++) {
	  		this.list[i.toString() + "," + j.toString()] = new Card("standard",j*this.cell_w,i*this.cell_h); 
	  	};
   	};

   	this.updateCell = function(clickedX, clickedY) {
   		var columna = Math.floor((clickedX - offsetLeft)/60);
   		var fila = Math.floor((clickedY - offsetTop)/90);
   		if (clickedX - offsetLeft <= this.w && clickedY - offsetTop <= this.h) {
   			this.list[fila.toString() + "," + columna.toString()].sprite = "uno";
   		}
   	};

   	this.draw = function() {
   		for (key in this.list) {
   			this.list[key].draw();
   		};
   	}
}


// POINTS TABLE

var PointsBoard = function() {
	this.x = 900;
	this.y = 0;
	this.w = c.width - this.x;
	this.h = c.height - this.y;

	this.draw = function() {
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 1;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
	};
}


// HAND CARDS

var HandBoard = function() {
	this.x = 0;
	this.y = 630;
	this.w = 900;
	this.h = c.height - this.y;

	this.draw = function() {
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 1;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
	};
}

// GAMEBOARD(BOARD, POINTS TABLE, HAND CARDS)

var GameBoard = function() {
	this.board = new Board();
	this.handboard = new HandBoard();
	this.pointsboard = new PointsBoard();

	this.draw = function() {
		this.board.draw();
		this.handboard.draw();
		this.pointsboard.draw();
	};
}

// TOTAL GAME

var Game = function(spriteData) {
	this.width = c.width;
	this.height = c.height;
	this.spriteData = spriteData;
	this.gameboard = new GameBoard();
	that = this;

	this.initialize = function(callback) {
		SpriteSheet.load(this.spriteData, "sprites.png",callback);
	};

	this.loop = function() {
		that.gameboard.draw();
		setTimeout(that.loop, 100);
	};

}