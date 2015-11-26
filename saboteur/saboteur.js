Jugadores = new Meteor.Collection("Jugadores");
Partidas = new Meteor.Collection("Partidas");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

////////////////////////////////////
//			CARTAS 				  //
////////////////////////////////////
var nombrePartida = "partida1";

var tiposCartas = {
	Estandar: { Izquierda: false, Derecha: false, Arriba: false, Abajo: false, Bloqueante: false},
	//Tipo tunel
	Camino1: {Type: 'excavacion',  Izquierda: false, Derecha: false, Arriba: true, Abajo: true, Bloqueante: false},
	Camino2: {Type: 'excavacion',  Izquierda: true, Derecha: false, Arriba: true, Abajo: true, Bloqueante: false},
	Camino3: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
	Camino4: {Type: 'excavacion',  Izquierda: false, Derecha: true, Arriba: false, Abajo: true, Bloqueante: false},
	Camino5: {Type: 'excavacion',  Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: false},
	Camino6: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: true, Abajo: false, Bloqueante: false},
	Camino7: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: false, Abajo: false, Bloqueante: false},
	SinCamino1: {Type: 'excavacion',  Izquierda: false, Derecha: false, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino2: {Type: 'excavacion',  Izquierda: true, Derecha: false, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino3: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino4: {Type: 'excavacion',  Izquierda: false, Derecha: true, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino5: {Type: 'excavacion',  Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino6: {Type: 'excavacion',  Izquierda: true, Derecha: false, Arriba: false, Abajo: false, Bloqueante: true},
	SinCamino7: {Type: 'excavacion',  Izquierda: false, Derecha: false, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino8: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: true, Abajo: false, Bloqueante: true},
	SinCamino9: {Type: 'excavacion',  Izquierda: true, Derecha: true, Arriba: false, Abajo: false, Bloqueante: true},
	//Tipo Inicio
	ComienzoEscalera: { Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
	//Tipo Destino
	DestinoNada1: { Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: false},
	DestinoNada2: { Izquierda: true, Derecha: false, Arriba: true, Abajo: false, Bloqueante: false},
	DestinoPepita:{ Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
	//Tipo Roll
	Saboteador: {Roll: "Sabotear"},
	Buscador: {Roll: "Buscar"},
	//Tipo Pepitas
	Pepitas1: {nPepitas: 1},
	Pepitas2: {nPepitas: 2},
	Pepitas3: {nPepitas: 3},
	//Tipo Accion
	RomperVagoneta: {Funcion: "Romper", Objeto: "Vagoneta"},
	RomperFarolillo: {Funcion: "Romper", Objeto: "Farolillo"},
	RomperPico: {Funcion: "Romper", Objeto: "Pico"},
	ArreglarVagoneta: {Funcion: "Arreglar", Objeto:"Vagoneta"},
	ArreglarFarolillo: {Funcion: "Arreglar", Objeto:"Farolillo"},
	ArreglarPico: {Funcion: "Arreglar", Objeto:"Pico"},
	ArreglarFaro_Pico: {Funcion:"Arreglar", Objeto1: "Farolillo", Objeto2: "Pico"},
	ArreglarFaro_Vagon: {Funcion:"Arreglar", Objeto1: "Farolillo", Objeto2: "Vagoneta"},
	ArreglarVagon_Pico: {Funcion:"Arreglar", Objeto1: "Vagoneta", Objeto2: "Pico"},
	Mapa: {Type: "mapa"},
	Derrumbamiento: {Type: "derrumbamiento"}
};

var cartasExcavacion = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
				   		'Camino3','Camino3','Camino3','Camino3','Camino4','Camino4','Camino4','Camino4','Camino5','Camino5',
				   		'Camino5','Camino5','Camino5','Camino6','Camino6','Camino6','Camino6','Camino6','Camino7','Camino7',
				   		'Camino7','SinCamino1','SinCamino2','SinCamino3','SinCamino4','SinCamino5','SinCamino6',
				   		'SinCamino7','SinCamino8','SinCamino9'
];

var CartaInicio = ['ComienzoEscalera'
];

var CartasDestino = ['DestinoNada1','DestinoNada2','DestinoPepita'
];

var CartasPepitas = ['Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1',
					 'Pepitas1','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2',
					 'Pepitas2','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3',
					 'Pepitas3'
];

var cartasAccionTablero = ['Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','Derrumbamiento','Derrumbamiento','Derrumbamiento'
];

var cartasAccionJugador = ['ArreglarVagoneta','ArreglarVagoneta','ArreglarPico','ArreglarPico','ArreglarFarolillo',
						'ArreglarFarolillo','RomperVagoneta','RomperVagoneta','RomperVagoneta','RomperFarolillo',
						'RomperFarolillo','RomperFarolillo','RomperPico','RomperPico','RomperPico',
						'ArreglarFaro_Pico','ArreglarFaro_Vagon','ArreglarVagon_Pico'
];

var CartasPila = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
				  'Camino3','Camino3','Camino3','Camino3','Camino4','Camino4','Camino4','Camino4','Camino5','Camino5',
				  'Camino5','Camino5','Camino5','Camino6','Camino6','Camino6','Camino6','Camino6','Camino7','Camino7',
				  'Camino7','SinCamino1','SinCamino2','SinCamino3','SinCamino4','SinCamino5','SinCamino6',
				  'SinCamino7','SinCamino8','SinCamino9','Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','ArreglarVagoneta',
				  'ArreglarVagoneta','ArreglarPico','ArreglarPico','ArreglarFarolillo','ArreglarFarolillo',
				  'RomperVagoneta','RomperVagoneta','RomperVagoneta','RomperFarolillo','RomperFarolillo',
				  'RomperFarolillo','RomperPico','RomperPico','RomperPico', 'ArreglarFaro_Pico','ArreglarFaro_Vagon',
				  'ArreglarVagon_Pico','Derrumbamiento','Derrumbamiento','Derrumbamiento'
];


/////////////////////////////
//			TABLERO		//
/////////////////////////////

celda = function(){
	this.carta = tiposCartas.Estandar;
	this.ocupada = false;
};

tablero = function(destinos){
	this.celdas = new Array(31);
	this.celdasPosibles=[];

	for (i = 0; i < 31; i++) {
		this.celdas[i] = new Array(15);
		for (j = 0; j < 15; j++) {
			this.celdas[i][j] = new celda();
		};
	};


	this.celdas[14][4].carta = tiposCartas.ComienzoEscalera;
	this.celdas[14][4].ocupada = true;

	this.celdas[12][13].carta = destinos[0];
	this.celdas[12][13].ocupada = true;
	this.celdas[14][13].carta = destinos[1];
	this.celdas[14][13].ocupada = true;
	this.celdas[16][13].carta = destinos[2];
	this.celdas[16][13].ocupada = true;

	this.celdasPosibles.push("14,3","14,5","13,4","15,4");
};

ponerCarta = function(partidaId,tablero, carta, fila, columna) {

	if (tablero.celdas[fila][columna-1].carta.Derecha){
		if(!carta.Izquierda){
			return false;
		}
	}

	if (tablero.celdas[fila][columna+1].carta.Izquierda){
		if(!carta.Derecha){
			return false;
		}
	}

	if (tablero.celdas[fila-1][columna].carta.Abajo){
		if(!carta.Arriba){
			return false;
		}
	}

	if (tablero.celdas[fila+1][columna].carta.Arriba){
		if(!carta.Abajo){
			return false;
		}
	}

	tablero.celdas[fila][columna].carta = carta;
	tablero.celdas[fila][columna].ocupada = true;

	//tablero.celdasPosibles.splice(tablero.celdasPosibles.indexOf(fila.toString() + "," + columna.toString()),1);
	//mirar si mete dos veces al poner alrededor
	if(carta.Izquierda && !tablero.celdas[fila][columna-1].ocupada){
		tablero.celdasPosibles.push(fila.toString() + "," + (columna-1).toString());
	}
	if (carta.Derecha && !tablero.celdas[fila][columna+1].ocupada) {
		tablero.celdasPosibles.push(fila.toString() + "," + (columna+1).toString());
	}
	if (carta.Arriba && !tablero.celdas[fila-1][columna].ocupada) {
		tablero.celdasPosibles.push((fila-1).toString() + "," + columna.toString());
	}
	if (carta.Abajo && !tablero.celdas[fila+1][columna].ocupada) {
		tablero.celdasPosibles.push((fila+1).toString() + "," + columna.toString());
	}
	
	Partidas.update({_id: partidaId},{$set:{tablero: tablero}});
	return true;
};

/*
vacia = function(tablero, coord){
	return tablero.celdas[coord].carta.Arriba==null;
};

compatibles = function(c1,cAux){
	var comp = true;
	if((c1.Izquierda != cAux.Izquierda) && (cAux.Izquierda != null) ){
		comp = false;
		console.log("comp1");
	}
	if((c1.Derecha != cAux.Derecha) && (cAux.Derecha != null) ){
		comp = false;
		console.log("comp2");
	}
	if((c1.Arriba != cAux.Arriba) && (cAux.Arriba != null) ){
		comp = false;
		console.log("comp3");
	}
	if((c1.Abajo != cAux.Abajo) && (cAux.Abajo != null) ){
		comp = false;
		console.log("comp4");
	}
	return comp;
};

ponerCarta = function(partidaId,tablero, carta, columna, fila) {
	var success = true;
	var cordL = (columna-1).toString() + "," + fila.toString();
	var cordR = (columna+1).toString() + "," + fila.toString();
	var cordUp = columna.toString() + "," + (fila+1).toString();
	var cordDown =  columna.toString() + "," + (fila-1).toString();
	var cartaAux = tiposCartas.Estandar;

	cartaAux.Izquia = tablero.celdas[cordUp].carta.Abajo;
	cartaAux.Abajo = tablero.celdas[cordDown].carta.Arriba;

	//ya esta la carta posible y ahora hay que comprobar con la carta que quieren poner sin son compatibles
	if(compatibles(carta, cartaAux)){
		tablero.celdas[columna.toString() + "," + fila.toString()].carta = carta;
		tablero.celdasOcupadas.push(columna.toString() + "," + fila.toString());
		success = true;
		console.log(columna.toString() + "," + fila.toString())
		for (var i = 0; i < tablero.celdasPosibles.length; i++) {
			console.log(tablero.celdasPosibles[i]);
			//borro la carta recien añadida de celdas posibles
			if( tablero.celdasPosibles[i] == columna.toString() + "," + fila.toString() ){
				tablero.celdasPosibles.splice(i,1);
				break;
			}
		};
		//añado las nuevas celdas posibles
		if(carta.Izquierda==true && vacia(tablero,cordL)){
			tablero.celdasPosibles.push(cordL);
		}
		if (carta.Derecha==true && vacia(tablero, cordR)) {
			tablero.celdasPosibles.push(cordR);
		};
		if (carta.Arriba==true && vacia(tablero, cordUp)) {
			tablero.celdasPosibles.push(cordUp);
		};
		if (carta.Abajo==true && vacia(tablero, cordDown)) {
			tablero.celdasPosibles.push(cordDown);
		};

	}
	//ya esta añadida la carta al tablero ahora hay que actualizar el tablero
	Partidas.update({_id: partidaId},{$set:{tablero: tablero}});
	return success;
};
*/

//////////////////////////////////
//		PREPARACION Cartas 		//
//////////////////////////////////


prepararRolles = function(numeroJugadores){
	if (numeroJugadores === 3){
		var cartasRoll = ['Saboteador','Buscador','Buscador'];
	}
	else if (numeroJugadores === 4){
		var cartasRoll = ['Saboteador','Buscador','Buscador','Buscador'];
	}
	else if (numeroJugadores === 5){
		var cartasRoll = ['Saboteador','Saboteador','Buscador','Buscador','Buscador'];
	}
	else if (numeroJugadores === 6){
		var cartasRoll = ['Saboteador','Saboteador','Buscador','Buscador','Buscador',
						   'Buscador'];
	}
	else if (numeroJugadores === 7){
		var cartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
						   'Buscador','Buscador'];
	}
	else if (numeroJugadores === 8){
		var cartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
						   'Buscador','Buscador','Buscador'];
	}
	else if (numeroJugadores === 9){
		var cartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
						   'Buscador','Buscador','Buscador','Buscador'];
	}
	else if (numeroJugadores === 10){
		var cartasRoll = ['Saboteador','Saboteador','Saboteador','Saboteador','Buscador','Buscador',
						   'Buscador','Buscador','Buscador','Buscador','Buscador'];
	}
	return cartasRoll;
};

