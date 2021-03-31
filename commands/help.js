const pref = require("../config").get("prefix");
const { createCommonMessage, createErrorMessage } = require("../utils");
const commands = require("./index");

module.exports = {
  name: "help",
  description: "Gives a bot description and a list of commands",
  execute(message, args) {
    let response = "";
    if (!args.length) {
      response = createCommonMessage()
        .setTitle("About bot")
        .setURL("https://github.com/HanSaloZu/Borisbot/tree/master")
        .setDescription(
          "This bot will help you simplify the process of moderating your discord server. Bot can ban/unban/kick server members, delete messages and more."
        )
        .addField(
          "Commands",
          `Category: guild \n \`${pref}guild-info\` \n\n Category: guild members \n \`${pref}registered-at @<username>\` \n \`${pref}ban @<username> @<username> ...\` \n \`${pref}kick @<username> @<username> ...\` \n\n Category: messages \n \`${pref}purge <amount> @<username>\` \n\n Category: other \n \`${pref}version\` \n\n To get detailed information about the command, type \`${pref}help <command>\``
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
