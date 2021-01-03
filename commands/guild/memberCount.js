const { createCommonMessage } = require("../../utils");

module.exports = {
  name: "member-count",
  description: "Sends the full amount of members in this guild",
  execute(message) {
    message.channel.send(
      createCommonMessage(
        `The full amount of members in this guild is ${message.guild.memberCount}`
      )
    );
  }
};