barajarMazoGeneral = function(CartasPila){
	var Total = CartasPila.length;
	var mazo_general = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasPila.length));
		mazo_general[i] = CartasPila[aleatorio];
		CartasPila.splice(aleatorio, 1);
	}
	return mazo_general;
};

barajarMazoRoll = function(NumeroJugadores){
	CartasRoll = prepararRolles(NumeroJugadores);
	var Total = CartasRoll.length;
	var mazo_roll = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasRoll.length));
		mazo_roll[i] = CartasRoll[aleatorio];
		CartasRoll.splice(aleatorio, 1);
	}
	return mazo_roll;
};

barajarMazoDestino = function(CartasDestino){
	var Total = CartasDestino.length;
	var mazo_destino = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasDestino.length));
		mazo_destino[i] = CartasDestino[aleatorio];
		CartasDestino.splice(aleatorio, 1);
	}
	return mazo_destino;
};

barajarMazoPepitas = function(CartasPepitas){
	var Total = CartasPepitas.length;
	var mazo_pepitas = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasPepitas.length));
		mazo_pepitas[i] = CartasPepitas[aleatorio];
		CartasPepitas.splice(aleatorio, 1);
	}
	return mazo_pepitas;
};
/*
comprobarNum = function(){
	var nJugadores;
	if(Jugadores.find().count() < 3){
		nJugadores = 3
	}
	if(Jugadores.find().count() > 2){
		nJugadores = Jugadores.find().count();
	}
	return nJugadores;
}
*/

