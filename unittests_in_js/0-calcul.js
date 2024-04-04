function calculateNumber(operation, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  
  switch (operation) {
      case 'SUM':
          return roundedA + roundedB;
      case 'SUBTRACT':
          return roundedA - roundedB;
      case 'DIVIDE':
          if (roundedB === 0) {
              return 'Error';
          }
          return roundedA / roundedB;
      case 'SECOND_NUMBER_ROUNDED':
          return roundedB;
      default:
          throw new Error('Invalid operation');
  }
}

module.exports = calculateNumber;
