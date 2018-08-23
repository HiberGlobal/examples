# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tag.proto

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
  name='tag.proto',
  package='hiber.tag',
  syntax='proto3',
  serialized_pb=_b('\n\ttag.proto\x12\thiber.tag\x1a\nbase.proto\"S\n\x03Tag\x12\n\n\x02id\x18\x01 \x01(\x03\x12#\n\x05label\x18\x03 \x01(\x0b\x32\x14.hiber.tag.Tag.Label\x1a\x1b\n\x05Label\x12\x0c\n\x04name\x18\x01 \x01(\tJ\x04\x08\x02\x10\x03\"Q\n\x0cTagSelection\x12\x0e\n\x06search\x18\x01 \x03(\t\x12\r\n\x05names\x18\x02 \x03(\t\x12\"\n\x06\x66ilter\x18\x03 \x01(\x0b\x32\x12.hiber.Filter.Tags\"u\n\x11UpdateTagsForItem\x12\x16\n\x0etag_ids_to_add\x18\x01 \x03(\x03\x12\x19\n\x11tag_ids_to_remove\x18\x02 \x03(\x03\x12-\n\x0fnew_tags_to_add\x18\x03 \x03(\x0b\x32\x14.hiber.tag.Tag.Label\"\xeb\x03\n\x0fListTagsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12*\n\tselection\x18\x02 \x01(\x0b\x32\x17.hiber.tag.TagSelection\x12\x13\n\x0bmodem_count\x18\x03 \x01(\x08\x12\x15\n\rwebhook_count\x18\x04 \x01(\x08\x1a\xe9\x02\n\x08Response\x12\x1c\n\x04tags\x18\x01 \x03(\x0b\x32\x0e.hiber.tag.Tag\x12+\n\x07request\x18\x02 \x01(\x0b\x32\x1a.hiber.tag.ListTagsRequest\x12O\n\x0ftag_modem_count\x18\x03 \x03(\x0b\x32\x36.hiber.tag.ListTagsRequest.Response.TagModemCountEntry\x12S\n\x11tag_webhook_count\x18\x04 \x03(\x0b\x32\x38.hiber.tag.ListTagsRequest.Response.TagWebhookCountEntry\x1a\x34\n\x12TagModemCountEntry\x12\x0b\n\x03key\x18\x01 \x01(\x03\x12\r\n\x05value\x18\x02 \x01(\x05:\x02\x38\x01\x1a\x36\n\x14TagWebhookCountEntry\x12\x0b\n\x03key\x18\x01 \x01(\x03\x12\r\n\x05value\x18\x02 \x01(\x05:\x02\x38\x01\"N\n\x10\x43reateTagRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12$\n\x06\x63reate\x18\x02 \x01(\x0b\x32\x14.hiber.tag.Tag.Label\"Z\n\x10UpdateTagRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\n\n\x02id\x18\x02 \x01(\x03\x12$\n\x06update\x18\x03 \x01(\x0b\x32\x14.hiber.tag.Tag.Label\"@\n\x10\x44\x65leteTagRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\n\n\x02id\x18\x02 \x01(\x03\x1a\n\n\x08Response2\x90\x02\n\nTagService\x12G\n\x04List\x12\x1a.hiber.tag.ListTagsRequest\x1a#.hiber.tag.ListTagsRequest.Response\x12\x35\n\x06\x43reate\x12\x1b.hiber.tag.CreateTagRequest\x1a\x0e.hiber.tag.Tag\x12\x35\n\x06Update\x12\x1b.hiber.tag.UpdateTagRequest\x1a\x0e.hiber.tag.Tag\x12K\n\x06\x44\x65lete\x12\x1b.hiber.tag.DeleteTagRequest\x1a$.hiber.tag.DeleteTagRequest.ResponseB,\n\x19global.hiber.api.grpc.tagB\x06TagApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,])




_TAG_LABEL = _descriptor.Descriptor(
  name='Label',
  full_name='hiber.tag.Tag.Label',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.tag.Tag.Label.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=92,
  serialized_end=119,
)

_TAG = _descriptor.Descriptor(
  name='Tag',
  full_name='hiber.tag.Tag',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='hiber.tag.Tag.id', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='label', full_name='hiber.tag.Tag.label', index=1,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_TAG_LABEL, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=36,
  serialized_end=119,
)


_TAGSELECTION = _descriptor.Descriptor(
  name='TagSelection',
  full_name='hiber.tag.TagSelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='search', full_name='hiber.tag.TagSelection.search', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='names', full_name='hiber.tag.TagSelection.names', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter', full_name='hiber.tag.TagSelection.filter', index=2,
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
  serialized_start=121,
  serialized_end=202,
)


_UPDATETAGSFORITEM = _descriptor.Descriptor(
  name='UpdateTagsForItem',
  full_name='hiber.tag.UpdateTagsForItem',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tag_ids_to_add', full_name='hiber.tag.UpdateTagsForItem.tag_ids_to_add', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tag_ids_to_remove', full_name='hiber.tag.UpdateTagsForItem.tag_ids_to_remove', index=1,
      number=2, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='new_tags_to_add', full_name='hiber.tag.UpdateTagsForItem.new_tags_to_add', index=2,
      number=3, type=11, cpp_type=10, label=3,
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
  serialized_start=204,
  serialized_end=321,
)


_LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY = _descriptor.Descriptor(
  name='TagModemCountEntry',
  full_name='hiber.tag.ListTagsRequest.Response.TagModemCountEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='hiber.tag.ListTagsRequest.Response.TagModemCountEntry.key', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.tag.ListTagsRequest.Response.TagModemCountEntry.value', index=1,
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
  serialized_start=707,
  serialized_end=759,
)

_LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY = _descriptor.Descriptor(
  name='TagWebhookCountEntry',
  full_name='hiber.tag.ListTagsRequest.Response.TagWebhookCountEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='hiber.tag.ListTagsRequest.Response.TagWebhookCountEntry.key', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='hiber.tag.ListTagsRequest.Response.TagWebhookCountEntry.value', index=1,
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
  serialized_start=761,
  serialized_end=815,
)

_LISTTAGSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.tag.ListTagsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tags', full_name='hiber.tag.ListTagsRequest.Response.tags', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.tag.ListTagsRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tag_modem_count', full_name='hiber.tag.ListTagsRequest.Response.tag_modem_count', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tag_webhook_count', full_name='hiber.tag.ListTagsRequest.Response.tag_webhook_count', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY, _LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=454,
  serialized_end=815,
)

