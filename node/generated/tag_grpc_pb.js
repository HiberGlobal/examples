// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tag_pb = require('./tag_pb.js');
var base_pb = require('./base_pb.js');

function serialize_hiber_tag_CreateTagRequest(arg) {
  if (!(arg instanceof tag_pb.CreateTagRequest)) {
    throw new Error('Expected argument of type hiber.tag.CreateTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_CreateTagRequest(buffer_arg) {
  return tag_pb.CreateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_DeleteTagRequest(arg) {
  if (!(arg instanceof tag_pb.DeleteTagRequest)) {
    throw new Error('Expected argument of type hiber.tag.DeleteTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_DeleteTagRequest(buffer_arg) {
  return tag_pb.DeleteTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_DeleteTagRequest_Response(arg) {
  if (!(arg instanceof tag_pb.DeleteTagRequest.Response)) {
    throw new Error('Expected argument of type hiber.tag.DeleteTagRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_DeleteTagRequest_Response(buffer_arg) {
  return tag_pb.DeleteTagRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_ListTagsRequest(arg) {
  if (!(arg instanceof tag_pb.ListTagsRequest)) {
    throw new Error('Expected argument of type hiber.tag.ListTagsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_ListTagsRequest(buffer_arg) {
  return tag_pb.ListTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_ListTagsRequest_Response(arg) {
  if (!(arg instanceof tag_pb.ListTagsRequest.Response)) {
    throw new Error('Expected argument of type hiber.tag.ListTagsRequest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_ListTagsRequest_Response(buffer_arg) {
  return tag_pb.ListTagsRequest.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_Tag(arg) {
  if (!(arg instanceof tag_pb.Tag)) {
    throw new Error('Expected argument of type hiber.tag.Tag');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_Tag(buffer_arg) {
  return tag_pb.Tag.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hiber_tag_UpdateTagRequest(arg) {
  if (!(arg instanceof tag_pb.UpdateTagRequest)) {
    throw new Error('Expected argument of type hiber.tag.UpdateTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hiber_tag_UpdateTagRequest(buffer_arg) {
  return tag_pb.UpdateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Tag management api calls. You can already get tags for objects when you get their data, and even create new tags
// when updating them, so these calls are meant for easier tag management if you need it.
var TagServiceService = exports.TagServiceService = {
  list: {
    path: '/hiber.tag.TagService/List',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.ListTagsRequest,
    responseType: tag_pb.ListTagsRequest.Response,
    requestSerialize: serialize_hiber_tag_ListTagsRequest,
    requestDeserialize: deserialize_hiber_tag_ListTagsRequest,
    responseSerialize: serialize_hiber_tag_ListTagsRequest_Response,
    responseDeserialize: deserialize_hiber_tag_ListTagsRequest_Response,
  },
  create: {
    path: '/hiber.tag.TagService/Create',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.CreateTagRequest,
    responseType: tag_pb.Tag,
    requestSerialize: serialize_hiber_tag_CreateTagRequest,
    requestDeserialize: deserialize_hiber_tag_CreateTagRequest,
    responseSerialize: serialize_hiber_tag_Tag,
    responseDeserialize: deserialize_hiber_tag_Tag,
  },
  update: {
    path: '/hiber.tag.TagService/Update',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.UpdateTagRequest,
    responseType: tag_pb.Tag,
    requestSerialize: serialize_hiber_tag_UpdateTagRequest,
    requestDeserialize: deserialize_hiber_tag_UpdateTagRequest,
    responseSerialize: serialize_hiber_tag_Tag,
    responseDeserialize: deserialize_hiber_tag_Tag,
  },
  delete: {
    path: '/hiber.tag.TagService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: tag_pb.DeleteTagRequest,
    responseType: tag_pb.DeleteTagRequest.Response,
    requestSerialize: serialize_hiber_tag_DeleteTagRequest,
    requestDeserialize: deserialize_hiber_tag_DeleteTagRequest,
    responseSerialize: serialize_hiber_tag_DeleteTagRequest_Response,
    responseDeserialize: deserialize_hiber_tag_DeleteTagRequest_Response,
  },
};

exports.TagServiceClient = grpc.makeGenericClientConstructor(TagServiceService);
