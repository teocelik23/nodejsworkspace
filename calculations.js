class Calculations {
    static calculateHypotenuse(sideA, sideB) {
      return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    }
  }
  
  module.exports = Calculations;