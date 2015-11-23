Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      "items" : [],
      "subTotal" : 0,
      "shipping" : 0,
      "taxes" : 0,
      "total" : 0,
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
    items.push({"style":style, "size":size});
    var subTotal = (items.length * 24.99)
    var taxes = +(subTotal*.08875).toFixed(2)
    this.set("items", items);
    this.set("subTotal", subTotal);
    this.set("shipping", 7.29);
    this.set("taxes", taxes);
    this.set("total", +(subTotal+7.29+taxes).toFixed(2))
  }
});