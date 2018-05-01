// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var currentuser_pb = require('./currentuser_pb.js');

function serialize_hiber_user_CurrentUser(arg) {
  if (!(arg instanceof currentuser_pb.CurrentUser)) {
    throw new Error('Expected argument of type hiber.user.CurrentUser');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_CurrentUser(buffer_arg) {
  return currentuser_pb.CurrentUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CurrentUserRequest(arg) {
  if (!(arg instanceof currentuser_pb.CurrentUserRequest)) {
    throw new Error('Expected argument of type hiber.user.CurrentUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_CurrentUserRequest(buffer_arg) {
  return currentuser_pb.CurrentUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_DeleteCurrentUserRequest(arg) {
  if (!(arg instanceof currentuser_pb.DeleteCurrentUserRequest)) {
    throw new Error('Expected argument of type hiber.user.DeleteCurrentUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_DeleteCurrentUserRequest(buffer_arg) {
  return currentuser_pb.DeleteCurrentUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_DeleteCurrentUserRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.DeleteCurrentUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.DeleteCurrentUserRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_DeleteCurrentUserRequest_Response(buffer_arg) {
  return currentuser_pb.DeleteCurrentUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RequestAccessRequest(arg) {
  if (!(arg instanceof currentuser_pb.RequestAccessRequest)) {
    throw new Error('Expected argument of type hiber.user.RequestAccessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_RequestAccessRequest(buffer_arg) {
  return currentuser_pb.RequestAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RequestAccessRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.RequestAccessRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.RequestAccessRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_RequestAccessRequest_Response(buffer_arg) {
  return currentuser_pb.RequestAccessRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Calls related to the current user. Typically, a newly created account only has access to these calls, all
// other require an account to be linked.
var CurrentUserServiceService = exports.CurrentUserServiceService = {
  currentUser: {
    path: '/hiber.user.CurrentUserService/CurrentUser',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.CurrentUserRequest,
    responseType: currentuser_pb.CurrentUser,
    requestSerialize: serialize_hiber_user_CurrentUserRequest,
    requestDeserialize: deserialize_hiber_user_CurrentUserRequest,
    responseSerialize: serialize_hiber_user_CurrentUser,
    responseDeserialize: deserialize_hiber_user_CurrentUser,
  },
  requestAccess: {
    path: '/hiber.user.CurrentUserService/RequestAccess',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.RequestAccessRequest,
    responseType: currentuser_pb.RequestAccessRequest.Response,
    requestSerialize: serialize_hiber_user_RequestAccessRequest,
    requestDeserialize: deserialize_hiber_user_RequestAccessRequest,
    responseSerialize: serialize_hiber_user_RequestAccessRequest_Response,
    responseDeserialize: deserialize_hiber_user_RequestAccessRequest_Response,
  },
  deleteCurrentUser: {
    path: '/hiber.user.CurrentUserService/DeleteCurrentUser',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.DeleteCurrentUserRequest,
    responseType: currentuser_pb.DeleteCurrentUserRequest.Response,
    requestSerialize: serialize_hiber_user_DeleteCurrentUserRequest,
    requestDeserialize: deserialize_hiber_user_DeleteCurrentUserRequest,
    responseSerialize: serialize_hiber_user_DeleteCurrentUserRequest_Response,
    responseDeserialize: deserialize_hiber_user_DeleteCurrentUserRequest_Response,
  },
};

exports.CurrentUserServiceClient = grpc.makeGenericClientConstructor(CurrentUserServiceService);
