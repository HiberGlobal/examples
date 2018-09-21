# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: testing.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.testing.PushModemMessagesRequest" do
    optional :organization, :string, 1
    repeated :messages, :message, 2, "hiber.testing.PushModemMessagesRequest.MessageToPush"
  end
  add_message "hiber.testing.PushModemMessagesRequest.Response" do
    optional :request, :message, 2, "hiber.testing.PushModemMessagesRequest"
  end
  add_message "hiber.testing.PushModemMessagesRequest.MessageToPush" do
    optional :modem_number, :string, 1
    optional :time, :message, 2, "hiber.Timestamp"
    optional :location, :message, 3, "hiber.Location"
    optional :content, :bytes, 4
  end
  add_message "hiber.testing.PushModemMessagesFromDebugPortRequest" do
    optional :organization, :string, 1
    repeated :encoded_messages, :string, 2
  end
  add_message "hiber.testing.PushModemMessagesFromDebugPortRequest.Response" do
    optional :request, :message, 1, "hiber.testing.PushModemMessagesFromDebugPortRequest"
  end
end

module Hiber
  module Testing
    PushModemMessagesRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest").msgclass
    PushModemMessagesRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest.Response").msgclass
    PushModemMessagesRequest::MessageToPush = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesRequest.MessageToPush").msgclass
    PushModemMessagesFromDebugPortRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesFromDebugPortRequest").msgclass
    PushModemMessagesFromDebugPortRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.testing.PushModemMessagesFromDebugPortRequest.Response").msgclass
  end
end
