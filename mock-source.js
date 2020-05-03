'use strict';

const mockDescription = process.env.WEATHER_MOCK_DESCRIPTION || 'sunny, but not quite';

const mockSource = async () => {
    return {
        description: mockDescription
    };
};

exports.create = () => mockSource;