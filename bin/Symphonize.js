
function createKeyValueData() {
    console.log('Key Value Data Generation.');
}

function createGraphData() {
    console.log('Graph Data Generation.');
}

exports.generateContent = function generateContent(objectCount, dataAbstraction) {
    var content = new Array();

    for (var i = 0; i < objectCount; i++) {
        var iOSidentifier = new Object();
        iOSidentifier.guid = this.guid();
        iOSidentifier.first = 'rand first';
        iOSidentifier.last = 'rand last';
        iOSidentifier.cell = '555-555-rand';

        var identifier = JSON.stringify(iOSidentifier);

        content.push(identifier);
    }

    if(dataAbstraction === 'keyvalue'){
        createKeyValueData();
    }

    if(dataAbstraction === 'graph'){
        createGraphData();
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

    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    return guid;
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
