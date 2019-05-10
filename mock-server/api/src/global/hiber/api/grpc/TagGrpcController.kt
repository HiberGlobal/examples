package global.hiber.api.grpc

import global.hiber.api.grpc.data.tag
import global.hiber.api.grpc.tag.TagApi
import global.hiber.api.grpc.tag.TagServiceGrpc
import io.grpc.stub.StreamObserver

object TagGrpcController : TagServiceGrpc.TagServiceImplBase(), GrpcController {

  override fun list(request: TagApi.ListTagsRequest, response: StreamObserver<TagApi.ListTagsRequest.Response>) =
    response.unary { TagApi.ListTagsRequest.Response.newBuilder().setRequest(request).addTags(tag).build() }

  override fun create(request: TagApi.CreateTagRequest, response: StreamObserver<TagApi.Tag>) =
    response.unary { tag }

  override fun update(request: TagApi.UpdateTagRequest, response: StreamObserver<TagApi.Tag>) =
    response.unary { tag }

  override fun delete(request: TagApi.DeleteTagRequest, response: StreamObserver<TagApi.DeleteTagRequest.Response>) =
    response.unary { TagApi.DeleteTagRequest.Response.getDefaultInstance() }
}
