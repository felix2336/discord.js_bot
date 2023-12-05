const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,

    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.ThreadMember,
        Partials.Reaction,
        Partials.User,
        Partials.GuildScheduledEvent,
    ],
});
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");

["events", "commands", "buttons" /*,"modals", "crash"*/].forEach(handler => {
    require(`./Handler/${handler}`)(client, PG, Ascii);
});

client.commands = new Collection();
client.buttons = new Collection();
// client.modals = new Collection();

client.setMaxListeners(0);
client.login('DEIN_BOT_TOKEN');
module.exports = client;