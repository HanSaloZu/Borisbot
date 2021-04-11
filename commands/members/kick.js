const { messages, errors } = require("../../utils");
const {
  generateMentionsString,
  hasRequesterHigherRoleThanTarget
} = require("./localUtils");

function validateKickCommandArguments(message) {
  if (!message.member.permissions.has("KICK_MEMBERS"))
    throw new errors.PermissionError();
  if (!message.mentions.users.size) throw new errors.MentionRequiredError();
}

module.exports = {
  name: "kick",
  description:
    "Kicks the users from the guild\n\n `kick @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message) {
    validateKickCommandArguments(message);

    let membersToKick = [];
    for (let mentionedUser of message.mentions.users) {
      const member = await message.guild.members.fetch(mentionedUser[1]);

      if (member.kickable) {
        if (hasRequesterHigherRoleThanTarget(member, message.member)) {
          membersToKick.push(member);
        } else
          return message.channel.send(
            messages.createErrorMessage(`You cannot kick ${member.toString()}`)
          );
      } else
        return message.channel.send(
          messages.createErrorMessage(`I cannot kick ${member.toString()}`)
        );
    }

    await Promise.all(membersToKick.map((member) => member.kick()));
    let response =
      generateMentionsString(membersToKick) + " kicked from this guild";
    message.channel.send(messages.createCommonMessage(response));
  }
};
