var Chance = require('chance');
var orchestrator = require('orchestrate')("01233006-eaa7-4e3a-94d5-bb27cfc809cd");
var chance = new Chance();

// Create a test object.
var identifier = new Object();
identifier.identifier = chance.d20() * chance.d10();
identifier.first = chance.first();
identifier.last = chance.last();
identifier.CFUUID = chance.guid();

var identifier = JSON.stringify(identifier);

var keyValue = new Object();
keyValue.key = chance.guid();
keyValue.value = identifier;

// Write to a tenant location a key value.
console.log('Writing key:\r\n' + keyValue.key + '\r\nWith value:\r\n' + keyValue.value);
var collection = 'listz';

orchestrator.put(collection, keyValue.key, {
    "name": "Adron Hall",
    "hometown": "Portland",
    "twitter": "@adron"
})
.then(function (result) {
    console.log(result);
})
.fail(function (err) {
    console.log('Shux, something broke.: \r\n' + err);
});


var retrievedKeyValue = new Object();

console.log('Reading value:\r\n' + retrievedKeyValue.value + ' and verifying against same ' + retrievedKeyValue.value);
orchestrator.get(collection, keyValue.key)
    .then(function (result) {
        retrievedKeyValue = result.body;
        console.log(retrievedKeyValue);
    })
    .fail(function (err) {
        console.log(err);
    })

// Deleting the data & verifying.
console.log('Deleting key:\r\n' + retrievedKeyValue.key);
orchestrator.

var deletedKeyValue = keyValue;
console.log('Verifying key is deleted ');

if(retrievedKeyValue.key === null){
    console.log(true);
} else {
    console.log(false);
}
console.log('\r\n');
