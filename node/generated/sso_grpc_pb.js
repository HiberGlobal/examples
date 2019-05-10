// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sso_pb = require('./sso_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_sso_ZendeskTokenRequest(arg) {
  if (!(arg instanceof sso_pb.ZendeskTokenRequest)) {
    throw new Error('Expected argument of type hiber.sso.ZendeskTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_sso_ZendeskTokenRequest(buffer_arg) {
  return sso_pb.ZendeskTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_sso_ZendeskTokenRequest_Response(arg) {
  if (!(arg instanceof sso_pb.ZendeskTokenRequest.Response)) {
    throw new Error('Expected argument of type hiber.sso.ZendeskTokenRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_sso_ZendeskTokenRequest_Response(buffer_arg) {
  return sso_pb.ZendeskTokenRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Single sign on support service. 
var SingleSignOnServiceService = exports.SingleSignOnServiceService = {
  // Zendesk SSO using custom JWT 
  zendesk: {
    path: '/hiber.sso.SingleSignOnService/Zendesk',
    requestStream: false,
    responseStream: false,
    requestType: sso_pb.ZendeskTokenRequest,
    responseType: sso_pb.ZendeskTokenRequest.Response,
    requestSerialize: serialize_hiber_sso_ZendeskTokenRequest,
    requestDeserialize: deserialize_hiber_sso_ZendeskTokenRequest,
    responseSerialize: serialize_hiber_sso_ZendeskTokenRequest_Response,
    responseDeserialize: deserialize_hiber_sso_ZendeskTokenRequest_Response,
  },
};

exports.SingleSignOnServiceClient = grpc.makeGenericClientConstructor(SingleSignOnServiceService);
