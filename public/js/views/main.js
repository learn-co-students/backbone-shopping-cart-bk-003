FormView = Backbone.View.extend({
  events : {
    // you'll want to add a click event to the button with an id of add-to-cart
    // clicking this button should trigger the addToCart function
    'submit' : "addToCart"
  },
  initialize : function() {
    // call on this instance's render function here
    this.render();
  },
  render : function() {
    // here is the html you want to append to $el:
    var html  = '<div class="container"><div class="jumbotron"><div class="row"><div class="col-md-4"><img src="public/img/logos/logo.png" /></div><div class="col-md-8"><h1>Lonely Dinosaur Designs</h1></div></div></div><div class="row"><div class="col-md-8 col-md-offset-2"><h2>Select a T-Shirt</h2><form id="shirt-form"><div id="shirt-style"><p><strong>Style:</strong></p><label><img src="public/img/shirts/dino.jpg" /><br><input type="radio" name="style" value="dino">\nAll My Friends Are Dead</label><label><img src="public/img/shirts/down.jpg" /><br><input type="radio" name="style" value="down">\nI\'m Down</label><label><img src="public/img/shirts/locals.jpg" /><br><input type="radio" name="style" value="locals">\nEat Locals</label></div><div id="shirt-size"><label id="size">Size:</label><br><select name="size"><option value="x-small">X-Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="x-large">X-Large</option></select></div><div id="button-container"><button type="submit">Purchase</button></div></form></div></div></div>'

    // remember to return the instance of the FormView
    this.$el.append(html);
    return this;
  },
  addToCart : function(e) {
  //   // make sure this function accepts the event parameter

  //   // prevent the default behavior (submission) of the form 
  //   // (call preventDefault on the event) 
     e.preventDefault();


  //   // call the serialize() function on the form 
    // var params = $(#shirt-form).serialize();

  //   // save the radio button value as style
     // var style = params.matching
     var params = $("#shirt-form").serialize().split(/[=&]/);
     var size = params[3];
     var style = params[1];

  //   // save the dropdown value as size]

  //   // call the function addShirtToCart on the model, be sure to pass it two parameters:
  //   //   1. the style
  //   //   2. the size
        this.model.addShirtToCart(style,size);
  }
});