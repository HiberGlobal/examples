// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var email_notifications_pb = require('./email_notifications_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_hiber_email_EmailNotificationHistoryRequest(arg) {
  if (!(arg instanceof email_notifications_pb.EmailNotificationHistoryRequest)) {
    throw new Error('Expected argument of type hiber.email.EmailNotificationHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_EmailNotificationHistoryRequest(buffer_arg) {
  return email_notifications_pb.EmailNotificationHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_EmailNotificationHistoryRequest_Response(arg) {
  if (!(arg instanceof email_notifications_pb.EmailNotificationHistoryRequest.Response)) {
    throw new Error('Expected argument of type hiber.email.EmailNotificationHistoryRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_EmailNotificationHistoryRequest_Response(buffer_arg) {
  return email_notifications_pb.EmailNotificationHistoryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_EmailNotificationPreferences(arg) {
  if (!(arg instanceof email_notifications_pb.EmailNotificationPreferences)) {
    throw new Error('Expected argument of type hiber.email.EmailNotificationPreferences');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_EmailNotificationPreferences(buffer_arg) {
  return email_notifications_pb.EmailNotificationPreferences.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_ListEmailNotificationPreferencesRequest(arg) {
  if (!(arg instanceof email_notifications_pb.ListEmailNotificationPreferencesRequest)) {
    throw new Error('Expected argument of type hiber.email.ListEmailNotificationPreferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_ListEmailNotificationPreferencesRequest(buffer_arg) {
  return email_notifications_pb.ListEmailNotificationPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_ListEmailNotificationPreferencesRequest_Response(arg) {
  if (!(arg instanceof email_notifications_pb.ListEmailNotificationPreferencesRequest.Response)) {
    throw new Error('Expected argument of type hiber.email.ListEmailNotificationPreferencesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_ListEmailNotificationPreferencesRequest_Response(buffer_arg) {
  return email_notifications_pb.ListEmailNotificationPreferencesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest(arg) {
  if (!(arg instanceof email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest)) {
    throw new Error('Expected argument of type hiber.email.RemoveAllEmailNotificationPreferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest(buffer_arg) {
  return email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest_Response(arg) {
  if (!(arg instanceof email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest.Response)) {
    throw new Error('Expected argument of type hiber.email.RemoveAllEmailNotificationPreferencesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest_Response(buffer_arg) {
  return email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_UpdateEmailNotificationPreferencesRequest(arg) {
  if (!(arg instanceof email_notifications_pb.UpdateEmailNotificationPreferencesRequest)) {
    throw new Error('Expected argument of type hiber.email.UpdateEmailNotificationPreferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_UpdateEmailNotificationPreferencesRequest(buffer_arg) {
  return email_notifications_pb.UpdateEmailNotificationPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_email_ViewEmailNotificationPreferencesRequest(arg) {
  if (!(arg instanceof email_notifications_pb.ViewEmailNotificationPreferencesRequest)) {
    throw new Error('Expected argument of type hiber.email.ViewEmailNotificationPreferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_email_ViewEmailNotificationPreferencesRequest(buffer_arg) {
  return email_notifications_pb.ViewEmailNotificationPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmailNotificationPreferencesServiceService = exports.EmailNotificationPreferencesServiceService = {
  list: {
    path: '/hiber.email.EmailNotificationPreferencesService/List',
    requestStream: false,
    responseStream: false,
    requestType: email_notifications_pb.ListEmailNotificationPreferencesRequest,
    responseType: email_notifications_pb.ListEmailNotificationPreferencesRequest.Response,
    requestSerialize: serialize_hiber_email_ListEmailNotificationPreferencesRequest,
    requestDeserialize: deserialize_hiber_email_ListEmailNotificationPreferencesRequest,
    responseSerialize: serialize_hiber_email_ListEmailNotificationPreferencesRequest_Response,
    responseDeserialize: deserialize_hiber_email_ListEmailNotificationPreferencesRequest_Response,
  },
  view: {
    path: '/hiber.email.EmailNotificationPreferencesService/View',
    requestStream: false,
    responseStream: false,
    requestType: email_notifications_pb.ViewEmailNotificationPreferencesRequest,
    responseType: email_notifications_pb.EmailNotificationPreferences,
    requestSerialize: serialize_hiber_email_ViewEmailNotificationPreferencesRequest,
    requestDeserialize: deserialize_hiber_email_ViewEmailNotificationPreferencesRequest,
    responseSerialize: serialize_hiber_email_EmailNotificationPreferences,
    responseDeserialize: deserialize_hiber_email_EmailNotificationPreferences,
  },
  update: {
    path: '/hiber.email.EmailNotificationPreferencesService/Update',
    requestStream: false,
    responseStream: false,
    requestType: email_notifications_pb.UpdateEmailNotificationPreferencesRequest,
    responseType: email_notifications_pb.EmailNotificationPreferences,
    requestSerialize: serialize_hiber_email_UpdateEmailNotificationPreferencesRequest,
    requestDeserialize: deserialize_hiber_email_UpdateEmailNotificationPreferencesRequest,
    responseSerialize: serialize_hiber_email_EmailNotificationPreferences,
    responseDeserialize: deserialize_hiber_email_EmailNotificationPreferences,
  },
  delete: {
    path: '/hiber.email.EmailNotificationPreferencesService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest,
    responseType: email_notifications_pb.RemoveAllEmailNotificationPreferencesRequest.Response,
    requestSerialize: serialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest,
    requestDeserialize: deserialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest,
    responseSerialize: serialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest_Response,
    responseDeserialize: deserialize_hiber_email_RemoveAllEmailNotificationPreferencesRequest_Response,
  },
  history: {
    path: '/hiber.email.EmailNotificationPreferencesService/History',
    requestStream: false,
    responseStream: false,
    requestType: email_notifications_pb.EmailNotificationHistoryRequest,
    responseType: email_notifications_pb.EmailNotificationHistoryRequest.Response,
    requestSerialize: serialize_hiber_email_EmailNotificationHistoryRequest,
    requestDeserialize: deserialize_hiber_email_EmailNotificationHistoryRequest,
    responseSerialize: serialize_hiber_email_EmailNotificationHistoryRequest_Response,
    responseDeserialize: deserialize_hiber_email_EmailNotificationHistoryRequest_Response,
  },
};

exports.EmailNotificationPreferencesServiceClient = grpc.makeGenericClientConstructor(EmailNotificationPreferencesServiceService);
