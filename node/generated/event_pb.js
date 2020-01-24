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
var integration_aws_iot_pb = require('./integration_aws_iot_pb.js');
goog.object.extend(proto, integration_aws_iot_pb);
var integration_mqtt_pb = require('./integration_mqtt_pb.js');
goog.object.extend(proto, integration_mqtt_pb);
var modem_pb = require('./modem_pb.js');
goog.object.extend(proto, modem_pb);
var modem_transfer_pb = require('./modem_transfer_pb.js');
goog.object.extend(proto, modem_transfer_pb);
var modem_claim_pb = require('./modem_claim_pb.js');
goog.object.extend(proto, modem_claim_pb);
var organization_pb = require('./organization_pb.js');
goog.object.extend(proto, organization_pb);
var publisher_pb = require('./publisher_pb.js');
goog.object.extend(proto, publisher_pb);
var tag_pb = require('./tag_pb.js');
goog.object.extend(proto, tag_pb);
var token_pb = require('./token_pb.js');
goog.object.extend(proto, token_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var webhook_pb = require('./webhook_pb.js');
goog.object.extend(proto, webhook_pb);
goog.exportSymbol('proto.hiber.event.BundledEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ClaimEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.MessageEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ModemActivatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ModemStaleEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.OrganizationEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.CreatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.DeletedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.FailedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.UpdatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate', null, global);
goog.exportSymbol('proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate', null, global);
goog.exportSymbol('proto.hiber.event.Event.TokenEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.TokenEvent.TokenCreatedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.TokenEvent.TokenDeletedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.TokenEvent.TokenExpiredEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.UserEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.UserEvent.UserAccessRequestEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.UserEvent.UserAddedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.UserEvent.UserInvitedEvent', null, global);
goog.exportSymbol('proto.hiber.event.Event.UserEvent.UserRemovedEvent', null, global);
goog.exportSymbol('proto.hiber.event.EventSelection', null, global);
goog.exportSymbol('proto.hiber.event.EventStreamRequest', null, global);
goog.exportSymbol('proto.hiber.event.ListEventsRequest', null, global);
goog.exportSymbol('proto.hiber.event.ListEventsRequest.Response', null, global);
goog.exportSymbol('proto.hiber.event.ListEventsRequest.Response.EventTypeResponse', null, global);
goog.exportSymbol('proto.hiber.event.ListEventsRequest.Sort', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.hiber.event.Event.oneofGroups_);
};
goog.inherits(proto.hiber.event.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.displayName = 'proto.hiber.event.Event';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.hiber.event.Event.oneofGroups_ = [[39,2,36,3,4,5,6,7,8,9,41,10,15,16,17,18,19,20,23,24,30,35,37,25,38,31,32,33,40,34]];

/**
 * @enum {number}
 */
proto.hiber.event.Event.EventCase = {
  EVENT_NOT_SET: 0,
  MODEM_UPDATED: 39,
  MODEM_LOCATION_UPDATED: 2,
  MODEM_ACTIVATED: 36,
  MODEM_STALE: 3,
  MODEM_MESSAGE_RECEIVED: 4,
  MODEM_MESSAGE_DROPPED: 5,
  MODEM_MESSAGE_DELAYED: 6,
  MODEM_MESSAGE_CANNOT_BE_PARSED: 7,
  USER_ADDED: 8,
  USER_REMOVED: 9,
  USER_INVITED: 41,
  USER_ACCESS_REQUEST: 10,
  MODEM_TRANSFER_STARTED: 15,
  MODEM_TRANSFER_CANCELLED: 16,
  MODEM_TRANSFER_RECEIVED: 17,
  MODEM_TRANSFER_NOT_RECEIVED: 18,
  MODEM_TRANSFER_RETURN_TRANSFER_STARTED: 19,
  MODEM_CLAIMED_EVENT: 20,
  TOKEN_EXPIRY_WARNING: 23,
  TOKEN_EXPIRED: 24,
  TOKEN_CREATED: 30,
  TOKEN_DELETED: 35,
  ORGANIZATION_CREATED: 37,
  ORGANIZATION_UPDATED: 25,
  ORGANIZATION_DELETED: 38,
  PUBLISHER_CREATED: 31,
  PUBLISHER_UPDATED: 32,
  PUBLISHER_DELETED: 33,
  PUBLISHER_AUTO_DISABLED: 40,
  PUBLISHER_FAILED: 34
};

/**
 * @return {proto.hiber.event.Event.EventCase}
 */
proto.hiber.event.Event.prototype.getEventCase = function() {
  return /** @type {proto.hiber.event.Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.hiber.event.Event.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    isError: jspb.Message.getFieldWithDefault(msg, 1, false),
    modemUpdated: (f = msg.getModemUpdated()) && proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.toObject(includeInstance, f),
    modemLocationUpdated: (f = msg.getModemLocationUpdated()) && proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.toObject(includeInstance, f),
    modemActivated: (f = msg.getModemActivated()) && proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.toObject(includeInstance, f),
    modemStale: (f = msg.getModemStale()) && proto.hiber.event.Event.ModemEvent.ModemStaleEvent.toObject(includeInstance, f),
    modemMessageReceived: (f = msg.getModemMessageReceived()) && proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.toObject(includeInstance, f),
    modemMessageDropped: (f = msg.getModemMessageDropped()) && proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.toObject(includeInstance, f),
    modemMessageDelayed: (f = msg.getModemMessageDelayed()) && proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.toObject(includeInstance, f),
    modemMessageCannotBeParsed: (f = msg.getModemMessageCannotBeParsed()) && proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.toObject(includeInstance, f),
    userAdded: (f = msg.getUserAdded()) && proto.hiber.event.Event.UserEvent.UserAddedEvent.toObject(includeInstance, f),
    userRemoved: (f = msg.getUserRemoved()) && proto.hiber.event.Event.UserEvent.UserRemovedEvent.toObject(includeInstance, f),
    userInvited: (f = msg.getUserInvited()) && proto.hiber.event.Event.UserEvent.UserInvitedEvent.toObject(includeInstance, f),
    userAccessRequest: (f = msg.getUserAccessRequest()) && proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.toObject(includeInstance, f),
    modemTransferStarted: (f = msg.getModemTransferStarted()) && proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.toObject(includeInstance, f),
    modemTransferCancelled: (f = msg.getModemTransferCancelled()) && proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.toObject(includeInstance, f),
    modemTransferReceived: (f = msg.getModemTransferReceived()) && proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.toObject(includeInstance, f),
    modemTransferNotReceived: (f = msg.getModemTransferNotReceived()) && proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.toObject(includeInstance, f),
    modemTransferReturnTransferStarted: (f = msg.getModemTransferReturnTransferStarted()) && proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.toObject(includeInstance, f),
    modemClaimedEvent: (f = msg.getModemClaimedEvent()) && proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.toObject(includeInstance, f),
    tokenExpiryWarning: (f = msg.getTokenExpiryWarning()) && proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.toObject(includeInstance, f),
    tokenExpired: (f = msg.getTokenExpired()) && proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.toObject(includeInstance, f),
    tokenCreated: (f = msg.getTokenCreated()) && proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.toObject(includeInstance, f),
    tokenDeleted: (f = msg.getTokenDeleted()) && proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.toObject(includeInstance, f),
    organizationCreated: (f = msg.getOrganizationCreated()) && proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.toObject(includeInstance, f),
    organizationUpdated: (f = msg.getOrganizationUpdated()) && proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.toObject(includeInstance, f),
    organizationDeleted: (f = msg.getOrganizationDeleted()) && proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.toObject(includeInstance, f),
    publisherCreated: (f = msg.getPublisherCreated()) && proto.hiber.event.Event.PublisherEvent.CreatedEvent.toObject(includeInstance, f),
    publisherUpdated: (f = msg.getPublisherUpdated()) && proto.hiber.event.Event.PublisherEvent.UpdatedEvent.toObject(includeInstance, f),
    publisherDeleted: (f = msg.getPublisherDeleted()) && proto.hiber.event.Event.PublisherEvent.DeletedEvent.toObject(includeInstance, f),
    publisherAutoDisabled: (f = msg.getPublisherAutoDisabled()) && proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.toObject(includeInstance, f),
    publisherFailed: (f = msg.getPublisherFailed()) && proto.hiber.event.Event.PublisherEvent.FailedEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event}
 */
proto.hiber.event.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event;
  return proto.hiber.event.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event}
 */
proto.hiber.event.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsError(value);
      break;
    case 39:
      var value = new proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.deserializeBinaryFromReader);
      msg.setModemUpdated(value);
      break;
    case 2:
      var value = new proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.deserializeBinaryFromReader);
      msg.setModemLocationUpdated(value);
      break;
    case 36:
      var value = new proto.hiber.event.Event.ModemEvent.ModemActivatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.deserializeBinaryFromReader);
      msg.setModemActivated(value);
      break;
    case 3:
      var value = new proto.hiber.event.Event.ModemEvent.ModemStaleEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.ModemStaleEvent.deserializeBinaryFromReader);
      msg.setModemStale(value);
      break;
    case 4:
      var value = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.deserializeBinaryFromReader);
      msg.setModemMessageReceived(value);
      break;
    case 5:
      var value = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.deserializeBinaryFromReader);
      msg.setModemMessageDropped(value);
      break;
    case 6:
      var value = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.deserializeBinaryFromReader);
      msg.setModemMessageDelayed(value);
      break;
    case 7:
      var value = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.deserializeBinaryFromReader);
      msg.setModemMessageCannotBeParsed(value);
      break;
    case 8:
      var value = new proto.hiber.event.Event.UserEvent.UserAddedEvent;
      reader.readMessage(value,proto.hiber.event.Event.UserEvent.UserAddedEvent.deserializeBinaryFromReader);
      msg.setUserAdded(value);
      break;
    case 9:
      var value = new proto.hiber.event.Event.UserEvent.UserRemovedEvent;
      reader.readMessage(value,proto.hiber.event.Event.UserEvent.UserRemovedEvent.deserializeBinaryFromReader);
      msg.setUserRemoved(value);
      break;
    case 41:
      var value = new proto.hiber.event.Event.UserEvent.UserInvitedEvent;
      reader.readMessage(value,proto.hiber.event.Event.UserEvent.UserInvitedEvent.deserializeBinaryFromReader);
      msg.setUserInvited(value);
      break;
    case 10:
      var value = new proto.hiber.event.Event.UserEvent.UserAccessRequestEvent;
      reader.readMessage(value,proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.deserializeBinaryFromReader);
      msg.setUserAccessRequest(value);
      break;
    case 15:
      var value = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.deserializeBinaryFromReader);
      msg.setModemTransferStarted(value);
      break;
    case 16:
      var value = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.deserializeBinaryFromReader);
      msg.setModemTransferCancelled(value);
      break;
    case 17:
      var value = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.deserializeBinaryFromReader);
      msg.setModemTransferReceived(value);
      break;
    case 18:
      var value = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.deserializeBinaryFromReader);
      msg.setModemTransferNotReceived(value);
      break;
    case 19:
      var value = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.deserializeBinaryFromReader);
      msg.setModemTransferReturnTransferStarted(value);
      break;
    case 20:
      var value = new proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent;
      reader.readMessage(value,proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.deserializeBinaryFromReader);
      msg.setModemClaimedEvent(value);
      break;
    case 23:
      var value = new proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent;
      reader.readMessage(value,proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.deserializeBinaryFromReader);
      msg.setTokenExpiryWarning(value);
      break;
    case 24:
      var value = new proto.hiber.event.Event.TokenEvent.TokenExpiredEvent;
      reader.readMessage(value,proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.deserializeBinaryFromReader);
      msg.setTokenExpired(value);
      break;
    case 30:
      var value = new proto.hiber.event.Event.TokenEvent.TokenCreatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.deserializeBinaryFromReader);
      msg.setTokenCreated(value);
      break;
    case 35:
      var value = new proto.hiber.event.Event.TokenEvent.TokenDeletedEvent;
      reader.readMessage(value,proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.deserializeBinaryFromReader);
      msg.setTokenDeleted(value);
      break;
    case 37:
      var value = new proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.deserializeBinaryFromReader);
      msg.setOrganizationCreated(value);
      break;
    case 25:
      var value = new proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.deserializeBinaryFromReader);
      msg.setOrganizationUpdated(value);
      break;
    case 38:
      var value = new proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent;
      reader.readMessage(value,proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.deserializeBinaryFromReader);
      msg.setOrganizationDeleted(value);
      break;
    case 31:
      var value = new proto.hiber.event.Event.PublisherEvent.CreatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.CreatedEvent.deserializeBinaryFromReader);
      msg.setPublisherCreated(value);
      break;
    case 32:
      var value = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.UpdatedEvent.deserializeBinaryFromReader);
      msg.setPublisherUpdated(value);
      break;
    case 33:
      var value = new proto.hiber.event.Event.PublisherEvent.DeletedEvent;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.DeletedEvent.deserializeBinaryFromReader);
      msg.setPublisherDeleted(value);
      break;
    case 40:
      var value = new proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.deserializeBinaryFromReader);
      msg.setPublisherAutoDisabled(value);
      break;
    case 34:
      var value = new proto.hiber.event.Event.PublisherEvent.FailedEvent;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.FailedEvent.deserializeBinaryFromReader);
      msg.setPublisherFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsError();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getModemUpdated();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemLocationUpdated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemActivated();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemStale();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.hiber.event.Event.ModemEvent.ModemStaleEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemMessageReceived();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemMessageDropped();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemMessageDelayed();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemMessageCannotBeParsed();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.serializeBinaryToWriter
    );
  }
  f = message.getUserAdded();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.hiber.event.Event.UserEvent.UserAddedEvent.serializeBinaryToWriter
    );
  }
  f = message.getUserRemoved();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.hiber.event.Event.UserEvent.UserRemovedEvent.serializeBinaryToWriter
    );
  }
  f = message.getUserInvited();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.hiber.event.Event.UserEvent.UserInvitedEvent.serializeBinaryToWriter
    );
  }
  f = message.getUserAccessRequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemTransferStarted();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemTransferCancelled();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemTransferReceived();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemTransferNotReceived();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemTransferReturnTransferStarted();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.serializeBinaryToWriter
    );
  }
  f = message.getModemClaimedEvent();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.serializeBinaryToWriter
    );
  }
  f = message.getTokenExpiryWarning();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.serializeBinaryToWriter
    );
  }
  f = message.getTokenExpired();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.serializeBinaryToWriter
    );
  }
  f = message.getTokenCreated();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getTokenDeleted();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationCreated();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationUpdated();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationDeleted();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.serializeBinaryToWriter
    );
  }
  f = message.getPublisherCreated();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.hiber.event.Event.PublisherEvent.CreatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getPublisherUpdated();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.hiber.event.Event.PublisherEvent.UpdatedEvent.serializeBinaryToWriter
    );
  }
  f = message.getPublisherDeleted();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.hiber.event.Event.PublisherEvent.DeletedEvent.serializeBinaryToWriter
    );
  }
  f = message.getPublisherAutoDisabled();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.serializeBinaryToWriter
    );
  }
  f = message.getPublisherFailed();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.hiber.event.Event.PublisherEvent.FailedEvent.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.displayName = 'proto.hiber.event.Event.ModemEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent}
 */
