#!/bin/bash

set -e

usage() { echo "Use -i to specify the tag (defaults to hiberglobal/mock-server), -v to specify the version"; }

IMAGE="hiberglobal/mock-server"

while getopts ':hi:v:' option; do
  case ${option} in
    h  ) usage; exit;;
    v  ) VERSION=$OPTARG;;
    i  ) IMAGE=$OPTARG;;
    \? ) echo "Unknown option: -$OPTARG" >&2; exit 1;;
    :  ) echo "Missing option argument for -$OPTARG" >&2; exit 1;;
  esac
done

if [[ "$VERSION" == "" ]]; then usage; exit 1; fi

./gradlew build -PdockerizeServer
docker build -t ${IMAGE}:$VERSION -t ${IMAGE}:latest server
