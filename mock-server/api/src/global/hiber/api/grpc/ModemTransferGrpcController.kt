package global.hiber.api.grpc

import global.hiber.api.grpc.data.modemTransfer
import global.hiber.api.grpc.data.modemTransferCancelled
import global.hiber.api.grpc.data.modemTransferNotReceived
import global.hiber.api.grpc.data.modemTransferReceived
import global.hiber.api.grpc.modem.ModemTransferApi
import global.hiber.api.grpc.modem.ModemTransferServiceGrpc
import io.grpc.stub.StreamObserver

object ModemTransferGrpcController : ModemTransferServiceGrpc.ModemTransferServiceImplBase(), GrpcController {

  override fun transfer(
    request: ModemTransferApi.TransferModemsRequest,
    response: StreamObserver<ModemTransferApi.TransferModemsRequest.Response>
  ) = response.unary {
    ModemTransferApi.TransferModemsRequest.Response.newBuilder().also {
      it.transfer = modemTransfer
      it.request = request
    }.build()
  }

  override fun list(
    request: ModemTransferApi.ListModemTransfersRequest,
    response: StreamObserver<ModemTransferApi.ListModemTransfersRequest.Response>
  ) = response.unary {
    ModemTransferApi.ListModemTransfersRequest.Response.newBuilder().also {
      it.addTransfers(modemTransfer)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun cancel(
    request: ModemTransferApi.CancelModemTransferRequest,
    response: StreamObserver<ModemTransferApi.CancelModemTransferRequest.Response>
  ) = response.unary {
    ModemTransferApi.CancelModemTransferRequest.Response.newBuilder().also {
      it.addCancelled(modemTransferCancelled)
      it.request = request
    }.build()
  }

  override fun received(
    request: ModemTransferApi.ReceivedModemTransferRequest,
    response: StreamObserver<ModemTransferApi.ReceivedModemTransferRequest.Response>
  ) = response.unary {
    ModemTransferApi.ReceivedModemTransferRequest.Response.newBuilder().also {
      it.addReceived(modemTransferReceived)
      it.request = request
    }.build()
  }

  override fun notReceived(
    request: ModemTransferApi.NotReceivedModemTransferRequest,
    response: StreamObserver<ModemTransferApi.NotReceivedModemTransferRequest.Response>
  ) = response.unary {
    ModemTransferApi.NotReceivedModemTransferRequest.Response.newBuilder().also {
      it.addNotReceived(modemTransferNotReceived)
      it.request = request
    }.build()
  }
}
