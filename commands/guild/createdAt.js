const { createCommonMessage } = require("../../utils");
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "guild-created-at",
  description: "Gives the creation time of the guild",
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
