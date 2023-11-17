// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//Mine
function expandedForm(num) {
    //make it a string
    return num.toString()
    //split num
    .split('')
    //reverse
    .reverse()
    //multiply by its place
    .map( (a,i) => a * Math.pow(10, i) )
    //filter out the 0s
    .filter(a => a > 0)
    //reverse back to normal order
    .reverse()
    //concatenate string
    .join(' + ')
  }

  //without comments
  function expandedForm(num) {
    return num.toString()
    .split('')
    .reverse()
    .map( (a,i) => a * Math.pow(10, i) )
    .filter(a => a > 0)
    .reverse()
    .join(' + ')
  }

//Another
function expandedForm(num) {
	num = String(num);
	let result = [];
	for (var i = 0; i < num.length; i++) {
		if (num[i] == 0) continue;
		else result.push(num[i] + "0".repeat(num.length -i -1))
	}
	return result.join(" + ")
}