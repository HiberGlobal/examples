package global.hiber.api.grpc

import global.hiber.api.grpc.map.MapApi
import global.hiber.api.grpc.map.MapServiceGrpc
import io.grpc.stub.StreamObserver

class MapGrpcController : MapServiceGrpc.MapServiceImplBase(),
  GrpcController {
  override fun map(request: MapApi.MapRequest, response: StreamObserver<MapApi.MapRequest.Response>) =
    response.unary { MapApi.MapRequest.Response.getDefaultInstance() }
}
