Cart = Backbone.Model.extend({
  defaults: {
    items: [],
    subTotal: 0.00,
    shipping: 0.00,
    taxes: 0.00,
    total: 0.00
  },
  addShirtToCart: function(style, size) {
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