proto.hiber.event.Event.ModemEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent;
  return proto.hiber.event.Event.ModemEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent}
 */
proto.hiber.event.Event.ModemEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: (f = msg.getDisplayName()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    antenna: jspb.Message.getFieldWithDefault(msg, 11, 0),
    customAntenna: (f = msg.getCustomAntenna()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    gps: (f = msg.getGps()) && base_pb.UpdateBoolean.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && base_pb.Location.toObject(includeInstance, f),
    peripheralsMap: (f = msg.getPeripheralsMap()) ? f.toObject(includeInstance, undefined) : [],
    notes: (f = msg.getNotes()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    secureNotesUpdated: jspb.Message.getFieldWithDefault(msg, 17, false),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent;
  return proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 10:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setDisplayName(value);
      break;
    case 11:
      var value = /** @type {!proto.hiber.modem.Modem.Peripherals.HiberAntenna} */ (reader.readEnum());
      msg.setAntenna(value);
      break;
    case 12:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setCustomAntenna(value);
      break;
    case 13:
      var value = new base_pb.UpdateBoolean;
      reader.readMessage(value,base_pb.UpdateBoolean.deserializeBinaryFromReader);
      msg.setGps(value);
      break;
    case 14:
      var value = new base_pb.Location;
      reader.readMessage(value,base_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 15:
      var value = msg.getPeripheralsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 16:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setNotes(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecureNotesUpdated(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getAntenna();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getCustomAntenna();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getGps();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      base_pb.UpdateBoolean.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      base_pb.Location.serializeBinaryToWriter
    );
  }
  f = message.getPeripheralsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getNotes();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getSecureNotesUpdated();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.UpdateClearableString display_name = 10;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getDisplayName = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 10));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setDisplayName = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearDisplayName = function() {
  this.setDisplayName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional hiber.modem.Modem.Peripherals.HiberAntenna antenna = 11;
 * @return {!proto.hiber.modem.Modem.Peripherals.HiberAntenna}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getAntenna = function() {
  return /** @type {!proto.hiber.modem.Modem.Peripherals.HiberAntenna} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.hiber.modem.Modem.Peripherals.HiberAntenna} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setAntenna = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional hiber.UpdateClearableString custom_antenna = 12;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getCustomAntenna = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 12));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setCustomAntenna = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearCustomAntenna = function() {
  this.setCustomAntenna(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasCustomAntenna = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional hiber.UpdateBoolean gps = 13;
 * @return {?proto.hiber.UpdateBoolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getGps = function() {
  return /** @type{?proto.hiber.UpdateBoolean} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateBoolean, 13));
};


/** @param {?proto.hiber.UpdateBoolean|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setGps = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearGps = function() {
  this.setGps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasGps = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional hiber.Location location = 14;
 * @return {?proto.hiber.Location}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getLocation = function() {
  return /** @type{?proto.hiber.Location} */ (
    jspb.Message.getWrapperField(this, base_pb.Location, 14));
};


/** @param {?proto.hiber.Location|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * map<string, string> peripherals = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getPeripheralsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearPeripheralsMap = function() {
  this.getPeripheralsMap().clear();
};


/**
 * optional hiber.UpdateClearableString notes = 16;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getNotes = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 16));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setNotes = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearNotes = function() {
  this.setNotes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasNotes = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool secure_notes_updated = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getSecureNotesUpdated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setSecureNotesUpdated = function(value) {
  jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated hiber.tag.Tag tags = 5;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 5));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    location: (f = msg.getLocation()) && base_pb.Location.toObject(includeInstance, f),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent;
  return proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = new base_pb.Location;
      reader.readMessage(value,base_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Location.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Location location = 3;
 * @return {?proto.hiber.Location}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getLocation = function() {
  return /** @type{?proto.hiber.Location} */ (
    jspb.Message.getWrapperField(this, base_pb.Location, 3));
};


/** @param {?proto.hiber.Location|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated hiber.tag.Tag tags = 5;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 5));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.ModemStaleEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ModemStaleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ModemStaleEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ModemStaleEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ModemStaleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ModemStaleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maximumInactivityPeriod: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    lastMessage: (f = msg.getLastMessage()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemStaleEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ModemStaleEvent;
  return proto.hiber.event.Event.ModemEvent.ModemStaleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemStaleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemStaleEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximumInactivityPeriod(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastMessage(value);
      break;
    case 6:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ModemStaleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemStaleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaximumInactivityPeriod();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 maximum_inactivity_period = 3;
 * @return {number}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getMaximumInactivityPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setMaximumInactivityPeriod = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional hiber.Timestamp last_message = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getLastMessage = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setLastMessage = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.clearLastMessage = function() {
  this.setLastMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.hasLastMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated hiber.tag.Tag tags = 6;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 6));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemStaleEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ModemActivatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ModemActivatedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ModemActivatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    sentAt: (f = msg.getSentAt()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemActivatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ModemActivatedEvent;
  return proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemActivatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ModemActivatedEvent}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessageId(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 10:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSentAt(value);
      break;
    case 7:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ModemActivatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSentAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {number}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setMessageId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional hiber.Timestamp sent_at = 10;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getSentAt = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 10));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setSentAt = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.clearSentAt = function() {
  this.setSentAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.hasSentAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated hiber.tag.Tag tags = 7;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 7));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ModemActivatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.MessageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.MessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.MessageEvent.displayName = 'proto.hiber.event.Event.ModemEvent.MessageEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.MessageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.MessageEvent;
  return proto.hiber.event.Event.ModemEvent.MessageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.MessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: (f = msg.getMessage()) && modem_pb.ModemMessage.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    modemExternalDeviceId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent;
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = new modem_pb.ModemMessage;
      reader.readMessage(value,modem_pb.ModemMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemExternalDeviceId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modem_pb.ModemMessage.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getModemExternalDeviceId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.modem.ModemMessage message = 3;
 * @return {?proto.hiber.modem.ModemMessage}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getMessage = function() {
  return /** @type{?proto.hiber.modem.ModemMessage} */ (
    jspb.Message.getWrapperField(this, modem_pb.ModemMessage, 3));
};


/** @param {?proto.hiber.modem.ModemMessage|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setMessage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.clearMessage = function() {
  this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string modem_external_device_id = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getModemExternalDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setModemExternalDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional hiber.Timestamp time = 7;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 7));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    droppedMessages: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: (f = msg.getMessage()) && modem_pb.ModemMessage.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    modemHealth: jspb.Message.getFieldWithDefault(msg, 6, 0),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent;
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDroppedMessages(value);
      break;
    case 4:
      var value = new modem_pb.ModemMessage;
      reader.readMessage(value,modem_pb.ModemMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 5:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {!proto.hiber.Health} */ (reader.readEnum());
      msg.setModemHealth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDroppedMessages();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      modem_pb.ModemMessage.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getModemHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 dropped_messages = 3;
 * @return {number}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getDroppedMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setDroppedMessages = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional hiber.modem.ModemMessage message = 4;
 * @return {?proto.hiber.modem.ModemMessage}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getMessage = function() {
  return /** @type{?proto.hiber.modem.ModemMessage} */ (
    jspb.Message.getWrapperField(this, modem_pb.ModemMessage, 4));
};


/** @param {?proto.hiber.modem.ModemMessage|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setMessage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.clearMessage = function() {
  this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated hiber.tag.Tag tags = 5;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 5));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional hiber.Health modem_health = 6;
 * @return {!proto.hiber.Health}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getModemHealth = function() {
  return /** @type {!proto.hiber.Health} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.hiber.Health} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setModemHealth = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional hiber.Timestamp time = 9;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 9));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: (f = msg.getMessage()) && modem_pb.ModemMessage.toObject(includeInstance, f),
    delaySeconds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    modemHealth: jspb.Message.getFieldWithDefault(msg, 6, 0),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent;
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = new modem_pb.ModemMessage;
      reader.readMessage(value,modem_pb.ModemMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelaySeconds(value);
      break;
    case 5:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {!proto.hiber.Health} */ (reader.readEnum());
      msg.setModemHealth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modem_pb.ModemMessage.serializeBinaryToWriter
    );
  }
  f = message.getDelaySeconds();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getModemHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.modem.ModemMessage message = 3;
 * @return {?proto.hiber.modem.ModemMessage}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getMessage = function() {
  return /** @type{?proto.hiber.modem.ModemMessage} */ (
    jspb.Message.getWrapperField(this, modem_pb.ModemMessage, 3));
};


