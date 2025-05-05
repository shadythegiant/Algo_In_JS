/* 
        #Count_ME
        A String string is given. Return the number of the word "Me" in this string. Count 'Me' only if none 'x' is anywhere in front of it.



countMe('Meishere')    1
countMe('thisisxMe') 0



*/

function countMe(string) {
  let keyword = "Me";
  let keywordsArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] + string[i + 1] === keyword && string[i - 1] !== "x") {
      const foundKey = string[i] + string[i + 1];

      keywordsArray.push(foundKey);
    }
  }

  if (keywordsArray.length === 0) return 0;
  if (keywordsArray.length) return 1;
}
countMe("MeishereMe");
