const { messages, errors } = require("../../utils");
const generateMentionsString = require("./generateMentionsString");

function validate_ban_command_arguments(message) {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    throw new errors.PermissionError();
  if (!message.mentions.users.size) throw new errors.MentionRequiredError();
}

module.exports = {
  name: "ban",
  description:
    "Bans the users from the guild\n\n `ban @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message) {
    validate_ban_command_arguments(message);

    let membersToBan = [];
    for (let user of message.mentions.users) {
      const member = await message.guild.members.fetch(user[1]);

      if (!member.bannable) {
        return message.channel.send(
          messages.createErrorMessage(`I cannot ban ${member.toString()}`)
        );
      }
      membersToBan.push(member);
    }

    Promise.all(membersToBan.map((member) => member.ban()));
    let response =
      generateMentionsString(membersToBan) + " banned from this guild";
    message.channel.send(messages.createCommonMessage(response));
  }
};
