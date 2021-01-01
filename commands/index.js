const { guildOwner } = require("./guild");

const commands = new Map();

commands.set(guildOwner.name, guildOwner);

module.exports = commands;
