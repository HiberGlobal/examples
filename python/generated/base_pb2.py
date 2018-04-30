# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: base.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='base.proto',
  package='hiber',
  syntax='proto3',
  serialized_pb=_b('\n\nbase.proto\x12\x05hiber\x1a\x1fgoogle/protobuf/timestamp.proto\"3\n\x11UpdateZeroableInt\x12\x0f\n\x07updated\x18\x01 \x01(\x08\x12\r\n\x05value\x18\x02 \x01(\r\"7\n\x15UpdateClearableString\x12\x0f\n\x07updated\x18\x01 \x01(\x08\x12\r\n\x05value\x18\x02 \x01(\t\"/\n\rUpdateBoolean\x12\x0f\n\x07updated\x18\x01 \x01(\x08\x12\r\n\x05value\x18\x02 \x01(\x08\"K\n\tTimeRange\x12\x1f\n\x05start\x18\x01 \x01(\x0b\x32\x10.hiber.Timestamp\x12\x1d\n\x03\x65nd\x18\x02 \x01(\x0b\x32\x10.hiber.Timestamp\"K\n\tTimestamp\x12-\n\ttimestamp\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0f\n\x07textual\x18\x04 \x01(\t\"/\n\x08Location\x12\x10\n\x08latitude\x18\x01 \x01(\x01\x12\x11\n\tlongitude\x18\x02 \x01(\x01\"q\n\x04\x41rea\x12\x1f\n\x06\x63\x65nter\x18\x01 \x01(\x0b\x32\x0f.hiber.Location\x12$\n\x0b\x62ottom_left\x18\x02 \x01(\x0b\x32\x0f.hiber.Location\x12\"\n\ttop_right\x18\x04 \x01(\x0b\x32\x0f.hiber.Location\"\xb8\x01\n\nPagination\x12\x0c\n\x04size\x18\x01 \x01(\x05\x12\x0c\n\x04page\x18\x02 \x01(\x05\x1a\x8d\x01\n\x06Result\x12\x0c\n\x04size\x18\x01 \x01(\x05\x12\x0c\n\x04page\x18\x02 \x01(\x05\x12\r\n\x05total\x18\x03 \x01(\x05\x12\x12\n\ntotalPages\x18\x04 \x01(\x05\x12#\n\x08previous\x18\x06 \x01(\x0b\x32\x11.hiber.Pagination\x12\x1f\n\x04next\x18\x07 \x01(\x0b\x32\x11.hiber.Pagination\"\xe4\x02\n\x06\x46ilter\x1a\x46\n\rChildAccounts\x12\x13\n\x0binclude_all\x18\x01 \x01(\x08\x12\x0f\n\x07include\x18\x02 \x03(\t\x12\x0f\n\x07\x65xclude\x18\x03 \x03(\t\x1aN\n\x06\x45vents\x12!\n\x07include\x18\x01 \x03(\x0e\x32\x10.hiber.EventType\x12!\n\x07\x65xclude\x18\x02 \x03(\x0e\x32\x10.hiber.EventType\x1a*\n\x06Modems\x12\x0f\n\x07include\x18\x01 \x03(\t\x12\x0f\n\x07\x65xclude\x18\x02 \x03(\t\x1a(\n\x04Tags\x12\x0f\n\x07include\x18\x01 \x03(\x03\x12\x0f\n\x07\x65xclude\x18\x02 \x03(\x03\x1a\x41\n\x08Webhooks\x12\x0f\n\x07include\x18\x01 \x03(\x03\x12\x0f\n\x07\x65xclude\x18\x02 \x03(\x03\x12\x13\n\x0bonly_active\x18\x03 \x01(\x08\x1a)\n\x05Users\x12\x0f\n\x07include\x18\x01 \x03(\t\x12\x0f\n\x07\x65xclude\x18\x02 \x03(\t*\xe4\x02\n\tEventType\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x13\n\x0fWEBHOOK_CREATED\x10\x01\x12\x13\n\x0fWEBHOOK_UPDATED\x10\x02\x12\x13\n\x0fWEBHOOK_DELETED\x10\x03\x12\x1a\n\x16MODEM_LOCATION_UPDATED\x10\x04\x12\x1a\n\x16MODEM_MESSAGE_RECEIVED\x10\x05\x12\x17\n\x13USER_ACCESS_REQUEST\x10\x08\x12\x0e\n\nUSER_ADDED\x10\t\x12\x10\n\x0cUSER_REMOVED\x10\n\x12\x12\n\x0eWEBHOOK_FAILED\x10\x0b\x12\x13\n\x0f\x41\x43\x43OUNT_UPDATED\x10\x0c\x12\x1f\n\x1bMODEM_MESSAGE_SEQUENCE_SKIP\x10\r\x12\x19\n\x15MODEM_MESSAGE_DELAYED\x10\x0e\x12\"\n\x1eMODEM_MESSAGE_CANNOT_BE_PARSED\x10\x0f\x12\x0f\n\x0bMODEM_STALE\x10\x10*(\n\x06Health\x12\x06\n\x02OK\x10\x00\x12\x0b\n\x07WARNING\x10\x01\x12\t\n\x05\x45RROR\x10\x02\x42 \n\x15global.hiber.api.grpcP\x01Z\x05hiberb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])

_EVENTTYPE = _descriptor.EnumDescriptor(
  name='EventType',
  full_name='hiber.EventType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WEBHOOK_CREATED', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WEBHOOK_UPDATED', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WEBHOOK_DELETED', index=3, number=3,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_LOCATION_UPDATED', index=4, number=4,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_MESSAGE_RECEIVED', index=5, number=5,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='USER_ACCESS_REQUEST', index=6, number=8,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='USER_ADDED', index=7, number=9,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='USER_REMOVED', index=8, number=10,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WEBHOOK_FAILED', index=9, number=11,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ACCOUNT_UPDATED', index=10, number=12,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_MESSAGE_SEQUENCE_SKIP', index=11, number=13,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_MESSAGE_DELAYED', index=12, number=14,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_MESSAGE_CANNOT_BE_PARSED', index=13, number=15,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MODEM_STALE', index=14, number=16,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1078,
  serialized_end=1434,
)
_sym_db.RegisterEnumDescriptor(_EVENTTYPE)

EventType = enum_type_wrapper.EnumTypeWrapper(_EVENTTYPE)
_HEALTH = _descriptor.EnumDescriptor(
  name='Health',
  full_name='hiber.Health',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='OK', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WARNING', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ERROR', index=2, number=2,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1436,
  serialized_end=1476,
)
_sym_db.RegisterEnumDescriptor(_HEALTH)

Health = enum_type_wrapper.EnumTypeWrapper(_HEALTH)
DEFAULT = 0
WEBHOOK_CREATED = 1
WEBHOOK_UPDATED = 2
WEBHOOK_DELETED = 3
MODEM_LOCATION_UPDATED = 4
MODEM_MESSAGE_RECEIVED = 5
USER_ACCESS_REQUEST = 8
USER_ADDED = 9
USER_REMOVED = 10
WEBHOOK_FAILED = 11
ACCOUNT_UPDATED = 12
MODEM_MESSAGE_SEQUENCE_SKIP = 13
MODEM_MESSAGE_DELAYED = 14
MODEM_MESSAGE_CANNOT_BE_PARSED = 15
MODEM_STALE = 16
OK = 0
WARNING = 1
ERROR = 2



_UPDATEZEROABLEINT = _descriptor.Descriptor(
  name='UpdateZeroableInt',
  full_name='hiber.UpdateZeroableInt',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='updated', full_name='hiber.UpdateZeroableInt.updated', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.UpdateZeroableInt.value', index=1,
      number=2, type=13, cpp_type=3, label=1,
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
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=54,
  serialized_end=105,
)


_UPDATECLEARABLESTRING = _descriptor.Descriptor(
  name='UpdateClearableString',
  full_name='hiber.UpdateClearableString',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='updated', full_name='hiber.UpdateClearableString.updated', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.UpdateClearableString.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=107,
  serialized_end=162,
)


_UPDATEBOOLEAN = _descriptor.Descriptor(
  name='UpdateBoolean',
  full_name='hiber.UpdateBoolean',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='updated', full_name='hiber.UpdateBoolean.updated', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.UpdateBoolean.value', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  serialized_start=164,
  serialized_end=211,
)


_TIMERANGE = _descriptor.Descriptor(
  name='TimeRange',
  full_name='hiber.TimeRange',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='start', full_name='hiber.TimeRange.start', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='end', full_name='hiber.TimeRange.end', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=213,
  serialized_end=288,
)


_TIMESTAMP = _descriptor.Descriptor(
  name='Timestamp',
  full_name='hiber.Timestamp',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='hiber.Timestamp.timestamp', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='textual', full_name='hiber.Timestamp.textual', index=1,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=290,
  serialized_end=365,
)


_LOCATION = _descriptor.Descriptor(
  name='Location',
  full_name='hiber.Location',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='latitude', full_name='hiber.Location.latitude', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='longitude', full_name='hiber.Location.longitude', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
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
  serialized_start=367,
  serialized_end=414,
)


_AREA = _descriptor.Descriptor(
  name='Area',
  full_name='hiber.Area',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='center', full_name='hiber.Area.center', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bottom_left', full_name='hiber.Area.bottom_left', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='top_right', full_name='hiber.Area.top_right', index=2,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=416,
  serialized_end=529,
)


_PAGINATION_RESULT = _descriptor.Descriptor(
  name='Result',
  full_name='hiber.Pagination.Result',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='size', full_name='hiber.Pagination.Result.size', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='page', full_name='hiber.Pagination.Result.page', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='total', full_name='hiber.Pagination.Result.total', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalPages', full_name='hiber.Pagination.Result.totalPages', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='previous', full_name='hiber.Pagination.Result.previous', index=4,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='next', full_name='hiber.Pagination.Result.next', index=5,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=575,
  serialized_end=716,
)

_PAGINATION = _descriptor.Descriptor(
  name='Pagination',
  full_name='hiber.Pagination',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='size', full_name='hiber.Pagination.size', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='page', full_name='hiber.Pagination.page', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_PAGINATION_RESULT, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=532,
  serialized_end=716,
)


_FILTER_CHILDACCOUNTS = _descriptor.Descriptor(
  name='ChildAccounts',
  full_name='hiber.Filter.ChildAccounts',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include_all', full_name='hiber.Filter.ChildAccounts.include_all', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.ChildAccounts.include', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.ChildAccounts.exclude', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=729,
  serialized_end=799,
)

_FILTER_EVENTS = _descriptor.Descriptor(
  name='Events',
  full_name='hiber.Filter.Events',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.Events.include', index=0,
      number=1, type=14, cpp_type=8, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.Events.exclude', index=1,
      number=2, type=14, cpp_type=8, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=801,
  serialized_end=879,
)

_FILTER_MODEMS = _descriptor.Descriptor(
  name='Modems',
  full_name='hiber.Filter.Modems',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.Modems.include', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.Modems.exclude', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=881,
  serialized_end=923,
)

_FILTER_TAGS = _descriptor.Descriptor(
  name='Tags',
  full_name='hiber.Filter.Tags',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.Tags.include', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.Tags.exclude', index=1,
      number=2, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=925,
  serialized_end=965,
)

_FILTER_WEBHOOKS = _descriptor.Descriptor(
  name='Webhooks',
  full_name='hiber.Filter.Webhooks',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.Webhooks.include', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.Webhooks.exclude', index=1,
      number=2, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='only_active', full_name='hiber.Filter.Webhooks.only_active', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  serialized_start=967,
  serialized_end=1032,
)

_FILTER_USERS = _descriptor.Descriptor(
  name='Users',
  full_name='hiber.Filter.Users',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='include', full_name='hiber.Filter.Users.include', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='exclude', full_name='hiber.Filter.Users.exclude', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=1034,
  serialized_end=1075,
)

_FILTER = _descriptor.Descriptor(
  name='Filter',
  full_name='hiber.Filter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[_FILTER_CHILDACCOUNTS, _FILTER_EVENTS, _FILTER_MODEMS, _FILTER_TAGS, _FILTER_WEBHOOKS, _FILTER_USERS, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=719,
  serialized_end=1075,
)

_TIMERANGE.fields_by_name['start'].message_type = _TIMESTAMP
_TIMERANGE.fields_by_name['end'].message_type = _TIMESTAMP
_TIMESTAMP.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_AREA.fields_by_name['center'].message_type = _LOCATION
_AREA.fields_by_name['bottom_left'].message_type = _LOCATION
_AREA.fields_by_name['top_right'].message_type = _LOCATION
_PAGINATION_RESULT.fields_by_name['previous'].message_type = _PAGINATION
_PAGINATION_RESULT.fields_by_name['next'].message_type = _PAGINATION
_PAGINATION_RESULT.containing_type = _PAGINATION
_FILTER_CHILDACCOUNTS.containing_type = _FILTER
_FILTER_EVENTS.fields_by_name['include'].enum_type = _EVENTTYPE
_FILTER_EVENTS.fields_by_name['exclude'].enum_type = _EVENTTYPE
_FILTER_EVENTS.containing_type = _FILTER
_FILTER_MODEMS.containing_type = _FILTER
_FILTER_TAGS.containing_type = _FILTER
_FILTER_WEBHOOKS.containing_type = _FILTER
_FILTER_USERS.containing_type = _FILTER
DESCRIPTOR.message_types_by_name['UpdateZeroableInt'] = _UPDATEZEROABLEINT
DESCRIPTOR.message_types_by_name['UpdateClearableString'] = _UPDATECLEARABLESTRING
DESCRIPTOR.message_types_by_name['UpdateBoolean'] = _UPDATEBOOLEAN
DESCRIPTOR.message_types_by_name['TimeRange'] = _TIMERANGE
DESCRIPTOR.message_types_by_name['Timestamp'] = _TIMESTAMP
DESCRIPTOR.message_types_by_name['Location'] = _LOCATION
DESCRIPTOR.message_types_by_name['Area'] = _AREA
DESCRIPTOR.message_types_by_name['Pagination'] = _PAGINATION
DESCRIPTOR.message_types_by_name['Filter'] = _FILTER
DESCRIPTOR.enum_types_by_name['EventType'] = _EVENTTYPE
DESCRIPTOR.enum_types_by_name['Health'] = _HEALTH
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

UpdateZeroableInt = _reflection.GeneratedProtocolMessageType('UpdateZeroableInt', (_message.Message,), dict(
  DESCRIPTOR = _UPDATEZEROABLEINT,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.UpdateZeroableInt)
  ))
