var basket = require( "../shopping_basket");
var assert = require( "assert" );

describe("Shopping Basket", function() {

  var beans = {
    name: "beans",
    price: 0.85
  };
  var milk = {
    name: "milk",
    price: 0.49
  };
  var whisky = {
    name: "whisky",
    price: 21.00
  };
  var jaffaCakes = {
    name: "jaffa cakes",
    price: 1.00,
    bogof: true
  };

  beforeEach(function() {
    basket.empty();
  })

  it("should be empty", function() {
    assert.equal( 0, basket.count() );
  })

  it("should be able to add items", function() {
    basket.add(beans);
    assert.equal( 1, basket.count() );
  })

  it("should be able to have multiple items", function() {
    basket.add(beans);
    basket.add(beans);
    assert.equal( 2, basket.count() );
  })

  it("should be able to remove items", function() {
    basket.add(beans);
    basket.add(milk);
    basket.remove(beans);
    assert.equal( 1, basket.count() );
  })

  it("should have total value", function() {
    basket.add(beans);
    basket.add(milk);
    assert.equal( 1.34, basket.subtotal().toFixed(2) );
  })

  it("should give 10% discount if value is over £20", function() {
    basket.add(whisky);
    assert.equal( (21.0 * 0.9), basket.total() );
  })

  it("should give BOGOF dicount for such items", function() {
    basket.add(milk);
    basket.add(jaffaCakes);
    basket.add(jaffaCakes);
    basket.add(jaffaCakes);
    basket.add(jaffaCakes);
    assert.equal( 2.49, basket.subtotal().toFixed(2) );
  })

})
