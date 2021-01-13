const { getUserIdFromMention, createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "registered-at",
  description:
    "Gives the time when the user was registered\n\n `registered-at @<username>(optional, default value: message sender)`",
  async execute(message, args, client) {
    const user = args[0]
      ? await client.users.fetch(getUserIdFromMention(args[0]))
      : message.author;

    message.channel.send(
      createCommonMessage(
        `${user.toString()} was registered at ${user.createdAt.toLocaleDateString(
          "en-US",
          dateFormat
        )}`
      )
    );
  }
};
