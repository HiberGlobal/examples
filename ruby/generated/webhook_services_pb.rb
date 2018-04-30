# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: webhook.proto for package 'hiber.webhook'

require 'grpc'
require 'webhook_pb'

module Hiber
  module Webhook
    module WebhookService
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.webhook.WebhookService'

        rpc :List, ListWebhooksRequest, ListWebhooksRequest::Response
        rpc :History, WebhookHistoryRequest, WebhookHistoryRequest::Response
        rpc :Create, CreateWebhookRequest, Webhook
        rpc :Enable, EnableWebhookRequest, Webhook
        rpc :Disable, DisableWebhookRequest, Webhook
        rpc :UpdateFilter, UpdateWebhookFilterRequest, Webhook
        rpc :Update, UpdateWebhookRequest, Webhook
        rpc :UpdateTags, UpdateWebhookTagsRequest, UpdateWebhookTagsRequest::Response
        rpc :Get, GetWebhookRequest, Webhook
        rpc :Delete, DeleteWebhookRequest, DeleteWebhookRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end