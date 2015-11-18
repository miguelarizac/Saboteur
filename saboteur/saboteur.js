Jugadores = new Meteor.Collection("Jugadores");
Partidas = new Meteor.Collection("Partidas");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

var nombrePartida = "partida1";
var TiposCartas = {
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
    RomperVagoneta: {Funcion: "RomperVagoneta"},
    RomperFarolillo: {Funcion: "RomperFarolillo"},
    RomperPico: {Funcion: "RomperPico"},
    ArreglarVagoneta: {Funcion: "ArreglarVagoneta"},
    ArreglarFarolillo: {Funcion: "ArreglarFarolillo"},
    ArreglarPico: {Funcion: "ArreglarPico"},
    ArreglarFaro_Pico: {Funcion1: "ArreglarFarolillo", Funcion2: "ArreglarPico"},
    ArreglarFaro_Vagon: {Funcion1: "ArreglarFarolillo", Funcion2: "ArreglarVagoneta"},
    ArreglarVagon_Pico: {Funcion1: "ArreglarVagoneta", Funcion2: "ArreglarPico"},
    Mapa: {Funcion: "DestapaCartaDestino"},
    Derrumbamiento: {Funcion: "Derrumbamiento"}
};


var CartasTunel = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
                   'Camino3','Camino3','Camino3','Camino3','Camino4','Camino4','Camino4','Camino4','Camino5','Camino5',
                   'Camino5','Camino5','Camino5','Camino6','Camino6','Camino6','Camino6','Camino6','Camino7','Camino7',
                   'Camino7','SinCamino1','SinCamino2','SinCamino3','SinCamino4','SinCamino5','SinCamino6',
                   'SinCamino7','SinCamino8','SinCamino9'
];

var CartaInicio = [
    'ComienzoEscalera'
];

var CartasDestino = [
    'DestinoNada1',
    'DestinoNada2',
    'DestinoPepita'
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

var MAZO_DESTINO = [];
var MAZO_GENERAL = [];
var MAZO_ROLL = [];
var MAZO_PEPITAS = [];

PrepararRolles = function(NumeroJugadores){
    if (NumeroJugadores === 3){
        var CartasRoll = ['Saboteador','Buscador','Buscador'];
    }
    else if (NumeroJugadores === 4){
        var CartasRoll = ['Saboteador','Buscador','Buscador','Buscador'];
    }
    else if (NumeroJugadores === 5){
        var CartasRoll = ['Saboteador','Saboteador','Buscador','Buscador','Buscador'];
    }
    else if (NumeroJugadores === 6){
        var CartasRoll = ['Saboteador','Saboteador','Buscador','Buscador','Buscador',
                           'Buscador'];
    }
    else if (NumeroJugadores === 7){
        var CartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
                           'Buscador','Buscador'];
    }
    else if (NumeroJugadores === 8){
        var CartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
                           'Buscador','Buscador','Buscador'];
    }
    else if (NumeroJugadores === 9){
        var CartasRoll = ['Saboteador','Saboteador','Saboteador','Buscador','Buscador',
                           'Buscador','Buscador','Buscador','Buscador'];
    }
    else if (NumeroJugadores === 10){
        var CartasRoll = ['Saboteador','Saboteador','Saboteador','Saboteador','Buscador','Buscador',
                           'Buscador','Buscador','Buscador','Buscador','Buscador'];
    }

    return CartasRoll;
};

BarajarMazo_Pepitas = function(CartasPepitas){
    var Total = CartasPepitas.length;
    for (i=0; i<Total; i++) {
        aleatorio = Math.floor(Math.random()*(CartasPepitas.length));
        MAZO_PEPITAS[i] = CartasPepitas[aleatorio];
        CartasPepitas.splice(aleatorio, 1);
    }
};

BarajarMazo_Roll = function(){
    CartasRoll = PrepararRolles();
    var Total = CartasRoll.length;
    for (i=0; i<Total; i++) {
        aleatorio = Math.floor(Math.random()*(CartasRoll.length));
        MAZO_ROLL[i] = CartasRoll[aleatorio];
        CartasRoll.splice(aleatorio, 1);
    }
};

BarajarMazo_General = function(CartasPila){
    var Total = CartasPila.length;
    for (i=0; i<Total; i++) {
        aleatorio = Math.floor(Math.random()*(CartasPila.length));
        MAZO_GENERAL[i] = CartasPila[aleatorio];
        CartasPila.splice(aleatorio, 1);
    }
};

