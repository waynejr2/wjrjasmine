class Calculator{

    add(a, b) {
        return a + b;
    }
	
	minus(a, b) {
		return a - b;
	}
}

describe('t', function() {
	
	var calculate = new Calculator;
	
	it('should be able to add two numbers', function() {
		console.log(calculate.add(1, 3));
		expect(calculate.add(1, 3)).toBe(4);
	});
	
	it('should be able to subtract two numbers', function() {
		console.log(calculate.minus(5, 4));
		expect(calculate.minus(5, 4)).toBe(1);
	});
	
});