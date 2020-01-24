// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var integration_mqtt_pb = require('./integration_mqtt_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_hiber_integration_mqtt_CreateMQTTPublisherRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.CreateMQTTPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.CreateMQTTPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_CreateMQTTPublisherRequest(buffer_arg) {
  return integration_mqtt_pb.CreateMQTTPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.DeleteMQTTPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.DeleteMQTTPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest(buffer_arg) {
  return integration_mqtt_pb.DeleteMQTTPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.DeleteMQTTPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.DeleteMQTTPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest_Response(buffer_arg) {
  return integration_mqtt_pb.DeleteMQTTPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_DisableMQTTPublisherRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.DisableMQTTPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.DisableMQTTPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_DisableMQTTPublisherRequest(buffer_arg) {
  return integration_mqtt_pb.DisableMQTTPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_DisableMQTTPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.DisableMQTTPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.DisableMQTTPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_DisableMQTTPublisherRequest_Response(buffer_arg) {
  return integration_mqtt_pb.DisableMQTTPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_EnableMQTTPublisherRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.EnableMQTTPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.EnableMQTTPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_EnableMQTTPublisherRequest(buffer_arg) {
  return integration_mqtt_pb.EnableMQTTPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_EnableMQTTPublisherRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.EnableMQTTPublisherRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.EnableMQTTPublisherRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_EnableMQTTPublisherRequest_Response(buffer_arg) {
  return integration_mqtt_pb.EnableMQTTPublisherRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_ListMQTTPublishersRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.ListMQTTPublishersRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.ListMQTTPublishersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_ListMQTTPublishersRequest(buffer_arg) {
  return integration_mqtt_pb.ListMQTTPublishersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_ListMQTTPublishersRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.ListMQTTPublishersRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.ListMQTTPublishersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_ListMQTTPublishersRequest_Response(buffer_arg) {
  return integration_mqtt_pb.ListMQTTPublishersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_MQTTPublisher(arg) {
  if (!(arg instanceof integration_mqtt_pb.MQTTPublisher)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.MQTTPublisher');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_MQTTPublisher(buffer_arg) {
  return integration_mqtt_pb.MQTTPublisher.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.MQTTPublisherHistoryRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.MQTTPublisherHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest(buffer_arg) {
  return integration_mqtt_pb.MQTTPublisherHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.MQTTPublisherHistoryRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.MQTTPublisherHistoryRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest_Response(buffer_arg) {
  return integration_mqtt_pb.MQTTPublisherHistoryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_UpdateMQTTPublisherRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.UpdateMQTTPublisherRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.UpdateMQTTPublisherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_UpdateMQTTPublisherRequest(buffer_arg) {
  return integration_mqtt_pb.UpdateMQTTPublisherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest(arg) {
  if (!(arg instanceof integration_mqtt_pb.UpdateMQTTPublisherTagsRequest)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.UpdateMQTTPublisherTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest(buffer_arg) {
  return integration_mqtt_pb.UpdateMQTTPublisherTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest_Response(arg) {
  if (!(arg instanceof integration_mqtt_pb.UpdateMQTTPublisherTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.mqtt.UpdateMQTTPublisherTagsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest_Response(buffer_arg) {
  return integration_mqtt_pb.UpdateMQTTPublisherTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var MQTTServiceService = exports.MQTTServiceService = {
  list: {
    path: '/hiber.integration.mqtt.MQTTService/List',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.ListMQTTPublishersRequest,
    responseType: integration_mqtt_pb.ListMQTTPublishersRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_ListMQTTPublishersRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_ListMQTTPublishersRequest,
    responseSerialize: serialize_hiber_integration_mqtt_ListMQTTPublishersRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_ListMQTTPublishersRequest_Response,
  },
  create: {
    path: '/hiber.integration.mqtt.MQTTService/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.CreateMQTTPublisherRequest,
    responseType: integration_mqtt_pb.MQTTPublisher,
    requestSerialize: serialize_hiber_integration_mqtt_CreateMQTTPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_CreateMQTTPublisherRequest,
    responseSerialize: serialize_hiber_integration_mqtt_MQTTPublisher,
    responseDeserialize: deserialize_hiber_integration_mqtt_MQTTPublisher,
  },
  update: {
    path: '/hiber.integration.mqtt.MQTTService/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.UpdateMQTTPublisherRequest,
    responseType: integration_mqtt_pb.MQTTPublisher,
    requestSerialize: serialize_hiber_integration_mqtt_UpdateMQTTPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_UpdateMQTTPublisherRequest,
    responseSerialize: serialize_hiber_integration_mqtt_MQTTPublisher,
    responseDeserialize: deserialize_hiber_integration_mqtt_MQTTPublisher,
  },
  updateTags: {
    path: '/hiber.integration.mqtt.MQTTService/UpdateTags',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.UpdateMQTTPublisherTagsRequest,
    responseType: integration_mqtt_pb.UpdateMQTTPublisherTagsRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest,
    responseSerialize: serialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_UpdateMQTTPublisherTagsRequest_Response,
  },
  enable: {
    path: '/hiber.integration.mqtt.MQTTService/Enable',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.EnableMQTTPublisherRequest,
    responseType: integration_mqtt_pb.EnableMQTTPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_EnableMQTTPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_EnableMQTTPublisherRequest,
    responseSerialize: serialize_hiber_integration_mqtt_EnableMQTTPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_EnableMQTTPublisherRequest_Response,
  },
  disable: {
    path: '/hiber.integration.mqtt.MQTTService/Disable',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.DisableMQTTPublisherRequest,
    responseType: integration_mqtt_pb.DisableMQTTPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_DisableMQTTPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_DisableMQTTPublisherRequest,
    responseSerialize: serialize_hiber_integration_mqtt_DisableMQTTPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_DisableMQTTPublisherRequest_Response,
  },
  delete: {
    path: '/hiber.integration.mqtt.MQTTService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.DeleteMQTTPublisherRequest,
    responseType: integration_mqtt_pb.DeleteMQTTPublisherRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest,
    responseSerialize: serialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_DeleteMQTTPublisherRequest_Response,
  },
  history: {
    path: '/hiber.integration.mqtt.MQTTService/History',
    requestStream: false,
    responseStream: false,
    requestType: integration_mqtt_pb.MQTTPublisherHistoryRequest,
    responseType: integration_mqtt_pb.MQTTPublisherHistoryRequest.Response,
    requestSerialize: serialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest,
    requestDeserialize: deserialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest,
    responseSerialize: serialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest_Response,
    responseDeserialize: deserialize_hiber_integration_mqtt_MQTTPublisherHistoryRequest_Response,
  },
};

exports.MQTTServiceClient = grpc.makeGenericClientConstructor(MQTTServiceService);
