// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var modem_message_body_parser_pb = require('./modem_message_body_parser_pb.js');
var base_pb = require('./base_pb.js');
var modem_pb = require('./modem_pb.js');

function serialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.AssignModemMessageBodyParserToModemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest(buffer_arg) {
  return modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest_Response(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.AssignModemMessageBodyParserToModemsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest_Response(buffer_arg) {
  return modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_CreateSimpleModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.CreateSimpleModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.CreateSimpleModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_CreateSimpleModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.CreateSimpleModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.DeleteModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest_Response(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.DeleteModemMessageBodyParserRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest_Response(buffer_arg) {
  return modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.ListAssignedParsersRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.ListAssignedParsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest(buffer_arg) {
  return modem_message_body_parser_pb.ListAssignedParsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest_Response(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.ListAssignedParsersRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.ListAssignedParsersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest_Response(buffer_arg) {
  return modem_message_body_parser_pb.ListAssignedParsersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.ListModemMessageBodyParsersRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.ListModemMessageBodyParsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest(buffer_arg) {
  return modem_message_body_parser_pb.ListModemMessageBodyParsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest_Response(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.ListModemMessageBodyParsersRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.ListModemMessageBodyParsersRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest_Response(buffer_arg) {
  return modem_message_body_parser_pb.ListModemMessageBodyParsersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.ModemMessageBodyParser)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.ModemMessageBodyParser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser(buffer_arg) {
  return modem_message_body_parser_pb.ModemMessageBodyParser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.RemoveModemMessageBodyParserFromModemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest(buffer_arg) {
  return modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest_Response(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.RemoveModemMessageBodyParserFromModemsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest_Response(buffer_arg) {
  return modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_RenameModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.RenameModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.RenameModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_RenameModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.RenameModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_UpdateSimpleModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.UpdateSimpleModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.UpdateSimpleModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_UpdateSimpleModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.UpdateSimpleModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_UpdateUploadedModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.UpdateUploadedModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.UpdateUploadedModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_UpdateUploadedModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.UpdateUploadedModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_message_bodyparser_UploadModemMessageBodyParserRequest(arg) {
  if (!(arg instanceof modem_message_body_parser_pb.UploadModemMessageBodyParserRequest)) {
    throw new Error('Expected argument of type hiber.modem.message.bodyparser.UploadModemMessageBodyParserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_modem_message_bodyparser_UploadModemMessageBodyParserRequest(buffer_arg) {
  return modem_message_body_parser_pb.UploadModemMessageBodyParserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ModemMessageBodyParserServiceService = exports.ModemMessageBodyParserServiceService = {
  list: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/List',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.ListModemMessageBodyParsersRequest,
    responseType: modem_message_body_parser_pb.ListModemMessageBodyParsersRequest.Response,
    requestSerialize: serialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest_Response,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ListModemMessageBodyParsersRequest_Response,
  },
  upload: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/Upload',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.UploadModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.ModemMessageBodyParser,
    requestSerialize: serialize_hiber_modem_message_bodyparser_UploadModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_UploadModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
  },
  updateUploaded: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/UpdateUploaded',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.UpdateUploadedModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.ModemMessageBodyParser,
    requestSerialize: serialize_hiber_modem_message_bodyparser_UpdateUploadedModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_UpdateUploadedModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
  },
  createSimple: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/CreateSimple',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.CreateSimpleModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.ModemMessageBodyParser,
    requestSerialize: serialize_hiber_modem_message_bodyparser_CreateSimpleModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_CreateSimpleModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
  },
  updateSimple: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/UpdateSimple',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.UpdateSimpleModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.ModemMessageBodyParser,
    requestSerialize: serialize_hiber_modem_message_bodyparser_UpdateSimpleModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_UpdateSimpleModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
  },
  rename: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.RenameModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.ModemMessageBodyParser,
    requestSerialize: serialize_hiber_modem_message_bodyparser_RenameModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_RenameModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ModemMessageBodyParser,
  },
  delete: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest,
    responseType: modem_message_body_parser_pb.DeleteModemMessageBodyParserRequest.Response,
    requestSerialize: serialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest_Response,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_DeleteModemMessageBodyParserRequest_Response,
  },
  listAssignedParsers: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/ListAssignedParsers',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.ListAssignedParsersRequest,
    responseType: modem_message_body_parser_pb.ListAssignedParsersRequest.Response,
    requestSerialize: serialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest_Response,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_ListAssignedParsersRequest_Response,
  },
  assignToModems: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/AssignToModems',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest,
    responseType: modem_message_body_parser_pb.AssignModemMessageBodyParserToModemsRequest.Response,
    requestSerialize: serialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_AssignModemMessageBodyParserToModemsRequest_Response,
  },
  removeFromModems: {
    path: '/hiber.modem.message.bodyparser.ModemMessageBodyParserService/RemoveFromModems',
    requestStream: false,
    responseStream: false,
    requestType: modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest,
    responseType: modem_message_body_parser_pb.RemoveModemMessageBodyParserFromModemsRequest.Response,
    requestSerialize: serialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest,
    requestDeserialize: deserialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest,
    responseSerialize: serialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_message_bodyparser_RemoveModemMessageBodyParserFromModemsRequest_Response,
  },
};

exports.ModemMessageBodyParserServiceClient = grpc.makeGenericClientConstructor(ModemMessageBodyParserServiceService);