_LISTTAGSREQUEST = _descriptor.Descriptor(
  name='ListTagsRequest',
  full_name='hiber.tag.ListTagsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.tag.ListTagsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.tag.ListTagsRequest.selection', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='modem_count', full_name='hiber.tag.ListTagsRequest.modem_count', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='webhook_count', full_name='hiber.tag.ListTagsRequest.webhook_count', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTTAGSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=324,
  serialized_end=815,
)


_CREATETAGREQUEST = _descriptor.Descriptor(
  name='CreateTagRequest',
  full_name='hiber.tag.CreateTagRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.tag.CreateTagRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='create', full_name='hiber.tag.CreateTagRequest.create', index=1,
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
  serialized_start=817,
  serialized_end=895,
)


_UPDATETAGREQUEST = _descriptor.Descriptor(
  name='UpdateTagRequest',
  full_name='hiber.tag.UpdateTagRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.tag.UpdateTagRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='hiber.tag.UpdateTagRequest.id', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='update', full_name='hiber.tag.UpdateTagRequest.update', index=2,
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
  serialized_start=897,
  serialized_end=987,
)


_DELETETAGREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.tag.DeleteTagRequest.Response',
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
  serialized_start=454,
  serialized_end=464,
)

_DELETETAGREQUEST = _descriptor.Descriptor(
  name='DeleteTagRequest',
  full_name='hiber.tag.DeleteTagRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.tag.DeleteTagRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='hiber.tag.DeleteTagRequest.id', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_DELETETAGREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=989,
  serialized_end=1053,
)

