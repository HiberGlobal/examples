// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var testing_pb = require('./testing_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_testing_PushModemMessagesFromDebugPortRequest(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesFromDebugPortRequest)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesFromDebugPortRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_testing_PushModemMessagesFromDebugPortRequest(buffer_arg) {
  return testing_pb.PushModemMessagesFromDebugPortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_testing_PushModemMessagesFromDebugPortRequest_Response(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesFromDebugPortRequest.Response)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesFromDebugPortRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_testing_PushModemMessagesFromDebugPortRequest_Response(buffer_arg) {
  return testing_pb.PushModemMessagesFromDebugPortRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_testing_PushModemMessagesRequest(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesRequest)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_testing_PushModemMessagesRequest(buffer_arg) {
  return testing_pb.PushModemMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_testing_PushModemMessagesRequest_Response(arg) {
  if (!(arg instanceof testing_pb.PushModemMessagesRequest.Response)) {
    throw new Error('Expected argument of type hiber.testing.PushModemMessagesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
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
  pushModemMessagesFromDebugPort: {
    path: '/hiber.testing.TestingService/PushModemMessagesFromDebugPort',
    requestStream: false,
    responseStream: false,
    requestType: testing_pb.PushModemMessagesFromDebugPortRequest,
    responseType: testing_pb.PushModemMessagesFromDebugPortRequest.Response,
    requestSerialize: serialize_hiber_testing_PushModemMessagesFromDebugPortRequest,
    requestDeserialize: deserialize_hiber_testing_PushModemMessagesFromDebugPortRequest,
    responseSerialize: serialize_hiber_testing_PushModemMessagesFromDebugPortRequest_Response,
    responseDeserialize: deserialize_hiber_testing_PushModemMessagesFromDebugPortRequest_Response,
  },
};

exports.TestingServiceClient = grpc.makeGenericClientConstructor(TestingServiceService);
