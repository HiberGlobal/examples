// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var integration_aws_iot_pb = require('./integration_aws_iot_pb.js');
var base_pb = require('./base_pb.js');
var certificate_pb = require('./certificate_pb.js');
var publisher_pb = require('./publisher_pb.js');

function serialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest(arg) {
  if (!(arg instanceof integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.AWSIoTIntegrationConfigurationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest(buffer_arg) {
  return integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest_Response(arg) {
  if (!(arg instanceof integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.AWSIoTIntegrationConfigurationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest_Response(buffer_arg) {
  return integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest(arg) {
  if (!(arg instanceof integration_aws_iot_pb.DisableAWSIoTIntegrationRequest)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.DisableAWSIoTIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest(buffer_arg) {
  return integration_aws_iot_pb.DisableAWSIoTIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest_Response(arg) {
  if (!(arg instanceof integration_aws_iot_pb.DisableAWSIoTIntegrationRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.DisableAWSIoTIntegrationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest_Response(buffer_arg) {
  return integration_aws_iot_pb.DisableAWSIoTIntegrationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest(arg) {
  if (!(arg instanceof integration_aws_iot_pb.EnableAWSIoTIntegrationRequest)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.EnableAWSIoTIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest(buffer_arg) {
  return integration_aws_iot_pb.EnableAWSIoTIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest_Response(arg) {
  if (!(arg instanceof integration_aws_iot_pb.EnableAWSIoTIntegrationRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.EnableAWSIoTIntegrationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest_Response(buffer_arg) {
  return integration_aws_iot_pb.EnableAWSIoTIntegrationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest(arg) {
  if (!(arg instanceof integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.InitializeAWSIoTIntegrationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest(buffer_arg) {
  return integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest_Response(arg) {
  if (!(arg instanceof integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.InitializeAWSIoTIntegrationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest_Response(buffer_arg) {
  return integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest(arg) {
  if (!(arg instanceof integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.UpdateAWSIoTIntegrationConfigurationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest(buffer_arg) {
  return integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest_Response(arg) {
  if (!(arg instanceof integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest.Response)) {
    throw new Error('Expected argument of type hiber.integration.awsiot.UpdateAWSIoTIntegrationConfigurationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest_Response(buffer_arg) {
  return integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var AWSIoTServiceService = exports.AWSIoTServiceService = {
  initialize: {
    path: '/hiber.integration.awsiot.AWSIoTService/Initialize',
    requestStream: false,
    responseStream: false,
    requestType: integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest,
    responseType: integration_aws_iot_pb.InitializeAWSIoTIntegrationRequest.Response,
    requestSerialize: serialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest,
    requestDeserialize: deserialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest,
    responseSerialize: serialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest_Response,
    responseDeserialize: deserialize_hiber_integration_awsiot_InitializeAWSIoTIntegrationRequest_Response,
  },
  configuration: {
    path: '/hiber.integration.awsiot.AWSIoTService/Configuration',
    requestStream: false,
    responseStream: false,
    requestType: integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest,
    responseType: integration_aws_iot_pb.AWSIoTIntegrationConfigurationRequest.Response,
    requestSerialize: serialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest,
    requestDeserialize: deserialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest,
    responseSerialize: serialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest_Response,
    responseDeserialize: deserialize_hiber_integration_awsiot_AWSIoTIntegrationConfigurationRequest_Response,
  },
  enable: {
    path: '/hiber.integration.awsiot.AWSIoTService/Enable',
    requestStream: false,
    responseStream: false,
    requestType: integration_aws_iot_pb.EnableAWSIoTIntegrationRequest,
    responseType: integration_aws_iot_pb.EnableAWSIoTIntegrationRequest.Response,
    requestSerialize: serialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest,
    requestDeserialize: deserialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest,
    responseSerialize: serialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest_Response,
    responseDeserialize: deserialize_hiber_integration_awsiot_EnableAWSIoTIntegrationRequest_Response,
  },
  disable: {
    path: '/hiber.integration.awsiot.AWSIoTService/Disable',
    requestStream: false,
    responseStream: false,
    requestType: integration_aws_iot_pb.DisableAWSIoTIntegrationRequest,
    responseType: integration_aws_iot_pb.DisableAWSIoTIntegrationRequest.Response,
    requestSerialize: serialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest,
    requestDeserialize: deserialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest,
    responseSerialize: serialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest_Response,
    responseDeserialize: deserialize_hiber_integration_awsiot_DisableAWSIoTIntegrationRequest_Response,
  },
  updateConfiguration: {
    path: '/hiber.integration.awsiot.AWSIoTService/UpdateConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest,
    responseType: integration_aws_iot_pb.UpdateAWSIoTIntegrationConfigurationRequest.Response,
    requestSerialize: serialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest,
    requestDeserialize: deserialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest,
    responseSerialize: serialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest_Response,
    responseDeserialize: deserialize_hiber_integration_awsiot_UpdateAWSIoTIntegrationConfigurationRequest_Response,
  },
};

exports.AWSIoTServiceClient = grpc.makeGenericClientConstructor(AWSIoTServiceService);
