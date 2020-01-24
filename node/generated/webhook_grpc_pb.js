// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var webhook_pb = require('./webhook_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_hiber_webhook_CreateWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.CreateWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.CreateWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_CreateWebhookRequest(buffer_arg) {
  return webhook_pb.CreateWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_DeleteWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.DeleteWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.DeleteWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_DeleteWebhookRequest(buffer_arg) {
  return webhook_pb.DeleteWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_DeleteWebhookRequest_Response(arg) {
  if (!(arg instanceof webhook_pb.DeleteWebhookRequest.Response)) {
    throw new Error('Expected argument of type hiber.webhook.DeleteWebhookRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_DeleteWebhookRequest_Response(buffer_arg) {
  return webhook_pb.DeleteWebhookRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_DisableWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.DisableWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.DisableWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_DisableWebhookRequest(buffer_arg) {
  return webhook_pb.DisableWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_EnableWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.EnableWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.EnableWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_EnableWebhookRequest(buffer_arg) {
  return webhook_pb.EnableWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_GetWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.GetWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.GetWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_GetWebhookRequest(buffer_arg) {
  return webhook_pb.GetWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_ListWebhooksRequest(arg) {
  if (!(arg instanceof webhook_pb.ListWebhooksRequest)) {
    throw new Error('Expected argument of type hiber.webhook.ListWebhooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_ListWebhooksRequest(buffer_arg) {
  return webhook_pb.ListWebhooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_ListWebhooksRequest_Response(arg) {
  if (!(arg instanceof webhook_pb.ListWebhooksRequest.Response)) {
    throw new Error('Expected argument of type hiber.webhook.ListWebhooksRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_ListWebhooksRequest_Response(buffer_arg) {
  return webhook_pb.ListWebhooksRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_UpdateWebhookFilterRequest(arg) {
  if (!(arg instanceof webhook_pb.UpdateWebhookFilterRequest)) {
    throw new Error('Expected argument of type hiber.webhook.UpdateWebhookFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_UpdateWebhookFilterRequest(buffer_arg) {
  return webhook_pb.UpdateWebhookFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_UpdateWebhookRequest(arg) {
  if (!(arg instanceof webhook_pb.UpdateWebhookRequest)) {
    throw new Error('Expected argument of type hiber.webhook.UpdateWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_UpdateWebhookRequest(buffer_arg) {
  return webhook_pb.UpdateWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_UpdateWebhookTagsRequest(arg) {
  if (!(arg instanceof webhook_pb.UpdateWebhookTagsRequest)) {
    throw new Error('Expected argument of type hiber.webhook.UpdateWebhookTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_UpdateWebhookTagsRequest(buffer_arg) {
  return webhook_pb.UpdateWebhookTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_UpdateWebhookTagsRequest_Response(arg) {
  if (!(arg instanceof webhook_pb.UpdateWebhookTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.webhook.UpdateWebhookTagsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_UpdateWebhookTagsRequest_Response(buffer_arg) {
  return webhook_pb.UpdateWebhookTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_Webhook(arg) {
  if (!(arg instanceof webhook_pb.Webhook)) {
    throw new Error('Expected argument of type hiber.webhook.Webhook');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_Webhook(buffer_arg) {
  return webhook_pb.Webhook.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_WebhookHistoryRequest(arg) {
  if (!(arg instanceof webhook_pb.WebhookHistoryRequest)) {
    throw new Error('Expected argument of type hiber.webhook.WebhookHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_WebhookHistoryRequest(buffer_arg) {
  return webhook_pb.WebhookHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_webhook_WebhookHistoryRequest_Response(arg) {
  if (!(arg instanceof webhook_pb.WebhookHistoryRequest.Response)) {
    throw new Error('Expected argument of type hiber.webhook.WebhookHistoryRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_webhook_WebhookHistoryRequest_Response(buffer_arg) {
  return webhook_pb.WebhookHistoryRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebhookServiceService = exports.WebhookServiceService = {
  list: {
    path: '/hiber.webhook.WebhookService/List',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.ListWebhooksRequest,
    responseType: webhook_pb.ListWebhooksRequest.Response,
    requestSerialize: serialize_hiber_webhook_ListWebhooksRequest,
    requestDeserialize: deserialize_hiber_webhook_ListWebhooksRequest,
    responseSerialize: serialize_hiber_webhook_ListWebhooksRequest_Response,
    responseDeserialize: deserialize_hiber_webhook_ListWebhooksRequest_Response,
  },
  history: {
    path: '/hiber.webhook.WebhookService/History',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.WebhookHistoryRequest,
    responseType: webhook_pb.WebhookHistoryRequest.Response,
    requestSerialize: serialize_hiber_webhook_WebhookHistoryRequest,
    requestDeserialize: deserialize_hiber_webhook_WebhookHistoryRequest,
    responseSerialize: serialize_hiber_webhook_WebhookHistoryRequest_Response,
    responseDeserialize: deserialize_hiber_webhook_WebhookHistoryRequest_Response,
  },
  create: {
    path: '/hiber.webhook.WebhookService/Create',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.CreateWebhookRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_CreateWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_CreateWebhookRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  enable: {
    path: '/hiber.webhook.WebhookService/Enable',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.EnableWebhookRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_EnableWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_EnableWebhookRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  disable: {
    path: '/hiber.webhook.WebhookService/Disable',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.DisableWebhookRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_DisableWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_DisableWebhookRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  updateFilter: {
    path: '/hiber.webhook.WebhookService/UpdateFilter',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.UpdateWebhookFilterRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_UpdateWebhookFilterRequest,
    requestDeserialize: deserialize_hiber_webhook_UpdateWebhookFilterRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  update: {
    path: '/hiber.webhook.WebhookService/Update',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.UpdateWebhookRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_UpdateWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_UpdateWebhookRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  updateTags: {
    path: '/hiber.webhook.WebhookService/UpdateTags',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.UpdateWebhookTagsRequest,
    responseType: webhook_pb.UpdateWebhookTagsRequest.Response,
    requestSerialize: serialize_hiber_webhook_UpdateWebhookTagsRequest,
    requestDeserialize: deserialize_hiber_webhook_UpdateWebhookTagsRequest,
    responseSerialize: serialize_hiber_webhook_UpdateWebhookTagsRequest_Response,
    responseDeserialize: deserialize_hiber_webhook_UpdateWebhookTagsRequest_Response,
  },
  get: {
    path: '/hiber.webhook.WebhookService/Get',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.GetWebhookRequest,
    responseType: webhook_pb.Webhook,
    requestSerialize: serialize_hiber_webhook_GetWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_GetWebhookRequest,
    responseSerialize: serialize_hiber_webhook_Webhook,
    responseDeserialize: deserialize_hiber_webhook_Webhook,
  },
  delete: {
    path: '/hiber.webhook.WebhookService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: webhook_pb.DeleteWebhookRequest,
    responseType: webhook_pb.DeleteWebhookRequest.Response,
    requestSerialize: serialize_hiber_webhook_DeleteWebhookRequest,
    requestDeserialize: deserialize_hiber_webhook_DeleteWebhookRequest,
    responseSerialize: serialize_hiber_webhook_DeleteWebhookRequest_Response,
    responseDeserialize: deserialize_hiber_webhook_DeleteWebhookRequest_Response,
  },
};

exports.WebhookServiceClient = grpc.makeGenericClientConstructor(WebhookServiceService);
