const { REST, Routes,ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'hello',
        description: 'Replies with Namaste!',
    },
    {
        name: 'qrcode',
        description: 'Generates QR code of provided info',
        options: [
            {
                
                type: ApplicationCommandOptionType.String, // Use the new String type
                name: 'input',
                description: 'The information to encode in the QR code',
                required: true,
            },
            {
                type: ApplicationCommandOptionType.Integer, // Use the new Integer type
                name: 'width',
                description: 'Width of the QR code',
                required: false,
            },
            {
                type: ApplicationCommandOptionType.Integer, // Use the new Integer type
                name: 'height',
                description: 'Height of the QR code',
                required: false,
            },
            {
                type: ApplicationCommandOptionType.String, // Use the new String type
                name: 'color',
                description: 'Color of the QR code in hex format (e.g., 000000 for black)',
                required: false,
            },
        ],
    }
];

(async () => {
    const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID), 
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();


