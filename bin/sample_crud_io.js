
var Chance = require('chance');
var Orchestrate = require('orchestrate')("01233006-eaa7-4e3a-94d5-bb27cfc809cd");

var chance = new Chance();

console.log(chance.d20());

for (var i = 0; i < 5; i++) {
    // Create a test object.
    var identifier = new Object();
    identifier.identifier = chance.d20() * chance.d10();
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

    // Write to a tenant location a key value.
    console.log('Writing key:\r\n' + keyValue.key + '\r\nWith value:\r\n' + keyValue.value);

    // Read the data and verify.
    var retrievedKeyValue = keyValue;

    console.log('Reading key:\r\n' + retrievedKeyValue.key + ' and verifying against same ' + keyValue.key);

    console.log('Reading value:\r\n' + retrievedKeyValue.value + ' and verifying against same ' + retrievedKeyValue.value);


    // Deleting the data & verifying.
    console.log('Deleting key:\r\n' + retrievedKeyValue.key);

    var deletedKeyValue = keyValue;
    console.log('Verifying key is deleted ');

    if(retrievedKeyValue.key === null){
        console.log(true);
    } else {
        console.log(false);
    }
    console.log('\r\n');


    // Write to a tenant location a graph store.
}