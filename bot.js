const Discord = require("discord.js");

const config = require("./config");
const { createErrorMessage } = require("./utils").messages;
const commands = require("./commands");
const help = require("./commands/help");

const client = new Discord.Client();
commands.set("help", help);

client.on("ready", () => {
  console.log("Ready");
});

client.on("reconnecting", () => {
  console.log("Reconnecting");
});

client.on("disconnect", () => {
  console.log("Disconnect");
});

client.on("message", async (message) => {
  const prefix = config.get("prefix");
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  if (!message.guild) {
    return message.channel.send(
      createErrorMessage("This is not a guild channel!")
    );
  }

  const args = message.content.trim().slice(prefix.length).split(/ +/);
  const commandName = args.shift();
  const command = commands.get(commandName);

  if (command) {
    try {
      await command.execute(message, args, client);
    } catch (error) {
      if (error.type === "custom") {
        message.channel.send(createErrorMessage(error.message));
      } else {
        console.log(error);
        message.channel.send(
          createErrorMessage("Error...Something went wrong")
        );
      }
    }
  }
});

client.login(config.get("token"));
