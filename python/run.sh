#!/bin/bash

set -e

SCRIPT_DIR=`dirname "$0"`

function finish {
  echo "Killing mock server..."
  docker rm -f python-example-server
}
trap finish EXIT

echo "Starting mock server..."
docker run -id -p9090:9090 --name python-example-server hiberglobal/mock-server
echo "Mock server running on port 9090"

cd ${SCRIPT_DIR}

pip install -r requirements.txt
mkdir -p generated
python -m grpc_tools.protoc -I../hiber-api --python_out=generated --grpc_python_out=generated ../hiber-api/*.proto

sleep 2

echo "Doing client calls..."
python client.py
