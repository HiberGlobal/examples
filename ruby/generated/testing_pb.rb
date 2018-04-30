# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: testing.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.testing.PushModemMessagesRequest" do
    optional :account, :string, 1
    repeated :messages, :message, 2, "hiber.testing.PushModemMessagesRequest.MessageToPush"
  end
  add_message "hiber.testing.PushModemMessagesRequest.Response" do
    map :messages_sent, :string, :int32, 1
    optional :request, :message, 2, "hiber.testing.PushModemMessagesRequest"
  end
  add_message "hiber.testing.PushModemMessagesRequest.MessageToPush" do
    optional :modem_number, :string, 1
    optional :time, :message, 2, "hiber.Timestamp"
    optional :location, :message, 3, "hiber.Location"
    optional :content, :bytes, 4
  end
end

module Hiber
  module Testing
    PushModemMessagesRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest").msgclass
    PushModemMessagesRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest.Response").msgclass
    PushModemMessagesRequest::MessageToPush = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest.MessageToPush").msgclass
  end
end