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
  description:
    "Kicks the users from the guild\n\n `kick @<username> @<username> @<username> ...(must be at least one username)`",
  execute(message, args) {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      throw new PermissionError();
    if (!args.length) throw new MentionRequiredError();

    let membersToKick = [];
    for (let mention of args) {
      const member = message.guild.members.cache.get(
        getUserIdFromMention(mention)
      );

      if (!member.kickable) {
        return message.channel.send(
          createErrorMessage(`I cannot kick ${member.user.toString()}`)
        );
      }
      membersToKick.push(member);
    }

    Promise.all(membersToKick.map((member) => member.kick())).then(() => {
      let response =
        generateMentionsString(membersToKick) + " kicked from this guild";
      message.channel.send(createCommonMessage(response));
    });
  }
};
