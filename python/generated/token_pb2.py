# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: token.proto

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
import permission_pb2 as permission__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='token.proto',
  package='hiber.token',
  syntax='proto3',
  serialized_pb=_b('\n\x0btoken.proto\x12\x0bhiber.token\x1a\nbase.proto\x1a\x10permission.proto\"\xe6\x01\n\x05Token\x12\n\n\x02id\x18\x01 \x01(\x03\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07user_id\x18\x03 \x01(\t\x12\x14\n\x0corganization\x18\x04 \x01(\t\x12$\n\nexpires_at\x18\x06 \x01(\x0b\x32\x10.hiber.Timestamp\x12/\n\x10user_permissions\x18\x07 \x03(\x0e\x32\x15.hiber.UserPermission\x12?\n\x18organization_permissions\x18\x08 \x03(\x0e\x32\x1d.hiber.OrganizationPermissionJ\x04\x08\x05\x10\x06\"[\n\x0eTokenSelection\x12\"\n\x05users\x18\x01 \x01(\x0b\x32\x13.hiber.Filter.Users\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x17\n\x0finclude_expired\x18\x04 \x01(\x08\"\x90\x02\n\x11ListTokensRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12.\n\tselection\x18\x02 \x01(\x0b\x32\x1b.hiber.token.TokenSelection\x12%\n\npagination\x18\x03 \x01(\x0b\x32\x11.hiber.Pagination\x1a\x8d\x01\n\x08Response\x12\"\n\x06tokens\x18\x01 \x03(\x0b\x32\x12.hiber.token.Token\x12/\n\x07request\x18\x02 \x01(\x0b\x32\x1e.hiber.token.ListTokensRequest\x12,\n\npagination\x18\x03 \x01(\x0b\x32\x18.hiber.Pagination.Result\"\xa8\x02\n\x12\x43reateTokenRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12$\n\nexpires_at\x18\x04 \x01(\x0b\x32\x10.hiber.Timestamp\x12\x37\n\x10user_permissions\x18\x05 \x01(\x0b\x32\x1d.hiber.Filter.UserPermissions\x12G\n\x18organization_permissions\x18\x06 \x01(\x0b\x32%.hiber.Filter.OrganizationPermissions\x12%\n\x1doverride_allow_no_permissions\x18\x07 \x01(\x08\x1a\x19\n\x08Response\x12\r\n\x05token\x18\x01 \x01(\tJ\x04\x08\x03\x10\x04\"H\n\x12\x44\x65leteTokenRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x10\n\x08token_id\x18\x02 \x01(\x03\x1a\n\n\x08Response\"\xd4\x01\n)UpdateTokenOrganizationPermissionsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x11\n\ttoken_ids\x18\x02 \x03(\x03\x12K\n\x1cnew_organization_permissions\x18\x03 \x01(\x0b\x32%.hiber.Filter.OrganizationPermissions\x12%\n\x1doverride_allow_no_permissions\x18\x04 \x01(\x08\x1a\n\n\x08Response\"\x95\x01\n!UpdateTokenUserPermissionsRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x12\x11\n\ttoken_ids\x18\x02 \x03(\x03\x12;\n\x14new_user_permissions\x18\x04 \x01(\x0b\x32\x1d.hiber.Filter.UserPermissions\x1a\n\n\x08Response2\xb1\x04\n\x0cTokenService\x12O\n\x04List\x12\x1e.hiber.token.ListTokensRequest\x1a\'.hiber.token.ListTokensRequest.Response\x12S\n\x06\x43reate\x12\x1f.hiber.token.CreateTokenRequest\x1a(.hiber.token.CreateTokenRequest.Response\x12S\n\x06\x44\x65lete\x12\x1f.hiber.token.DeleteTokenRequest\x1a(.hiber.token.DeleteTokenRequest.Response\x12\x9d\x01\n\"UpdateTokenOrganizationPermissions\x12\x36.hiber.token.UpdateTokenOrganizationPermissionsRequest\x1a?.hiber.token.UpdateTokenOrganizationPermissionsRequest.Response\x12\x85\x01\n\x1aUpdateTokenUserPermissions\x12..hiber.token.UpdateTokenUserPermissionsRequest\x1a\x37.hiber.token.UpdateTokenUserPermissionsRequest.ResponseB0\n\x1bglobal.hiber.api.grpc.tokenB\x08TokenApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,permission__pb2.DESCRIPTOR,])




_TOKEN = _descriptor.Descriptor(
  name='Token',
  full_name='hiber.token.Token',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='hiber.token.Token.id', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.token.Token.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_id', full_name='hiber.token.Token.user_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.Token.organization', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expires_at', full_name='hiber.token.Token.expires_at', index=4,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_permissions', full_name='hiber.token.Token.user_permissions', index=5,
      number=7, type=14, cpp_type=8, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='organization_permissions', full_name='hiber.token.Token.organization_permissions', index=6,
      number=8, type=14, cpp_type=8, label=3,
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
  serialized_start=59,
  serialized_end=289,
)


_TOKENSELECTION = _descriptor.Descriptor(
  name='TokenSelection',
  full_name='hiber.token.TokenSelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='users', full_name='hiber.token.TokenSelection.users', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.token.TokenSelection.name', index=1,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='include_expired', full_name='hiber.token.TokenSelection.include_expired', index=2,
      number=4, type=8, cpp_type=7, label=1,
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
  serialized_start=291,
  serialized_end=382,
)


_LISTTOKENSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.token.ListTokensRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tokens', full_name='hiber.token.ListTokensRequest.Response.tokens', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='hiber.token.ListTokensRequest.Response.request', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.token.ListTokensRequest.Response.pagination', index=2,
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
  serialized_start=516,
  serialized_end=657,
)

