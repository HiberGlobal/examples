#!/usr/bin/env bash

set -e

javac SimpleServerExample.java

function finish {
  printf "Stopping server at process $!"
  kill $!
}

trap finish EXIT

java SimpleServerExample &

echo "Server starting at process $!"

sleep 2

curl -vX POST http://localhost:8080 --data-binary @test.json \
--header "X-Hub-Signature: B106EE4C741E7688ADB713402C16921BE50E55DA8762D2257377E4277D4CE6C1" \
--header "Content-Type: application/json"
