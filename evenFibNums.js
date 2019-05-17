/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var pass = false
  var x = 1;
  var y = 1;
  console.log(y);
  // do your work here
  do{
    console.log(x);
    let z = x + y;
    y = x;
    x = z;
    if(sum += z > maxFibValue){
      pass = true;
    } else{
      if(x%2){
        sum =+ x;
      }
    }
  } while(pass);

  return sum;
} 

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};