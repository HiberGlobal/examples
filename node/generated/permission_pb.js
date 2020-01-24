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

goog.exportSymbol('proto.hiber.OrganizationPermission', null, global);
goog.exportSymbol('proto.hiber.UserPermission', null, global);
/**
 * @enum {number}
 */
proto.hiber.OrganizationPermission = {
  PERMISSION_DEFAULT: 0,
  ORGANIZATION_CREATE: 1,
  ORGANIZATION_UPDATE: 2,
  ORGANIZATION_DELETE: 3,
  MODEMS: 10,
  MODEMS_UPDATE: 11,
  MODEMS_LICENSE_KEYS: 12,
  MODEMS_MESSAGE_BODY_PARSERS: 43,
  MODEMS_SECURE_NOTES: 42,
  MODEM_MESSAGES: 15,
  MODEM_MESSAGES_SEND_TEST_MESSAGES: 16,
  MODEM_MESSAGES_SEND_REAL_MESSAGES: 41,
  MODEM_TRANSFERS: 20,
  MODEM_TRANSFERS_SEND: 21,
  MODEM_TRANSFERS_PROCESS: 22,
  MODEM_CLAIM: 25,
  USERS: 30,
  USERS_MANAGE: 31,
  PUBLISHERS: 35,
  TOKENS: 36,
  CERTIFICATES: 38,
  CERTIFICATES_MANAGE: 39
};

/**
 * @enum {number}
 */
proto.hiber.UserPermission = {
  READ: 0,
  UPDATE: 1,
  REQUEST_ACCESS: 2,
  DELETE: 3
};

goog.object.extend(exports, proto.hiber);
