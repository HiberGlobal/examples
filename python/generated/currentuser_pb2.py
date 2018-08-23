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




DESCRIPTOR = _descriptor.FileDescriptor(
  name='currentuser.proto',
  package='hiber.user',
  syntax='proto3',
  serialized_pb=_b('\n\x11\x63urrentuser.proto\x12\nhiber.user\"\xd0\x03\n\x0b\x43urrentUser\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x15\n\rorganizations\x18\x04 \x03(\t\x12\x1c\n\x14\x64\x65\x66\x61ult_organization\x18\x05 \x01(\t\x12\x1f\n\x17requested_organizations\x18\x06 \x03(\t\x12\x32\n\x08settings\x18\x07 \x01(\x0b\x32 .hiber.user.CurrentUser.Settings\x1a\x8d\x02\n\x08Settings\x12\x37\n\x06layout\x18\x01 \x01(\x0e\x32\'.hiber.user.CurrentUser.Settings.Layout\x12<\n\tmap_style\x18\x02 \x01(\x0e\x32).hiber.user.CurrentUser.Settings.MapStyle\"9\n\x06Layout\x12\x12\n\x0e\x44\x45\x46\x41ULT_LAYOUT\x10\x00\x12\r\n\tLANDSCAPE\x10\x01\x12\x0c\n\x08PORTRAIT\x10\x02\"O\n\x08MapStyle\x12\x15\n\x11\x44\x45\x46\x41ULT_MAP_STYLE\x10\x00\x12\r\n\tSATELLITE\x10\x01\x12\x10\n\x0cHIBER_VISION\x10\x02\x12\x0b\n\x07\x43LASSIC\x10\x03\"\x14\n\x12\x43urrentUserRequest\"8\n\x14RequestAccessRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a\n\n\x08Response\">\n\x1a\x43\x61ncelAccessRequestRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a\n\n\x08Response\"&\n\x18\x44\x65leteCurrentUserRequest\x1a\n\n\x08Response\"b\n UpdateDefaultOrganizationRequest\x12\x14\n\x0corganization\x18\x01 \x01(\t\x1a(\n\x08Response\x12\x1c\n\x14\x64\x65\x66\x61ult_organization\x18\x01 \x01(\t\"\x92\x01\n\x15UpdateSettingsRequest\x12\x39\n\x0fupdate_settings\x18\x01 \x01(\x0b\x32 .hiber.user.CurrentUser.Settings\x1a>\n\x08Response\x12\x32\n\x08settings\x18\x01 \x01(\x0b\x32 .hiber.user.CurrentUser.Settings2\xf8\x04\n\x12\x43urrentUserService\x12\x46\n\x0b\x43urrentUser\x12\x1e.hiber.user.CurrentUserRequest\x1a\x17.hiber.user.CurrentUser\x12\\\n\rRequestAccess\x12 .hiber.user.RequestAccessRequest\x1a).hiber.user.RequestAccessRequest.Response\x12n\n\x13\x43\x61ncelAccessRequest\x12&.hiber.user.CancelAccessRequestRequest\x1a/.hiber.user.CancelAccessRequestRequest.Response\x12h\n\x11\x44\x65leteCurrentUser\x12$.hiber.user.DeleteCurrentUserRequest\x1a-.hiber.user.DeleteCurrentUserRequest.Response\x12\x80\x01\n\x19UpdateDefaultOrganization\x12,.hiber.user.UpdateDefaultOrganizationRequest\x1a\x35.hiber.user.UpdateDefaultOrganizationRequest.Response\x12_\n\x0eUpdateSettings\x12!.hiber.user.UpdateSettingsRequest\x1a*.hiber.user.UpdateSettingsRequest.ResponseB5\n\x1aglobal.hiber.api.grpc.userB\x0e\x43urrentUserApiP\x00Z\x05hiberb\x06proto3')
)



_CURRENTUSER_SETTINGS_LAYOUT = _descriptor.EnumDescriptor(
  name='Layout',
  full_name='hiber.user.CurrentUser.Settings.Layout',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT_LAYOUT', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LANDSCAPE', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PORTRAIT', index=2, number=2,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=360,
  serialized_end=417,
)
_sym_db.RegisterEnumDescriptor(_CURRENTUSER_SETTINGS_LAYOUT)

_CURRENTUSER_SETTINGS_MAPSTYLE = _descriptor.EnumDescriptor(
  name='MapStyle',
  full_name='hiber.user.CurrentUser.Settings.MapStyle',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT_MAP_STYLE', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SATELLITE', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HIBER_VISION', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLASSIC', index=3, number=3,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=419,
  serialized_end=498,
)
_sym_db.RegisterEnumDescriptor(_CURRENTUSER_SETTINGS_MAPSTYLE)


_CURRENTUSER_SETTINGS = _descriptor.Descriptor(
  name='Settings',
  full_name='hiber.user.CurrentUser.Settings',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='layout', full_name='hiber.user.CurrentUser.Settings.layout', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='map_style', full_name='hiber.user.CurrentUser.Settings.map_style', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CURRENTUSER_SETTINGS_LAYOUT,
    _CURRENTUSER_SETTINGS_MAPSTYLE,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=229,
  serialized_end=498,
)

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
      name='settings', full_name='hiber.user.CurrentUser.settings', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CURRENTUSER_SETTINGS, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=34,
  serialized_end=498,
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
  serialized_start=500,
  serialized_end=520,
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
  serialized_start=568,
  serialized_end=578,
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
  serialized_start=522,
  serialized_end=578,
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
  serialized_start=568,
  serialized_end=578,
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
  serialized_start=580,
  serialized_end=642,
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
  serialized_start=568,
  serialized_end=578,
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
  serialized_start=644,
  serialized_end=682,
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
  serialized_start=742,
  serialized_end=782,
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
  serialized_start=684,
  serialized_end=782,
)


