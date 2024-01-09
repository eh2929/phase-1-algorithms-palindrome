function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Create a function that takes in a string and returns true if it's a palindrome and false if it isn't. A palindrome is a word that is spelled the same way forwards and backwards.
*/

/*
  This for loop reverses the given word by starting from the last character's index and iterating + appending each character to the reversed string. 
*/

function isPalindrome(word) {
  let reversed = "";

  for (let currentIndex = word.length - 1; currentIndex >= 0; currentIndex--) {
    reversed += word[currentIndex];
  }

  return reversed === word;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
