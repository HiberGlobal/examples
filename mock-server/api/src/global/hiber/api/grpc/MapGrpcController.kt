@file:Suppress("DEPRECATION")

package global.hiber.api.grpc

import global.hiber.api.grpc.map.MapApi
import global.hiber.api.grpc.map.MapServiceGrpc
import io.grpc.stub.StreamObserver

object MapGrpcController : MapServiceGrpc.MapServiceImplBase(), GrpcController {
  override fun map(request: MapApi.MapRequest, response: StreamObserver<MapApi.MapRequest.Response>) =
    response.unary { MapApi.MapRequest.Response.getDefaultInstance() }

  override fun tileMap(
    request: MapApi.TileMapRequest,
    response: StreamObserver<MapApi.TileMapRequest.Response>
  ) = response.unary { MapApi.TileMapRequest.Response.getDefaultInstance() }

  override fun satellites(
    request: MapApi.SatellitesRequest,
    response: StreamObserver<MapApi.SatellitesRequest.Response>
  ) = response.unary { MapApi.SatellitesRequest.Response.getDefaultInstance() }
}
