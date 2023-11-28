const { CommandInteraction, EmbedBuilder, Client } = require('discord.js')

module.exports = {
    name: 'info', //Name des Slash Commands
    description: 'Lasse dir Informationen zu dem Bot anzeigen', //Beschreibung des Slash Commands
    permission: 'SendMessages', //Die Permission, die zum Ausführen des Slash Commands benötigt wird. (Alle Permissions findest du bei System/Validations/Permissions.js)

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */

    async execute(interaction, client) {
        const embed = new EmbedBuilder() //zum Erstellen eines Embeds
            .setTitle('Informationen') //Titel
            .setDescription('Dies ist ein Testbot von <@773072144304963624>') //Beschreibung
            .addFields([
                { name: 'Feld', value: 'Felder sind nützlich (:' }
            ])
                                                  //                                                                               vvvvvvvvvvvvvvv
        interaction.reply({ embeds: [embed] })    //um das Embed als Antwort auf den Befehl anzuzeigen (Ergänze ({embeds: [embed], ephemeral: true})), damit die Nachricht nur von demjenigen gesehen wird, der den Befehl ausführt
    }
}