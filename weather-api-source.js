'use strict';

const axios = require('axios');

const apiKey = process.env.WEATHER_WEATHERAPI_KEY;

const weatherApiSource = async () => {
    const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
            q: 'katowice',
            key: apiKey
        }
    });

    console.log(response.data);

    return {
        description: response.data.current.condition.text.toLowerCase()
    };
}

exports.create = () => {
    if (!apiKey) {
        throw new Error('Weather API key is missing!');
    }

    return weatherApiSource;
}