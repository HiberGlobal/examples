# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: email_notifications.proto

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
import tag_pb2 as tag__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='email_notifications.proto',
  package='hiber.email',
  syntax='proto3',
  serialized_pb=_b('\n\x19\x65mail_notifications.proto\x12\x0bhiber.email\x1a\nbase.proto\x1a\ttag.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xec\x02\n\x1c\x45mailNotificationPreferences\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x33\n\x15\x65nabled_notifications\x18\x02 \x01(\x0b\x32\x14.hiber.Filter.Events\x12+\n\rfilter_modems\x18\x03 \x01(\x0b\x32\x14.hiber.Filter.Modems\x12\'\n\x0b\x66ilter_tags\x18\x04 \x01(\x0b\x32\x12.hiber.Filter.Tags\x12\x11\n\x07user_id\x18\x05 \x01(\tH\x00\x12K\n\x06\x63ustom\x18\x06 \x01(\x0b\x32\x39.hiber.email.EmailNotificationPreferences.CustomRecipientH\x00\x12\x0e\n\x06\x61\x63tive\x18\x07 \x01(\x08\x1a.\n\x0f\x43ustomRecipient\x12\r\n\x05\x65mail\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\tB\x0b\n\trecipient\"\xf0\x02\n\'ListEmailNotificationPreferencesRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x14\n\x0csearch_email\x18\x02 \x01(\t\x12*\n\"include_personal_email_preferences\x18\x03 \x01(\x08\x12%\n\npagination\x18\x04 \x01(\x0b\x32\x11.hiber.Pagination\x1a\xc5\x01\n\x08Response\x12\x44\n\x11\x65mail_preferences\x18\x01 \x03(\x0b\x32).hiber.email.EmailNotificationPreferences\x12\x45\n\x07request\x18\x02 \x01(\x0b\x32\x34.hiber.email.ListEmailNotificationPreferencesRequest\x12,\n\npagination\x18\x03 \x01(\x0b\x32\x18.hiber.Pagination.Result\"N\n\'ViewEmailNotificationPreferencesRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\"\xac\x02\n)UpdateEmailNotificationPreferencesRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12I\n\x06\x63ustom\x18\x02 \x01(\x0b\x32\x39.hiber.email.EmailNotificationPreferences.CustomRecipient\x12:\n\x15\x65nabled_notifications\x18\x03 \x01(\x0b\x32\x1b.hiber.Filter.Events.Update\x12\x32\n\rfilter_modems\x18\x04 \x01(\x0b\x32\x1b.hiber.Filter.Modems.Update\x12.\n\x0b\x66ilter_tags\x18\x05 \x01(\x0b\x32\x19.hiber.Filter.Tags.Update\"\x9b\x01\n,RemoveAllEmailNotificationPreferencesRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12I\n\x06\x63ustom\x18\x02 \x01(\x0b\x32\x39.hiber.email.EmailNotificationPreferences.CustomRecipient\x1a\n\n\x08Response\"T\n\x15\x45mailHistorySelection\x12$\n\ntime_range\x18\x01 \x01(\x0b\x32\x10.hiber.TimeRange\x12\x15\n\ronly_failures\x18\x02 \x01(\x08\"\x82\x04\n\x1f\x45mailNotificationHistoryRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12I\n\x06\x63ustom\x18\x02 \x01(\x0b\x32\x39.hiber.email.EmailNotificationPreferences.CustomRecipient\x12\x35\n\tselection\x18\x03 \x01(\x0b\x32\".hiber.email.EmailHistorySelection\x12%\n\npagination\x18\x04 \x01(\x0b\x32\x11.hiber.Pagination\x1a\x9f\x02\n\x08Response\x12K\n\x06\x65mails\x18\x01 \x03(\x0b\x32;.hiber.email.EmailNotificationHistoryRequest.Response.Email\x12=\n\x07request\x18\x02 \x01(\x0b\x32,.hiber.email.EmailNotificationHistoryRequest\x12,\n\npagination\x18\x03 \x01(\x0b\x32\x18.hiber.Pagination.Result\x1aY\n\x05\x45mail\x12\x1e\n\x04time\x18\x01 \x01(\x0b\x32\x10.hiber.Timestamp\x12\r\n\x05title\x18\x02 \x01(\t\x12\x12\n\nsuccessful\x18\x04 \x01(\x08\x12\r\n\x05\x65rror\x18\x05 \x01(\t2\xf2\x04\n#EmailNotificationPreferencesService\x12{\n\x04List\x12\x34.hiber.email.ListEmailNotificationPreferencesRequest\x1a=.hiber.email.ListEmailNotificationPreferencesRequest.Response\x12g\n\x04View\x12\x34.hiber.email.ViewEmailNotificationPreferencesRequest\x1a).hiber.email.EmailNotificationPreferences\x12k\n\x06Update\x12\x36.hiber.email.UpdateEmailNotificationPreferencesRequest\x1a).hiber.email.EmailNotificationPreferences\x12\x87\x01\n\x06\x44\x65lete\x12\x39.hiber.email.RemoveAllEmailNotificationPreferencesRequest\x1a\x42.hiber.email.RemoveAllEmailNotificationPreferencesRequest.Response\x12n\n\x07History\x12,.hiber.email.EmailNotificationHistoryRequest\x1a\x35.hiber.email.EmailNotificationHistoryRequest.ResponseB=\n\x1bglobal.hiber.api.grpc.emailB\x15\x45mailNotificationsApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,tag__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT = _descriptor.Descriptor(
  name='CustomRecipient',
  full_name='hiber.email.EmailNotificationPreferences.CustomRecipient',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='email', full_name='hiber.email.EmailNotificationPreferences.CustomRecipient.email', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.email.EmailNotificationPreferences.CustomRecipient.name', index=1,
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
  serialized_start=404,
  serialized_end=450,
)

