// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     return array1 + array2; //something went wrong
// }


//Mine
function arrayPlusArray(arr1, arr2) {
    const initialValue = 0;
    const array1 = arr1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    )
    const array2 = arr2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    ) 
    return array1 + array2; //something went wrong
}

//Best
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


//Another
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}