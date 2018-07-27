package global.hiber.api.grpc

import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.token.TokenApi
import global.hiber.api.grpc.token.TokenServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant


class TokenGrpcController : TokenServiceGrpc.TokenServiceImplBase(), GrpcController {

  override fun list(
    request: TokenApi.ListTokensRequest,
    response: StreamObserver<TokenApi.ListTokensRequest.Response>
  ) = response.unary {
    TokenApi.ListTokensRequest.Response.newBuilder().apply {
      addTokens(TokenApi.Token.newBuilder().apply {
        organization = "example-organization"
        expiresAt = Instant.now().plusSeconds(3600).asGrpc
        id = 1
        name = "example-token"
        userId = "example-user"
      }.build())
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
}
