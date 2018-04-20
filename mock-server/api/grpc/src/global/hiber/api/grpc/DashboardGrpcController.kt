package global.hiber.api.grpc

import global.hiber.api.grpc.dashboard.DashboardApi
import global.hiber.api.grpc.dashboard.DashboardServiceGrpc
import io.grpc.stub.StreamObserver


class DashboardGrpcController : DashboardServiceGrpc.DashboardServiceImplBase(), GrpcController {

  override fun dashboard(
    request: DashboardApi.DashboardRequest,
    response: StreamObserver<DashboardApi.DashboardRequest.Response>
  ) = response.unary { DashboardApi.DashboardRequest.Response.getDefaultInstance() }
}
