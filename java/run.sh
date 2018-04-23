#!/bin/bash

set -e

echo "Starting mock server..."
docker run -id -p9090:9090 --name java-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

./gradlew build

echo "Doing client calls..."
./gradlew example:run

echo "Killing mock server..." 
docker rm -f java-example-server

