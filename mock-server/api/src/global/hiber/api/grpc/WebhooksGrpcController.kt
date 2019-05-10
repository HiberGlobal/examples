package global.hiber.api.grpc

import global.hiber.api.grpc.data.webhook
import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.webhook.WebhookApi
import global.hiber.api.grpc.webhook.WebhookServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant
import global.hiber.api.grpc.Filter as GrpcFilter

object WebhooksGrpcController : WebhookServiceGrpc.WebhookServiceImplBase(), GrpcController {

  override fun list(
    request: WebhookApi.ListWebhooksRequest,
    response: StreamObserver<WebhookApi.ListWebhooksRequest.Response>
  ) = response.unary {
    WebhookApi.ListWebhooksRequest.Response.newBuilder().also {
      it.addWebhooks(webhook)
      it.pagination = Pagination.Result.newBuilder().setTotalPages(1).setTotal(1).setSize(1).build()
    }.build()
  }

  override fun history(
    request: WebhookApi.WebhookHistoryRequest,
    response: StreamObserver<WebhookApi.WebhookHistoryRequest.Response>
  ) = response.unary {
    WebhookApi.WebhookHistoryRequest.Response.getDefaultInstance()
  }

  override fun create(r: WebhookApi.CreateWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun get(r: WebhookApi.GetWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun enable(r: WebhookApi.EnableWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun disable(r: WebhookApi.DisableWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook.toBuilder().setData(webhook.data.toBuilder().setDisabled(true).build()).build() }

  override fun updateFilter(r: WebhookApi.UpdateWebhookFilterRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun update(r: WebhookApi.UpdateWebhookRequest, response: StreamObserver<WebhookApi.Webhook>) =
    response.unary { webhook }

  override fun updateTags(
    r: WebhookApi.UpdateWebhookTagsRequest,
    response: StreamObserver<WebhookApi.UpdateWebhookTagsRequest.Response>
  ) = response.unary {
    WebhookApi.UpdateWebhookTagsRequest.Response.getDefaultInstance()
  }

  override fun delete(
    r: WebhookApi.DeleteWebhookRequest,
    response: StreamObserver<WebhookApi.DeleteWebhookRequest.Response>
  ) = response.unary { WebhookApi.DeleteWebhookRequest.Response.getDefaultInstance() }
}
