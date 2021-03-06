package global.hiber.example;

import global.hiber.api.grpc.modem.ModemApi.ListModemsRequest;
import global.hiber.api.grpc.modem.ModemApi.Modem;
import global.hiber.api.grpc.modem.ModemServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.StatusRuntimeException;

import java.util.List;

class ModemServiceClient {
  private final ModemServiceGrpc.ModemServiceBlockingStub stub;

  ModemServiceClient(ManagedChannel channel, String token) {
    this.stub = ModemServiceGrpc
      .newBlockingStub(channel)
      .withCallCredentials(new Authenticated(token));
  }

  List<Modem> modems() {
    try {
      return stub.list(ListModemsRequest.getDefaultInstance()).getModemsList();
    } catch (StatusRuntimeException e) {
      System.out.println("GRPC call failed:");
      throw e;
    }
  }
}
