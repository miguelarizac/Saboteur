Jugadores = new Meteor.Collection("Jugadores");
Caracteristicas = new Meteor.Collection("Caracteristicas");
//var mongoose = require('mongoose'),Schema = mongoose.Schema;

var TiposCartas = {
    Camino1: { Izquierda: "No", Derecha: "No", Arriba: "Si", Abajo: "Si"},
    Camino2: { Izquierda: "No", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    Camino3: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    Camino4: { Izquierda: "No", Derecha: "Si", Arriba: "No", Abajo: "Si"},
    Camino5: { Izquierda: "Si", Derecha: "No", Arriba: "No", Abajo: "Si"},
    Camino6: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "No"},
    Camino7: { Izquierda: "Si", Derecha: "Si", Arriba: "No", Abajo: "No"}, 
    SinCamino1: { Izquierda: "No", Derecha: "No", Arriba: "No", Abajo: "Si"},
    SinCamino2: { Izquierda: "Si", Derecha: "No", Arriba: "Si", Abajo: "Si"},
    SinCamino3: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    SinCamino4: { Izquierda: "No", Derecha: "Si", Arriba: "No", Abajo: "Si"},
    SinCamino5: { Izquierda: "Si", Derecha: "No", Arriba: "No", Abajo: "Si"},
    SinCamino6: { Izquierda: "Si", Derecha: "No", Arriba: "No", Abajo: "No"},
    SinCamino7: { Izquierda: "No", Derecha: "No", Arriba: "Si", Abajo: "Si"},
    SinCamino8: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "No"},
    SinCamino9: { Izquierda: "Si", Derecha: "Si", Arriba: "No", Abajo: "No"},
    ComienzoEscalera: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    DestinoPiedra1: { Izquierda: "Si", Derecha: "No", Arriba: "No", Abajo: "Si"},
    DestinoPiedra2: { Izquierda: "Si", Derecha: "No", Arriba: "Si", Abajo: "No"}, 
    DestinoPepita: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    saboteador: {Funcion: "sabotear"},
    buscador: {Funcion: "construir"},
    Pepitas1: {numero: "1"},
    Pepitas2: {numero: "2"},
    Pepitas3: {numero: "3"},
    MinaRota: {Funcion: "RomperMina"},
    AlumbradoRoto: {Funcion: "RomperAlumbrado"},
    HerramientaRota: {Funcion: "RomperHerr"},
    ArreglarMina: {Funcion: "ArreglarMina"},
    ArreglarAlumbrado: {Funcion: "ArreglarAlumbrado"},
    ArreglarHerr: {Funcion: "ArreglarHerr"},
    ArreglaAlum_Herr: {Funcion1: "Alumbrado", Funcion2: "Herramienta"},
    ArreglaAlum_Mina: {Funcion1: "Alumbrado", Funcion2: "Mina"},
    ArreglaMina_Herr: {Funcion1: "Mina", Funcion2: "Herramienta"},
    Mapa: {Funcion: "DestapaCartaDestino"},
    QuitaCamino: {Funcion: "QuitarCamino"}
};


var CartasTunel = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
                   'Camino3','Camino3','Camino3','Camino3','Camino4','Camino4','Camino4','Camino4','Camino5','Camino5',
                   'Camino5','Camino5','Camino5','Camino6','Camino6','Camino6','Camino6','Camino6','Camino7','Camino7',
                   'Camino7','SinCamino1','SinCamino2','SinCamino3','SinCamino4','SinCamino5','SinCamino6',
                   'SinCamino7','SinCamino8','SinCamino9',
];

var CartasDestino = [
    'ComienzoEscalera',
    'DestinoPiedra1', 
    'DestinoPiedra2', 
    'DestinoPepita',
];

var CartasPepitas = ['Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1',
                     'Pepitas1','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2',
                     'Pepitas2','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3',
                     'Pepitas3',
];

var CartasAccion = ['Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','ArreglarMina','ArreglarMina','ArreglarHerr','ArreglarHerr',
                    'ArreglarAlumbrado','ArreglarAlumbrado','MinaRota','MinaRota','MinaRota','AlumbradoRoto','AlumbradoRoto',
                    'AlumbradoRoto','HerramientaRota','HerramientaRota','HerramientaRota', 'ArreglaAlum_Herr','ArreglaAlum_Mina',
                    'ArreglaMina_Herr','QuitaCamino','QuitaCamino','QuitaCamino',
];

