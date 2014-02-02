/**
 * Created by Adron on 1/6/14.
 * Description: Purpose of this code is for exporting, or "dispensing" the data
 *  to the designated write source.
 *
 * Note: for the write_to_orchestrate section to work you'll have to add a file
 *  called orchestrate_key.js for the calls against Orchestrate.io to work. The
 *  file needs to be placed in a directory called "key" and then add the appropriate
 *  key for access.
 *
 * The code for the key should look like this:
 *

 function Orchestrate_key(){
   this.access_key = '012fsome-ekey-goes-98f3-hereffe33f4e';
}

 Orchestrate_key.prototype.key = this.access_key;
 module.exports = Orchestrate_key;

 */

// Setup the database connection to orchestrate.io.
var orchestrate_key_holder = require("../key/orchestrate_key");
var key_holder = new orchestrate_key_holder();
var db = require('orchestrate')(key_holder.access_key);

function Dispenser(write_to, collection) {
    this._write_to = write_to;
    this._collection = collection;
}

function write_to_orchestrate(collection, key, value) {
    db.put(collection, key, value)
        .then(function (result) {
            res.send(result);
            return true;
        })
        .fail(function (err) {
            res.send(err);
            return false;
        });
}

function write_to_console(data_to_write) {
    console.log("Key: " + data_to_write.key);
    console.log("Value: " + JSON.stringify(data_to_write.value));
    return true;
}

Dispenser.prototype.write_it = function (data_to_write) {

    var success = false;

    if (this._write_to === "console") {
        success = write_to_console(data_to_write);
    } else if (this._write_to === "orchestrateio") {
        success = write_to_orchestrate(this._collection, data_to_write.key, data_to_write.value);
    } else {
        success = false;
    }

    return success;
}

module.exports = Dispenser;