# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: token.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.token.Token" do
    optional :id, :int64, 1
    optional :name, :string, 2
    optional :user_id, :string, 3
    optional :account, :string, 4
    repeated :permissions, :enum, 5, "hiber.token.TokenPermission"
    optional :expires_at, :message, 6, "hiber.Timestamp"
  end
  add_message "hiber.token.TokenSelection" do
    optional :users, :message, 1, "hiber.Filter.Users"
    optional :name, :string, 3
    optional :includeExpired, :bool, 4
  end
  add_message "hiber.token.ListRequest" do
    optional :account, :string, 1
    optional :selection, :message, 2, "hiber.token.TokenSelection"
    optional :pagination, :message, 3, "hiber.Pagination"
  end
  add_message "hiber.token.ListRequest.Response" do
    repeated :tokens, :message, 1, "hiber.token.Token"
    optional :request, :message, 2, "hiber.token.ListRequest"
    optional :pagination, :message, 3, "hiber.Pagination.Result"
  end
  add_message "hiber.token.CreateRequest" do
    optional :account, :string, 1
    optional :name, :string, 2
    repeated :permissions, :enum, 3, "hiber.token.TokenPermission"
    optional :expires_at, :message, 4, "hiber.Timestamp"
  end
  add_message "hiber.token.CreateRequest.Response" do
    optional :token, :string, 1
  end
  add_message "hiber.token.DeleteRequest" do
    optional :account, :string, 1
    optional :token_id, :int64, 2
  end
  add_message "hiber.token.DeleteRequest.Response" do
  end
  add_enum "hiber.token.TokenPermission" do
    value :USER_READ, 0
    value :USER_ACTION, 1
    value :ACCOUNT_READ, 2
    value :ACCOUNT_ACTION, 3
  end
end

module Hiber
  module Token
    Token = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.Token").msgclass
    TokenSelection = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.TokenSelection").msgclass
    ListRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.ListRequest").msgclass
    ListRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.ListRequest.Response").msgclass
    CreateRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.CreateRequest").msgclass
    CreateRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.CreateRequest.Response").msgclass
    DeleteRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.DeleteRequest").msgclass
    DeleteRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.DeleteRequest.Response").msgclass
    TokenPermission = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.token.TokenPermission").enummodule
  end
end
