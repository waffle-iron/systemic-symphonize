/**
 * Created by adron on 3/14/14.
 * Description: Adding configuration for the project.
 * License: Apache 2.0 => License: Apache 2.0 https://github.com/Deconstructed/Storgie/blob/master/LICENSE
 */

var convict = require('convict');

// Schema
var conf = convict({
    env: {
        doc: "The App Environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    },
    deconstructed_api_key: {
        doc: "The API key for the data service.",
        default: "key_here"
    }
});

// load environment dependent configuration
var env = conf.get('env');
conf.loadFile('./config/production.json');

// perform validation
conf.validate();

module.exports = conf;