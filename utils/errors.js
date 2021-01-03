class CustomError extends Error {
  constructor(message) {
    super(message);
    this.type = "custom";
  }
}

class MentionRequiredError extends CustomError {
  constructor(message = "You need to mention the user") {
    super(message);
    this.name = "MentionRequiredError";
  }
}

class InvalidMentionError extends CustomError {
  constructor(message = "Invalid mention, user not found") {
    super(message);
    this.name = "InvalidMentionError";
  }
}

module.exports = {
  MentionRequiredError,
  InvalidMentionError
};
