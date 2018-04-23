# -*- ruby -*-
# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = 'hiber-grpc-api-example-ruby'
  s.version       = '1.0.0'
  s.authors       = ['Wouter Bouvy']
  s.email         = 'wouter@hiber.global'
  s.homepage      = 'https://github.com/HiberGlobal/examples'
  s.summary       = 'Hiber GRPC API example for Ruby'
  s.description   = 'Example Ruby client for the Hiber GRPC API, using a dockerized mock server.'

  s.files         = `git ls-files -- ruby/*`.split("\n")
  s.executables   = `git ls-files -- ruby/client.rb`.split("\n").map do |f|
    File.basename(f)
  end
  s.require_paths = ['generated']
  s.platform      = Gem::Platform::RUBY

  s.add_dependency 'grpc', '~> 1.9'
  s.add_dependency 'google-protobuf'
  s.add_dependency 'grpc-tools'
  s.add_development_dependency 'bundler', '~> 1.7'
end
