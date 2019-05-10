// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var satellite_pb = require('./satellite_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_satellite_ListSatellitesPathRequest(arg) {
  if (!(arg instanceof satellite_pb.ListSatellitesPathRequest)) {
    throw new Error('Expected argument of type hiber.satellite.ListSatellitesPathRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_satellite_ListSatellitesPathRequest(buffer_arg) {
  return satellite_pb.ListSatellitesPathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_satellite_ListSatellitesPathRequest_Response(arg) {
  if (!(arg instanceof satellite_pb.ListSatellitesPathRequest.Response)) {
    throw new Error('Expected argument of type hiber.satellite.ListSatellitesPathRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_satellite_ListSatellitesPathRequest_Response(buffer_arg) {
  return satellite_pb.ListSatellitesPathRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_satellite_ListSatellitesRequest(arg) {
  if (!(arg instanceof satellite_pb.ListSatellitesRequest)) {
    throw new Error('Expected argument of type hiber.satellite.ListSatellitesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_satellite_ListSatellitesRequest(buffer_arg) {
  return satellite_pb.ListSatellitesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_satellite_ListSatellitesRequest_Response(arg) {
  if (!(arg instanceof satellite_pb.ListSatellitesRequest.Response)) {
    throw new Error('Expected argument of type hiber.satellite.ListSatellitesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_satellite_ListSatellitesRequest_Response(buffer_arg) {
  return satellite_pb.ListSatellitesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var SatelliteServiceService = exports.SatelliteServiceService = {
  list: {
    path: '/hiber.satellite.SatelliteService/List',
    requestStream: false,
    responseStream: false,
    requestType: satellite_pb.ListSatellitesRequest,
    responseType: satellite_pb.ListSatellitesRequest.Response,
    requestSerialize: serialize_hiber_satellite_ListSatellitesRequest,
    requestDeserialize: deserialize_hiber_satellite_ListSatellitesRequest,
    responseSerialize: serialize_hiber_satellite_ListSatellitesRequest_Response,
    responseDeserialize: deserialize_hiber_satellite_ListSatellitesRequest_Response,
  },
  path: {
    path: '/hiber.satellite.SatelliteService/Path',
    requestStream: false,
    responseStream: false,
    requestType: satellite_pb.ListSatellitesPathRequest,
    responseType: satellite_pb.ListSatellitesPathRequest.Response,
    requestSerialize: serialize_hiber_satellite_ListSatellitesPathRequest,
    requestDeserialize: deserialize_hiber_satellite_ListSatellitesPathRequest,
    responseSerialize: serialize_hiber_satellite_ListSatellitesPathRequest_Response,
    responseDeserialize: deserialize_hiber_satellite_ListSatellitesPathRequest_Response,
  },
};

exports.SatelliteServiceClient = grpc.makeGenericClientConstructor(SatelliteServiceService);