_EMAILNOTIFICATIONPREFERENCES = _descriptor.Descriptor(
  name='EmailNotificationPreferences',
  full_name='hiber.email.EmailNotificationPreferences',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.EmailNotificationPreferences.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='enabled_notifications', full_name='hiber.email.EmailNotificationPreferences.enabled_notifications', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter_modems', full_name='hiber.email.EmailNotificationPreferences.filter_modems', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter_tags', full_name='hiber.email.EmailNotificationPreferences.filter_tags', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='hiber.email.EmailNotificationPreferences.user_id', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='custom', full_name='hiber.email.EmailNotificationPreferences.custom', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='active', full_name='hiber.email.EmailNotificationPreferences.active', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='recipient', full_name='hiber.email.EmailNotificationPreferences.recipient',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=99,
  serialized_end=463,
)


_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.email.ListEmailNotificationPreferencesRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='email_preferences', full_name='hiber.email.ListEmailNotificationPreferencesRequest.Response.email_preferences', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.email.ListEmailNotificationPreferencesRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.email.ListEmailNotificationPreferencesRequest.Response.pagination', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=637,
  serialized_end=834,
)

_LISTEMAILNOTIFICATIONPREFERENCESREQUEST = _descriptor.Descriptor(
  name='ListEmailNotificationPreferencesRequest',
  full_name='hiber.email.ListEmailNotificationPreferencesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.ListEmailNotificationPreferencesRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='search_email', full_name='hiber.email.ListEmailNotificationPreferencesRequest.search_email', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='include_personal_email_preferences', full_name='hiber.email.ListEmailNotificationPreferencesRequest.include_personal_email_preferences', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.email.ListEmailNotificationPreferencesRequest.pagination', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=466,
  serialized_end=834,
)


_VIEWEMAILNOTIFICATIONPREFERENCESREQUEST = _descriptor.Descriptor(
  name='ViewEmailNotificationPreferencesRequest',
  full_name='hiber.email.ViewEmailNotificationPreferencesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.ViewEmailNotificationPreferencesRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='email', full_name='hiber.email.ViewEmailNotificationPreferencesRequest.email', index=1,
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
  serialized_start=836,
  serialized_end=914,
)


_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST = _descriptor.Descriptor(
  name='UpdateEmailNotificationPreferencesRequest',
  full_name='hiber.email.UpdateEmailNotificationPreferencesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.UpdateEmailNotificationPreferencesRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='custom', full_name='hiber.email.UpdateEmailNotificationPreferencesRequest.custom', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='enabled_notifications', full_name='hiber.email.UpdateEmailNotificationPreferencesRequest.enabled_notifications', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter_modems', full_name='hiber.email.UpdateEmailNotificationPreferencesRequest.filter_modems', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter_tags', full_name='hiber.email.UpdateEmailNotificationPreferencesRequest.filter_tags', index=4,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=917,
  serialized_end=1217,
)


