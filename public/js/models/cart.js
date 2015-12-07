Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      items: [],
      subTotal: 0,
      total: 0,
      shipping: 0,
      taxes: 0
    };
  },
  addShirtToCart: function(style, size) {
    var items = this.get("items");
    var shirt = {
      type: 'shirt',
      style: style,
      size: size,
      price: 24.99,
      shipping: 7.29
    }
    this.updateShipping();
    items.push(shirt);
    this.updateSubtotal(shirt);
    this.updateTaxes();
    this.updateTotal();
  },
  updateSubtotal: function(item) {
    var price = item.price;
    subtotal = this.get("subTotal");
    this.set("subTotal", subtotal + price);
  },
  updateShipping: function() {
    var shipping = this.get("shipping")
    var shirts =  this.get("items").filter(function (item) {
                    return (item.type == 'shirt');
                  })
    if(shirts.length == 0){
      this.set("shipping", shipping += 7.29)
    }
  },
  updateTaxes: function() {
    var subtotal = this.get("subTotal");
    this.set("taxes", +(subtotal * .08875).toFixed(2))
  },
  updateTotal: function() {
    var total = this.get("total");
    var newTotal = this.get("subTotal") + this.get("shipping") + this.get("taxes");
    this.set("total", +newTotal.toFixed(2))
  }
});

