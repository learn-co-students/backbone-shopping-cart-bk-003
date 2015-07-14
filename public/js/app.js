app = {};

function lonelyDino() {
  var cart = new Cart;
  // instantiate a new cart object and save it as a variable here

  var view = new FormView({model: cart});
  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the cart  

  app.formView = view;
  // attach your view object to the app object as a property called "formView"

  $("body").append(app.formView.el);
  // append your view object's HTML to the div with the class container here
}

lonelyDino();