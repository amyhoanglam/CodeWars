// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



//Mine
const summation = num => num * (1 + num) / 2


//Best
// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//         result += i;
//     }
//     return result;
// }

