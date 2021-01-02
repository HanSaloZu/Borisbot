const { guildOwner, memberCount, createdAt } = require("./guild");
const { registeredAt, joinedAt } = require("./members");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);
commands.set(createdAt.name, createdAt);

commands.set(joinedAt.name, joinedAt);
commands.set(registeredAt.name, registeredAt);

module.exports = commands;
