module.exports = {
  name: "flipcoin",
  description: "Toss a coin. Sides: :full_moon: :new_moon:",
  execute(message) {
    message.channel.send(
      Math.round(Math.random()) ? ":full_moon:" : ":new_moon:"
    );
  }
};
