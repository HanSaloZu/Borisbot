const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "registered-at",
  description: "Sends the time the user was registered at",
  execute(message, args, client) {
    const user = client.users.cache.get(getUserIdFromMention(args[0]));

    message.channel.send(
      createCommonMessage().setDescription(
        `${user.toString()} was registered at ${user.createdAt.toLocaleDateString(
          "en-US",
          dateFormat
        )}`
      )
    );
  }
};
