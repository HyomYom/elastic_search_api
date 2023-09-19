const APPROOT = require("app-root-path");

const configFile = require(`${APPROOT}/config/config.json`);
const configMode = configFile.run_mode;
const config = configFile[configMode];

console.log(configMode);
console.log(config);

module.exports = config;
