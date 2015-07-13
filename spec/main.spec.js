'use strict';

describe( "#lonelyDino", function() {
  it("should instantiate a cart, pass the cart to the view, attaches the view to the app", function() {
    lonelyDino();
    expect(app.formView.model.get("items")).toEqual([]);
  });
   
  it("should append the form to the div with the class conatiner", function() {
    lonelyDino();
    var formHTML = '<div class="row"><div class="col-md-8 col-md-offset-2"><h2>Select a T-Shirt</h2><form id="shirt-form"><div id="shirt-style"><p><strong>Style:</strong></p><label><img src="public/img/shirts/dino.jpg" /><br><input type="radio" name="style" value="dino">All My Friends Are Dead</label><label><img src="public/img/shirts/down.jpg" /><br><input type="radio" name="style" value="down">Im Down</label><label><img src="public/img/shirts/locals.jpg" /><br><input type="radio" name="style" value="locals">Eat Locals</label></div><div id="shirt-size"><label id="size">Size:</label><br><select name="size"><option value="x-small">X-Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="x-large">X-Large</option></select></div><br><button type="submit">Purchase</button></form></div></div>';
    expect($(".container")).toContainHtml(formHTML);
  });

  it("should add a medium `I'm Down` t-shirt to the cart", function() {
    lonelyDino();

    $("input[value='down']").click(); // select "I'm Down" shirt
    $("select").val("lg");            // select size medium
    $("#add-to-cart").click();        // click "Add to Cart"

    var items = app.formView.model.get("items")
    var tShirt = items[0];
    expect(items).toBeArray();
    expect(tShirt).toBeObject();
    expect(tShirt.style).toEqual("down");
    expect(tShirt.size).toEqual("medium");
  });

});
