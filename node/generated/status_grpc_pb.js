// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var status_pb = require('./status_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_status_StatusRequest(arg) {
  if (!(arg instanceof status_pb.StatusRequest)) {
    throw new Error('Expected argument of type hiber.status.StatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_status_StatusRequest(buffer_arg) {
  return status_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_status_StatusRequest_Response(arg) {
  if (!(arg instanceof status_pb.StatusRequest.Response)) {
    throw new Error('Expected argument of type hiber.status.StatusRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_status_StatusRequest_Response(buffer_arg) {
  return status_pb.StatusRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to get the status of the hiber network
var StatusServiceService = exports.StatusServiceService = {
  status: {
    path: '/hiber.status.StatusService/Status',
    requestStream: false,
    responseStream: false,
    requestType: status_pb.StatusRequest,
    responseType: status_pb.StatusRequest.Response,
    requestSerialize: serialize_hiber_status_StatusRequest,
    requestDeserialize: deserialize_hiber_status_StatusRequest,
    responseSerialize: serialize_hiber_status_StatusRequest_Response,
    responseDeserialize: deserialize_hiber_status_StatusRequest_Response,
  },
};

exports.StatusServiceClient = grpc.makeGenericClientConstructor(StatusServiceService);
