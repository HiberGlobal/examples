package global.hiber.api.grpc

import global.hiber.api.grpc.data.publisher
import global.hiber.api.grpc.publisher.PublisherApi
import global.hiber.api.grpc.publisher.PublisherServiceGrpc
import io.grpc.stub.StreamObserver

object PublisherGrpcController : PublisherServiceGrpc.PublisherServiceImplBase(), GrpcController {

  override fun list(
    request: PublisherApi.ListPublishersRequest,
    response: StreamObserver<PublisherApi.ListPublishersRequest.Response>
  ) = response.unary {
    PublisherApi.ListPublishersRequest.Response.newBuilder().also {
      it.addPublishers(publisher)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun history(
    request: PublisherApi.PublisherHistoryRequest,
    response: StreamObserver<PublisherApi.PublisherHistoryRequest.Response>
  ) = response.unary {
    PublisherApi.PublisherHistoryRequest.Response.getDefaultInstance()
  }

  override fun create(
    request: PublisherApi.CreatePublisherRequest,
    response: StreamObserver<PublisherApi.CreatePublisherRequest.Response>
  ) = response.unary {
    PublisherApi.CreatePublisherRequest.Response.newBuilder().also {
      it.created = publisher
      it.request = request
    }.build()
  }

  override fun enable(
    request: PublisherApi.EnablePublisherRequest,
    response: StreamObserver<PublisherApi.EnablePublisherRequest.Response>
  ) = response.unary {
    PublisherApi.EnablePublisherRequest.Response.newBuilder().also {
      it.addPublishers(publisher)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun disable(
    request: PublisherApi.DisablePublisherRequest,
    response: StreamObserver<PublisherApi.DisablePublisherRequest.Response>
  ) = response.unary {
    PublisherApi.DisablePublisherRequest.Response.newBuilder().also {
      it.addPublishers(publisher)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun update(
    request: PublisherApi.UpdatePublisherRequest,
    response: StreamObserver<PublisherApi.UpdatePublisherRequest.Response>
  ) = response.unary {
    PublisherApi.UpdatePublisherRequest.Response.newBuilder().also {
      it.addUpdated(publisher)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun updateTags(
    request: PublisherApi.UpdatePublisherTagsRequest,
    response: StreamObserver<PublisherApi.UpdatePublisherTagsRequest.Response>
  ) = response.unary {
    PublisherApi.UpdatePublisherTagsRequest.Response.newBuilder().also {
      it.addPublishers(publisher)
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotalPages(1).setTotal(1).build()
    }.build()
  }

  override fun delete(
    request: PublisherApi.DeletePublisherRequest,
    response: StreamObserver<PublisherApi.DeletePublisherRequest.Response>
  ) = response.unary {
    PublisherApi.DeletePublisherRequest.Response.getDefaultInstance()
  }
}
