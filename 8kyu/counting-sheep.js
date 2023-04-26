// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Mine
function countSheeps(arrayOfSheep) {
    var num = 0;
    for ( var i = 0; i < arrayOfSheep.length; i++)
      if (arrayOfSheep[i] == true)
        num++;
     
    return num;
}

//Best 
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}


//Another 
function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
}