_TAG_LABEL.containing_type = _TAG
_TAG.fields_by_name['label'].message_type = _TAG_LABEL
_TAGSELECTION.fields_by_name['filter'].message_type = base__pb2._FILTER_TAGS
_UPDATETAGSFORITEM.fields_by_name['new_tags_to_add'].message_type = _TAG_LABEL
_LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY.containing_type = _LISTTAGSREQUEST_RESPONSE
_LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY.containing_type = _LISTTAGSREQUEST_RESPONSE
_LISTTAGSREQUEST_RESPONSE.fields_by_name['tags'].message_type = _TAG
_LISTTAGSREQUEST_RESPONSE.fields_by_name['request'].message_type = _LISTTAGSREQUEST
_LISTTAGSREQUEST_RESPONSE.fields_by_name['tag_modem_count'].message_type = _LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY
_LISTTAGSREQUEST_RESPONSE.fields_by_name['tag_webhook_count'].message_type = _LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY
_LISTTAGSREQUEST_RESPONSE.containing_type = _LISTTAGSREQUEST
_LISTTAGSREQUEST.fields_by_name['selection'].message_type = _TAGSELECTION
_CREATETAGREQUEST.fields_by_name['create'].message_type = _TAG_LABEL
_UPDATETAGREQUEST.fields_by_name['update'].message_type = _TAG_LABEL
_DELETETAGREQUEST_RESPONSE.containing_type = _DELETETAGREQUEST
DESCRIPTOR.message_types_by_name['Tag'] = _TAG
DESCRIPTOR.message_types_by_name['TagSelection'] = _TAGSELECTION
DESCRIPTOR.message_types_by_name['UpdateTagsForItem'] = _UPDATETAGSFORITEM
DESCRIPTOR.message_types_by_name['ListTagsRequest'] = _LISTTAGSREQUEST
DESCRIPTOR.message_types_by_name['CreateTagRequest'] = _CREATETAGREQUEST
DESCRIPTOR.message_types_by_name['UpdateTagRequest'] = _UPDATETAGREQUEST
DESCRIPTOR.message_types_by_name['DeleteTagRequest'] = _DELETETAGREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Tag = _reflection.GeneratedProtocolMessageType('Tag', (_message.Message,), dict(

  Label = _reflection.GeneratedProtocolMessageType('Label', (_message.Message,), dict(
    DESCRIPTOR = _TAG_LABEL,
    __module__ = 'tag_pb2'
    # @@protoc_insertion_point(class_scope:hiber.tag.Tag.Label)
    ))
  ,
  DESCRIPTOR = _TAG,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.Tag)
  ))
_sym_db.RegisterMessage(Tag)
_sym_db.RegisterMessage(Tag.Label)

TagSelection = _reflection.GeneratedProtocolMessageType('TagSelection', (_message.Message,), dict(
  DESCRIPTOR = _TAGSELECTION,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.TagSelection)
  ))
_sym_db.RegisterMessage(TagSelection)

UpdateTagsForItem = _reflection.GeneratedProtocolMessageType('UpdateTagsForItem', (_message.Message,), dict(
  DESCRIPTOR = _UPDATETAGSFORITEM,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.UpdateTagsForItem)
  ))
_sym_db.RegisterMessage(UpdateTagsForItem)

