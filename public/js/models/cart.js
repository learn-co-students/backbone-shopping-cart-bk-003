Cart = Backbone.Model.extend({
  defaults: function() { 
    return {

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
    // it should then update the subTotal, shipping cost, taxes
    // it should then use these updated values to update the total
  }
});