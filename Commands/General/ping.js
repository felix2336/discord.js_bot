const {CommandInteraction} = require('discord.js')

module.exports = {
	name: 'ping',
    description: 'Teste, ob der Bot reagiert',
    permission: 'Sendmessages',
    
    /**
	  *@param {CommandInteraction} interaction
      */

	async execute(interaction){
        interaction.reply({content: 'Pong'}) //= interaction.reply('Pong') (content = Nachrichteninhalt)
    }
}