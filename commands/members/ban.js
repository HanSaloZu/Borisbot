const {
  getUserIdFromMention,
  createCommonMessage,
  generateMentionsString,
  MentionRequiredError,
  PermissionError
} = require("../../utils");
const { createErrorMessage } = require("../../utils/messages");

module.exports = {
  name: "ban",
  description: "Bans the users from the guild",
  execute(message, args) {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      throw new PermissionError();
    if (!args.length) throw new MentionRequiredError();

    let membersToBan = [];
    for (let mention of args) {
      const userId = getUserIdFromMention(mention);
      const member = message.guild.members.cache.get(userId);

      if (!member.bannable) {
        return message.channel.send(
          createErrorMessage(`I cannot ban ${member.user.toString()}`)
        );
      }
      membersToBan.push(member);
    }

    Promise.all(
      membersToBan.map((member) => message.guild.members.ban(member.user))
    ).then(() => {
      let response =
        generateMentionsString(membersToBan) + " banned from this guild";
      message.channel.send(createCommonMessage(response));
    });
  }
};
