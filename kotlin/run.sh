#!/bin/bash

set -e

SCRIPT_DIR=`dirname "$0"`

function finish {
  echo "Killing mock server..."
  docker rm -f kotlin-example-server
}
trap finish EXIT

cd ${SCRIPT_DIR}

./gradlew build

echo "Starting mock server..."
docker run -id -p9090:9090 --name kotlin-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

echo "Doing client calls..."
./gradlew example:run
