# Sheep It - Sample Weather Gateway

This is a minimalistic Node.js app to test Sheep It deployments. The app's purpose is to provide information about weather in Katowice. Depending on the the configuration, the app will either get this information from [Weather API](https://www.weatherapi.com/) or return a static, mocked value.

Image is available on [Docker Hub](https://hub.docker.com/r/sheepit/sheepit-sample-weather-gateway).

Running the app locally:

``` bash
npm start
curl http://localhost:8081/cities/katowice/weather
# {"description": "sunny, but not quite"}
```

Changing the mock value:

``` bash
WEATHER_SOURCE=mock WEATHER_MOCK_DESCRIPTION="rainy" npm start
curl http://localhost:8081/cities/katowice/weather
# {"description": "rainy"}
```

Using actual Weather API:

Register on [Weather API](https://www.weatherapi.com/) to get your API key.

``` bash
WEATHER_SOURCE=weatherApi WEATHER_WEATHERAPI_KEY=<your api key> npm start
curl http://localhost:8081/cities/katowice/weather
# {"description": <actual weather>}
```

Building a Docker image:

``` bash
docker build -t <your username>/sheepit-sample-weather-gateway:0.0.1 .
```

Running the image locally:

``` bash
docker run -p 8081:8081 -d <your username>/sheepit-sample-weather-gateway:0.0.1
curl http://localhost:8081/cities/katowice/weather
# {"description": "sunny, but not quite"}
```

Publishing the image:

``` bash
docker login
docker push <your username>/sheepit-sample-weather-gateway:0.0.1
```