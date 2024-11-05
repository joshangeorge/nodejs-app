
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    strMessage = 'hello world - ' + new Date();
    res.send(strMessage);
    console.log(strMessage);
});

app.listen(3000);

module.exports = app;