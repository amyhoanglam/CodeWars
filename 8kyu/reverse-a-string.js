// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//Best & Mine
function solution(str){
    return str.split('').reverse().join('');  
  }

  //Another
  const solution = str => str.split('').reverse().join('');