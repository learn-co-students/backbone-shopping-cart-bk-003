app = {};

function lonelyDino() {
  app.cart = new Cart();
  app.formView = new FormView({model: app.cart});
  $("body").append(app.formView.el)

  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the cart  

  // attach your view object to the app object as a property called "formView"

  // append your view object's HTML to the div with the class container here
}

lonelyDino();