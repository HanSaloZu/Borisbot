module.exports = {
  name: "guild-owner",
  description: "This command mentions the owner of the guild",
  execute(message) {
    const guildOwner = message.guild.members.cache.get(message.guild.ownerID);
    message.channel.send(`The guild owner is ${guildOwner.user.toString()}`);
  }
};
