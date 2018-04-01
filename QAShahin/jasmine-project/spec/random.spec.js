class Dice{
	
	constructor(random) {
		this.random = random || Math.random;
	}

	d20() {
		var max = 20;
		var min = 1;
		return Math.floor(this.random() * (max - min)) + min;
	}
	
    add(a, b) {
        return a + b;
    }
	
	minus(a, b) {
		return a - b;
	}
}

var rng0 = function() {
	return 0;
}

var rngpoint5 = function() {
	return 0.5;
}

var rng1 = function() {
	return 1;
}

describe('Testing Dice: ', function() {
	
	var die = new Dice();
	console.log("die is " + die.d20());
	
	var die0 = new Dice(rng0);
	console.log("die0 is " + die0.d20());
	
	var diepoint5 = new Dice(rngpoint5);
	console.log("diepoint5 is " + diepoint5.d20());
	
	var die1 = new Dice(rng1);
	console.log("die1 is " + die1.d20());

	describe('d20 test suite: ', function() {
		it('random equals zero result should be the minimum which is 1', function() {
			var d20 = new Dice(rng0);
			
			expect(d20.d20()).toBe(1);
		});
		it('random equals 1 result should be the maximum which is 20', function() {
			var d20 = new Dice(rng1);
			
			expect(d20.d20()).toBe(20);
		});
		
		it('random equals 0.5 result should be 10', function() {
			var d20 = new Dice(rngpoint5);
			
			expect(d20.d20()).toBe(10);
		});
		
		it('random d20 within range 1 to 20', function() {
			var d20 = new Dice();
			var result = d20.d20();
			
			expect(result).toBeGreaterThanOrEqual(1);
			expect(result).toBeLessThanOrEqual(20);
		});
	});
	
	
});