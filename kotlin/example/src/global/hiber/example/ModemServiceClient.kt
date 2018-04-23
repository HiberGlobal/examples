package global.hiber.example

import global.hiber.api.grpc.modem.ModemApi.ListModemsRequest
import global.hiber.api.grpc.modem.ModemApi.Modem
import global.hiber.api.grpc.modem.ModemServiceGrpc
import io.grpc.ManagedChannel
import io.grpc.StatusRuntimeException

class ModemServiceClient(val channel: ManagedChannel, val token: String) {
  private val stub: ModemServiceGrpc.ModemServiceBlockingStub =
    ModemServiceGrpc
      .newBlockingStub(channel)
      .withCallCredentials(Authenticated(token))

  fun modems(): List<Modem> =
    try {
      stub.list(ListModemsRequest.getDefaultInstance()).getModemsList()
    } catch (e: StatusRuntimeException) {
      System.out.println("GRPC call failed:")
      throw e
    }
}
