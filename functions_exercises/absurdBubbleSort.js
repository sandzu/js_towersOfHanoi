const rl = require('readline');

const reader = rl.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, completionCallback) {
  
  function outerBubbleSortLoop(madeAnySwaps = true) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0 , false, outerBubbleSortLoop);
    } 
    else 
    {
      completionCallback(arr);
    }
  } ; 
  
  
  
  
  
  
  outerBubbleSortLoop();  
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}, yes/no \n` , function(res) 
  {
    if (res === "yes") 
    {
      return callback(true);
    } 
    else 
    {
      return callback(false);
    }
    
  });

}

function print() {
  console.log("outerBubbleSortLoop");
  // if (con === true) {
  //   console.log('true');
  // }
  // else 
  // {
  //   console.log('false');
  // }
  
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i <arr.length -1){
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan===true){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i === (arr.length-1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([4,2,1], 0, false, print);



// print(true);
// print(false);

// askIfGreaterThan(54,45,print)
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
