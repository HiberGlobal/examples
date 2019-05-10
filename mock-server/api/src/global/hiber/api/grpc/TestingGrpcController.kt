package global.hiber.api.grpc

import global.hiber.api.grpc.testing.TestingApi
import global.hiber.api.grpc.testing.TestingServiceGrpc
import io.grpc.stub.StreamObserver

object TestingGrpcController : TestingServiceGrpc.TestingServiceImplBase(), GrpcController {

  override fun pushModemMessages(
    request: TestingApi.PushModemMessagesRequest,
    response: StreamObserver<TestingApi.PushModemMessagesRequest.Response>
  ) = response.unary {
    TestingApi.PushModemMessagesRequest.Response.newBuilder()
      .setRequest(request)
      .build()
  }
}
