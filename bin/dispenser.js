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

var orchestrate_key_holder = require("../key/orchestrate_key");
var key_holder = new orchestrate_key_holder();

function Dispenser(write_to) {
    this._write_to = write_to;
}

function write_to_orchestrate(data_to_write) {

    var collection = 'musician';
    var key = "1";
    var value = {
        "name": "Alfred Palfred",
        "bio": "Alfred just does cool stuff."
    };

    var orchestrate_key = key_holder.access_key;
    var db = require('orchestrate')(orchestrate_key);

    db.put(collection, key, value)
        .then(function (result) {
            debugger;
            res.send(result);
        })
        .fail(function (err) {
            debugger;
            res.send(err);
        });
}

function write_to_console(data_to_write) {
    console.log(data_to_write[i]);
}

Dispenser.prototype.write_it = function (data_to_write) {
    for (var i = 0; i < data_to_write.length; i++) {
        if (this._write_to === "console") {
            write_to_console(data_to_write[i]);
        } else if (this._write_to === "orchestrate") {
            write_to_orchestrate(data_to_write[i]);
        }
    }
}

module.exports = Dispenser;