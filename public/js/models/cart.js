Cart = Backbone.Model.extend({  
 defaults: function() {      return {
    items : [],
    subTotal : 0,
    shipping : 0,
    taxes : 0,
    total : 0
      // here you'll put the default properties you'll want to use
      // for instance, if you want to default the number of wheels of the cart
      // and the cart's name (not that a cart having a name makes any sense) 
      // you could do:

      // wheelNum: 4,
      // name: "McCarty Cart Cart Jr."
    };
  },
  addShirtToCart: function(style, size) {
    shirt = {};
    shirt["style"] = style;
    shirt["size"] = size;
    
    cartItems = this.get("items");
    cartItems.push(shirt);
    this.set("items", cartItems);
    oldTotal = this.get("subTotal");
    oldTotal += 24.99;
    this.set("subTotal", oldTotal);
    this.set("shipping", 7.29);
    var salesTax = 0.08875;
    var tax = this.get("subTotal") * salesTax;
    this.set("taxes", parseFloat(tax.toFixed(2)));
    total = this.get("shipping") + this.get("taxes") + this.get("subTotal")
    
    this.set("total",parseFloat(total.toFixed(2)) )
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
  }
});