_UPDATESETTINGSREQUEST_RESPONSE = _descriptor.Descriptor(
  name='Response',
  full_name='hiber.user.UpdateSettingsRequest.Response',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='settings', full_name='hiber.user.UpdateSettingsRequest.Response.settings', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_start=869,
  serialized_end=931,
)

_UPDATESETTINGSREQUEST = _descriptor.Descriptor(
  name='UpdateSettingsRequest',
  full_name='hiber.user.UpdateSettingsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='update_settings', full_name='hiber.user.UpdateSettingsRequest.update_settings', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_UPDATESETTINGSREQUEST_RESPONSE, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=785,
  serialized_end=931,
)

_CURRENTUSER_SETTINGS.fields_by_name['layout'].enum_type = _CURRENTUSER_SETTINGS_LAYOUT
_CURRENTUSER_SETTINGS.fields_by_name['map_style'].enum_type = _CURRENTUSER_SETTINGS_MAPSTYLE
_CURRENTUSER_SETTINGS.containing_type = _CURRENTUSER
_CURRENTUSER_SETTINGS_LAYOUT.containing_type = _CURRENTUSER_SETTINGS
_CURRENTUSER_SETTINGS_MAPSTYLE.containing_type = _CURRENTUSER_SETTINGS
_CURRENTUSER.fields_by_name['settings'].message_type = _CURRENTUSER_SETTINGS
_REQUESTACCESSREQUEST_RESPONSE.containing_type = _REQUESTACCESSREQUEST
_CANCELACCESSREQUESTREQUEST_RESPONSE.containing_type = _CANCELACCESSREQUESTREQUEST
_DELETECURRENTUSERREQUEST_RESPONSE.containing_type = _DELETECURRENTUSERREQUEST
_UPDATEDEFAULTORGANIZATIONREQUEST_RESPONSE.containing_type = _UPDATEDEFAULTORGANIZATIONREQUEST
_UPDATESETTINGSREQUEST_RESPONSE.fields_by_name['settings'].message_type = _CURRENTUSER_SETTINGS
_UPDATESETTINGSREQUEST_RESPONSE.containing_type = _UPDATESETTINGSREQUEST
_UPDATESETTINGSREQUEST.fields_by_name['update_settings'].message_type = _CURRENTUSER_SETTINGS
DESCRIPTOR.message_types_by_name['CurrentUser'] = _CURRENTUSER
DESCRIPTOR.message_types_by_name['CurrentUserRequest'] = _CURRENTUSERREQUEST
DESCRIPTOR.message_types_by_name['RequestAccessRequest'] = _REQUESTACCESSREQUEST
DESCRIPTOR.message_types_by_name['CancelAccessRequestRequest'] = _CANCELACCESSREQUESTREQUEST
DESCRIPTOR.message_types_by_name['DeleteCurrentUserRequest'] = _DELETECURRENTUSERREQUEST
DESCRIPTOR.message_types_by_name['UpdateDefaultOrganizationRequest'] = _UPDATEDEFAULTORGANIZATIONREQUEST
DESCRIPTOR.message_types_by_name['UpdateSettingsRequest'] = _UPDATESETTINGSREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CurrentUser = _reflection.GeneratedProtocolMessageType('CurrentUser', (_message.Message,), dict(

  Settings = _reflection.GeneratedProtocolMessageType('Settings', (_message.Message,), dict(
    DESCRIPTOR = _CURRENTUSER_SETTINGS,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.CurrentUser.Settings)
    ))
  ,
  DESCRIPTOR = _CURRENTUSER,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.CurrentUser)
  ))
_sym_db.RegisterMessage(CurrentUser)
_sym_db.RegisterMessage(CurrentUser.Settings)

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

UpdateSettingsRequest = _reflection.GeneratedProtocolMessageType('UpdateSettingsRequest', (_message.Message,), dict(

  Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), dict(
    DESCRIPTOR = _UPDATESETTINGSREQUEST_RESPONSE,
    __module__ = 'currentuser_pb2'
    # @@protoc_insertion_point(class_scope:hiber.user.UpdateSettingsRequest.Response)
    ))
  ,
  DESCRIPTOR = _UPDATESETTINGSREQUEST,
  __module__ = 'currentuser_pb2'
  # @@protoc_insertion_point(class_scope:hiber.user.UpdateSettingsRequest)
  ))
_sym_db.RegisterMessage(UpdateSettingsRequest)
_sym_db.RegisterMessage(UpdateSettingsRequest.Response)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\032global.hiber.api.grpc.userB\016CurrentUserApiP\000Z\005hiber'))

_CURRENTUSERSERVICE = _descriptor.ServiceDescriptor(
  name='CurrentUserService',
  full_name='hiber.user.CurrentUserService',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=934,
  serialized_end=1566,
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
    name='UpdateSettings',
    full_name='hiber.user.CurrentUserService.UpdateSettings',
    index=5,
    containing_service=None,
    input_type=_UPDATESETTINGSREQUEST,
    output_type=_UPDATESETTINGSREQUEST_RESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_CURRENTUSERSERVICE)

DESCRIPTOR.services_by_name['CurrentUserService'] = _CURRENTUSERSERVICE

# @@protoc_insertion_point(module_scope)
