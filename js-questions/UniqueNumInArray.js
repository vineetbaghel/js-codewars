// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const arrayFindUnique = [1, 2, 1, 1, 1, 1];
function findUniq(arr) {
  // do magic
  let val = null;
  for (let i = 0; i < 3; i++) {
    if (val === arr[i]) {
      break;
    }
    val = arr[i];
  }
  val = arr.filter((x) => x !== val);
  return val[0];
}
console.log("Answer is --->", findUniq(arrayFindUnique));
function findUniq1(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
console.log("Answer is --->", findUniq1(arrayFindUnique));
