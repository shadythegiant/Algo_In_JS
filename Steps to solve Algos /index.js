// Intro to problem solving

// 2 - Explore concrete Examples:

// write a function that takes in a string and returns counts of each character in the string

function charCount(str) {
  if (typeof str !== "string") return;

  let cache = {};

  for (let i = 0; i < str.length; i++) {
    const trimmedStr = str.trim();
    const letter = trimmedStr.charAt(i);

    if (letter in cache) {
      cache[letter]++;
    } else {
      cache[letter] = 1;
    }
  }

  return cache;
}

console.log(charCount("samm"));
