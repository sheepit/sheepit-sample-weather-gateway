'use strict';

const mockSource = require('./mock-source');
const weatherApiSource = require('./weather-api-source');

const weatherSourceName = process.env.WEATHER_SOURCE || 'mock';

exports.create = () => {
    switch (weatherSourceName) {
        
        case 'mock':
            return mockSource.create();

        case 'weatherApi':
            return weatherApiSource.create();

        default:
            throw new Error(`unknown weather source: ${weatherSourceName}`);

    }
};