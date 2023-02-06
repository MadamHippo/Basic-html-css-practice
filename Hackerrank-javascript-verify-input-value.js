/*
Verify Input ValueIn this challenge, the task is to implement the function makeInputVerifier such that:it takes 2 integer arguments, minimum and maximum. returns a new function that we'll call verify.the function verify takes a single integer argument, inputValue, and does the following:If inputValue is less than minimum, it returns 'Input is less than minimum value'.If inputValue is greater than or equal to minimum and less than or equal to maximum, it returns 'Input is in range'.If inputValue is greater than maximum, it returns 'Input is more than maximum value'. For example, calling makeInputVerifier(3, 10) must return a function verify, such that calling verify(5) returns 'Input in range' because 5 > 3 (the minimum) and 5 < 10 (the maximum). Your implementation of the function will be tested by a provided code stub on several input files. Each input file contains 3 integer parameters for the function calls. The makeInputVerifier function will be called with the first and second integer parameters (minimum and maximum respectively), and then the returned function will be called with the third parameter. The result of that latter call will be printed to the standard output by the provided code.
*/

function makeInputVerifier(minimum, maximum) {
  return function verify(inputValue) {
    if (inputValue < minimum) {
      return 'Input is less than minimum value';
    }
    if (inputValue >= minimum && inputValue <= maximum) {
      return 'Input is in range';
    }
    if (inputValue > maximum) {
      return 'Input is more than maximum value';
    }
  };
}
