package global.hiber.api.grpc

import global.hiber.api.grpc.user.CurrentUserApi
import global.hiber.api.grpc.user.CurrentUserServiceGrpc
import io.grpc.stub.StreamObserver


class CurrentUserGrpcController : CurrentUserServiceGrpc.CurrentUserServiceImplBase(), GrpcController {

  override fun currentUser(
    request: CurrentUserApi.CurrentUserRequest,
    response: StreamObserver<CurrentUserApi.CurrentUser>
  ) = response.unary {
    CurrentUserApi.CurrentUser.newBuilder().apply {
      email = "example@example.example"
      id = "example-id"
      name = "example name"
      addAccounts("example-account")
    }.build()
  }

  override fun requestAccess(
    request: CurrentUserApi.RequestAccessRequest,
    response: StreamObserver<CurrentUserApi.RequestAccessRequest.Response>
  ) = response.unary { CurrentUserApi.RequestAccessRequest.Response.getDefaultInstance() }

  override fun deleteCurrentUser(
    request: CurrentUserApi.DeleteRequest,
    response: StreamObserver<CurrentUserApi.DeleteRequest.Response>
  ) = response.unary { CurrentUserApi.DeleteRequest.Response.getDefaultInstance() }
}
