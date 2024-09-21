require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;
require('./command');

const { Client, GatewayIntentBits}= require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("messageCreate", (message)=>{
    console.log(message.content);

    if(message.author.bot)
        return;
    message.reply({content: "Hi from Bot"})
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    console.log(commandName);

    if (commandName === 'hello') {
        await interaction.reply('Namaste from bot!');
    }
    //you can add any other command handlers here
});

client.login(BOT_TOKEN);


