const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "joined-at",
  description: "Sends the time the user joined the guild",
  execute(message, args, client) {
    const userId = getUserIdFromMention(args[0]);
    const username = client.users.cache.get(userId).username;
    const guildMember = message.guild.members.cache.get(userId);

    message.channel.send(
      createCommonMessage().setDescription(
        `${
          guildMember.nickname
            ? `${guildMember.nickname}(${username})`
            : username
        } was joined this guild at ${guildMember.joinedAt.toLocaleDateString(
          "en-US",
          dateFormat
        )}`
      )
    );
  }
};
