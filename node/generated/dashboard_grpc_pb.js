// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dashboard_pb = require('./dashboard_pb.js');
var map_pb = require('./map_pb.js');
var modem_pb = require('./modem_pb.js');
var event_pb = require('./event_pb.js');

function serialize_hiber_dashboard_DashboardRequest(arg) {
  if (!(arg instanceof dashboard_pb.DashboardRequest)) {
    throw new Error('Expected argument of type hiber.dashboard.DashboardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_dashboard_DashboardRequest(buffer_arg) {
  return dashboard_pb.DashboardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_dashboard_DashboardRequest_Response(arg) {
  if (!(arg instanceof dashboard_pb.DashboardRequest.Response)) {
    throw new Error('Expected argument of type hiber.dashboard.DashboardRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_dashboard_DashboardRequest_Response(buffer_arg) {
  return dashboard_pb.DashboardRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Dashboard calls related to the Hiber Mission Control Dashboard
var DashboardServiceService = exports.DashboardServiceService = {
  dashboard: {
    path: '/hiber.dashboard.DashboardService/Dashboard',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_pb.DashboardRequest,
    responseType: dashboard_pb.DashboardRequest.Response,
    requestSerialize: serialize_hiber_dashboard_DashboardRequest,
    requestDeserialize: deserialize_hiber_dashboard_DashboardRequest,
    responseSerialize: serialize_hiber_dashboard_DashboardRequest_Response,
    responseDeserialize: deserialize_hiber_dashboard_DashboardRequest_Response,
  },
};

exports.DashboardServiceClient = grpc.makeGenericClientConstructor(DashboardServiceService);
