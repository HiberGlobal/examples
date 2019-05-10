// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var map_pb = require('./map_pb.js');
var base_pb = require('./base_pb.js');
var modem_pb = require('./modem_pb.js');

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

function serialize_hiber_map_SatellitesRequest(arg) {
  if (!(arg instanceof map_pb.SatellitesRequest)) {
    throw new Error('Expected argument of type hiber.map.SatellitesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_SatellitesRequest(buffer_arg) {
  return map_pb.SatellitesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_map_SatellitesRequest_Response(arg) {
  if (!(arg instanceof map_pb.SatellitesRequest.Response)) {
    throw new Error('Expected argument of type hiber.map.SatellitesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_SatellitesRequest_Response(buffer_arg) {
  return map_pb.SatellitesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_map_TileMapRequest(arg) {
  if (!(arg instanceof map_pb.TileMapRequest)) {
    throw new Error('Expected argument of type hiber.map.TileMapRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_TileMapRequest(buffer_arg) {
  return map_pb.TileMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_map_TileMapRequest_Response(arg) {
  if (!(arg instanceof map_pb.TileMapRequest.Response)) {
    throw new Error('Expected argument of type hiber.map.TileMapRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_map_TileMapRequest_Response(buffer_arg) {
  return map_pb.TileMapRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Map of modems, in different map levels to enable data to be displayed efficiently
var MapServiceService = exports.MapServiceService = {
  tileMap: {
    path: '/hiber.map.MapService/TileMap',
    requestStream: false,
    responseStream: false,
    requestType: map_pb.TileMapRequest,
    responseType: map_pb.TileMapRequest.Response,
    requestSerialize: serialize_hiber_map_TileMapRequest,
    requestDeserialize: deserialize_hiber_map_TileMapRequest,
    responseSerialize: serialize_hiber_map_TileMapRequest_Response,
    responseDeserialize: deserialize_hiber_map_TileMapRequest_Response,
  },
  // This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
  // It will be removed in a future version.
  satellites: {
    path: '/hiber.map.MapService/Satellites',
    requestStream: false,
    responseStream: false,
    requestType: map_pb.SatellitesRequest,
    responseType: map_pb.SatellitesRequest.Response,
    requestSerialize: serialize_hiber_map_SatellitesRequest,
    requestDeserialize: deserialize_hiber_map_SatellitesRequest,
    responseSerialize: serialize_hiber_map_SatellitesRequest_Response,
    responseDeserialize: deserialize_hiber_map_SatellitesRequest_Response,
  },
  // This is the old map request. It has been deprecated and will be removed in a future version. 
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
