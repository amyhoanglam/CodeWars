// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Mine
function removeExclamationMarks(s) {
    return s.replace(/\!/g,'');
}

//Another
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

//Another
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}