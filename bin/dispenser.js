/**
 * Created by Adron on 1/6/14.
 * Description: Purpose of this code is for exporting, or "dispensing" the data
 *  to the designated write source.
 *
 * Note: for the write_to_orchestrate section to work you'll have to add a file
 *  called orchestrate_key.js for the calls against Orchestrate.io to work.
 */

function Dispenser(write_to) {
    this._write_to = write_to;
}

function write_to_orchestrate(data_to_write) {

}

function write_to_console(data_to_write) {

    for (var i = 0; i < data_to_write.count; i++) {
        console.log(data_to_write[i]);
    }
}

Dispenser.prototype.write_it = function (data_to_write) {
    if (this._write_to === "console") {
        write_to_console(data_to_write);
    } else if (this._write_to === "orchestrate") {
        write_to_orchestrate(data_to_write);
    }

    return 'success';
}

module.exports = Dispenser;