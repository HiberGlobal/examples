package global.hiber.example;

import global.hiber.api.grpc.modem.ModemApi.Modem;
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.util.List;

public class Example {
  private final CurrentUserServiceClient currentUserServiceClient;
  private final ModemServiceClient modemServiceClient;

  private Example(String host, int port, String token) {
    ManagedChannel channel = ManagedChannelBuilder.forAddress(host, port)
//      .useTransportSecurity() // for api.dev.hiber.global
      .usePlaintext(true) // for mock server
      .build();

    this.currentUserServiceClient = new CurrentUserServiceClient(channel, token);
    this.modemServiceClient = new ModemServiceClient(channel, token);
  }

  public static void main(String[] args) {
//    Example client = new Example("api.dev.hiber.global", 443, "my-super-secret-token"); // use your real token!
    Example client = new Example("localhost", 9090, "my-super-secret-token");

    CurrentUser user = client.currentUserServiceClient.currentUser();
    System.out.println("Current user: " + user);

    List<Modem> modems = client.modemServiceClient.modems();
    System.out.println("Modems: " + modems);
  }
}