/** @param {?proto.hiber.modem.ModemMessage|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setMessage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.clearMessage = function() {
  this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 delay_seconds = 4;
 * @return {number}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setDelaySeconds = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated hiber.tag.Tag tags = 5;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 5));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional hiber.Health modem_health = 6;
 * @return {!proto.hiber.Health}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getModemHealth = function() {
  return /** @type {!proto.hiber.Health} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.hiber.Health} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setModemHealth = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional hiber.Timestamp time = 9;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 9));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modemMessageId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent;
  return proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setModemMessageId(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModemMessageId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 modem_message_id = 3;
 * @return {number}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getModemMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setModemMessageId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated hiber.tag.Tag tags = 6;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 6));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ClaimEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ClaimEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ClaimEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ClaimEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ClaimEvent}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ClaimEvent;
  return proto.hiber.event.Event.ModemEvent.ClaimEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ClaimEvent}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ClaimEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.displayName = 'proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modemNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    claim: (f = msg.getClaim()) && modem_claim_pb.ModemClaim.toObject(includeInstance, f),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent;
  return proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModemNumber(value);
      break;
    case 3:
      var value = new modem_claim_pb.ModemClaim;
      reader.readMessage(value,modem_claim_pb.ModemClaim.deserializeBinaryFromReader);
      msg.setClaim(value);
      break;
    case 4:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModemNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClaim();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modem_claim_pb.ModemClaim.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modem_number = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getModemNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setModemNumber = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.modem.ModemClaim claim = 3;
 * @return {?proto.hiber.modem.ModemClaim}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getClaim = function() {
  return /** @type{?proto.hiber.modem.ModemClaim} */ (
    jspb.Message.getWrapperField(this, modem_claim_pb.ModemClaim, 3));
};


/** @param {?proto.hiber.modem.ModemClaim|undefined} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setClaim = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.clearClaim = function() {
  this.setClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.hasClaim = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional hiber.Timestamp time = 4;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 4));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated hiber.tag.Tag tags = 7;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 7));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent;
  return proto.hiber.event.Event.ModemTransferEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    organization: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent;
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 3:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional hiber.modem.ModemTransfer transfer = 1;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 1));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setTransfer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Timestamp time = 3;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 3));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    organization: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent;
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 3:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional hiber.modem.ModemTransfer transfer = 1;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 1));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setTransfer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Timestamp time = 3;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 3));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    organization: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent;
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 3:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional hiber.modem.ModemTransfer transfer = 1;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 1));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setTransfer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Timestamp time = 3;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 3));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfer: (f = msg.getTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    organization: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent;
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 3:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional hiber.modem.ModemTransfer transfer = 1;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 1));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setTransfer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.clearTransfer = function() {
  this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization = 2;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Timestamp time = 3;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 3));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.displayName = 'proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.repeatedFields_ = [3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnTransfer: (f = msg.getReturnTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    originalTransfer: (f = msg.getOriginalTransfer()) && modem_transfer_pb.ModemTransfer.toObject(includeInstance, f),
    returnLinesList: jspb.Message.toObjectList(msg.getReturnLinesList(),
    modem_transfer_pb.ModemTransferReturnLine.toObject, includeInstance),
    organization: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent;
  return proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setReturnTransfer(value);
      break;
    case 2:
      var value = new modem_transfer_pb.ModemTransfer;
      reader.readMessage(value,modem_transfer_pb.ModemTransfer.deserializeBinaryFromReader);
      msg.setOriginalTransfer(value);
      break;
    case 3:
      var value = new modem_transfer_pb.ModemTransferReturnLine;
      reader.readMessage(value,modem_transfer_pb.ModemTransferReturnLine.deserializeBinaryFromReader);
      msg.addReturnLines(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 6:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnTransfer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOriginalTransfer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modem_transfer_pb.ModemTransfer.serializeBinaryToWriter
    );
  }
  f = message.getReturnLinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modem_transfer_pb.ModemTransferReturnLine.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional hiber.modem.ModemTransfer return_transfer = 1;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getReturnTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 1));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setReturnTransfer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.clearReturnTransfer = function() {
  this.setReturnTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.hasReturnTransfer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional hiber.modem.ModemTransfer original_transfer = 2;
 * @return {?proto.hiber.modem.ModemTransfer}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getOriginalTransfer = function() {
  return /** @type{?proto.hiber.modem.ModemTransfer} */ (
    jspb.Message.getWrapperField(this, modem_transfer_pb.ModemTransfer, 2));
};


/** @param {?proto.hiber.modem.ModemTransfer|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setOriginalTransfer = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.clearOriginalTransfer = function() {
  this.setOriginalTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.hasOriginalTransfer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated hiber.modem.ModemTransferReturnLine return_lines = 3;
 * @return {!Array<!proto.hiber.modem.ModemTransferReturnLine>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getReturnLinesList = function() {
  return /** @type{!Array<!proto.hiber.modem.ModemTransferReturnLine>} */ (
    jspb.Message.getRepeatedWrapperField(this, modem_transfer_pb.ModemTransferReturnLine, 3));
};


/** @param {!Array<!proto.hiber.modem.ModemTransferReturnLine>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setReturnLinesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hiber.modem.ModemTransferReturnLine=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.modem.ModemTransferReturnLine}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.addReturnLines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hiber.modem.ModemTransferReturnLine, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.clearReturnLinesList = function() {
  this.setReturnLinesList([]);
};


/**
 * optional string organization = 4;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated hiber.tag.Tag tags = 6;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 6));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.UserEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.UserEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.UserEvent.displayName = 'proto.hiber.event.Event.UserEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.UserEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.UserEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.UserEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.UserEvent}
 */
proto.hiber.event.Event.UserEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.UserEvent;
  return proto.hiber.event.Event.UserEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.UserEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.UserEvent}
 */
proto.hiber.event.Event.UserEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.UserEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.UserEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.UserEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.UserEvent.UserAddedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.UserEvent.UserAddedEvent.displayName = 'proto.hiber.event.Event.UserEvent.UserAddedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.UserEvent.UserAddedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.UserEvent.UserAddedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.UserEvent.UserAddedEvent}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.UserEvent.UserAddedEvent;
  return proto.hiber.event.Event.UserEvent.UserAddedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.UserEvent.UserAddedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.UserEvent.UserAddedEvent}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.UserEvent.UserAddedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.UserEvent.UserAddedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.setUser = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.UserEvent.UserAddedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.UserEvent.UserRemovedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.UserEvent.UserRemovedEvent.displayName = 'proto.hiber.event.Event.UserEvent.UserRemovedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.UserEvent.UserRemovedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.UserEvent.UserRemovedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.UserEvent.UserRemovedEvent}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.UserEvent.UserRemovedEvent;
  return proto.hiber.event.Event.UserEvent.UserRemovedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.UserEvent.UserRemovedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.UserEvent.UserRemovedEvent}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.UserEvent.UserRemovedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.UserEvent.UserRemovedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.setUser = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.UserEvent.UserRemovedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.UserEvent.UserInvitedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.UserEvent.UserInvitedEvent.displayName = 'proto.hiber.event.Event.UserEvent.UserInvitedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.UserEvent.UserInvitedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.UserEvent.UserInvitedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.UserEvent.UserInvitedEvent}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.UserEvent.UserInvitedEvent;
  return proto.hiber.event.Event.UserEvent.UserInvitedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.UserEvent.UserInvitedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.UserEvent.UserInvitedEvent}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.UserEvent.UserInvitedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.UserEvent.UserInvitedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.UserEvent.UserInvitedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.UserEvent.UserAccessRequestEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.displayName = 'proto.hiber.event.Event.UserEvent.UserAccessRequestEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.UserEvent.UserAccessRequestEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.UserEvent.UserAccessRequestEvent}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.UserEvent.UserAccessRequestEvent;
  return proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.UserEvent.UserAccessRequestEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.UserEvent.UserAccessRequestEvent}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.UserEvent.UserAccessRequestEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.setUser = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.Timestamp time = 3;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 3));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.UserEvent.UserAccessRequestEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.displayName = 'proto.hiber.event.Event.PublisherEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent}
 */
proto.hiber.event.Event.PublisherEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent;
  return proto.hiber.event.Event.PublisherEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent}
 */
