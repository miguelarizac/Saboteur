Jugadores = new Meteor.Collection("Jugadores");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

var TiposCartas = {
    //Tipo tunel
    Camino1: { Izquierda: 0, Derecha: 0, Arriba: 1, Abajo: 1, Bloqueante: 0},
    Camino2: { Izquierda: 0, Derecha: 1, Arriba: 1, Abajo: 1, Bloqueante: 0},
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

PrepararRolles = function(){
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
    //CartasAccion = CartasAccion.sort(function() {return Math.random() - 0.5});
    var Total = CartasPila.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(CartasPila.length));
        MAZO_GENERAL[i] = CartasPila[aleatorio];
        CartasPila.splice(aleatorio, 1);
    }
};

BarajaMazo_Destino = function(CartasDestino){
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

RepartirCartasIniciales = function(){
    NumeroJugadores = ComprobarNum();
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
        for(j = 1; j < MaxCartas; contador++){
            Cartas[j] = MAZO_GENERAL[MAZO_GENERAL.length];
            MAZO_GENERAL.splice(MAZO_GENERAL.length, 1);
        }
        Roll = MAZO_ROLL[MAZO_ROLL.length];
        MAZO_ROLL.splice(MAZO_ROLL.length, 1);
        Caracteristicas.insert({
            Nombre: i,
            Puntuacion: 0,
            Roll: Roll,
            Mano: Cartas,
            Pico: "arreglado",
            Vagoneta: "arreglado",
            Farolillo: "arreglado"});
    }

};


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
