"use-strict";
const chalk = require("chalk");

module.exports = {
  loadNumber(name, options = {}) {
    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      if (options.hasOwnProperty("defaultValue")) {
        return options.defaultValue;
      }

      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNDEFINED_VALUE: "${name}" is not defined in your env file.`
      );

      process.exit(1);
    }

    const parsedEnv = +loadedEnv;

    if (!options.allowNaN && Number.isNaN(parsedEnv)) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} NaN_VALUE: Expected a number for environment variable "${name}", instead got "${
          process.env[name]
        }".`
      );

      process.exit(1);
    }

    if (!options.allowInfinity && !Number.isFinite(parsedEnv)) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} INFINITE_VALUE: Expected a finite number for environment variable "${name}".`
      );

      process.exit(1);
    }

    return parsedEnv;
  },
  loadString(name, options = {}) {
    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      if (options.hasOwnProperty("defaultValue")) {
        return options.defaultValue;
      }

      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNDEFINED_VALUE: "${name}" is not defined in your env file.`
      );

      process.exit(1);
    }

    return loadedEnv;
  },
  loadArray(name, options = {}) {
    if (!options.delimiter) {
      options.delimiter = ",";
    }

    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNDEFINED_VALUE: "${name}" is not defined in your env file.`
      );
      process.exit(1);
    }

    let parsedEnv;
    try {
      parsedEnv = loadedEnv.split(options.delimiter);
    } catch (error) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} NOT_PARSABLE: Expected a parsable array for environment variable "${name}", instead got "${loadedEnv}".`
      );

      process.exit(1);
    }

    if (
      options.type &&
      !parsedEnv.every((item) => typeof item === options.type)
    ) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNEXPECTED_TYPE: Each item of environment variable "${name}" must be ${
          options.type
        }.`
      );

      process.exit(1);
    }

    return parsedEnv;
  },
  loadBoolean(name, options = {}) {
    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      if (options.hasOwnProperty("defaultValue")) {
        return options.defaultValue;
      }

      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNDEFINED_VALUE: "${name}" is not defined in your env file.`
      );

      process.exit(1);
    }

    return loadedEnv.toLowerCase() === "true";
  },
};
