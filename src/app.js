'use strict';

import log4js from 'log4js';
import express from 'express';
import os from 'os';

const log = log4js.getLogger();
const app = express();

log4js.configure({
    appenders: {
        'console': { type: 'console' }
    },
    categories: {
        default: { appenders: ['console'], level: 'DEBUG' },
    }
});

log.info("Server initializing");

const env = app.get('env');
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    var strMessage = 'hello world - [ env: ' + env + ', hostname: ' + os.hostname() + ', date: ' + new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'long',
        timeZone: 'America/New_York',
    }).format(new Date()) + ' ]';
    res.send(strMessage);
    log.info(strMessage);
});

app.listen(port, () => {
    log.info("Server started and running on Port - " + port);
});

export default app;