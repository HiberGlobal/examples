package global.hiber.example

import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUserRequest
import global.hiber.api.grpc.user.CurrentUserServiceGrpc
import io.grpc.ManagedChannel
import io.grpc.StatusRuntimeException

class CurrentUserServiceClient(val channel: ManagedChannel, val token: String) {
  private val stub: CurrentUserServiceGrpc.CurrentUserServiceBlockingStub =
    CurrentUserServiceGrpc
      .newBlockingStub(channel)
      .withCallCredentials(Authenticated(token))

  fun currentUser(): CurrentUser =
    try {
      stub.currentUser(CurrentUserRequest.getDefaultInstance())
    } catch (e: StatusRuntimeException) {
      println("GRPC call failed:")
      throw e
    }
}
