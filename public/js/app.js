app = {};

function lonelyDino() {
  var cart = new Cart();
  var view = new FormView({model: cart});
  app.formView = view
  $('body').append(app.formView.$el)
  // instantiate a new cart object and save it as a variable here

  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the cart  

  // attach your view object to the app object as a property called "formView"

  // append your view object's HTML to the div with the class container here
}

lonelyDino();