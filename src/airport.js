function Airport () {
  this._planes = [];
  this._max_planes = 25;
};

Airport.prototype.stormy = function(){
  var weather = new Weather();
  return weather.stormy();
}

Airport.prototype.land = function(jet){
  if ( this.stormy() === false ){
  jet.takeOff;
  this._planes.push(jet);
}
else {
  throw new TypeError("Stormy Weather!");
}
  jet._status = 'On ground';
}

Airport.prototype.takeOff = function(jet){
  if ( this.stormy() === false ){
    jet.takeOff;
    this._planes.pop(jet);
  }
  else {
    throw new TypeError("Stormy Weather!");
  }
}

Airport.prototype.how_many_planes = function(){
  return this._planes.length;
}
