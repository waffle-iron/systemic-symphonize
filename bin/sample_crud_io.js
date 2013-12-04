var Chance = require('chance'),
    chance = new Chance(),
    orchestrator = require('orchestrate')("01233006-eaa7-4e3a-94d5-bb27cfc809cd"),
    collection = 'listz';

function displayIt(theDataToDisplay) {
    console.log('    ' + theDataToDisplay + '\r\n');
}

var key = chance.guid();
displayIt('Writing key ' + key);

var inputData = {
    "First": chance.first(),
    "Last": chance.last(),
    "Number": chance.d20() * chance.d10()
};

displayIt('...with value of ' + JSON.stringify(inputData));

// Writing, then reading and then deleting
// the record with a success message or failure.
orchestrator.put(collection, key, inputData)
    .then(function (result) {
        displayIt('success!!');

        orchestrator.get(collection, key)
            .then(function (result) {
                displayIt('data retrieved!');
                displayIt(JSON.stringify(result.body));

                orchestrator.remove(collection, key)
                    .then(function (result) {
                        displayIt('data deleted, all gone!');
                    })
                    .fail(function (err) {
                        displayIt('Another error ' + err);
                    })
            })
            .fail(function (err) {
                displayIt('An error ' + err);
            });

    })
    .fail(function (err) {
        displayIt('Brutal, fail a lot eh!')
    });
