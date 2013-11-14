// Load Chance
var Chance = require('chance');


exports.generateKeyValueContent = function generateKeyValueContent(objectCount) {
    var content = new Array();
    var chance = new Chance();

    for (var i = 0; i < objectCount; i++) {
        var identifier = new Object();
        identifier.guid = chance.guid();
        identifier.first = chance.first();
        identifier.last = chance.last();
        identifier.cell = chance.phone();
        identifier.work = chance.phone();
        identifier.birthday = chance.birthday();
        identifier.gender = chance.gender();
        identifier.long = chance.longitude();
        identifier.lat = chance.latitude();
        identifier.CFUUID = chance.guid();

        var identifier = JSON.stringify(identifier);

        var keyValue = new Object();
        keyValue.key = chance.guid();
        keyValue.value = identifier;

        content.push(keyValue);
    }
    return content;
}

exports.generateGraphContent = function generateGraphContent(objectCount) {
    var content = new Array();
    var chance = new Chance();

    for(var i=0; i<objectCount; i++){
        var identifier = new Object();
        identifier.relations = chance.d20();
        identifier.key = chance.d20();
        identifier.guid =


        console.log(chance.guid() + chance.d12() + chance.d20());
    }

    return content;
}

exports.generateFileDump = function (fileName, objectCount) {
    var fs = require('fs');

    if(fileName === null || fileName === ''){
        fileName = 'dumpfile.json';
    }

    if(objectCount === null || objectCount < 1){
        objectCount = 4;
    }

    fs.writeFile(fileName, this.generateKeyValueContent(objectCount), function (err) {
        if (err) return console.log(err);
        console.log('File written.');
    });
}

exports.writeIoOrchestrate = function(dataAbstraction){
    // Write data to orchestrate.io based on appropriate key value or graph storage.

    if(dataAbstraction === 'keyvalue'){
        createKeyValueData();
    }

    if(dataAbstraction === 'graph'){
        createGraphData();
    }
};


console.log(this.generateKeyValueContent(2));
console.log(this.generateGraphContent(10));
