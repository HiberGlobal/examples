// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var certificate_pb = require('./certificate_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_certificate_DeleteCertificateRequest(arg) {
  if (!(arg instanceof certificate_pb.DeleteCertificateRequest)) {
    throw new Error('Expected argument of type hiber.certificate.DeleteCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_DeleteCertificateRequest(buffer_arg) {
  return certificate_pb.DeleteCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_DeleteCertificateRequest_Response(arg) {
  if (!(arg instanceof certificate_pb.DeleteCertificateRequest.Response)) {
    throw new Error('Expected argument of type hiber.certificate.DeleteCertificateRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_DeleteCertificateRequest_Response(buffer_arg) {
  return certificate_pb.DeleteCertificateRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_ListCertificatesRequest(arg) {
  if (!(arg instanceof certificate_pb.ListCertificatesRequest)) {
    throw new Error('Expected argument of type hiber.certificate.ListCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_ListCertificatesRequest(buffer_arg) {
  return certificate_pb.ListCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_ListCertificatesRequest_Response(arg) {
  if (!(arg instanceof certificate_pb.ListCertificatesRequest.Response)) {
    throw new Error('Expected argument of type hiber.certificate.ListCertificatesRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_ListCertificatesRequest_Response(buffer_arg) {
  return certificate_pb.ListCertificatesRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_RenameCertificateRequest(arg) {
  if (!(arg instanceof certificate_pb.RenameCertificateRequest)) {
    throw new Error('Expected argument of type hiber.certificate.RenameCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_RenameCertificateRequest(buffer_arg) {
  return certificate_pb.RenameCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_RenameCertificateRequest_Response(arg) {
  if (!(arg instanceof certificate_pb.RenameCertificateRequest.Response)) {
    throw new Error('Expected argument of type hiber.certificate.RenameCertificateRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_RenameCertificateRequest_Response(buffer_arg) {
  return certificate_pb.RenameCertificateRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_UploadCertificateRequest(arg) {
  if (!(arg instanceof certificate_pb.UploadCertificateRequest)) {
    throw new Error('Expected argument of type hiber.certificate.UploadCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_UploadCertificateRequest(buffer_arg) {
  return certificate_pb.UploadCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_certificate_UploadCertificateRequest_Response(arg) {
  if (!(arg instanceof certificate_pb.UploadCertificateRequest.Response)) {
    throw new Error('Expected argument of type hiber.certificate.UploadCertificateRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_certificate_UploadCertificateRequest_Response(buffer_arg) {
  return certificate_pb.UploadCertificateRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var CertificateServiceService = exports.CertificateServiceService = {
  list: {
    path: '/hiber.certificate.CertificateService/List',
    requestStream: false,
    responseStream: false,
    requestType: certificate_pb.ListCertificatesRequest,
    responseType: certificate_pb.ListCertificatesRequest.Response,
    requestSerialize: serialize_hiber_certificate_ListCertificatesRequest,
    requestDeserialize: deserialize_hiber_certificate_ListCertificatesRequest,
    responseSerialize: serialize_hiber_certificate_ListCertificatesRequest_Response,
    responseDeserialize: deserialize_hiber_certificate_ListCertificatesRequest_Response,
  },
  rename: {
    path: '/hiber.certificate.CertificateService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: certificate_pb.RenameCertificateRequest,
    responseType: certificate_pb.RenameCertificateRequest.Response,
    requestSerialize: serialize_hiber_certificate_RenameCertificateRequest,
    requestDeserialize: deserialize_hiber_certificate_RenameCertificateRequest,
    responseSerialize: serialize_hiber_certificate_RenameCertificateRequest_Response,
    responseDeserialize: deserialize_hiber_certificate_RenameCertificateRequest_Response,
  },
  upload: {
    path: '/hiber.certificate.CertificateService/Upload',
    requestStream: false,
    responseStream: false,
    requestType: certificate_pb.UploadCertificateRequest,
    responseType: certificate_pb.UploadCertificateRequest.Response,
    requestSerialize: serialize_hiber_certificate_UploadCertificateRequest,
    requestDeserialize: deserialize_hiber_certificate_UploadCertificateRequest,
    responseSerialize: serialize_hiber_certificate_UploadCertificateRequest_Response,
    responseDeserialize: deserialize_hiber_certificate_UploadCertificateRequest_Response,
  },
  delete: {
    path: '/hiber.certificate.CertificateService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: certificate_pb.DeleteCertificateRequest,
    responseType: certificate_pb.DeleteCertificateRequest.Response,
    requestSerialize: serialize_hiber_certificate_DeleteCertificateRequest,
    requestDeserialize: deserialize_hiber_certificate_DeleteCertificateRequest,
    responseSerialize: serialize_hiber_certificate_DeleteCertificateRequest_Response,
    responseDeserialize: deserialize_hiber_certificate_DeleteCertificateRequest_Response,
  },
};

exports.CertificateServiceClient = grpc.makeGenericClientConstructor(CertificateServiceService);
