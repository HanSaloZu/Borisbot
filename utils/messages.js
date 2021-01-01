const { MessageEmbed } = require("discord.js");

const config = require("../config");

function createCommonMessage() {
  return new MessageEmbed().setColor(
    config.get("messagesColors:commonMessageColor")
  );
}

function createErrorMessage() {
  return new MessageEmbed().setColor(
    config.get("messagesColors:errorMessageColor")
  );
}

module.exports = {
  createCommonMessage,
  createErrorMessage
};
