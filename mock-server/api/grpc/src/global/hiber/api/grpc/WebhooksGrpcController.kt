package global.hiber.api.grpc

import global.hiber.api.grpc.webhook.WebhookApi
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

  override fun list(
    request: WebhookApi.ListWebhooksRequest,
    response: StreamObserver<WebhookApi.ListWebhooksRequest.Response>
  ) = response.unary {
    WebhookApi.ListWebhooksRequest.Response.newBuilder().apply {
      addWebhooks(webhook)
      pagination = global.hiber.api.grpc.Pagination.Result.newBuilder().apply {
        size = 1
        total = 1
        totalPages = 1
      }.build()
      this.request = request
    }.build()
  }

  override fun create(request: WebhookApi.CreateWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun get(request: WebhookApi.GetWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun enable(request: WebhookApi.EnableWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun disable(request: WebhookApi.DisableWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun updateFilter(
    request: WebhookApi.UpdateWebhookFilterRequest,
    response: StreamObserver<WebhookApi.Webhook>
  ) = response.unary { webhook }

  override fun update(request: WebhookApi.UpdateWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun updateTags(
    request: WebhookApi.UpdateWebhookTagsRequest,
    response: StreamObserver<WebhookApi.UpdateWebhookTagsRequest.Response>
  ) = response.unary { WebhookApi.UpdateWebhookTagsRequest.Response.newBuilder().addWebhooks(webhook).build() }

  override fun delete(
    request: WebhookApi.DeleteWebhookRequest,
    response: StreamObserver<WebhookApi.DeleteWebhookRequest.Response>
  ) = response.unary { WebhookApi.DeleteWebhookRequest.Response.getDefaultInstance() }
}
