#!/bin/bash

set -e

usage() { echo "Use -i to specify the tag"; }

IMAGE="hiberglobal/mock-server"

while getopts ':hi:' option; do
  case ${option} in
    h  ) usage; exit;;
    i  ) IMAGE=$OPTARG;;
    \? ) echo "Unknown option: -$OPTARG" >&2; exit 1;;
    :  ) echo "Missing option argument for -$OPTARG" >&2; exit 1;;
  esac
done

./gradlew build -PdockerizeServer
docker build -t ${IMAGE} server
