require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;
require('./command');

const { Client, GatewayIntentBits } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
const QRCode = "qrcode";
const GoogleQRCodeURLRoot = "https://api.qrserver.com/v1/create-qr-code/";

client.on("messageCreate", (message) => {
    console.log(message.content);

    if (message.author.bot)
        return;
    message.reply({ content: "Hi from Bot" })
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    if (commandName === 'hello') {
        await interaction.reply('Namaste from bot!');
    }

    if (commandName === QRCode) {
        const width = interaction.options.getNumber('width') || 250;
        const height = interaction.options.getNumber('height') || 250;
        const data = interaction.options.getString('input');
        const color = interaction.options.getString('color') || '000000';

        const url = `${GoogleQRCodeURLRoot}?data=${encodeURIComponent(data)}&size=${width}x${height}&color=${color}`;
        console.log(url);
        const response = new EmbedBuilder()
            .setTitle("QR Code Response")
            .setColor(`#${color}`)
            .setImage(url)
            .setTimestamp();

        await interaction.reply({ embeds: [response] });
    }
});

client.login(BOT_TOKEN)
.catch((error)=> console.log(error));


