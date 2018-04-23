# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: modem.proto for package 'hiber.modem'

require 'grpc'
require 'modem_pb'

module Hiber
  module Modem
    module ModemService
      # The core of the Hiber system, modems are the network nodes that send information and user data.
      # This service contains calls to list and manage them, as well as list their messages.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.modem.ModemService'

        rpc :List, ListModemsRequest, ListModemsRequest::Response
        rpc :Get, GetModemRequest, Modem
        rpc :Messages, ListModemMessagesRequest, ListModemMessagesRequest::Response
        rpc :MessageCount, MessageCountRequest, MessageCountRequest::Response
        rpc :Rename, RenameModemRequest, Modem
        rpc :UpdatePayloadTemplate, UpdateModemPayloadTemplateRequest, Modem
        rpc :UpdateTags, UpdateModemTagsRequest, UpdateModemTagsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end
