# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: modem_claim.proto for package 'hiber.modem'

require 'grpc'
require 'modem_claim_pb'

module Hiber
  module Modem
    module ModemClaimService
      # Claim a modem that you have in your pocession, but was not marked as inbound for you.
      # This is only possible for a modem that has not been activated.
      # This process is instantaneous, but the previous owner can reject the claim afterwards.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.modem.ModemClaimService'

        # Claim a number of modems. 
        rpc :Claim, ClaimModemRequest, ClaimModemRequest::Response
        # List modems that have been claimed. They are no longer part if your organization. 
        rpc :ListClaims, ListModemClaimsRequest, ListModemClaimsRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end
