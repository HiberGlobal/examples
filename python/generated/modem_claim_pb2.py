# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: modem_claim.proto

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
import modem_pb2 as modem__pb2
import tag_pb2 as tag__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='modem_claim.proto',
  package='hiber.modem',
  syntax='proto3',
  serialized_pb=_b('\n\x11modem_claim.proto\x12\x0bhiber.modem\x1a\nbase.proto\x1a\x0bmodem.proto\x1a\ttag.proto\"\xca\x03\n\nModemClaim\x12\x14\n\x0cmodem_number\x18\x01 \x01(\t\x12.\n\x06status\x18\x02 \x01(\x0e\x32\x1e.hiber.modem.ModemClaim.Status\x12;\n\rreject_reason\x18\x03 \x01(\x0e\x32$.hiber.modem.ModemClaim.RejectReason\x12\x16\n\x0ereject_comment\x18\x04 \x01(\t\x12$\n\ncreated_at\x18\x05 \x01(\x0b\x32\x10.hiber.Timestamp\x12#\n\tclosed_at\x18\x06 \x01(\x0b\x32\x10.hiber.Timestamp\x12\x1d\n\x15\x63laiming_organization\x18\x07 \x01(\t\x12\x1c\n\x04tags\x18\x08 \x03(\x0b\x32\x0e.hiber.tag.Tag\".\n\x06Status\x12\x08\n\x04OPEN\x10\x00\x12\x0c\n\x08\x41\x43\x43\x45PTED\x10\x01\x12\x0c\n\x08REJECTED\x10\x02\"i\n\x0cRejectReason\x12\x0b\n\x07NOT_SET\x10\x00\x12\x15\n\x11UNKNOWN_RECIPIENT\x10\x01\x12\x11\n\rINVALID_CLAIM\x10\x02\x12\x17\n\x13TRANSFERRED_INSTEAD\x10\x03\x12\t\n\x05OTHER\x10\x04\"\xc8\x01\n\x13ModemClaimSelection\x12$\n\x06modems\x18\x01 \x01(\x0b\x32\x14.hiber.Filter.Modems\x12\x30\n\x08statuses\x18\x02 \x03(\x0e\x32\x1e.hiber.modem.ModemClaim.Status\x12,\n\x12\x63reated_time_range\x18\x03 \x01(\x0b\x32\x10.hiber.TimeRange\x12+\n\x11\x63losed_time_range\x18\x04 \x01(\x0b\x32\x10.hiber.TimeRange\"\x80\x02\n\x11\x43laimModemRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x39\n\x06\x63laims\x18\x02 \x03(\x0b\x32).hiber.modem.ClaimModemRequest.ClaimModem\x1a\x34\n\nClaimModem\x12\x14\n\x0cmodem_number\x18\x01 \x01(\t\x12\x10\n\x08verifier\x18\x02 \x01(\t\x1a\x64\n\x08Response\x12/\n\x07request\x18\x01 \x01(\x0b\x32\x1e.hiber.modem.ClaimModemRequest\x12\'\n\x06\x63laims\x18\x02 \x03(\x0b\x32\x17.hiber.modem.ModemClaim\"\xa4\x02\n\x16ListModemClaimsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x33\n\tselection\x18\x02 \x01(\x0b\x32 .hiber.modem.ModemClaimSelection\x12%\n\npagination\x18\x03 \x01(\x0b\x32\x11.hiber.Pagination\x1a\x97\x01\n\x08Response\x12\'\n\x06\x63laims\x18\x01 \x03(\x0b\x32\x17.hiber.modem.ModemClaim\x12\x34\n\x07request\x18\x02 \x01(\x0b\x32#.hiber.modem.ListModemClaimsRequest\x12,\n\npagination\x18\x03 \x01(\x0b\x32\x18.hiber.Pagination.Result\"\xd2\x01\n\x18\x41\x63\x63\x65ptModemClaimsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x33\n\tselection\x18\x02 \x01(\x0b\x32 .hiber.modem.ModemClaimSelection\x1ak\n\x08Response\x12\'\n\x06\x63laims\x18\x01 \x03(\x0b\x32\x17.hiber.modem.ModemClaim\x12\x36\n\x07request\x18\x02 \x01(\x0b\x32%.hiber.modem.AcceptModemClaimsRequest\"\xa0\x02\n\x18RejectModemClaimsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x33\n\tselection\x18\x02 \x01(\x0b\x32 .hiber.modem.ModemClaimSelection\x12\x34\n\x06reason\x18\x03 \x01(\x0e\x32$.hiber.modem.ModemClaim.RejectReason\x12\x16\n\x0ereason_comment\x18\x04 \x01(\t\x1ak\n\x08Response\x12\'\n\x06\x63laims\x18\x01 \x03(\x0b\x32\x17.hiber.modem.ModemClaim\x12\x36\n\x07request\x18\x02 \x01(\x0b\x32%.hiber.modem.RejectModemClaimsRequest2\x94\x03\n\x11ModemClaimService\x12P\n\x05\x43laim\x12\x1e.hiber.modem.ClaimModemRequest\x1a\'.hiber.modem.ClaimModemRequest.Response\x12_\n\nListClaims\x12#.hiber.modem.ListModemClaimsRequest\x1a,.hiber.modem.ListModemClaimsRequest.Response\x12\x65\n\x0c\x41\x63\x63\x65ptClaims\x12%.hiber.modem.AcceptModemClaimsRequest\x1a..hiber.modem.AcceptModemClaimsRequest.Response\x12\x65\n\x0cRejectClaims\x12%.hiber.modem.RejectModemClaimsRequest\x1a..hiber.modem.RejectModemClaimsRequest.ResponseB5\n\x1bglobal.hiber.api.grpc.modemB\rModemClaimApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,modem__pb2.DESCRIPTOR,tag__pb2.DESCRIPTOR,])



_MODEMCLAIM_STATUS = _descriptor.EnumDescriptor(
  name='Status',
  full_name='hiber.modem.ModemClaim.Status',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='OPEN', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ACCEPTED', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='REJECTED', index=2, number=2,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=376,
  serialized_end=422,
)
_sym_db.RegisterEnumDescriptor(_MODEMCLAIM_STATUS)

_MODEMCLAIM_REJECTREASON = _descriptor.EnumDescriptor(
  name='RejectReason',
  full_name='hiber.modem.ModemClaim.RejectReason',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NOT_SET', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_RECIPIENT', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INVALID_CLAIM', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TRANSFERRED_INSTEAD', index=3, number=3,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OTHER', index=4, number=4,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=424,
  serialized_end=529,
)
_sym_db.RegisterEnumDescriptor(_MODEMCLAIM_REJECTREASON)


_MODEMCLAIM = _descriptor.Descriptor(
  name='ModemClaim',
  full_name='hiber.modem.ModemClaim',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='modem_number', full_name='hiber.modem.ModemClaim.modem_number', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='status', full_name='hiber.modem.ModemClaim.status', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reject_reason', full_name='hiber.modem.ModemClaim.reject_reason', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reject_comment', full_name='hiber.modem.ModemClaim.reject_comment', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='hiber.modem.ModemClaim.created_at', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='closed_at', full_name='hiber.modem.ModemClaim.closed_at', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='claiming_organization', full_name='hiber.modem.ModemClaim.claiming_organization', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='hiber.modem.ModemClaim.tags', index=7,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _MODEMCLAIM_STATUS,
    _MODEMCLAIM_REJECTREASON,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=71,
  serialized_end=529,
)


_MODEMCLAIMSELECTION = _descriptor.Descriptor(
  name='ModemClaimSelection',
  full_name='hiber.modem.ModemClaimSelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='modems', full_name='hiber.modem.ModemClaimSelection.modems', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='statuses', full_name='hiber.modem.ModemClaimSelection.statuses', index=1,
      number=2, type=14, cpp_type=8, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='created_time_range', full_name='hiber.modem.ModemClaimSelection.created_time_range', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='closed_time_range', full_name='hiber.modem.ModemClaimSelection.closed_time_range', index=3,
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
  serialized_start=532,
  serialized_end=732,
)


_CLAIMMODEMREQUEST_CLAIMMODEM = _descriptor.Descriptor(
  name='ClaimModem',
  full_name='hiber.modem.ClaimModemRequest.ClaimModem',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='modem_number', full_name='hiber.modem.ClaimModemRequest.ClaimModem.modem_number', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='verifier', full_name='hiber.modem.ClaimModemRequest.ClaimModem.verifier', index=1,
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
  serialized_start=837,
  serialized_end=889,
)

_CLAIMMODEMREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.modem.ClaimModemRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.modem.ClaimModemRequest.Response.request', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='claims', full_name='hiber.modem.ClaimModemRequest.Response.claims', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  serialized_start=891,
  serialized_end=991,
)

