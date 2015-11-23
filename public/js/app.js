app = {};

function lonelyDino() {

	cart = new Cart;
  
  // instantiate a new cart object and save it as a variable here

  	app.formView = new FormView({"model": cart});

  // instantiate your view object here:
  //   * it should take one argument, an object:
  //      - the parameter object should have a property called "model"
  //        which should point to the new instance of the cart  

  // attach your view object to the app object as a property called "formView"

  // append your view object's HTML to the div with the class container here

  $('body').append(app.formView.el);
}

lonelyDino();