ListTagsRequest = _reflection.GeneratedProtocolMessageType('ListTagsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(

    TagModemCountEntry = _reflection.GeneratedProtocolMessageType('TagModemCountEntry', (_message.Message,), dict(
      DESCRIPTOR = _LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY,
      __module__ = 'tag_pb2'
      # @@protoc_insertion_point(class_scope:hiber.tag.ListTagsRequest.Response.TagModemCountEntry)
      ))
    ,

    TagWebhookCountEntry = _reflection.GeneratedProtocolMessageType('TagWebhookCountEntry', (_message.Message,), dict(
      DESCRIPTOR = _LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY,
      __module__ = 'tag_pb2'
      # @@protoc_insertion_point(class_scope:hiber.tag.ListTagsRequest.Response.TagWebhookCountEntry)
      ))
    ,
    DESCRIPTOR = _LISTTAGSREQUEST_RESPONSE,
    __module__ = 'tag_pb2'
    # @@protoc_insertion_point(class_scope:hiber.tag.ListTagsRequest.Response)
    ))
  ,
  DESCRIPTOR = _LISTTAGSREQUEST,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.ListTagsRequest)
  ))
_sym_db.RegisterMessage(ListTagsRequest)
_sym_db.RegisterMessage(ListTagsRequest.Response)
_sym_db.RegisterMessage(ListTagsRequest.Response.TagModemCountEntry)
_sym_db.RegisterMessage(ListTagsRequest.Response.TagWebhookCountEntry)

CreateTagRequest = _reflection.GeneratedProtocolMessageType('CreateTagRequest', (_message.Message,), dict(
  DESCRIPTOR = _CREATETAGREQUEST,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.CreateTagRequest)
  ))
_sym_db.RegisterMessage(CreateTagRequest)

UpdateTagRequest = _reflection.GeneratedProtocolMessageType('UpdateTagRequest', (_message.Message,), dict(
  DESCRIPTOR = _UPDATETAGREQUEST,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.UpdateTagRequest)
  ))
_sym_db.RegisterMessage(UpdateTagRequest)

DeleteTagRequest = _reflection.GeneratedProtocolMessageType('DeleteTagRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _DELETETAGREQUEST_RESPONSE,
    __module__ = 'tag_pb2'
    # @@protoc_insertion_point(class_scope:hiber.tag.DeleteTagRequest.Response)
    ))
  ,
  DESCRIPTOR = _DELETETAGREQUEST,
  __module__ = 'tag_pb2'
  # @@protoc_insertion_point(class_scope:hiber.tag.DeleteTagRequest)
  ))
_sym_db.RegisterMessage(DeleteTagRequest)
_sym_db.RegisterMessage(DeleteTagRequest.Response)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\031global.hiber.api.grpc.tagB\006TagApiP\000Z\005hiber'))
_LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY.has_options = True
_LISTTAGSREQUEST_RESPONSE_TAGMODEMCOUNTENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
_LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY.has_options = True
_LISTTAGSREQUEST_RESPONSE_TAGWEBHOOKCOUNTENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))

_TAGSERVICE = _descriptor.ServiceDescriptor(
  name='TagService',
  full_name='hiber.tag.TagService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=1056,
  serialized_end=1328,
  methods=[
  _descriptor.MethodDescriptor(
    name='List',
    full_name='hiber.tag.TagService.List',
    index=0,
    containing_service=None,
    input_type=_LISTTAGSREQUEST,
    output_type=_LISTTAGSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Create',
    full_name='hiber.tag.TagService.Create',
    index=1,
    containing_service=None,
    input_type=_CREATETAGREQUEST,
    output_type=_TAG,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Update',
    full_name='hiber.tag.TagService.Update',
    index=2,
    containing_service=None,
    input_type=_UPDATETAGREQUEST,
    output_type=_TAG,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='hiber.tag.TagService.Delete',
    index=3,
    containing_service=None,
    input_type=_DELETETAGREQUEST,
    output_type=_DELETETAGREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TAGSERVICE)

DESCRIPTOR.services_by_name['TagService'] = _TAGSERVICE

# @@protoc_insertion_point(module_scope)
