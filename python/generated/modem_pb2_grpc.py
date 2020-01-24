# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import modem_pb2 as modem__pb2


class ModemServiceStub(object):
  """The core of the Hiber system, modems are the network nodes that send information and user data.
  This service contains calls to list and manage them, as well as list their messages.
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.Get = channel.unary_unary(
        '/hiber.modem.ModemService/Get',
        request_serializer=modem__pb2.GetModemRequest.SerializeToString,
        response_deserializer=modem__pb2.Modem.FromString,
        )
    self.List = channel.unary_unary(
        '/hiber.modem.ModemService/List',
        request_serializer=modem__pb2.ListModemsRequest.SerializeToString,
        response_deserializer=modem__pb2.ListModemsRequest.Response.FromString,
        )
    self.Messages = channel.unary_unary(
        '/hiber.modem.ModemService/Messages',
        request_serializer=modem__pb2.ListModemMessagesRequest.SerializeToString,
        response_deserializer=modem__pb2.ListModemMessagesRequest.Response.FromString,
        )
    self.MessageCount = channel.unary_unary(
        '/hiber.modem.ModemService/MessageCount',
        request_serializer=modem__pb2.MessageCountRequest.SerializeToString,
        response_deserializer=modem__pb2.MessageCountRequest.Response.FromString,
        )
    self.Rename = channel.unary_unary(
        '/hiber.modem.ModemService/Rename',
        request_serializer=modem__pb2.RenameModemRequest.SerializeToString,
        response_deserializer=modem__pb2.Modem.FromString,
        )
    self.UpdateTags = channel.unary_unary(
        '/hiber.modem.ModemService/UpdateTags',
        request_serializer=modem__pb2.UpdateModemTagsRequest.SerializeToString,
        response_deserializer=modem__pb2.UpdateModemTagsRequest.Response.FromString,
        )
    self.UpdateNotes = channel.unary_unary(
        '/hiber.modem.ModemService/UpdateNotes',
        request_serializer=modem__pb2.UpdateModemNotesRequest.SerializeToString,
        response_deserializer=modem__pb2.UpdateModemNotesRequest.Response.FromString,
        )
    self.UpdateSecureNotes = channel.unary_unary(
        '/hiber.modem.ModemService/UpdateSecureNotes',
        request_serializer=modem__pb2.UpdateModemSecureNotesRequest.SerializeToString,
        response_deserializer=modem__pb2.UpdateModemSecureNotesRequest.Response.FromString,
        )
    self.UpdatePeripherals = channel.unary_unary(
        '/hiber.modem.ModemService/UpdatePeripherals',
        request_serializer=modem__pb2.UpdatePeripheralsRequest.SerializeToString,
        response_deserializer=modem__pb2.UpdatePeripheralsRequest.Response.FromString,
        )
    self.LicenseKeys = channel.unary_unary(
        '/hiber.modem.ModemService/LicenseKeys',
        request_serializer=modem__pb2.LicenseKeysRequest.SerializeToString,
        response_deserializer=modem__pb2.LicenseKeysRequest.Response.FromString,
        )


class ModemServiceServicer(object):
  """The core of the Hiber system, modems are the network nodes that send information and user data.
  This service contains calls to list and manage them, as well as list their messages.
  """

  def Get(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def List(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Messages(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def MessageCount(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Rename(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateTags(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateNotes(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateSecureNotes(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdatePeripherals(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def LicenseKeys(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_ModemServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'Get': grpc.unary_unary_rpc_method_handler(
          servicer.Get,
          request_deserializer=modem__pb2.GetModemRequest.FromString,
          response_serializer=modem__pb2.Modem.SerializeToString,
      ),
      'List': grpc.unary_unary_rpc_method_handler(
          servicer.List,
          request_deserializer=modem__pb2.ListModemsRequest.FromString,
          response_serializer=modem__pb2.ListModemsRequest.Response.SerializeToString,
      ),
      'Messages': grpc.unary_unary_rpc_method_handler(
          servicer.Messages,
          request_deserializer=modem__pb2.ListModemMessagesRequest.FromString,
          response_serializer=modem__pb2.ListModemMessagesRequest.Response.SerializeToString,
      ),
      'MessageCount': grpc.unary_unary_rpc_method_handler(
          servicer.MessageCount,
          request_deserializer=modem__pb2.MessageCountRequest.FromString,
          response_serializer=modem__pb2.MessageCountRequest.Response.SerializeToString,
      ),
      'Rename': grpc.unary_unary_rpc_method_handler(
          servicer.Rename,
          request_deserializer=modem__pb2.RenameModemRequest.FromString,
          response_serializer=modem__pb2.Modem.SerializeToString,
      ),
      'UpdateTags': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateTags,
          request_deserializer=modem__pb2.UpdateModemTagsRequest.FromString,
          response_serializer=modem__pb2.UpdateModemTagsRequest.Response.SerializeToString,
      ),
      'UpdateNotes': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateNotes,
          request_deserializer=modem__pb2.UpdateModemNotesRequest.FromString,
          response_serializer=modem__pb2.UpdateModemNotesRequest.Response.SerializeToString,
      ),
      'UpdateSecureNotes': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateSecureNotes,
          request_deserializer=modem__pb2.UpdateModemSecureNotesRequest.FromString,
          response_serializer=modem__pb2.UpdateModemSecureNotesRequest.Response.SerializeToString,
      ),
      'UpdatePeripherals': grpc.unary_unary_rpc_method_handler(
          servicer.UpdatePeripherals,
          request_deserializer=modem__pb2.UpdatePeripheralsRequest.FromString,
          response_serializer=modem__pb2.UpdatePeripheralsRequest.Response.SerializeToString,
      ),
      'LicenseKeys': grpc.unary_unary_rpc_method_handler(
          servicer.LicenseKeys,
          request_deserializer=modem__pb2.LicenseKeysRequest.FromString,
          response_serializer=modem__pb2.LicenseKeysRequest.Response.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hiber.modem.ModemService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
