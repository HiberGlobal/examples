# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import currentuser_pb2 as currentuser__pb2


class CurrentUserServiceStub(object):
  """Calls related to the current user. Typically, a newly created user only has access to these calls, all
  others require an organization to be linked.
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CurrentUser = channel.unary_unary(
        '/hiber.user.CurrentUserService/CurrentUser',
        request_serializer=currentuser__pb2.CurrentUserRequest.SerializeToString,
        response_deserializer=currentuser__pb2.CurrentUser.FromString,
        )
    self.DeleteCurrentUser = channel.unary_unary(
        '/hiber.user.CurrentUserService/DeleteCurrentUser',
        request_serializer=currentuser__pb2.DeleteCurrentUserRequest.SerializeToString,
        response_deserializer=currentuser__pb2.DeleteCurrentUserRequest.Response.FromString,
        )
    self.RequestAccess = channel.unary_unary(
        '/hiber.user.CurrentUserService/RequestAccess',
        request_serializer=currentuser__pb2.RequestAccessRequest.SerializeToString,
        response_deserializer=currentuser__pb2.RequestAccessRequest.Response.FromString,
        )
    self.CancelAccessRequest = channel.unary_unary(
        '/hiber.user.CurrentUserService/CancelAccessRequest',
        request_serializer=currentuser__pb2.CancelAccessRequestRequest.SerializeToString,
        response_deserializer=currentuser__pb2.CancelAccessRequestRequest.Response.FromString,
        )
    self.ListOrganizationInvites = channel.unary_unary(
        '/hiber.user.CurrentUserService/ListOrganizationInvites',
        request_serializer=currentuser__pb2.ListOrganizationInvitesRequest.SerializeToString,
        response_deserializer=currentuser__pb2.ListOrganizationInvitesRequest.Response.FromString,
        )
    self.AcceptOrganizationInvite = channel.unary_unary(
        '/hiber.user.CurrentUserService/AcceptOrganizationInvite',
        request_serializer=currentuser__pb2.AcceptOrganizationInviteRequest.SerializeToString,
        response_deserializer=currentuser__pb2.AcceptOrganizationInviteRequest.Response.FromString,
        )
    self.AccessibleOrganizations = channel.unary_unary(
        '/hiber.user.CurrentUserService/AccessibleOrganizations',
        request_serializer=currentuser__pb2.AccessibleOrganizationsRequest.SerializeToString,
        response_deserializer=currentuser__pb2.AccessibleOrganizationsRequest.Response.FromString,
        )
    self.UpdateDefaultOrganization = channel.unary_unary(
        '/hiber.user.CurrentUserService/UpdateDefaultOrganization',
        request_serializer=currentuser__pb2.UpdateDefaultOrganizationRequest.SerializeToString,
        response_deserializer=currentuser__pb2.UpdateDefaultOrganizationRequest.Response.FromString,
        )
    self.UpdateMissionControlSettings = channel.unary_unary(
        '/hiber.user.CurrentUserService/UpdateMissionControlSettings',
        request_serializer=currentuser__pb2.UpdateMissionControlSettingsRequest.SerializeToString,
        response_deserializer=currentuser__pb2.UpdateMissionControlSettingsRequest.Response.FromString,
        )
    self.AcceptTermsAndConditions = channel.unary_unary(
        '/hiber.user.CurrentUserService/AcceptTermsAndConditions',
        request_serializer=currentuser__pb2.AcceptTermsAndConditionsRequest.SerializeToString,
        response_deserializer=currentuser__pb2.AcceptTermsAndConditionsRequest.Response.FromString,
        )


class CurrentUserServiceServicer(object):
  """Calls related to the current user. Typically, a newly created user only has access to these calls, all
  others require an organization to be linked.
  """

  def CurrentUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteCurrentUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def RequestAccess(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CancelAccessRequest(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListOrganizationInvites(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AcceptOrganizationInvite(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AccessibleOrganizations(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateDefaultOrganization(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateMissionControlSettings(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AcceptTermsAndConditions(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_CurrentUserServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CurrentUser': grpc.unary_unary_rpc_method_handler(
          servicer.CurrentUser,
          request_deserializer=currentuser__pb2.CurrentUserRequest.FromString,
          response_serializer=currentuser__pb2.CurrentUser.SerializeToString,
      ),
      'DeleteCurrentUser': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteCurrentUser,
          request_deserializer=currentuser__pb2.DeleteCurrentUserRequest.FromString,
          response_serializer=currentuser__pb2.DeleteCurrentUserRequest.Response.SerializeToString,
      ),
      'RequestAccess': grpc.unary_unary_rpc_method_handler(
          servicer.RequestAccess,
          request_deserializer=currentuser__pb2.RequestAccessRequest.FromString,
          response_serializer=currentuser__pb2.RequestAccessRequest.Response.SerializeToString,
      ),
      'CancelAccessRequest': grpc.unary_unary_rpc_method_handler(
          servicer.CancelAccessRequest,
          request_deserializer=currentuser__pb2.CancelAccessRequestRequest.FromString,
          response_serializer=currentuser__pb2.CancelAccessRequestRequest.Response.SerializeToString,
      ),
      'ListOrganizationInvites': grpc.unary_unary_rpc_method_handler(
          servicer.ListOrganizationInvites,
          request_deserializer=currentuser__pb2.ListOrganizationInvitesRequest.FromString,
          response_serializer=currentuser__pb2.ListOrganizationInvitesRequest.Response.SerializeToString,
      ),
      'AcceptOrganizationInvite': grpc.unary_unary_rpc_method_handler(
          servicer.AcceptOrganizationInvite,
          request_deserializer=currentuser__pb2.AcceptOrganizationInviteRequest.FromString,
          response_serializer=currentuser__pb2.AcceptOrganizationInviteRequest.Response.SerializeToString,
      ),
      'AccessibleOrganizations': grpc.unary_unary_rpc_method_handler(
          servicer.AccessibleOrganizations,
          request_deserializer=currentuser__pb2.AccessibleOrganizationsRequest.FromString,
          response_serializer=currentuser__pb2.AccessibleOrganizationsRequest.Response.SerializeToString,
      ),
      'UpdateDefaultOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateDefaultOrganization,
          request_deserializer=currentuser__pb2.UpdateDefaultOrganizationRequest.FromString,
          response_serializer=currentuser__pb2.UpdateDefaultOrganizationRequest.Response.SerializeToString,
      ),
      'UpdateMissionControlSettings': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateMissionControlSettings,
          request_deserializer=currentuser__pb2.UpdateMissionControlSettingsRequest.FromString,
          response_serializer=currentuser__pb2.UpdateMissionControlSettingsRequest.Response.SerializeToString,
      ),
      'AcceptTermsAndConditions': grpc.unary_unary_rpc_method_handler(
          servicer.AcceptTermsAndConditions,
          request_deserializer=currentuser__pb2.AcceptTermsAndConditionsRequest.FromString,
          response_serializer=currentuser__pb2.AcceptTermsAndConditionsRequest.Response.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hiber.user.CurrentUserService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