_sym_db.RegisterMessage(UpdateZeroableInt)

UpdateClearableString = _reflection.GeneratedProtocolMessageType('UpdateClearableString', (_message.Message,), dict(
  DESCRIPTOR = _UPDATECLEARABLESTRING,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.UpdateClearableString)
  ))
_sym_db.RegisterMessage(UpdateClearableString)

UpdateBoolean = _reflection.GeneratedProtocolMessageType('UpdateBoolean', (_message.Message,), dict(
  DESCRIPTOR = _UPDATEBOOLEAN,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.UpdateBoolean)
  ))
_sym_db.RegisterMessage(UpdateBoolean)

TimeRange = _reflection.GeneratedProtocolMessageType('TimeRange', (_message.Message,), dict(
  DESCRIPTOR = _TIMERANGE,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.TimeRange)
  ))
_sym_db.RegisterMessage(TimeRange)

Timestamp = _reflection.GeneratedProtocolMessageType('Timestamp', (_message.Message,), dict(
  DESCRIPTOR = _TIMESTAMP,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.Timestamp)
  ))
_sym_db.RegisterMessage(Timestamp)

Location = _reflection.GeneratedProtocolMessageType('Location', (_message.Message,), dict(
  DESCRIPTOR = _LOCATION,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.Location)
  ))
