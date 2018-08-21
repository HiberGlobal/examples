#!/bin/bash

set -e

go get -u github.com/golang/protobuf/protoc-gen-go
go get google.golang.org/grpc

protoc -I ../hiber-api ../hiber-api/*.proto --go_out=plugins=grpc:hiber

echo "Updated client code"