proto.hiber.event.Event.PublisherEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.PublisherEvent.CreatedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.CreatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.CreatedEvent.displayName = 'proto.hiber.event.Event.PublisherEvent.CreatedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.CreatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.CreatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    created: (f = msg.getCreated()) && publisher_pb.Publisher.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.CreatedEvent}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.CreatedEvent;
  return proto.hiber.event.Event.PublisherEvent.CreatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.CreatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.CreatedEvent}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new publisher_pb.Publisher;
      reader.readMessage(value,publisher_pb.Publisher.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 3:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.CreatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.CreatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      publisher_pb.Publisher.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.publisher.Publisher created = 2;
 * @return {?proto.hiber.publisher.Publisher}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getCreated = function() {
  return /** @type{?proto.hiber.publisher.Publisher} */ (
    jspb.Message.getWrapperField(this, publisher_pb.Publisher, 2));
};


/** @param {?proto.hiber.publisher.Publisher|undefined} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setCreated = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.clearCreated = function() {
  this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated hiber.tag.Tag tags = 3;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 3));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional hiber.Timestamp time = 6;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 6));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.CreatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.repeatedFields_, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.UpdatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.displayName = 'proto.hiber.event.Event.PublisherEvent.UpdatedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_ = [[15,16,17,18]];

/**
 * @enum {number}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.UpdatedDataCase = {
  UPDATED_DATA_NOT_SET: 0,
  WEBHOOK: 15,
  MQTT: 16,
  AWS_IOT: 17,
  EMAIL: 18
};

/**
 * @return {proto.hiber.event.Event.PublisherEvent.UpdatedEvent.UpdatedDataCase}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedDataCase = function() {
  return /** @type {proto.hiber.event.Event.PublisherEvent.UpdatedEvent.UpdatedDataCase} */(jspb.Message.computeOneofCase(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatedDescription: (f = msg.getUpdatedDescription()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    partialUpdateData: (f = msg.getPartialUpdateData()) && publisher_pb.Publisher.Data.toObject(includeInstance, f),
    webhook: (f = msg.getWebhook()) && proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.toObject(includeInstance, f),
    mqtt: (f = msg.getMqtt()) && proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.toObject(includeInstance, f),
    awsIot: (f = msg.getAwsIot()) && proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.toObject(includeInstance, f),
    updatedEventFilter: (f = msg.getUpdatedEventFilter()) && base_pb.Filter.Events.Update.toObject(includeInstance, f),
    updatedModemFilter: (f = msg.getUpdatedModemFilter()) && base_pb.Filter.Modems.Update.toObject(includeInstance, f),
    updatedTagFilter: (f = msg.getUpdatedTagFilter()) && base_pb.Filter.Tags.Update.toObject(includeInstance, f),
    updatedActiveState: (f = msg.getUpdatedActiveState()) && base_pb.UpdateBoolean.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 9, ""),
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent;
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setUpdatedDescription(value);
      break;
    case 3:
      var value = new publisher_pb.Publisher.Data;
      reader.readMessage(value,publisher_pb.Publisher.Data.deserializeBinaryFromReader);
      msg.setPartialUpdateData(value);
      break;
    case 15:
      var value = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.deserializeBinaryFromReader);
      msg.setWebhook(value);
      break;
    case 16:
      var value = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.deserializeBinaryFromReader);
      msg.setMqtt(value);
      break;
    case 17:
      var value = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.deserializeBinaryFromReader);
      msg.setAwsIot(value);
      break;
    case 18:
      var value = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate;
      reader.readMessage(value,proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 4:
      var value = new base_pb.Filter.Events.Update;
      reader.readMessage(value,base_pb.Filter.Events.Update.deserializeBinaryFromReader);
      msg.setUpdatedEventFilter(value);
      break;
    case 5:
      var value = new base_pb.Filter.Modems.Update;
      reader.readMessage(value,base_pb.Filter.Modems.Update.deserializeBinaryFromReader);
      msg.setUpdatedModemFilter(value);
      break;
    case 6:
      var value = new base_pb.Filter.Tags.Update;
      reader.readMessage(value,base_pb.Filter.Tags.Update.deserializeBinaryFromReader);
      msg.setUpdatedTagFilter(value);
      break;
    case 7:
      var value = new base_pb.UpdateBoolean;
      reader.readMessage(value,base_pb.UpdateBoolean.deserializeBinaryFromReader);
      msg.setUpdatedActiveState(value);
      break;
    case 8:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 11:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatedDescription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getPartialUpdateData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      publisher_pb.Publisher.Data.serializeBinaryToWriter
    );
  }
  f = message.getWebhook();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.serializeBinaryToWriter
    );
  }
  f = message.getMqtt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.serializeBinaryToWriter
    );
  }
  f = message.getAwsIot();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedEventFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Filter.Events.Update.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedModemFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Filter.Modems.Update.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedTagFilter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.Filter.Tags.Update.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedActiveState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      base_pb.UpdateBoolean.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.displayName = 'proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: (f = msg.getSecret()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    certificateId: (f = msg.getCertificateId()) && base_pb.UpdateOptionalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate;
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 3:
      var value = /** @type {!proto.hiber.webhook.Webhook.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 9:
      var value = new base_pb.UpdateOptionalId;
      reader.readMessage(value,base_pb.UpdateOptionalId.deserializeBinaryFromReader);
      msg.setCertificateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCertificateId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      base_pb.UpdateOptionalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.UpdateClearableString secret = 2;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.getSecret = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 2));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional hiber.webhook.Webhook.ContentType content_type = 3;
 * @return {!proto.hiber.webhook.Webhook.ContentType}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.getContentType = function() {
  return /** @type {!proto.hiber.webhook.Webhook.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.hiber.webhook.Webhook.ContentType} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.setContentType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional hiber.UpdateOptionalId certificate_id = 9;
 * @return {?proto.hiber.UpdateOptionalId}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.getCertificateId = function() {
  return /** @type{?proto.hiber.UpdateOptionalId} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateOptionalId, 9));
};


/** @param {?proto.hiber.UpdateOptionalId|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.setCertificateId = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.clearCertificateId = function() {
  this.setCertificateId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate.prototype.hasCertificateId = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.displayName = 'proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    topic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    qos: jspb.Message.getFieldWithDefault(msg, 4, 0),
    identifier: (f = msg.getIdentifier()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    username: (f = msg.getUsername()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    password: (f = msg.getPassword()) && base_pb.UpdateClearableString.toObject(includeInstance, f),
    certificateId: (f = msg.getCertificateId()) && base_pb.UpdateOptionalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate;
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.hiber.integration.mqtt.MQTTPublisher.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 4:
      var value = /** @type {!proto.hiber.integration.mqtt.MQTTPublisher.Data.QoS} */ (reader.readEnum());
      msg.setQos(value);
      break;
    case 5:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 6:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setUsername(value);
      break;
    case 7:
      var value = new base_pb.UpdateClearableString;
      reader.readMessage(value,base_pb.UpdateClearableString.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 8:
      var value = new base_pb.UpdateOptionalId;
      reader.readMessage(value,base_pb.UpdateOptionalId.deserializeBinaryFromReader);
      msg.setCertificateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQos();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getUsername();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      base_pb.UpdateClearableString.serializeBinaryToWriter
    );
  }
  f = message.getCertificateId();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      base_pb.UpdateOptionalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.integration.mqtt.MQTTPublisher.ContentType content_type = 2;
 * @return {!proto.hiber.integration.mqtt.MQTTPublisher.ContentType}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getContentType = function() {
  return /** @type {!proto.hiber.integration.mqtt.MQTTPublisher.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.hiber.integration.mqtt.MQTTPublisher.ContentType} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setContentType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string topic = 3;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setTopic = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional hiber.integration.mqtt.MQTTPublisher.Data.QoS qos = 4;
 * @return {!proto.hiber.integration.mqtt.MQTTPublisher.Data.QoS}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getQos = function() {
  return /** @type {!proto.hiber.integration.mqtt.MQTTPublisher.Data.QoS} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.hiber.integration.mqtt.MQTTPublisher.Data.QoS} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setQos = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional hiber.UpdateClearableString identifier = 5;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getIdentifier = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 5));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setIdentifier = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.clearIdentifier = function() {
  this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional hiber.UpdateClearableString username = 6;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getUsername = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 6));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setUsername = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.clearUsername = function() {
  this.setUsername(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional hiber.UpdateClearableString password = 7;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getPassword = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 7));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setPassword = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.clearPassword = function() {
  this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional hiber.UpdateOptionalId certificate_id = 8;
 * @return {?proto.hiber.UpdateOptionalId}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.getCertificateId = function() {
  return /** @type{?proto.hiber.UpdateOptionalId} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateOptionalId, 8));
};


/** @param {?proto.hiber.UpdateOptionalId|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.setCertificateId = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.clearCertificateId = function() {
  this.setCertificateId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate.prototype.hasCertificateId = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.displayName = 'proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    awsIotUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    certificateId: (f = msg.getCertificateId()) && base_pb.UpdateOptionalId.toObject(includeInstance, f),
    mqttClientIdentifier: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate;
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAwsIotUrl(value);
      break;
    case 3:
      var value = new base_pb.UpdateOptionalId;
      reader.readMessage(value,base_pb.UpdateOptionalId.deserializeBinaryFromReader);
      msg.setCertificateId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMqttClientIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAwsIotUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCertificateId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.UpdateOptionalId.serializeBinaryToWriter
    );
  }
  f = message.getMqttClientIdentifier();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string aws_iot_url = 2;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.getAwsIotUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.setAwsIotUrl = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.UpdateOptionalId certificate_id = 3;
 * @return {?proto.hiber.UpdateOptionalId}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.getCertificateId = function() {
  return /** @type{?proto.hiber.UpdateOptionalId} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateOptionalId, 3));
};


/** @param {?proto.hiber.UpdateOptionalId|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.setCertificateId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.clearCertificateId = function() {
  this.setCertificateId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.hasCertificateId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string mqtt_client_identifier = 5;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.getMqttClientIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate.prototype.setMqttClientIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.displayName = 'proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate;
  return proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.UpdateClearableString updated_description = 2;
 * @return {?proto.hiber.UpdateClearableString}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedDescription = function() {
  return /** @type{?proto.hiber.UpdateClearableString} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateClearableString, 2));
};


/** @param {?proto.hiber.UpdateClearableString|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setUpdatedDescription = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearUpdatedDescription = function() {
  this.setUpdatedDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasUpdatedDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional hiber.publisher.Publisher.Data partial_update_data = 3;
 * @return {?proto.hiber.publisher.Publisher.Data}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getPartialUpdateData = function() {
  return /** @type{?proto.hiber.publisher.Publisher.Data} */ (
    jspb.Message.getWrapperField(this, publisher_pb.Publisher.Data, 3));
};


/** @param {?proto.hiber.publisher.Publisher.Data|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setPartialUpdateData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearPartialUpdateData = function() {
  this.setPartialUpdateData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasPartialUpdateData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WebhookUpdate webhook = 15;
 * @return {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getWebhook = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate, 15));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.WebhookUpdate|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setWebhook = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_[0], value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearWebhook = function() {
  this.setWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MQTTUpdate mqtt = 16;
 * @return {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getMqtt = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate, 16));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.MQTTUpdate|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setMqtt = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_[0], value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearMqtt = function() {
  this.setMqtt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasMqtt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional AWSIoTUpdate aws_iot = 17;
 * @return {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getAwsIot = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate, 17));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.AWSIoTUpdate|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setAwsIot = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_[0], value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearAwsIot = function() {
  this.setAwsIot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasAwsIot = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional EmailUpdate email = 18;
 * @return {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getEmail = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate, 18));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent.EmailUpdate|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setEmail = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.hiber.event.Event.PublisherEvent.UpdatedEvent.oneofGroups_[0], value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearEmail = function() {
  this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional hiber.Filter.Events.Update updated_event_filter = 4;
 * @return {?proto.hiber.Filter.Events.Update}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedEventFilter = function() {
  return /** @type{?proto.hiber.Filter.Events.Update} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Events.Update, 4));
};


/** @param {?proto.hiber.Filter.Events.Update|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setUpdatedEventFilter = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearUpdatedEventFilter = function() {
  this.setUpdatedEventFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasUpdatedEventFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional hiber.Filter.Modems.Update updated_modem_filter = 5;
 * @return {?proto.hiber.Filter.Modems.Update}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedModemFilter = function() {
  return /** @type{?proto.hiber.Filter.Modems.Update} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Modems.Update, 5));
};


/** @param {?proto.hiber.Filter.Modems.Update|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setUpdatedModemFilter = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearUpdatedModemFilter = function() {
  this.setUpdatedModemFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasUpdatedModemFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional hiber.Filter.Tags.Update updated_tag_filter = 6;
 * @return {?proto.hiber.Filter.Tags.Update}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedTagFilter = function() {
  return /** @type{?proto.hiber.Filter.Tags.Update} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Tags.Update, 6));
};


/** @param {?proto.hiber.Filter.Tags.Update|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setUpdatedTagFilter = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearUpdatedTagFilter = function() {
  this.setUpdatedTagFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasUpdatedTagFilter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional hiber.UpdateBoolean updated_active_state = 7;
 * @return {?proto.hiber.UpdateBoolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getUpdatedActiveState = function() {
  return /** @type{?proto.hiber.UpdateBoolean} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateBoolean, 7));
};


/** @param {?proto.hiber.UpdateBoolean|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setUpdatedActiveState = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearUpdatedActiveState = function() {
  this.setUpdatedActiveState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasUpdatedActiveState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated hiber.tag.Tag tags = 8;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 8));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 9;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional hiber.Timestamp time = 11;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 11));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.UpdatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.PublisherEvent.DeletedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.DeletedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.DeletedEvent.displayName = 'proto.hiber.event.Event.PublisherEvent.DeletedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.DeletedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.DeletedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleted: (f = msg.getDeleted()) && publisher_pb.Publisher.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.DeletedEvent}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.DeletedEvent;
  return proto.hiber.event.Event.PublisherEvent.DeletedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.DeletedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.DeletedEvent}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new publisher_pb.Publisher;
      reader.readMessage(value,publisher_pb.Publisher.deserializeBinaryFromReader);
      msg.setDeleted(value);
      break;
    case 3:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.DeletedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.DeletedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleted();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      publisher_pb.Publisher.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.publisher.Publisher deleted = 2;
 * @return {?proto.hiber.publisher.Publisher}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getDeleted = function() {
  return /** @type{?proto.hiber.publisher.Publisher} */ (
    jspb.Message.getWrapperField(this, publisher_pb.Publisher, 2));
};


