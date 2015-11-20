Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      items: [],
      subTotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0,
    };
  },
  addShirtToCart: function(style, size) {
    var items = this.get('items')
    items.push({style: style, size: size})
    var subTotal = this.get('subTotal') + 24.99
    var shipping = 7.29
    var taxes = Math.round(subTotal * 0.08875 * 100) / 100
    var total =  Math.round((subTotal + shipping + taxes) * 100) / 100
    
    this.set({
      items: items, 
      subTotal: subTotal, 
      shipping: shipping, 
      taxes: taxes,
      total: total
    })
  }
});