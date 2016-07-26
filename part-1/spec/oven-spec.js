describe("Oven", function() {
  var choco, peanut, sugar, lime;

  beforeEach(function() {
    // Define cookies
    choco =  new Cookie({type: "Chocolate Chip", remainingBakeTime: 60});
    peanut = new Cookie({type: "Peanut Butter", remainingBakeTime: 30})
    sugar = new Cookie({type: "Sugar", remainingBakeTime: 60});
    lime = new Cookie({type: "Lime", remainingBakeTime: 45})
    oreo = new Cookie({type: "Oreo", remainingBakeTime: 0})

    // Create oven that takes two arguments: cookies and a total capacity
    brickOven = new Oven([choco, peanut, sugar], 4);
  });

  describe("type", function() {
    it("is a Oven object", function() {
      expect(brickOven).toEqual(jasmine.any(Oven));
    });
  });

  describe("cookies", function() {
    it("has cookies", function() {
      expect(brickOven.cookies).toEqual([choco, peanut, sugar]);
    });
  });

  describe("adding a new cookie", function() {
    it("adds a new cookie to the oven", function() {
      brickOven.addCookie(lime);
      expect(brickOven.cookies).toEqual([choco, peanut, sugar, lime])
    });
  });

  describe("capacity control", function() {
    it("does not allow me to add cookies to a full oven", function() {
      brickOven.addCookie(lime);
      brickOven.addCookie(oreo); // the 5th cookie for an oven that can only hold 4 cookies
      expect(brickOven.cookies).toEqual([choco, peanut, sugar, lime]);
    });
  });

  describe("bake", function() {
    it("reduces the remainingBakeTime of each cookie by the bake time", function() {
      brickOven.bake(40);
      expect(brickOven.cookies).toEqual([choco, peanut, sugar])
      expect(choco.remainingBakeTime).toEqual(20);
      expect(peanut.remainingBakeTime).toEqual(0);
      expect(sugar.remainingBakeTime).toEqual(20);
    });
  });

  describe("done cookies", function() {
    it("returns all the cookies which are done cooking, indicated by remainingBakeTime being 0", function() {
      brickOven.addCookie(lime);
      brickOven.bake(45);
      expect(brickOven.readyCookies()).toEqual([peanut, lime])
    });
  });

  describe("uses prototype for functions", function() {
    it("uses its prototype to hold common functions for all Oven instances", function() {
      expect(Oven.prototype.hasOwnProperty("bake")).toBeTruthy();
      expect(Oven.prototype.hasOwnProperty("addCookie")).toBeTruthy();
      expect(Oven.prototype.hasOwnProperty("readyCookies")).toBeTruthy();
    });
  });
});