/** @param {?proto.hiber.publisher.Publisher|undefined} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setDeleted = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.clearDeleted = function() {
  this.setDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.hasDeleted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated hiber.tag.Tag tags = 3;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 3));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional hiber.Timestamp time = 6;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 6));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.DeletedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.displayName = 'proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent;
  return proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated hiber.tag.Tag tags = 3;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 3));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional hiber.Timestamp time = 6;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 6));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.Event.PublisherEvent.FailedEvent.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.Event.PublisherEvent.FailedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.PublisherEvent.FailedEvent.displayName = 'proto.hiber.event.Event.PublisherEvent.FailedEvent';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.PublisherEvent.FailedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.PublisherEvent.FailedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    failed: (f = msg.getFailed()) && publisher_pb.Publisher.toObject(includeInstance, f),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    tag_pb.Tag.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.PublisherEvent.FailedEvent}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.PublisherEvent.FailedEvent;
  return proto.hiber.event.Event.PublisherEvent.FailedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.PublisherEvent.FailedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.PublisherEvent.FailedEvent}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = new publisher_pb.Publisher;
      reader.readMessage(value,publisher_pb.Publisher.deserializeBinaryFromReader);
      msg.setFailed(value);
      break;
    case 4:
      var value = new tag_pb.Tag;
      reader.readMessage(value,tag_pb.Tag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.PublisherEvent.FailedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.PublisherEvent.FailedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFailed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      publisher_pb.Publisher.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tag_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hiber.publisher.Publisher failed = 3;
 * @return {?proto.hiber.publisher.Publisher}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getFailed = function() {
  return /** @type{?proto.hiber.publisher.Publisher} */ (
    jspb.Message.getWrapperField(this, publisher_pb.Publisher, 3));
};


/** @param {?proto.hiber.publisher.Publisher|undefined} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setFailed = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.clearFailed = function() {
  this.setFailed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.hasFailed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hiber.tag.Tag tags = 4;
 * @return {!Array<!proto.hiber.tag.Tag>}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.hiber.tag.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, tag_pb.Tag, 4));
};


/** @param {!Array<!proto.hiber.tag.Tag>} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setTagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.tag.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.tag.Tag}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.tag.Tag, opt_index);
};


proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional hiber.Timestamp time = 7;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 7));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.PublisherEvent.FailedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.TokenEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.TokenEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.TokenEvent.displayName = 'proto.hiber.event.Event.TokenEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.TokenEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.TokenEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.TokenEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.TokenEvent}
 */
proto.hiber.event.Event.TokenEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.TokenEvent;
  return proto.hiber.event.Event.TokenEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.TokenEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.TokenEvent}
 */
proto.hiber.event.Event.TokenEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.TokenEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.TokenEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.TokenEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.TokenEvent.TokenCreatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.displayName = 'proto.hiber.event.Event.TokenEvent.TokenCreatedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.TokenEvent.TokenCreatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenCreatedEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.TokenEvent.TokenCreatedEvent;
  return proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenCreatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenCreatedEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenCreatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.token.Token token = 2;
 * @return {?proto.hiber.token.Token}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.getToken = function() {
  return /** @type{?proto.hiber.token.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 2));
};


/** @param {?proto.hiber.token.Token|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenCreatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.displayName = 'proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent;
  return proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.token.Token token = 2;
 * @return {?proto.hiber.token.Token}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.getToken = function() {
  return /** @type{?proto.hiber.token.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 2));
};


/** @param {?proto.hiber.token.Token|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.TokenEvent.TokenExpiredEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.displayName = 'proto.hiber.event.Event.TokenEvent.TokenExpiredEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiredEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenExpiredEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.TokenEvent.TokenExpiredEvent;
  return proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiredEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenExpiredEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenExpiredEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.token.Token token = 2;
 * @return {?proto.hiber.token.Token}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.getToken = function() {
  return /** @type{?proto.hiber.token.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 2));
};


/** @param {?proto.hiber.token.Token|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenExpiredEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.TokenEvent.TokenDeletedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.displayName = 'proto.hiber.event.Event.TokenEvent.TokenDeletedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.TokenEvent.TokenDeletedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenDeletedEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.TokenEvent.TokenDeletedEvent;
  return proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenDeletedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.TokenEvent.TokenDeletedEvent}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.TokenEvent.TokenDeletedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.token.Token token = 2;
 * @return {?proto.hiber.token.Token}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.getToken = function() {
  return /** @type{?proto.hiber.token.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 2));
};


/** @param {?proto.hiber.token.Token|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.TokenEvent.TokenDeletedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.OrganizationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.OrganizationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.OrganizationEvent.displayName = 'proto.hiber.event.Event.OrganizationEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.OrganizationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.OrganizationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.OrganizationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.OrganizationEvent}
 */
proto.hiber.event.Event.OrganizationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.OrganizationEvent;
  return proto.hiber.event.Event.OrganizationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.OrganizationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.OrganizationEvent}
 */
proto.hiber.event.Event.OrganizationEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.OrganizationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.OrganizationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.OrganizationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.displayName = 'proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentOrganization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    created: (f = msg.getCreated()) && organization_pb.Organization.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 9, ""),
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent;
  return proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentOrganization(value);
      break;
    case 2:
      var value = new organization_pb.Organization;
      reader.readMessage(value,organization_pb.Organization.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 11:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      organization_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent_organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.getParentOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.setParentOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.organization.Organization created = 2;
 * @return {?proto.hiber.organization.Organization}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.getCreated = function() {
  return /** @type{?proto.hiber.organization.Organization} */ (
    jspb.Message.getWrapperField(this, organization_pb.Organization, 2));
};


/** @param {?proto.hiber.organization.Organization|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.setCreated = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.clearCreated = function() {
  this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 9;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional hiber.Timestamp time = 11;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 11));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.displayName = 'proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayNameUpdated: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vatNumberUpdated: jspb.Message.getFieldWithDefault(msg, 3, ""),
    addressUpdated: (f = msg.getAddressUpdated()) && organization_pb.Organization.Address.toObject(includeInstance, f),
    isBusinessUpdated: (f = msg.getIsBusinessUpdated()) && base_pb.UpdateBoolean.toObject(includeInstance, f),
    billingNameUpdated: jspb.Message.getFieldWithDefault(msg, 6, ""),
    billingAddressUpdated: (f = msg.getBillingAddressUpdated()) && organization_pb.Organization.Address.toObject(includeInstance, f),
    contactUpdated: (f = msg.getContactUpdated()) && organization_pb.Organization.Contact.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 9, ""),
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent;
  return proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayNameUpdated(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVatNumberUpdated(value);
      break;
    case 4:
      var value = new organization_pb.Organization.Address;
      reader.readMessage(value,organization_pb.Organization.Address.deserializeBinaryFromReader);
      msg.setAddressUpdated(value);
      break;
    case 5:
      var value = new base_pb.UpdateBoolean;
      reader.readMessage(value,base_pb.UpdateBoolean.deserializeBinaryFromReader);
      msg.setIsBusinessUpdated(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingNameUpdated(value);
      break;
    case 7:
      var value = new organization_pb.Organization.Address;
      reader.readMessage(value,organization_pb.Organization.Address.deserializeBinaryFromReader);
      msg.setBillingAddressUpdated(value);
      break;
    case 8:
      var value = new organization_pb.Organization.Contact;
      reader.readMessage(value,organization_pb.Organization.Contact.deserializeBinaryFromReader);
      msg.setContactUpdated(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 11:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayNameUpdated();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVatNumberUpdated();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddressUpdated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      organization_pb.Organization.Address.serializeBinaryToWriter
    );
  }
  f = message.getIsBusinessUpdated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.UpdateBoolean.serializeBinaryToWriter
    );
  }
  f = message.getBillingNameUpdated();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBillingAddressUpdated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      organization_pb.Organization.Address.serializeBinaryToWriter
    );
  }
  f = message.getContactUpdated();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      organization_pb.Organization.Contact.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name_updated = 2;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getDisplayNameUpdated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setDisplayNameUpdated = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string vat_number_updated = 3;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getVatNumberUpdated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setVatNumberUpdated = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional hiber.organization.Organization.Address address_updated = 4;
 * @return {?proto.hiber.organization.Organization.Address}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getAddressUpdated = function() {
  return /** @type{?proto.hiber.organization.Organization.Address} */ (
    jspb.Message.getWrapperField(this, organization_pb.Organization.Address, 4));
};


/** @param {?proto.hiber.organization.Organization.Address|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setAddressUpdated = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.clearAddressUpdated = function() {
  this.setAddressUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.hasAddressUpdated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional hiber.UpdateBoolean is_business_updated = 5;
 * @return {?proto.hiber.UpdateBoolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getIsBusinessUpdated = function() {
  return /** @type{?proto.hiber.UpdateBoolean} */ (
    jspb.Message.getWrapperField(this, base_pb.UpdateBoolean, 5));
};


/** @param {?proto.hiber.UpdateBoolean|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setIsBusinessUpdated = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.clearIsBusinessUpdated = function() {
  this.setIsBusinessUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.hasIsBusinessUpdated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string billing_name_updated = 6;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getBillingNameUpdated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setBillingNameUpdated = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional hiber.organization.Organization.Address billing_address_updated = 7;
 * @return {?proto.hiber.organization.Organization.Address}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getBillingAddressUpdated = function() {
  return /** @type{?proto.hiber.organization.Organization.Address} */ (
    jspb.Message.getWrapperField(this, organization_pb.Organization.Address, 7));
};


