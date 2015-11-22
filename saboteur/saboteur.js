Jugadores = new Meteor.Collection("Jugadores");
Partidas = new Meteor.Collection("Partidas");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

////////////////////////////////////
//			CARTAS 				  //
////////////////////////////////////
var nombrePartida = "partida1";

var tiposCartas = {
	//Tipo tunel
	Camino1: { Izquierda: 0, Derecha: 0, Arriba: 1, Abajo: 1, Bloqueante: 0},
	Camino2: { Izquierda: 1, Derecha: 0, Arriba: 1, Abajo: 1, Bloqueante: 0},
	Camino3: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 1, Bloqueante: 0},
	Camino4: { Izquierda: 0, Derecha: 1, Arriba: 0, Abajo: 1, Bloqueante: 0},
	Camino5: { Izquierda: 1, Derecha: 0, Arriba: 0, Abajo: 1, Bloqueante: 0},
	Camino6: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 0, Bloqueante: 0},
	Camino7: { Izquierda: 1, Derecha: 1, Arriba: 0, Abajo: 0, Bloqueante: 0},
	SinCamino1: { Izquierda: 0, Derecha: 0, Arriba: 0, Abajo: 1, Bloqueante: 1},
	SinCamino2: { Izquierda: 1, Derecha: 0, Arriba: 1, Abajo: 1, Bloqueante: 1},
	SinCamino3: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 1, Bloqueante: 1},
	SinCamino4: { Izquierda: 0, Derecha: 1, Arriba: 0, Abajo: 1, Bloqueante: 1},
	SinCamino5: { Izquierda: 1, Derecha: 0, Arriba: 0, Abajo: 1, Bloqueante: 1},
	SinCamino6: { Izquierda: 1, Derecha: 0, Arriba: 0, Abajo: 0, Bloqueante: 1},
	SinCamino7: { Izquierda: 0, Derecha: 0, Arriba: 1, Abajo: 1, Bloqueante: 1},
	SinCamino8: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 0, Bloqueante: 1},
	SinCamino9: { Izquierda: 1, Derecha: 1, Arriba: 0, Abajo: 0, Bloqueante: 1},
	//Tipo Inicio
	ComienzoEscalera: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 1, Bloqueante: 0},
	//Tipo Destino
	DestinoNada1: { Izquierda: 1, Derecha: 0, Arriba: 0, Abajo: 1, Bloqueante: 0},
	DestinoNada2: { Izquierda: 1, Derecha: 0, Arriba: 1, Abajo: 0, Bloqueante: 0},
	DestinoPepita: { Izquierda: 1, Derecha: 1, Arriba: 1, Abajo: 1, Bloqueante: 0},
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
//			TABLERO        //
/////////////////////////////

carta = function(){
	this.izquierda = null;
	this.derecha = null;
	this.arriba = null;
	this.abajo = null;
	this.bloqueante = null;
};

celda = function(){
	this.carta = null;
};

