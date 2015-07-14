Cart = Backbone.Model.extend({
  defaults: function() { 
    return {

      // here you'll put the default properties you'll want to use
      // for instance, if you want to default the number of wheels of the cart
      // and the cart's name (not that a cart having a name makes any sense) 
      // you could do:

      // wheelNum: 4,
      // name: "McCarty Cart Cart Jr."

      items: [],
      subTotal: 0.00,
      shipping: 0.00,
      taxes: 0.00,
      total: 0.00
    };
  },
  addShirtToCart: function(style, size) {
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total

    this.addShirtToItems(style, size);
    this.adjustSubTotal();
    this.adjustTaxes();
    this.adjustShipping();
    this.adjustTotal();
  },
  addShirtToItems: function(style, size) {
    var tempItems = this.get("items");
    tempItems.push({"size": size, "style": style});
    this.set("items", tempItems);
  },
  adjustTaxes: function() {
    var salesTax = 0.08875;
    var tax = this.get("subTotal") * salesTax;
    var roundedTax = Math.ceil10(tax, -2);
    this.set("taxes", roundedTax);
  },
  adjustSubTotal: function() {
    this.set("subTotal", this.get("items").length * 24.99);
  }, 
  adjustShipping: function() {
    var cost = this.get("items").length > 0 ? 7.29 : 0.00;
    this.set("shipping", cost);
  },
  adjustTotal: function() {
    var total = this.get("subTotal") + this.get("shipping") + this.get("taxes");
    var rounded = Math.round10(total, -2)
    this.set("total", rounded);
  }
});