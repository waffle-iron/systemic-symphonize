The code for the key should look like this:

    function Orchestrate_key(){
       this.access_key = '012fsome-ekey-goes-98f3-hereffe33f4e';
    }

    Orchestrate_key.prototype.key = this.access_key;
    module.exports = Orchestrate_key;

Place this code in a file called orchestrate_key.js in this directory.