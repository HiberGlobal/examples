# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: certificate.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.certificate.Certificate" do
    optional :id, :int64, 1
    optional :name, :string, 2
    optional :certificate, :message, 3, "hiber.BytesOrHex"
    optional :has_private_key, :bool, 4
    optional :ca_certificate_name, :string, 5
    optional :ca_certificate_id, :int64, 6
  end
  add_message "hiber.certificate.CertificateSelection" do
    repeated :certificate_ids, :int64, 1
    optional :search, :string, 2
    repeated :ca_certificate_ids, :int64, 3
  end
  add_message "hiber.certificate.ListCertificatesRequest" do
    optional :organization, :string, 1
    optional :selection, :message, 2, "hiber.certificate.CertificateSelection"
    optional :pagination, :message, 3, "hiber.Pagination"
  end
  add_message "hiber.certificate.ListCertificatesRequest.Response" do
    repeated :certificates, :message, 1, "hiber.certificate.Certificate"
    optional :request, :message, 2, "hiber.certificate.ListCertificatesRequest"
    optional :pagination, :message, 3, "hiber.Pagination.Result"
  end
  add_message "hiber.certificate.UploadCertificateRequest" do
    optional :organization, :string, 1
    optional :upload_certificate, :message, 2, "hiber.certificate.UploadCertificateRequest.UploadCertificate"
    optional :upload_ca_certificate, :message, 3, "hiber.certificate.UploadCertificateRequest.UploadCertificate"
    optional :ca_certificate_id, :int64, 4
  end
  add_message "hiber.certificate.UploadCertificateRequest.Response" do
    optional :certificate, :message, 1, "hiber.certificate.Certificate"
    optional :request, :message, 2, "hiber.certificate.UploadCertificateRequest"
  end
  add_message "hiber.certificate.UploadCertificateRequest.UploadCertificate" do
    optional :name, :string, 1
    optional :certificate, :message, 2, "hiber.BytesOrHex"
    optional :private_key, :message, 3, "hiber.BytesOrHex"
  end
  add_message "hiber.certificate.RenameCertificateRequest" do
    optional :organization, :string, 1
    optional :selection, :message, 2, "hiber.certificate.CertificateSelection"
    optional :new_name, :string, 3
  end
  add_message "hiber.certificate.RenameCertificateRequest.Response" do
    repeated :certificates, :message, 1, "hiber.certificate.Certificate"
    optional :request, :message, 2, "hiber.certificate.RenameCertificateRequest"
    optional :pagination, :message, 3, "hiber.Pagination.Result"
  end
  add_message "hiber.certificate.DeleteCertificateRequest" do
    optional :organization, :string, 1
    optional :selection, :message, 2, "hiber.certificate.CertificateSelection"
  end
  add_message "hiber.certificate.DeleteCertificateRequest.Response" do
    repeated :deleted_certificate_ids, :int64, 1
    optional :request, :message, 2, "hiber.certificate.DeleteCertificateRequest"
  end
end

module Hiber
  module Certificate
    Certificate = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.Certificate").msgclass
    CertificateSelection = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.CertificateSelection").msgclass
    ListCertificatesRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.ListCertificatesRequest").msgclass
    ListCertificatesRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.ListCertificatesRequest.Response").msgclass
    UploadCertificateRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.UploadCertificateRequest").msgclass
    UploadCertificateRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.UploadCertificateRequest.Response").msgclass
    UploadCertificateRequest::UploadCertificate = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.UploadCertificateRequest.UploadCertificate").msgclass
    RenameCertificateRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.RenameCertificateRequest").msgclass
    RenameCertificateRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.RenameCertificateRequest.Response").msgclass
    DeleteCertificateRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.DeleteCertificateRequest").msgclass
    DeleteCertificateRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.certificate.DeleteCertificateRequest.Response").msgclass
  end
end