_CLAIMMODEMREQUEST = _descriptor.Descriptor(
  name='ClaimModemRequest',
  full_name='hiber.modem.ClaimModemRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.modem.ClaimModemRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='claims', full_name='hiber.modem.ClaimModemRequest.claims', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CLAIMMODEMREQUEST_CLAIMMODEM, _CLAIMMODEMREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=735,
  serialized_end=991,
)


_LISTMODEMCLAIMSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.modem.ListModemClaimsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='claims', full_name='hiber.modem.ListModemClaimsRequest.Response.claims', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.modem.ListModemClaimsRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.modem.ListModemClaimsRequest.Response.pagination', index=2,
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
  serialized_start=1135,
  serialized_end=1286,
)

_LISTMODEMCLAIMSREQUEST = _descriptor.Descriptor(
  name='ListModemClaimsRequest',
  full_name='hiber.modem.ListModemClaimsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.modem.ListModemClaimsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.modem.ListModemClaimsRequest.selection', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.modem.ListModemClaimsRequest.pagination', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTMODEMCLAIMSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=994,
  serialized_end=1286,
)


_ACCEPTMODEMCLAIMSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.modem.AcceptModemClaimsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='claims', full_name='hiber.modem.AcceptModemClaimsRequest.Response.claims', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.modem.AcceptModemClaimsRequest.Response.request', index=1,
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
  serialized_start=1392,
  serialized_end=1499,
)

