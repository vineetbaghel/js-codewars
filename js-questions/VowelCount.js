// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
const string3 = "Vowels Count Tests";
function getCount(str) {
  const st = str.split("");
  let count = 0;
  st.forEach((s) => {
    if ("aeiou".split("").includes(s)) {
      count++;
    }
  });
  return count;
}
console.log("Answer is --->", getCount(string3));
