// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_user_ApproveUserRequest(arg) {
  if (!(arg instanceof user_pb.ApproveUserRequest)) {
    throw new Error('Expected argument of type hiber.user.ApproveUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ApproveUserRequest(buffer_arg) {
  return user_pb.ApproveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ApproveUserRequest_Response(arg) {
  if (!(arg instanceof user_pb.ApproveUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ApproveUserRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ApproveUserRequest_Response(buffer_arg) {
  return user_pb.ApproveUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type hiber.user.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListAccessRequestsRequest(arg) {
  if (!(arg instanceof user_pb.ListAccessRequestsRequest)) {
    throw new Error('Expected argument of type hiber.user.ListAccessRequestsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ListAccessRequestsRequest(buffer_arg) {
  return user_pb.ListAccessRequestsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListAccessRequestsRequest_Response(arg) {
  if (!(arg instanceof user_pb.ListAccessRequestsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ListAccessRequestsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ListAccessRequestsRequest_Response(buffer_arg) {
  return user_pb.ListAccessRequestsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListUsersRequest(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type hiber.user.ListUsersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ListUsersRequest(buffer_arg) {
  return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListUsersRequest_Response(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ListUsersRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_ListUsersRequest_Response(buffer_arg) {
  return user_pb.ListUsersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RemoveUserRequest(arg) {
  if (!(arg instanceof user_pb.RemoveUserRequest)) {
    throw new Error('Expected argument of type hiber.user.RemoveUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_RemoveUserRequest(buffer_arg) {
  return user_pb.RemoveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RemoveUserRequest_Response(arg) {
  if (!(arg instanceof user_pb.RemoveUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.RemoveUserRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_RemoveUserRequest_Response(buffer_arg) {
  return user_pb.RemoveUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type hiber.user.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  list: {
    path: '/hiber.user.UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListUsersRequest,
    responseType: user_pb.ListUsersRequest.Response,
    requestSerialize: serialize_hiber_user_ListUsersRequest,
    requestDeserialize: deserialize_hiber_user_ListUsersRequest,
    responseSerialize: serialize_hiber_user_ListUsersRequest_Response,
    responseDeserialize: deserialize_hiber_user_ListUsersRequest_Response,
  },
  listAccessRequests: {
    path: '/hiber.user.UserService/ListAccessRequests',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListAccessRequestsRequest,
    responseType: user_pb.ListAccessRequestsRequest.Response,
    requestSerialize: serialize_hiber_user_ListAccessRequestsRequest,
    requestDeserialize: deserialize_hiber_user_ListAccessRequestsRequest,
    responseSerialize: serialize_hiber_user_ListAccessRequestsRequest_Response,
    responseDeserialize: deserialize_hiber_user_ListAccessRequestsRequest_Response,
  },
  approve: {
    path: '/hiber.user.UserService/Approve',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ApproveUserRequest,
    responseType: user_pb.ApproveUserRequest.Response,
    requestSerialize: serialize_hiber_user_ApproveUserRequest,
    requestDeserialize: deserialize_hiber_user_ApproveUserRequest,
    responseSerialize: serialize_hiber_user_ApproveUserRequest_Response,
    responseDeserialize: deserialize_hiber_user_ApproveUserRequest_Response,
  },
  remove: {
    path: '/hiber.user.UserService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RemoveUserRequest,
    responseType: user_pb.RemoveUserRequest.Response,
    requestSerialize: serialize_hiber_user_RemoveUserRequest,
    requestDeserialize: deserialize_hiber_user_RemoveUserRequest,
    responseSerialize: serialize_hiber_user_RemoveUserRequest_Response,
    responseDeserialize: deserialize_hiber_user_RemoveUserRequest_Response,
  },
  createUser: {
    path: '/hiber.user.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_hiber_user_CreateUserRequest,
    requestDeserialize: deserialize_hiber_user_CreateUserRequest,
    responseSerialize: serialize_hiber_user_User,
    responseDeserialize: deserialize_hiber_user_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
