const { messages } = require("../../utils");

function formatDuration(ms) {
  let res = [];
  const time = {
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  };

  const days = Math.floor(ms / time.day);
  ms -= days * time.day;
  const hours = Math.floor(ms / time.hour);
  ms -= hours * time.hour;
  const minutes = Math.floor(ms / time.minute);
  ms -= minutes * time.minute;
  const seconds = Math.floor(ms / time.second);

  if (days >= 1) res.push(`${days} ${days > 1 ? "days" : "day"}`);
  if (hours >= 1) res.push(`${hours} ${hours > 1 ? "hours" : "hour"}`);
  if (minutes >= 1)
    res.push(`${minutes} ${minutes > 1 ? "minutes" : "minute"}`);
  if (seconds >= 1)
    res.push(`${seconds} ${seconds > 1 ? "seconds" : "second"}`);

  const lastElement = res.length > 1 ? res.pop() : undefined;
  res = res.join(", ");
  if (lastElement) res += ` and ${lastElement}`;
  return res;
}

module.exports = {
  name: "uptime",
  description: "Sends the bot uptime",
  execute(message, client) {
    message.channel.send(
      messages.createCommonMessage(
        `The bot works for ${formatDuration(client.uptime)}.`
      )
    );
  }
};
