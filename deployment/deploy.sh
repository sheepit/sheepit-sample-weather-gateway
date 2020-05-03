#!/bin/bash

cat namespace.yaml \
| sed "s/{{WEATHER_K8S_NAMESPACE}}/$WEATHER_K8S_NAMESPACE/g" \
| kubectl apply -f -

cat kubernetes.yaml \
| sed "s/{{WEATHER_MOCK_DESCRIPTION}}/$WEATHER_MOCK_DESCRIPTION/g" \
| sed "s/{{WEATHER_PORT}}/$WEATHER_PORT/g" \
| kubectl apply --namespace=$WEATHER_K8S_NAMESPACE -f -