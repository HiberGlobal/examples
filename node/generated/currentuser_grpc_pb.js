// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var currentuser_pb = require('./currentuser_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_user_AcceptTermsAndConditionsRequest(arg) {
  if (!(arg instanceof currentuser_pb.AcceptTermsAndConditionsRequest)) {
    throw new Error('Expected argument of type hiber.user.AcceptTermsAndConditionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_AcceptTermsAndConditionsRequest(buffer_arg) {
  return currentuser_pb.AcceptTermsAndConditionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_AcceptTermsAndConditionsRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.AcceptTermsAndConditionsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.AcceptTermsAndConditionsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_AcceptTermsAndConditionsRequest_Response(buffer_arg) {
  return currentuser_pb.AcceptTermsAndConditionsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_AccessibleOrganizationsRequest(arg) {
  if (!(arg instanceof currentuser_pb.AccessibleOrganizationsRequest)) {
    throw new Error('Expected argument of type hiber.user.AccessibleOrganizationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_AccessibleOrganizationsRequest(buffer_arg) {
  return currentuser_pb.AccessibleOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_AccessibleOrganizationsRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.AccessibleOrganizationsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.AccessibleOrganizationsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_AccessibleOrganizationsRequest_Response(buffer_arg) {
  return currentuser_pb.AccessibleOrganizationsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CancelAccessRequestRequest(arg) {
  if (!(arg instanceof currentuser_pb.CancelAccessRequestRequest)) {
    throw new Error('Expected argument of type hiber.user.CancelAccessRequestRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_CancelAccessRequestRequest(buffer_arg) {
  return currentuser_pb.CancelAccessRequestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_CancelAccessRequestRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.CancelAccessRequestRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.CancelAccessRequestRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_CancelAccessRequestRequest_Response(buffer_arg) {
  return currentuser_pb.CancelAccessRequestRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_hiber_user_UpdateDefaultOrganizationRequest(arg) {
  if (!(arg instanceof currentuser_pb.UpdateDefaultOrganizationRequest)) {
    throw new Error('Expected argument of type hiber.user.UpdateDefaultOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateDefaultOrganizationRequest(buffer_arg) {
  return currentuser_pb.UpdateDefaultOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateDefaultOrganizationRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.UpdateDefaultOrganizationRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.UpdateDefaultOrganizationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateDefaultOrganizationRequest_Response(buffer_arg) {
  return currentuser_pb.UpdateDefaultOrganizationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateMissionControlSettingsRequest(arg) {
  if (!(arg instanceof currentuser_pb.UpdateMissionControlSettingsRequest)) {
    throw new Error('Expected argument of type hiber.user.UpdateMissionControlSettingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateMissionControlSettingsRequest(buffer_arg) {
  return currentuser_pb.UpdateMissionControlSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_user_UpdateMissionControlSettingsRequest_Response(arg) {
  if (!(arg instanceof currentuser_pb.UpdateMissionControlSettingsRequest.Response)) {
    throw new Error('Expected argument of type hiber.user.UpdateMissionControlSettingsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_user_UpdateMissionControlSettingsRequest_Response(buffer_arg) {
  return currentuser_pb.UpdateMissionControlSettingsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Calls related to the current user. Typically, a newly created user only has access to these calls, all
// others require an organization to be linked.
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
  cancelAccessRequest: {
    path: '/hiber.user.CurrentUserService/CancelAccessRequest',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.CancelAccessRequestRequest,
    responseType: currentuser_pb.CancelAccessRequestRequest.Response,
    requestSerialize: serialize_hiber_user_CancelAccessRequestRequest,
    requestDeserialize: deserialize_hiber_user_CancelAccessRequestRequest,
    responseSerialize: serialize_hiber_user_CancelAccessRequestRequest_Response,
    responseDeserialize: deserialize_hiber_user_CancelAccessRequestRequest_Response,
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
  updateDefaultOrganization: {
    path: '/hiber.user.CurrentUserService/UpdateDefaultOrganization',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.UpdateDefaultOrganizationRequest,
    responseType: currentuser_pb.UpdateDefaultOrganizationRequest.Response,
    requestSerialize: serialize_hiber_user_UpdateDefaultOrganizationRequest,
    requestDeserialize: deserialize_hiber_user_UpdateDefaultOrganizationRequest,
    responseSerialize: serialize_hiber_user_UpdateDefaultOrganizationRequest_Response,
    responseDeserialize: deserialize_hiber_user_UpdateDefaultOrganizationRequest_Response,
  },
  updateMissionControlSettings: {
    path: '/hiber.user.CurrentUserService/UpdateMissionControlSettings',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.UpdateMissionControlSettingsRequest,
    responseType: currentuser_pb.UpdateMissionControlSettingsRequest.Response,
    requestSerialize: serialize_hiber_user_UpdateMissionControlSettingsRequest,
    requestDeserialize: deserialize_hiber_user_UpdateMissionControlSettingsRequest,
    responseSerialize: serialize_hiber_user_UpdateMissionControlSettingsRequest_Response,
    responseDeserialize: deserialize_hiber_user_UpdateMissionControlSettingsRequest_Response,
  },
  acceptTermsAndConditions: {
    path: '/hiber.user.CurrentUserService/AcceptTermsAndConditions',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.AcceptTermsAndConditionsRequest,
    responseType: currentuser_pb.AcceptTermsAndConditionsRequest.Response,
    requestSerialize: serialize_hiber_user_AcceptTermsAndConditionsRequest,
    requestDeserialize: deserialize_hiber_user_AcceptTermsAndConditionsRequest,
    responseSerialize: serialize_hiber_user_AcceptTermsAndConditionsRequest_Response,
    responseDeserialize: deserialize_hiber_user_AcceptTermsAndConditionsRequest_Response,
  },
  accessibleOrganizations: {
    path: '/hiber.user.CurrentUserService/AccessibleOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: currentuser_pb.AccessibleOrganizationsRequest,
    responseType: currentuser_pb.AccessibleOrganizationsRequest.Response,
    requestSerialize: serialize_hiber_user_AccessibleOrganizationsRequest,
    requestDeserialize: deserialize_hiber_user_AccessibleOrganizationsRequest,
    responseSerialize: serialize_hiber_user_AccessibleOrganizationsRequest_Response,
    responseDeserialize: deserialize_hiber_user_AccessibleOrganizationsRequest_Response,
  },
};

exports.CurrentUserServiceClient = grpc.makeGenericClientConstructor(CurrentUserServiceService);