_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.email.RemoveAllEmailNotificationPreferencesRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=637,
  serialized_end=647,
)

_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST = _descriptor.Descriptor(
  name='RemoveAllEmailNotificationPreferencesRequest',
  full_name='hiber.email.RemoveAllEmailNotificationPreferencesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.RemoveAllEmailNotificationPreferencesRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='custom', full_name='hiber.email.RemoveAllEmailNotificationPreferencesRequest.custom', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1220,
  serialized_end=1375,
)


_EMAILHISTORYSELECTION = _descriptor.Descriptor(
  name='EmailHistorySelection',
  full_name='hiber.email.EmailHistorySelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='time_range', full_name='hiber.email.EmailHistorySelection.time_range', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='only_failures', full_name='hiber.email.EmailHistorySelection.only_failures', index=1,
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
  serialized_start=1377,
  serialized_end=1461,
)


_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL = _descriptor.Descriptor(
  name='Email',
  full_name='hiber.email.EmailNotificationHistoryRequest.Response.Email',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='time', full_name='hiber.email.EmailNotificationHistoryRequest.Response.Email.time', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='title', full_name='hiber.email.EmailNotificationHistoryRequest.Response.Email.title', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='successful', full_name='hiber.email.EmailNotificationHistoryRequest.Response.Email.successful', index=2,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='error', full_name='hiber.email.EmailNotificationHistoryRequest.Response.Email.error', index=3,
      number=5, type=9, cpp_type=9, label=1,
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
  serialized_start=1889,
  serialized_end=1978,
)

_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.email.EmailNotificationHistoryRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='emails', full_name='hiber.email.EmailNotificationHistoryRequest.Response.emails', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.email.EmailNotificationHistoryRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.email.EmailNotificationHistoryRequest.Response.pagination', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1691,
  serialized_end=1978,
)

_EMAILNOTIFICATIONHISTORYREQUEST = _descriptor.Descriptor(
  name='EmailNotificationHistoryRequest',
  full_name='hiber.email.EmailNotificationHistoryRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.email.EmailNotificationHistoryRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='custom', full_name='hiber.email.EmailNotificationHistoryRequest.custom', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.email.EmailNotificationHistoryRequest.selection', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.email.EmailNotificationHistoryRequest.pagination', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1464,
  serialized_end=1978,
)

_EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT.containing_type = _EMAILNOTIFICATIONPREFERENCES
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['enabled_notifications'].message_type = base__pb2._FILTER_EVENTS
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['filter_modems'].message_type = base__pb2._FILTER_MODEMS
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['filter_tags'].message_type = base__pb2._FILTER_TAGS
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['custom'].message_type = _EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT
_EMAILNOTIFICATIONPREFERENCES.oneofs_by_name['recipient'].fields.append(
  _EMAILNOTIFICATIONPREFERENCES.fields_by_name['user_id'])
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['user_id'].containing_oneof = _EMAILNOTIFICATIONPREFERENCES.oneofs_by_name['recipient']
_EMAILNOTIFICATIONPREFERENCES.oneofs_by_name['recipient'].fields.append(
  _EMAILNOTIFICATIONPREFERENCES.fields_by_name['custom'])
