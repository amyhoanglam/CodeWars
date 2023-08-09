// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Mine
const removeUrlAnchor = url => url.split('#')[0];

//Best
function removeUrlAnchor(url){
    return url.replace(/#.*/gi,"");
}