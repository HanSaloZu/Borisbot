const {
  getUserFromMention,
  createCommonMessage,
  catchMentionErrors
} = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "joined-at",
  description: "Sends the time the user joined the guild",
  execute(message, args, client) {
    try {
      const user = getUserFromMention(args[0], client);
      const guildMember = message.guild.members.cache.get(user.id);

      message.channel.send(
        createCommonMessage().setDescription(
          `${
            guildMember.nickname
              ? `${guildMember.nickname}(${user.username})`
              : user.username
          } was joined this guild at ${guildMember.joinedAt.toLocaleDateString(
            "en-US",
            dateFormat
          )}`
        )
      );
    } catch (error) {
      catchMentionErrors(message, error);
    }
  }
};
