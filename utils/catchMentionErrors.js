const { createErrorMessage } = require("./messages");

module.exports = (message, error) => {
  if (
    error.name === "MentionRequiredError" ||
    error.name === "InvalidMentionError"
  ) {
    message.channel.send(createErrorMessage().setDescription(error.message));
  } else {
    throw error;
  }
};
