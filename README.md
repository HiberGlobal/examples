# Hiber API client examples

This folder contains the currently available examples for the Hiber API.

Most of them are minimal examples and pretty self-explanatory. 
They serve mainly to show how to connect to the api, how to make sure your token is set, etc.

Generally, every example contains a script to run it. 
This script will install dependencies, start the mock server, run the client code and stop the mock server again.

For example, to run the python example, simply execute the `run.sh` script. 

## Mock Server

For easy examples, we've created a mock of the Hiber API.
The code for this server is under mock-server.

You do not need to run it like that, though. It's porvided as a Docker image for easy usage.

To start the mock server manually, run:

```
docker run -it -p9090:9090 hiberglobal/mock-server:latest
```
