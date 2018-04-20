package global.hiber.api.grpc

import global.hiber.api.grpc.webhook.WebhookApi
import global.hiber.api.grpc.webhook.WebhookApi.UpdateTagsRequest
import global.hiber.api.grpc.webhook.WebhookServiceGrpc
import io.grpc.stub.StreamObserver

val webhook = WebhookApi.Webhook.newBuilder().apply {
  id = 1L
  account = "example-account"
  data = WebhookApi.Webhook.WebhookData.newBuilder().apply {
    active = true
    contentType = WebhookApi.Webhook.ContentType.PROTO
    secret = "example-secret"
    url = "https://example.example/example"
  }.build()
  filters = WebhookApi.Webhook.WebhookFilters.getDefaultInstance()
  addTags(tag)
}.build()

class WebhooksGrpcController : WebhookServiceGrpc.WebhookServiceImplBase(), GrpcController {

  override fun list(request: WebhookApi.ListRequest, response: StreamObserver<WebhookApi.ListRequest.Response>) =
    response.unary {
      WebhookApi.ListRequest.Response.newBuilder().apply {
        addWebhooks(webhook)
        pagination = global.hiber.api.grpc.Pagination.Result.newBuilder().apply {
          size = 1
          total = 1
          totalPages = 1
        }.build()
        this.request = request
      }.build()
    }

  override fun create(request: WebhookApi.CreateRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun get(request: WebhookApi.GetRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun enable(request: WebhookApi.EnableRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun disable(request: WebhookApi.DisableRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun updateFilter(request: WebhookApi.UpdateFilterRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun update(request: WebhookApi.UpdateRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun updateTags(request: UpdateTagsRequest, response: StreamObserver<UpdateTagsRequest.Response>) =
    response.unary { UpdateTagsRequest.Response.newBuilder().addWebhooks(webhook).build() }

  override fun delete(request: WebhookApi.DeleteRequest, response: StreamObserver<WebhookApi.DeleteRequest.Response>) =
    response.unary { WebhookApi.DeleteRequest.Response.getDefaultInstance() }
}