_EMAILNOTIFICATIONPREFERENCES.fields_by_name['custom'].containing_oneof = _EMAILNOTIFICATIONPREFERENCES.oneofs_by_name['recipient']
_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE.fields_by_name['email_preferences'].message_type = _EMAILNOTIFICATIONPREFERENCES
_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE.fields_by_name['request'].message_type = _LISTEMAILNOTIFICATIONPREFERENCESREQUEST
_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE.fields_by_name['pagination'].message_type = base__pb2._PAGINATION_RESULT
_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE.containing_type = _LISTEMAILNOTIFICATIONPREFERENCESREQUEST
_LISTEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['pagination'].message_type = base__pb2._PAGINATION
_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['custom'].message_type = _EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT
_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['enabled_notifications'].message_type = base__pb2._FILTER_EVENTS_UPDATE
_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['filter_modems'].message_type = base__pb2._FILTER_MODEMS_UPDATE
_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['filter_tags'].message_type = base__pb2._FILTER_TAGS_UPDATE
_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE.containing_type = _REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST
_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST.fields_by_name['custom'].message_type = _EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT
_EMAILHISTORYSELECTION.fields_by_name['time_range'].message_type = base__pb2._TIMERANGE
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL.fields_by_name['time'].message_type = base__pb2._TIMESTAMP
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL.containing_type = _EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE.fields_by_name['emails'].message_type = _EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE.fields_by_name['request'].message_type = _EMAILNOTIFICATIONHISTORYREQUEST
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE.fields_by_name['pagination'].message_type = base__pb2._PAGINATION_RESULT
_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE.containing_type = _EMAILNOTIFICATIONHISTORYREQUEST
_EMAILNOTIFICATIONHISTORYREQUEST.fields_by_name['custom'].message_type = _EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT
_EMAILNOTIFICATIONHISTORYREQUEST.fields_by_name['selection'].message_type = _EMAILHISTORYSELECTION
_EMAILNOTIFICATIONHISTORYREQUEST.fields_by_name['pagination'].message_type = base__pb2._PAGINATION
DESCRIPTOR.message_types_by_name['EmailNotificationPreferences'] = _EMAILNOTIFICATIONPREFERENCES
DESCRIPTOR.message_types_by_name['ListEmailNotificationPreferencesRequest'] = _LISTEMAILNOTIFICATIONPREFERENCESREQUEST
DESCRIPTOR.message_types_by_name['ViewEmailNotificationPreferencesRequest'] = _VIEWEMAILNOTIFICATIONPREFERENCESREQUEST
DESCRIPTOR.message_types_by_name['UpdateEmailNotificationPreferencesRequest'] = _UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST
DESCRIPTOR.message_types_by_name['RemoveAllEmailNotificationPreferencesRequest'] = _REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST
DESCRIPTOR.message_types_by_name['EmailHistorySelection'] = _EMAILHISTORYSELECTION
DESCRIPTOR.message_types_by_name['EmailNotificationHistoryRequest'] = _EMAILNOTIFICATIONHISTORYREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

EmailNotificationPreferences = _reflection.GeneratedProtocolMessageType('EmailNotificationPreferences', (_message.Message,), dict(

  CustomRecipient = _reflection.GeneratedProtocolMessageType('CustomRecipient', (_message.Message,), dict(
    DESCRIPTOR = _EMAILNOTIFICATIONPREFERENCES_CUSTOMRECIPIENT,
    __module__ = 'email_notifications_pb2'
    # @@protoc_insertion_point(class_scope:hiber.email.EmailNotificationPreferences.CustomRecipient)
    ))
  ,
  DESCRIPTOR = _EMAILNOTIFICATIONPREFERENCES,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.EmailNotificationPreferences)
  ))
_sym_db.RegisterMessage(EmailNotificationPreferences)
_sym_db.RegisterMessage(EmailNotificationPreferences.CustomRecipient)

ListEmailNotificationPreferencesRequest = _reflection.GeneratedProtocolMessageType('ListEmailNotificationPreferencesRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE,
    __module__ = 'email_notifications_pb2'
    # @@protoc_insertion_point(class_scope:hiber.email.ListEmailNotificationPreferencesRequest.Response)
    ))
  ,
  DESCRIPTOR = _LISTEMAILNOTIFICATIONPREFERENCESREQUEST,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.ListEmailNotificationPreferencesRequest)
  ))
_sym_db.RegisterMessage(ListEmailNotificationPreferencesRequest)
_sym_db.RegisterMessage(ListEmailNotificationPreferencesRequest.Response)

ViewEmailNotificationPreferencesRequest = _reflection.GeneratedProtocolMessageType('ViewEmailNotificationPreferencesRequest', (_message.Message,), dict(
  DESCRIPTOR = _VIEWEMAILNOTIFICATIONPREFERENCESREQUEST,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.ViewEmailNotificationPreferencesRequest)
  ))
_sym_db.RegisterMessage(ViewEmailNotificationPreferencesRequest)

UpdateEmailNotificationPreferencesRequest = _reflection.GeneratedProtocolMessageType('UpdateEmailNotificationPreferencesRequest', (_message.Message,), dict(
  DESCRIPTOR = _UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.UpdateEmailNotificationPreferencesRequest)
  ))
