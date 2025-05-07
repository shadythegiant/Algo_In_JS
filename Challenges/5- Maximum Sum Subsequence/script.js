/* 


Given an array of integers arr, find a subsequence (not necessarily contiguous) of arr that has the largest sum. Return the sum of this subsequence.

// Example 1
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubsequence(arr)); // Output: 6
// Explanation: The subsequence [4, -1, 2, 1] has the largest sum (6).

// Example 2
arr = [1, 2, 3, -2, 5];
console.log(maxSumSubsequence(arr)); // Output: 9
// Explanation: The subsequence [1, 2, 3, -2, 5] has the largest sum (9).


*/

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumSubsequence(arr) {
  // creating the total variable
  let total = 0;
  // suggested by deepeek:
  //initializ to handle all negtive arrays
  //
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (total + arr[i] > arr[i]) {
      total += arr[i];
    } else {
      total = arr[i];
    }

    maxSum = Math.max(maxSum, total);
  }
  return maxSum;
}

maxSumSubsequence(arr);

/* 



        Kadane's algorithm explaind like your 5 : 

       row of toy boxes : some  boxes contain happy num 
                          some don't 
       you pick a block of boxes to make the biggest happy sum ever


       Kadane's Algorithm helps you find that happiest sum by:

       Keeping track of how happy you are right now (currentSum).

       Remembe ring the happiest you’ve ever been (maxSum).    
       
       Let’s take the blocks: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

       block : -2;  starts a nex sum(-2) ; currentSum = -2; maxSum = -2; 
       block : 1 ; starts a nex sum (1) ; currentSum = 1; maxSum = 1; 
       block : -3 ; s 1 + (-3) better than just -3? No! (-2 vs -3) → Pick -2 ; maxSum = 1; 

       block : 4 ; (currentSUm + currenValue > currentValue  ) 






*/

function maxSumSubsequence2(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
}

maxSumSubsequence2(arr);
