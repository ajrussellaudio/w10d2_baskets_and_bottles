var athlete = {
  hydration: 100,
  distanceCovered: 0,
  reset: function() {
    this.hydration = 100;
    this.distanceCovered = 0;
  },
  run: function(distance) {
    if(this.hydration > distance){
      this.distanceCovered += distance;
      this.hydration -= distance;
    } else {
      this.distanceCovered += this.hydration;
      this.hydration = 0;
    }
  },
  setHydration: function(hydration) {
    this.hydration = hydration;
  },
  drink: function(bottle) {
    this.hydration = bottle.drink();
  }
}

module.exports = athlete;