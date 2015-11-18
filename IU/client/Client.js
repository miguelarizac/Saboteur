
Template.test.events({
  'click .loadCanvas': function(event){
    event.preventDefault();
    $("#canvas").show();
    $(".hidenCanvas").show();
    $(".loadCanvas").hide();
    loadCanvas();
  },
  'click .hidenCanvas': function(event){
    event.preventDefault();
    $("#canvas").hide();
    $(".hidenCanvas").hide();
    $(".loadCanvas").show();
  },
});