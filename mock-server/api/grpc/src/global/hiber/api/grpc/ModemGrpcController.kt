package global.hiber.api.grpc

import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.modem.ModemApi
import global.hiber.api.grpc.modem.ModemServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant
import java.time.LocalDate
import global.hiber.api.grpc.Location as ModemLocation
import global.hiber.api.grpc.Pagination as GrpcPagination

class ModemGrpcController : ModemServiceGrpc.ModemServiceImplBase(),
  GrpcController {

  val modem = ModemApi.Modem.newBuilder().apply {
    account = "example-account"
    guardPeriod = 10
    health = Health.OK
    lastMessageReceivedAt = Instant.now().asGrpc
    location = global.hiber.api.grpc.Location.newBuilder().setLatitude(10.0).setLongitude(10.0).build()
    name = "example-modem"
    number = "example-modem-number"
    technical = ModemApi.Modem.TechnicalData.newBuilder().apply {
      chipId = 1234L
      firmwareVersionName = "example-firmware-version"
      hardwareName = "example-hardware"
      hardwareProductionBatch = "example-batch"
      messageFormatVersion = 1
    }.build()
    addTags(tag)
  }.build()

  override fun list(
    request: ModemApi.ListModemsRequest,
    response: StreamObserver<ModemApi.ListModemsRequest.Response>
  ) =
    response.unary {
      ModemApi.ListModemsRequest.Response.newBuilder().apply {
        addModems(modem)
        pagination = global.hiber.api.grpc.Pagination.Result.newBuilder().apply {
          size = 1
          total = 1
          totalPages = 1
        }.build()
        this.request = request
      }.build()
    }

  override fun get(request: ModemApi.GetModemRequest, response: StreamObserver<ModemApi.Modem>) =
    response.unary { modem }

  override fun messages(
    request: ModemApi.ListModemMessagesRequest,
    response: StreamObserver<ModemApi.ListModemMessagesRequest.Response>
  ) = response.unary { ModemApi.ListModemMessagesRequest.Response.getDefaultInstance() }

  override fun messageCount(
    request: ModemApi.MessageCountRequest,
    response: StreamObserver<ModemApi.MessageCountRequest.Response>
  ) = response.unary {
    ModemApi.MessageCountRequest.Response.newBuilder()
      .setRequest(request)
      .putAllMessageCountPerDay(mapOf(LocalDate.now().toString() to 1))
      .build()
  }

  override fun rename(request: ModemApi.RenameModemRequest, response: StreamObserver<ModemApi.Modem>) =
    response.unary { modem }

  override fun updatePayloadTemplate(
    request: ModemApi.UpdateModemPayloadTemplateRequest,
    response: StreamObserver<ModemApi.Modem>
  ) = response.unary { modem }

  override fun updateTags(
    request: ModemApi.UpdateModemTagsRequest,
    response: StreamObserver<ModemApi.UpdateModemTagsRequest.Response>
  ) = response.unary { ModemApi.UpdateModemTagsRequest.Response.newBuilder().addModems(modem).build() }
}