BarajarMazo_Destino = function(CartasDestino){
    var Total = CartasDestino.length;
    for (i=0; i<Total; i++) {
        aleatorio = Math.floor(Math.random()*(CartasDestino.length));
        MAZO_DESTINO[i] = CartasDestino[aleatorio];
        CartasDestino.splice(aleatorio, 1);
    }
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

RepartirCartasIniciales = function(PartidaId){
    var listaJugadores = Partidas.findOne({_id: PartidaId}).listaJugadores
    var NumeroJugadores = listaJugadores.length;
    var Puntos = 0;
    var Cartas = [];
    var Roll;
    if ((NumeroJugadores >= 3) && (NumeroJugadores <= 5)) {
        var MaxCartas = 7;
    }
    if ((NumeroJugadores === 6) || (NumeroJugadores === 7)) {
        var MaxCartas = 6;
    }
    if ((NumeroJugadores >= 8) && (NumeroJugadores <= 10)) {
        var MaxCartas = 4;
    }
    for (i=0; i<NumeroJugadores; i++) {
        for(j = 1; j < MaxCartas; j++){
            Cartas[j] = MAZO_GENERAL[MAZO_GENERAL.length];
            MAZO_GENERAL.splice(MAZO_GENERAL.length, 1);
        }
        Roll = MAZO_ROLL[MAZO_ROLL.length];
        MAZO_ROLL.splice(MAZO_ROLL.length, 1);
        Caracteristicas.insert({
            turno: i,
            JugadorId: listaJugadores[i]._id,
            PartidaId: PartidaId,
            Puntuacion: Puntos,
            Roll: Roll,
            Mano: Cartas,
            Pico: "arreglado",
            Vagoneta: "arreglado",
            Farolillo: "arreglado"
        });
    }

};





/*RobarCartas = function(IdenPartida,Turnos){
    if(MAZO_GENERAL.length > 0){
        numTurno = Caracteristicas.findOne({turno:Turnos}).turno;
        part = Caracteristicas.findOne({PartidaId: IdenPartida}).PartidaId;
        if ((numTurno === Turnos) &&(part === IdenPartida)){
            Cartas = Caracteristicas.findOne({turno: Turnos}).Mano;
            Cartas.push(MAZO_GENERAL[MAZO_GENERAL.length]);
            MAZO_GENERAL.splice(MAZO_GENERAL.length, 1);
            Caracteristicas.update({turno: Turnos},{$set: {Mano: Cartas}});
        }
    }
};*/

RobarCartas = function(Turnos,Cartas,Mazo_Pila){
    Cartas.push(Mazo_Pila[Mazo_Pila.length]);
    Mazo_Pila.splice(Mazo_Pila.length, 1);
    Caracteristicas.update({turno: Turnos},{$set: {Mano: Cartas}});
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

var Celda = function(){
    this.carta = null;
};


var Tablero = function(destinos){
    this.list = {};
    this.celdasOcupadas=[];

    for (fila = -15; i < 15; i++) {
        for (columna = -3; j < 11; j++) {
            this.list[columna.toString() + "," + fila.toString()] = new Celda();
        };
    };
    this.list["0,0"].carta = 'ComienzoEscalera';
    this.celdasOcupadas.push("0,0");
    this.list["8,2"].carta = destinos[0];
    this.celdasOcupadas.push("8,2");
    this.list["8,0"].carta = destinos[1];
    this.celdasOcupadas.push("8,0");
    this.list["8,-2"].carta = destinos[2];
    this.celdasOcupadas.push("8,-2");

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
    		cartasAround[i] = this.list[cords[i]];
    	};
    	//cartasAround[] = ver cartas a su alrededor cartas
    	//for iterando en cartasAround[]
    		//compatibles(cartaAround[i], carta, lado)
    	return success;
    };

};



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
                                RobarCartas(numTurno,Cartas,Mazo_Pila);
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
    return Jugadores.find({}, {sort: { name: 1}});
  },
  getPlayer: function (name) {
    return Jugadores.findOne({name: name})._id;
  },
};

PartidaService = {
  generarPartida:function(){
    AlexId = JugadoresService.getPlayer("Alex");
    JonaId = JugadoresService.getPlayer("Jona");
    PazoId = JugadoresService.getPlayer("Pazo");
    NumRonda = 1;

    Partidas.insert({
      numPartida: nombrePartida,
      listaJugadores: [AlexId,JonaId,PazoId],
      Pila: MAZO_GENERAL,
      CartasDestino: MAZO_DESTINO,
      Ronda: NumRonda, 
      Tablero:null,
    });
  },
  getList: function () {
    return Jugadores.find().fetch();
  },
  getPartidaId: function (numPartida) {
    return Partidas.findOne({numPartida:numPartida})._id;
  },
  getAttr: function(attr){
    return Partida.findOne({_id:Partidas.getpartidaId(nombrePartida)}).attr;
  },
};

CaracteristicasService = {
  caracteristicasInsert: function(){
    PartidaId = PartidaService.getPartidaId(nombrePartida);
    Lista = PartidaService.getList();
    CartasRoll = PrepararRolles(3);
    CartasIniciales = ["camino1","camino2","camino3","camino4",
                       "Mapa","RomperPico","Mapa",];
    var estado = "arreglado";
    for (var i = 0; i < 3; i++) {
      Caracteristicas.insert({
          turno: i,
          JugadorId: Lista[i]._id,
          PartidaId: PartidaId,
          Puntuacion: 0,
          Roll: CartasRoll[i], // distintos roles
          Mano: CartasIniciales,
          Pico: estado,
          Vagoneta: estado,
          Farolillo: estado
      });
    }
  }
};

if (Meteor.isClient) {
  // counter starts at 0

}


if (Meteor.isServer) {
    Meteor.startup(function () {
      Meteor.methods({
        'empezarPartida': function(PartidaId) {
          Partida(PartidaId);
          //
        },
      });

      if (!JugadoresService.playersExist()) {
        JugadoresService.generateRandomPlayers();
      }
      PartidaService.generarPartida();
      CaracteristicasService.caracteristicasInsert();
  });
}
