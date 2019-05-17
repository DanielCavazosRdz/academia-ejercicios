/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  if(digits === 2){
    for(let x = 10; x < 100; x++){
      for(let y = 10; y < 100; y++){
          let Number = x * y;
          let reverseNumber = Number.toString().split('').reverse().join('');
          if(Number === parseInt(reverseNumber) && Number > palindromeNumber){
            factor_0 = x;
            factor_1 = y;
            palindromeNumber = Number;
          }
      }
    } 
  }

  if(digits === 3){
    for(let x = 100; x < 1000; x++){
      for(let y = 100; y < 1000; y++){
          let Number = x * y;
          let reverseNumber = Number.toString().split('').reverse().join('');
          if(Number === parseInt(reverseNumber) && Number > palindromeNumber){
            factor_0 = x;
            factor_1 = y;
            palindromeNumber = Number;
          }
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};