# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: currentuser.proto

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
  name='currentuser.proto',
  package='hiber.user',
  syntax='proto3',
  serialized_pb=_b('\n\x11\x63urrentuser.proto\x12\nhiber.user\x1a\nbase.proto\"\xdc\x02\n\x0b\x43urrentUser\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x15\n\rorganizations\x18\x04 \x03(\t\x12\x1c\n\x14\x64\x65\x66\x61ult_organization\x18\x05 \x01(\t\x12\x1f\n\x17requested_organizations\x18\x06 \x03(\t\x12\x1c\n\x14\x63urrent_organization\x18\x08 \x01(\t\x12O\n current_organization_permissions\x18\t \x01(\x0b\x32%.hiber.Filter.OrganizationPermissions\x12\x37\n\x10user_permissions\x18\n \x01(\x0b\x32\x1d.hiber.Filter.UserPermissions\x12 \n\x18mission_control_settings\x18\x0b \x01(\tJ\x04\x08\x07\x10\x08\"\x14\n\x12\x43urrentUserRequest\"8\n\x14RequestAccessRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a\n\n\x08Response\">\n\x1a\x43\x61ncelAccessRequestRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a\n\n\x08Response\"&\n\x18\x44\x65leteCurrentUserRequest\x1a\n\n\x08Response\"b\n UpdateDefaultOrganizationRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a(\n\x08Response\x12\x1c\n\x14\x64\x65\x66\x61ult_organization\x18\x01 \x01(\t\"c\n#UpdateMissionControlSettingsRequest\x12\x0e\n\x06update\x18\x01 \x01(\t\x1a,\n\x08Response\x12 \n\x18mission_control_settings\x18\x01 \x01(\t\"C\n\x1e\x41\x63\x63\x65ssibleOrganizationsRequest\x1a!\n\x08Response\x12\x15\n\rorganizations\x18\x01 \x03(\t2\x9f\x06\n\x12\x43urrentUserService\x12\x46\n\x0b\x43urrentUser\x12\x1e.hiber.user.CurrentUserRequest\x1a\x17.hiber.user.CurrentUser\x12\\\n\rRequestAccess\x12 .hiber.user.RequestAccessRequest\x1a).hiber.user.RequestAccessRequest.Response\x12n\n\x13\x43\x61ncelAccessRequest\x12&.hiber.user.CancelAccessRequestRequest\x1a/.hiber.user.CancelAccessRequestRequest.Response\x12h\n\x11\x44\x65leteCurrentUser\x12$.hiber.user.DeleteCurrentUserRequest\x1a-.hiber.user.DeleteCurrentUserRequest.Response\x12\x80\x01\n\x19UpdateDefaultOrganization\x12,.hiber.user.UpdateDefaultOrganizationRequest\x1a\x35.hiber.user.UpdateDefaultOrganizationRequest.Response\x12\x89\x01\n\x1cUpdateMissionControlSettings\x12/.hiber.user.UpdateMissionControlSettingsRequest\x1a\x38.hiber.user.UpdateMissionControlSettingsRequest.Response\x12z\n\x17\x41\x63\x63\x65ssibleOrganizations\x12*.hiber.user.AccessibleOrganizationsRequest\x1a\x33.hiber.user.AccessibleOrganizationsRequest.ResponseB5\n\x1aglobal.hiber.api.grpc.userB\x0e\x43urrentUserApiP\x00Z\x05hiberb\x06proto3')
  ,
  dependencies=[base__pb2.DESCRIPTOR,])




