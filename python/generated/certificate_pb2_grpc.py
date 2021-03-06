# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import certificate_pb2 as certificate__pb2


class CertificateServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.List = channel.unary_unary(
        '/hiber.certificate.CertificateService/List',
        request_serializer=certificate__pb2.ListCertificatesRequest.SerializeToString,
        response_deserializer=certificate__pb2.ListCertificatesRequest.Response.FromString,
        )
    self.Rename = channel.unary_unary(
        '/hiber.certificate.CertificateService/Rename',
        request_serializer=certificate__pb2.RenameCertificateRequest.SerializeToString,
        response_deserializer=certificate__pb2.RenameCertificateRequest.Response.FromString,
        )
    self.Upload = channel.unary_unary(
        '/hiber.certificate.CertificateService/Upload',
        request_serializer=certificate__pb2.UploadCertificateRequest.SerializeToString,
        response_deserializer=certificate__pb2.UploadCertificateRequest.Response.FromString,
        )
    self.Delete = channel.unary_unary(
        '/hiber.certificate.CertificateService/Delete',
        request_serializer=certificate__pb2.DeleteCertificateRequest.SerializeToString,
        response_deserializer=certificate__pb2.DeleteCertificateRequest.Response.FromString,
        )


class CertificateServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def List(self, request, context):
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

  def Upload(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Delete(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_CertificateServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'List': grpc.unary_unary_rpc_method_handler(
          servicer.List,
          request_deserializer=certificate__pb2.ListCertificatesRequest.FromString,
          response_serializer=certificate__pb2.ListCertificatesRequest.Response.SerializeToString,
      ),
      'Rename': grpc.unary_unary_rpc_method_handler(
          servicer.Rename,
          request_deserializer=certificate__pb2.RenameCertificateRequest.FromString,
          response_serializer=certificate__pb2.RenameCertificateRequest.Response.SerializeToString,
      ),
      'Upload': grpc.unary_unary_rpc_method_handler(
          servicer.Upload,
          request_deserializer=certificate__pb2.UploadCertificateRequest.FromString,
          response_serializer=certificate__pb2.UploadCertificateRequest.Response.SerializeToString,
      ),
      'Delete': grpc.unary_unary_rpc_method_handler(
          servicer.Delete,
          request_deserializer=certificate__pb2.DeleteCertificateRequest.FromString,
          response_serializer=certificate__pb2.DeleteCertificateRequest.Response.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hiber.certificate.CertificateService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
