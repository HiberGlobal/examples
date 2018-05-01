// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var testing_pb = require('./testing_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_testing_PushModemMessagesRequest(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesRequest)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_testing_PushModemMessagesRequest(buffer_arg) {
  return testing_pb.PushModemMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_testing_PushModemMessagesRequest_Response(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesRequest.Response)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_testing_PushModemMessagesRequest_Response(buffer_arg) {
  return testing_pb.PushModemMessagesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Method to test the system in different ways, meant for customer access. For example, you can use this to test
// whether everything works from message to webhook call, and further in your own system.
var TestingServiceService = exports.TestingServiceService = {
  pushModemMessages: {
    path: '/hiber.testing.TestingService/PushModemMessages',
    requestStream: false,
    responseStream: false,
    requestType: testing_pb.PushModemMessagesRequest,
    responseType: testing_pb.PushModemMessagesRequest.Response,
    requestSerialize: serialize_hiber_testing_PushModemMessagesRequest,
    requestDeserialize: deserialize_hiber_testing_PushModemMessagesRequest,
    responseSerialize: serialize_hiber_testing_PushModemMessagesRequest_Response,
    responseDeserialize: deserialize_hiber_testing_PushModemMessagesRequest_Response,
  },
};

exports.TestingServiceClient = grpc.makeGenericClientConstructor(TestingServiceService);
