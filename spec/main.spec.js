'use strict';

describe(".Cart", function() {
  var cart;
  beforeEach(function() {
    cart = new Cart;
  });

  it("inherits from Backbone correctly", function() {
    expect(typeof cart).toEqual("object");
    expect(cart.set("didYouInherit", "correctly?")).toBeDefined();
  });

  it("defaults to have a property items pointing to an empty array", function() {
    expect(cart.get("items")).toBeDefined();
    expect(cart.get("items")).toEqual([]);
  });

  it("defaults to have four properties: subTotal, shipping, taxes, total, all pointing to zero", function() {
    expect(cart.get("subTotal")).toEqual(0);
    expect(cart.get("shipping")).toEqual(0);
    expect(cart.get("taxes")).toEqual(0);
    expect(cart.get("total")).toEqual(0);
  });

  describe("#addShirtToCart", function() {
    it("accepts two parameters, style and size, and adds them as an object to items", function() {
      cart.addShirtToCart("locals", "large");
      var items = cart.get("items");
      expect(items.length).toEqual(1);
      var shirt = items[0];
      expect(shirt.style).toEqual("locals");
      expect(shirt.size).toEqual("large");
    });  
  });
});

describe("#lonelyDino", function() {
  it("instantiates a new cart, passes the cart to the view, attaches the view to the app", function() {
    lonelyDino();
    expect(typeof app).toEqual("object");
    expect(typeof app.formView).toEqual("object");
    expect(typeof app.formView.model).toEqual("object");
    expect(typeof app.formView.model.get("items")).toEqual([]);
    expect(typeof app.formView.model.get("subTotal")).toEqual(0.00);
  });
  
  it("appends the html to the body of the page", function() {
    lonelyDino();
    var html = '<div class="container"><div class="jumbotron"><div class="row"><div class="col-md-4"><img src="public/img/logos/logo.png" /></div><div class="col-md-8"><h1>Lonely Dinosaur Designs</h1></div></div></div><div class="row"><div class="col-md-8 col-md-offset-2"><h2>Select a T-Shirt</h2><form id="shirt-form"><div id="shirt-style"><p><strong>Style:</strong></p><label><img src="public/img/shirts/dino.jpg" /><br><input type="radio" name="style" value="dino">\nAll My Friends Are Dead</label><label><img src="public/img/shirts/down.jpg" /><br><input type="radio" name="style" value="down">\nI\'m Down</label><label><img src="public/img/shirts/locals.jpg" /><br><input type="radio" name="style" value="locals">\nEat Locals</label></div><div id="shirt-size"><label id="size">Size:</label><br><select name="size"><option value="x-small">X-Small</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option><option value="x-large">X-Large</option></select></div><div id="button-container"><button type="submit">Purchase</button></div></form></div></div></div>';
    expect($("body")).toContainHtml(html);
  });
});


describe("Integration Test", function() {
  it("adds a medium `down` t-shirt to the cart, update the subTotal, shipping, taxes, and price", function() {
    lonelyDino();
    $("input[value='down']").click(); // select "I'm Down" shirt
    $("select").val("medium");       // select size medium
    $("#add-to-cart").click();      // click "Add to Cart"

    var cart = app.formView.model;
    expect(cart.get("subTotal")).toEqual(24.99);
    expect(cart.get("shipping")).toEqual(7.29);
    expect(cart.get("taxes")).toEqual(2.22);
    expect(cart.get("total")).toEqual(34.50);
    
    var items = cart.get("items");
    expect(items).toBeArray();
    
    var tShirt = items[0];
    expect(tShirt).toBeObject();
    expect(tShirt.style).toEqual("down");
    expect(tShirt.size).toEqual("medium");
  });

  it("adds medium `down` t-shirt, then large `locals` t-shirt to the cart, updates the subTotal, shipping, taxes, and price", function() {
    lonelyDino();
    $("input[value='down']").click();      // select "I'm Down" shirt
    $("select").val("medium");            // select size medium
    $("#add-to-cart").click();           // click "Add to Cart"
    $("input[value='locals']").click(); // select "Eat Locals" shirt
    $("select").val("large");          // select size large
    $("#add-to-cart").click();        // click "Add to Cart"

    var cart = app.formView.model;
    expect(cart.get("subTotal")).toEqual(49.98);
    expect(cart.get("shipping")).toEqual(7.29);
    expect(cart.get("taxes")).toEqual(4.44);
    expect(cart.get("total")).toEqual(61.71);
    
    var items = cart.get("items");
    expect(items).toBeArray();
    
    var tShirt = items[0];
    expect(tShirt).toBeObject();
    expect(tShirt.style).toEqual("down");
    expect(tShirt.size).toEqual("medium");
  });
});
