package global.hiber.mockserver

import global.hiber.api.grpc.*
import io.grpc.*
import mu.KotlinLogging.logger

private val logger = logger {}

class MockServer {
  class GrpcTokenInterceptor : ServerInterceptor {
    override fun <ReqT, RespT> interceptCall(
      serverCall: ServerCall<ReqT, RespT>,
      metadata: Metadata,
      serverCallHandler: ServerCallHandler<ReqT, RespT>
    ): ServerCall.Listener<ReqT> =
      metadata.token()
        ?.let { logger.info { "Token used for request: $it" } }
        ?.let { Contexts.interceptCall(Context.current(), serverCall, metadata, serverCallHandler) }
        ?: serverCall.close(Status.UNAUTHENTICATED, metadata).let { object : ServerCall.Listener<ReqT>() {} }

    companion object {
      private val authorizationKey = Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER)
      fun Metadata.token(): String? = get(authorizationKey)?.substring("Bearer ".length)
    }
  }

  private val tokenInterceptor = GrpcTokenInterceptor()
  private val services: Set<BindableService> =
    setOf(
      CurrentUserGrpcController,
      ModemGrpcController,
      OrganizationGrpcController,
      SingleSignOnGrpcController,
      TestingGrpcController,
      WebhooksGrpcController,
      DashboardGrpcController,
      MapGrpcController,
      ModemTransferGrpcController,
      StatusGrpcController,
      TokenGrpcController,
      EventGrpcController,
      ModemClaimGrpcController,
      ModemTransferReturnGrpcController,
      SatelliteGrpcController,
      TagGrpcController,
      UserGrpcController
    )

  private val mockServer: Server = ServerBuilder
    .forPort(9090)
    .intercept(tokenInterceptor)
    .run { services.fold(this) { serverBuilder, service -> serverBuilder.addService(service) } }
    .build()

  fun start() {
    mockServer.start()
    logger.info("GRPC Api mock server running on port 9090.")
    mockServer.awaitTermination()
  }

  fun stop() {
    mockServer.shutdown()
    logger.info("Shutting down GRPC Api mock server running on port 9090.")
  }
}

fun main() {
  MockServer().start()
}
