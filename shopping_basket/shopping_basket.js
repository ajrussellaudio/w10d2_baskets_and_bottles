var shoppingBasket = {
  items: [],
  empty: function() {
    this.items = [];
  },
  count: function() {
    return this.items.length;
  },
  add: function(item) {
    this.items.push(item);
  },
  remove: function(item) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
  },
  subtotal: function() {
    var subtotal = 0;
    var bogofTracker = [];
    for( var i = 0; i < this.count(); i++ ) {
      var item = this.items[i];
      if( item.bogof ) {
        var index = bogofTracker.indexOf(item);
        if( index > -1 ) {
          bogofTracker.splice(index, 1);
        } else {
          bogofTracker.push(item);
          subtotal += item.price;
        }
      } else {
        subtotal += item.price;
      }
    }
    return subtotal;
  },
  total: function() {
    var subtotal = this.subtotal();
    if(subtotal < 20) return subtotal;
    return (subtotal * 0.9);
  }
}

module.exports = shoppingBasket;
