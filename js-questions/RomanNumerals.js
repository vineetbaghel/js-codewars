// DESCRIPTION:
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.


function solution(num){
    // convert the number to a roman numeral
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let result = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= values[i]) {
        result += romanNumerals[i];
        num -= values[i];
      }
    }
  
    return result;
  }
console.log("Answer is --->", solution(999));