nMaxCartas = function(nJugadores){
	var n;
	if ((nJugadores >= 3) && (nJugadores <= 5)) {
		n = 7;
	}
	if ((nJugadores === 6) || (nJugadores === 7)) {
		n = 6;
	}
	if ((nJugadores >= 8) && (nJugadores <= 10)) {
		n = 4;
	}
	return n;
}

// subo servicios
//////////SERVICIOS//////////////////////////


JugadoresService = {
	generateRandomPlayers: function () {
		var names = ["Jona",
					 "Alex",
					 "Pazo"];
		for (var i = 0; i < names.length; i++) {
			Jugadores.insert({name: names[i]});
		}
	},
	playersExist: function () {
		return Jugadores.find().count() > 0;
	},
	getPlayerList: function () {
		return Jugadores.find();						// esta funcion solo la usamos para probar
	},
	getPlayerId: function (nameJugador) {
		return Jugadores.findOne({name: nameJugador})._id;
	},
};

PartidaService = {
	generarPartida:function(){
		AlexId = JugadoresService.getPlayerId("Alex");
		JonaId = JugadoresService.getPlayerId("Jona");
		PazoId = JugadoresService.getPlayerId("Pazo");

		Partidas.insert({
			numPartida: 1,//para probar
			listaJugadores: [AlexId,JonaId,PazoId],
		});
	},
	getPartidaId: function (num) {
		return Partidas.findOne({numPartida:num})._id;
	},

	getAttr: function(attr, PartidaId){
		//mirar
		return Partidas.findOne({_id:PartidaId}).attr;
	},

	empezarPartida: function(partidaId){

		mazoGeneral = barajarMazoGeneral(CartasPila);
		mazoDestinos = barajarMazoDestino(CartasDestino);
		tablero = new tablero(mazoDestinos);
		jugadorActivo = Partidas.findOne({_id: partidaId}).listaJugadores[0]; //coge el primero de la lista
		nRonda = 1;

		Partidas.update({_id: partidaId},{$set:{tablero: tablero,
												mazoGeneral: mazoGeneral,
												mazoDestinos: mazoDestinos,
												jugadorActivo: jugadorActivo,
												nRonda: nRonda,}});
	},

	tryPonerCarta: function(partidaId,carta,fila, columna){
		tablero = Partidas.findOne({_id: partidaId}).tablero;
		success = ponerCarta(partidaId,tablero,carta,fila, columna);
		console.log(success);
	},

};

