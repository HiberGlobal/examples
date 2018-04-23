#!/bin/bash

set -e

function finish {
  echo "Killing mock server..."
  docker rm -f ruby-example-server
}
trap finish EXIT

echo "Starting mock server..."
docker run -id -p9090:9090 --name ruby-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

gem install bundler
bundle install

grpc_tools_ruby_protoc -I ../hiber-api --ruby_out=generated --grpc_out=generated ../hiber-api/*.proto

echo "Doing client calls..."
bundle exec ./client.rb
