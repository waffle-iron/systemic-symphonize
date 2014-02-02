symphonize tests
===
Description: This is a simple markdown file for describing what tests are in which files and which file is setup to test what. All files that aren't listed are part of the set of *tests* that are being deprecated.

**Test Files:**

 * *_orchestrate_key.js* - Simple object constructor test and verification of object constructors.
 * *_dispenser.js* - Simple object constructor test and verification of object constructors.
 	 * *_dispenser_integration.js* - Functional integration tests for reading and writing verification to Orchestrate.io, console and other mediums as they're made available.
 * *_symphonize.js* - Simple object constructor test and verification of object constructors.
  	 * *_symphonize_configuration.js* - Tests to verify configuration read from constructor or from file.
  	 * *_symphonize_configuration_parameters.js* - Tests to verify if the configuration passed in has defaults set and is read correctly.
  	 * *_symphonize_data_generation.js* - Tests to verify the data is returned for generated data based on the parameters passed in from configuration.

