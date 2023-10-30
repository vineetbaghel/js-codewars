// DESCRIPTION:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


function add(a, b) {
    let carry = 0;
    let result = [];
    const maxLength = Math.max(a.length, b.length);
  
    for (let i = 0; i < maxLength; i++) {
      const digitA = parseInt(a[a.length - 1 - i] || 0);
      const digitB = parseInt(b[b.length - 1 - i] || 0);
  
      const sum = digitA + digitB + carry;
      carry = Math.floor(sum / 10);
      result.unshift(sum % 10);
    }
  
    if (carry > 0) {
      result.unshift(carry);
    }
  
    return result.join('');
  }
console.log("Answer is --->", add("123", "321"));

function add2(a, b) {
    var carry = 0, result = [],
        len = Math.max(a.length, b.length), i = len;
    while (i--) {
      var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
      carry = parseInt(sum / 10);
      result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    return result.join('');
  }
console.log("Answer is --->", add2("123", "321"));
