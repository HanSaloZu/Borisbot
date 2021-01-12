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
  constructor(
    mention,
    message = `${mention} - Invalid mention, user not found`
  ) {
    super(message);
    this.name = "InvalidMentionError";
  }
}

class PermissionError extends CustomError {
  constructor(message = "You don't have permissions to execute this command") {
    super(message);
    this.name = "PermissionError";
  }
}

class InvalidArgumentError extends CustomError {
  constructor(message = "Invalid argument") {
    super(message);
    this.name = "InvalidArgumentError";
  }
}

module.exports = {
  MentionRequiredError,
  InvalidMentionError,
  PermissionError,
  InvalidArgumentError
};
