

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

var Card = function(sprite, x, y,str) {
	this.x = x;
	this.y = y;
	this.w = 60;
	this.h = 90;
	if(str) { 
		this.str = str;
	}
	this.strokeStyle = "black";
	this.lineWidth = 1;
	this.sprite = sprite;

	this.inSide = function(x,y){
		if(x >= this.x && x < this.x + this.w && y >= this.y && y < this.y + this.h){
			this.strokeStyle = "red";
			return this;
		}
		return null;
	};

	this.draw = function(scroll) {
		var x = this.x;
		var y = this.y;
		if(scroll){
			y = this.y - (scroll * this.h);
		}
		SpriteSheet.draw(this.sprite, x,y);
		ctx.strokeStyle = this.strokeStyle;
  		ctx.lineWidth = this.lineWidth;
		ctx.strokeRect(x,y,this.w,this.h);
		if(this.str){
			ctx.font = "20px Georgia";
			ctx.fillText(this.str,x,y+40);
		}	
	}
}

// BOARD

var Board = function() {
	this.x = 0;
	this.y = 0;
	this.w = 900;
	this.h = 630;
	this.scroll = 12;
	this.cell_w = 60;
	this.cell_h = 90;
	this.list = {};

	for (i = 0; i < 31; i++) {
  		for (j = 0; j < 15; j++) {
  			var str = i.toString() + "," + j.toString();
	  		this.list[str] = new Card("standard",j*this.cell_w,i*this.cell_h,str);
	  	};
   	};

   	this.updateCard = function(x, y, sprite) {
   		var columna = Math.floor(x/60);
   		var fila = Math.floor(y/90);
   		if (x <= this.w && y <= this.h) {
   			this.list[(fila+this.scroll).toString() + "," + columna.toString()].sprite = sprite;
   		}
   	};


	this.up = function(){
		if (this.scroll > 0){
			this.scroll--;
		}
	};

	this.down = function(){
		if (this.scroll < 24){
			this.scroll++;
		}	
	};

	this.draw = function() {
		for (i = this.scroll; i < this.scroll + 7; i++) {
  			for (j = 0; j < 15; j++) {
	  			this.list[i.toString() + "," + j.toString()].draw(this.scroll);
	  		};
   		};
   	};
};


// POINTS TABLE

var PointsBoard = function() {
	this.x = 900;
	this.y = 0;
	this.w = c.width - this.x;
	this.h = c.height - this.y;

	this.listener = function(x,y){
		console.log("POINTS BOARD");
	};

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
	this.list = [];

	for (i = 0; i < 6; i++) { // Maximo de cartas en mano son 6
			this.list[i] = new Card("standard",(i*60)+(30*i)+50,this.y+50); 
	};

	this.defaultCards = function() {
		for (i = 0; i < this.list.length; i++) {
			this.list[i].strokeStyle = "black";
		};
	};

	this.updateList = function(arrayCards) {
		for (i = 0; i < arrayCards.length; i++) {
			this.list[i].sprite = arrayCards[i];
		};
	};

	this.selectCard = function(x,y) {
		for (i = 0; i < this.list.length; i++) {
			if (this.list[i].inSide(x,y) != null){
				return this.list[i].inSide(x,y);
			}
		};

		return null;
	};

	this.draw = function() {
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 1;
		ctx.strokeRect(this.x,this.y,this.w,this.h);
		for (i = 0; i < this.list.length; i++) {
			this.list[i].draw();
		};
	};
}

// GAMEBOARD(BOARD, POINTS TABLE, HAND CARDS)

var GameBoard = function() {
	this.board = new Board();
	this.handboard = new HandBoard();
	this.pointsboard = new PointsBoard();

	this.inRegion = function(x, y){
		var aux;
		if (x >= this.board.x && x < this.board.x + this.board.w && y >= this.board.y && y < this.board.y + this.board.h){
   			aux = this.board;
   		} else if (x >= this.handboard.x && x < this.handboard.x + this.handboard.w && y >= this.handboard.y && y < this.handboard.y + this.handboard.h){
   			aux = this.handboard;
   		} else {
   			aux = this.pointsboard;
   		}
		return aux;
	};

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
	this.status = false;
	this.Cardselected = null;
	that = this;


	this.initialize = function(callback) {
		SpriteSheet.load(this.spriteData, "sprites.png",callback);
	};

	this.listener = function(x,y){
		var aux = this.gameboard.inRegion(x,y);
		if(!this.status){
			if (aux === this.gameboard.handboard){
				this.Cardselected = this.gameboard.handboard.selectCard(x,y);
				if(this.Cardselected != null){
					this.status = true;
				}
			}	
		}else{
			if (aux === this.gameboard.board){
				this.gameboard.board.updateCard(x,y,this.Cardselected.sprite);
				this.gameboard.handboard.defaultCards();
				this.Cardselected = null;
				this.status = false;
			}
		}		
	};

	this.loop = function() {
		var image = new Image();
		image.src = "fondo.jpg";
		ctx.drawImage(image,0,0,1100,810);
		that.gameboard.draw();
		setTimeout(that.loop, 100);
	};

}
