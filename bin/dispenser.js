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

 function Gimme_orchestrate_key(){
   return "012fyour-key3-goes-98f3-hereffe33f4e";
  }
 module.exports = Gimme_orchestrate_key;

 */


//    orchestrator.get(collection, key)
//        .then(function (result) {
//            var body = result.body;
//            console.log(body);
//            res.send(body);
//        })
//        .fail(function (err) {
//            res.send(err);
//        });


var db_key = require('../key/orchestrate_key');
var db = require('orchestrate')();

function Dispenser(write_to) {
    this._write_to = write_to;
}

function write_to_orchestrate(data_to_write) {
    db.put('musician', data_to_write.key, data_to_write.value)
        .then(function (result) {
            console.log(data_to_write.key);
            res.send(result);
            return true;
        })
        .fail(function (err) {
            console.log(err);
            res.send(err);
            return false;
        });
}

function write_to_console(data_to_write) {
    console.log(data_to_write[i]);
}

Dispenser.prototype.write_it = function (data_to_write) {
    var success = false;
    for (var i = 0; i < data_to_write.length; i++) {
        if (this._write_to === "console") {
            success = write_to_console(data_to_write);
        } else if (this._write_to === "orchestrate") {
            success = write_to_orchestrate(data_to_write);
        }
    }
    return success;
}

module.exports = Dispenser;