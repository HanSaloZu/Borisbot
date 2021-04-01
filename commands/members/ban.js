const {
  getUserIdFromMention,
  messages,
  generateMentionsString,
  errors
} = require("../../utils");
const { createErrorMessage } = require("../../utils/messages");

module.exports = {
  name: "ban",
  description:
    "Bans the users from the guild\n\n `ban @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message, args) {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      throw new errors.PermissionError();
    if (!args.length) throw new errors.MentionRequiredError();

    let membersToBan = [];
    for (let mention of args) {
      const member = await message.guild.members.fetch(
        getUserIdFromMention(mention)
      );

      if (!member.bannable) {
        return message.channel.send(
          createErrorMessage(`I cannot ban ${member.user.toString()}`)
        );
      }
      membersToBan.push(member);
    }

    Promise.all(
      membersToBan.map((member) => message.guild.members.ban(member.user))
    );
    let response =
      generateMentionsString(membersToBan) + " banned from this guild";
    message.channel.send(messages.createCommonMessage(response));
  }
};
