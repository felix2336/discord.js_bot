const { Client, ActivityType, WebhookClient, EmbedBuilder, PresenceUpdateStatus } = require("discord.js")
const fs = require('fs')
const config = require('../../config.json')
const mongoose = require('mongoose')
const mongoURL = config.mongoURL




const webhook = new WebhookClient({
    url: 'https://discord.com/api/webhooks/1162073029912830094/PP7slZuKD72DAVAIVfBYd11AdsQ23jJ5AWkMrTF_0kA5Y-dKh7dbGdlVTtk3pD1AKkKJ'
})

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client) {
        const embed = new EmbedBuilder()
            .setTitle('Bot gestartet')
            .setTimestamp()
        webhook.send({ embeds: [embed] })
        let online = 2;
        console.log("Der Bot ist nun Online!")

        const data = JSON.parse(fs.readFileSync('./maintenance.json', 'utf8'))
        const bool = data['maintenance']
        if (bool == true) {
            client.user.setActivity({ type: ActivityType.Watching, name: 'WARTUNGSARBEITEN' })
            online = 1;
        } else {
            client.user.setActivity({ type: ActivityType.Watching, name: 'Under Development' })
            online = 2
        }
        const updateStatus = async () => {

            if (online == 0) {
                client.user.setActivity({ type: ActivityType.Watching, name: 'WARTUNGSARBEITEN' })
                online++;
            } else if (online == 1) {
                client.user.setActivity({ type: ActivityType.Watching, name: 'Under Development' })
                online++;
            } else if (online == 2) {
                const guilds = client.guilds.cache.size.toString()
                client.user.setActivity({ type: ActivityType.Listening, name: `${guilds} Servern` })
                online++;
            } else if (online == 3) {
                online++;
                const fetchPromises = [];
                
                client.guilds.cache.forEach((guild) => {
                    fetchPromises.push(guild.members.fetch());
                });
                
                const memberArrays = await Promise.all(fetchPromises);
                
                let count = []
                memberArrays.forEach((members) => {
                    members.forEach((member) => {
                        if (!count.includes(member.user.id) && !member.user.bot) {
                            count.push(member.user.id)
                        }
                    })
                });
                
                client.user.setActivity({ type: ActivityType.Listening, name: `${count.length} Usern`})

            } else if (online == 4) {
                online++
                client.user.setActivity({ type: ActivityType.Watching, name: '/help' })
            }else if(online == 5){
                client.user.setActivity({type: ActivityType.Watching, name: 'Add me C:'})

                if (bool == true) {
                    online = 0;
                } else {
                    online = 1;
                }
            }
        }
        updateStatus()
        setInterval(updateStatus, 60000);
    }
}