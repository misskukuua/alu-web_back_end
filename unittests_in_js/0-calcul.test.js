const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        // Test case 1
        assert.equal(calculateNumber(1.4, 2.6), 4);
        
        // Test case 2
        assert.equal(calculateNumber(2.1, 3.8), 6);
        
        // Test case 3
        assert.equal(calculateNumber(1.49, 2.51), 4);
        
        // Test case 4
        assert.equal(calculateNumber(0, 0), 0);
    });
});
