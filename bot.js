const Discord = require("discord.js");

const config = require("./config");
const commands = require("./commands");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready");
});

client.on("reconnecting", () => {
  console.log("Reconnecting");
});

client.on("disconnect", () => {
  console.log("Disconnect");
});

client.login(config.get("token"));
