// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var publisher_pb = require('./publisher_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_hiber_publisher_CreatePublisherRequest(arg) {
  if (!(arg instanceof publisher_pb.CreatePublisherRequest)) {
    throw new Error('Expected argument of type hiber.publisher.CreatePublisherRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_CreatePublisherRequest(buffer_arg) {
  return publisher_pb.CreatePublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_CreatePublisherRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.CreatePublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.CreatePublisherRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_CreatePublisherRequest_Response(buffer_arg) {
  return publisher_pb.CreatePublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_DeletePublisherRequest(arg) {
  if (!(arg instanceof publisher_pb.DeletePublisherRequest)) {
    throw new Error('Expected argument of type hiber.publisher.DeletePublisherRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_DeletePublisherRequest(buffer_arg) {
  return publisher_pb.DeletePublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_DeletePublisherRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.DeletePublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.DeletePublisherRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_DeletePublisherRequest_Response(buffer_arg) {
  return publisher_pb.DeletePublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_DisablePublisherRequest(arg) {
  if (!(arg instanceof publisher_pb.DisablePublisherRequest)) {
    throw new Error('Expected argument of type hiber.publisher.DisablePublisherRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_DisablePublisherRequest(buffer_arg) {
  return publisher_pb.DisablePublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_DisablePublisherRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.DisablePublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.DisablePublisherRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_DisablePublisherRequest_Response(buffer_arg) {
  return publisher_pb.DisablePublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_EnablePublisherRequest(arg) {
  if (!(arg instanceof publisher_pb.EnablePublisherRequest)) {
    throw new Error('Expected argument of type hiber.publisher.EnablePublisherRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_EnablePublisherRequest(buffer_arg) {
  return publisher_pb.EnablePublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_EnablePublisherRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.EnablePublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.EnablePublisherRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_EnablePublisherRequest_Response(buffer_arg) {
  return publisher_pb.EnablePublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_ListPublishersRequest(arg) {
  if (!(arg instanceof publisher_pb.ListPublishersRequest)) {
    throw new Error('Expected argument of type hiber.publisher.ListPublishersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_ListPublishersRequest(buffer_arg) {
  return publisher_pb.ListPublishersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_ListPublishersRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.ListPublishersRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.ListPublishersRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_ListPublishersRequest_Response(buffer_arg) {
  return publisher_pb.ListPublishersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_PublisherHistoryRequest(arg) {
  if (!(arg instanceof publisher_pb.PublisherHistoryRequest)) {
    throw new Error('Expected argument of type hiber.publisher.PublisherHistoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_PublisherHistoryRequest(buffer_arg) {
  return publisher_pb.PublisherHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_PublisherHistoryRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.PublisherHistoryRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.PublisherHistoryRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_PublisherHistoryRequest_Response(buffer_arg) {
  return publisher_pb.PublisherHistoryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_UpdatePublisherRequest(arg) {
  if (!(arg instanceof publisher_pb.UpdatePublisherRequest)) {
    throw new Error('Expected argument of type hiber.publisher.UpdatePublisherRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_UpdatePublisherRequest(buffer_arg) {
  return publisher_pb.UpdatePublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_UpdatePublisherRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.UpdatePublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.UpdatePublisherRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_UpdatePublisherRequest_Response(buffer_arg) {
  return publisher_pb.UpdatePublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_UpdatePublisherTagsRequest(arg) {
  if (!(arg instanceof publisher_pb.UpdatePublisherTagsRequest)) {
    throw new Error('Expected argument of type hiber.publisher.UpdatePublisherTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_UpdatePublisherTagsRequest(buffer_arg) {
  return publisher_pb.UpdatePublisherTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_publisher_UpdatePublisherTagsRequest_Response(arg) {
  if (!(arg instanceof publisher_pb.UpdatePublisherTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.publisher.UpdatePublisherTagsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_publisher_UpdatePublisherTagsRequest_Response(buffer_arg) {
  return publisher_pb.UpdatePublisherTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// The publisher service is deprecated. It will be replaced with specific APIs, like the WebhookService
// a specific MQTT publisher API, and more publisher implementations.
var PublisherServiceService = exports.PublisherServiceService = {
  list: {
    path: '/hiber.publisher.PublisherService/List',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.ListPublishersRequest,
    responseType: publisher_pb.ListPublishersRequest.Response,
    requestSerialize: serialize_hiber_publisher_ListPublishersRequest,
    requestDeserialize: deserialize_hiber_publisher_ListPublishersRequest,
    responseSerialize: serialize_hiber_publisher_ListPublishersRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_ListPublishersRequest_Response,
  },
  create: {
    path: '/hiber.publisher.PublisherService/Create',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.CreatePublisherRequest,
    responseType: publisher_pb.CreatePublisherRequest.Response,
    requestSerialize: serialize_hiber_publisher_CreatePublisherRequest,
    requestDeserialize: deserialize_hiber_publisher_CreatePublisherRequest,
    responseSerialize: serialize_hiber_publisher_CreatePublisherRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_CreatePublisherRequest_Response,
  },
  enable: {
    path: '/hiber.publisher.PublisherService/Enable',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.EnablePublisherRequest,
    responseType: publisher_pb.EnablePublisherRequest.Response,
    requestSerialize: serialize_hiber_publisher_EnablePublisherRequest,
    requestDeserialize: deserialize_hiber_publisher_EnablePublisherRequest,
    responseSerialize: serialize_hiber_publisher_EnablePublisherRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_EnablePublisherRequest_Response,
  },
  disable: {
    path: '/hiber.publisher.PublisherService/Disable',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.DisablePublisherRequest,
    responseType: publisher_pb.DisablePublisherRequest.Response,
    requestSerialize: serialize_hiber_publisher_DisablePublisherRequest,
    requestDeserialize: deserialize_hiber_publisher_DisablePublisherRequest,
    responseSerialize: serialize_hiber_publisher_DisablePublisherRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_DisablePublisherRequest_Response,
  },
  update: {
    path: '/hiber.publisher.PublisherService/Update',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.UpdatePublisherRequest,
    responseType: publisher_pb.UpdatePublisherRequest.Response,
    requestSerialize: serialize_hiber_publisher_UpdatePublisherRequest,
    requestDeserialize: deserialize_hiber_publisher_UpdatePublisherRequest,
    responseSerialize: serialize_hiber_publisher_UpdatePublisherRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_UpdatePublisherRequest_Response,
  },
  updateTags: {
    path: '/hiber.publisher.PublisherService/UpdateTags',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.UpdatePublisherTagsRequest,
    responseType: publisher_pb.UpdatePublisherTagsRequest.Response,
    requestSerialize: serialize_hiber_publisher_UpdatePublisherTagsRequest,
    requestDeserialize: deserialize_hiber_publisher_UpdatePublisherTagsRequest,
    responseSerialize: serialize_hiber_publisher_UpdatePublisherTagsRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_UpdatePublisherTagsRequest_Response,
  },
  delete: {
    path: '/hiber.publisher.PublisherService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.DeletePublisherRequest,
    responseType: publisher_pb.DeletePublisherRequest.Response,
    requestSerialize: serialize_hiber_publisher_DeletePublisherRequest,
    requestDeserialize: deserialize_hiber_publisher_DeletePublisherRequest,
    responseSerialize: serialize_hiber_publisher_DeletePublisherRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_DeletePublisherRequest_Response,
  },
  history: {
    path: '/hiber.publisher.PublisherService/History',
    requestStream: false,
    responseStream: false,
    requestType: publisher_pb.PublisherHistoryRequest,
    responseType: publisher_pb.PublisherHistoryRequest.Response,
    requestSerialize: serialize_hiber_publisher_PublisherHistoryRequest,
    requestDeserialize: deserialize_hiber_publisher_PublisherHistoryRequest,
    responseSerialize: serialize_hiber_publisher_PublisherHistoryRequest_Response,
    responseDeserialize: deserialize_hiber_publisher_PublisherHistoryRequest_Response,
  },
};

exports.PublisherServiceClient = grpc.makeGenericClientConstructor(PublisherServiceService);
