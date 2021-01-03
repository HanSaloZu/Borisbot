const { createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "guild-created-at",
  description: "Sends the time the guild was created at",
  execute(message) {
    const createdAt = message.guild.createdAt.toLocaleDateString(
      "en-US",
      dateFormat
    );
    message.channel.send(
      createCommonMessage(`The guild was created on ${createdAt}`)
    );
  }
};
