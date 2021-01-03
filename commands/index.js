const { guildOwner, memberCount, createdAt } = require("./guild");
const { registeredAt, joinedAt, ban, kick } = require("./members");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);
commands.set(createdAt.name, createdAt);

commands.set(joinedAt.name, joinedAt);
commands.set(registeredAt.name, registeredAt);
commands.set(ban.name, ban);
commands.set(kick.name, kick);

module.exports = commands;
