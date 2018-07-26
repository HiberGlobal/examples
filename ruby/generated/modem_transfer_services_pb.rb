# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: modem_transfer.proto for package 'hiber.modem'

require 'grpc'
require 'modem_transfer_pb'

module Hiber
  module Modem
    module ModemTransferService
      # Tracking services for transferring modems between parties.
      # Modems can be transferred between organizations for any number of reason, ranging from actually shipping to a different
      # company to handing them over to a third party for installation.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.modem.ModemTransferService'

        # Transfer modems to a different organization.
        # As a result, the modem will get the outbound status for you, and the inbound status for the recipient.
        # Note: this call can automatically generate a child organization for the recipient if it has no organization.
        rpc :Transfer, TransferModemsRequest, TransferModemsRequest::Response
        # List transfers for modems. This could be used to list all active transfers on a selection of modems,
        # or, for example, to list this history of all transfers for one modem.
        rpc :List, ListModemTransfersRequest, ListModemTransfersRequest::Response
        # Cancel a started transfer.
        rpc :Cancel, CancelModemTransferRequest, CancelModemTransferRequest::Response
        # Mark inbound modems as received, adding them to your organization.
        rpc :Received, ReceivedModemTransferRequest, ReceivedModemTransferRequest::Response
        # Mark modems as not received when they were inbound but did not show up.
        # If you do receive the modems after marking them as not received, you can claim them to still get them in
        # your organization.
        rpc :NotReceived, NotReceivedModemTransferRequest, NotReceivedModemTransferRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
    module ModemTransferReturnService
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'hiber.modem.ModemTransferReturnService'

        # If any problems are detected with the modems within the return period, mark them using this method.
        # Modems marked using this method can be returned in one transfer, as long as they are returned to the same
        # organization.
        rpc :Prepare, PrepareModemForReturnRequest, PrepareModemForReturnRequest::Response
        # List the return lines, either for a return transfer, or lines that have not been
        # returned with a return transfer yet.
        rpc :Lines, ListModemTransferReturnLinesRequest, ListModemTransferReturnLinesRequest::Response
        rpc :DeleteLine, DeleteModemTransferReturnLinesRequest, DeleteModemTransferReturnLinesRequest::Response
        # Transfer modems marked for return back to the sender.
        rpc :Send, SendReturnRequest, SendReturnRequest::Response
      end

      Stub = Service.rpc_stub_class
    end
  end
end