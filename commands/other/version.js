const https = require("https");
const { createCommonMessage } = require("../../utils");

module.exports = {
  name: "version",
  description: "Gives the current version of the bot",
  async execute(message) {
    const options = {
      host: "api.github.com",
      path: "/repos/HanSaloZu/Borisbot/releases",
      method: "GET",
      headers: { "User-Agent": "Borisbot" }
    };

    https
      .request(options, (res) => {
        let data = "";

        res.setEncoding("utf8");
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const lastRelease = JSON.parse(data)[0];
          const messageText = `The current version of the bot is ${lastRelease.tag_name}`;
          message.channel.send(createCommonMessage(messageText));
        });
      })
      .end();
  }
};