_LISTTOKENSREQUEST = _descriptor.Descriptor(
  name='ListTokensRequest',
  full_name='hiber.token.ListTokensRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.ListTokensRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='selection', full_name='hiber.token.ListTokensRequest.selection', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pagination', full_name='hiber.token.ListTokensRequest.pagination', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_LISTTOKENSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=385,
  serialized_end=657,
)


_CREATETOKENREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.token.CreateTokenRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='hiber.token.CreateTokenRequest.Response.token', index=0,
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
  serialized_start=925,
  serialized_end=950,
)

_CREATETOKENREQUEST = _descriptor.Descriptor(
  name='CreateTokenRequest',
  full_name='hiber.token.CreateTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.CreateTokenRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.token.CreateTokenRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expires_at', full_name='hiber.token.CreateTokenRequest.expires_at', index=2,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_permissions', full_name='hiber.token.CreateTokenRequest.user_permissions', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='organization_permissions', full_name='hiber.token.CreateTokenRequest.organization_permissions', index=4,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='override_allow_no_permissions', full_name='hiber.token.CreateTokenRequest.override_allow_no_permissions', index=5,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CREATETOKENREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=660,
  serialized_end=956,
)


_DELETETOKENREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.token.DeleteTokenRequest.Response',
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
  serialized_start=516,
  serialized_end=526,
)

_DELETETOKENREQUEST = _descriptor.Descriptor(
  name='DeleteTokenRequest',
  full_name='hiber.token.DeleteTokenRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.DeleteTokenRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token_id', full_name='hiber.token.DeleteTokenRequest.token_id', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_DELETETOKENREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=958,
  serialized_end=1030,
)


_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest.Response',
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
  serialized_start=516,
  serialized_end=526,
)

_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST = _descriptor.Descriptor(
  name='UpdateTokenOrganizationPermissionsRequest',
  full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token_ids', full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest.token_ids', index=1,
      number=2, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='new_organization_permissions', full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest.new_organization_permissions', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='override_allow_no_permissions', full_name='hiber.token.UpdateTokenOrganizationPermissionsRequest.override_allow_no_permissions', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1033,
  serialized_end=1245,
)


_UPDATETOKENUSERPERMISSIONSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.token.UpdateTokenUserPermissionsRequest.Response',
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
  serialized_start=516,
  serialized_end=526,
)

_UPDATETOKENUSERPERMISSIONSREQUEST = _descriptor.Descriptor(
  name='UpdateTokenUserPermissionsRequest',
  full_name='hiber.token.UpdateTokenUserPermissionsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.token.UpdateTokenUserPermissionsRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token_ids', full_name='hiber.token.UpdateTokenUserPermissionsRequest.token_ids', index=1,
      number=2, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='new_user_permissions', full_name='hiber.token.UpdateTokenUserPermissionsRequest.new_user_permissions', index=2,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_UPDATETOKENUSERPERMISSIONSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1248,
  serialized_end=1397,
)

