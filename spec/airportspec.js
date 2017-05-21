describe('Airport', function(){

  var Airport = require('../src/Airport');

  var heathrow;
  var jet = {};

  beforeEach(function(){
    heathrow = new Airport();
    });

  describe('knows its plane hangar array', function() {

    it('is an array', function() {
      expect(heathrow._planes.constructor.name).toEqual('Array');
    });

    it('is empty', function() {
      expect(heathrow.how_many_planes()).toEqual(0);
    });

  });

  describe('knows its plane array', function() {

    beforeEach(function(){
      heathrow.stormy = function(){ return false}
      // spyOn(heathrow, 'stormy').and.returnValue(false)
      });

    it('receives a plane on #land', function() {
      heathrow.land(jet);
      expect(heathrow.how_many_planes()).toEqual(1);
    });

    it('releases a plane on #takeOff', function() {
      heathrow.land(jet);
      expect(heathrow.how_many_planes()).toEqual(1);
      heathrow.takeOff(jet);
      expect(heathrow.how_many_planes()).toEqual(0);
    });

  });

  describe('in stormy weather', function() {

    beforeEach(function(){
      heathrow.stormy = function(){ return true}
      // spyOn(heathrow, 'stormy').and.returnValue(true)
      });

    it('cannot land a plane', function() {
      expect(function(){
        heathrow.land(jet)
      }).toThrow(TypeError('Stormy Weather!'));
      expect(heathrow.how_many_planes()).toEqual(0);
    });

    it('cannot takeOff planes', function() {
      expect(function(){heathrow.takeOff(jet)}).toThrow(TypeError('Stormy Weather!'));
      expect(heathrow.how_many_planes()).toEqual(0);
    });

  });

});


// spyOn(Math, 'random').and.returnValues(0.1, 0.2, 0.3, 0.4);
