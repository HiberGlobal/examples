# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import sso_pb2 as sso__pb2


class SingleSignOnServiceStub(object):
  """Single sign on support service. 
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.Zendesk = channel.unary_unary(
        '/hiber.sso.SingleSignOnService/Zendesk',
        request_serializer=sso__pb2.ZendeskTokenRequest.SerializeToString,
        response_deserializer=sso__pb2.ZendeskTokenRequest.Response.FromString,
        )


class SingleSignOnServiceServicer(object):
  """Single sign on support service. 
  """

  def Zendesk(self, request, context):
    """Zendesk SSO using custom JWT 
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_SingleSignOnServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'Zendesk': grpc.unary_unary_rpc_method_handler(
          servicer.Zendesk,
          request_deserializer=sso__pb2.ZendeskTokenRequest.FromString,
          response_serializer=sso__pb2.ZendeskTokenRequest.Response.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hiber.sso.SingleSignOnService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
