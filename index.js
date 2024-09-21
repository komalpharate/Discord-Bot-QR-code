require('dotenv').config();
const botToken = process.env.BOT_TOKEN;

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

client.login(botToken);

const { REST, Routes } = require('discord.js');

