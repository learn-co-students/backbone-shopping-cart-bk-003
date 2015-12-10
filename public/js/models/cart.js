
Cart = Backbone.Model.extend({
  defaults: function() {
    return {
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
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
    this.addShirtToItems(style, size);
    this.updateSubTotal();
    this.updateShipping();
    this.addTaxes();
    this.updateTotal()
  },

  addShirtToItems: function(style, size) {
    var arr = this.get("items");
    var shirt = {style : style, size : size};
    arr.push(shirt);
    this.set("items", arr)
  },

  updateSubTotal: function() {
    var currentTotal = this.get("subTotal");
    currentTotal += 24.99;
    this.set("subTotal", currentTotal)
  },

  updateShipping: function() {
    var shippingCost = this.get("items").length > 0 ? 7.29 : 0.00;
    var addTax = this.set("shipping", shippingCost);
  },

  addTaxes: function() {
    var taxRate = 0.08875;
    var addTax = this.get("subTotal") * taxRate;
    addTax = parseFloat(addTax.toFixed(2))
    this.set("taxes", addTax)
  },

  updateTotal: function() {
    var subTotal = this.get("subTotal"),
        shipping = this.get("shipping"),
        taxes = this.get("taxes"),
        total = subTotal + shipping + taxes,
        total = parseFloat(total.toFixed(2))
        this.set("total", total)
  },
});
