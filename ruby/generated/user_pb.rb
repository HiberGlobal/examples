# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: user.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.user.User" do
    optional :id, :string, 1
    optional :email, :string, 2
    optional :name, :string, 3
  end
  add_message "hiber.user.UserSelection" do
    optional :by_email, :string, 1
    optional :by_name, :string, 2
  end
  add_message "hiber.user.ListUsersRequest" do
    optional :account, :string, 1
    optional :selection, :message, 2, "hiber.user.UserSelection"
    optional :pagination, :message, 3, "hiber.Pagination"
  end
  add_message "hiber.user.ListUsersRequest.Response" do
    repeated :users, :message, 1, "hiber.user.User"
    optional :request, :message, 2, "hiber.user.ListUsersRequest"
    optional :pagination, :message, 3, "hiber.Pagination.Result"
  end
  add_message "hiber.user.ListAccessRequestsRequest" do
    optional :account, :string, 1
    optional :selection, :message, 2, "hiber.user.UserSelection"
    optional :pagination, :message, 3, "hiber.Pagination"
  end
  add_message "hiber.user.ListAccessRequestsRequest.Response" do
    repeated :users, :message, 1, "hiber.user.User"
    optional :request, :message, 2, "hiber.user.ListAccessRequestsRequest"
    optional :pagination, :message, 3, "hiber.Pagination.Result"
  end
  add_message "hiber.user.ApproveUserRequest" do
    optional :account, :string, 1
    optional :user_id, :string, 2
  end
  add_message "hiber.user.ApproveUserRequest.Response" do
  end
  add_message "hiber.user.RemoveUserRequest" do
    optional :account, :string, 1
    optional :user_id, :string, 2
  end
  add_message "hiber.user.RemoveUserRequest.Response" do
  end
  add_message "hiber.user.CreateUserRequest" do
    optional :account, :string, 1
    optional :email, :string, 2
    optional :name, :string, 3
    optional :password, :string, 4
  end
end

module Hiber
  module User
    User = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.User").msgclass
    UserSelection = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.UserSelection").msgclass
    ListUsersRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ListUsersRequest").msgclass
    ListUsersRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ListUsersRequest.Response").msgclass
    ListAccessRequestsRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ListAccessRequestsRequest").msgclass
    ListAccessRequestsRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ListAccessRequestsRequest.Response").msgclass
    ApproveUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ApproveUserRequest").msgclass
    ApproveUserRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.ApproveUserRequest.Response").msgclass
    RemoveUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RemoveUserRequest").msgclass
    RemoveUserRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RemoveUserRequest.Response").msgclass
    CreateUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CreateUserRequest").msgclass
  end
end