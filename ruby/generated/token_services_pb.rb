# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: token.proto for package 'hiber.token'

require 'grpc'
require 'token_pb'

module Hiber
  module Token
    module TokenService
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.token.TokenService'

        rpc :List, ListTokensRequest, ListTokensRequest::Response
        rpc :Create, CreateTokenRequest, CreateTokenRequest::Response
        rpc :Delete, DeleteTokenRequest, DeleteTokenRequest::Response
        rpc :UpdateTokenOrganizationPermissions, UpdateTokenOrganizationPermissionsRequest, UpdateTokenOrganizationPermissionsRequest::Response
        rpc :UpdateTokenUserPermissions, UpdateTokenUserPermissionsRequest, UpdateTokenUserPermissionsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end
