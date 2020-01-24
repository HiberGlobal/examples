// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var modem_claim_pb = require('./modem_claim_pb.js');
var base_pb = require('./base_pb.js');
var modem_pb = require('./modem_pb.js');
var tag_pb = require('./tag_pb.js');

function serialize_hiber_modem_ClaimModemRequest(arg) {
  if (!(arg instanceof modem_claim_pb.ClaimModemRequest)) {
    throw new Error('Expected argument of type hiber.modem.ClaimModemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ClaimModemRequest(buffer_arg) {
  return modem_claim_pb.ClaimModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ClaimModemRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.ClaimModemRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ClaimModemRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ClaimModemRequest_Response(buffer_arg) {
  return modem_claim_pb.ClaimModemRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemClaimsRequest(arg) {
  if (!(arg instanceof modem_claim_pb.ListModemClaimsRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemClaimsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemClaimsRequest(buffer_arg) {
  return modem_claim_pb.ListModemClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemClaimsRequest_Response(arg) {
  if (!(arg instanceof modem_claim_pb.ListModemClaimsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemClaimsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemClaimsRequest_Response(buffer_arg) {
  return modem_claim_pb.ListModemClaimsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Claim a modem that you have in your possession, but was not marked as inbound for you.
// This is only possible for a modem that has not been activated.
// This process is instantaneous, but the previous owner can reject the claim afterwards.
var ModemClaimServiceService = exports.ModemClaimServiceService = {
  // Claim a number of modems. 
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
  // List modems that have been claimed. They are no longer part if your organization. 
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
};

exports.ModemClaimServiceClient = grpc.makeGenericClientConstructor(ModemClaimServiceService);
