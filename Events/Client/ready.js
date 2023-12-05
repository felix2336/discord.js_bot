const { Client, ActivityType, WebhookClient, EmbedBuilder, PresenceUpdateStatus } = require("discord.js")

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client) {
        console.log('Bot wurde gestartet');
        client.user.setActivity({type: ActivityType.Watching, name: 'discord.js'});
    }
}