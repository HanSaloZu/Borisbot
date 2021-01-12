const {
  PermissionError,
  InvalidArgumentError,
  getUserIdFromMention,
  createCommonMessage
} = require("../../utils");

module.exports = {
  name: "purge",
  description:
    "Deletes messages in a text channel\n This command may takes a while, but the chat using is allowed, new messages will not be deleted.\n\n `purge <amount>(optional, default value: 2) @<senderUsername>(optional, default value: all users)`",
  execute(message, args) {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      throw new PermissionError();
    if (!args.length) args.push(2);

    let messagesAmount = Number(args[0]);
    if (
      Number.isNaN(messagesAmount) ||
      !Number.isInteger(messagesAmount) ||
      messagesAmount < 2 ||
      messagesAmount > 100
    )
      throw new InvalidArgumentError(
        "Invalid argument! The amount of messages must be an integer greater than 2 and less than 100"
      );

    let userId = null;
    if (args[1]) userId = getUserIdFromMention(args[1]);

    message.channel.messages
      .fetch({ limit: userId ? 100 : messagesAmount })
      .then((fetchedMessages) => {
        let deletingMessages = [];

        for (const [, messageObject] of fetchedMessages) {
          if (userId) {
            if (messagesAmount > deletingMessages.length) {
              if (messageObject.author.id === userId) {
                deletingMessages.push(
                  message.channel.messages.delete(messageObject)
                );
              }
            } else break;
          } else {
            deletingMessages.push(
              message.channel.messages.delete(messageObject)
            );
          }
        }

        Promise.all(deletingMessages).then(() =>
          message.channel.send(
            createCommonMessage("Messages were successfully deleted.")
          )
        );
      });
  }
};