_sym_db.RegisterMessage(Location)

Area = _reflection.GeneratedProtocolMessageType('Area', (_message.Message,), dict(
  DESCRIPTOR = _AREA,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.Area)
  ))
_sym_db.RegisterMessage(Area)

Pagination = _reflection.GeneratedProtocolMessageType('Pagination', (_message.Message,), dict(

  Result = _reflection.GeneratedProtocolMessageType('Result', (_message.Message,), dict(
    DESCRIPTOR = _PAGINATION_RESULT,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Pagination.Result)
    ))
  ,
  DESCRIPTOR = _PAGINATION,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.Pagination)
  ))
_sym_db.RegisterMessage(Pagination)
_sym_db.RegisterMessage(Pagination.Result)

Filter = _reflection.GeneratedProtocolMessageType('Filter', (_message.Message,), dict(

  ChildAccounts = _reflection.GeneratedProtocolMessageType('ChildAccounts', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_CHILDACCOUNTS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.ChildAccounts)
    ))
  ,

  Events = _reflection.GeneratedProtocolMessageType('Events', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_EVENTS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.Events)
    ))
  ,

  Modems = _reflection.GeneratedProtocolMessageType('Modems', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_MODEMS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.Modems)
    ))
  ,

  Tags = _reflection.GeneratedProtocolMessageType('Tags', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_TAGS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.Tags)
    ))
  ,

  Webhooks = _reflection.GeneratedProtocolMessageType('Webhooks', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_WEBHOOKS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.Webhooks)
    ))
  ,

  Users = _reflection.GeneratedProtocolMessageType('Users', (_message.Message,), dict(
    DESCRIPTOR = _FILTER_USERS,
    __module__ = 'base_pb2'
    # @@protoc_insertion_point(class_scope:hiber.Filter.Users)
    ))
  ,
  DESCRIPTOR = _FILTER,
  __module__ = 'base_pb2'
  # @@protoc_insertion_point(class_scope:hiber.Filter)
  ))
_sym_db.RegisterMessage(Filter)
_sym_db.RegisterMessage(Filter.ChildAccounts)
_sym_db.RegisterMessage(Filter.Events)
_sym_db.RegisterMessage(Filter.Modems)
_sym_db.RegisterMessage(Filter.Tags)
_sym_db.RegisterMessage(Filter.Webhooks)
_sym_db.RegisterMessage(Filter.Users)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\025global.hiber.api.grpcP\001Z\005hiber'))
# @@protoc_insertion_point(module_scope)
