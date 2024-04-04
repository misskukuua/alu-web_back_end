const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        // Test case 1
        assert.equal(calculateNumber('SUM', 1.4, 2.6), 4);
        
        // Test case 2
        assert.equal(calculateNumber('SUM', 2.1, 3.8), 6);
        
        // Test case 3
        assert.equal(calculateNumber('SUM', 1.49, 2.51), 4);
        
        // Test case 4
        assert.equal(calculateNumber('SUM', 0, 0), 0);
    });

    it('should return the second number rounded', function() {
        // Test case 1
        assert.equal(calculateNumber('SECOND_NUMBER_ROUNDED', 1.4, 4.5), 5);
        
        // Test case 2
        assert.equal(calculateNumber('SECOND_NUMBER_ROUNDED', 2.1, 3.8), 4);
        
        // Test case 3
        assert.equal(calculateNumber('SECOND_NUMBER_ROUNDED', 1.49, 2.51), 3);
        
        // Test case 4
        assert.equal(calculateNumber('SECOND_NUMBER_ROUNDED', 0, 0), 0);
    });
});
