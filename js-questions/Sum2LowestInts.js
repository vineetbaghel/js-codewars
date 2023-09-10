// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const arr = [82, 3, 45, 12, 7];

function sumTwoSmallestNumbers(numbers) {
  if (numbers.length < 2) {
    return numbers[0];
  }
  let minNum1 = Number.MAX_SAFE_INTEGER;
  let minNum2 = Number.MAX_SAFE_INTEGER;
  numbers.forEach((num) => {
    if (num < minNum1) {
      minNum2 = minNum1;
      minNum1 = num;
    } else if (num < minNum2) {
      minNum2 = num;
    }
  });
  return minNum1 + minNum2;
}
console.log("Answer is --->", sumTwoSmallestNumbers(arr));
