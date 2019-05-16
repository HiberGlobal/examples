#!/usr/bin/env bash

set -e

javac SimpleServerExample.java

function finish {
  printf "Stopping server at process $!"
  kill $!
}

trap finish EXIT

while true
do
  java SimpleServerExample &
  echo "Server starting at process $!"
  sleep 2

  read -p "Press enter to restart, ctrl-c to stop"
  finish
done
