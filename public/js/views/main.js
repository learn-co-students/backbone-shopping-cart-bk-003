FormView = Backbone.View.extend({
  events : {
    "submit form": "addToCart"
    // you'll want to add a submit event to the form
    // it should trigger the addToCart function
  },
  initialize : function() {
    // call on this instance's render function here
    this.render();
  },
  render : function() {
    // here is the html you want to append to $el:
    // <div class="row"><div class="col-md-8 col-md-offset-2"><h2>Select a T-Shirt</h2><form id="shirt-form"><div id="shirt-style"><p><strong>Style:</strong></p><label><img src="public/img/shirts/dino.jpg" /><br><input type="radio" name="style" value="dino">All My Friends Are Dead</label><label><img src="public/img/shirts/down.jpg" /><br><input type="radio" name="style" value="down">Im Down</label><label><img src="public/img/shirts/locals.jpg" /><br><input type="radio" name="style" value="locals">Eat Locals</label></div><div id="shirt-size"><label id="size">Size:</label><br><select name="size"><option value="x-small">X-Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="x-large">X-Large</option></select></div><br><button type="submit">Purchase</button></form></div></div>
    
    var html = '<div class="row"><div class="col-md-8 col-md-offset-2"><h2>Select a T-Shirt</h2><form id="shirt-form"><div id="shirt-style"><p><strong>Style:</strong></p><label><img src="public/img/shirts/dino.jpg" /><br><input type="radio" name="style" value="dino">All My Friends Are Dead</label><label><img src="public/img/shirts/down.jpg" /><br><input type="radio" name="style" value="down">Im Down</label><label><img src="public/img/shirts/locals.jpg" /><br><input type="radio" name="style" value="locals">Eat Locals</label></div><div id="shirt-size"><label id="size">Size:</label><br><select name="size"><option value="x-small">X-Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="x-large">X-Large</option></select></div><br><button type="submit">Purchase</button></form></div></div>';
    this.$el.append(html);

    return this;
    // remember to return the instance of the FormView
  },
  addToCart : function(e) {
    // make sure this function accepts the event parameter

    // prevent the default behavior (submission) of the form 
    // (call preventDefault on the event) 


    e.preventDefault();

    // save the radio button value as style
    var style = "hi";

    // save the dropdown value as size
    var size = "hi"

    // make an object that has two properties: style and size
    var tshirt = {"size": size, "style": style};

    // add the object to your model's items array
    var tempCart = this.model.get("items")
    tempCart.push(tshirt);
    this.model.set("items", tempCart);
  }
})