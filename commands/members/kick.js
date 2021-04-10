const { messages, errors } = require("../../utils");
const generateMentionsString = require("./generateMentionsString");

function validate_kick_command_arguments(message) {
  if (!message.member.permissions.has("KICK_MEMBERS"))
    throw new errors.PermissionError();
  if (!message.mentions.users.size) throw new errors.MentionRequiredError();
}

module.exports = {
  name: "kick",
  description:
    "Kicks the users from the guild\n\n `kick @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message) {
    validate_kick_command_arguments(message);

    let membersToKick = [];
    for (let user of message.mentions.users) {
      const member = await message.guild.members.fetch(user[1]);

      if (!member.kickable) {
        return message.channel.send(
          messages.createErrorMessage(`I cannot kick ${member.toString()}`)
        );
      }
      membersToKick.push(member);
    }

    await Promise.all(membersToKick.map((member) => member.kick()));
    let response =
      generateMentionsString(membersToKick) + " kicked from this guild";
    message.channel.send(messages.createCommonMessage(response));
  }
};
