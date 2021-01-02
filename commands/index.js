const { guildOwner, memberCount, createdAt } = require("./guild");
const { registeredAt } = require("./members");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);
commands.set(createdAt.name, createdAt);

commands.set(registeredAt.name, registeredAt);

module.exports = commands;