/*CaracteristicasService = {
	crearCaractIniciales: function(partidaId){
		CaracteristicasIniciales(partidaId);
	}
};*/

CaracteristicasService = {
	crearCaractIniciales: function(partidaId){
	    listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;
		nJugadores = listaJugadores.length;
		mazo_roll = barajarMazoRoll(nJugadores);
		nMaxCartas = nMaxCartas(nJugadores);
		puntos = 0;
		cartas = [];

		for (i=0; i<nJugadores; i++) {
			for(j = 0; j < nMaxCartas; j++){
				cartas[j] = robarCarta(partidaId);
			}
			roll = mazo_roll[mazo_roll.length-1];
			mazo_roll.splice(mazo_roll.length-1, 1);
			Caracteristicas.insert({
				turno: i,
				jugadorId: listaJugadores[i],
				partidaId: partidaId,
				puntuacion: puntos,
				roll: roll,
				mano: cartas,
				pico: "arreglado",
				vagoneta: "arreglado",
				farolillo: "arreglado"
			});
		}
	},
	//funcion para buscar en la coleccion

	getCar: function(attr,x){
		return Caracteristicas.findOne({turno: x}).attr;
	},
	getCarbyId:function(attr){
		return Caracteristicas.findOne({PartidaId: PartidaId}).attr;
	},

	getId: function(JugadorId){
		return Caracteristicas.findOne({Puntuacion: Puntos}).JugadorId;

	},
};



