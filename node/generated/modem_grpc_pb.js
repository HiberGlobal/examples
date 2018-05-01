// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var modem_pb = require('./modem_pb.js');
var base_pb = require('./base_pb.js');
var tag_pb = require('./tag_pb.js');
var subscription_pb = require('./subscription_pb.js');

function serialize_hiber_modem_GetModemRequest(arg) {
  if (!(arg instanceof modem_pb.GetModemRequest)) {
    throw new Error('Expected argument of type hiber.modem.GetModemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_GetModemRequest(buffer_arg) {
  return modem_pb.GetModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemMessagesRequest(arg) {
  if (!(arg instanceof modem_pb.ListModemMessagesRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemMessagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemMessagesRequest(buffer_arg) {
  return modem_pb.ListModemMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemMessagesRequest_Response(arg) {
  if (!(arg instanceof modem_pb.ListModemMessagesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemMessagesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemMessagesRequest_Response(buffer_arg) {
  return modem_pb.ListModemMessagesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemsRequest(arg) {
  if (!(arg instanceof modem_pb.ListModemsRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemsRequest(buffer_arg) {
  return modem_pb.ListModemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemsRequest_Response(arg) {
  if (!(arg instanceof modem_pb.ListModemsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemsRequest_Response(buffer_arg) {
  return modem_pb.ListModemsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_MessageCountRequest(arg) {
  if (!(arg instanceof modem_pb.MessageCountRequest)) {
    throw new Error('Expected argument of type hiber.modem.MessageCountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_MessageCountRequest(buffer_arg) {
  return modem_pb.MessageCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_MessageCountRequest_Response(arg) {
  if (!(arg instanceof modem_pb.MessageCountRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.MessageCountRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_MessageCountRequest_Response(buffer_arg) {
  return modem_pb.MessageCountRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_Modem(arg) {
  if (!(arg instanceof modem_pb.Modem)) {
    throw new Error('Expected argument of type hiber.modem.Modem');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_Modem(buffer_arg) {
  return modem_pb.Modem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_RenameModemRequest(arg) {
  if (!(arg instanceof modem_pb.RenameModemRequest)) {
    throw new Error('Expected argument of type hiber.modem.RenameModemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_RenameModemRequest(buffer_arg) {
  return modem_pb.RenameModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemPayloadTemplateRequest(arg) {
  if (!(arg instanceof modem_pb.UpdateModemPayloadTemplateRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemPayloadTemplateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemPayloadTemplateRequest(buffer_arg) {
  return modem_pb.UpdateModemPayloadTemplateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemTagsRequest(arg) {
  if (!(arg instanceof modem_pb.UpdateModemTagsRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemTagsRequest(buffer_arg) {
  return modem_pb.UpdateModemTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemTagsRequest_Response(arg) {
  if (!(arg instanceof modem_pb.UpdateModemTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemTagsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemTagsRequest_Response(buffer_arg) {
  return modem_pb.UpdateModemTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// The core of the Hiber system, modems are the network nodes that send information and user data.
// This service contains calls to list and manage them, as well as list their messages.
var ModemServiceService = exports.ModemServiceService = {
  list: {
    path: '/hiber.modem.ModemService/List',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.ListModemsRequest,
    responseType: modem_pb.ListModemsRequest.Response,
    requestSerialize: serialize_hiber_modem_ListModemsRequest,
    requestDeserialize: deserialize_hiber_modem_ListModemsRequest,
    responseSerialize: serialize_hiber_modem_ListModemsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ListModemsRequest_Response,
  },
  get: {
    path: '/hiber.modem.ModemService/Get',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.GetModemRequest,
    responseType: modem_pb.Modem,
    requestSerialize: serialize_hiber_modem_GetModemRequest,
    requestDeserialize: deserialize_hiber_modem_GetModemRequest,
    responseSerialize: serialize_hiber_modem_Modem,
    responseDeserialize: deserialize_hiber_modem_Modem,
  },
  messages: {
    path: '/hiber.modem.ModemService/Messages',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.ListModemMessagesRequest,
    responseType: modem_pb.ListModemMessagesRequest.Response,
    requestSerialize: serialize_hiber_modem_ListModemMessagesRequest,
    requestDeserialize: deserialize_hiber_modem_ListModemMessagesRequest,
    responseSerialize: serialize_hiber_modem_ListModemMessagesRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ListModemMessagesRequest_Response,
  },
  messageCount: {
    path: '/hiber.modem.ModemService/MessageCount',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.MessageCountRequest,
    responseType: modem_pb.MessageCountRequest.Response,
    requestSerialize: serialize_hiber_modem_MessageCountRequest,
    requestDeserialize: deserialize_hiber_modem_MessageCountRequest,
    responseSerialize: serialize_hiber_modem_MessageCountRequest_Response,
    responseDeserialize: deserialize_hiber_modem_MessageCountRequest_Response,
  },
  rename: {
    path: '/hiber.modem.ModemService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.RenameModemRequest,
    responseType: modem_pb.Modem,
    requestSerialize: serialize_hiber_modem_RenameModemRequest,
    requestDeserialize: deserialize_hiber_modem_RenameModemRequest,
    responseSerialize: serialize_hiber_modem_Modem,
    responseDeserialize: deserialize_hiber_modem_Modem,
  },
  updatePayloadTemplate: {
    path: '/hiber.modem.ModemService/UpdatePayloadTemplate',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.UpdateModemPayloadTemplateRequest,
    responseType: modem_pb.Modem,
    requestSerialize: serialize_hiber_modem_UpdateModemPayloadTemplateRequest,
    requestDeserialize: deserialize_hiber_modem_UpdateModemPayloadTemplateRequest,
    responseSerialize: serialize_hiber_modem_Modem,
    responseDeserialize: deserialize_hiber_modem_Modem,
  },
  updateTags: {
    path: '/hiber.modem.ModemService/UpdateTags',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.UpdateModemTagsRequest,
    responseType: modem_pb.UpdateModemTagsRequest.Response,
    requestSerialize: serialize_hiber_modem_UpdateModemTagsRequest,
    requestDeserialize: deserialize_hiber_modem_UpdateModemTagsRequest,
    responseSerialize: serialize_hiber_modem_UpdateModemTagsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_UpdateModemTagsRequest_Response,
  },
};

exports.ModemServiceClient = grpc.makeGenericClientConstructor(ModemServiceService);
