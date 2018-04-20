package global.hiber.api.grpc

import global.hiber.api.grpc.testing.TestingApi
import global.hiber.api.grpc.testing.TestingServiceGrpc
import io.grpc.stub.StreamObserver

class TestingGrpcController : TestingServiceGrpc.TestingServiceImplBase(), GrpcController {

  override fun pushModemMessages(
    request: TestingApi.PushModemMessagesRequest,
    response: StreamObserver<TestingApi.PushModemMessagesRequest.Response>
  ) = response.unary {
    TestingApi.PushModemMessagesRequest.Response.newBuilder()
      .setRequest(request)
      .putMessagesSent("example-modem", 1)
      .build()
  }
}
