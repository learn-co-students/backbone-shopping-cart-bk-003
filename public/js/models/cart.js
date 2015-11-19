Cart = Backbone.Model.extend({
  defaults: function() { 
    return {

      // here you'll put the default properties you'll want to use
      // for instance, if you want to default the number of wheels of the cart
      // and the cart's name (not that a cart having a name makes any sense) 
      // you could do:
      items: [],
      subTotal: 0,
      shipping: 0,
      taxes: 0,
      total: 0
      // wheelNum: 4,
      // name: "McCarty Cart Cart Jr."
    };
  },
  addShirtToCart: function(style, size) {
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
    var shirt = {
      style: style,
      size: size
    }
    var items = this.get('items');
    items.push(shirt)
    this.set({subTotal: this.get('subTotal')+24.99, shipping: 7.29})
    
    this.set({taxes: Math.round(8.875*this.get('subTotal'))/100})
    this.set({total: Math.round((this.get('subTotal')+this.get('shipping')+this.get('taxes'))*100)/100})
  }
});