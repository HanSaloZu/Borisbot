const { guildOwner, memberCount, createdAt } = require("./guild");
const { registeredAt, joinedAt, ban } = require("./members");

const commands = new Map();

commands.set(memberCount.name, memberCount);
commands.set(guildOwner.name, guildOwner);
commands.set(createdAt.name, createdAt);

commands.set(joinedAt.name, joinedAt);
commands.set(registeredAt.name, registeredAt);
commands.set(ban.name, ban);

module.exports = commands;
