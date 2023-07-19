// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Mine
const boolToWord = bool => (bool == true) ? "Yes" : "No"

//Best
function boolToWord( bool ){
    return bool ? 'Yes':'No';
}