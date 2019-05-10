# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import map_pb2 as map__pb2


class MapServiceStub(object):
  """Map of modems, in different map levels to enable data to be displayed efficiently
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.TileMap = channel.unary_unary(
        '/hiber.map.MapService/TileMap',
        request_serializer=map__pb2.TileMapRequest.SerializeToString,
        response_deserializer=map__pb2.TileMapRequest.Response.FromString,
        )
    self.Satellites = channel.unary_unary(
        '/hiber.map.MapService/Satellites',
        request_serializer=map__pb2.SatellitesRequest.SerializeToString,
        response_deserializer=map__pb2.SatellitesRequest.Response.FromString,
        )
    self.Map = channel.unary_unary(
        '/hiber.map.MapService/Map',
        request_serializer=map__pb2.MapRequest.SerializeToString,
        response_deserializer=map__pb2.MapRequest.Response.FromString,
        )


class MapServiceServicer(object):
  """Map of modems, in different map levels to enable data to be displayed efficiently
  """

  def TileMap(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Satellites(self, request, context):
    """This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
    It will be removed in a future version.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Map(self, request, context):
    """This is the old map request. It has been deprecated and will be removed in a future version. 
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_MapServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'TileMap': grpc.unary_unary_rpc_method_handler(
          servicer.TileMap,
          request_deserializer=map__pb2.TileMapRequest.FromString,
          response_serializer=map__pb2.TileMapRequest.Response.SerializeToString,
      ),
      'Satellites': grpc.unary_unary_rpc_method_handler(
          servicer.Satellites,
          request_deserializer=map__pb2.SatellitesRequest.FromString,
          response_serializer=map__pb2.SatellitesRequest.Response.SerializeToString,
      ),
      'Map': grpc.unary_unary_rpc_method_handler(
          servicer.Map,
          request_deserializer=map__pb2.MapRequest.FromString,
          response_serializer=map__pb2.MapRequest.Response.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hiber.map.MapService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
