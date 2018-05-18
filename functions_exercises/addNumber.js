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
    rl.question(`Please provide a number `, function(res) {
    let integer = parseInt(res); 
    sum += integer; 
    numsLeft -= 1;
    completionCallback(sum);
    addNumbers(sum, numsLeft, completionCallback);
    });
      
  }
      
      
  
}

addNumbers(0,3, sum => console.log(`Total Sum: ${sum}`));