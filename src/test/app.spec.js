'use strict';

const request = require('supertest');
const app = require('../app');

describe('App Test', () => {
    it('Should return starts with hello world -', async () => {
        const response = await request(app).get('/');
        await expect(response.status).resolves.toBe(200);
        await expect(response.text.startsWith('hello world -')).resolves.toBe(true);
    });
});
