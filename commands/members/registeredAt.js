const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "registered-at",
  description: "Sends the time the user was registered at",
  execute(message, args, client) {
    const userId = getUserIdFromMention(args[0]);
    const user = client.users.cache.get(userId);
    const userNickname = message.guild.members.cache.get(userId).nickname;

    message.channel.send(
      createCommonMessage().setDescription(
        `${
          userNickname ? `${userNickname}(${user.username})` : user.username
        } was registered at ${user.createdAt.toLocaleDateString(
          "en-US",
          dateFormat
        )}`
      )
    );
  }
};
