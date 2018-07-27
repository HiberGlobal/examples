// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var modem_claim_pb = require('./modem_claim_pb.js');
var base_pb = require('./base_pb.js');
var modem_pb = require('./modem_pb.js');
var tag_pb = require('./tag_pb.js');

function serialize_hiber_modem_AcceptModemClaimsRequest(arg) {
  if (!(arg instanceof modem_claim_pb.AcceptModemClaimsRequest)) {
    throw new Error('Expected argument of type hiber.modem.AcceptModemClaimsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_AcceptModemClaimsRequest(buffer_arg) {
  return modem_claim_pb.AcceptModemClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_AcceptModemClaimsRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.AcceptModemClaimsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.AcceptModemClaimsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_AcceptModemClaimsRequest_Response(buffer_arg) {
  return modem_claim_pb.AcceptModemClaimsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ClaimModemRequest(arg) {
  if (!(arg instanceof modem_claim_pb.ClaimModemRequest)) {
    throw new Error('Expected argument of type hiber.modem.ClaimModemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ClaimModemRequest(buffer_arg) {
  return modem_claim_pb.ClaimModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ClaimModemRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.ClaimModemRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ClaimModemRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ClaimModemRequest_Response(buffer_arg) {
  return modem_claim_pb.ClaimModemRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemClaimsRequest(arg) {
  if (!(arg instanceof modem_claim_pb.ListModemClaimsRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemClaimsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemClaimsRequest(buffer_arg) {
  return modem_claim_pb.ListModemClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemClaimsRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.ListModemClaimsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemClaimsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemClaimsRequest_Response(buffer_arg) {
  return modem_claim_pb.ListModemClaimsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_RejectModemClaimsRequest(arg) {
  if (!(arg instanceof modem_claim_pb.RejectModemClaimsRequest)) {
    throw new Error('Expected argument of type hiber.modem.RejectModemClaimsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_RejectModemClaimsRequest(buffer_arg) {
  return modem_claim_pb.RejectModemClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_RejectModemClaimsRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.RejectModemClaimsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.RejectModemClaimsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_RejectModemClaimsRequest_Response(buffer_arg) {
  return modem_claim_pb.RejectModemClaimsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Claim a modem that you have received, but was not marked as inbound for you.
// This process requires approval from the previous owner and, as such, will not be instantaneous.
var ModemClaimServiceService = exports.ModemClaimServiceService = {
  // Add a claim for a number of modems 
  claim: {
    path: '/hiber.modem.ModemClaimService/Claim',
    requestStream: false,
    responseStream: false,
    requestType: modem_claim_pb.ClaimModemRequest,
    responseType: modem_claim_pb.ClaimModemRequest.Response,
    requestSerialize: serialize_hiber_modem_ClaimModemRequest,
    requestDeserialize: deserialize_hiber_modem_ClaimModemRequest,
    responseSerialize: serialize_hiber_modem_ClaimModemRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ClaimModemRequest_Response,
  },
  // List your claims on modems 
  //
  // List your modems that have been claimed by another organization 
  listClaims: {
    path: '/hiber.modem.ModemClaimService/ListClaims',
    requestStream: false,
    responseStream: false,
    requestType: modem_claim_pb.ListModemClaimsRequest,
    responseType: modem_claim_pb.ListModemClaimsRequest.Response,
    requestSerialize: serialize_hiber_modem_ListModemClaimsRequest,
    requestDeserialize: deserialize_hiber_modem_ListModemClaimsRequest,
    responseSerialize: serialize_hiber_modem_ListModemClaimsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ListModemClaimsRequest_Response,
  },
  // Accept a claim on a selection of your modems 
  acceptClaims: {
    path: '/hiber.modem.ModemClaimService/AcceptClaims',
    requestStream: false,
    responseStream: false,
    requestType: modem_claim_pb.AcceptModemClaimsRequest,
    responseType: modem_claim_pb.AcceptModemClaimsRequest.Response,
    requestSerialize: serialize_hiber_modem_AcceptModemClaimsRequest,
    requestDeserialize: deserialize_hiber_modem_AcceptModemClaimsRequest,
    responseSerialize: serialize_hiber_modem_AcceptModemClaimsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_AcceptModemClaimsRequest_Response,
  },
  // Reject a claim on a selection of your modems 
  rejectClaims: {
    path: '/hiber.modem.ModemClaimService/RejectClaims',
    requestStream: false,
    responseStream: false,
    requestType: modem_claim_pb.RejectModemClaimsRequest,
    responseType: modem_claim_pb.RejectModemClaimsRequest.Response,
    requestSerialize: serialize_hiber_modem_RejectModemClaimsRequest,
    requestDeserialize: deserialize_hiber_modem_RejectModemClaimsRequest,
    responseSerialize: serialize_hiber_modem_RejectModemClaimsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_RejectModemClaimsRequest_Response,
  },
};

exports.ModemClaimServiceClient = grpc.makeGenericClientConstructor(ModemClaimServiceService);
