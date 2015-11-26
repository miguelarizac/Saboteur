Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish("jugadores", function () {
        return Jugadores.find();
    });

    Meteor.publish("partidas", function () {
        return Partidas.find();
    });

    Meteor.publish("caracteristicas", function () {
        return Caracteristicas.find();
    });


});
