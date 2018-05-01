// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var account_pb = require('./account_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_account_Account(arg) {
  if (!(arg instanceof account_pb.Account)) {
    throw new Error('Expected argument of type hiber.account.Account');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_account_Account(buffer_arg) {
  return account_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_account_AccountTreeRequest(arg) {
  if (!(arg instanceof account_pb.AccountTreeRequest)) {
    throw new Error('Expected argument of type hiber.account.AccountTreeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_account_AccountTreeRequest(buffer_arg) {
  return account_pb.AccountTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_account_AccountTreeRequest_AccountTree(arg) {
  if (!(arg instanceof account_pb.AccountTreeRequest.AccountTree)) {
    throw new Error('Expected argument of type hiber.account.AccountTreeRequest.AccountTree');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_account_AccountTreeRequest_AccountTree(buffer_arg) {
  return account_pb.AccountTreeRequest.AccountTree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_account_GetAccountRequest(arg) {
  if (!(arg instanceof account_pb.GetAccountRequest)) {
    throw new Error('Expected argument of type hiber.account.GetAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_account_GetAccountRequest(buffer_arg) {
  return account_pb.GetAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_account_UpdateAccountRequest(arg) {
  if (!(arg instanceof account_pb.UpdateAccountRequest)) {
    throw new Error('Expected argument of type hiber.account.UpdateAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_account_UpdateAccountRequest(buffer_arg) {
  return account_pb.UpdateAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Account-related api calls. Currently limited to your own account; we'll add more for creating and managing
// sub-accounts later.
var AccountServiceService = exports.AccountServiceService = {
  tree: {
    path: '/hiber.account.AccountService/Tree',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AccountTreeRequest,
    responseType: account_pb.AccountTreeRequest.AccountTree,
    requestSerialize: serialize_hiber_account_AccountTreeRequest,
    requestDeserialize: deserialize_hiber_account_AccountTreeRequest,
    responseSerialize: serialize_hiber_account_AccountTreeRequest_AccountTree,
    responseDeserialize: deserialize_hiber_account_AccountTreeRequest_AccountTree,
  },
  get: {
    path: '/hiber.account.AccountService/Get',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.GetAccountRequest,
    responseType: account_pb.Account,
    requestSerialize: serialize_hiber_account_GetAccountRequest,
    requestDeserialize: deserialize_hiber_account_GetAccountRequest,
    responseSerialize: serialize_hiber_account_Account,
    responseDeserialize: deserialize_hiber_account_Account,
  },
  update: {
    path: '/hiber.account.AccountService/Update',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.UpdateAccountRequest,
    responseType: account_pb.Account,
    requestSerialize: serialize_hiber_account_UpdateAccountRequest,
    requestDeserialize: deserialize_hiber_account_UpdateAccountRequest,
    responseSerialize: serialize_hiber_account_Account,
    responseDeserialize: deserialize_hiber_account_Account,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
