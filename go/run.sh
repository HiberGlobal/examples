#!/bin/bash

set -e

function finish {
  echo "Killing mock server..."
  docker rm -f go-example-server
}
trap finish EXIT

echo "Starting mock server..."
docker run -id -p9090:9090 --name go-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

go get -u github.com/golang/protobuf/protoc-gen-go
go get google.golang.org/grpc
go get -u github.com/square/goprotowrap/cmd/protowrap

#cp ../hiber-api/common.proto hiber/common/
#cp ../hiber-api/account.proto hiber/account/
#cp ../hiber-api/subscription.proto hiber/account/subscription/
#cp ../hiber-api/*user.proto hiber/user/
#cp ../hiber-api/dashboard.proto hiber/dashboard/
#cp ../hiber-api/event.proto hiber/event/
#cp ../hiber-api/map.proto hiber/map/
#cp ../hiber-api/modem.proto hiber/modem/
#cp ../hiber-api/tag.proto hiber/tag/
#cp ../hiber-api/testing.proto hiber/testing/
#cp ../hiber-api/token.proto hiber/token/
#cp ../hiber-api/webhook.proto hiber/webhook/
#
#sed -r -i -e 's/import "([^\/]*).proto"/import "\1\/\1.proto"/g' hiber/**/*.proto
#sed -r -i -e 's/import "subscription\/subscription.proto"/import "account\/subscription\/subscription.proto"/g' hiber/**/*.proto
#sed -r -i -e 's/import "([^\/]*).proto"/import "\1\/\1.proto"/g' hiber/**/**/*.proto

protowrap -I ../hiber-api ../hiber-api/*.proto --go_out=plugins=grpc:hiber

# fails because of multiple packages in the input
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:. ../hiber-api/*.proto

# fails because imports are not figured out, defaulting to "."
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:. ../hiber-api/base.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./account ../hiber-api/account.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./account/subscription ../hiber-api/subscription.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./user ../hiber-api/*user.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./dashboard ../hiber-api/dashboard.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./event ../hiber-api/event.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./map ../hiber-api/map.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./modem ../hiber-api/modem.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./tag ../hiber-api/tag.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./testing ../hiber-api/testing.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./token ../hiber-api/token.proto
#protoc --proto_path=../hiber-api --go_out=plugins=grpc:./webhook ../hiber-api/webhook.proto

echo "Doing client calls..."

go run client.go
