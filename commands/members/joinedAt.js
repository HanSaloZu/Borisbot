const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "joined-at",
  description: "Sends the time the user joined the guild",
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
