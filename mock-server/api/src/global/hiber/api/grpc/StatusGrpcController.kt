package global.hiber.api.grpc

import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.status.StatusApi
import global.hiber.api.grpc.status.StatusServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

object StatusGrpcController : StatusServiceGrpc.StatusServiceImplBase(), GrpcController {

  override fun status(
    request: StatusApi.StatusRequest,
    response: StreamObserver<StatusApi.StatusRequest.Response>
  ) = response.unary {
    StatusApi.StatusRequest.Response.newBuilder().also {
      it.satellites = StatusApi.NetworkStatus.newBuilder()
        .setHealth(Health.OK)
        .setLastUpdated(Instant.now().asGrpc)
        .build()
      it.groundStations = StatusApi.NetworkStatus.newBuilder()
        .setHealth(Health.ERROR)
        .setMessage("example message")
        .setLastUpdated(Instant.now().asGrpc)
        .build()
      it.addGlobalAreas(
        StatusApi.AreaStatus.newBuilder()
          .setHealth(Health.ERROR)
          .setArea(
            Area.newBuilder()
              .setBottomLeft(Location.newBuilder().setLatitude(0.0).setLongitude(0.0))
              .setTopRight(Location.newBuilder().setLatitude(50.0).setLongitude(50.0))
              .setCenter(Location.newBuilder().setLatitude(25.0).setLongitude(25.0))
              .build()
          )
          .setLastUpdated(Instant.now().asGrpc)
          .setMessage("example area")
          .build()
      )
      it.organization = StatusApi.OrganizationStatus.newBuilder()
        .setHealth(Health.WARNING)
        .setModems(Health.WARNING)
        .setPublishers(Health.OK)
        .addRelevantModems(
          StatusApi.OrganizationStatus.ModemStatus.newBuilder()
            .setModemNumber("ABCD EF12")
            .setHealth(Health.WARNING)
            .build()
        )
        .build()
      it.server = StatusApi.NetworkStatus.newBuilder()
        .setHealth(Health.OK)
        .setLastUpdated(Instant.now().asGrpc)
        .build()
      it.request = request
    }.build()
  }
}
