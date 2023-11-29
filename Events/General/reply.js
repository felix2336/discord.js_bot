const { Message } = require('discord.js')

module.exports = {
    name: 'messageCreate', //Der Event Name => Alle Events findest du bei System/Validations/Events.js

    /**
     * @param {Message} message 
     */

    async execute(message) {
        if(message.author.bot) return; //Nachrichten von Bots ignorieren
        const words = ['hallo', 'moin'] //Liste mit Wörtern, auf die der Bot antworten soll

        const containsWord = words.some(word => message.content.toLowerCase().includes(word.toLowerCase())) //message.content = Nachrichteninhalt | .toLowerCase() damit der Inhalt zu Kleinbuchstaben gemacht wird | .includes() um zu gucken, ob der Inhalt etwas bestimmtes enthält, in diesem Fall ein wort aus der Liste
    
        if(containsWord){
            message.reply(`Hallo ${message.member}`) //message.reply um auf die Nachricht des Absenders zu antworten | message.member um den Absender der Nachricht zu erwähnen
        }
    }
}