/** @param {?proto.hiber.organization.Organization.Address|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setBillingAddressUpdated = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.clearBillingAddressUpdated = function() {
  this.setBillingAddressUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.hasBillingAddressUpdated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional hiber.organization.Organization.Contact contact_updated = 8;
 * @return {?proto.hiber.organization.Organization.Contact}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getContactUpdated = function() {
  return /** @type{?proto.hiber.organization.Organization.Contact} */ (
    jspb.Message.getWrapperField(this, organization_pb.Organization.Contact, 8));
};


/** @param {?proto.hiber.organization.Organization.Contact|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setContactUpdated = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.clearContactUpdated = function() {
  this.setContactUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.hasContactUpdated = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string title = 9;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional hiber.Timestamp time = 11;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 11));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.displayName = 'proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentOrganization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deletedOrganization: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    time: (f = msg.getTime()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent;
  return proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentOrganization(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeletedOrganization(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeletedOrganization();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent_organization = 1;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.getParentOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.setParentOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deleted_organization = 2;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.getDeletedOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.setDeletedOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp time = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.getTime = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_error = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.getIsError = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.hiber.event.Event.prototype.setIsError = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional ModemEvent.ModemUpdatedEvent modem_updated = 39;
 * @return {?proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent}
 */
proto.hiber.event.Event.prototype.getModemUpdated = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent, 39));
};


/** @param {?proto.hiber.event.Event.ModemEvent.ModemUpdatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemUpdated = function(value) {
  jspb.Message.setOneofWrapperField(this, 39, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemUpdated = function() {
  this.setModemUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemUpdated = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional ModemEvent.ModemLocationUpdatedEvent modem_location_updated = 2;
 * @return {?proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent}
 */
proto.hiber.event.Event.prototype.getModemLocationUpdated = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent, 2));
};


/** @param {?proto.hiber.event.Event.ModemEvent.ModemLocationUpdatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemLocationUpdated = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemLocationUpdated = function() {
  this.setModemLocationUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemLocationUpdated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ModemEvent.ModemActivatedEvent modem_activated = 36;
 * @return {?proto.hiber.event.Event.ModemEvent.ModemActivatedEvent}
 */
proto.hiber.event.Event.prototype.getModemActivated = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.ModemActivatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.ModemActivatedEvent, 36));
};


/** @param {?proto.hiber.event.Event.ModemEvent.ModemActivatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemActivated = function(value) {
  jspb.Message.setOneofWrapperField(this, 36, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemActivated = function() {
  this.setModemActivated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemActivated = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional ModemEvent.ModemStaleEvent modem_stale = 3;
 * @return {?proto.hiber.event.Event.ModemEvent.ModemStaleEvent}
 */
proto.hiber.event.Event.prototype.getModemStale = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.ModemStaleEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.ModemStaleEvent, 3));
};


/** @param {?proto.hiber.event.Event.ModemEvent.ModemStaleEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemStale = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemStale = function() {
  this.setModemStale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemStale = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ModemEvent.MessageEvent.ModemMessageReceivedEvent modem_message_received = 4;
 * @return {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent}
 */
proto.hiber.event.Event.prototype.getModemMessageReceived = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent, 4));
};


/** @param {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageReceivedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemMessageReceived = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemMessageReceived = function() {
  this.setModemMessageReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemMessageReceived = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ModemEvent.MessageEvent.ModemMessageDroppedEvent modem_message_dropped = 5;
 * @return {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent}
 */
proto.hiber.event.Event.prototype.getModemMessageDropped = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent, 5));
};


/** @param {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDroppedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemMessageDropped = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemMessageDropped = function() {
  this.setModemMessageDropped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemMessageDropped = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ModemEvent.MessageEvent.ModemMessageDelayedEvent modem_message_delayed = 6;
 * @return {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent}
 */
proto.hiber.event.Event.prototype.getModemMessageDelayed = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent, 6));
};


/** @param {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageDelayedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemMessageDelayed = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemMessageDelayed = function() {
  this.setModemMessageDelayed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemMessageDelayed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent modem_message_cannot_be_parsed = 7;
 * @return {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent}
 */
proto.hiber.event.Event.prototype.getModemMessageCannotBeParsed = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent, 7));
};


/** @param {?proto.hiber.event.Event.ModemEvent.MessageEvent.ModemMessageCannotBeParsedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemMessageCannotBeParsed = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemMessageCannotBeParsed = function() {
  this.setModemMessageCannotBeParsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemMessageCannotBeParsed = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UserEvent.UserAddedEvent user_added = 8;
 * @return {?proto.hiber.event.Event.UserEvent.UserAddedEvent}
 */
