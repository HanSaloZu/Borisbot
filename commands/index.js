const { guildOwner, memberCount } = require("./guild");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);

module.exports = commands;
