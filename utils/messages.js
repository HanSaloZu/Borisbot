const { MessageEmbed } = require("discord.js");

const config = require("../config");
const COMMON_MESSAGE_COLOR = config.get("messagesColors:commonMessageColor");
const ERROR_MESSAGE_COLOR = config.get("messagesColors:errorMessageColor");

function createEmbedMessage(color) {
  return new MessageEmbed().setColor(color);
}

function createCommonMessage(message) {
  return createEmbedMessage(COMMON_MESSAGE_COLOR).setDescription(message);
}

function createErrorMessage(message) {
  return createEmbedMessage(ERROR_MESSAGE_COLOR).setDescription(message);
}

function createTimestampedMessage() {
  return createEmbedMessage(COMMON_MESSAGE_COLOR).setTimestamp();
}

module.exports = {
  createCommonMessage,
  createErrorMessage,
  createTimestampedMessage
};