var CartasPila = ['Camino1','Camino1','Camino1','Camino1','Camino2','Camino2','Camino2','Camino2','Camino2','Camino3',
            'Camino3','Camino3','Camino3','Camino3','Camino4','Camino4','Camino4','Camino4','Camino5','Camino5',
            'Camino5','Camino5','Camino5','Camino6','Camino6','Camino6','Camino6','Camino6','Camino7','Camino7',
            'Camino7','SinCamino1','SinCamino2','SinCamino3','SinCamino4','SinCamino5','SinCamino6',
            'SinCamino7','SinCamino8','SinCamino9',
            'Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','ArreglarMina','ArreglarMina','ArreglarHerr','ArreglarHerr',
            'ArreglarAlumbrado','ArreglarAlumbrado','MinaRota','MinaRota','MinaRota','AlumbradoRoto','AlumbradoRoto',
            'AlumbradoRoto','HerramientaRota','HerramientaRota','HerramientaRota', 'ArreglaAlum_Herr','ArreglaAlum_Mina',
            'ArreglaMina_Herr','QuitaCamino','QuitaCamino','QuitaCamino', 

];

var BarajadasDestino = [];
var BarajadasPila = [];
var BarajadasEnanos = [];
var BarajadasPepitas = [];

GuardarEnanos = function(){
    if (NumeroJugadores === 3){
        var CartasEnano = ['saboteador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 4){
        var CartasEnano = ['saboteador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 5){
        var CartasEnano = ['saboteador','saboteador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 6){
        var CartasEnano = ['saboteador','saboteador','buscador','buscador','buscador',
                           'buscador'];   
    }
    else if (NumeroJugadores === 7){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador'];   
    }
    else if (NumeroJugadores === 8){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 9){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 10){
        var CartasEnano = ['saboteador','saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador','buscador','buscador'];   
    }

    return CartasEnano;
};

BarajaCartasPepitas = function(CartasPepitas){
    var Total = CartasPepitas.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasPepitas[aleatorio];
        BarajadasPepitas[i] = nuevo;
        CartasPepitas.splice(aleatorio, 1);
    }
};

BarajaCartasEnano = function(){
    CartasEnano = GuardarEnanos();
    var Total = CartasEnano.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasEnano[aleatorio];
        BarajadasEnanos[i] = nuevo;
        CartasEnano.splice(aleatorio, 1);
    }
};

BarajaPila = function(Pila){
    //CartasAccion = CartasAccion.sort(function() {return Math.random() - 0.5});
    var Total = CartasPila.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasPila[aleatorio];
        BarajadasPila[i] = nuevo;
        CartasPila.splice(aleatorio, 1);
    }
};

BarajaCartasDestino = function(CartasDestino){
    var Total = CartasDestino.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasDestino[aleatorio];
        BarajadasDestino[i] = nuevo;
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

RepartirCartasPila = function(){
    NumeroJugadores = ComprobarNum();
    if ((NumeroJugadores === 3)||(NumeroJugadores === 4)||(NumeroJugadores === 5)) {
        var Cartas = [];
        var Enano;
        for (i=0; i<NumeroJugadores; i++) {
            for(Contador = 1; Contador < 7; contador++){
                Cartas[Contador] = BarajadasPila[BarajadasPila.length];
                BarajadasPila.splice(BarajadasPila.length, 1);
            }
            Enano = BarajadasEnanos[BarajadasEnanos.length];
            BarajadasEnanos.splice(BarajadasEnanos.length, 1);
            Caracteristicas.insert({Jugador: i,
                                    Puntuacion: 0,
                                    Mano: Cartas,
                                    NumCartas:0,
                                    Rol: Enano,});
        }
    }
    if ((NumeroJugadores === 6) || (NumeroJugadores === 7)) {
        var Cartas = [];
        var Enano;
        for (i=0; i<NumeroJugadores; i++) {
            for(Contador = 1; Contador < 6; contador++){
                Cartas[Contador] = BarajadasPila[BarajadasPila.length];
                BarajadasPila.splice(BarajadasPila.length, 1);
            }
            Enano = BarajadasEnanos[BarajadasEnanos.length];
            BarajadasEnanos.splice(BarajadasEnanos.length, 1);
            Caracteristicas.insert({Jugador: i,
                                    Puntuacion: 0,
                                    Mano: Cartas,
                                    NumCartas:0,
                                    Rol: Enano,});
        }
    }
    if ((NumeroJugadores === 8) || (NumeroJugadores === 9) || (NumeroJugadores === 10)) {
        var Cartas = [];
        var Enano;
        for (i=0; i<NumeroJugadores; i++) {
            for(Contador = 1; Contador < 4; contador++){
                Cartas[Contador] = BarajadasPila[BarajadasPila.length];
                BarajadasPila.splice(BarajadasPila.length, 1);
            }
            Enano = BarajadasEnanos[BarajadasEnanos.length];
            BarajadasEnanos.splice(BarajadasEnanos.length, 1);
            Caracteristicas.insert({Jugador: i,
                                    Puntuacion: 0,
                                    Mano: Cartas,
                                    NumCartas:0,
                                    Rol: Enano,});
        }
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
