/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var base_pb = require('./base_pb.js');
goog.object.extend(proto, base_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.hiber.organization.subscription.ServiceType', null, global);
/**
 * @enum {number}
 */
proto.hiber.organization.subscription.ServiceType = {
  ONCE_PER_DAY: 0,
  ONCE_PER_6_HOURS: 1,
  ONCE_PER_HOUR: 2
};

goog.object.extend(exports, proto.hiber.organization.subscription);
