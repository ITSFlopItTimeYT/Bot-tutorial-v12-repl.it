//stay-alive
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Uptimebot!'));

app.listen(port, () => console.log(`Example app listening at com.sun.net.httpserver.HttpServer:${port}`));
//bot-code

