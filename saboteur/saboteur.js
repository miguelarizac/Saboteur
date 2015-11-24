Jugadores = new Meteor.Collection("Jugadores");
Partidas = new Meteor.Collection("Partidas");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

////////////////////////////////////
//			CARTAS 				  //
////////////////////////////////////
var nombrePartida = "partida1";

var tiposCartas = {
	Estandar: { Izquierda: null, Derecha: null, Arriba: null, Abajo: null, Bloqueante: null},
	//Tipo tunel
	Camino1: { Izquierda: false, Derecha: false, Arriba: true, Abajo: true, Bloqueante: false},
	Camino2: { Izquierda: true, Derecha: false, Arriba: true, Abajo: true, Bloqueante: false},
	Camino3: { Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
	Camino4: { Izquierda: false, Derecha: true, Arriba: false, Abajo: true, Bloqueante: false},
	Camino5: { Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: false},
	Camino6: { Izquierda: true, Derecha: true, Arriba: true, Abajo: false, Bloqueante: false},
	Camino7: { Izquierda: true, Derecha: true, Arriba: false, Abajo: false, Bloqueante: false},
	SinCamino1: { Izquierda: false, Derecha: false, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino2: { Izquierda: true, Derecha: false, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino3: { Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino4: { Izquierda: false, Derecha: true, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino5: { Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: true},
	SinCamino6: { Izquierda: true, Derecha: false, Arriba: false, Abajo: false, Bloqueante: true},
	SinCamino7: { Izquierda: false, Derecha: false, Arriba: true, Abajo: true, Bloqueante: true},
	SinCamino8: { Izquierda: true, Derecha: true, Arriba: true, Abajo: false, Bloqueante: true},
	SinCamino9: { Izquierda: true, Derecha: true, Arriba: false, Abajo: false, Bloqueante: true},
	//Tipo Inicio
	ComienzoEscalera: { Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
	//Tipo Destino
	DestinoNada1: { Izquierda: true, Derecha: false, Arriba: false, Abajo: true, Bloqueante: false},
	DestinoNada2: { Izquierda: true, Derecha: false, Arriba: true, Abajo: false, Bloqueante: false},
	DestinoPepita: { Izquierda: true, Derecha: true, Arriba: true, Abajo: true, Bloqueante: false},
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
	Mapa: {Funcion: "DestapaCartaDestino"},
	Derrumbamiento: {Funcion: "Derrumbamiento"}
};

var CartasTunel = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
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

var CartasAccion = ['Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','ArreglarVagoneta','ArreglarVagoneta','ArreglarPico',
					'ArreglarPico','ArreglarFarolillo','ArreglarFarolillo','RomperVagoneta','RomperVagoneta','RomperVagoneta',
					'RomperFarolillo','RomperFarolillo','RomperFarolillo','RomperPico','RomperPico','RomperPico',
					'ArreglarFaro_Pico','ArreglarFaro_Vagon','ArreglarVagon_Pico','Derrumbamiento','Derrumbamiento',
					'Derrumbamiento'
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
};

tablero = function(destinos){
	this.celdas = {};
	this.celdasOcupadas=[];
	this.celdasPosibles=[];

	for (fila = -15; fila < 15; fila++) {
		for (columna = -3; columna < 11; columna++) {
			this.celdas[columna.toString() + "," + fila.toString()] = new celda();
		};
	};
	this.celdas["0,0"].carta = tiposCartas.ComienzoEscalera;
	this.celdasOcupadas.push("0,0");
	this.celdas["8,2"].carta = destinos[0];
	this.celdasOcupadas.push("8,2");
	this.celdas["8,0"].carta = destinos[1];
	this.celdasOcupadas.push("8,0");
	this.celdas["8,-2"].carta = destinos[2];
	this.celdasOcupadas.push("8,-2");

	this.celdasPosibles.push("0,1");
	this.celdasPosibles.push("0,-1");
	this.celdasPosibles.push("-1,0");
	this.celdasPosibles.push("1,0");

};

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

	cartaAux.Izquierda = tablero.celdas[cordL].carta.Derecha;
	cartaAux.Derecha = tablero.celdas[cordR].carta.Izquierda;
	cartaAux.Arriba = tablero.celdas[cordUp].carta.Abajo;
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
	/*
	var cordL = (columna-1).toString() + "," + fila.toString();
	var cordR = (columna+1).toString() + "," + fila.toString();
	var cordUp = columna.toString() + "," + (fila+1).toString();
	var cordDown =  columna.toString() + "," + (fila-1).toString();

	if(carta.Arriba){
		//console.log("la carta tiene camino arriba");
		//console.log(tablero.celdas[cordUp].carta.Abajo);
		if(!tablero.celdas[cordUp].carta.Abajo){
			//console.log("entro1");
			success = false;
		}
	}

	if(carta.Abajo){
		//console.log("la carta tiene camino abajo");
		if(!tablero.celdas[cordDown].carta.Arriba){
			//console.log("entro2");
			success = false;

		}
	}

	if(carta.Izquierda){
		//console.log("la carta tiene camino Izquierda");
		//console.log(tablero.celdas[cordL].carta.Derecha);
		if(!tablero.celdas[cordL].carta.Derecha){
			//console.log("entro3");
			success = false;

		}
	}

	if(carta.Derecha){
		//console.log("la carta tiene camino Derecha");
		if(!tablero.celdas[cordR].carta.Izquierda){
			//console.log("entro4");
			success = false;
		}
	}
	console.log(success);
	return success;
	*/
};


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
		GanadorRonda = false;
		GanadorPartida = false;

		Partidas.update({_id: partidaId},{$set:{tablero: tablero,
												mazoGeneral: mazoGeneral,
												//mazoDestinos: mazoDestinos,
												jugadorActivo: jugadorActivo,
												nRonda: nRonda,
								  				FinRonda: GanadorRonda,
								  				FinPartida: GanadorPartida,}});
	},

	tryPonerCarta: function(partidaId,carta,columna, fila){
		tablero = Partidas.findOne({_id: partidaId}).tablero;
		success = ponerCarta(partidaId,tablero,carta,columna,fila);

	},

};

/*CaracteristicasService = {
	crearCaractIniciales: function(partidaId){
		CaracteristicasIniciales(partidaId);
	}
};*/

CaracteristicasService = {
	crearCaractIniciales: function(partidaId){
		//listaJugadores = Partidas.getAttr(listaJugadores,partidaId);
	listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;
		NumeroJugadores = listaJugadores.length;
		mazo_roll = barajarMazoRoll(NumeroJugadores);
		MaxCartas = nMaxCartas(NumeroJugadores);
		//mazo_general = Partidas.getAttr(mazoGeneral,partidaId);
	  mazo_general = Partidas.findOne({_id: partidaId}).mazoGeneral;
		var Puntos = 0;
		var Cartas = [];
		var Roll;

		for (i=0; i<NumeroJugadores; i++) {
			for(j = 0; j < MaxCartas; j++){
				Cartas[j] = robarCarta(partidaId);
				//Cartas[j] = mazo_general[mazo_general.length-1];
				//mazo_general.splice(mazo_general.length-1, 1);
				//Partidas.update({_id: partidaId},{$set:{mazoGeneral: mazo_general}});
			}
			Roll = mazo_roll[mazo_roll.length-1];
			mazo_roll.splice(mazo_roll.length-1, 1);
			Caracteristicas.insert({
				turno: i,
				JugadorId: listaJugadores[i],
				partidaId: partidaId,
				Puntuacion: Puntos,
				Roll: Roll,
				Mano: Cartas,
				Pico: "arreglado",
				Vagoneta: "arreglado",
				Farolillo: "arreglado"
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
//he subido los servicios porque no estoy seguro que los lean las funciones de más abajo de ahi que esta funcion este aqui porque no lo cogerian las demas

//////////////////////////FUNCIONA CORRECTAMENTE////////////DANGER,NO TOCAR///////////
//esto hay que meterlo arriba mañana lo vemos son dos lineas linea 456
//*****************************************************************************************************
//**************************************************************************************///
/*CaracteristicasIniciales = function(partidaId){
	//listaJugadores = Partidas.getAttr(listaJugadores,partidaId);
	listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;
		NumeroJugadores = listaJugadores.length;
		mazo_roll = barajarMazoRoll(NumeroJugadores);
		MaxCartas = nMaxCartas(NumeroJugadores);
		//mazo_general = Partidas.getAttr(mazoGeneral,partidaId);
		//mazo_general = Partidas.findOne({_id: partidaId}).mazoGeneral;
		var Puntos = 0;
		var Cartas = [];
		var Roll;

		for (i=0; i<NumeroJugadores; i++) {
			for(j = 0; j < MaxCartas; j++){
				Cartas[j] = robarCarta(partidaId);
				//Cartas[j] = mazo_general[mazo_general.length-1];
				//mazo_general.splice(mazo_general.length-1, 1);
				//Partidas.update({_id: partidaId},{$set:{mazoGeneral: mazo_general}});
			}
			Roll = mazo_roll[mazo_roll.length-1];
			mazo_roll.splice(mazo_roll.length-1, 1);
			Caracteristicas.insert({
				turno: i,
				JugadorId: listaJugadores[i],
				partidaId: partidaId,
				Puntuacion: Puntos,
				Roll: Roll,
				Mano: Cartas,
				Pico: "arreglado",
				Vagoneta: "arreglado",
				Farolillo: "arreglado"
			});
		}

};*/


////////////ESTA FUNCIÓN YA ESTÁ BIEN PROBADA:)(GODMODE)se coge el mazo se guarda la ultima carta se borra del mazo esa carta
//se actualiza el mazo general para esa partida, y devolvemos la carta que hemos cogido del mazo./////////////////////////
robarCarta = function(partidaId){
	//mazo = Partidas.getAttr(mazoGeneral,partidaId);
	mazo = Partidas.findOne({_id: partidaId}).mazoGeneral;
	carta = mazo[mazo.length -1];
	mazo.pop();
	Partidas.update({_id: partidaId},{$set:{mazoGeneral: mazo}});
	return carta;
};

///////////////////////FUNCION JUGAR CARTA SIN TERMINAR////////////////////////
JugarCarta = function(partidaId){
	var CualquierCarta = false;
	//identificador = Partidas.getAttr(jugadorActivo,partidaId);

	identificador = PartidaService.findOne({_id: partidaId}).jugadorActivo;
//idCaracteristicas= CaracteristicasService.getCarById(PartidaId);

	//idCarcateristicas = Caracteristicas.findOne({partidaId: partidaId,JugadorId: identificador,})._id;
	//hacer lo mismo con estas tres
	Pico = Caracteristicas.findOne({_id:identificador}).Pico;
	Vagoneta = Caracteristicas.findOne({_id:identificador}).Vagoneta;
	Farolillo = Caracteristicas.findOne({_id:identificador}).Farolillo;

	if ((Pico === "arreglado") && (Vagoneta === "arreglado") && (Farolillo === "arreglado")){
		CualquierCarta = true;
	}
	return CualquierCarta;
};

/*
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
*/

ActualizarTurno = function(partidaId){
	Turno = PartidaService.getAttr(turnoPartida,PartidaId);

	//Turno = Partidas.findOne({_id: partidaId}).turnoPartida;
	TurnoActualizado = Turno + 1;
	jugadorActivo = Partidas.findOne({_id: partidaId}).listaJugadores[TurnoActualizado];
	Partidas.update({_id: partidaId},{$set:{jugadorActivo: jugadorActivo,
											turnoPartida: TurnoActualizado,}});
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
				if (Cartas.length > 0){
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
	  'ponerCartaTablero': function(partidaId, carta, columna,fila) {
		  CualquierCarta = JugarCarta(partidaId);
		  if (CualquierCarta){
			//Se puede poner Carta de EXCAVACION,coger las coordenadas que nos pasen y poner carta en el tablero.

			////////////////////////PASAMOS TURNO////////////////////////////


		  } else {
			  //Solo se puede poner Carta de ACCION o PASAR TURNO.

			  ////////////////////////PASAMOS TURNO////////////////////////////

		  }
					robarCarta(partidaId);
					ActualizarTurno(partidaId);
	  },
	  'ponerCartaJugador': function(partidaId, carta, jugadorId) {
		  CualquierCarta = JugarCarta(partidaId);
		  if (CualquierCarta){
			  //Se puede poner Carta de ACCION,coger el id del jugador(Nos lo pasara la IU) al que se quiere
			  //poner la carta de accion,poner la carta de Accion para arreglarnos algo,derrumbar tunel o utilizar Mapa.

			  ////////////////////////PASAMOS TURNO////////////////////////////
			  ActualizarTurno(partidaId);
		  } else {
			  //Solo se puede poner Carta de ACCION o PASAR TURNO.

			  ////////////////////////PASAMOS TURNO////////////////////////////
			  ActualizarTurno(partidaId);
		  }
	  },
	  'DescartarCartaMano': function(partidaId) {
		  CualquierCarta = JugarCarta(partidaId);
		  if (CualquierCarta){
			  //Descartar Carta.

			  ////////////////////////PASAMOS TURNO////////////////////////////
			  ActualizarTurno(partidaId);
		  } else {
			  //Solo se puede poner Carta de ACCION o PASAR TURNO.

			  ////////////////////////PASAMOS TURNO////////////////////////////
			  ActualizarTurno(partidaId);
		  }
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
		carta = tiposCartas.Camino6;
		PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino6,1,0);
		//PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino2,1,0);
		//PartidaService.tryPonerCarta(partidaId,tiposCartas.Camino1,1,0);


  });
}
