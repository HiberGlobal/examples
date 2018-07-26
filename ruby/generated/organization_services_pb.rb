# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: organization.proto for package 'hiber.organization'

require 'grpc'
require 'organization_pb'

module Hiber
  module Organization
    module OrganizationService
      # Organization-related api calls. Currently limited to your own organization; we'll add more for creating and managing
      # sub-organizations later.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.organization.OrganizationService'

        rpc :Create, CreateOrganizationRequest, Organization
        rpc :Get, GetOrganizationRequest, Organization
        rpc :Update, UpdateOrganizationRequest, Organization
        rpc :Delete, DeleteOrganizationRequest, DeleteOrganizationRequest::Response
        rpc :DeleteConfirmation, DeleteOrganizationConfirmationRequest, DeleteOrganizationConfirmationRequest::Response
        rpc :Tree, OrganizationTreeRequest, OrganizationTreeRequest::Response
        rpc :ListChildOrganizations, ListChildOrganizationsRequest, ListChildOrganizationsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end