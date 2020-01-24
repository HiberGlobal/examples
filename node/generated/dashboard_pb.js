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

var map_pb = require('./map_pb.js');
goog.object.extend(proto, map_pb);
var modem_pb = require('./modem_pb.js');
goog.object.extend(proto, modem_pb);
var event_pb = require('./event_pb.js');
goog.object.extend(proto, event_pb);
goog.exportSymbol('proto.hiber.dashboard.DashboardRequest', null, global);
goog.exportSymbol('proto.hiber.dashboard.DashboardRequest.Response', null, global);

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
proto.hiber.dashboard.DashboardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hiber.dashboard.DashboardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.dashboard.DashboardRequest.displayName = 'proto.hiber.dashboard.DashboardRequest';
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
proto.hiber.dashboard.DashboardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.dashboard.DashboardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.dashboard.DashboardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.dashboard.DashboardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selection: (f = msg.getSelection()) && map_pb.MapSelection.toObject(includeInstance, f),
    messageCountSelection: (f = msg.getMessageCountSelection()) && modem_pb.ModemMessageSelection.toObject(includeInstance, f),
    eventSelection: (f = msg.getEventSelection()) && event_pb.EventSelection.toObject(includeInstance, f),
    timeZoneOffset: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timeZone: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.hiber.dashboard.DashboardRequest}
 */
proto.hiber.dashboard.DashboardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.dashboard.DashboardRequest;
  return proto.hiber.dashboard.DashboardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.dashboard.DashboardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.dashboard.DashboardRequest}
 */
proto.hiber.dashboard.DashboardRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new map_pb.MapSelection;
      reader.readMessage(value,map_pb.MapSelection.deserializeBinaryFromReader);
      msg.setSelection(value);
      break;
    case 3:
      var value = new modem_pb.ModemMessageSelection;
      reader.readMessage(value,modem_pb.ModemMessageSelection.deserializeBinaryFromReader);
      msg.setMessageCountSelection(value);
      break;
    case 4:
      var value = new event_pb.EventSelection;
      reader.readMessage(value,event_pb.EventSelection.deserializeBinaryFromReader);
      msg.setEventSelection(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeZoneOffset(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
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
proto.hiber.dashboard.DashboardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.dashboard.DashboardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.dashboard.DashboardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.dashboard.DashboardRequest.serializeBinaryToWriter = function(message, writer) {
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
      map_pb.MapSelection.serializeBinaryToWriter
    );
  }
  f = message.getMessageCountSelection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modem_pb.ModemMessageSelection.serializeBinaryToWriter
    );
  }
  f = message.getEventSelection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      event_pb.EventSelection.serializeBinaryToWriter
    );
  }
  f = message.getTimeZoneOffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
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
proto.hiber.dashboard.DashboardRequest.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hiber.dashboard.DashboardRequest.Response.repeatedFields_, null);
};
goog.inherits(proto.hiber.dashboard.DashboardRequest.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hiber.dashboard.DashboardRequest.Response.displayName = 'proto.hiber.dashboard.DashboardRequest.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hiber.dashboard.DashboardRequest.Response.repeatedFields_ = [1,2,3,8,9];



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
proto.hiber.dashboard.DashboardRequest.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.hiber.dashboard.DashboardRequest.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hiber.dashboard.DashboardRequest.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.dashboard.DashboardRequest.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundStationsList: jspb.Message.toObjectList(msg.getGroundStationsList(),
    map_pb.GroundStation.toObject, includeInstance),
    mapBlocksList: jspb.Message.toObjectList(msg.getMapBlocksList(),
    map_pb.MapBlock.toObject, includeInstance),
    messageCountPerDayList: jspb.Message.toObjectList(msg.getMessageCountPerDayList(),
    modem_pb.MessageCountRequest.Response.MessageCount.toObject, includeInstance),
    modemWarningCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    modemErrorCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    request: (f = msg.getRequest()) && proto.hiber.dashboard.DashboardRequest.toObject(includeInstance, f),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    event_pb.BundledEvent.toObject, includeInstance),
    satellitesList: jspb.Message.toObjectList(msg.getSatellitesList(),
    map_pb.Satellite.toObject, includeInstance)
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
 * @return {!proto.hiber.dashboard.DashboardRequest.Response}
 */
