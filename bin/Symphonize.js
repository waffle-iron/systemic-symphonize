exports.generateContent = function generateContent(objectCount) {
    var content = new Array();

    for (var i = 0; i < objectCount; i++) {
        var iOSident = new Object();
        iOSident.guid = this.guid();
        iOSident.first = 'rand first';
        iOSident.last = 'rand last';
        iOSident.cell = '555-555-rand';

        var identifier = JSON.stringify(iOSident);

        content.push(identifier);
    }

    return content;
}

exports.generateFileDump = function (fileName, objectCount) {
    var fs = require('fs');

    if(fileName === null || fileName === '')
        fileName = 'dumpfile.json';

    fs.writeFile(fileName, this.generateContent(objectCount), function (err) {
        if (err) return console.log(err);
        console.log('File written.');
    });
}

exports.guid = function(){

    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    return guid;
};

exports.writeIoOrchestrate = function(){

};

//console.log(this.generateFileDump(null, 100));

console.log(this.generateContent(10));