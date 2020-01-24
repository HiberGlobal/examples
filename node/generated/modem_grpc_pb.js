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
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_GetModemRequest(buffer_arg) {
  return modem_pb.GetModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_LicenseKeysRequest(arg) {
  if (!(arg instanceof modem_pb.LicenseKeysRequest)) {
    throw new Error('Expected argument of type hiber.modem.LicenseKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_LicenseKeysRequest(buffer_arg) {
  return modem_pb.LicenseKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_LicenseKeysRequest_Response(arg) {
  if (!(arg instanceof modem_pb.LicenseKeysRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.LicenseKeysRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_LicenseKeysRequest_Response(buffer_arg) {
  return modem_pb.LicenseKeysRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemMessagesRequest(arg) {
  if (!(arg instanceof modem_pb.ListModemMessagesRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemMessagesRequest(buffer_arg) {
  return modem_pb.ListModemMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemMessagesRequest_Response(arg) {
  if (!(arg instanceof modem_pb.ListModemMessagesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemMessagesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemMessagesRequest_Response(buffer_arg) {
  return modem_pb.ListModemMessagesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemsRequest(arg) {
  if (!(arg instanceof modem_pb.ListModemsRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemsRequest(buffer_arg) {
  return modem_pb.ListModemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemsRequest_Response(arg) {
  if (!(arg instanceof modem_pb.ListModemsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemsRequest_Response(buffer_arg) {
  return modem_pb.ListModemsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_MessageCountRequest(arg) {
  if (!(arg instanceof modem_pb.MessageCountRequest)) {
    throw new Error('Expected argument of type hiber.modem.MessageCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_MessageCountRequest(buffer_arg) {
  return modem_pb.MessageCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_MessageCountRequest_Response(arg) {
  if (!(arg instanceof modem_pb.MessageCountRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.MessageCountRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_MessageCountRequest_Response(buffer_arg) {
  return modem_pb.MessageCountRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_Modem(arg) {
  if (!(arg instanceof modem_pb.Modem)) {
    throw new Error('Expected argument of type hiber.modem.Modem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_Modem(buffer_arg) {
  return modem_pb.Modem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_RenameModemRequest(arg) {
  if (!(arg instanceof modem_pb.RenameModemRequest)) {
    throw new Error('Expected argument of type hiber.modem.RenameModemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_RenameModemRequest(buffer_arg) {
  return modem_pb.RenameModemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemNotesRequest(arg) {
  if (!(arg instanceof modem_pb.UpdateModemNotesRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemNotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemNotesRequest(buffer_arg) {
  return modem_pb.UpdateModemNotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemNotesRequest_Response(arg) {
  if (!(arg instanceof modem_pb.UpdateModemNotesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemNotesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemNotesRequest_Response(buffer_arg) {
  return modem_pb.UpdateModemNotesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemSecureNotesRequest(arg) {
  if (!(arg instanceof modem_pb.UpdateModemSecureNotesRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemSecureNotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemSecureNotesRequest(buffer_arg) {
  return modem_pb.UpdateModemSecureNotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemSecureNotesRequest_Response(arg) {
  if (!(arg instanceof modem_pb.UpdateModemSecureNotesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemSecureNotesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemSecureNotesRequest_Response(buffer_arg) {
  return modem_pb.UpdateModemSecureNotesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemTagsRequest(arg) {
  if (!(arg instanceof modem_pb.UpdateModemTagsRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemTagsRequest(buffer_arg) {
  return modem_pb.UpdateModemTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdateModemTagsRequest_Response(arg) {
  if (!(arg instanceof modem_pb.UpdateModemTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.UpdateModemTagsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdateModemTagsRequest_Response(buffer_arg) {
  return modem_pb.UpdateModemTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdatePeripheralsRequest(arg) {
  if (!(arg instanceof modem_pb.UpdatePeripheralsRequest)) {
    throw new Error('Expected argument of type hiber.modem.UpdatePeripheralsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdatePeripheralsRequest(buffer_arg) {
  return modem_pb.UpdatePeripheralsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_UpdatePeripheralsRequest_Response(arg) {
  if (!(arg instanceof modem_pb.UpdatePeripheralsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.UpdatePeripheralsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_UpdatePeripheralsRequest_Response(buffer_arg) {
  return modem_pb.UpdatePeripheralsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// The core of the Hiber system, modems are the network nodes that send information and user data.
// This service contains calls to list and manage them, as well as list their messages.
var ModemServiceService = exports.ModemServiceService = {
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
  updateNotes: {
    path: '/hiber.modem.ModemService/UpdateNotes',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.UpdateModemNotesRequest,
    responseType: modem_pb.UpdateModemNotesRequest.Response,
    requestSerialize: serialize_hiber_modem_UpdateModemNotesRequest,
    requestDeserialize: deserialize_hiber_modem_UpdateModemNotesRequest,
    responseSerialize: serialize_hiber_modem_UpdateModemNotesRequest_Response,
    responseDeserialize: deserialize_hiber_modem_UpdateModemNotesRequest_Response,
  },
  updateSecureNotes: {
    path: '/hiber.modem.ModemService/UpdateSecureNotes',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.UpdateModemSecureNotesRequest,
    responseType: modem_pb.UpdateModemSecureNotesRequest.Response,
    requestSerialize: serialize_hiber_modem_UpdateModemSecureNotesRequest,
    requestDeserialize: deserialize_hiber_modem_UpdateModemSecureNotesRequest,
    responseSerialize: serialize_hiber_modem_UpdateModemSecureNotesRequest_Response,
    responseDeserialize: deserialize_hiber_modem_UpdateModemSecureNotesRequest_Response,
  },
  updatePeripherals: {
    path: '/hiber.modem.ModemService/UpdatePeripherals',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.UpdatePeripheralsRequest,
    responseType: modem_pb.UpdatePeripheralsRequest.Response,
    requestSerialize: serialize_hiber_modem_UpdatePeripheralsRequest,
    requestDeserialize: deserialize_hiber_modem_UpdatePeripheralsRequest,
    responseSerialize: serialize_hiber_modem_UpdatePeripheralsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_UpdatePeripheralsRequest_Response,
  },
  licenseKeys: {
    path: '/hiber.modem.ModemService/LicenseKeys',
    requestStream: false,
    responseStream: false,
    requestType: modem_pb.LicenseKeysRequest,
    responseType: modem_pb.LicenseKeysRequest.Response,
    requestSerialize: serialize_hiber_modem_LicenseKeysRequest,
    requestDeserialize: deserialize_hiber_modem_LicenseKeysRequest,
    responseSerialize: serialize_hiber_modem_LicenseKeysRequest_Response,
    responseDeserialize: deserialize_hiber_modem_LicenseKeysRequest_Response,
  },
};

exports.ModemServiceClient = grpc.makeGenericClientConstructor(ModemServiceService);
