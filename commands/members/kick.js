const { getUserIdFromMention, messages, errors } = require("../../utils");
const generateMentionsString = require("./generateMentionsString");

module.exports = {
  name: "kick",
  description:
    "Kicks the users from the guild\n\n `kick @<username> @<username> @<username> ...(must be at least one username)`",
  async execute(message, args) {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      throw new errors.PermissionError();
    if (!args.length) throw new errors.MentionRequiredError();

    let membersToKick = [];
    for (let mention of args) {
      const member = await message.guild.members.fetch(
        getUserIdFromMention(mention)
      );

      if (!member.kickable) {
        return message.channel.send(
          messages.createErrorMessage(`I cannot kick ${member.user.toString()}`)
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
