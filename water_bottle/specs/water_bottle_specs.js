var bottle = require( "../water_bottle" );
var assert = require( "assert" );

describe("Water Bottle", function() {

  beforeEach(function() {
    bottle.empty();
  })

  it("should be empty", function(){
    assert.equal( 0, bottle.volume );
  })

  it("should go to 100 when filled", function() {
    bottle.fill();
    assert.equal( 100, bottle.volume )
  })

  it("should go down by 10 when drank", function() {
    bottle.fill();
    bottle.drink();
    assert.equal( 90, bottle.volume );
  })

  it("should go to 0 when emptied", function() {
    bottle.fill();
    bottle.empty();
    assert.equal( 0, bottle.volume );
  })

  it("should not be able to go below 0", function() {
    bottle.setVolume(5);
    bottle.drink();
    assert.equal( 0, bottle.volume );
  })

})