_ACCEPTMODEMCLAIMSREQUEST = _descriptor.Descriptor(
  name='AcceptModemClaimsRequest',
  full_name='hiber.modem.AcceptModemClaimsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.modem.AcceptModemClaimsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.modem.AcceptModemClaimsRequest.selection', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_ACCEPTMODEMCLAIMSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1289,
  serialized_end=1499,
)


_REJECTMODEMCLAIMSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.modem.RejectModemClaimsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='claims', full_name='hiber.modem.RejectModemClaimsRequest.Response.claims', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.modem.RejectModemClaimsRequest.Response.request', index=1,
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
  serialized_start=1683,
  serialized_end=1790,
)

_REJECTMODEMCLAIMSREQUEST = _descriptor.Descriptor(
  name='RejectModemClaimsRequest',
  full_name='hiber.modem.RejectModemClaimsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.modem.RejectModemClaimsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.modem.RejectModemClaimsRequest.selection', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reason', full_name='hiber.modem.RejectModemClaimsRequest.reason', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reason_comment', full_name='hiber.modem.RejectModemClaimsRequest.reason_comment', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_REJECTMODEMCLAIMSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1502,
  serialized_end=1790,
)

_MODEMCLAIM.fields_by_name['status'].enum_type = _MODEMCLAIM_STATUS
_MODEMCLAIM.fields_by_name['reject_reason'].enum_type = _MODEMCLAIM_REJECTREASON
_MODEMCLAIM.fields_by_name['created_at'].message_type = base__pb2._TIMESTAMP
_MODEMCLAIM.fields_by_name['closed_at'].message_type = base__pb2._TIMESTAMP
_MODEMCLAIM.fields_by_name['tags'].message_type = tag__pb2._TAG
_MODEMCLAIM_STATUS.containing_type = _MODEMCLAIM
_MODEMCLAIM_REJECTREASON.containing_type = _MODEMCLAIM
_MODEMCLAIMSELECTION.fields_by_name['modems'].message_type = base__pb2._FILTER_MODEMS
_MODEMCLAIMSELECTION.fields_by_name['statuses'].enum_type = _MODEMCLAIM_STATUS
_MODEMCLAIMSELECTION.fields_by_name['created_time_range'].message_type = base__pb2._TIMERANGE
_MODEMCLAIMSELECTION.fields_by_name['closed_time_range'].message_type = base__pb2._TIMERANGE
_CLAIMMODEMREQUEST_CLAIMMODEM.containing_type = _CLAIMMODEMREQUEST
_CLAIMMODEMREQUEST_RESPONSE.fields_by_name['request'].message_type = _CLAIMMODEMREQUEST
_CLAIMMODEMREQUEST_RESPONSE.fields_by_name['claims'].message_type = _MODEMCLAIM
_CLAIMMODEMREQUEST_RESPONSE.containing_type = _CLAIMMODEMREQUEST
_CLAIMMODEMREQUEST.fields_by_name['claims'].message_type = _CLAIMMODEMREQUEST_CLAIMMODEM
_LISTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['claims'].message_type = _MODEMCLAIM
_LISTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['request'].message_type = _LISTMODEMCLAIMSREQUEST
_LISTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['pagination'].message_type = base__pb2._PAGINATION_RESULT
_LISTMODEMCLAIMSREQUEST_RESPONSE.containing_type = _LISTMODEMCLAIMSREQUEST
_LISTMODEMCLAIMSREQUEST.fields_by_name['selection'].message_type = _MODEMCLAIMSELECTION
_LISTMODEMCLAIMSREQUEST.fields_by_name['pagination'].message_type = base__pb2._PAGINATION
_ACCEPTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['claims'].message_type = _MODEMCLAIM
_ACCEPTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['request'].message_type = _ACCEPTMODEMCLAIMSREQUEST
_ACCEPTMODEMCLAIMSREQUEST_RESPONSE.containing_type = _ACCEPTMODEMCLAIMSREQUEST
_ACCEPTMODEMCLAIMSREQUEST.fields_by_name['selection'].message_type = _MODEMCLAIMSELECTION
_REJECTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['claims'].message_type = _MODEMCLAIM
_REJECTMODEMCLAIMSREQUEST_RESPONSE.fields_by_name['request'].message_type = _REJECTMODEMCLAIMSREQUEST
_REJECTMODEMCLAIMSREQUEST_RESPONSE.containing_type = _REJECTMODEMCLAIMSREQUEST
_REJECTMODEMCLAIMSREQUEST.fields_by_name['selection'].message_type = _MODEMCLAIMSELECTION
_REJECTMODEMCLAIMSREQUEST.fields_by_name['reason'].enum_type = _MODEMCLAIM_REJECTREASON
DESCRIPTOR.message_types_by_name['ModemClaim'] = _MODEMCLAIM
DESCRIPTOR.message_types_by_name['ModemClaimSelection'] = _MODEMCLAIMSELECTION
DESCRIPTOR.message_types_by_name['ClaimModemRequest'] = _CLAIMMODEMREQUEST
DESCRIPTOR.message_types_by_name['ListModemClaimsRequest'] = _LISTMODEMCLAIMSREQUEST
DESCRIPTOR.message_types_by_name['AcceptModemClaimsRequest'] = _ACCEPTMODEMCLAIMSREQUEST
DESCRIPTOR.message_types_by_name['RejectModemClaimsRequest'] = _REJECTMODEMCLAIMSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ModemClaim = _reflection.GeneratedProtocolMessageType('ModemClaim', (_message.Message,), dict(
  DESCRIPTOR = _MODEMCLAIM,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.ModemClaim)
  ))
