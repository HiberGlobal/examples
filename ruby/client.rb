#!/usr/bin/env ruby

require 'grpc'
require 'currentuser_services_pb'
require 'modem_services_pb'

def main
  metadata = {metadata: {'authorization': 'bearer my-super-secret-token'}}

  currentUserStub = Hiber::User::CurrentUserService::Stub.new('localhost:9090', :this_channel_is_insecure)
  email = currentUserStub.current_user(Hiber::User::CurrentUserRequest.new(), metadata).email
  p "Current iuser is: #{email}"

  modemStub = Hiber::Modem::ModemService::Stub.new('localhost:9090', :this_channel_is_insecure)
  modems = modemStub.list(Hiber::Modem::ListModemsRequest.new(), metadata).modems
  p "Modems: #{modems}"

end

main
