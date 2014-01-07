/**
 * Created by Adron on 1/6/14.
 * Description: Purpose of this code is for exporting, or "dispensing" the data
 *  to the designated write source.
 */

function Dispenser(generated_data, write_to) {
    this._write_to = write_to;
    this._generated_data = generated_data;
}

function write_to_orchestrate() {

}

function write_to_console() {


    for (var i = 0; i < this._generated_data.length; i++) {
        console.log(this._generated_data[i]);
    }
}

Dispenser.prototype.write_it = function () {
    if (this._write_to === "console") {
        write_to_console();
    } else if (this._write_to === "orchestrate") {
        write_to_orchestrate();
    }
}

module.exports = Dispenser;