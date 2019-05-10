package global.hiber.api.grpc

import global.hiber.api.grpc.data.modemTransfer
import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.modem.ModemTransferApi
import global.hiber.api.grpc.modem.ModemTransferReturnServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

object ModemTransferReturnGrpcController : ModemTransferReturnServiceGrpc.ModemTransferReturnServiceImplBase(),
  GrpcController {

  override fun prepare(
    request: ModemTransferApi.PrepareModemForReturnRequest,
    response: StreamObserver<ModemTransferApi.PrepareModemForReturnRequest.Response>
  ) = response.unary {
    ModemTransferApi.PrepareModemForReturnRequest.Response.newBuilder().also {
      it.addModemReturnLines(ModemTransferApi.ModemTransferReturnLine.newBuilder()
        .setReason(ModemTransferApi.ModemTransferReturnLine.Reason.DAMAGED)
        .setComment("it was damaged")
        .addModemNumbers("ABCD EF12")
        .setOriginalTransfer("original-transfer-id")
        .setCreatedAt(Instant.now().asGrpc)
        .build()
      )
      it.request = request
    }.build()
  }

  override fun lines(
    request: ModemTransferApi.ListModemTransferReturnLinesRequest,
    response: StreamObserver<ModemTransferApi.ListModemTransferReturnLinesRequest.Response>
  ) = response.unary {
    ModemTransferApi.ListModemTransferReturnLinesRequest.Response.newBuilder().also {
      it.addLines(ModemTransferApi.ModemTransferReturnLine.newBuilder()
        .setReason(ModemTransferApi.ModemTransferReturnLine.Reason.DAMAGED)
        .setComment("it was damaged")
        .addModemNumbers("ABCD EF12")
        .setOriginalTransfer("original-transfer-id")
        .setCreatedAt(Instant.now().asGrpc)
        .build()
      )
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setTotal(1).setTotalPages(1).setSize(1).build()
    }.build()
  }

  override fun deleteLine(
    request: ModemTransferApi.DeleteModemTransferReturnLinesRequest,
    response: StreamObserver<ModemTransferApi.DeleteModemTransferReturnLinesRequest.Response>
  ) = response.unary {
    ModemTransferApi.DeleteModemTransferReturnLinesRequest.Response.getDefaultInstance()
  }

  override fun send(
    request: ModemTransferApi.SendReturnRequest,
    response: StreamObserver<ModemTransferApi.SendReturnRequest.Response>
  ) = response.unary {
    ModemTransferApi.SendReturnRequest.Response.newBuilder().also {
      it.returnTransfer = modemTransfer.toBuilder()
        .setType(ModemTransferApi.ModemTransfer.Type.RETURN)
        .addReturnFor("original-transfer-id")
        .build()
      it.request = request
    }.build()
  }
}
