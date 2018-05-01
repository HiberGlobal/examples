// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var token_pb = require('./token_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_token_CreateTokenRequest(arg) {
  if (!(arg instanceof token_pb.CreateTokenRequest)) {
    throw new Error('Expected argument of type hiber.token.CreateTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_CreateTokenRequest(buffer_arg) {
  return token_pb.CreateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_token_CreateTokenRequest_Response(arg) {
  if (!(arg instanceof token_pb.CreateTokenRequest.Response)) {
    throw new Error('Expected argument of type hiber.token.CreateTokenRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_CreateTokenRequest_Response(buffer_arg) {
  return token_pb.CreateTokenRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_token_DeleteTokenRequest(arg) {
  if (!(arg instanceof token_pb.DeleteTokenRequest)) {
    throw new Error('Expected argument of type hiber.token.DeleteTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_DeleteTokenRequest(buffer_arg) {
  return token_pb.DeleteTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_token_DeleteTokenRequest_Response(arg) {
  if (!(arg instanceof token_pb.DeleteTokenRequest.Response)) {
    throw new Error('Expected argument of type hiber.token.DeleteTokenRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_DeleteTokenRequest_Response(buffer_arg) {
  return token_pb.DeleteTokenRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_token_ListTokensRequest(arg) {
  if (!(arg instanceof token_pb.ListTokensRequest)) {
    throw new Error('Expected argument of type hiber.token.ListTokensRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_ListTokensRequest(buffer_arg) {
  return token_pb.ListTokensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_token_ListTokensRequest_Response(arg) {
  if (!(arg instanceof token_pb.ListTokensRequest.Response)) {
    throw new Error('Expected argument of type hiber.token.ListTokensRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_token_ListTokensRequest_Response(buffer_arg) {
  return token_pb.ListTokensRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var TokenServiceService = exports.TokenServiceService = {
  list: {
    path: '/hiber.token.TokenService/List',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.ListTokensRequest,
    responseType: token_pb.ListTokensRequest.Response,
    requestSerialize: serialize_hiber_token_ListTokensRequest,
    requestDeserialize: deserialize_hiber_token_ListTokensRequest,
    responseSerialize: serialize_hiber_token_ListTokensRequest_Response,
    responseDeserialize: deserialize_hiber_token_ListTokensRequest_Response,
  },
  create: {
    path: '/hiber.token.TokenService/Create',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.CreateTokenRequest,
    responseType: token_pb.CreateTokenRequest.Response,
    requestSerialize: serialize_hiber_token_CreateTokenRequest,
    requestDeserialize: deserialize_hiber_token_CreateTokenRequest,
    responseSerialize: serialize_hiber_token_CreateTokenRequest_Response,
    responseDeserialize: deserialize_hiber_token_CreateTokenRequest_Response,
  },
  delete: {
    path: '/hiber.token.TokenService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: token_pb.DeleteTokenRequest,
    responseType: token_pb.DeleteTokenRequest.Response,
    requestSerialize: serialize_hiber_token_DeleteTokenRequest,
    requestDeserialize: deserialize_hiber_token_DeleteTokenRequest,
    responseSerialize: serialize_hiber_token_DeleteTokenRequest_Response,
    responseDeserialize: deserialize_hiber_token_DeleteTokenRequest_Response,
  },
};

exports.TokenServiceClient = grpc.makeGenericClientConstructor(TokenServiceService);
