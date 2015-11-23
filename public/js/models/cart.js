Cart = Backbone.Model.extend({
  events: {
    "change": "updateInfo"
  },
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
      shipping: 0,
      taxes: 0,
      total: 0
    };
  },
  addShirtToCart: function(style, size) {
    var shirt = {style: style, size: size}
    // this function takes two params
    // it should make a "shirt" object, add it to items
    this.get('items').push(shirt);
    var updatedItems = this.get('items');
    this.set('items', updatedItems);
    // it should then update the subTotal, shipping cost, taxes
    this.set('subTotal', this.get("items").length * 24.99);
    this.set('shipping', 7.29);
    this.set('taxes', parseFloat((this.get('subTotal')*.08875).toFixed(2)));
    // it should then use these updated values to update the total
    var taxForTotal = ((this.get('items').length * 24.99) * .08875)
    var total = parseFloat(((this.get('items').length * 24.99) + taxForTotal + this.get('shipping')).toFixed(2));
    this.set('total', total)
  }

});
