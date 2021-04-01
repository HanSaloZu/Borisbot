const { http, messages } = require("../../utils");

module.exports = {
  name: "version",
  description: "Gives the current version of the bot",
  async execute(message) {
    const requestOptions = {
      host: "api.github.com",
      path: "/repos/HanSaloZu/Borisbot/releases"
    };

    http.GET(requestOptions, (data) => {
      const lastRelease = data[0];
      const messageText = `The current version of the bot is ${lastRelease.tag_name}`;
      message.channel.send(messages.createCommonMessage(messageText));
    });
  }
};
