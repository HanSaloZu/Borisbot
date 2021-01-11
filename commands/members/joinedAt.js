const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "joined-at",
  description:
    "Gives the time when the user joined the guild\n\n `joined-at @<username>(optional, default value: message sender)`",
  execute(message, args) {
    const guildMember = message.guild.members.cache.get(
      getUserIdFromMention(args[0])
    );

    message.channel.send(
      createCommonMessage(
        `${guildMember.user.toString()} was joined this guild at ${guildMember.joinedAt.toLocaleDateString(
          "en-US",
          dateFormat
        )}`
      )
    );
  }
};
