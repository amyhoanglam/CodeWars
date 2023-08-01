// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


//Mine
function position(letter){
    let position = letter.toLowerCase().charCodeAt()-96
    return `Position of alphabet: ${position}`
  }
  
//Best
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }