// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var integration_slack_pb = require('./integration_slack_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_hiber_integration_slack_CreateSlackPublisherRequest(arg) {
  if (!(arg instanceof integration_slack_pb.CreateSlackPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.CreateSlackPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_CreateSlackPublisherRequest(buffer_arg) {
  return integration_slack_pb.CreateSlackPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_DeleteSlackPublisherRequest(arg) {
  if (!(arg instanceof integration_slack_pb.DeleteSlackPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.DeleteSlackPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_DeleteSlackPublisherRequest(buffer_arg) {
  return integration_slack_pb.DeleteSlackPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_DeleteSlackPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.DeleteSlackPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.DeleteSlackPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_DeleteSlackPublisherRequest_Response(buffer_arg) {
  return integration_slack_pb.DeleteSlackPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_DisableSlackPublisherRequest(arg) {
  if (!(arg instanceof integration_slack_pb.DisableSlackPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.DisableSlackPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_DisableSlackPublisherRequest(buffer_arg) {
  return integration_slack_pb.DisableSlackPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_DisableSlackPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.DisableSlackPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.DisableSlackPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_DisableSlackPublisherRequest_Response(buffer_arg) {
  return integration_slack_pb.DisableSlackPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_EnableSlackPublisherRequest(arg) {
  if (!(arg instanceof integration_slack_pb.EnableSlackPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.EnableSlackPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_EnableSlackPublisherRequest(buffer_arg) {
  return integration_slack_pb.EnableSlackPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_EnableSlackPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.EnableSlackPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.EnableSlackPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_EnableSlackPublisherRequest_Response(buffer_arg) {
  return integration_slack_pb.EnableSlackPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_ListSlackPublishersRequest(arg) {
  if (!(arg instanceof integration_slack_pb.ListSlackPublishersRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.ListSlackPublishersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_ListSlackPublishersRequest(buffer_arg) {
  return integration_slack_pb.ListSlackPublishersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_ListSlackPublishersRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.ListSlackPublishersRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.ListSlackPublishersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_ListSlackPublishersRequest_Response(buffer_arg) {
  return integration_slack_pb.ListSlackPublishersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_SlackPublisher(arg) {
  if (!(arg instanceof integration_slack_pb.SlackPublisher)) {
    throw new Error('Expected argument of type hiber.integration.slack.SlackPublisher');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_SlackPublisher(buffer_arg) {
  return integration_slack_pb.SlackPublisher.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_SlackPublisherHistoryRequest(arg) {
  if (!(arg instanceof integration_slack_pb.SlackPublisherHistoryRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.SlackPublisherHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_SlackPublisherHistoryRequest(buffer_arg) {
  return integration_slack_pb.SlackPublisherHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_SlackPublisherHistoryRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.SlackPublisherHistoryRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.SlackPublisherHistoryRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_SlackPublisherHistoryRequest_Response(buffer_arg) {
  return integration_slack_pb.SlackPublisherHistoryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_UpdateSlackPublisherRequest(arg) {
  if (!(arg instanceof integration_slack_pb.UpdateSlackPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.UpdateSlackPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_UpdateSlackPublisherRequest(buffer_arg) {
  return integration_slack_pb.UpdateSlackPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest(arg) {
  if (!(arg instanceof integration_slack_pb.UpdateSlackPublisherTagsRequest)) {
    throw new Error('Expected argument of type hiber.integration.slack.UpdateSlackPublisherTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest(buffer_arg) {
  return integration_slack_pb.UpdateSlackPublisherTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest_Response(arg) {
  if (!(arg instanceof integration_slack_pb.UpdateSlackPublisherTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.slack.UpdateSlackPublisherTagsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest_Response(buffer_arg) {
  return integration_slack_pb.UpdateSlackPublisherTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var SlackIntegrationServiceService = exports.SlackIntegrationServiceService = {
  list: {
    path: '/hiber.integration.slack.SlackIntegrationService/List',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.ListSlackPublishersRequest,
    responseType: integration_slack_pb.ListSlackPublishersRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_ListSlackPublishersRequest,
    requestDeserialize: deserialize_hiber_integration_slack_ListSlackPublishersRequest,
    responseSerialize: serialize_hiber_integration_slack_ListSlackPublishersRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_ListSlackPublishersRequest_Response,
  },
  create: {
    path: '/hiber.integration.slack.SlackIntegrationService/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.CreateSlackPublisherRequest,
    responseType: integration_slack_pb.SlackPublisher,
    requestSerialize: serialize_hiber_integration_slack_CreateSlackPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_slack_CreateSlackPublisherRequest,
    responseSerialize: serialize_hiber_integration_slack_SlackPublisher,
    responseDeserialize: deserialize_hiber_integration_slack_SlackPublisher,
  },
  update: {
    path: '/hiber.integration.slack.SlackIntegrationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.UpdateSlackPublisherRequest,
    responseType: integration_slack_pb.SlackPublisher,
    requestSerialize: serialize_hiber_integration_slack_UpdateSlackPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_slack_UpdateSlackPublisherRequest,
    responseSerialize: serialize_hiber_integration_slack_SlackPublisher,
    responseDeserialize: deserialize_hiber_integration_slack_SlackPublisher,
  },
  updateTags: {
    path: '/hiber.integration.slack.SlackIntegrationService/UpdateTags',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.UpdateSlackPublisherTagsRequest,
    responseType: integration_slack_pb.UpdateSlackPublisherTagsRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest,
    requestDeserialize: deserialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest,
    responseSerialize: serialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_UpdateSlackPublisherTagsRequest_Response,
  },
  enable: {
    path: '/hiber.integration.slack.SlackIntegrationService/Enable',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.EnableSlackPublisherRequest,
    responseType: integration_slack_pb.EnableSlackPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_EnableSlackPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_slack_EnableSlackPublisherRequest,
    responseSerialize: serialize_hiber_integration_slack_EnableSlackPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_EnableSlackPublisherRequest_Response,
  },
  disable: {
    path: '/hiber.integration.slack.SlackIntegrationService/Disable',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.DisableSlackPublisherRequest,
    responseType: integration_slack_pb.DisableSlackPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_DisableSlackPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_slack_DisableSlackPublisherRequest,
    responseSerialize: serialize_hiber_integration_slack_DisableSlackPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_DisableSlackPublisherRequest_Response,
  },
  delete: {
    path: '/hiber.integration.slack.SlackIntegrationService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.DeleteSlackPublisherRequest,
    responseType: integration_slack_pb.DeleteSlackPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_DeleteSlackPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_slack_DeleteSlackPublisherRequest,
    responseSerialize: serialize_hiber_integration_slack_DeleteSlackPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_DeleteSlackPublisherRequest_Response,
  },
  history: {
    path: '/hiber.integration.slack.SlackIntegrationService/History',
    requestStream: false,
    responseStream: false,
    requestType: integration_slack_pb.SlackPublisherHistoryRequest,
    responseType: integration_slack_pb.SlackPublisherHistoryRequest.Response,
    requestSerialize: serialize_hiber_integration_slack_SlackPublisherHistoryRequest,
    requestDeserialize: deserialize_hiber_integration_slack_SlackPublisherHistoryRequest,
    responseSerialize: serialize_hiber_integration_slack_SlackPublisherHistoryRequest_Response,
    responseDeserialize: deserialize_hiber_integration_slack_SlackPublisherHistoryRequest_Response,
  },
};

exports.SlackIntegrationServiceClient = grpc.makeGenericClientConstructor(SlackIntegrationServiceService);
