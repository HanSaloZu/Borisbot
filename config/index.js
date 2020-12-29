const nconf = require("nconf");
const path = require("path");

nconf.path({ file: path.join(__dirname, "config.json") });

module.exports = nconf;