_CURRENTUSER = _descriptor.Descriptor(
  name='CurrentUser',
  full_name='hiber.user.CurrentUser',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='hiber.user.CurrentUser.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='email', full_name='hiber.user.CurrentUser.email', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='hiber.user.CurrentUser.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='organizations', full_name='hiber.user.CurrentUser.organizations', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='default_organization', full_name='hiber.user.CurrentUser.default_organization', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='requested_organizations', full_name='hiber.user.CurrentUser.requested_organizations', index=5,
      number=6, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='current_organization', full_name='hiber.user.CurrentUser.current_organization', index=6,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='current_organization_permissions', full_name='hiber.user.CurrentUser.current_organization_permissions', index=7,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='user_permissions', full_name='hiber.user.CurrentUser.user_permissions', index=8,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='mission_control_settings', full_name='hiber.user.CurrentUser.mission_control_settings', index=9,
      number=11, type=9, cpp_type=9, label=1,
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
  serialized_start=46,
  serialized_end=394,
)


_CURRENTUSERREQUEST = _descriptor.Descriptor(
  name='CurrentUserRequest',
  full_name='hiber.user.CurrentUserRequest',
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
  serialized_start=396,
  serialized_end=416,
)


_REQUESTACCESSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.RequestAccessRequest.Response',
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
  serialized_start=464,
  serialized_end=474,
)

_REQUESTACCESSREQUEST = _descriptor.Descriptor(
  name='RequestAccessRequest',
  full_name='hiber.user.RequestAccessRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.user.RequestAccessRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_REQUESTACCESSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=418,
  serialized_end=474,
)


_CANCELACCESSREQUESTREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.CancelAccessRequestRequest.Response',
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
  serialized_start=464,
  serialized_end=474,
)

_CANCELACCESSREQUESTREQUEST = _descriptor.Descriptor(
  name='CancelAccessRequestRequest',
  full_name='hiber.user.CancelAccessRequestRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.user.CancelAccessRequestRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CANCELACCESSREQUESTREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=476,
  serialized_end=538,
)


_DELETECURRENTUSERREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.DeleteCurrentUserRequest.Response',
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
  serialized_start=464,
  serialized_end=474,
)

_DELETECURRENTUSERREQUEST = _descriptor.Descriptor(
  name='DeleteCurrentUserRequest',
  full_name='hiber.user.DeleteCurrentUserRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[_DELETECURRENTUSERREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=540,
  serialized_end=578,
)


_UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.UpdateDefaultOrganizationRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='default_organization', full_name='hiber.user.UpdateDefaultOrganizationRequest.Response.default_organization', index=0,
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
  serialized_start=638,
  serialized_end=678,
)

_UPDATEDEFAULTORGANIZATIONREQUEST = _descriptor.Descriptor(
  name='UpdateDefaultOrganizationRequest',
  full_name='hiber.user.UpdateDefaultOrganizationRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organization', full_name='hiber.user.UpdateDefaultOrganizationRequest.organization', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=580,
  serialized_end=678,
)


_UPDATEMISSIONCONTROLSETTINGSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.UpdateMissionControlSettingsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='mission_control_settings', full_name='hiber.user.UpdateMissionControlSettingsRequest.Response.mission_control_settings', index=0,
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
  serialized_start=735,
  serialized_end=779,
)

_UPDATEMISSIONCONTROLSETTINGSREQUEST = _descriptor.Descriptor(
  name='UpdateMissionControlSettingsRequest',
  full_name='hiber.user.UpdateMissionControlSettingsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='update', full_name='hiber.user.UpdateMissionControlSettingsRequest.update', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEMISSIONCONTROLSETTINGSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=680,
  serialized_end=779,
)


_ACCESSIBLEORGANIZATIONSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.AccessibleOrganizationsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='organizations', full_name='hiber.user.AccessibleOrganizationsRequest.Response.organizations', index=0,
      number=1, type=9, cpp_type=9, label=3,
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
  serialized_start=815,
  serialized_end=848,
)

_ACCESSIBLEORGANIZATIONSREQUEST = _descriptor.Descriptor(
  name='AccessibleOrganizationsRequest',
  full_name='hiber.user.AccessibleOrganizationsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[_ACCESSIBLEORGANIZATIONSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=781,
  serialized_end=848,
)

