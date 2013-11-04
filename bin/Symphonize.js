exports.Coupling = function (searchThis, forThis) {
    var returnValue = 'no';
    if (searchThis.indexOf(forThis) > -1) {
        returnValue = 'yes';
    }
    return returnValue;
}
