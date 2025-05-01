const instructor = {
  firstName: "samad",
  isInstructor: false,
  favoriteNumbers: [1, 7, 8, 9],
};

// insertion and deletion are constant time when it comes to objects
// searching is O(n)

instructor.isSingal = true;

console.log(instructor);

// deleting

delete instructor.isSingal;

console.log(instructor);

// looping

// write a function that searches for a value in obj and returs true and the key where value exists

function searchObj(obj, searchValue) {
  const entries = Object.entries(obj);
  const keyValueArray = entries.filter((entry) => entry[1] === searchValue);

  const [key, value] = [...keyValueArray[0]];

  if (!keyValueArray.length) console.log("the value doesn't exist in the obj");
  if (keyValueArray.length > 0)
    console.log(` the value ${value} is stored in the key ${key}`);
}

searchObj(instructor, "samad");
console.log(instructor);
