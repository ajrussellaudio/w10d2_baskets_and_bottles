var athlete = require( "../athlete" );
var bottle = require( "../water_bottle" );
var assert = require( "assert" );

describe("Athlete", function() {

  beforeEach(function() {
    athlete.reset();
  })

  it("should have a hydration attribute", function() {
    assert.equal( 100, athlete.hydration );
  })

  it("should have a distance covered attribute", function() {
    assert.equal( 0, athlete.distanceCovered );
  })

  it("should be able to run", function() {
    athlete.run(10);
    assert.equal( 10, athlete.distanceCovered );
    assert.equal( 90, athlete.hydration );
  })

  it("should not move when running dehydrated", function() {
    athlete.setHydration(0);
    athlete.run(10);
    assert.equal( 0, athlete.distanceCovered );
  })

  it("should run as far as it can", function() {
    athlete.run(1000);
    assert.equal( 100, athlete.distanceCovered )
  })

  it("should be able to increase hydration by drinking", function() {
    bottle.fill();
    athlete.setHydration(0);
    athlete.drink( bottle );
    assert.equal( 10, athlete.hydration );
  })

})