_CURRENTUSER.fields_by_name['current_organization_permissions'].message_type = base__pb2._FILTER_ORGANIZATIONPERMISSIONS
_CURRENTUSER.fields_by_name['user_permissions'].message_type = base__pb2._FILTER_USERPERMISSIONS
_REQUESTACCESSREQUEST_RESPONSE.containing_type = _REQUESTACCESSREQUEST
_CANCELACCESSREQUESTREQUEST_RESPONSE.containing_type = _CANCELACCESSREQUESTREQUEST
_DELETECURRENTUSERREQUEST_RESPONSE.containing_type = _DELETECURRENTUSERREQUEST
_UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE.containing_type = _UPDATEDEFAULTORGANIZATIONREQUEST
_UPDATEMISSIONCONTROLSETTINGSREQUEST_RESPONSE.containing_type = _UPDATEMISSIONCONTROLSETTINGSREQUEST
_ACCESSIBLEORGANIZATIONSREQUEST_RESPONSE.containing_type = _ACCESSIBLEORGANIZATIONSREQUEST
DESCRIPTOR.message_types_by_name['CurrentUser'] = _CURRENTUSER
DESCRIPTOR.message_types_by_name['CurrentUserRequest'] = _CURRENTUSERREQUEST
DESCRIPTOR.message_types_by_name['RequestAccessRequest'] = _REQUESTACCESSREQUEST
DESCRIPTOR.message_types_by_name['CancelAccessRequestRequest'] = _CANCELACCESSREQUESTREQUEST
DESCRIPTOR.message_types_by_name['DeleteCurrentUserRequest'] = _DELETECURRENTUSERREQUEST
DESCRIPTOR.message_types_by_name['UpdateDefaultOrganizationRequest'] = _UPDATEDEFAULTORGANIZATIONREQUEST
DESCRIPTOR.message_types_by_name['UpdateMissionControlSettingsRequest'] = _UPDATEMISSIONCONTROLSETTINGSREQUEST
DESCRIPTOR.message_types_by_name['AccessibleOrganizationsRequest'] = _ACCESSIBLEORGANIZATIONSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CurrentUser = _reflection.GeneratedProtocolMessageType('CurrentUser', (_message.Message,), dict(
  DESCRIPTOR = _CURRENTUSER,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.CurrentUser)
  ))
_sym_db.RegisterMessage(CurrentUser)

CurrentUserRequest = _reflection.GeneratedProtocolMessageType('CurrentUserRequest', (_message.Message,), dict(
  DESCRIPTOR = _CURRENTUSERREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.CurrentUserRequest)
  ))
_sym_db.RegisterMessage(CurrentUserRequest)

RequestAccessRequest = _reflection.GeneratedProtocolMessageType('RequestAccessRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _REQUESTACCESSREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.RequestAccessRequest.Response)
    ))
  ,
  DESCRIPTOR = _REQUESTACCESSREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.RequestAccessRequest)
  ))
_sym_db.RegisterMessage(RequestAccessRequest)
_sym_db.RegisterMessage(RequestAccessRequest.Response)

CancelAccessRequestRequest = _reflection.GeneratedProtocolMessageType('CancelAccessRequestRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _CANCELACCESSREQUESTREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.CancelAccessRequestRequest.Response)
    ))
  ,
  DESCRIPTOR = _CANCELACCESSREQUESTREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.CancelAccessRequestRequest)
  ))
_sym_db.RegisterMessage(CancelAccessRequestRequest)
_sym_db.RegisterMessage(CancelAccessRequestRequest.Response)

DeleteCurrentUserRequest = _reflection.GeneratedProtocolMessageType('DeleteCurrentUserRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _DELETECURRENTUSERREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.DeleteCurrentUserRequest.Response)
    ))
  ,
  DESCRIPTOR = _DELETECURRENTUSERREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.DeleteCurrentUserRequest)
  ))
_sym_db.RegisterMessage(DeleteCurrentUserRequest)
_sym_db.RegisterMessage(DeleteCurrentUserRequest.Response)

