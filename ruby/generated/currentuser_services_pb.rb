# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: currentuser.proto for package 'hiber.user'

require 'grpc'
require 'currentuser_pb'

module Hiber
  module User
    module CurrentUserService
      # Calls related to the current user. Typically, a newly created organization only has access to these calls, all
      # other require an organization to be linked.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.user.CurrentUserService'

        rpc :CurrentUser, CurrentUserRequest, CurrentUser
        rpc :RequestAccess, RequestAccessRequest, RequestAccessRequest::Response
        rpc :CancelAccessRequest, CancelAccessRequestRequest, CancelAccessRequestRequest::Response
        rpc :DeleteCurrentUser, DeleteCurrentUserRequest, DeleteCurrentUserRequest::Response
        rpc :UpdateDefaultOrganization, UpdateDefaultOrganizationRequest, UpdateDefaultOrganizationRequest::Response
        rpc :UpdateSettings, UpdateSettingsRequest, UpdateSettingsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end
