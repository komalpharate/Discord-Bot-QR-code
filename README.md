# Discord-Bot : generates QR code of input
`npm install`

1. create account on discord website.
2. create server.
3. create an application on server.
4. Set a bot with required permission. 
5. Use `/qrcode input string_anything_to_be_converted_to_QRcode` 0r
   
 `/qrcode input string_anything_to_be_converted_to_QRcode width _integer_ height _integer_ color _color_code_`

   **About**

**discord.js:** The primary library used for interacting with the Discord API. It provides methods and classes to create a bot, handle events, and manage commands.

**Bot Creation / Client Initialization:** Created a instance of the Discord Client with specified **intents** to listen for guild(server) events, message content, and interaction events.

**Event Listeners:**
1.  messageCreate Event
2.  interactionCreate Event

**Command Registration and Handling:**
1. Custom commands registered under Bot/Application created.
2. For the /hello command, the bot responds with a greeting.
3. For the /qrcode command, it gathers options (input data, width, height, and color) and constructs a URL to generate a QR code using an external API (GoQR.me). It then sends an embedded message containing the **QR code image** back to the user.

**External API Integration**
The bot interacts with the GoQR.me API to generate QR codes based on user input(created on discord site). This external service generates the QR code image that the bot embeds in its response.

