package global.hiber.api.grpc

import global.hiber.api.grpc.data.user
import global.hiber.api.grpc.user.UserApi
import global.hiber.api.grpc.user.UserServiceGrpc
import io.grpc.stub.StreamObserver


object UserGrpcController : UserServiceGrpc.UserServiceImplBase(), GrpcController {

  override fun list(request: UserApi.ListUsersRequest, response: StreamObserver<UserApi.ListUsersRequest.Response>) =
    response.unary {
      UserApi.ListUsersRequest.Response.newBuilder().apply {
        addUsers(user)
        pagination = Pagination.Result.newBuilder().apply {
          size = 1
          total = 1
          totalPages = 1
        }.build()
        this.request = request
      }.build()
    }

  override fun listAccessRequests(
    request: UserApi.ListAccessRequestsRequest,
    response: StreamObserver<UserApi.ListAccessRequestsRequest.Response>
  ) = response.unary {
    UserApi.ListAccessRequestsRequest.Response.newBuilder().apply {
      addUsers(user)
      pagination = Pagination.Result.newBuilder().apply {
        size = 1
        total = 1
        totalPages = 1
      }.build()
      this.request = request
    }.build()
  }

  override fun approve(
    request: UserApi.ApproveUserRequest,
    response: StreamObserver<UserApi.ApproveUserRequest.Response>
  ) = response.unary { UserApi.ApproveUserRequest.Response.getDefaultInstance() }

  override fun remove(
    request: UserApi.RemoveUserRequest,
    response: StreamObserver<UserApi.RemoveUserRequest.Response>
  ) = response.unary { UserApi.RemoveUserRequest.Response.getDefaultInstance() }

  override fun createUser(request: UserApi.CreateUserRequest, response: StreamObserver<UserApi.User>) =
    response.unary {
      UserApi.User.newBuilder().apply {
        id = "example-user-2"
        email = request.email
        name = request.name
      }.build()
    }

  override fun createUsers(
    request: UserApi.CreateUsersRequest,
    response: StreamObserver<UserApi.CreateUsersRequest.Response>
  ) = response.unary {
    UserApi.CreateUsersRequest.Response.newBuilder().addAllUsers(
      request.usersList.map {
        UserApi.User.newBuilder().apply {
          id = "example-user-${it.email}"
          email = it.email
          name = it.name
        }.build()
      }
    ).build()
  }

  override fun resetPassword(
    request: UserApi.ResetUserPasswordRequest,
    response: StreamObserver<UserApi.ResetUserPasswordRequest.Response>
  ) = response.unary { UserApi.ResetUserPasswordRequest.Response.getDefaultInstance() }

  override fun updateUserPermissions(
    request: UserApi.UpdateUserPermissionsRequest,
    response: StreamObserver<UserApi.UpdateUserPermissionsRequest.Response>
  ) = response.unary { UserApi.UpdateUserPermissionsRequest.Response.getDefaultInstance() }
}
