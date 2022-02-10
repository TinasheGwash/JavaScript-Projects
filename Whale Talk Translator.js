// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
let input = "turpentine and turtles"; 
const vowels = ["a", "e", "i", "o", "u"]; 
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log('inputIndex is '+ inputIndex);
  for (let vowelIndex= 0; vowelIndex < vowels.length; vowelIndex++) {
    // console.log('vowelIndex is '+ vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      if (input[inputIndex] === 'e') {
        resultArray.push('ee'); 
      } 
      else if (input[inputIndex] === 'u') {
        resultArray.push('uu'); 
      }
      else {
        resultArray.push(input[inputIndex]); 
      }
    }
  }
}

console.log(resultArray.join("").toUpperCase());