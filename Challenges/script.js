"use strict";
/*
            ARRAY MANIPULATION CHALLENGE 

            You are given an array of n elements, initialized to 0. You are also given a list of m queries, where each query is represented by a triple (a, b, k) and denotes that you should add k to each element in the subarray arr[a...b].

           Write a function arrayManipulation(n, queries) that returns the maximum value in the array after performing all the queries.

        example : 

        const n = 5;
        const  queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
        console.log(arrayManipulation(n, queries)); // Output: 200

      // In the example above, the array arr starts as [0, 0, 0, 0, 0].
      // After the first query, arr becomes [100, 100, 0, 0, 0].
     // After the second query, arr becomes [100, 200, 100, 100, 100].
    // After the third query, arr becomes [100, 200, 200, 200, 100],
   // and the maximum value in the array is 200. 


*/

/*
        STEPS WITH SUDO CODE

     * 1 : create an array with n elements    

        [0 , 0 , 0 , 0 , 0 ]

        a loop ( 
        a b  k 
    * first obstacle : how to add into array of elements 

        
        
        )

*/

//  code implementation :

const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

function arrayManipulation(n, queries) {
  const array = Array.from({ length: n }, () => 0);
  let highestValue = 0;
  for (let i = 0; i < queries.length; i++) {
    // firt we destructer the (a, b , k ) in the queries

    const [a, b, k] = queries[i];

    // creating vars fot both index to make it easier

    const firstIndice = a - 1;
    const secondIndice = b - 1;

    //

    for (let j = firstIndice; j <= secondIndice; j++) {
      array[j] += k;
    }

    //
  }

  // checking the highest value in the array

  array.forEach((value) => {
    if (value > highestValue) {
      highestValue = value;
    }
    if (value <= highestValue) return;
  });

  return highestValue;
}
arrayManipulation(n, queries);
