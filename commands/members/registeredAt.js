const {
  getUserFromMention,
  createErrorMessage,
  createCommonMessage
} = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "registered-at",
  description: "Sends the time the user was registered at",
  execute(message, args, client) {
    try {
      const user = getUserFromMention(args[0], client);
      const userNickname = message.guild.members.cache.get(user.id).nickname;

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
    } catch (error) {
      if (
        error.name === "MentionRequiredError" ||
        error.name === "InvalidMentionError"
      ) {
        message.channel.send(
          createErrorMessage().setDescription(error.message)
        );
      } else {
        throw error;
      }
    }
  }
};
