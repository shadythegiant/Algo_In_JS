/* 

    # who is the longest :) challenge #3

    A string string is given. Return the number of the longest block. A block means a multiple occurrence of a letter in a row.

    longest('aaBBBBcDDee')  ====>  4




*/

function longest(string) {
  if (!string.length) return 0;
  //  a a b  b b  b  c d  d e e
  let counter = 1;
  let resultsAr = [];

  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];
    const nextLetter = string[i + 1] !== undefined && string[i + 1];

    if (currentLetter === nextLetter) {
      counter++;
      resultsAr.push(counter);
    }

    if (currentLetter !== nextLetter) {
      resultsAr.push(counter);
      counter = 1;
    }
  }

  let max = resultsAr.sort((a, b) => b - a)[0];

  return max;
}

// longest("aaBBBBcDDee");
// longest("aaBBcDDDDDDeeFFFFFFFFg");

// chache method

function longest2(string) {
  if (!string.length) return 0;

  let cache = {};

  string.split("").forEach((letter) => {
    if (cache[letter]) {
      cache[letter]++;
    } else {
      cache[letter] = 1;
    }
  });

  const max = Object.values(cache).sort((a, b) => b - a)[0];

  console.log(max);
}

longest2("aaBBBBcDDee");