////////////ESTA FUNCIÓN YA ESTÁ BIEN PROBADA:)(GODMODE)se coge el mazo se guarda la ultima carta se borra del mazo esa carta
//se actualiza el mazo general para esa partida, y devolvemos la carta que hemos cogido del mazo./////////////////////////
robarCarta = function(partidaId){
	mazo = Partidas.findOne({_id: partidaId}).mazoGeneral;
	carta = mazo[mazo.length -1];
	mazo.pop();
	Partidas.update({_id: partidaId},{$set:{mazoGeneral: mazo}});
	return carta;
};

///////////////////////FUNCION JUGAR CARTA SIN TERMINAR////////////////////////
puedeJugar = function(jugadorId, partidaId){
	pico = Caracteristicas.findOne({_id:jugadorId}).pico;
	vagoneta = Caracteristicas.findOne({_id:jugadorId}).vagoneta;
	farolillo = Caracteristicas.findOne({_id:jugadorId}).farolillo;

	if ((pico === "arreglado") && (vagoneta === "arreglado") && (farolillo === "arreglado")){
		return true;
	}
	return false;
	
};

jugarMapa = function(partidaId, fila, columna){
	tablero = Partidas.findOne({_id: partidaId}).tablero;
	descubierta = tablero.celdas[fila][columna].carta;
	return descubierta;
};

