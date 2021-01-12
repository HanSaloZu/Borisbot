const { InvalidMentionError } = require("./errors");

module.exports = (mention) => {
  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);
    if (mention.startsWith("!")) mention = mention.slice(1);

    return mention;
  } else {
    throw new InvalidMentionError(mention);
  }
};
