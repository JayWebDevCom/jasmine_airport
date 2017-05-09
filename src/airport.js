function Airport () {
  this._planes = [];
  this._max_planes = 25;
};

Airport.prototype.land = function(plane){
  this._planes.push(plane);
  plane._status = 'On ground';
}

Airport.prototype.takeOff = function(w, jet){
  // var w = new Weather();
  if ( w.stormy() === false ){
    jet.takeOff;
    this._planes.pop(jet);
  }
}

Airport.prototype.planesArray = function(){
  return this._planes.length;
}

Airport.prototype.how_many_planes = function(){
  return this._planes.length;
}
