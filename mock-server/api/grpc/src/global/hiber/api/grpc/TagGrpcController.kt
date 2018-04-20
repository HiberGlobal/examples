package global.hiber.api.grpc

import global.hiber.api.grpc.tag.TagApi
import global.hiber.api.grpc.tag.TagServiceGrpc
import io.grpc.stub.StreamObserver

val tag = TagApi.Tag.newBuilder().apply {
  id = 1L
  label = TagApi.Tag.Label.newBuilder().apply {
    name = "example-tag"
    color = "000000"
  }.build()
}.build()

class TagGrpcController : TagServiceGrpc.TagServiceImplBase(), GrpcController {
  override fun list(request: TagApi.ListRequest, response: StreamObserver<TagApi.ListRequest.Response>) =
    response.unary { TagApi.ListRequest.Response.newBuilder().setRequest(request).addTags(tag).build() }

  override fun create(request: TagApi.CreateRequest, response: StreamObserver<TagApi.Tag>) =
    response.unary { tag }

  override fun update(request: TagApi.UpdateRequest, response: StreamObserver<TagApi.Tag>) =
    response.unary { tag }

  override fun delete(request: TagApi.DeleteRequest, response: StreamObserver<TagApi.DeleteRequest.Response>) =
    response.unary { TagApi.DeleteRequest.Response.getDefaultInstance() }
}
