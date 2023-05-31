// Task
// Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.

// //function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) return i;
//       }
//       return "Not found";
// }


//Best
var find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

//Another
const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x

//Another
const find = (array, element) =>
  array.includes(element) ? array.indexOf(element) : `Not found`;