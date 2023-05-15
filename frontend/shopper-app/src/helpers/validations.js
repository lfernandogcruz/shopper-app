const validations = {
  financial: (cost, newPrice) => {
    const response = {
      status: false,
      message: 'New price must be greater than cost',
    };
    if (newPrice > cost) {
      response.status = true;
      response.message = 'New price is valid';
    }
    return response;
  },
  marketing: (currPrice, newPrice) => {
    const response = {
      status: false,
      message: 'New selling price must be within 10% of current price',
    };
    const minRange = currPrice * 0.9;
    const maxRange = currPrice * 1.1;
    if (newPrice >= minRange && newPrice <= maxRange) {
      response.status = true;
      response.message = 'New price is valid';
    }
    return response;
  },
};

export default validations;
