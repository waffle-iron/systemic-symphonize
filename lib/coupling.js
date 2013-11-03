var ident = "213,302,231,321,John B";
var findThisMatch = "321";

console.log('Searching...\n...and was it found?');

function Related(searchThis, forThis) {
    var returnValue = 'no';
    if (searchThis.indexOf(forThis) > -1) {
        returnValue = 'yes';
    }
    return returnValue;
}

console.log(Related(ident, findThisMatch));
