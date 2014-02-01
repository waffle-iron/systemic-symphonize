![Symphonize.js](http://photos.adron.me/Software/Software-Development/Symphonize/i-kzTdM4Q/0/S/Symphonize-S.png "Symphonize.js")

symphonize.js
===
NOTE: This project is still a few steps away from being deployed for use via npm. However all of these instructions are written as if it is complete. Please verify that we're in a released v0.1.0 state before using the project via npm. Currently the project on npm is on v0.0.4
 
**Description:** This project is a data generation library that makes the data available as generated for display via the console or for external services like Orchestrate.io. It can be used locally or as a tool to create random data based on configuration for testing, experimentation or however or whatever you may need data for.

***How to use this project in one of your projects.***

	npm install symphonize

***How to setup this project for development.***

First fork the repository located at [https://github.com/Adron/symphonize](https://github.com/Adron/symphonize).

	git clone git@github.com:YourUserName/symphonize.git
	cd symphonize
	npm install

Using The Library

The intended usage is to invocate the JavaScript object and then call generate. That's it, a super simple process. The code would look like this:

	var Symphonize = require('../bin/symphonize');
	var symphonize = new Symphonize();

The basic constructor invocation like this utilizes the generate.json file to generate data from. To inject the json configuration programmatically just inject the json configuration information via the constructor.

	var configJson = {"schema":"keyvalue"};

	var Symphonize = require('../bin/symphonize');
	var symphonize = new Symphonize();

Once the Symphonize data generator has been created call the generate() method as shown.

	symphonize.generate();

That's basically it. But you say, it's supposed to do X, Y or Z. Well that's where the json configuration data comes into play. In the configuration data you can set the data fields and what they'll generate, what type of data will be generated, the specific schema, how many records to create and more. The library comes with the generate.json file already setup with a working example. Currently the file looks like this:

	/**
	 * This is a sample file for configuration.
	 */

	{
	    "schema": "keyvalue", /* keyvalue, graph, event, geo */
	    "count": 20, /* X values to generate. */
	    "write_source": "console", /* console, orchestrateio and whatever other data sources that might come up. */

	    "fields": {
	        /* generates a random name. */
	        "fieldName": "name",

	        /* generates a random dice roll of a d20. */
	        "fieldTwo": "d20",

	        /* A single lorum ipsum random statement is genereated. */
	        "fieldSentence": "sentence",

	        /* A random guid is generated. */
	        "fieldGuid": "guid"
	    }
	}


**Dependencies**

In this project we've used several other libraries, all available via NPM. These projects include: [orchestrate.js](https://npmjs.org/package/orchestrate) and [chance.js](https://npmjs.org/package/chance). They'll be pulled in automatically when running npm install or when the symphonize library is included in your project. In other words this dependency list is just an FYI.

For more information on the library ping me [@adron](https://github.com/adron) or on Twitter [@Adron](http://twitter.com/adron).
Join In, Pull Requests and Getting Involved
---

 * [Issues List](https://github.com/Adron/symphonize/issues?state=open)
 * [Huboard Kanban](https://huboard.com/Adron/symphonize)
 * [Public Gihub Pages Site](http://adron.github.io/symphonize/)

[Adron](https://github.com/Adron) || [@Adron](http://twitter.com/adron) || [![Signature Logo](http://photos.adron.me/Software/Misc-Images/Logo/i-5zk96td/0/O/AH---Logo-32x32.png)](http://adron.me)
