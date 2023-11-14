// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//Mine
function isPalindrome(x) {
    let reversed = x.split('').reverse().join('')
    if (reversed.toLowerCase() === x.toLowerCase()) {
      return true
    } else {
      return false
    }
}


//Best
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}