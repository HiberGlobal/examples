# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: currentuser.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.user.CurrentUser" do
    optional :id, :string, 1
    optional :email, :string, 2
    optional :name, :string, 3
    repeated :accounts, :string, 4
  end
  add_message "hiber.user.CurrentUserRequest" do
  end
  add_message "hiber.user.RequestAccessRequest" do
    optional :account, :string, 1
  end
  add_message "hiber.user.RequestAccessRequest.Response" do
  end
  add_message "hiber.user.DeleteCurrentUserRequest" do
  end
  add_message "hiber.user.DeleteCurrentUserRequest.Response" do
  end
end

module Hiber
  module User
    CurrentUser = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser").msgclass
    CurrentUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUserRequest").msgclass
    RequestAccessRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RequestAccessRequest").msgclass
    RequestAccessRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RequestAccessRequest.Response").msgclass
    DeleteCurrentUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.DeleteCurrentUserRequest").msgclass
    DeleteCurrentUserRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.DeleteCurrentUserRequest.Response").msgclass
  end
end
