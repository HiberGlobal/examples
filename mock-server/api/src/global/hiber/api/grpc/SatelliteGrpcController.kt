@file:Suppress("DEPRECATION")

package global.hiber.api.grpc

import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.satellite.SatelliteApi
import global.hiber.api.grpc.satellite.SatelliteServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.LocalDate
import java.time.ZoneOffset

object SatelliteGrpcController : SatelliteServiceGrpc.SatelliteServiceImplBase(), GrpcController {

  override fun list(
    request: SatelliteApi.ListSatellitesRequest,
    response: StreamObserver<SatelliteApi.ListSatellitesRequest.Response>
  ) = response.unary {
    SatelliteApi.ListSatellitesRequest.Response.newBuilder()
      .addAllSatellites(
        listOf(
          SatelliteApi.SatelliteInformation.newBuilder()
            .setId(43744)
            .setName("HIBER-1")
            .addAllTle(
              listOf(
                "1 43744U 18096AB  19129.15802698  .00001599  00000-0  63205-4 0  9991",
                "2 43744  97.4625 199.2462 0020065 117.4084 242.9199 15.26814323 24555"
              )
            )
            .setLaunchedAt(LocalDate.of(2018, 11, 29).atStartOfDay().toInstant(ZoneOffset.UTC).asGrpc)
            .build(),
          SatelliteApi.SatelliteInformation.newBuilder()
            .setId(43774)
            .setName("HIBER-2")
            .addAllTle(
              listOf(
                "1 43774U 18099S   19129.18820274 -.00000056  00000-0  15010-6 0  9991",
                "2 43774  97.7501 201.6546 0014433  99.6554 260.6297 14.94871031 23367"
              )
            )
            .setLaunchedAt(LocalDate.of(2018, 12, 3).atStartOfDay().toInstant(ZoneOffset.UTC).asGrpc)
            .build()

        )
      )
      .setRequest(request)
      .build()
  }

  override fun path(
    request: SatelliteApi.ListSatellitesPathRequest,
    response: StreamObserver<SatelliteApi.ListSatellitesPathRequest.Response>
  ) = response.unary {
    SatelliteApi.ListSatellitesPathRequest.Response.getDefaultInstance()
  }
}
