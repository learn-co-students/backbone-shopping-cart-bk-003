Cart = Backbone.Model.extend({
  defaults: function() {
    return {
      items: [],
      subTotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0
        // here you'll put the default properties you'll want to use
        // for instance, if you want to default the number of wheels of the cart
        // and the cart's name (not that a cart having a name makes any sense) 
        // you could do:

      // wheelNum: 4,
      // name: "McCarty Cart Cart Jr."
    };
  },
  initialize: function() {
    this.on('change', this.changeHandler);
  },  

  addShirtToCart: function(style, size) {
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
    var a = this.get('items');

    a.push({
      type: 'shirt',
      style: style,
      size: size,
      price: 24.99
    });
    this.trigger("change");
  },


  changeHandler : function() {
    this.updateSubtotal();
    this.updateTaxes();
    this.updateShipping();
    this.updateTotal();
  },

  updateSubtotal: function() {
    var total = 0;
    this.get('items').forEach(function(item){
      total += item.price;
    });
    this.set('subTotal',total);
  },

  updateShipping: function(){
    this.set('shipping', 7.29);
  },  
  updateTotal: function(){
    this.set('total', +((+this.get('subTotal')) + (+this.get('shipping')) + (+this.get('taxes'))).toFixed(2));
  },

  updateTaxes: function(){
    this.set('taxes', +(this.get('subTotal')*.08875).toFixed(2));
  }
});
