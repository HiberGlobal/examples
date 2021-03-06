# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: user.proto for package 'hiber.user'

require 'grpc'
require 'user_pb'

module Hiber
  module User
    module UserService
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.user.UserService'

        rpc :List, ListUsersRequest, ListUsersRequest::Response
        rpc :ListAccessRequests, ListAccessRequestsRequest, ListAccessRequestsRequest::Response
        rpc :Approve, ApproveUserRequest, ApproveUserRequest::Response
        rpc :Remove, RemoveUserRequest, RemoveUserRequest::Response
        rpc :CreateUser, CreateUserRequest, User
        rpc :UpdateUserPermissions, UpdateUserPermissionsRequest, UpdateUserPermissionsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end