_sym_db.RegisterMessage(ModemClaim)

ModemClaimSelection = _reflection.GeneratedProtocolMessageType('ModemClaimSelection', (_message.Message,), dict(
  DESCRIPTOR = _MODEMCLAIMSELECTION,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.ModemClaimSelection)
  ))
_sym_db.RegisterMessage(ModemClaimSelection)

ClaimModemRequest = _reflection.GeneratedProtocolMessageType('ClaimModemRequest', (_message.Message,), dict(

  ClaimModem = _reflection.GeneratedProtocolMessageType('ClaimModem', (_message.Message,), dict(
    DESCRIPTOR = _CLAIMMODEMREQUEST_CLAIMMODEM,
    __module__ = 'modem_claim_pb2'
    # @@protoc_insertion_point(class_scope:hiber.modem.ClaimModemRequest.ClaimModem)
    ))
  ,

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _CLAIMMODEMREQUEST_RESPONSE,
    __module__ = 'modem_claim_pb2'
    # @@protoc_insertion_point(class_scope:hiber.modem.ClaimModemRequest.Response)
    ))
  ,
  DESCRIPTOR = _CLAIMMODEMREQUEST,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.ClaimModemRequest)
  ))
_sym_db.RegisterMessage(ClaimModemRequest)
_sym_db.RegisterMessage(ClaimModemRequest.ClaimModem)
_sym_db.RegisterMessage(ClaimModemRequest.Response)

