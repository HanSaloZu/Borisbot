const { createCommonMessage } = require("../../utils");

module.exports = {
  name: "guild-created-at",
  description: "Sends the time the guild was created at",
  execute(message) {
    const createdAt = message.guild.createdAt.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    message.channel.send(
      createCommonMessage().setDescription(
        `The guild was created on ${createdAt}`
      )
    );
  }
};