proto.hiber.dashboard.DashboardRequest.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hiber.dashboard.DashboardRequest.Response;
  return proto.hiber.dashboard.DashboardRequest.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hiber.dashboard.DashboardRequest.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hiber.dashboard.DashboardRequest.Response}
 */
proto.hiber.dashboard.DashboardRequest.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new map_pb.GroundStation;
      reader.readMessage(value,map_pb.GroundStation.deserializeBinaryFromReader);
      msg.addGroundStations(value);
      break;
    case 2:
      var value = new map_pb.MapBlock;
      reader.readMessage(value,map_pb.MapBlock.deserializeBinaryFromReader);
      msg.addMapBlocks(value);
      break;
    case 3:
      var value = new modem_pb.MessageCountRequest.Response.MessageCount;
      reader.readMessage(value,modem_pb.MessageCountRequest.Response.MessageCount.deserializeBinaryFromReader);
      msg.addMessageCountPerDay(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModemWarningCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModemErrorCount(value);
      break;
    case 7:
      var value = new proto.hiber.dashboard.DashboardRequest;
      reader.readMessage(value,proto.hiber.dashboard.DashboardRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 8:
      var value = new event_pb.BundledEvent;
      reader.readMessage(value,event_pb.BundledEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 9:
      var value = new map_pb.Satellite;
      reader.readMessage(value,map_pb.Satellite.deserializeBinaryFromReader);
      msg.addSatellites(value);
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
proto.hiber.dashboard.DashboardRequest.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hiber.dashboard.DashboardRequest.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hiber.dashboard.DashboardRequest.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hiber.dashboard.DashboardRequest.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundStationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      map_pb.GroundStation.serializeBinaryToWriter
    );
  }
  f = message.getMapBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      map_pb.MapBlock.serializeBinaryToWriter
    );
  }
  f = message.getMessageCountPerDayList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modem_pb.MessageCountRequest.Response.MessageCount.serializeBinaryToWriter
    );
  }
  f = message.getModemWarningCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getModemErrorCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.hiber.dashboard.DashboardRequest.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      event_pb.BundledEvent.serializeBinaryToWriter
    );
  }
  f = message.getSatellitesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      map_pb.Satellite.serializeBinaryToWriter
    );
  }
};


/**
 * repeated hiber.map.GroundStation ground_stations = 1;
 * @return {!Array<!proto.hiber.map.GroundStation>}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getGroundStationsList = function() {
  return /** @type{!Array<!proto.hiber.map.GroundStation>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_pb.GroundStation, 1));
};


/** @param {!Array<!proto.hiber.map.GroundStation>} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setGroundStationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.hiber.map.GroundStation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.map.GroundStation}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.addGroundStations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.hiber.map.GroundStation, opt_index);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearGroundStationsList = function() {
  this.setGroundStationsList([]);
};


/**
 * repeated hiber.map.MapBlock map_blocks = 2;
 * @return {!Array<!proto.hiber.map.MapBlock>}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getMapBlocksList = function() {
  return /** @type{!Array<!proto.hiber.map.MapBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_pb.MapBlock, 2));
};


/** @param {!Array<!proto.hiber.map.MapBlock>} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setMapBlocksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.hiber.map.MapBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.map.MapBlock}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.addMapBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.hiber.map.MapBlock, opt_index);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearMapBlocksList = function() {
  this.setMapBlocksList([]);
};


/**
 * repeated hiber.modem.MessageCountRequest.Response.MessageCount message_count_per_day = 3;
 * @return {!Array<!proto.hiber.modem.MessageCountRequest.Response.MessageCount>}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getMessageCountPerDayList = function() {
  return /** @type{!Array<!proto.hiber.modem.MessageCountRequest.Response.MessageCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, modem_pb.MessageCountRequest.Response.MessageCount, 3));
};


/** @param {!Array<!proto.hiber.modem.MessageCountRequest.Response.MessageCount>} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setMessageCountPerDayList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.hiber.modem.MessageCountRequest.Response.MessageCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.modem.MessageCountRequest.Response.MessageCount}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.addMessageCountPerDay = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.hiber.modem.MessageCountRequest.Response.MessageCount, opt_index);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearMessageCountPerDayList = function() {
  this.setMessageCountPerDayList([]);
};


/**
 * optional int32 modem_warning_count = 4;
 * @return {number}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getModemWarningCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setModemWarningCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 modem_error_count = 5;
 * @return {number}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getModemErrorCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setModemErrorCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional DashboardRequest request = 7;
 * @return {?proto.hiber.dashboard.DashboardRequest}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getRequest = function() {
  return /** @type{?proto.hiber.dashboard.DashboardRequest} */ (
    jspb.Message.getWrapperField(this, proto.hiber.dashboard.DashboardRequest, 7));
};


