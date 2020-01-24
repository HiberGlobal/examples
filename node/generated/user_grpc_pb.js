// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var base_pb = require('./base_pb.js');
var permission_pb = require('./permission_pb.js');

function serialize_hiber_user_ApproveUserRequest(arg) {
  if (!(arg instanceof user_pb.ApproveUserRequest)) {
    throw new Error('Expected argument of type hiber.user.ApproveUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ApproveUserRequest(buffer_arg) {
  return user_pb.ApproveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ApproveUserRequest_Response(arg) {
  if (!(arg instanceof user_pb.ApproveUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ApproveUserRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ApproveUserRequest_Response(buffer_arg) {
  return user_pb.ApproveUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type hiber.user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CreateUsersRequest(arg) {
  if (!(arg instanceof user_pb.CreateUsersRequest)) {
    throw new Error('Expected argument of type hiber.user.CreateUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_CreateUsersRequest(buffer_arg) {
  return user_pb.CreateUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CreateUsersRequest_Response(arg) {
  if (!(arg instanceof user_pb.CreateUsersRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.CreateUsersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_CreateUsersRequest_Response(buffer_arg) {
  return user_pb.CreateUsersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_GetUserValidationRequest(arg) {
  if (!(arg instanceof user_pb.GetUserValidationRequest)) {
    throw new Error('Expected argument of type hiber.user.GetUserValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_GetUserValidationRequest(buffer_arg) {
  return user_pb.GetUserValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_InviteUserRequest(arg) {
  if (!(arg instanceof user_pb.InviteUserRequest)) {
    throw new Error('Expected argument of type hiber.user.InviteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_InviteUserRequest(buffer_arg) {
  return user_pb.InviteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_InviteUserRequest_Response(arg) {
  if (!(arg instanceof user_pb.InviteUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.InviteUserRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_InviteUserRequest_Response(buffer_arg) {
  return user_pb.InviteUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListAccessRequestsRequest(arg) {
  if (!(arg instanceof user_pb.ListAccessRequestsRequest)) {
    throw new Error('Expected argument of type hiber.user.ListAccessRequestsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListAccessRequestsRequest(buffer_arg) {
  return user_pb.ListAccessRequestsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListAccessRequestsRequest_Response(arg) {
  if (!(arg instanceof user_pb.ListAccessRequestsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ListAccessRequestsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListAccessRequestsRequest_Response(buffer_arg) {
  return user_pb.ListAccessRequestsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListInvitationsRequest(arg) {
  if (!(arg instanceof user_pb.ListInvitationsRequest)) {
    throw new Error('Expected argument of type hiber.user.ListInvitationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListInvitationsRequest(buffer_arg) {
  return user_pb.ListInvitationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListInvitationsRequest_Response(arg) {
  if (!(arg instanceof user_pb.ListInvitationsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ListInvitationsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListInvitationsRequest_Response(buffer_arg) {
  return user_pb.ListInvitationsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListUsersRequest(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type hiber.user.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListUsersRequest(buffer_arg) {
  return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ListUsersRequest_Response(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ListUsersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ListUsersRequest_Response(buffer_arg) {
  return user_pb.ListUsersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RemoveUserRequest(arg) {
  if (!(arg instanceof user_pb.RemoveUserRequest)) {
    throw new Error('Expected argument of type hiber.user.RemoveUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_RemoveUserRequest(buffer_arg) {
  return user_pb.RemoveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_RemoveUserRequest_Response(arg) {
  if (!(arg instanceof user_pb.RemoveUserRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.RemoveUserRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_RemoveUserRequest_Response(buffer_arg) {
  return user_pb.RemoveUserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ResetUserPasswordRequest(arg) {
  if (!(arg instanceof user_pb.ResetUserPasswordRequest)) {
    throw new Error('Expected argument of type hiber.user.ResetUserPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ResetUserPasswordRequest(buffer_arg) {
  return user_pb.ResetUserPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_ResetUserPasswordRequest_Response(arg) {
  if (!(arg instanceof user_pb.ResetUserPasswordRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.ResetUserPasswordRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_ResetUserPasswordRequest_Response(buffer_arg) {
  return user_pb.ResetUserPasswordRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_TestUserValidationRequest(arg) {
  if (!(arg instanceof user_pb.TestUserValidationRequest)) {
    throw new Error('Expected argument of type hiber.user.TestUserValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_TestUserValidationRequest(buffer_arg) {
  return user_pb.TestUserValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_TestUserValidationRequest_Response(arg) {
  if (!(arg instanceof user_pb.TestUserValidationRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.TestUserValidationRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_TestUserValidationRequest_Response(buffer_arg) {
  return user_pb.TestUserValidationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateUserPermissionsRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserPermissionsRequest)) {
    throw new Error('Expected argument of type hiber.user.UpdateUserPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateUserPermissionsRequest(buffer_arg) {
  return user_pb.UpdateUserPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateUserPermissionsRequest_Response(arg) {
  if (!(arg instanceof user_pb.UpdateUserPermissionsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.UpdateUserPermissionsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateUserPermissionsRequest_Response(buffer_arg) {
  return user_pb.UpdateUserPermissionsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateUserValidationRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserValidationRequest)) {
    throw new Error('Expected argument of type hiber.user.UpdateUserValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateUserValidationRequest(buffer_arg) {
  return user_pb.UpdateUserValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type hiber.user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UserActivitySummaryRequest(arg) {
  if (!(arg instanceof user_pb.UserActivitySummaryRequest)) {
    throw new Error('Expected argument of type hiber.user.UserActivitySummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UserActivitySummaryRequest(buffer_arg) {
  return user_pb.UserActivitySummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UserActivitySummaryRequest_Response(arg) {
  if (!(arg instanceof user_pb.UserActivitySummaryRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.UserActivitySummaryRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UserActivitySummaryRequest_Response(buffer_arg) {
  return user_pb.UserActivitySummaryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UserValidation(arg) {
  if (!(arg instanceof user_pb.UserValidation)) {
    throw new Error('Expected argument of type hiber.user.UserValidation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_user_UserValidation(buffer_arg) {
  return user_pb.UserValidation.deserializeBinary(new Uint8Array(buffer_arg));
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
  invite: {
    path: '/hiber.user.UserService/Invite',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.InviteUserRequest,
    responseType: user_pb.InviteUserRequest.Response,
    requestSerialize: serialize_hiber_user_InviteUserRequest,
    requestDeserialize: deserialize_hiber_user_InviteUserRequest,
    responseSerialize: serialize_hiber_user_InviteUserRequest_Response,
    responseDeserialize: deserialize_hiber_user_InviteUserRequest_Response,
  },
  listInvitations: {
    path: '/hiber.user.UserService/ListInvitations',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListInvitationsRequest,
    responseType: user_pb.ListInvitationsRequest.Response,
    requestSerialize: serialize_hiber_user_ListInvitationsRequest,
    requestDeserialize: deserialize_hiber_user_ListInvitationsRequest,
    responseSerialize: serialize_hiber_user_ListInvitationsRequest_Response,
    responseDeserialize: deserialize_hiber_user_ListInvitationsRequest_Response,
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
  createUsers: {
    path: '/hiber.user.UserService/CreateUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUsersRequest,
    responseType: user_pb.CreateUsersRequest.Response,
    requestSerialize: serialize_hiber_user_CreateUsersRequest,
    requestDeserialize: deserialize_hiber_user_CreateUsersRequest,
    responseSerialize: serialize_hiber_user_CreateUsersRequest_Response,
    responseDeserialize: deserialize_hiber_user_CreateUsersRequest_Response,
  },
  resetPassword: {
    path: '/hiber.user.UserService/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ResetUserPasswordRequest,
    responseType: user_pb.ResetUserPasswordRequest.Response,
    requestSerialize: serialize_hiber_user_ResetUserPasswordRequest,
    requestDeserialize: deserialize_hiber_user_ResetUserPasswordRequest,
    responseSerialize: serialize_hiber_user_ResetUserPasswordRequest_Response,
    responseDeserialize: deserialize_hiber_user_ResetUserPasswordRequest_Response,
  },
  updateUserPermissions: {
    path: '/hiber.user.UserService/UpdateUserPermissions',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserPermissionsRequest,
    responseType: user_pb.UpdateUserPermissionsRequest.Response,
    requestSerialize: serialize_hiber_user_UpdateUserPermissionsRequest,
    requestDeserialize: deserialize_hiber_user_UpdateUserPermissionsRequest,
    responseSerialize: serialize_hiber_user_UpdateUserPermissionsRequest_Response,
    responseDeserialize: deserialize_hiber_user_UpdateUserPermissionsRequest_Response,
  },
  getUserValidation: {
    path: '/hiber.user.UserService/GetUserValidation',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserValidationRequest,
    responseType: user_pb.UserValidation,
    requestSerialize: serialize_hiber_user_GetUserValidationRequest,
    requestDeserialize: deserialize_hiber_user_GetUserValidationRequest,
    responseSerialize: serialize_hiber_user_UserValidation,
    responseDeserialize: deserialize_hiber_user_UserValidation,
  },
  updateUserValidation: {
    path: '/hiber.user.UserService/UpdateUserValidation',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserValidationRequest,
    responseType: user_pb.UserValidation,
    requestSerialize: serialize_hiber_user_UpdateUserValidationRequest,
    requestDeserialize: deserialize_hiber_user_UpdateUserValidationRequest,
    responseSerialize: serialize_hiber_user_UserValidation,
    responseDeserialize: deserialize_hiber_user_UserValidation,
  },
  testUserValidation: {
    path: '/hiber.user.UserService/TestUserValidation',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.TestUserValidationRequest,
    responseType: user_pb.TestUserValidationRequest.Response,
    requestSerialize: serialize_hiber_user_TestUserValidationRequest,
    requestDeserialize: deserialize_hiber_user_TestUserValidationRequest,
    responseSerialize: serialize_hiber_user_TestUserValidationRequest_Response,
    responseDeserialize: deserialize_hiber_user_TestUserValidationRequest_Response,
  },
  activity: {
    path: '/hiber.user.UserService/Activity',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserActivitySummaryRequest,
    responseType: user_pb.UserActivitySummaryRequest.Response,
    requestSerialize: serialize_hiber_user_UserActivitySummaryRequest,
    requestDeserialize: deserialize_hiber_user_UserActivitySummaryRequest,
    responseSerialize: serialize_hiber_user_UserActivitySummaryRequest_Response,
    responseDeserialize: deserialize_hiber_user_UserActivitySummaryRequest_Response,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
