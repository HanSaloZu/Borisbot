const { createCommonMessage } = require("../../utils");

module.exports = {
  name: "guild-owner",
  description: "Gives the owner of the guild",
  execute(message) {
    const guildOwner = message.guild.members.cache.get(message.guild.ownerID);
    message.channel.send(
      createCommonMessage(`The guild owner is ${guildOwner.user.toString()}`)
    );
  }
};
