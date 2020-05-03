'use strict';

const express = require('express');
const weatherSource = require('./weather-source');

const getWeather = weatherSource.create();

const app = express();

app.get('/cities/katowice/weather', async (req, res, next) => {
    try {
        const weather = await getWeather();
        res.json(weather);
    } catch (error) {
        next(error);
    }
});

const host = '0.0.0.0';
const port = 8081;

app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
});