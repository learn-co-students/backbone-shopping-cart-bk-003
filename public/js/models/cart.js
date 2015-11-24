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
      subTotal: 0,
      total: 0,
      shipping: 0,
      taxes: 0
    };
  },
  addShirtToCart: function(style, size) {
    // this function takes two params
    // it should make a "shirt" object, add it to items
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
    var shirt = {style: style, size: size};
    this.get('items').push(shirt);
    var updatedItems = this.get('items');
    this.set('items', updatedItems);
    this.set('subTotal', this.get('items').length * 24.99);
    this.set('shipping', 7.29);
    this.set('taxes', Number(((this.get("subTotal") * 8.875)/100).toFixed(2)));
    this.set('total', Number((this.get("subTotal") + this.get("shipping") + this.get("taxes")).toFixed(2)));
  }
});