quitarCeldasPosib = function (tablero, carta, fila, columna){
	if(carta.Izquierda){
		if(!tablero.celdas[fila][columna-1].ocupada){
			tablero.celdasPosibles.splice(tablero.celdasPosibles.indexOf( [fila][columna-1] ),1);
		}else{
			tablero.celdasPosibles.push(fila.toString() + "," + (columna-1).toString());
		}
	}
	if(carta.Derecha){
		if(!tablero.celdas[fila][columna+1].ocupada){
			tablero.celdasPosibles.splice(tablero.celdasPosibles.indexOf( [fila][columna+1] ),1);
		}else{
			tablero.celdasPosibles.push(fila.toString() + "," + (columna+1).toString());
		}
	}
	if(carta.Arriba){
		if(!tablero.celdas[fila-1][columna].ocupada){
			tablero.celdasPosibles.splice(tablero.celdasPosibles.indexOf( [fila-1][columna] ),1);
		}else{
			tablero.celdasPosibles.push((fila-1).toString() + "," + columna.toString());
		}
	}
	if(carta.Abajo){
		if(!tablero.celdas[fila+1][columna].ocupada){
			tablero.celdasPosibles.splice(tablero.celdasPosibles.indexOf( [fila+1][columna] ),1);
		}else{
			tablero.celdasPosibles.push((fila+1).toString() + "," + columna.toString());
		}
	}
};

jugarDerrumbamiento = function(partidaId, fila, columna){
	tablero = Partidas.findOne({_id: partidaId}).tablero;
	cartaDerr = tablero.celdas[fila][columna].carta;
	esDestino = (CartasDestino.indexOf(cartaDerr)!= -1);
	if (tablero.celdas[fila][columna].ocupada &&  !esDestino){
		tablero.celdas[fila][columna].carta = tiposCartas.Estandar;
		tablero.celdas[fila][columna].ocupada = false;
		quitarCeldasPosib(tablero,carta, fila, columna);

		tablero.celdasPosibles.push(fila.toString() + "," + columna.toString());

		Partidas.update({_id: partidaId},{$set: {tablero: tablero}});
	}
};


RepartirPuntos = function(Buscadores,Saboteadores){
	NumeroJugadores = comprobarNum();
	var Puntos;
	if(Buscadores){
		Puntos = 4;
		for (i=0; i<NumeroJugadores; i++) {
			//Roll= Caracteristicas.getCar(Roll,i);

			Roll = Caracteristicas.findOne({turno: i}).Roll;
			if (Roll === "Buscador"){
			//	Puntuacion= Caracteristicas.getCar(Puntuacion,i);
				Puntuacion = Caracteristicas.findOne({turno: i}).Puntuacion;
				Puntos = Puntuacion + Puntos;
				Caracteristicas.update({turno: i},{$set: {Puntuacion: Puntos}});
			}
		}
	}
	if(Saboteadores){
		//Como sé el número de jugadores,mirando la función PrepararRoles se puede saber el numero de sabotadores que hay.
		if((NumeroJugadores === 3) || (NumeroJugadores === 4)){ //Para 1 saboteador
			Puntos = 4;
		}
		if ((NumeroJugadores >= 5) && (NumeroJugadores <= 9)) { //Para 2 o 3 saboteadores.
			Puntos = 3;
		}
		if (NumeroJugadores === 10) { // Para 4 saboteadores
			Puntos = 2;
		}
		for (i=0; i<NumeroJugadores; i++) {
			Roll = Caracteristicas.findOne({turno: i}).Roll;
			if (Roll === "Saboteador"){
				//Puntuacion= CaracteristicasService.getCar(Puntuacion,i);
			Puntuacion = Caracteristicas.findOne({turno: i}).Puntuacion;
				Puntos = Puntuacion + Puntos;
				Caracteristicas.update({turno: i},{$set: {Puntuacion: Puntos}});
			}
		}
	}

}


