// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const str = "zpzpAAppxxoo";

const XO1 = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};
console.log("Answer --->", XO1(str));

function XO2(str) {
  const arr = str.toLowerCase().split("");
  let xcount = 0;
  let ocount = 0;
  arr.forEach((data) => {
    if (data === "x") {
      xcount++;
    }
    if (data === "o") {
      ocount++;
    }
  });
  if (xcount === ocount) {
    return true;
  }
  return false;
}
console.log("Answer --->", XO2(str));

function XO3(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
console.log("Answer --->", XO3(str));
