Meteor.subscribe("jugadores");
Meteor.subscribe("partidas");
Meteor.subscribe("caracteristicas");

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});


Template.totalPartidas.helpers({
    listTotal: function () {
      return Partidas.find();
    },

    auxTotal: function () {
      return Partidas.findOne({partidaId: this._id}).listJugadores.indexOf(Meteor.userId()) == -1;
    },
});

Template.misPartidas.helpers({
    listMias: function () {
      return Partidas.find({},{listJugadores: Meteor.userId()});
    },

    auxMias: function () {
      return Partidas.findOne({partidaId: this._id}).listJugadores[0] == Meteor.userId();
    },
});
//Test
