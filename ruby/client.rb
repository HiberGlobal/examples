#!/usr/bin/env ruby

require 'grpc'
require 'currentuser_services_pb'
require 'modem_services_pb'

def main
  metadata = {metadata: {'authorization': 'bearer my-super-secret-token'}}

  # use your real token when you switch to api.dev.hiber.global
  # currentUserStub = Hiber::User::CurrentUserService::Stub.new('api.dev.hiber.global:443', GRPC::Core::ChannelCredentials.new())
  currentUserStub = Hiber::User::CurrentUserService::Stub.new('localhost:9090', :this_channel_is_insecure)
  email = currentUserStub.current_user(Hiber::User::CurrentUserRequest.new(), metadata).email
  p "Current user is: #{email}"

  # use your real token when you switch to api.dev.hiber.global
  # modemStub = Hiber::Modem::ModemService::Stub.new('api.dev.hiber.global:443', GRPC::Core::ChannelCredentials.new())
  modemStub = Hiber::Modem::ModemService::Stub.new('localhost:9090', :this_channel_is_insecure)
  modems = modemStub.list(Hiber::Modem::ListModemsRequest.new(), metadata).modems
  p "Modems: #{modems}"

end

main