ListModemClaimsRequest = _reflection.GeneratedProtocolMessageType('ListModemClaimsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _LISTMODEMCLAIMSREQUEST_RESPONSE,
    __module__ = 'modem_claim_pb2'
    # @@protoc_insertion_point(class_scope:hiber.modem.ListModemClaimsRequest.Response)
    ))
  ,
  DESCRIPTOR = _LISTMODEMCLAIMSREQUEST,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.ListModemClaimsRequest)
  ))
_sym_db.RegisterMessage(ListModemClaimsRequest)
_sym_db.RegisterMessage(ListModemClaimsRequest.Response)

AcceptModemClaimsRequest = _reflection.GeneratedProtocolMessageType('AcceptModemClaimsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _ACCEPTMODEMCLAIMSREQUEST_RESPONSE,
    __module__ = 'modem_claim_pb2'
    # @@protoc_insertion_point(class_scope:hiber.modem.AcceptModemClaimsRequest.Response)
    ))
  ,
  DESCRIPTOR = _ACCEPTMODEMCLAIMSREQUEST,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.AcceptModemClaimsRequest)
  ))
_sym_db.RegisterMessage(AcceptModemClaimsRequest)
_sym_db.RegisterMessage(AcceptModemClaimsRequest.Response)

RejectModemClaimsRequest = _reflection.GeneratedProtocolMessageType('RejectModemClaimsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _REJECTMODEMCLAIMSREQUEST_RESPONSE,
    __module__ = 'modem_claim_pb2'
    # @@protoc_insertion_point(class_scope:hiber.modem.RejectModemClaimsRequest.Response)
    ))
  ,
  DESCRIPTOR = _REJECTMODEMCLAIMSREQUEST,
  __module__ = 'modem_claim_pb2'
  # @@protoc_insertion_point(class_scope:hiber.modem.RejectModemClaimsRequest)
  ))
_sym_db.RegisterMessage(RejectModemClaimsRequest)
_sym_db.RegisterMessage(RejectModemClaimsRequest.Response)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\033global.hiber.api.grpc.modemB\rModemClaimApiP\000Z\005hiber'))

_MODEMCLAIMSERVICE = _descriptor.ServiceDescriptor(
  name='ModemClaimService',
  full_name='hiber.modem.ModemClaimService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=1793,
  serialized_end=2197,
  methods=[
  _descriptor.MethodDescriptor(
    name='Claim',
    full_name='hiber.modem.ModemClaimService.Claim',
    index=0,
    containing_service=None,
    input_type=_CLAIMMODEMREQUEST,
    output_type=_CLAIMMODEMREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ListClaims',
    full_name='hiber.modem.ModemClaimService.ListClaims',
    index=1,
    containing_service=None,
    input_type=_LISTMODEMCLAIMSREQUEST,
    output_type=_LISTMODEMCLAIMSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='AcceptClaims',
    full_name='hiber.modem.ModemClaimService.AcceptClaims',
    index=2,
    containing_service=None,
    input_type=_ACCEPTMODEMCLAIMSREQUEST,
    output_type=_ACCEPTMODEMCLAIMSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='RejectClaims',
    full_name='hiber.modem.ModemClaimService.RejectClaims',
    index=3,
    containing_service=None,
    input_type=_REJECTMODEMCLAIMSREQUEST,
    output_type=_REJECTMODEMCLAIMSREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MODEMCLAIMSERVICE)

DESCRIPTOR.services_by_name['ModemClaimService'] = _MODEMCLAIMSERVICE

# @@protoc_insertion_point(module_scope)