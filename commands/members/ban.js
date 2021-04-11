const { messages, errors } = require("../../utils");
const {
  generateMentionsString,
  hasRequesterHigherRoleThanTarget
} = require("./localUtils");

function validateBanCommandArguments(message) {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    throw new errors.PermissionError();
  if (!message.mentions.users.size) throw new errors.MentionRequiredError();
}

module.exports = {
  name: "ban",
  description:
    "Bans the users from the guild\n\n `ban @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message) {
    validateBanCommandArguments(message);

    let membersToBan = [];
    for (let mentionedUser of message.mentions.users) {
      const member = await message.guild.members.fetch(mentionedUser[1]);
      if (member.bannable) {
        if (hasRequesterHigherRoleThanTarget(member, message.member)) {
          membersToBan.push(member);
        } else
          return message.channel.send(
            messages.createErrorMessage(`You cannot ban ${member.toString()}`)
          );
      } else
        return message.channel.send(
          messages.createErrorMessage(`I cannot ban ${member.toString()}`)
        );
    }

    Promise.all(membersToBan.map((member) => member.ban()));
    let response =
      generateMentionsString(membersToBan) + " banned from this guild";
    message.channel.send(messages.createCommonMessage(response));
  }
};
