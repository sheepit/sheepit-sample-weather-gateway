'use strict';

const express = require('express');

const host = '0.0.0.0';
const port = 8080;
const mockDescription = process.env.WEATHER_MOCK_DESCRIPTION || 'sunny, but not quite';

const app = express();

app.get('/cities/katowice/weather', (req, res) => {
    res.json({
        description: mockDescription
    });
});

app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
});