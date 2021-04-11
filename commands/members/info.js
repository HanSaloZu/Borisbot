const { messages } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "user-info",
  description:
    "Gives complete information about the user/guild member\n\n `user-info @<username>(optional, default value: message sender)`",
  async execute(message, client) {
    const user = message.mentions.users.first() || message.author;
    const guildMember = await message.guild.members.fetch(user);
    const guildOwner = await client.users.fetch(message.guild.ownerID);

    const registeredAt = user.createdAt.toLocaleDateString("en-US", dateFormat);
    const isPremium = Boolean(guildMember.premiumSince);

    message.channel.send(
      messages
        .createTimestampedMessage()
        .setTitle("User/Guild member info")
        .setThumbnail(user.displayAvatarURL())
        .addField(
          "User Info",
          `Username: ${user.username}\n` +
            `Tag: ${user.tag}\n` +
            `ID: ${user.id}\n` +
            `Is bot: ${user.bot ? "Yes" : "No"}\n` +
            `Mention: ${user.toString()}\n` +
            `Registered at: ${registeredAt}`
        )
        .addField(
          "Guild member info",
          `Nickname: ${
            guildMember.nickname ? guildMember.nickname : user.username
          }\n` +
            `Premium since: ${
              isPremium ? guildMember.premiumSince : "No premium"
            }\n` +
            `Is guild owner: ${user.id === guildOwner.id ? "Yes" : "No"}\n` +
            `Joined At: ${guildMember.joinedAt}`
        )
    );
  }
};
