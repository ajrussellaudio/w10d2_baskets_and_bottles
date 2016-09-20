var waterBottle = {
  volume: 0,
  setVolume: function( volume ){
    this.volume = volume;
  },
  fill: function() {
    this.volume = 100;
  },
  drink: function() {
    var fluidOut;
    if(this.volume >= 10){
      fluidOut = 10;
      this.volume -= 10;
    } else {
      fluidOut = this.volume;
      this.empty();
    }
    return fluidOut;
  },
  empty: function() {
    this.volume = 0;
  }
}

module.exports = waterBottle;