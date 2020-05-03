# Sheep It - Sample Weather Gateway

This is a minimalistic Node.js app to test Sheep It deployments. The app's purpose is to provide information about weather in Katowice. Depending on the the configuration, the app will either get this information from [OpenWeather](https://openweathermap.org/) or return a static, mocked value.

Image is available on [Docker Hub](https://hub.docker.com/r/sheepit/sheepit-sample-weather-gateway).

Running the app locally:

``` bash
npm start
curl http://localhost:8081/cities/katowice/weather
# {"description": "sunny, but not quite"}
```

todo: configuring the API and mocked value

Building a Docker image:

``` bash
docker build -t <your username>/sheepit-sample-weather-gateway:0.0.1 .
```

Running the image locally:

``` bash
docker run -p 8081:8081 -d <your username>/sheepit-sample-weather-gateway:0.0.1
curl http://localhost:8081
# {"description": "sunny, but not quite"}
```

Publishing the image:

``` bash
docker login
docker push <your username>/sheepit-sample-weather-gateway:0.0.1
```