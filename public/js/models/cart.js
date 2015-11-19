Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      items : new Array,
      subTotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0
    };
  },
  addShirtToCart: function(style, size) {
    function Shirt(style, size){
      this.style = style
      this.size = size
    };
    var newShirt = new Shirt(style, size);
    this.attributes.items.push(newShirt);
    this.attributes.subTotal += 24.99;
    this.attributes.shipping = 7.29;
    this.attributes.taxes = parseFloat((this.attributes.subTotal * .08875).toFixed(2));
    this.attributes.total = parseFloat((this.attributes.subTotal + this.attributes.shipping + this.attributes.taxes).toFixed(2));
  }
});