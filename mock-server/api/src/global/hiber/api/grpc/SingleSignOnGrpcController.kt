package global.hiber.api.grpc

import global.hiber.api.grpc.sso.SSOApi
import global.hiber.api.grpc.sso.SingleSignOnServiceGrpc
import io.grpc.stub.StreamObserver

object SingleSignOnGrpcController : SingleSignOnServiceGrpc.SingleSignOnServiceImplBase(), GrpcController {

  override fun zendesk(
    request: SSOApi.ZendeskTokenRequest,
    response: StreamObserver<SSOApi.ZendeskTokenRequest.Response>
  ) = response.unary {
    SSOApi.ZendeskTokenRequest.Response.newBuilder()
      .setToken("example-token")
      .build()
  }
}
