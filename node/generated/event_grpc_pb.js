// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var event_pb = require('./event_pb.js');
var base_pb = require('./base_pb.js');
var modem_pb = require('./modem_pb.js');
var modem_transfer_pb = require('./modem_transfer_pb.js');
var modem_claim_pb = require('./modem_claim_pb.js');
var tag_pb = require('./tag_pb.js');
var user_pb = require('./user_pb.js');
var webhook_pb = require('./webhook_pb.js');

function serialize_hiber_event_Event(arg) {
  if (!(arg instanceof event_pb.Event)) {
    throw new Error('Expected argument of type hiber.event.Event');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_event_Event(buffer_arg) {
  return event_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_event_EventStreamRequest(arg) {
  if (!(arg instanceof event_pb.EventStreamRequest)) {
    throw new Error('Expected argument of type hiber.event.EventStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_event_EventStreamRequest(buffer_arg) {
  return event_pb.EventStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_event_ListEventsRequest(arg) {
  if (!(arg instanceof event_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type hiber.event.ListEventsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_event_ListEventsRequest(buffer_arg) {
  return event_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_event_ListEventsRequest_Response(arg) {
  if (!(arg instanceof event_pb.ListEventsRequest.Response)) {
    throw new Error('Expected argument of type hiber.event.ListEventsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_event_ListEventsRequest_Response(buffer_arg) {
  return event_pb.ListEventsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Events are used in a number of ways in the api. With this service you can
// search, list and stream them for your own purposes
var EventServiceService = exports.EventServiceService = {
  list: {
    path: '/hiber.event.EventService/List',
    requestStream: false,
    responseStream: false,
    requestType: event_pb.ListEventsRequest,
    responseType: event_pb.ListEventsRequest.Response,
    requestSerialize: serialize_hiber_event_ListEventsRequest,
    requestDeserialize: deserialize_hiber_event_ListEventsRequest,
    responseSerialize: serialize_hiber_event_ListEventsRequest_Response,
    responseDeserialize: deserialize_hiber_event_ListEventsRequest_Response,
  },
  stream: {
    path: '/hiber.event.EventService/Stream',
    requestStream: false,
    responseStream: true,
    requestType: event_pb.EventStreamRequest,
    responseType: event_pb.Event,
    requestSerialize: serialize_hiber_event_EventStreamRequest,
    requestDeserialize: deserialize_hiber_event_EventStreamRequest,
    responseSerialize: serialize_hiber_event_Event,
    responseDeserialize: deserialize_hiber_event_Event,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
