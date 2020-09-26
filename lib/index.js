"use-strict";
const chalk = require("chalk");

module.exports = {
  loadNumber(name, options = {}) {
    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      if (options.defaultValue) return options.defaultValue;
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
        )} NaN_VALUE: Expected a number for option "${name}", instead got "${
          process.env[name]
        }".`
      );
      process.exit(1);
    }

    if (!options.allowInfinity && !Number.isFinite(parsedEnv)) {
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} INFINITE_VALUE: Expected a finite number for option "${name}".`
      );
      process.exit(1);
    }

    return parsedEnv;
  },
  loadString(name, options = {}) {
    const loadedEnv = process.env[name];

    if (!loadedEnv) {
      if (options.defaultValue) return options.defaultValue;
      console.log(
        `${chalk.red.bold(
          "(!)"
        )} UNDEFINED_VALUE: "${name}" is not defined in your env file.`
      );
      process.exit(1);
    }

    return loadedEnv;
  },
};
