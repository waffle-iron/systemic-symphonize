function new_guid() {
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return guid;
}

exports.generateContent = function generateContent(objectCount, dataAbstraction) {
    var content = new Array();

    for (var i = 0; i < objectCount; i++) {
        var iOSidentifier = new Object();
        iOSidentifier.guid = new_guid();
        iOSidentifier.first = 'rand first';
        iOSidentifier.last = 'rand last';
        iOSidentifier.cell = '555-555-rand';

        var identifier = JSON.stringify(iOSidentifier);

        var keyValue = new Object();
        keyValue.key = new_guid();
        keyValue.value = identifier;

        content.push(keyValue);
    }
    return content;
}

exports.generateFileDump = function (fileName, objectCount) {
    var fs = require('fs');

    if(fileName === null || fileName === ''){
        fileName = 'dumpfile.json';
        console.log('Default file name: ' + fileName);
    }

    if(objectCount === null || objectCount < 1){
        objectCount = 4;
        console.log('Default object count: ' + objectCount);
    }


    fs.writeFile(fileName, this.generateContent(objectCount), function (err) {
        if (err) return console.log(err);
        console.log('File written.');
    });
}

exports.guid = function(){
    return new_guid();
};

exports.writeIoOrchestrate = function(dataAbstraction){
    // Write data to orchestrate.io based on appropriate key value or graph storage.

    if(dataAbstraction === 'keyvalue'){
        createKeyValueData();
    }

    if(dataAbstraction === 'graph'){
        createGraphData();
    }
};


console.log(this.generateContent(10, 'keyvalue'));