proto.hiber.event.Event.prototype.getUserAdded = function() {
  return /** @type{?proto.hiber.event.Event.UserEvent.UserAddedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.UserEvent.UserAddedEvent, 8));
};


/** @param {?proto.hiber.event.Event.UserEvent.UserAddedEvent|undefined} value */
proto.hiber.event.Event.prototype.setUserAdded = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearUserAdded = function() {
  this.setUserAdded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasUserAdded = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional UserEvent.UserRemovedEvent user_removed = 9;
 * @return {?proto.hiber.event.Event.UserEvent.UserRemovedEvent}
 */
proto.hiber.event.Event.prototype.getUserRemoved = function() {
  return /** @type{?proto.hiber.event.Event.UserEvent.UserRemovedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.UserEvent.UserRemovedEvent, 9));
};


/** @param {?proto.hiber.event.Event.UserEvent.UserRemovedEvent|undefined} value */
proto.hiber.event.Event.prototype.setUserRemoved = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearUserRemoved = function() {
  this.setUserRemoved(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasUserRemoved = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional UserEvent.UserInvitedEvent user_invited = 41;
 * @return {?proto.hiber.event.Event.UserEvent.UserInvitedEvent}
 */
proto.hiber.event.Event.prototype.getUserInvited = function() {
  return /** @type{?proto.hiber.event.Event.UserEvent.UserInvitedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.UserEvent.UserInvitedEvent, 41));
};


/** @param {?proto.hiber.event.Event.UserEvent.UserInvitedEvent|undefined} value */
proto.hiber.event.Event.prototype.setUserInvited = function(value) {
  jspb.Message.setOneofWrapperField(this, 41, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearUserInvited = function() {
  this.setUserInvited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasUserInvited = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional UserEvent.UserAccessRequestEvent user_access_request = 10;
 * @return {?proto.hiber.event.Event.UserEvent.UserAccessRequestEvent}
 */
proto.hiber.event.Event.prototype.getUserAccessRequest = function() {
  return /** @type{?proto.hiber.event.Event.UserEvent.UserAccessRequestEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.UserEvent.UserAccessRequestEvent, 10));
};


/** @param {?proto.hiber.event.Event.UserEvent.UserAccessRequestEvent|undefined} value */
proto.hiber.event.Event.prototype.setUserAccessRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearUserAccessRequest = function() {
  this.setUserAccessRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasUserAccessRequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ModemTransferEvent.ModemTransferStartedEvent modem_transfer_started = 15;
 * @return {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent}
 */
proto.hiber.event.Event.prototype.getModemTransferStarted = function() {
  return /** @type{?proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent, 15));
};


/** @param {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferStartedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemTransferStarted = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemTransferStarted = function() {
  this.setModemTransferStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemTransferStarted = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ModemTransferEvent.ModemTransferCancelledEvent modem_transfer_cancelled = 16;
 * @return {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent}
 */
proto.hiber.event.Event.prototype.getModemTransferCancelled = function() {
  return /** @type{?proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent, 16));
};


/** @param {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferCancelledEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemTransferCancelled = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemTransferCancelled = function() {
  this.setModemTransferCancelled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemTransferCancelled = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ModemTransferEvent.ModemTransferReceivedEvent modem_transfer_received = 17;
 * @return {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent}
 */
proto.hiber.event.Event.prototype.getModemTransferReceived = function() {
  return /** @type{?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent, 17));
};


/** @param {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReceivedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemTransferReceived = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemTransferReceived = function() {
  this.setModemTransferReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemTransferReceived = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ModemTransferEvent.ModemTransferNotReceivedEvent modem_transfer_not_received = 18;
 * @return {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent}
 */
proto.hiber.event.Event.prototype.getModemTransferNotReceived = function() {
  return /** @type{?proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent, 18));
};


/** @param {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferNotReceivedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemTransferNotReceived = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemTransferNotReceived = function() {
  this.setModemTransferNotReceived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemTransferNotReceived = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ModemTransferEvent.ModemTransferReturnTransferStartedEvent modem_transfer_return_transfer_started = 19;
 * @return {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent}
 */
proto.hiber.event.Event.prototype.getModemTransferReturnTransferStarted = function() {
  return /** @type{?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent, 19));
};


/** @param {?proto.hiber.event.Event.ModemTransferEvent.ModemTransferReturnTransferStartedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemTransferReturnTransferStarted = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemTransferReturnTransferStarted = function() {
  this.setModemTransferReturnTransferStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemTransferReturnTransferStarted = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ModemEvent.ClaimEvent.ModemClaimedEvent modem_claimed_event = 20;
 * @return {?proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent}
 */
proto.hiber.event.Event.prototype.getModemClaimedEvent = function() {
  return /** @type{?proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent, 20));
};


/** @param {?proto.hiber.event.Event.ModemEvent.ClaimEvent.ModemClaimedEvent|undefined} value */
proto.hiber.event.Event.prototype.setModemClaimedEvent = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearModemClaimedEvent = function() {
  this.setModemClaimedEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasModemClaimedEvent = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional TokenEvent.TokenExpiryWarningEvent token_expiry_warning = 23;
 * @return {?proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent}
 */
proto.hiber.event.Event.prototype.getTokenExpiryWarning = function() {
  return /** @type{?proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent, 23));
};


/** @param {?proto.hiber.event.Event.TokenEvent.TokenExpiryWarningEvent|undefined} value */
proto.hiber.event.Event.prototype.setTokenExpiryWarning = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearTokenExpiryWarning = function() {
  this.setTokenExpiryWarning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasTokenExpiryWarning = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional TokenEvent.TokenExpiredEvent token_expired = 24;
 * @return {?proto.hiber.event.Event.TokenEvent.TokenExpiredEvent}
 */
proto.hiber.event.Event.prototype.getTokenExpired = function() {
  return /** @type{?proto.hiber.event.Event.TokenEvent.TokenExpiredEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.TokenEvent.TokenExpiredEvent, 24));
};


/** @param {?proto.hiber.event.Event.TokenEvent.TokenExpiredEvent|undefined} value */
proto.hiber.event.Event.prototype.setTokenExpired = function(value) {
  jspb.Message.setOneofWrapperField(this, 24, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearTokenExpired = function() {
  this.setTokenExpired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasTokenExpired = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional TokenEvent.TokenCreatedEvent token_created = 30;
 * @return {?proto.hiber.event.Event.TokenEvent.TokenCreatedEvent}
 */
proto.hiber.event.Event.prototype.getTokenCreated = function() {
  return /** @type{?proto.hiber.event.Event.TokenEvent.TokenCreatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.TokenEvent.TokenCreatedEvent, 30));
};


/** @param {?proto.hiber.event.Event.TokenEvent.TokenCreatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setTokenCreated = function(value) {
  jspb.Message.setOneofWrapperField(this, 30, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearTokenCreated = function() {
  this.setTokenCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasTokenCreated = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional TokenEvent.TokenDeletedEvent token_deleted = 35;
 * @return {?proto.hiber.event.Event.TokenEvent.TokenDeletedEvent}
 */
proto.hiber.event.Event.prototype.getTokenDeleted = function() {
  return /** @type{?proto.hiber.event.Event.TokenEvent.TokenDeletedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.TokenEvent.TokenDeletedEvent, 35));
};


/** @param {?proto.hiber.event.Event.TokenEvent.TokenDeletedEvent|undefined} value */
proto.hiber.event.Event.prototype.setTokenDeleted = function(value) {
  jspb.Message.setOneofWrapperField(this, 35, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearTokenDeleted = function() {
  this.setTokenDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasTokenDeleted = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional OrganizationEvent.OrganizationCreatedEvent organization_created = 37;
 * @return {?proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent}
 */
proto.hiber.event.Event.prototype.getOrganizationCreated = function() {
  return /** @type{?proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent, 37));
};


/** @param {?proto.hiber.event.Event.OrganizationEvent.OrganizationCreatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setOrganizationCreated = function(value) {
  jspb.Message.setOneofWrapperField(this, 37, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearOrganizationCreated = function() {
  this.setOrganizationCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasOrganizationCreated = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional OrganizationEvent.OrganizationUpdatedEvent organization_updated = 25;
 * @return {?proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent}
 */
proto.hiber.event.Event.prototype.getOrganizationUpdated = function() {
  return /** @type{?proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent, 25));
};


/** @param {?proto.hiber.event.Event.OrganizationEvent.OrganizationUpdatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setOrganizationUpdated = function(value) {
  jspb.Message.setOneofWrapperField(this, 25, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearOrganizationUpdated = function() {
  this.setOrganizationUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasOrganizationUpdated = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional OrganizationEvent.OrganizationDeletedEvent organization_deleted = 38;
 * @return {?proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent}
 */
proto.hiber.event.Event.prototype.getOrganizationDeleted = function() {
  return /** @type{?proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent, 38));
};


/** @param {?proto.hiber.event.Event.OrganizationEvent.OrganizationDeletedEvent|undefined} value */
proto.hiber.event.Event.prototype.setOrganizationDeleted = function(value) {
  jspb.Message.setOneofWrapperField(this, 38, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearOrganizationDeleted = function() {
  this.setOrganizationDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasOrganizationDeleted = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional PublisherEvent.CreatedEvent publisher_created = 31;
 * @return {?proto.hiber.event.Event.PublisherEvent.CreatedEvent}
 */
proto.hiber.event.Event.prototype.getPublisherCreated = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.CreatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.CreatedEvent, 31));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.CreatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setPublisherCreated = function(value) {
  jspb.Message.setOneofWrapperField(this, 31, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearPublisherCreated = function() {
  this.setPublisherCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasPublisherCreated = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional PublisherEvent.UpdatedEvent publisher_updated = 32;
 * @return {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent}
 */
proto.hiber.event.Event.prototype.getPublisherUpdated = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.UpdatedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.UpdatedEvent, 32));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.UpdatedEvent|undefined} value */
proto.hiber.event.Event.prototype.setPublisherUpdated = function(value) {
  jspb.Message.setOneofWrapperField(this, 32, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearPublisherUpdated = function() {
  this.setPublisherUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasPublisherUpdated = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional PublisherEvent.DeletedEvent publisher_deleted = 33;
 * @return {?proto.hiber.event.Event.PublisherEvent.DeletedEvent}
 */
proto.hiber.event.Event.prototype.getPublisherDeleted = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.DeletedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.DeletedEvent, 33));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.DeletedEvent|undefined} value */
proto.hiber.event.Event.prototype.setPublisherDeleted = function(value) {
  jspb.Message.setOneofWrapperField(this, 33, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearPublisherDeleted = function() {
  this.setPublisherDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasPublisherDeleted = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional PublisherEvent.AutoDisabledEvent publisher_auto_disabled = 40;
 * @return {?proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent}
 */
proto.hiber.event.Event.prototype.getPublisherAutoDisabled = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent, 40));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.AutoDisabledEvent|undefined} value */
proto.hiber.event.Event.prototype.setPublisherAutoDisabled = function(value) {
  jspb.Message.setOneofWrapperField(this, 40, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearPublisherAutoDisabled = function() {
  this.setPublisherAutoDisabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasPublisherAutoDisabled = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional PublisherEvent.FailedEvent publisher_failed = 34;
 * @return {?proto.hiber.event.Event.PublisherEvent.FailedEvent}
 */
proto.hiber.event.Event.prototype.getPublisherFailed = function() {
  return /** @type{?proto.hiber.event.Event.PublisherEvent.FailedEvent} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.Event.PublisherEvent.FailedEvent, 34));
};


/** @param {?proto.hiber.event.Event.PublisherEvent.FailedEvent|undefined} value */
proto.hiber.event.Event.prototype.setPublisherFailed = function(value) {
  jspb.Message.setOneofWrapperField(this, 34, proto.hiber.event.Event.oneofGroups_[0], value);
};


proto.hiber.event.Event.prototype.clearPublisherFailed = function() {
  this.setPublisherFailed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.Event.prototype.hasPublisherFailed = function() {
  return jspb.Message.getField(this, 34) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.BundledEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.BundledEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.BundledEvent.displayName = 'proto.hiber.event.BundledEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.BundledEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.BundledEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.BundledEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.BundledEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastEvent: (f = msg.getLastEvent()) && base_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.BundledEvent}
 */
proto.hiber.event.BundledEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.BundledEvent;
  return proto.hiber.event.BundledEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.BundledEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.BundledEvent}
 */
proto.hiber.event.BundledEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.hiber.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new base_pb.Timestamp;
      reader.readMessage(value,base_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.BundledEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.BundledEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.BundledEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.BundledEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastEvent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      base_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional hiber.EventType type = 1;
 * @return {!proto.hiber.EventType}
 */
proto.hiber.event.BundledEvent.prototype.getType = function() {
  return /** @type {!proto.hiber.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.hiber.EventType} value */
proto.hiber.event.BundledEvent.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 amount = 2;
 * @return {number}
 */
proto.hiber.event.BundledEvent.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.hiber.event.BundledEvent.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.hiber.event.BundledEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hiber.event.BundledEvent.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.hiber.event.BundledEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.hiber.event.BundledEvent.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional hiber.Timestamp last_event = 5;
 * @return {?proto.hiber.Timestamp}
 */
proto.hiber.event.BundledEvent.prototype.getLastEvent = function() {
  return /** @type{?proto.hiber.Timestamp} */ (
    jspb.Message.getWrapperField(this, base_pb.Timestamp, 5));
};


/** @param {?proto.hiber.Timestamp|undefined} value */
proto.hiber.event.BundledEvent.prototype.setLastEvent = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hiber.event.BundledEvent.prototype.clearLastEvent = function() {
  this.setLastEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.BundledEvent.prototype.hasLastEvent = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.EventSelection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.EventSelection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.EventSelection.displayName = 'proto.hiber.event.EventSelection';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.EventSelection.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.EventSelection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.EventSelection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.EventSelection.toObject = function(includeInstance, msg) {
  var f, obj = {
    events: (f = msg.getEvents()) && base_pb.Filter.Events.toObject(includeInstance, f),
    modems: (f = msg.getModems()) && base_pb.Filter.Modems.toObject(includeInstance, f),
    publishers: (f = msg.getPublishers()) && base_pb.Filter.Publishers.toObject(includeInstance, f),
    tags: (f = msg.getTags()) && base_pb.Filter.Tags.toObject(includeInstance, f),
    timeRange: (f = msg.getTimeRange()) && base_pb.TimeRange.toObject(includeInstance, f),
    errorsOnly: jspb.Message.getFieldWithDefault(msg, 7, false),
    unbundledEvents: jspb.Message.getFieldWithDefault(msg, 8, false),
    includeResolvedEvents: jspb.Message.getFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.EventSelection}
 */
proto.hiber.event.EventSelection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.EventSelection;
  return proto.hiber.event.EventSelection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.EventSelection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.EventSelection}
 */
proto.hiber.event.EventSelection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_pb.Filter.Events;
      reader.readMessage(value,base_pb.Filter.Events.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    case 2:
      var value = new base_pb.Filter.Modems;
      reader.readMessage(value,base_pb.Filter.Modems.deserializeBinaryFromReader);
      msg.setModems(value);
      break;
    case 3:
      var value = new base_pb.Filter.Publishers;
      reader.readMessage(value,base_pb.Filter.Publishers.deserializeBinaryFromReader);
      msg.setPublishers(value);
      break;
    case 4:
      var value = new base_pb.Filter.Tags;
      reader.readMessage(value,base_pb.Filter.Tags.deserializeBinaryFromReader);
      msg.setTags(value);
      break;
    case 6:
      var value = new base_pb.TimeRange;
      reader.readMessage(value,base_pb.TimeRange.deserializeBinaryFromReader);
      msg.setTimeRange(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setErrorsOnly(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnbundledEvents(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeResolvedEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.EventSelection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.EventSelection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.EventSelection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.EventSelection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_pb.Filter.Events.serializeBinaryToWriter
    );
  }
  f = message.getModems();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_pb.Filter.Modems.serializeBinaryToWriter
    );
  }
  f = message.getPublishers();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Filter.Publishers.serializeBinaryToWriter
    );
  }
  f = message.getTags();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.Filter.Tags.serializeBinaryToWriter
    );
  }
  f = message.getTimeRange();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      base_pb.TimeRange.serializeBinaryToWriter
    );
  }
  f = message.getErrorsOnly();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUnbundledEvents();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIncludeResolvedEvents();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional hiber.Filter.Events events = 1;
 * @return {?proto.hiber.Filter.Events}
 */
proto.hiber.event.EventSelection.prototype.getEvents = function() {
  return /** @type{?proto.hiber.Filter.Events} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Events, 1));
};


/** @param {?proto.hiber.Filter.Events|undefined} value */
proto.hiber.event.EventSelection.prototype.setEvents = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hiber.event.EventSelection.prototype.clearEvents = function() {
  this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional hiber.Filter.Modems modems = 2;
 * @return {?proto.hiber.Filter.Modems}
 */
proto.hiber.event.EventSelection.prototype.getModems = function() {
  return /** @type{?proto.hiber.Filter.Modems} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Modems, 2));
};


/** @param {?proto.hiber.Filter.Modems|undefined} value */
proto.hiber.event.EventSelection.prototype.setModems = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.EventSelection.prototype.clearModems = function() {
  this.setModems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.hasModems = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional hiber.Filter.Publishers publishers = 3;
 * @return {?proto.hiber.Filter.Publishers}
 */
proto.hiber.event.EventSelection.prototype.getPublishers = function() {
  return /** @type{?proto.hiber.Filter.Publishers} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Publishers, 3));
};


/** @param {?proto.hiber.Filter.Publishers|undefined} value */
proto.hiber.event.EventSelection.prototype.setPublishers = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.EventSelection.prototype.clearPublishers = function() {
  this.setPublishers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.hasPublishers = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional hiber.Filter.Tags tags = 4;
 * @return {?proto.hiber.Filter.Tags}
 */
proto.hiber.event.EventSelection.prototype.getTags = function() {
  return /** @type{?proto.hiber.Filter.Tags} */ (
    jspb.Message.getWrapperField(this, base_pb.Filter.Tags, 4));
};


/** @param {?proto.hiber.Filter.Tags|undefined} value */
proto.hiber.event.EventSelection.prototype.setTags = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.event.EventSelection.prototype.clearTags = function() {
  this.setTags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.hasTags = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional hiber.TimeRange time_range = 6;
 * @return {?proto.hiber.TimeRange}
 */
proto.hiber.event.EventSelection.prototype.getTimeRange = function() {
  return /** @type{?proto.hiber.TimeRange} */ (
    jspb.Message.getWrapperField(this, base_pb.TimeRange, 6));
};


/** @param {?proto.hiber.TimeRange|undefined} value */
proto.hiber.event.EventSelection.prototype.setTimeRange = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hiber.event.EventSelection.prototype.clearTimeRange = function() {
  this.setTimeRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.hasTimeRange = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool errors_only = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.getErrorsOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.hiber.event.EventSelection.prototype.setErrorsOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool unbundled_events = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.getUnbundledEvents = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.hiber.event.EventSelection.prototype.setUnbundledEvents = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool include_resolved_events = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.hiber.event.EventSelection.prototype.getIncludeResolvedEvents = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.hiber.event.EventSelection.prototype.setIncludeResolvedEvents = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.ListEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.ListEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.ListEventsRequest.displayName = 'proto.hiber.event.ListEventsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.ListEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.ListEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.ListEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selection: (f = msg.getSelection()) && proto.hiber.event.EventSelection.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && base_pb.Pagination.toObject(includeInstance, f),
    sort: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.ListEventsRequest}
 */
proto.hiber.event.ListEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.ListEventsRequest;
  return proto.hiber.event.ListEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.ListEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.ListEventsRequest}
 */
proto.hiber.event.ListEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new proto.hiber.event.EventSelection;
      reader.readMessage(value,proto.hiber.event.EventSelection.deserializeBinaryFromReader);
      msg.setSelection(value);
      break;
    case 3:
      var value = new base_pb.Pagination;
      reader.readMessage(value,base_pb.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 4:
      var value = /** @type {!proto.hiber.event.ListEventsRequest.Sort} */ (reader.readEnum());
      msg.setSort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.ListEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.ListEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.ListEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.hiber.event.EventSelection.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Pagination.serializeBinaryToWriter
    );
  }
  f = message.getSort();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.hiber.event.ListEventsRequest.Sort = {
  TIME_DESCENDING: 0,
  TIME_ASCENDING: 1,
  MODEM_NUMBER_ASC: 2,
  MODEM_NUMBER_DESC: 3,
  MODEM_NUMBER_SPECIFIED: 4
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.ListEventsRequest.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.ListEventsRequest.Response.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.ListEventsRequest.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.ListEventsRequest.Response.displayName = 'proto.hiber.event.ListEventsRequest.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.ListEventsRequest.Response.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.ListEventsRequest.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.ListEventsRequest.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.hiber.event.ListEventsRequest.toObject(includeInstance, f),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.hiber.event.BundledEvent.toObject, includeInstance),
    unbundledEventsList: jspb.Message.toObjectList(msg.getUnbundledEventsList(),
    proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.ListEventsRequest.Response}
 */
proto.hiber.event.ListEventsRequest.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.ListEventsRequest.Response;
  return proto.hiber.event.ListEventsRequest.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.ListEventsRequest.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.ListEventsRequest.Response}
 */
proto.hiber.event.ListEventsRequest.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.hiber.event.ListEventsRequest;
      reader.readMessage(value,proto.hiber.event.ListEventsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 4:
      var value = new proto.hiber.event.BundledEvent;
      reader.readMessage(value,proto.hiber.event.BundledEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 5:
      var value = new proto.hiber.event.ListEventsRequest.Response.EventTypeResponse;
      reader.readMessage(value,proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.deserializeBinaryFromReader);
      msg.addUnbundledEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.ListEventsRequest.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.ListEventsRequest.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.hiber.event.ListEventsRequest.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.hiber.event.BundledEvent.serializeBinaryToWriter
    );
  }
  f = message.getUnbundledEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.hiber.event.ListEventsRequest.Response.EventTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.displayName = 'proto.hiber.event.ListEventsRequest.Response.EventTypeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unbundledEventsList: jspb.Message.toObjectList(msg.getUnbundledEventsList(),
    proto.hiber.event.Event.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && base_pb.Pagination.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.ListEventsRequest.Response.EventTypeResponse;
  return proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.hiber.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.hiber.event.Event;
      reader.readMessage(value,proto.hiber.event.Event.deserializeBinaryFromReader);
      msg.addUnbundledEvents(value);
      break;
    case 3:
      var value = new base_pb.Pagination.Result;
      reader.readMessage(value,base_pb.Pagination.Result.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUnbundledEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.hiber.event.Event.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.Pagination.Result.serializeBinaryToWriter
    );
  }
};


/**
 * optional hiber.EventType type = 1;
 * @return {!proto.hiber.EventType}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.getType = function() {
  return /** @type {!proto.hiber.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.hiber.EventType} value */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Event unbundled_events = 2;
 * @return {!Array<!proto.hiber.event.Event>}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.getUnbundledEventsList = function() {
  return /** @type{!Array<!proto.hiber.event.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.hiber.event.Event, 2));
};


/** @param {!Array<!proto.hiber.event.Event>} value */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.setUnbundledEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.hiber.event.Event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.event.Event}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.addUnbundledEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.hiber.event.Event, opt_index);
};


proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.clearUnbundledEventsList = function() {
  this.setUnbundledEventsList([]);
};


/**
 * optional hiber.Pagination.Result pagination = 3;
 * @return {?proto.hiber.Pagination.Result}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.getPagination = function() {
  return /** @type{?proto.hiber.Pagination.Result} */ (
    jspb.Message.getWrapperField(this, base_pb.Pagination.Result, 3));
};


/** @param {?proto.hiber.Pagination.Result|undefined} value */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.ListEventsRequest.Response.EventTypeResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ListEventsRequest request = 2;
 * @return {?proto.hiber.event.ListEventsRequest}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.getRequest = function() {
  return /** @type{?proto.hiber.event.ListEventsRequest} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.ListEventsRequest, 2));
};


/** @param {?proto.hiber.event.ListEventsRequest|undefined} value */
proto.hiber.event.ListEventsRequest.Response.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.ListEventsRequest.Response.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated BundledEvent events = 4;
 * @return {!Array<!proto.hiber.event.BundledEvent>}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.hiber.event.BundledEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.hiber.event.BundledEvent, 4));
};


/** @param {!Array<!proto.hiber.event.BundledEvent>} value */
proto.hiber.event.ListEventsRequest.Response.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hiber.event.BundledEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.event.BundledEvent}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hiber.event.BundledEvent, opt_index);
};


proto.hiber.event.ListEventsRequest.Response.prototype.clearEventsList = function() {
  this.setEventsList([]);
};


/**
 * repeated EventTypeResponse unbundled_events = 5;
 * @return {!Array<!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse>}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.getUnbundledEventsList = function() {
  return /** @type{!Array<!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.hiber.event.ListEventsRequest.Response.EventTypeResponse, 5));
};


/** @param {!Array<!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse>} value */
proto.hiber.event.ListEventsRequest.Response.prototype.setUnbundledEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.event.ListEventsRequest.Response.EventTypeResponse}
 */
proto.hiber.event.ListEventsRequest.Response.prototype.addUnbundledEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hiber.event.ListEventsRequest.Response.EventTypeResponse, opt_index);
};


proto.hiber.event.ListEventsRequest.Response.prototype.clearUnbundledEventsList = function() {
  this.setUnbundledEventsList([]);
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.ListEventsRequest.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.ListEventsRequest.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventSelection selection = 2;
 * @return {?proto.hiber.event.EventSelection}
 */
proto.hiber.event.ListEventsRequest.prototype.getSelection = function() {
  return /** @type{?proto.hiber.event.EventSelection} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.EventSelection, 2));
};


/** @param {?proto.hiber.event.EventSelection|undefined} value */
proto.hiber.event.ListEventsRequest.prototype.setSelection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.ListEventsRequest.prototype.clearSelection = function() {
  this.setSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.ListEventsRequest.prototype.hasSelection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional hiber.Pagination pagination = 3;
 * @return {?proto.hiber.Pagination}
 */
proto.hiber.event.ListEventsRequest.prototype.getPagination = function() {
  return /** @type{?proto.hiber.Pagination} */ (
    jspb.Message.getWrapperField(this, base_pb.Pagination, 3));
};


/** @param {?proto.hiber.Pagination|undefined} value */
proto.hiber.event.ListEventsRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.event.ListEventsRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.ListEventsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Sort sort = 4;
 * @return {!proto.hiber.event.ListEventsRequest.Sort}
 */
proto.hiber.event.ListEventsRequest.prototype.getSort = function() {
  return /** @type {!proto.hiber.event.ListEventsRequest.Sort} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.hiber.event.ListEventsRequest.Sort} value */
proto.hiber.event.ListEventsRequest.prototype.setSort = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hiber.event.EventStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.event.EventStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.event.EventStreamRequest.displayName = 'proto.hiber.event.EventStreamRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hiber.event.EventStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.event.EventStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.event.EventStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.EventStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selection: (f = msg.getSelection()) && proto.hiber.event.EventSelection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hiber.event.EventStreamRequest}
 */
proto.hiber.event.EventStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.event.EventStreamRequest;
  return proto.hiber.event.EventStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.event.EventStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.event.EventStreamRequest}
 */
proto.hiber.event.EventStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 2:
      var value = new proto.hiber.event.EventSelection;
      reader.readMessage(value,proto.hiber.event.EventSelection.deserializeBinaryFromReader);
      msg.setSelection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hiber.event.EventStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.event.EventStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.event.EventStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.event.EventStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.hiber.event.EventSelection.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.event.EventStreamRequest.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.event.EventStreamRequest.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventSelection selection = 2;
 * @return {?proto.hiber.event.EventSelection}
 */
proto.hiber.event.EventStreamRequest.prototype.getSelection = function() {
  return /** @type{?proto.hiber.event.EventSelection} */ (
    jspb.Message.getWrapperField(this, proto.hiber.event.EventSelection, 2));
};


/** @param {?proto.hiber.event.EventSelection|undefined} value */
proto.hiber.event.EventStreamRequest.prototype.setSelection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.event.EventStreamRequest.prototype.clearSelection = function() {
  this.setSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.event.EventStreamRequest.prototype.hasSelection = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.hiber.event);