/** @param {?proto.hiber.dashboard.DashboardRequest|undefined} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated hiber.event.BundledEvent events = 8;
 * @return {!Array<!proto.hiber.event.BundledEvent>}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.hiber.event.BundledEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, event_pb.BundledEvent, 8));
};


/** @param {!Array<!proto.hiber.event.BundledEvent>} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.hiber.event.BundledEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.event.BundledEvent}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.hiber.event.BundledEvent, opt_index);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearEventsList = function() {
  this.setEventsList([]);
};


/**
 * repeated hiber.map.Satellite satellites = 9;
 * @return {!Array<!proto.hiber.map.Satellite>}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.getSatellitesList = function() {
  return /** @type{!Array<!proto.hiber.map.Satellite>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_pb.Satellite, 9));
};


/** @param {!Array<!proto.hiber.map.Satellite>} value */
proto.hiber.dashboard.DashboardRequest.Response.prototype.setSatellitesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.hiber.map.Satellite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hiber.map.Satellite}
 */
proto.hiber.dashboard.DashboardRequest.Response.prototype.addSatellites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.hiber.map.Satellite, opt_index);
};


proto.hiber.dashboard.DashboardRequest.Response.prototype.clearSatellitesList = function() {
  this.setSatellitesList([]);
};


/**
 * optional string organization = 1;
 * @return {string}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hiber.dashboard.DashboardRequest.prototype.setOrganization = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional hiber.map.MapSelection selection = 2;
 * @return {?proto.hiber.map.MapSelection}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getSelection = function() {
  return /** @type{?proto.hiber.map.MapSelection} */ (
    jspb.Message.getWrapperField(this, map_pb.MapSelection, 2));
};


/** @param {?proto.hiber.map.MapSelection|undefined} value */
proto.hiber.dashboard.DashboardRequest.prototype.setSelection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hiber.dashboard.DashboardRequest.prototype.clearSelection = function() {
  this.setSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.dashboard.DashboardRequest.prototype.hasSelection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional hiber.modem.ModemMessageSelection message_count_selection = 3;
 * @return {?proto.hiber.modem.ModemMessageSelection}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getMessageCountSelection = function() {
  return /** @type{?proto.hiber.modem.ModemMessageSelection} */ (
    jspb.Message.getWrapperField(this, modem_pb.ModemMessageSelection, 3));
};


/** @param {?proto.hiber.modem.ModemMessageSelection|undefined} value */
proto.hiber.dashboard.DashboardRequest.prototype.setMessageCountSelection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hiber.dashboard.DashboardRequest.prototype.clearMessageCountSelection = function() {
  this.setMessageCountSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.dashboard.DashboardRequest.prototype.hasMessageCountSelection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional hiber.event.EventSelection event_selection = 4;
 * @return {?proto.hiber.event.EventSelection}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getEventSelection = function() {
  return /** @type{?proto.hiber.event.EventSelection} */ (
    jspb.Message.getWrapperField(this, event_pb.EventSelection, 4));
};


/** @param {?proto.hiber.event.EventSelection|undefined} value */
proto.hiber.dashboard.DashboardRequest.prototype.setEventSelection = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hiber.dashboard.DashboardRequest.prototype.clearEventSelection = function() {
  this.setEventSelection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hiber.dashboard.DashboardRequest.prototype.hasEventSelection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 time_zone_offset = 5;
 * @return {number}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getTimeZoneOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.hiber.dashboard.DashboardRequest.prototype.setTimeZoneOffset = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string time_zone = 6;
 * @return {string}
 */
proto.hiber.dashboard.DashboardRequest.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.hiber.dashboard.DashboardRequest.prototype.setTimeZone = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.hiber.dashboard);
