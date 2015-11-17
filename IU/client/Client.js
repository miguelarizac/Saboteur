
Template.test.events({
  'click .loadCanvas': function(event){
    event.preventDefault();
    loadCanvas();
  },
});