app = {};

function lonelyDino() {
  // instantiate a new cart object and save it as a variable here
  var cart = new Cart()
  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the cart
  var cartView = new FormView({model : cart})
  // attach your view object to the app object as a property called "formView"
  app.formView = cartView
  // append your view object's HTML to the div with the class container here
  $("body").append(cartView.el)
}

lonelyDino();
