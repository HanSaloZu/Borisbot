class MentionRequiredError extends Error {
  constructor(message = "You need to mention the user") {
    super(message);
    this.name = "MentionRequiredError";
  }
}

class InvalidMentionError extends Error {
  constructor(message = "Invalid mention, user not found") {
    super(message);
    this.name = "InvalidMentionError";
  }
}

module.exports = {
  MentionRequiredError,
  InvalidMentionError
};
