const { MentionRequiredError, InvalidMentionError } = require("./errors");

function parseUserIdFromMention(mention) {
  if (!mention) throw new MentionRequiredError();

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);
    if (mention.startsWith("!")) mention = mention.slice(1);

    return mention;
  }
}

module.exports = (mention, client) => {
  const user = client.users.cache.get(parseUserIdFromMention(mention));
  if (!user) throw new InvalidMentionError();

  return user;
};
