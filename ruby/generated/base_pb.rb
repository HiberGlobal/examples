# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: base.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.UpdateZeroableInt" do
    optional :updated, :bool, 1
    optional :value, :uint32, 2
  end
  add_message "hiber.UpdateClearableString" do
    optional :updated, :bool, 1
    optional :value, :string, 2
  end
  add_message "hiber.UpdateOptionalId" do
    optional :updated, :bool, 1
    optional :value, :int64, 2
  end
  add_message "hiber.UpdateBoolean" do
    optional :updated, :bool, 1
    optional :value, :bool, 2
  end
  add_message "hiber.TimeRange" do
    optional :start, :message, 1, "hiber.Timestamp"
    optional :end, :message, 2, "hiber.Timestamp"
  end
  add_message "hiber.Timestamp" do
    optional :timestamp, :message, 1, "google.protobuf.Timestamp"
    optional :textual, :string, 4
  end
  add_message "hiber.Date" do
    optional :year, :uint32, 1
    optional :month, :uint32, 2
    optional :day, :uint32, 3
    optional :textual, :string, 4
  end
  add_message "hiber.Location" do
    optional :latitude, :double, 1
    optional :longitude, :double, 2
  end
  add_message "hiber.Area" do
    optional :center, :message, 1, "hiber.Location"
    optional :bottom_left, :message, 2, "hiber.Location"
    optional :top_right, :message, 4, "hiber.Location"
  end
  add_message "hiber.BytesOrHex" do
    optional :bytes, :bytes, 1
    optional :hex, :string, 2
  end
  add_message "hiber.Pagination" do
    optional :size, :int32, 1
    optional :page, :int32, 2
  end
  add_message "hiber.Pagination.Result" do
    optional :size, :int32, 1
    optional :page, :int32, 2
    optional :total, :int32, 3
    optional :total_pages, :int32, 4
    optional :previous, :message, 6, "hiber.Pagination"
    optional :next, :message, 7, "hiber.Pagination"
  end
  add_message "hiber.Filter" do
  end
  add_message "hiber.Filter.ChildOrganizations" do
    optional :include_all, :bool, 1
    repeated :include, :string, 2
    repeated :exclude, :string, 3
  end
  add_message "hiber.Filter.Organizations" do
    repeated :include, :string, 1
    repeated :exclude, :string, 2
  end
  add_message "hiber.Filter.Events" do
    repeated :include, :enum, 1, "hiber.EventType"
    repeated :exclude, :enum, 2, "hiber.EventType"
  end
  add_message "hiber.Filter.Modems" do
    repeated :include, :string, 1
    repeated :exclude, :string, 2
  end
  add_message "hiber.Filter.Tags" do
    repeated :include, :int64, 1
    repeated :exclude, :int64, 2
  end
  add_message "hiber.Filter.Webhooks" do
    repeated :include, :int64, 1
    repeated :exclude, :int64, 2
    optional :only_active, :bool, 3
  end
  add_message "hiber.Filter.Publishers" do
    repeated :include, :int64, 1
    repeated :exclude, :int64, 2
    optional :only_active, :bool, 3
  end
  add_message "hiber.Filter.Users" do
    repeated :include, :string, 1
    repeated :exclude, :string, 2
  end
  add_enum "hiber.EventType" do
    value :DEFAULT, 0
    value :ORGANIZATION_UPDATED, 12
    value :MODEM_LOCATION_UPDATED, 4
    value :MODEM_STALE, 16
    value :MODEM_MESSAGE_RECEIVED, 5
    value :MODEM_MESSAGE_SEQUENCE_SKIP, 13
    value :MODEM_MESSAGE_DELAYED, 14
    value :MODEM_MESSAGE_CANNOT_BE_PARSED, 15
    value :MODEM_TRANSFER_STARTED, 17
    value :MODEM_TRANSFER_RECEIVED, 18
    value :MODEM_TRANSFER_CANCELLED, 19
    value :MODEM_TRANSFER_NOT_RECEIVED, 20
    value :MODEM_TRANSFER_RETURN_TRANSFER_STARTED, 21
    value :MODEM_CLAIMED, 22
    value :PUBLISHER_CREATED, 1
    value :PUBLISHER_UPDATED, 2
    value :PUBLISHER_DELETED, 3
    value :PUBLISHER_FAILED, 11
    value :USER_ACCESS_REQUEST, 8
    value :USER_ADDED, 9
    value :USER_REMOVED, 10
    value :TOKEN_CREATED, 31
    value :TOKEN_EXPIRY_WARNING, 25
    value :TOKEN_EXPIRED, 26
  end
  add_enum "hiber.Health" do
    value :OK, 0
    value :WARNING, 1
    value :ERROR, 2
  end
end

module Hiber
  UpdateZeroableInt = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.UpdateZeroableInt").msgclass
  UpdateClearableString = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.UpdateClearableString").msgclass
  UpdateOptionalId = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.UpdateOptionalId").msgclass
  UpdateBoolean = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.UpdateBoolean").msgclass
  TimeRange = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.TimeRange").msgclass
  Timestamp = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Timestamp").msgclass
  Date = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Date").msgclass
  Location = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Location").msgclass
  Area = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Area").msgclass
  BytesOrHex = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.BytesOrHex").msgclass
  Pagination = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Pagination").msgclass
  Pagination::Result = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Pagination.Result").msgclass
  Filter = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter").msgclass
  Filter::ChildOrganizations = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.ChildOrganizations").msgclass
  Filter::Organizations = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Organizations").msgclass
  Filter::Events = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Events").msgclass
  Filter::Modems = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Modems").msgclass
  Filter::Tags = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Tags").msgclass
  Filter::Webhooks = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Webhooks").msgclass
  Filter::Publishers = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Publishers").msgclass
  Filter::Users = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Filter.Users").msgclass
  EventType = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.EventType").enummodule
  Health = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.Health").enummodule
end
