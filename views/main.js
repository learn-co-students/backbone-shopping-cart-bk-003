FormView = Backbone.View.extend({
  events : {
    "submit form" : "submitHandler"
  },
  initialize : function() {
    this.render();
  },
  render : function() {
    this.$el.append('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>')
    return this;
  },
  submitHandler : function(e) {
    e.preventDefault();
    this.model.set("name", $("#name").val());
  }
})