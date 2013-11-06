// Load Chance
var Chance = require('chance');

exports.generateContent = function generateContent(objectCount, dataAbstraction) {
    var content = new Array();
    var chance = new Chance();

    for (var i = 0; i < objectCount; i++) {
        var iOSidentifier = new Object();
        iOSidentifier.guid = chance.guid();
        iOSidentifier.first = chance.first();
        iOSidentifier.last = chance.last();
        iOSidentifier.cell = chance.phone();
        iOSidentifier.work = chance.phone();
        iOSidentifier.birthday = chance.birthday();
        iOSidentifier.gender = chance.gender();
        iOSidentifier.long = chance.longitude();
        iOSidentifier.lat = chance.latitude();
        iOSidentifier.CFUUID = chance.guid();

        var identifier = JSON.stringify(iOSidentifier);

        var keyValue = new Object();
        keyValue.key = chance.guid();
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
