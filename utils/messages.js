const { MessageEmbed } = require("discord.js");

const config = require("../config");

function createCommonMessage(message) {
  return new MessageEmbed()
    .setColor(config.get("messagesColors:commonMessageColor"))
    .setDescription(message);
}

function createErrorMessage(message) {
  return new MessageEmbed()
    .setColor(config.get("messagesColors:errorMessageColor"))
    .setDescription(message);
}

module.exports = {
  createCommonMessage,
  createErrorMessage
};
