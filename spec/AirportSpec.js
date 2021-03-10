describe("Airport", function() {
  var heathrow;
  
  beforeEach(function() {
    heathrow = new Airport();
  });

  it('has a hangar', function(){
    expect(heathrow.hangar).toBeDefined()
  })
  it('has a default capacity of 10 plane', function(){
    expect(heathrow.capacity).toEqual(10)
  })

  describe("overrideCapacity", function() {
    it("change the hangar capacity to the given one", function() {
      heathrow.overrideCapacity(15);
      expect(heathrow.capacity).toEqual(15)
    })
  })

  describe("isAtCapacity", function() {
    it("returns true if hangar is at capacity", function() {
      heathrow.overrideCapacity(2);
      heathrow.hangar.push('boeing747', 'boeing736');
      expect(heathrow.isAtCapacity()).toBe(true)
    })
  })

  describe("isPlanePresent", function() {
    it("returns true if a specific plane is in the hangar", function() {
      heathrow.hangar.push('boeing747');
      expect(heathrow.isPlanePresent()).toBe(true);
    })
  })
});