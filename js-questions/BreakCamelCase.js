// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let result =[]
  let newStr =''
      for(let i=0; i<alphabet.length; i++){
          if(string.includes(alphabet[i])){
            result.push(alphabet[i])
          }
      }
      let loopIn 
      for(let j=0; j<string.length; j++){
          loopIn = false
          for(let k=0; k<result.length; k++){
               if(string[j] === result[k] ){
              newStr = newStr +' '+string[j]
              loopIn = true
          }
          }
          if(!loopIn){
          newStr += string[j]
          }
      }
      return newStr
}
console.log("Answer is --->", solution("camelCasing"));

function solution2(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }
console.log("Answer is --->", solution2("camelCasing"));
