// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var modem_transfer_pb = require('./modem_transfer_pb.js');
var base_pb = require('./base_pb.js');
var organization_pb = require('./organization_pb.js');
var modem_pb = require('./modem_pb.js');
var tag_pb = require('./tag_pb.js');

function serialize_hiber_modem_CancelModemTransferRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.CancelModemTransferRequest)) {
    throw new Error('Expected argument of type hiber.modem.CancelModemTransferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_CancelModemTransferRequest(buffer_arg) {
  return modem_transfer_pb.CancelModemTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_CancelModemTransferRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.CancelModemTransferRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.CancelModemTransferRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_CancelModemTransferRequest_Response(buffer_arg) {
  return modem_transfer_pb.CancelModemTransferRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_DeleteModemTransferReturnLinesRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.DeleteModemTransferReturnLinesRequest)) {
    throw new Error('Expected argument of type hiber.modem.DeleteModemTransferReturnLinesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_DeleteModemTransferReturnLinesRequest(buffer_arg) {
  return modem_transfer_pb.DeleteModemTransferReturnLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_DeleteModemTransferReturnLinesRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.DeleteModemTransferReturnLinesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.DeleteModemTransferReturnLinesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_DeleteModemTransferReturnLinesRequest_Response(buffer_arg) {
  return modem_transfer_pb.DeleteModemTransferReturnLinesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemTransferReturnLinesRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.ListModemTransferReturnLinesRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemTransferReturnLinesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemTransferReturnLinesRequest(buffer_arg) {
  return modem_transfer_pb.ListModemTransferReturnLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemTransferReturnLinesRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.ListModemTransferReturnLinesRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemTransferReturnLinesRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemTransferReturnLinesRequest_Response(buffer_arg) {
  return modem_transfer_pb.ListModemTransferReturnLinesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemTransfersRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.ListModemTransfersRequest)) {
    throw new Error('Expected argument of type hiber.modem.ListModemTransfersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemTransfersRequest(buffer_arg) {
  return modem_transfer_pb.ListModemTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ListModemTransfersRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.ListModemTransfersRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ListModemTransfersRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ListModemTransfersRequest_Response(buffer_arg) {
  return modem_transfer_pb.ListModemTransfersRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_NotReceivedModemTransferRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.NotReceivedModemTransferRequest)) {
    throw new Error('Expected argument of type hiber.modem.NotReceivedModemTransferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_NotReceivedModemTransferRequest(buffer_arg) {
  return modem_transfer_pb.NotReceivedModemTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_NotReceivedModemTransferRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.NotReceivedModemTransferRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.NotReceivedModemTransferRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_NotReceivedModemTransferRequest_Response(buffer_arg) {
  return modem_transfer_pb.NotReceivedModemTransferRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_PrepareModemForReturnRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.PrepareModemForReturnRequest)) {
    throw new Error('Expected argument of type hiber.modem.PrepareModemForReturnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_PrepareModemForReturnRequest(buffer_arg) {
  return modem_transfer_pb.PrepareModemForReturnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_PrepareModemForReturnRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.PrepareModemForReturnRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.PrepareModemForReturnRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_PrepareModemForReturnRequest_Response(buffer_arg) {
  return modem_transfer_pb.PrepareModemForReturnRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ReceivedModemTransferRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.ReceivedModemTransferRequest)) {
    throw new Error('Expected argument of type hiber.modem.ReceivedModemTransferRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ReceivedModemTransferRequest(buffer_arg) {
  return modem_transfer_pb.ReceivedModemTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_ReceivedModemTransferRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.ReceivedModemTransferRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.ReceivedModemTransferRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_ReceivedModemTransferRequest_Response(buffer_arg) {
  return modem_transfer_pb.ReceivedModemTransferRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_SendReturnRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.SendReturnRequest)) {
    throw new Error('Expected argument of type hiber.modem.SendReturnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_SendReturnRequest(buffer_arg) {
  return modem_transfer_pb.SendReturnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_SendReturnRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.SendReturnRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.SendReturnRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_SendReturnRequest_Response(buffer_arg) {
  return modem_transfer_pb.SendReturnRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_TransferModemsRequest(arg) {
  if (!(arg instanceof modem_transfer_pb.TransferModemsRequest)) {
    throw new Error('Expected argument of type hiber.modem.TransferModemsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_TransferModemsRequest(buffer_arg) {
  return modem_transfer_pb.TransferModemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_modem_TransferModemsRequest_Response(arg) {
  if (!(arg instanceof modem_transfer_pb.TransferModemsRequest.Response)) {
    throw new Error('Expected argument of type hiber.modem.TransferModemsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_modem_TransferModemsRequest_Response(buffer_arg) {
  return modem_transfer_pb.TransferModemsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Tracking services for transferring modems between parties.
// Modems can be transferred between organizations for any number of reason, ranging from actually shipping to a different
// company to handing them over to a third party for installation.
var ModemTransferServiceService = exports.ModemTransferServiceService = {
  // Transfer modems to a different organization.
  // As a result, the modem will get the outbound status for you, and the inbound status for the recipient.
  // Note: this call can automatically generate a child organization for the recipient if it has no organization.
  transfer: {
    path: '/hiber.modem.ModemTransferService/Transfer',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.TransferModemsRequest,
    responseType: modem_transfer_pb.TransferModemsRequest.Response,
    requestSerialize: serialize_hiber_modem_TransferModemsRequest,
    requestDeserialize: deserialize_hiber_modem_TransferModemsRequest,
    responseSerialize: serialize_hiber_modem_TransferModemsRequest_Response,
    responseDeserialize: deserialize_hiber_modem_TransferModemsRequest_Response,
  },
  // List transfers for modems. This could be used to list all active transfers on a selection of modems,
  // or, for example, to list this history of all transfers for one modem.
  list: {
    path: '/hiber.modem.ModemTransferService/List',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.ListModemTransfersRequest,
    responseType: modem_transfer_pb.ListModemTransfersRequest.Response,
    requestSerialize: serialize_hiber_modem_ListModemTransfersRequest,
    requestDeserialize: deserialize_hiber_modem_ListModemTransfersRequest,
    responseSerialize: serialize_hiber_modem_ListModemTransfersRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ListModemTransfersRequest_Response,
  },
  // Cancel a started transfer.
  cancel: {
    path: '/hiber.modem.ModemTransferService/Cancel',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.CancelModemTransferRequest,
    responseType: modem_transfer_pb.CancelModemTransferRequest.Response,
    requestSerialize: serialize_hiber_modem_CancelModemTransferRequest,
    requestDeserialize: deserialize_hiber_modem_CancelModemTransferRequest,
    responseSerialize: serialize_hiber_modem_CancelModemTransferRequest_Response,
    responseDeserialize: deserialize_hiber_modem_CancelModemTransferRequest_Response,
  },
  // Mark inbound modems as received, adding them to your organization.
  received: {
    path: '/hiber.modem.ModemTransferService/Received',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.ReceivedModemTransferRequest,
    responseType: modem_transfer_pb.ReceivedModemTransferRequest.Response,
    requestSerialize: serialize_hiber_modem_ReceivedModemTransferRequest,
    requestDeserialize: deserialize_hiber_modem_ReceivedModemTransferRequest,
    responseSerialize: serialize_hiber_modem_ReceivedModemTransferRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ReceivedModemTransferRequest_Response,
  },
  // Mark modems as not received when they were inbound but did not show up.
  // If you do receive the modems after marking them as not received, you can claim them to still get them in
  // your organization.
  notReceived: {
    path: '/hiber.modem.ModemTransferService/NotReceived',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.NotReceivedModemTransferRequest,
    responseType: modem_transfer_pb.NotReceivedModemTransferRequest.Response,
    requestSerialize: serialize_hiber_modem_NotReceivedModemTransferRequest,
    requestDeserialize: deserialize_hiber_modem_NotReceivedModemTransferRequest,
    responseSerialize: serialize_hiber_modem_NotReceivedModemTransferRequest_Response,
    responseDeserialize: deserialize_hiber_modem_NotReceivedModemTransferRequest_Response,
  },
};

exports.ModemTransferServiceClient = grpc.makeGenericClientConstructor(ModemTransferServiceService);
var ModemTransferReturnServiceService = exports.ModemTransferReturnServiceService = {
  // If any problems are detected with the modems within the return period, mark them using this method.
  // Modems marked using this method can be returned in one transfer, as long as they are returned to the same
  // organization.
  prepare: {
    path: '/hiber.modem.ModemTransferReturnService/Prepare',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.PrepareModemForReturnRequest,
    responseType: modem_transfer_pb.PrepareModemForReturnRequest.Response,
    requestSerialize: serialize_hiber_modem_PrepareModemForReturnRequest,
    requestDeserialize: deserialize_hiber_modem_PrepareModemForReturnRequest,
    responseSerialize: serialize_hiber_modem_PrepareModemForReturnRequest_Response,
    responseDeserialize: deserialize_hiber_modem_PrepareModemForReturnRequest_Response,
  },
  // List the return lines, either for a return transfer, or lines that have not been
  // returned with a return transfer yet.
  lines: {
    path: '/hiber.modem.ModemTransferReturnService/Lines',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.ListModemTransferReturnLinesRequest,
    responseType: modem_transfer_pb.ListModemTransferReturnLinesRequest.Response,
    requestSerialize: serialize_hiber_modem_ListModemTransferReturnLinesRequest,
    requestDeserialize: deserialize_hiber_modem_ListModemTransferReturnLinesRequest,
    responseSerialize: serialize_hiber_modem_ListModemTransferReturnLinesRequest_Response,
    responseDeserialize: deserialize_hiber_modem_ListModemTransferReturnLinesRequest_Response,
  },
  deleteLine: {
    path: '/hiber.modem.ModemTransferReturnService/DeleteLine',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.DeleteModemTransferReturnLinesRequest,
    responseType: modem_transfer_pb.DeleteModemTransferReturnLinesRequest.Response,
    requestSerialize: serialize_hiber_modem_DeleteModemTransferReturnLinesRequest,
    requestDeserialize: deserialize_hiber_modem_DeleteModemTransferReturnLinesRequest,
    responseSerialize: serialize_hiber_modem_DeleteModemTransferReturnLinesRequest_Response,
    responseDeserialize: deserialize_hiber_modem_DeleteModemTransferReturnLinesRequest_Response,
  },
  // Transfer modems marked for return back to the sender.
  send: {
    path: '/hiber.modem.ModemTransferReturnService/Send',
    requestStream: false,
    responseStream: false,
    requestType: modem_transfer_pb.SendReturnRequest,
    responseType: modem_transfer_pb.SendReturnRequest.Response,
    requestSerialize: serialize_hiber_modem_SendReturnRequest,
    requestDeserialize: deserialize_hiber_modem_SendReturnRequest,
    responseSerialize: serialize_hiber_modem_SendReturnRequest_Response,
    responseDeserialize: deserialize_hiber_modem_SendReturnRequest_Response,
  },
};

exports.ModemTransferReturnServiceClient = grpc.makeGenericClientConstructor(ModemTransferReturnServiceService);
