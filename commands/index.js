const { guildOwner, memberCount, createdAt } = require("./guild");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);
commands.set(createdAt.name, createdAt);

module.exports = commands;
