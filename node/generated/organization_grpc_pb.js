// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var organization_pb = require('./organization_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_organization_CreateOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type hiber.organization.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_CreateOrganizationRequest(buffer_arg) {
  return organization_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_DeleteOrganizationConfirmationRequest(arg) {
  if (!(arg instanceof organization_pb.DeleteOrganizationConfirmationRequest)) {
    throw new Error('Expected argument of type hiber.organization.DeleteOrganizationConfirmationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_DeleteOrganizationConfirmationRequest(buffer_arg) {
  return organization_pb.DeleteOrganizationConfirmationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_DeleteOrganizationConfirmationRequest_Response(arg) {
  if (!(arg instanceof organization_pb.DeleteOrganizationConfirmationRequest.Response)) {
    throw new Error('Expected argument of type hiber.organization.DeleteOrganizationConfirmationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_DeleteOrganizationConfirmationRequest_Response(buffer_arg) {
  return organization_pb.DeleteOrganizationConfirmationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type hiber.organization.DeleteOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_DeleteOrganizationRequest(buffer_arg) {
  return organization_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_DeleteOrganizationRequest_Response(arg) {
  if (!(arg instanceof organization_pb.DeleteOrganizationRequest.Response)) {
    throw new Error('Expected argument of type hiber.organization.DeleteOrganizationRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_DeleteOrganizationRequest_Response(buffer_arg) {
  return organization_pb.DeleteOrganizationRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_GetOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type hiber.organization.GetOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_GetOrganizationRequest(buffer_arg) {
  return organization_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_ListChildOrganizationsRequest(arg) {
  if (!(arg instanceof organization_pb.ListChildOrganizationsRequest)) {
    throw new Error('Expected argument of type hiber.organization.ListChildOrganizationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_ListChildOrganizationsRequest(buffer_arg) {
  return organization_pb.ListChildOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_ListChildOrganizationsRequest_Response(arg) {
  if (!(arg instanceof organization_pb.ListChildOrganizationsRequest.Response)) {
    throw new Error('Expected argument of type hiber.organization.ListChildOrganizationsRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_ListChildOrganizationsRequest_Response(buffer_arg) {
  return organization_pb.ListChildOrganizationsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_Organization(arg) {
  if (!(arg instanceof organization_pb.Organization)) {
    throw new Error('Expected argument of type hiber.organization.Organization');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_Organization(buffer_arg) {
  return organization_pb.Organization.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_OrganizationTreeRequest(arg) {
  if (!(arg instanceof organization_pb.OrganizationTreeRequest)) {
    throw new Error('Expected argument of type hiber.organization.OrganizationTreeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_OrganizationTreeRequest(buffer_arg) {
  return organization_pb.OrganizationTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_OrganizationTreeRequest_Response(arg) {
  if (!(arg instanceof organization_pb.OrganizationTreeRequest.Response)) {
    throw new Error('Expected argument of type hiber.organization.OrganizationTreeRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_OrganizationTreeRequest_Response(buffer_arg) {
  return organization_pb.OrganizationTreeRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof organization_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type hiber.organization.UpdateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_UpdateOrganizationRequest(buffer_arg) {
  return organization_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_ValidateOrganizationCreationTokenRequest(arg) {
  if (!(arg instanceof organization_pb.ValidateOrganizationCreationTokenRequest)) {
    throw new Error('Expected argument of type hiber.organization.ValidateOrganizationCreationTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_ValidateOrganizationCreationTokenRequest(buffer_arg) {
  return organization_pb.ValidateOrganizationCreationTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_organization_ValidateOrganizationCreationTokenRequest_Response(arg) {
  if (!(arg instanceof organization_pb.ValidateOrganizationCreationTokenRequest.Response)) {
    throw new Error('Expected argument of type hiber.organization.ValidateOrganizationCreationTokenRequest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_hiber_organization_ValidateOrganizationCreationTokenRequest_Response(buffer_arg) {
  return organization_pb.ValidateOrganizationCreationTokenRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// Organization-related api calls. Currently limited to your own organization; we'll add more for creating and managing
// sub-organizations later.
var OrganizationServiceService = exports.OrganizationServiceService = {
  create: {
    path: '/hiber.organization.OrganizationService/Create',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.CreateOrganizationRequest,
    responseType: organization_pb.Organization,
    requestSerialize: serialize_hiber_organization_CreateOrganizationRequest,
    requestDeserialize: deserialize_hiber_organization_CreateOrganizationRequest,
    responseSerialize: serialize_hiber_organization_Organization,
    responseDeserialize: deserialize_hiber_organization_Organization,
  },
  get: {
    path: '/hiber.organization.OrganizationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.GetOrganizationRequest,
    responseType: organization_pb.Organization,
    requestSerialize: serialize_hiber_organization_GetOrganizationRequest,
    requestDeserialize: deserialize_hiber_organization_GetOrganizationRequest,
    responseSerialize: serialize_hiber_organization_Organization,
    responseDeserialize: deserialize_hiber_organization_Organization,
  },
  update: {
    path: '/hiber.organization.OrganizationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.UpdateOrganizationRequest,
    responseType: organization_pb.Organization,
    requestSerialize: serialize_hiber_organization_UpdateOrganizationRequest,
    requestDeserialize: deserialize_hiber_organization_UpdateOrganizationRequest,
    responseSerialize: serialize_hiber_organization_Organization,
    responseDeserialize: deserialize_hiber_organization_Organization,
  },
  delete: {
    path: '/hiber.organization.OrganizationService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.DeleteOrganizationRequest,
    responseType: organization_pb.DeleteOrganizationRequest.Response,
    requestSerialize: serialize_hiber_organization_DeleteOrganizationRequest,
    requestDeserialize: deserialize_hiber_organization_DeleteOrganizationRequest,
    responseSerialize: serialize_hiber_organization_DeleteOrganizationRequest_Response,
    responseDeserialize: deserialize_hiber_organization_DeleteOrganizationRequest_Response,
  },
  deleteConfirmation: {
    path: '/hiber.organization.OrganizationService/DeleteConfirmation',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.DeleteOrganizationConfirmationRequest,
    responseType: organization_pb.DeleteOrganizationConfirmationRequest.Response,
    requestSerialize: serialize_hiber_organization_DeleteOrganizationConfirmationRequest,
    requestDeserialize: deserialize_hiber_organization_DeleteOrganizationConfirmationRequest,
    responseSerialize: serialize_hiber_organization_DeleteOrganizationConfirmationRequest_Response,
    responseDeserialize: deserialize_hiber_organization_DeleteOrganizationConfirmationRequest_Response,
  },
  tree: {
    path: '/hiber.organization.OrganizationService/Tree',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.OrganizationTreeRequest,
    responseType: organization_pb.OrganizationTreeRequest.Response,
    requestSerialize: serialize_hiber_organization_OrganizationTreeRequest,
    requestDeserialize: deserialize_hiber_organization_OrganizationTreeRequest,
    responseSerialize: serialize_hiber_organization_OrganizationTreeRequest_Response,
    responseDeserialize: deserialize_hiber_organization_OrganizationTreeRequest_Response,
  },
  listChildOrganizations: {
    path: '/hiber.organization.OrganizationService/ListChildOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.ListChildOrganizationsRequest,
    responseType: organization_pb.ListChildOrganizationsRequest.Response,
    requestSerialize: serialize_hiber_organization_ListChildOrganizationsRequest,
    requestDeserialize: deserialize_hiber_organization_ListChildOrganizationsRequest,
    responseSerialize: serialize_hiber_organization_ListChildOrganizationsRequest_Response,
    responseDeserialize: deserialize_hiber_organization_ListChildOrganizationsRequest_Response,
  },
  validateCreationToken: {
    path: '/hiber.organization.OrganizationService/ValidateCreationToken',
    requestStream: false,
    responseStream: false,
    requestType: organization_pb.ValidateOrganizationCreationTokenRequest,
    responseType: organization_pb.ValidateOrganizationCreationTokenRequest.Response,
    requestSerialize: serialize_hiber_organization_ValidateOrganizationCreationTokenRequest,
    requestDeserialize: deserialize_hiber_organization_ValidateOrganizationCreationTokenRequest,
    responseSerialize: serialize_hiber_organization_ValidateOrganizationCreationTokenRequest_Response,
    responseDeserialize: deserialize_hiber_organization_ValidateOrganizationCreationTokenRequest_Response,
  },
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService);
