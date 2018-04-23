package global.hiber.example;

import global.hiber.api.grpc.modem.ModemApi.Modem;
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

import java.util.List;

public class Example {
  private final ManagedChannel channel;
  public final CurrentUserServiceClient currentUserServiceClient;
  public final ModemServiceClient modemServiceClient;

  Example(String host, int port, String token) {
    this.channel = ManagedChannelBuilder.forAddress(host, port)
      .usePlaintext(true) // the mock server is http only, use https when connecting to https://dev.hiber.global
      .build();

    this.currentUserServiceClient = new CurrentUserServiceClient(channel, token);
    this.modemServiceClient = new ModemServiceClient(channel, token);
  }

  public static void main(String[] args) throws Exception {
    Example client = new Example("localhost", 9090, "my-super-secret-token");

    CurrentUser user = client.currentUserServiceClient.currentUser();
    System.out.println("Current user: " + user);

    List<Modem> modems = client.modemServiceClient.modems();
    System.out.println("Modems: " + modems);
  }
}
