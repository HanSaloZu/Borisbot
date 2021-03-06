const pref = require("../config").get("prefix");
const {
  createCommonMessage,
  createErrorMessage
} = require("../utils").messages;
const commands = require("./index");

module.exports = {
  name: "help",
  description: "Gives a bot description and a list of commands",
  execute(message) {
    let response = "";
    let args = message.args;
    if (!args.length) {
      response = createCommonMessage()
        .setTitle("About bot")
        .setURL("https://github.com/HanSaloZu/Borisbot/tree/master")
        .setDescription(
          "This bot will help you simplify the process of moderating your discord server. Bot can ban/kick server members, delete messages and more."
        )
        .addField(
          "Commands",
          "Category: guild \n" +
            `\`${pref}guild-info\` \n\n` +
            "Category: guild members \n" +
            `\`${pref}user-info @<username>\` \n` +
            `\`${pref}ban @<username> @<username> ...\` \n` +
            `\`${pref}kick @<username> @<username> ...\` \n\n` +
            "Category: messages \n" +
            `\`${pref}purge <amount> @<username>\` \n\n` +
            "Category: other \n" +
            `\`${pref}flipcoin\` \n` +
            `\`${pref}btc\` \n` +
            `\`${pref}uptime\` \n` +
            `\`${pref}version\` \n\n` +
            `To get detailed information about the command, type \`${pref}help <command>\``
        );
    } else {
      const command = commands.get(args[0]);

      if (command) {
        response = createCommonMessage(command.description).setTitle(
          pref + command.name
        );
      } else {
        response = createErrorMessage("Error. The given command was not found");
      }
    }

    message.channel.send(response);
  }
};
