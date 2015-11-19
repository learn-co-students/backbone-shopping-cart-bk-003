app = {};

function lonelyDino() {
  var newCart = new Cart();
  var formView = new FormView({ model : newCart});
  app.formView = formView;
  $("body").append(formView.el);
}

lonelyDino();