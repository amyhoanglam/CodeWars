// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//Mine & Best
function pipeFix(numbers){
    minNum = numbers[0]
    maxNum = numbers[numbers.length - 1]
    arr = []
    for (let i = minNum; i <= maxNum; i++) {
      arr.push(i);
    }
    return arr;
  }

//Another
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]); 