// DESCRIPTION:
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
  // Code me to return true or false
  let num = value;
  const numDigits = num.toString().length;
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += Math.pow(digit, numDigits);
    num = Math.floor(num / 10);
  }

  return sum === value;
}
console.log("Answer is --->", narcissistic(153));
