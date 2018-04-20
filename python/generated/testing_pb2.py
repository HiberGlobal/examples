# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: testing.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import base_pb2 as base__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='testing.proto',
  package='hiber.testing',
  syntax='proto3',
  serialized_pb=_b('\n\rtesting.proto\x12\rhiber.testing\x1a\nbase.proto\"\xc6\x03\n\x18PushModemMessagesRequest\x12\x0f\n\x07\x61\x63\x63ount\x18\x01 \x01(\t\x12G\n\x08messages\x18\x02 \x03(\x0b\x32\x35.hiber.testing.PushModemMessagesRequest.MessageToPush\x1a\xd4\x01\n\x08Response\x12Y\n\rmessages_sent\x18\x01 \x03(\x0b\x32\x42.hiber.testing.PushModemMessagesRequest.Response.MessagesSentEntry\x12\x38\n\x07request\x18\x02 \x01(\x0b\x32\'.hiber.testing.PushModemMessagesRequest\x1a\x33\n\x11MessagesSentEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x05:\x02\x38\x01\x1ay\n\rMessageToPush\x12\x14\n\x0cmodem_number\x18\x01 \x01(\t\x12\x1e\n\x04time\x18\x02 \x01(\x0b\x32\x10.hiber.Timestamp\x12!\n\x08location\x18\x03 \x01(\x0b\x32\x0f.hiber.Location\x12\x0f\n\x07\x63ontent\x18\x04 \x01(\x0c\x32\x80\x01\n\x0eTestingService\x12n\n\x11PushModemMessages\x12\'.hiber.testing.PushModemMessagesRequest\x1a\x30.hiber.testing.PushModemMessagesRequest.ResponseB4\n\x1dglobal.hiber.api.grpc.testingB\nTestingApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,])




_PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY = _descriptor.Descriptor(
  name='MessagesSentEntry',
  full_name='hiber.testing.PushModemMessagesRequest.Response.MessagesSentEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='hiber.testing.PushModemMessagesRequest.Response.MessagesSentEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.testing.PushModemMessagesRequest.Response.MessagesSentEntry.value', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=325,
  serialized_end=376,
)

_PUSHMODEMMESSAGESREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.testing.PushModemMessagesRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='messages_sent', full_name='hiber.testing.PushModemMessagesRequest.Response.messages_sent', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.testing.PushModemMessagesRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=164,
  serialized_end=376,
)

_PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH = _descriptor.Descriptor(
  name='MessageToPush',
  full_name='hiber.testing.PushModemMessagesRequest.MessageToPush',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='modem_number', full_name='hiber.testing.PushModemMessagesRequest.MessageToPush.modem_number', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='time', full_name='hiber.testing.PushModemMessagesRequest.MessageToPush.time', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='location', full_name='hiber.testing.PushModemMessagesRequest.MessageToPush.location', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='content', full_name='hiber.testing.PushModemMessagesRequest.MessageToPush.content', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=378,
  serialized_end=499,
)

_PUSHMODEMMESSAGESREQUEST = _descriptor.Descriptor(
  name='PushModemMessagesRequest',
  full_name='hiber.testing.PushModemMessagesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='account', full_name='hiber.testing.PushModemMessagesRequest.account', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='messages', full_name='hiber.testing.PushModemMessagesRequest.messages', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_PUSHMODEMMESSAGESREQUEST_RESPONSE, _PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=45,
  serialized_end=499,
)

_PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY.containing_type = _PUSHMODEMMESSAGESREQUEST_RESPONSE
_PUSHMODEMMESSAGESREQUEST_RESPONSE.fields_by_name['messages_sent'].message_type = _PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY
_PUSHMODEMMESSAGESREQUEST_RESPONSE.fields_by_name['request'].message_type = _PUSHMODEMMESSAGESREQUEST
_PUSHMODEMMESSAGESREQUEST_RESPONSE.containing_type = _PUSHMODEMMESSAGESREQUEST
_PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH.fields_by_name['time'].message_type = base__pb2._TIMESTAMP
_PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH.fields_by_name['location'].message_type = base__pb2._LOCATION
_PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH.containing_type = _PUSHMODEMMESSAGESREQUEST
_PUSHMODEMMESSAGESREQUEST.fields_by_name['messages'].message_type = _PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH
DESCRIPTOR.message_types_by_name['PushModemMessagesRequest'] = _PUSHMODEMMESSAGESREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PushModemMessagesRequest = _reflection.GeneratedProtocolMessageType('PushModemMessagesRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(

    MessagesSentEntry = _reflection.GeneratedProtocolMessageType('MessagesSentEntry', (_message.Message,), dict(
      DESCRIPTOR = _PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY,
      __module__ = 'testing_pb2'
      # @@protoc_insertion_point(class_scope:hiber.testing.PushModemMessagesRequest.Response.MessagesSentEntry)
      ))
    ,
    DESCRIPTOR = _PUSHMODEMMESSAGESREQUEST_RESPONSE,
    __module__ = 'testing_pb2'
    # @@protoc_insertion_point(class_scope:hiber.testing.PushModemMessagesRequest.Response)
    ))
  ,

  MessageToPush = _reflection.GeneratedProtocolMessageType('MessageToPush', (_message.Message,), dict(
    DESCRIPTOR = _PUSHMODEMMESSAGESREQUEST_MESSAGETOPUSH,
    __module__ = 'testing_pb2'
    # @@protoc_insertion_point(class_scope:hiber.testing.PushModemMessagesRequest.MessageToPush)
    ))
  ,
  DESCRIPTOR = _PUSHMODEMMESSAGESREQUEST,
  __module__ = 'testing_pb2'
  # @@protoc_insertion_point(class_scope:hiber.testing.PushModemMessagesRequest)
  ))
_sym_db.RegisterMessage(PushModemMessagesRequest)
_sym_db.RegisterMessage(PushModemMessagesRequest.Response)
_sym_db.RegisterMessage(PushModemMessagesRequest.Response.MessagesSentEntry)
_sym_db.RegisterMessage(PushModemMessagesRequest.MessageToPush)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\035global.hiber.api.grpc.testingB\nTestingApiP\000Z\005hiber'))
_PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY.has_options = True
_PUSHMODEMMESSAGESREQUEST_RESPONSE_MESSAGESSENTENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))

_TESTINGSERVICE = _descriptor.ServiceDescriptor(
  name='TestingService',
  full_name='hiber.testing.TestingService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=502,
  serialized_end=630,
  methods=[
  _descriptor.MethodDescriptor(
    name='PushModemMessages',
    full_name='hiber.testing.TestingService.PushModemMessages',
    index=0,
    containing_service=None,
    input_type=_PUSHMODEMMESSAGESREQUEST,
    output_type=_PUSHMODEMMESSAGESREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TESTINGSERVICE)

DESCRIPTOR.services_by_name['TestingService'] = _TESTINGSERVICE

# @@protoc_insertion_point(module_scope)
