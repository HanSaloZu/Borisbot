const { createTimestampedMessage } = require("../../utils").messages;
const dateFormat = require("../../config").get("dateFormat");

module.exports = {
  name: "guild-info",
  description: "Gives complete information about the guild",
  async execute(message, client) {
    const guild = message.guild;

    const guildOwner = await client.users.fetch(guild.ownerID);
    const guildRegion =
      guild.region.charAt(0).toUpperCase() + guild.region.slice(1);
    const createdAt = guild.createdAt.toLocaleDateString("en-US", dateFormat);

    message.channel.send(
      createTimestampedMessage()
        .setTitle("Guild Info")
        .setThumbnail(message.guild.iconURL())
        .addField(
          "General",
          `Name: ${guild.name}\n` +
            `Owner: ${guildOwner.toString()}\n` +
            `Member Count: ${guild.memberCount}\n` +
            `Region: ${guildRegion}\n` +
            `ID: ${guild.id}\n` +
            `Created At: ${createdAt}`
        )
        .addField(
          "Description",
          guild.description
            ? guild.description
            : "This guild has no description"
        )
        .addField(
          "Premium",
          `Premium Tier: ${guild.premiumTier}\n` +
            `Premium Subscription Count: ${guild.premiumSubscriptionCount}`
        )
    );
  }
};