_sym_db.RegisterMessage(UpdateEmailNotificationPreferencesRequest)

RemoveAllEmailNotificationPreferencesRequest = _reflection.GeneratedProtocolMessageType('RemoveAllEmailNotificationPreferencesRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE,
    __module__ = 'email_notifications_pb2'
    # @@protoc_insertion_point(class_scope:hiber.email.RemoveAllEmailNotificationPreferencesRequest.Response)
    ))
  ,
  DESCRIPTOR = _REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.RemoveAllEmailNotificationPreferencesRequest)
  ))
_sym_db.RegisterMessage(RemoveAllEmailNotificationPreferencesRequest)
_sym_db.RegisterMessage(RemoveAllEmailNotificationPreferencesRequest.Response)

EmailHistorySelection = _reflection.GeneratedProtocolMessageType('EmailHistorySelection', (_message.Message,), dict(
  DESCRIPTOR = _EMAILHISTORYSELECTION,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.EmailHistorySelection)
  ))
_sym_db.RegisterMessage(EmailHistorySelection)

EmailNotificationHistoryRequest = _reflection.GeneratedProtocolMessageType('EmailNotificationHistoryRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(

    Email = _reflection.GeneratedProtocolMessageType('Email', (_message.Message,), dict(
      DESCRIPTOR = _EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE_EMAIL,
      __module__ = 'email_notifications_pb2'
      # @@protoc_insertion_point(class_scope:hiber.email.EmailNotificationHistoryRequest.Response.Email)
      ))
    ,
    DESCRIPTOR = _EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE,
    __module__ = 'email_notifications_pb2'
    # @@protoc_insertion_point(class_scope:hiber.email.EmailNotificationHistoryRequest.Response)
    ))
  ,
  DESCRIPTOR = _EMAILNOTIFICATIONHISTORYREQUEST,
  __module__ = 'email_notifications_pb2'
  # @@protoc_insertion_point(class_scope:hiber.email.EmailNotificationHistoryRequest)
  ))
_sym_db.RegisterMessage(EmailNotificationHistoryRequest)
_sym_db.RegisterMessage(EmailNotificationHistoryRequest.Response)
_sym_db.RegisterMessage(EmailNotificationHistoryRequest.Response.Email)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\033global.hiber.api.grpc.emailB\025EmailNotificationsApiP\000Z\005hiber'))

_EMAILNOTIFICATIONPREFERENCESSERVICE = _descriptor.ServiceDescriptor(
  name='EmailNotificationPreferencesService',
  full_name='hiber.email.EmailNotificationPreferencesService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=1981,
  serialized_end=2607,
  methods=[
  _descriptor.MethodDescriptor(
    name='List',
    full_name='hiber.email.EmailNotificationPreferencesService.List',
    index=0,
    containing_service=None,
    input_type=_LISTEMAILNOTIFICATIONPREFERENCESREQUEST,
    output_type=_LISTEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='View',
    full_name='hiber.email.EmailNotificationPreferencesService.View',
    index=1,
    containing_service=None,
    input_type=_VIEWEMAILNOTIFICATIONPREFERENCESREQUEST,
    output_type=_EMAILNOTIFICATIONPREFERENCES,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Update',
    full_name='hiber.email.EmailNotificationPreferencesService.Update',
    index=2,
    containing_service=None,
    input_type=_UPDATEEMAILNOTIFICATIONPREFERENCESREQUEST,
    output_type=_EMAILNOTIFICATIONPREFERENCES,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='hiber.email.EmailNotificationPreferencesService.Delete',
    index=3,
    containing_service=None,
    input_type=_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST,
    output_type=_REMOVEALLEMAILNOTIFICATIONPREFERENCESREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='History',
    full_name='hiber.email.EmailNotificationPreferencesService.History',
    index=4,
    containing_service=None,
    input_type=_EMAILNOTIFICATIONHISTORYREQUEST,
    output_type=_EMAILNOTIFICATIONHISTORYREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_EMAILNOTIFICATIONPREFERENCESSERVICE)

DESCRIPTOR.services_by_name['EmailNotificationPreferencesService'] = _EMAILNOTIFICATIONPREFERENCESSERVICE

# @@protoc_insertion_point(module_scope)