UpdateDefaultOrganizationRequest = _reflection.GeneratedProtocolMessageType('UpdateDefaultOrganizationRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.UpdateDefaultOrganizationRequest.Response)
    ))
  ,
  DESCRIPTOR = _UPDATEDEFAULTORGANIZATIONREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.UpdateDefaultOrganizationRequest)
  ))
_sym_db.RegisterMessage(UpdateDefaultOrganizationRequest)
_sym_db.RegisterMessage(UpdateDefaultOrganizationRequest.Response)

UpdateMissionControlSettingsRequest = _reflection.GeneratedProtocolMessageType('UpdateMissionControlSettingsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _UPDATEMISSIONCONTROLSETTINGSREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.UpdateMissionControlSettingsRequest.Response)
    ))
  ,
  DESCRIPTOR = _UPDATEMISSIONCONTROLSETTINGSREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.UpdateMissionControlSettingsRequest)
  ))
_sym_db.RegisterMessage(UpdateMissionControlSettingsRequest)
_sym_db.RegisterMessage(UpdateMissionControlSettingsRequest.Response)

AccessibleOrganizationsRequest = _reflection.GeneratedProtocolMessageType('AccessibleOrganizationsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _ACCESSIBLEORGANIZATIONSREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.AccessibleOrganizationsRequest.Response)
    ))
  ,
  DESCRIPTOR = _ACCESSIBLEORGANIZATIONSREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.AccessibleOrganizationsRequest)
  ))
_sym_db.RegisterMessage(AccessibleOrganizationsRequest)
_sym_db.RegisterMessage(AccessibleOrganizationsRequest.Response)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\032global.hiber.api.grpc.userB\016CurrentUserApiP\000Z\005hiber'))

_CURRENTUSERSERVICE = _descriptor.ServiceDescriptor(
  name='CurrentUserService',
  full_name='hiber.user.CurrentUserService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=851,
  serialized_end=1650,
  methods=[
  _descriptor.MethodDescriptor(
    name='CurrentUser',
    full_name='hiber.user.CurrentUserService.CurrentUser',
    index=0,
    containing_service=None,
    input_type=_CURRENTUSERREQUEST,
    output_type=_CURRENTUSER,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='RequestAccess',
    full_name='hiber.user.CurrentUserService.RequestAccess',
    index=1,
    containing_service=None,
    input_type=_REQUESTACCESSREQUEST,
    output_type=_REQUESTACCESSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CancelAccessRequest',
    full_name='hiber.user.CurrentUserService.CancelAccessRequest',
    index=2,
    containing_service=None,
    input_type=_CANCELACCESSREQUESTREQUEST,
    output_type=_CANCELACCESSREQUESTREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteCurrentUser',
    full_name='hiber.user.CurrentUserService.DeleteCurrentUser',
    index=3,
    containing_service=None,
    input_type=_DELETECURRENTUSERREQUEST,
    output_type=_DELETECURRENTUSERREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateDefaultOrganization',
    full_name='hiber.user.CurrentUserService.UpdateDefaultOrganization',
    index=4,
    containing_service=None,
    input_type=_UPDATEDEFAULTORGANIZATIONREQUEST,
    output_type=_UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateMissionControlSettings',
    full_name='hiber.user.CurrentUserService.UpdateMissionControlSettings',
    index=5,
    containing_service=None,
    input_type=_UPDATEMISSIONCONTROLSETTINGSREQUEST,
    output_type=_UPDATEMISSIONCONTROLSETTINGSREQUEST_RESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='AccessibleOrganizations',
    full_name='hiber.user.CurrentUserService.AccessibleOrganizations',
    index=6,
    containing_service=None,
    input_type=_ACCESSIBLEORGANIZATIONSREQUEST,
    output_type=_ACCESSIBLEORGANIZATIONSREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_CURRENTUSERSERVICE)

DESCRIPTOR.services_by_name['CurrentUserService'] = _CURRENTUSERSERVICE

# @@protoc_insertion_point(module_scope)
