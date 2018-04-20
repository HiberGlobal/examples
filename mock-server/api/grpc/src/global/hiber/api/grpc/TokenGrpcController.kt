package global.hiber.api.grpc

import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.token.TokenApi
import global.hiber.api.grpc.token.TokenServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant


class TokenGrpcController : TokenServiceGrpc.TokenServiceImplBase(), GrpcController {

  override fun list(request: TokenApi.ListRequest, response: StreamObserver<TokenApi.ListRequest.Response>) =
    response.unary {
      TokenApi.ListRequest.Response.newBuilder().apply {
        addTokens(TokenApi.Token.newBuilder().apply {
          account = "example-account"
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

  override fun create(request: TokenApi.CreateRequest, response: StreamObserver<TokenApi.CreateRequest.Response>) =
    response.unary { TokenApi.CreateRequest.Response.newBuilder().setToken("example-token").build() }

  override fun delete(request: TokenApi.DeleteRequest, response: StreamObserver<TokenApi.DeleteRequest.Response>) =
    response.unary { TokenApi.DeleteRequest.Response.getDefaultInstance() }
}
