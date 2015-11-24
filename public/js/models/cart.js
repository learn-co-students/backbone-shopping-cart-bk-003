Cart = Backbone.Model.extend({
  defaults: function() { 
    return {
      items : [],
      subTotal : 0,
      taxes : 0,
      shipping : 0,
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
    this.addShirtToItems(size, style);
    this.updateSubtotal();
    this.updateShipping();
    this.updateTaxes();
    this.updateTotal();
    // it should then update the subTotal, shipping cost, taxes
    
    // it should then use these updated values to update the total
  },
  addShirtToItems: function (size, style) {
    var temp_arr = this.get('items');
    var shirt = {'size' : size, 'style' : style};
    temp_arr.push(shirt);
    // this.set('items', temp_arr);
  },
  updateSubtotal: function () {
    // each shirt is $24.99
    // get current total and add to it
    this.set('subTotal', (this.get('subTotal') + 24.99) );
  },
  updateShipping: function () {
    if (this.get('items').length >= 1) {
      this.set('shipping', 7.29);
    }; 
  },
  updateTaxes: function (){
    this.set('taxes', (Math.ceil(this.get('subTotal')*.08875*100 ))/100 );
  },
  updateTotal: function (){
    this.set('total', Math.ceil((this.get('subTotal') + this.get('taxes') + this.get('shipping'))*100)/100 )
  }
});