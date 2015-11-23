Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      items: [],
      subTotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0
    };
  },

  addShirtToCart: function(style, size) {
    this.addShirttoItems(style, size);
    this.updateSubTotal();
    this.updateShipping();
    this.addTaxes();
    this.updateTotal();
  },

  addShirttoItems: function(style, size){
    var arr = this.get('items');
    var shirt = {'size': size, 'style': style}
    arr.push(shirt)
    this.set('items', arr );
  },

  updateSubTotal: function(){
    var currentTotal = this.get('subTotal');
    currentTotal += 24.99;
    this.set('subTotal', currentTotal);

  }, 

  updateShipping: function(){
    var costofShipping = this.get('items').length > 0 ? 7.29 : 0.00
    this.set('shipping', costofShipping)
  },

  addTaxes: function(){
    var salestax = 0.08875
    var addtax = this.get('subTotal') * salestax;
    addtax = parseFloat(addtax.toFixed(2))
    this.set('taxes', addtax)
  },

  updateTotal: function(){
    var subTotal = this.get('subTotal')
    shipping = this.get('shipping')
    taxes = this.get('taxes')

    total = subTotal + shipping + taxes
    total = parseFloat(total.toFixed(2))
    this.set('total', total)
  }
});