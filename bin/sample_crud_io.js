var Chance = require('chance'),
    orchestrator = require('orchestrate')("01233006-eaa7-4e3a-94d5-bb27cfc809cd"),
    chance = new Chance(),
    newline = '\r\n',
    spacing = '    ';

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
console.log('Writing key:\r\n' + keyValue.key + '.');
var collection = 'listz';

orchestrator.put(collection, keyValue.key, {
    "name": "Adron Hall",
    "hometown": "Portland",
    "twitter": "@adron"
})
.then(function (result) {
    var displayData = result.toJSON();

    console.log('Properties: \r\n\r\n');
    displayIt(displayData);
})
.fail(function (err) {
    console.log('Shux, something broke.: \r\n' + err);
});


console.log('\r\nAll processed.\r\n');

function displayIt(theDataToDisplay) {
    console.log(spacing + theDataToDisplay + newline);
}