const commandsObject = Object.assign(
  {},
  require("./guild"),
  require("./members")
);
const commands = new Map();

for (const [, command] of Object.entries(commandsObject)) {
  commands.set(command.name, command);
}

module.exports = commands;
