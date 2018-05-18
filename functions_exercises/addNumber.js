
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  
  if (numsLeft === 0 ) {
    completionCallback(sum);
  }
  
  if (numsLeft >0) {
    console.log(`Please provide a number`);
    let integer = parseInt(rl.input); 
    sum += integer; 
    numsLeft -= 1;
    completionCallback(sum);
    addNumbers( sum, numsLeft, completionCallback);
  }
}
