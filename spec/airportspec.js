describe('Airport', function(){

  var heathrow;
  var jet = jasmine.createSpy('jet');



  beforeEach(function(){
    heathrow = new Airport();

    w = {
      stormy: function(){}
    }
    spyOn(w, 'stormy').and.returnValue(false);
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

      heathrow.takeOff(w, jet);



      expect(heathrow.planesArray()).toEqual(0);
    });
  });

})


// spyOn(Math, 'random').and.returnValues(0.1, 0.2, 0.3, 0.4);
