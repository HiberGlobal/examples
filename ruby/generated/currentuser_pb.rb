# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: currentuser.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.user.CurrentUser" do
    optional :id, :string, 1
    optional :email, :string, 2
    optional :name, :string, 3
    repeated :organizations, :string, 4
    optional :default_organization, :string, 5
    repeated :requested_organizations, :string, 6
    optional :settings, :message, 7, "hiber.user.CurrentUser.Settings"
    optional :current_organization, :string, 8
    optional :current_organization_permissions, :message, 9, "hiber.Filter.OrganizationPermissions"
    optional :user_permissions, :message, 10, "hiber.Filter.UserPermissions"
  end
  add_message "hiber.user.CurrentUser.Settings" do
    optional :layout, :enum, 1, "hiber.user.CurrentUser.Settings.Layout"
    optional :map_style, :enum, 2, "hiber.user.CurrentUser.Settings.MapStyle"
    optional :time_format, :enum, 3, "hiber.user.CurrentUser.Settings.TimeFormat"
    optional :date_format, :enum, 4, "hiber.user.CurrentUser.Settings.DateFormat"
    optional :thousands_separators_format, :enum, 5, "hiber.user.CurrentUser.Settings.ThousandsSeparatorsFormat"
  end
  add_enum "hiber.user.CurrentUser.Settings.Layout" do
    value :DEFAULT_LAYOUT, 0
    value :LANDSCAPE, 1
    value :PORTRAIT, 2
  end
  add_enum "hiber.user.CurrentUser.Settings.MapStyle" do
    value :DEFAULT_MAP_STYLE, 0
    value :SATELLITE, 1
    value :HIBER_VISION, 2
    value :CLASSIC, 3
  end
  add_enum "hiber.user.CurrentUser.Settings.TimeFormat" do
    value :DEFAULT_TIME_FORMAT, 0
    value :TWENTYFOUR_HOUR, 1
    value :TWELVE_HOUR, 2
  end
  add_enum "hiber.user.CurrentUser.Settings.DateFormat" do
    value :DEFAULT_DATE_FORMAT, 0
    value :DD_MM_YYYY, 1
    value :MM_DD_YYYY, 2
    value :YYYY_MM_DD, 3
  end
  add_enum "hiber.user.CurrentUser.Settings.ThousandsSeparatorsFormat" do
    value :DEFAULT_THOUSANDS_SEPARATORS_FORMAT, 0
    value :PERIOD, 1
    value :COMMA, 2
  end
  add_message "hiber.user.CurrentUserRequest" do
  end
  add_message "hiber.user.RequestAccessRequest" do
    optional :organization, :string, 1
  end
  add_message "hiber.user.RequestAccessRequest.Response" do
  end
  add_message "hiber.user.CancelAccessRequestRequest" do
    optional :organization, :string, 1
  end
  add_message "hiber.user.CancelAccessRequestRequest.Response" do
  end
  add_message "hiber.user.DeleteCurrentUserRequest" do
  end
  add_message "hiber.user.DeleteCurrentUserRequest.Response" do
  end
  add_message "hiber.user.UpdateDefaultOrganizationRequest" do
    optional :organization, :string, 1
  end
  add_message "hiber.user.UpdateDefaultOrganizationRequest.Response" do
    optional :default_organization, :string, 1
  end
  add_message "hiber.user.UpdateSettingsRequest" do
    optional :update_settings, :message, 1, "hiber.user.CurrentUser.Settings"
  end
  add_message "hiber.user.UpdateSettingsRequest.Response" do
    optional :settings, :message, 1, "hiber.user.CurrentUser.Settings"
  end
  add_message "hiber.user.AccessibleOrganizationsRequest" do
  end
  add_message "hiber.user.AccessibleOrganizationsRequest.Response" do
    repeated :organizations, :string, 1
  end
end

module Hiber
  module User
    CurrentUser = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser").msgclass
    CurrentUser::Settings = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings").msgclass
    CurrentUser::Settings::Layout = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings.Layout").enummodule
    CurrentUser::Settings::MapStyle = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings.MapStyle").enummodule
    CurrentUser::Settings::TimeFormat = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings.TimeFormat").enummodule
    CurrentUser::Settings::DateFormat = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings.DateFormat").enummodule
    CurrentUser::Settings::ThousandsSeparatorsFormat = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUser.Settings.ThousandsSeparatorsFormat").enummodule
    CurrentUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CurrentUserRequest").msgclass
    RequestAccessRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RequestAccessRequest").msgclass
    RequestAccessRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.RequestAccessRequest.Response").msgclass
    CancelAccessRequestRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CancelAccessRequestRequest").msgclass
    CancelAccessRequestRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.CancelAccessRequestRequest.Response").msgclass
    DeleteCurrentUserRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.DeleteCurrentUserRequest").msgclass
    DeleteCurrentUserRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.DeleteCurrentUserRequest.Response").msgclass
    UpdateDefaultOrganizationRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.UpdateDefaultOrganizationRequest").msgclass
    UpdateDefaultOrganizationRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.UpdateDefaultOrganizationRequest.Response").msgclass
    UpdateSettingsRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.UpdateSettingsRequest").msgclass
    UpdateSettingsRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.UpdateSettingsRequest.Response").msgclass
    AccessibleOrganizationsRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.AccessibleOrganizationsRequest").msgclass
    AccessibleOrganizationsRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.user.AccessibleOrganizationsRequest.Response").msgclass
  end
end
