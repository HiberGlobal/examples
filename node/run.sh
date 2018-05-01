#!/usr/bin/env bash

set -e

function finish {
  echo "Killing mock server..."
  docker rm -f node-example-server
}
trap finish EXIT

echo "Starting mock server..."
docker run -id -p9090:9090 --name node-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

npm install
./node_modules/grpc-tools/bin/protoc -I../hiber-api --js_out=import_style=commonjs,binary:"./generated/" --grpc_out="./generated" --plugin=protoc-gen-grpc="./node_modules/grpc-tools/bin/grpc_node_plugin" ../hiber-api/*.proto

node client.js
