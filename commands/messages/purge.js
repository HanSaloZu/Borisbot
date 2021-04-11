const { errors, messages } = require("../../utils");

function validate_purge_command_arguments(message) {
  let args = message.args;
  if (!message.member.permissionsIn(message.channel).has("MANAGE_MESSAGES"))
    throw new errors.PermissionError();
  if (!args.length) args.push(2);

  let messagesAmount = Number(args[0]);
  if (
    Number.isNaN(messagesAmount) ||
    !Number.isInteger(messagesAmount) ||
    messagesAmount < 2 ||
    messagesAmount > 100
  )
    throw new errors.InvalidArgumentError(
      "Invalid argument! The amount of messages must be an integer greater than 2 and less than 100"
    );
}

module.exports = {
  name: "purge",
  description:
    "Deletes messages in a text channel\n This command may takes a while, but the chat using is allowed, new messages will not be deleted.\n\n `purge <amount>(optional, default value: 2) @<senderUsername>(optional, default value: all users)`",
  async execute(message) {
    validate_purge_command_arguments(message);

    const messagesAmount = Number(message.args[0]);
    const user = message.mentions.users.first() || null;
    let fetchedMessages = await message.channel.messages.fetch({
      limit: user ? 100 : messagesAmount
    });
    let deletingMessages = [];

    for (const [, messageObject] of fetchedMessages) {
      if (user) {
        if (messagesAmount > deletingMessages.length) {
          if (messageObject.author.id === user.id) {
            deletingMessages.push(
              message.channel.messages.delete(messageObject)
            );
          }
        } else break;
      } else {
        deletingMessages.push(message.channel.messages.delete(messageObject));
      }
    }

    await Promise.all(deletingMessages);
    message.channel.send(
      messages.createCommonMessage("Messages were successfully deleted.")
    );
  }
};