actualizarTurno = function(partidaId){
	jugadorActivo = Partidas.findOne({_id: partidaId}).jugadorActivo;
	listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;

	if ( listaJugadores.indexOf(jugadorActivo) === (listaJugadores.length-1) ) {
		jugadorActivo = listaJugadores[0];
	}else{
		posicionActivo = listaJugadores.indexOf(jugadorActivo);
		jugadorActivo = listaJugadores[posicionActivo+1];
	}
	Partidas.update({_id: partidaId},{$set:{jugadorActivo: jugadorActivo,}});
}

descartarCarta = function(jugadorId, partidaId, carta){
	mano = Caracteristicas.findOne({jugadorId: jugadorId, partidaId: partidaId}).mano;
	posicionCarta = mano.indexOf(carta);
	mano.splice(posicionCarta,1);
	Caracteristicas.update({jugadorId: jugadorId, partidaId: partidaId},{$set:{mano: mano}});
}

ComprobarPuntuacion = function(){
	NumeroJugadores = comprobarNum();
	Puntos = 0;
	for (i=0; i<NumeroJugadores; i++) {
		//Puntuacion= CaracteristicasService.getCar(Puntuacion,i);

		Puntuacion = Caracteristicas.findOne({turno: i}).Puntuacion;
		if(Puntuacion > Puntos){
			Puntos = Puntuacion;
		}
	}
	idenJugador= CaracteristicasService.getId(JugadorId);
	//idenJugador = Caracteristicas.findOne({Puntuacion: Puntos}).JugadorId;
	nombreGanador = Jugadores.findOne({_id: idenJugador}).name;

	return nombreGanador;
}
/*

var NumRondas = 3;

Partida = function(PartidaId){
	var Saboteadores = false;
	var Buscadores = false;
	var turnos = 0
	NumeroJugadores = comprobarNum();
	var Cartas = [];
	var PepitaEncontrada = false;
	for(i=0; i<NumRondas; i++){
		//Aquí preparación del tablero
		//Añadir a la partida : Lista de jugadores/ Mazo_general / JugadorActivo /

		//Aquí reparto de Cartas iniciales
		RepartirCartasIniciales(PartidaId);

		//Aquí TURNOS dentro de una ronda,while(mientras que un jugador no llegue a la pepita.)
		while((PepitaEncontrada === false)){
			//Hacer con while.
			while(turnos < NumeroJugadores){
				//la mayuscula de turnos
				Cartas = CaracteristicasService.getAttr(Mano,turnos);
				numTurno = CaracteristicasService.getAttr(turno,Turnos);
				/*
				Cartas = Caracteristicas.findOne({turno: turnos}).Mano;
				numTurno = Caracteristicas.findOne({turno:Turnos}).turno;
				*
				part= CaracteristicasService.getCarById(PartidaId);
				Mazo_pila= CaracteristicasService.getCarById(Pila);

				//part = Caracteristicas.findOne({PartidaId: PartidaId}).PartidaId;
				//Mazo_Pila = Partidas.findOne({PartidaId: PartidaId}).Pila;
				//Si un jugador tiene cartas en su mano,jugará Carta y Robará
				if (Cartas.length > 0){ana,Orange,Apple
					if(Mazo_Pila.length > 0){
						if ((numTurno === turnos) && (part === PartidaId)){
							 //Aquí llamar a la función Jugar una Carta.

							//Aquí llamar a la función Robar una Carta.
							robarCarta(numTurno,Cartas,Mazo_Pila);
						}
					}
				}
				turnos++;

			turnos = 0;
			}
		//FIN DE LA RONDA.
			if(PepitaEncontrada){
				Buscadores = true;
			}else {
				Saboteadores = true;
			}
		//Aquí llamar a la función Repartir Puntuacion.
			RepartirPuntos(Buscadores,Saboteadores);
			Saboteadores = false;
			Buscadores = false;

		}

	//Aquí Comprabación de puntos de Jugadores, y decir el Ganador.
	Ganador = ComprobarPuntuacion();
	//FIN PARTIDA.

	}
};

*/
///////////EMPIEZA METEOR/////////////////////////

