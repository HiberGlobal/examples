#!/bin/bash

set -e

SCRIPT_DIR=`dirname "$0"`

function finish {
  echo "Killing mock server..."
  docker rm -f go-example-server
}
trap finish EXIT

echo "Starting mock server..."
docker run -id -p9090:9090 --name go-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

cd ${SCRIPT_DIR}

go get -u github.com/golang/protobuf/protoc-gen-go
go get google.golang.org/grpc

protowrap -I ../hiber-api ../hiber-api/*.proto --go_out=plugins=grpc:hiber

echo "Doing client calls..."

cd list-modems

go run list-modems.go -token your-token-here -address localhost:9090 -insecure