_TOKEN.fields_by_name['expires_at'].message_type = base__pb2._TIMESTAMP
_TOKEN.fields_by_name['user_permissions'].enum_type = permission__pb2._USERPERMISSION
_TOKEN.fields_by_name['organization_permissions'].enum_type = permission__pb2._ORGANIZATIONPERMISSION
_TOKENSELECTION.fields_by_name['users'].message_type = base__pb2._FILTER_USERS
_LISTTOKENSREQUEST_RESPONSE.fields_by_name['tokens'].message_type = _TOKEN
_LISTTOKENSREQUEST_RESPONSE.fields_by_name['request'].message_type = _LISTTOKENSREQUEST
_LISTTOKENSREQUEST_RESPONSE.fields_by_name['pagination'].message_type = base__pb2._PAGINATION_RESULT
_LISTTOKENSREQUEST_RESPONSE.containing_type = _LISTTOKENSREQUEST
_LISTTOKENSREQUEST.fields_by_name['selection'].message_type = _TOKENSELECTION
_LISTTOKENSREQUEST.fields_by_name['pagination'].message_type = base__pb2._PAGINATION
_CREATETOKENREQUEST_RESPONSE.containing_type = _CREATETOKENREQUEST
_CREATETOKENREQUEST.fields_by_name['expires_at'].message_type = base__pb2._TIMESTAMP
_CREATETOKENREQUEST.fields_by_name['user_permissions'].message_type = base__pb2._FILTER_USERPERMISSIONS
_CREATETOKENREQUEST.fields_by_name['organization_permissions'].message_type = base__pb2._FILTER_ORGANIZATIONPERMISSIONS
_DELETETOKENREQUEST_RESPONSE.containing_type = _DELETETOKENREQUEST
_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST_RESPONSE.containing_type = _UPDATETOKENORGANIZATIONPERMISSIONSREQUEST
_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST.fields_by_name['new_organization_permissions'].message_type = base__pb2._FILTER_ORGANIZATIONPERMISSIONS
_UPDATETOKENUSERPERMISSIONSREQUEST_RESPONSE.containing_type = _UPDATETOKENUSERPERMISSIONSREQUEST
_UPDATETOKENUSERPERMISSIONSREQUEST.fields_by_name['new_user_permissions'].message_type = base__pb2._FILTER_USERPERMISSIONS
DESCRIPTOR.message_types_by_name['Token'] = _TOKEN
DESCRIPTOR.message_types_by_name['TokenSelection'] = _TOKENSELECTION
DESCRIPTOR.message_types_by_name['ListTokensRequest'] = _LISTTOKENSREQUEST
DESCRIPTOR.message_types_by_name['CreateTokenRequest'] = _CREATETOKENREQUEST
DESCRIPTOR.message_types_by_name['DeleteTokenRequest'] = _DELETETOKENREQUEST
DESCRIPTOR.message_types_by_name['UpdateTokenOrganizationPermissionsRequest'] = _UPDATETOKENORGANIZATIONPERMISSIONSREQUEST
DESCRIPTOR.message_types_by_name['UpdateTokenUserPermissionsRequest'] = _UPDATETOKENUSERPERMISSIONSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Token = _reflection.GeneratedProtocolMessageType('Token', (_message.Message,), dict(
  DESCRIPTOR = _TOKEN,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.Token)
  ))
_sym_db.RegisterMessage(Token)

TokenSelection = _reflection.GeneratedProtocolMessageType('TokenSelection', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSELECTION,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.TokenSelection)
  ))
_sym_db.RegisterMessage(TokenSelection)

ListTokensRequest = _reflection.GeneratedProtocolMessageType('ListTokensRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _LISTTOKENSREQUEST_RESPONSE,
    __module__ = 'token_pb2'
    # @@protoc_insertion_point(class_scope:hiber.token.ListTokensRequest.Response)
    ))
  ,
  DESCRIPTOR = _LISTTOKENSREQUEST,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.ListTokensRequest)
  ))
_sym_db.RegisterMessage(ListTokensRequest)
_sym_db.RegisterMessage(ListTokensRequest.Response)