tablero = function(destinos){
	this.celdas = {};
	this.celdasOcupadas=[];

	for (fila = -15; fila < 15; fila++) {
		for (columna = -3; columna < 11; columna++) {
			this.celdas[columna.toString() + "," + fila.toString()] = new celda();
		};
	};
	this.celdas["0,0"].carta = 'ComienzoEscalera';
	this.celdasOcupadas.push("0,0");
	this.celdas["8,2"].carta = destinos[0];
	this.celdasOcupadas.push("8,2");
	this.celdas["8,0"].carta = destinos[1];
	this.celdasOcupadas.push("8,0");
	this.celdas["8,-2"].carta = destinos[2];
	this.celdasOcupadas.push("8,-2");
/*
	this.posiblesCeldas = function(carta){
		for (i = 0; i < this.celdasOcupadas.length; i++) {

		};
	};

	this.ponerCarta = function(carta, columna, fila) {
		var cartasAround = [];
		var success = true;
		var cord1 = (columna-1).toString() + "," + fila.toString();
		var cord2 = columna.toString() + "," + (fila+1).toString();
		var cord3 = (columna+1).toString() + "," + fila.toString();
		var cord4 =  columna.toString() + "," + (fila-1).toString();
		var cords = [cord1, cord2, cord3, cord4];

		for (i=0; i < 4; i++) {
			//guardamos las cartas a su alrededor en cartasAround[]
			//n
		};

		for (i=0; i<4; i++) {
			if(!compatibles(cartasAround[i], carta, i)){
				success = false;	//compatibles(cartaAround[i], carta, lado)
				break;
			}
		};
		this.celdas[columna.toString() + "," + fila.toString()].carta = 'ComienzoEscalera';
		this.celdasOcupadas.push(columna.toString() + "," + fila.toString());
			
		return success;
	};
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

BarajarMazo_General = function(CartasPila){
	var Total = CartasPila.length;
	var mazo_general = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasPila.length));
		mazo_general[i] = CartasPila[aleatorio];
		CartasPila.splice(aleatorio, 1);
	}
	return mazo_general;
};

BarajarMazo_Roll = function(NumeroJugadores){
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

BarajarMazo_Destino = function(CartasDestino){
	var Total = CartasDestino.length;
	var mazo_destino = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasDestino.length));
		mazo_destino[i] = CartasDestino[aleatorio];
		CartasDestino.splice(aleatorio, 1);
	}
	return mazo_destino;
};

BarajarMazo_Pepitas = function(CartasPepitas){
	var Total = CartasPepitas.length;
	var mazo_pepitas = [];
	for (i=0; i<Total; i++) {
		aleatorio = Math.floor(Math.random()*(CartasPepitas.length));
		mazo_pepitas[i] = CartasPepitas[aleatorio];
		CartasPepitas.splice(aleatorio, 1);
	}
	return mazo_pepitas;
};


ComprobarNum = function(){
	var NumeroJugadores;
	if(Jugadores.find().count() < 3){
		NumeroJugadores = 3
	}
	if(Jugadores.find().count() > 2){
		NumeroJugadores = Jugadores.find().count();
	}
	return NumeroJugadores;
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


crearCaractIniciales = function(partidaId){
        listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;
		NumeroJugadores = listaJugadores.length;
		mazo_roll = BarajarMazo_Roll(NumeroJugadores);
		MaxCartas = nMaxCartas(NumeroJugadores);

	    mazo_general = Partidas.findOne({_id: partidaId}).mazoGeneral;
	    var Puntos = 0;
	    var Cartas = [];
	    var Roll;
	
	    for (i=0; i<NumeroJugadores; i++) {
		    for(j = 0; j < MaxCartas; j++){
			    Cartas[j] = mazo_general[mazo_general.length-1];
			    mazo_general.splice(mazo_general.length-1, 1);
                Partidas.update({_id: partidaId},{$set:{mazoGeneral: mazo_general}});
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

RepartirPuntos = function(Buscadores,Saboteadores){
	NumeroJugadores = ComprobarNum();
	var Puntos;
	if(Buscadores){
		Puntos = 4;
		for (i=0; i<NumeroJugadores; i++) {
			Roll = Caracteristicas.findOne({turno: i}).Roll;
			if (Roll === "Buscador"){
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
				Puntuacion = Caracteristicas.findOne({turno: i}).Puntuacion;
				Puntos = Puntuacion + Puntos;
				Caracteristicas.update({turno: i},{$set: {Puntuacion: Puntos}});
			}
		}
	}

}

ComprobarPuntuacion = function(){
	NumeroJugadores = ComprobarNum();
	Puntos = 0;
	for (i=0; i<NumeroJugadores; i++) {
		Puntuacion = Caracteristicas.findOne({turno: i}).Puntuacion;
		if(Puntuacion > Puntos){
			Puntos = Puntuacion;
		}
	}
	idenJugador = Caracteristicas.findOne({Puntuacion: Puntos}).JugadorId;
	nombreGanador = Jugadores.findOne({_id: idenJugador}).name;

	return nombreGanador;
}


var NumRondas = 3;

Partida = function(PartidaId){
	var Saboteadores = false;
	var Buscadores = false;
	var turnos = 0
	NumeroJugadores = ComprobarNum();
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
				
				Cartas = Caracteristicas.findOne({turno: turnos}).Mano;
				numTurno = Caracteristicas.findOne({turno:Turnos}).turno;
				part = Caracteristicas.findOne({PartidaId: PartidaId}).PartidaId;
				Mazo_Pila = Partidas.findOne({PartidaId: PartidaId}).Pila;
				//Si un jugador tiene cartas en su mano,jugará Carta y Robará {
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
			}
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

};

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

	//getAttr: function(attr, PartidaId){
	//	return Partida.findOne({_id:Partidas.getpartidaId(nombrePartida)}).attr;
	//},

	empezarPartida: function(partidaId){
		
		mazoGeneral = BarajarMazo_General(CartasPila);
		mazoDestinos = BarajarMazo_Destino(CartasDestino);
		tablero = new tablero(mazoDestinos);
		jugadorActivo = Partidas.findOne({_id: partidaId}).listaJugadores[0]; //coge el primero de la lista
		nRonda = 1;
        GanadorRonda = false;
        GanadorPartida = false;

		Partidas.update({_id: partidaId},{$set:{tablero: tablero,
							                    mazoGeneral: mazoGeneral,
							                    mazoDestinos: mazoDestinos,
							                    jugadorActivo: jugadorActivo,
							                    nRonda: nRonda,
                                                FinRonda: GanadorRonda,
                                                FinPartida: GanadorPartida,}});
	},
};

/*CaracteristicasService = {
	crearCaractIniciales: function(partidaId){
		listaJugadores = Partidas.findOne({_id: partidaId}).listaJugadores;
		nJugadores = listaJugadores.length;
		cartasRoll = BarajarMazo_Roll(nJugadores);
		nMaxCartas = nMaxCartas(nJugadores);
		var cartasIniciales = [];

		for (var i = 0; i < nMaxCartas; i++) {
			cartasIniciales[i] = robarCarta(partidaId);
		};

		for (var i = 0; i < 3 ; i++) {
			Caracteristicas.insert({
				partidaId: partidaId,
				jugadorId: listaJugadores[i],
				puntuacion: 0,
				roll: cartasRoll[i], 
				cartas: cartasIniciales,
				pico: "arreglado",
				vagoneta: "arreglado",
				farolillo: "arreglado"
			});
		}
	}
};*/




if (Meteor.isClient) {
	// counter starts at 0


}

if (Meteor.isServer) {
	Meteor.startup(function () {
		Meteor.methods({
			'empezar': function(PartidaId) {
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
				
				crearCaractIniciales(partidaId);


				//repartir cartas iniciales a cada jugador
			},
		});


/////////////////////////////PARA PROBAR QUE FUNCIONA BIEN LO CREAMOS AQUÍ.//////////////////////////////////////7
		if (!JugadoresService.playersExist()) {
			JugadoresService.generateRandomPlayers();
	  	}
		PartidaService.generarPartida();						//esto lo tienen que hacer los de la plataforma
		var partidaId = PartidaService.getPartidaId(1);			//esto nos lo pasan de la plataforma
		//esto ira dentro de meteor.methods empezarpartida.
        PartidaService.empezarPartida(partidaId);	//meterlo en Partidas._id
				
	    crearCaractIniciales(partidaId);
		
  });
}
