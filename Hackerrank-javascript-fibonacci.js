/*
Javascript solution code for "The Fibonacci numbers are a sequence of numbers where each number after the first two is a sum of the prior two. As an illustration, here is a short sequence given starting values of (0, 1): Fibonacci series = (0, 1, 1, 2, 3, 5, 8, 13). Given an integer n, calculate the first n numbers in the Fibonacci sequence given starting elements of (0, 1). Return an array of n integers, including the given (0, 1) in the sequence."
*/


function fibonacci(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      result.push(i);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}

/*
This solution uses a for loop to iterate n times and uses an if else statement to check the value of i. If i is less than or equal to 1, then i is pushed into the result array. If i is greater than 1, then the sum of the two previous values in the result array is pushed into the result array. The result array is then returned as the output.
*/
