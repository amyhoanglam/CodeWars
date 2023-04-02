// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//Mine
function repeatStr (n, s) {
    var repeatedString = '';
    while (n > 0) {
      repeatedString += s;
      n--;
    }
    return repeatedString;
  }

  //Best
  function repeatStr (n, s) {
    return s.repeat(n);
  }

  //Another
  repeatStr = (n, s) => s.repeat(n)
