function Plane(){
  this._status = 'On air';
};

Plane.prototype.takeOff = function () {
  this._status = 'On air';
};

Plane.prototype.land = function () {
  this._status = 'On ground';
};
