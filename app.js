app = {};
function bootstrap() {
  // instantiate your view object and append it's HTML to the DOM.
  var user = new User();
  app.formView = new FormView({model : user});
  $("body").append(app.formView.el);
}
bootstrap();