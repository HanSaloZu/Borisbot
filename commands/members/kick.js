const {
  getUserIdFromMention,
  createCommonMessage,
  generateMentionsString,
  MentionRequiredError,
  PermissionError
} = require("../../utils");
const { createErrorMessage } = require("../../utils/messages");

module.exports = {
  name: "kick",
  description: "Kicks the users from the guild",
  execute(message, args) {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      throw new PermissionError();
    if (!args.length) throw new MentionRequiredError();

    let membersToKick = [];
    for (let mention of args) {
      const userId = getUserIdFromMention(mention);
      const member = message.guild.members.cache.get(userId);

      if (!member.kickable) {
        return message.channel.send(
          createErrorMessage(`I cannot kick ${member.user.toString()}`)
        );
      }
      membersToKick.push(
        message.guild.members.cache.get(getUserIdFromMention(mention))
      );
    }

    Promise.all(membersToKick.map((member) => member.kick())).then(() => {
      let response =
        generateMentionsString(membersToKick) + " kicked from this guild";
      message.channel.send(createCommonMessage(response));
    });
  }
};
