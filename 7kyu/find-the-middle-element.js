// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//Mine
function gimme (triplet) {
    // 1,0,2
    if ( triplet[0] > triplet[1] && triplet[0] < triplet[2] ) {
      return 0;
    // 2,0,1
    } else if ( triplet[0] < triplet[1] && triplet[0] > triplet[2] ) {
      return 0;
    // 0,1,2
    } else if ( triplet[0] < triplet[1] && triplet[2] > triplet[1] ) {
      return 1;
    // 2,1,0
    } else if ( triplet[0] > triplet[1] && triplet[2] < triplet[1] ) {
      return 1;
    // 0,2,1
    } else if ( triplet[0] < triplet[2] && triplet[1] > triplet[2] ) {
      return 2;
    // 1,2,0
    } else if ( triplet[0] > triplet[2] && triplet[1] < triplet[2] ) {
      return 2;
    }
}

//Best
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}