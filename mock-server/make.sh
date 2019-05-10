#!/usr/bin/env bash

ROOT_DIR=`dirname "$0"`

# TODO TESTING:
# ./gradlew check -i -PtestFilter="`circleci tests glob "**/*test/**/*.kt" | circleci tests split --split-by=timings`"

cd ${ROOT_DIR} && ./gradlew build "$@"
