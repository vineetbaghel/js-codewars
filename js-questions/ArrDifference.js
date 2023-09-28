// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
  b.forEach((num, i) => {
    a = a.filter((n) => n !== num);
  });
  return a;
}

console.log("Answer is --->", arrayDiff([1, 2], [1]));

function array_diff1(a, b) {
  return a.filter((e) => !b.includes(e));
}
console.log("Answer is --->", array_diff1([1, 2], []));
