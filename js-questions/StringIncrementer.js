// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(strng) {
  let arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (arrNum.some((val) => strng.includes(val))) {
    let num = "";
    let arrstr = strng.split("");

    while (arrstr.length > 0 && arrNum.includes(arrstr[arrstr.length - 1])) {
      num = arrstr.pop() + num;
    }
    const incrementedNum = (parseInt(num) + 1).toString();
    const paddedNum = incrementedNum.padStart(num.length, "0");
    return arrstr.join("") + paddedNum;
  } else {
    return strng + "1";
  }
}
console.log("Answer is --->", incrementString("foo12"));
