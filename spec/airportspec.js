describe('Airport', function(){

  var heathrow;
  var jet = {};

  beforeEach(function(){
    heathrow = new Airport();
    spyOn(heathrow, 'stormy').and.returnValue(false)
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

});


// spyOn(Math, 'random').and.returnValues(0.1, 0.2, 0.3, 0.4);
