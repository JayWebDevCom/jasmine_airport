describe('Airport', function(){

  var heathrow;
  var jet = jasmine.createSpy('jet');
  var weather = { stormy: function(){} }

  beforeEach(function(){
    heathrow = new Airport();
    });

  describe('knows its plane array', function() {
    it('is empty', function() {
      expect(heathrow.planesArray()).toEqual(0);
    });
  });

  describe('knows its plane array', function() {
    it('has a plane', function() {
      heathrow.land(jet);
      expect(heathrow.planesArray()).toEqual(1);
    });
  });

  describe('knows its plane array', function() {
    it('releases a plane', function() {
      heathrow.land(jet);
      spyOn(weather, 'stormy').and.returnValue(false);
      heathrow.takeOff(weather, jet);
      expect(heathrow.planesArray()).toEqual(0);
    });
  });
  
})


// spyOn(Math, 'random').and.returnValues(0.1, 0.2, 0.3, 0.4);
