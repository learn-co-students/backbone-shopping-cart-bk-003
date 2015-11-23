Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      "items" : [],
      "subTotal" : 0,
      "shipping" : 0,
      "taxes" : 0,
      "total" : 0
      // here you'll put the default properties you'll want to use
      // for instance, if you want to default the number of wheels of the cart
      // and the cart's name (not that a cart having a name makes any sense) 
      // you could do:

      // wheelNum: 4,
      // name: "McCarty Cart Cart Jr."
    };
  },
  addShirtToCart: function(style, size) {
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total

    items = this.get("items");
    items.push({"style": style, "size": size});
    this.set("items", items);

    subTotal = this.get("subTotal");
    subTotal += 24.99;
    this.set("subTotal", subTotal);

    this.set("shipping", 7.29);

    pretax = subTotal * 0.08875;

    tax = +pretax.toFixed(2);

    this.set("taxes", tax);

    total = subTotal + 7.29 + tax;

    this.set("total", +total.toFixed(2));
  }
});