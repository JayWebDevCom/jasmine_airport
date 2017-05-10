describe('Airport', function(){

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

    it('receives a plane on #land', function() {
      spyOn(heathrow, 'stormy').and.returnValue(false)
      heathrow.land(jet);
      expect(heathrow.how_many_planes()).toEqual(1);
    });

    it('releases a plane on #takeOff', function() {
      spyOn(heathrow, 'stormy').and.returnValue(false)
      heathrow.land(jet);
      expect(heathrow.how_many_planes()).toEqual(1);
      heathrow.takeOff(jet);
      expect(heathrow.how_many_planes()).toEqual(0);
    });

  });

  describe('in stormy weather', function() {

    it('cannot land a plane', function() {
      spyOn(heathrow, 'stormy').and.returnValue(true)
      expect(function(){heathrow.land(jet)}).toThrow(TypeError('Stormy Weather!'));
      expect(heathrow.how_many_planes()).toEqual(0);
    });

    it('cannot takeOff planes', function() {
      spyOn(heathrow, 'stormy').and.returnValue(true)
      expect(function(){heathrow.takeOff(jet)}).toThrow(TypeError('Stormy Weather!'));
      expect(heathrow.how_many_planes()).toEqual(0);
    });

  });

});


// spyOn(Math, 'random').and.returnValues(0.1, 0.2, 0.3, 0.4);