if (Meteor.isClient) {
	// counter starts at 0


}

if (Meteor.isServer) {
	Meteor.startup(function () {
		Meteor.methods({
			'empezar': function(partidaId) {
				//Preparar tablero
				//Barajar mazos
				//numero ronda = 1
				//Ganador de la ronda
				//Ganador de la partida
				//Ambas variables GanadorPartida y GanadorRonda deberan actualizarse cuando se encuentre una pepita(ronda acabada)
				//o cuando se finalice una partida,para lo cual se actualizarán ambas variables a True,para poder comprobar
				//el estado en que esta la partida.
				//Jugador activo el primero de la lista
				PartidaService.empezarPartida(partidaId);	//meterlo en Partidas._id

				CaracteristicasService.crearCaractIniciales(partidaId);


				//repartir cartas iniciales a cada jugador
			},

			/*
			var r
				switch(carta.type)
				case camino
					r = 	
				case actiont
					r = 
				case actionp
					r

				return r
			*/
			'ponerCartaTablero': function(jugadorId, partidaId, carta, fila, columna) {
				var result;
				success = true;

				jugadorActivo = Partidas.findOne({_id: partidaId}).jugadorActivo;
				if (jugadorActivo === jugadorId) {
					if ( puedeJugar(jugadorId,partidaId) ){

						switch(carta.Type){
							case 'excavacion':
							tablero = Partidas.findOne({_id: partidaId}).tablero;
							result = ponerCarta(partidaId, tablero, carta, fila, columna);
							success = result;
							break;

							case 'mapa':
							result = jugarMapa(partidaId, fila, columna);
							break;

							case 'derrumbamiento':
							result = jugarDerrumbamiento();
							success = result;
							break;
						}

					} 
					if (success) {
						descartarCarta(jugadorId, partidaId,carta);
						robarCarta(partidaId);
						actualizarTurno(partidaId);
					}
				}
				return result;
			},
			'ponerCartaJugador': function(jugadorOrig, partidaId, carta, jugadorDest) {
				success = true;

				jugadorActivo = PartidaService.findOne({_id: partidaId1}).jugadorActivo;
				if (CualquierCarta){
					//Se puede poner Carta de ACCION,coger el id del jugador(Nos lo pasara la IU) al que se quiere
					//poner la carta de accion,poner la carta de Accion para arreglarnos algo,derrumbar tunel o utilizar Mapa.

				} else {
					//Solo se puede poner Carta de ACCION o PASAR TURNO.

				}
            	////////////////////////PASAMOS TURNO////////////////////////////
				robarCarta(partidaId);
				ActualizarTurno(partidaId);
			},
			'pasarTurno': function(jugadorId,partidaId,carta) {
				success = false;

				jugadorActivo = PartidaService.findOne({_id: partidaId}).jugadorActivo;
				if (jugadorActivo === jugadorId) {
					descartarCarta(jugadorId, partidaId,carta);
					robarCarta(partidaId);
					actualizarTurno(partidaId);
					success=true;
				}
				return success;
			},
		});


/////////////////////////////PARA PROBAR QUE FUNCIONA BIEN LO CREAMOS AQUÍ.//////////////////////////////////////
		if (!JugadoresService.playersExist()) {
			JugadoresService.generateRandomPlayers();
		}
		PartidaService.generarPartida();						//esto lo tienen que hacer los de la plataforma
		var partidaId = PartidaService.getPartidaId(1);			//esto nos lo pasan de la plataforma
		//esto ira dentro de meteor.methods empezarpartida.
		PartidaService.empezarPartida(partidaId);	//meterlo en Partidas._id

		CaracteristicasService.crearCaractIniciales(partidaId);
		//carta = tiposCartas.Camino6;
		//PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino6,14,5);//fila columna
		//PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino2,1,0);
		//PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino1,1,0);


  });
}
