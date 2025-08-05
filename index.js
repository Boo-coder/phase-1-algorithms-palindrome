function isPalindrome(word) {
  // reverse the string
  let reversedWord = word.split("").reverse().join("");
  // Compare the reversed string to the original
  return word === reversedWord;
}; 

console.log(isPalindrome("racecar"));
console.log(isPalindrome("robot"));

/* 
  Add your pseudocode here
  -define a function named isPalindrom with one parametre "word".
  -reverse the word string
  -Compare the reversed string to the original 
  -return true if same, otherwise false
*/

/*
  Add written explanation of your solution here
  create reversedWord and compare it to the old one, ans that's will give us a string palindrome
*/

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
