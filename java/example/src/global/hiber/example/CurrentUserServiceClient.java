package global.hiber.example;

import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser;
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUserRequest;
import global.hiber.api.grpc.user.CurrentUserServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.StatusRuntimeException;

public class CurrentUserServiceClient {
  private final CurrentUserServiceGrpc.CurrentUserServiceBlockingStub stub;

  public CurrentUserServiceClient(ManagedChannel channel, String token) {
    this.stub = CurrentUserServiceGrpc
      .newBlockingStub(channel)
      .withCallCredentials(new Authenticated(token));
  }

  public CurrentUser currentUser() {
    try {
      return stub.currentUser(CurrentUserRequest.getDefaultInstance());
    } catch (StatusRuntimeException e) {
      System.out.println("GRPC call failed:");
      throw e;
    }
  }
}
