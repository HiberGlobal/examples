// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var map_pb = require('./map_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_map_MapRequest(arg) {
  if (!(arg instanceof map_pb.MapRequest)) {
    throw new Error('Expected argument of type hiber.map.MapRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_MapRequest(buffer_arg) {
  return map_pb.MapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_map_MapRequest_Response(arg) {
  if (!(arg instanceof map_pb.MapRequest.Response)) {
    throw new Error('Expected argument of type hiber.map.MapRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_MapRequest_Response(buffer_arg) {
  return map_pb.MapRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Map of modems, in different map levels to enable data to be displayed efficiently
var MapServiceService = exports.MapServiceService = {
  map: {
    path: '/hiber.map.MapService/Map',
    requestStream: false,
    responseStream: false,
    requestType: map_pb.MapRequest,
    responseType: map_pb.MapRequest.Response,
    requestSerialize: serialize_hiber_map_MapRequest,
    requestDeserialize: deserialize_hiber_map_MapRequest,
    responseSerialize: serialize_hiber_map_MapRequest_Response,
    responseDeserialize: deserialize_hiber_map_MapRequest_Response,
  },
};

exports.MapServiceClient = grpc.makeGenericClientConstructor(MapServiceService);
