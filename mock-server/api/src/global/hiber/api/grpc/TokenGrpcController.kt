package global.hiber.api.grpc

import global.hiber.api.grpc.data.token
import global.hiber.api.grpc.token.TokenApi
import global.hiber.api.grpc.token.TokenServiceGrpc
import io.grpc.stub.StreamObserver


object TokenGrpcController : TokenServiceGrpc.TokenServiceImplBase(), GrpcController {

  override fun list(
    request: TokenApi.ListTokensRequest,
    response: StreamObserver<TokenApi.ListTokensRequest.Response>
  ) = response.unary {
    TokenApi.ListTokensRequest.Response.newBuilder().apply {
      addTokens(token)
      pagination = global.hiber.api.grpc.Pagination.Result.newBuilder().apply {
        size = 1
        total = 1
        totalPages = 1
      }.build()
      this.request = request
    }.build()
  }

  override fun create(
    request: TokenApi.CreateTokenRequest,
    response: StreamObserver<TokenApi.CreateTokenRequest.Response>
  ) = response.unary { TokenApi.CreateTokenRequest.Response.newBuilder().setToken("example-token").build() }

  override fun delete(
    request: TokenApi.DeleteTokenRequest,
    response: StreamObserver<TokenApi.DeleteTokenRequest.Response>
  ) = response.unary { TokenApi.DeleteTokenRequest.Response.getDefaultInstance() }

  override fun updateTokenOrganizationPermissions(
    request: TokenApi.UpdateTokenOrganizationPermissionsRequest,
    response: StreamObserver<TokenApi.UpdateTokenOrganizationPermissionsRequest.Response>
  ) =response.unary {
    TokenApi.UpdateTokenOrganizationPermissionsRequest.Response.getDefaultInstance()
  }

  override fun updateTokenUserPermissions(
    request: TokenApi.UpdateTokenUserPermissionsRequest,
    response: StreamObserver<TokenApi.UpdateTokenUserPermissionsRequest.Response>
  ) =response.unary {
    TokenApi.UpdateTokenUserPermissionsRequest.Response.getDefaultInstance()
  }
}
