// DESCRIPTION:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    if (n < 12) {
      return -1;
    }
  
    const digitsArr = Array.from(String(n), Number);
  
    let i = digitsArr.length - 1;
  
    // Find the first digit (from right to left) that is smaller than the digit to its right
    while (i > 0 && digitsArr[i] <= digitsArr[i - 1]) {
      i--;
    }
  
    // If no such digit is found, there's no next bigger number
    if (i === 0) {
      return -1;
    }
  
    // Find the smallest digit to the right of i that is larger than digitsArr[i-1]
    let j = digitsArr.length - 1;
    while (digitsArr[j] <= digitsArr[i - 1]) {
      j--;
    }
  
    // Swap digitsArr[i-1] and digitsArr[j]
    [digitsArr[i - 1], digitsArr[j]] = [digitsArr[j], digitsArr[i - 1]];
  
    // Sort the digits to the right of i-1 in ascending order to get the smallest next number
    const rightPart = digitsArr.splice(i).sort((a, b) => a - b);
  
    // Concatenate the arrays and convert back to a number
    const result = parseInt([...digitsArr, ...rightPart].join(''), 10);
  
    return result;
  }
console.log("Answer is --->", nextBigger(2071));


function nextBigger2(n) {
    if (n === reverseSortDigits(n)) return -1
  
    let nSorted = sortDigits(n)
    
    while (true) {
      n += 1
      if (sortDigits(n) === nSorted) return n
    }
  }
  
  function splitDigits(d) {
    return String(d).split('')
  }
  
  function sortDigits(d) {
    return Number(splitDigits(d).sort().join(''))
  }
  
  function reverseSortDigits(d) {
    return Number(splitDigits(d).sort().reverse().join(''))
  }
console.log("Answer is --->", nextBigger2(2071));
