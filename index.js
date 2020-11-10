//stay-alive
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Uptimebot!'));

app.listen(port, () => console.log(`Example app listening at com.sun.net.httpserver.HttpServer:${port}`));
//bot-code

const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
  console.log('The client is ready!')
 client.user.setPresence({
      activity: {
        name: "Finished Tutorial",
        type: "WATCHING",
      },
    })
})


//end-code
client.login(process.env.token)