CreateTokenRequest = _reflection.GeneratedProtocolMessageType('CreateTokenRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _CREATETOKENREQUEST_RESPONSE,
    __module__ = 'token_pb2'
    # @@protoc_insertion_point(class_scope:hiber.token.CreateTokenRequest.Response)
    ))
  ,
  DESCRIPTOR = _CREATETOKENREQUEST,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.CreateTokenRequest)
  ))
_sym_db.RegisterMessage(CreateTokenRequest)
_sym_db.RegisterMessage(CreateTokenRequest.Response)

DeleteTokenRequest = _reflection.GeneratedProtocolMessageType('DeleteTokenRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _DELETETOKENREQUEST_RESPONSE,
    __module__ = 'token_pb2'
    # @@protoc_insertion_point(class_scope:hiber.token.DeleteTokenRequest.Response)
    ))
  ,
  DESCRIPTOR = _DELETETOKENREQUEST,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.DeleteTokenRequest)
  ))
_sym_db.RegisterMessage(DeleteTokenRequest)
_sym_db.RegisterMessage(DeleteTokenRequest.Response)

UpdateTokenOrganizationPermissionsRequest = _reflection.GeneratedProtocolMessageType('UpdateTokenOrganizationPermissionsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _UPDATETOKENORGANIZATIONPERMISSIONSREQUEST_RESPONSE,
    __module__ = 'token_pb2'
    # @@protoc_insertion_point(class_scope:hiber.token.UpdateTokenOrganizationPermissionsRequest.Response)
    ))
  ,
  DESCRIPTOR = _UPDATETOKENORGANIZATIONPERMISSIONSREQUEST,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.UpdateTokenOrganizationPermissionsRequest)
  ))
_sym_db.RegisterMessage(UpdateTokenOrganizationPermissionsRequest)
_sym_db.RegisterMessage(UpdateTokenOrganizationPermissionsRequest.Response)

UpdateTokenUserPermissionsRequest = _reflection.GeneratedProtocolMessageType('UpdateTokenUserPermissionsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _UPDATETOKENUSERPERMISSIONSREQUEST_RESPONSE,
    __module__ = 'token_pb2'
    # @@protoc_insertion_point(class_scope:hiber.token.UpdateTokenUserPermissionsRequest.Response)
    ))
  ,
  DESCRIPTOR = _UPDATETOKENUSERPERMISSIONSREQUEST,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hiber.token.UpdateTokenUserPermissionsRequest)
  ))
_sym_db.RegisterMessage(UpdateTokenUserPermissionsRequest)
_sym_db.RegisterMessage(UpdateTokenUserPermissionsRequest.Response)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\033global.hiber.api.grpc.tokenB\010TokenApiP\000Z\005hiber'))

_TOKENSERVICE = _descriptor.ServiceDescriptor(
  name='TokenService',
  full_name='hiber.token.TokenService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=1400,
  serialized_end=1961,
  methods=[
  _descriptor.MethodDescriptor(
    name='List',
    full_name='hiber.token.TokenService.List',
    index=0,
    containing_service=None,
    input_type=_LISTTOKENSREQUEST,
    output_type=_LISTTOKENSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Create',
    full_name='hiber.token.TokenService.Create',
    index=1,
    containing_service=None,
    input_type=_CREATETOKENREQUEST,
    output_type=_CREATETOKENREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='hiber.token.TokenService.Delete',
    index=2,
    containing_service=None,
    input_type=_DELETETOKENREQUEST,
    output_type=_DELETETOKENREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateTokenOrganizationPermissions',
    full_name='hiber.token.TokenService.UpdateTokenOrganizationPermissions',
    index=3,
    containing_service=None,
    input_type=_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST,
    output_type=_UPDATETOKENORGANIZATIONPERMISSIONSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateTokenUserPermissions',
    full_name='hiber.token.TokenService.UpdateTokenUserPermissions',
    index=4,
    containing_service=None,
    input_type=_UPDATETOKENUSERPERMISSIONSREQUEST,
    output_type=_UPDATETOKENUSERPERMISSIONSREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_TOKENSERVICE)

DESCRIPTOR.services_by_name['TokenService'] = _TOKENSERVICE

# @@protoc_insertion_point(module_scope)
