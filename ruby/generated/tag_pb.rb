# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tag.proto

require 'google/protobuf'

require 'base_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "hiber.tag.Tag" do
    optional :id, :int64, 1
    optional :label, :message, 3, "hiber.tag.Tag.Label"
  end
  add_message "hiber.tag.Tag.Label" do
    optional :name, :string, 1
  end
  add_message "hiber.tag.TagSelection" do
    repeated :search, :string, 1
    repeated :names, :string, 2
    optional :filter, :message, 3, "hiber.Filter.Tags"
  end
  add_message "hiber.tag.UpdateTagsForItem" do
    repeated :tag_ids_to_add, :int64, 1
    repeated :tag_ids_to_remove, :int64, 2
    repeated :new_tags_to_add, :message, 3, "hiber.tag.Tag.Label"
  end
  add_message "hiber.tag.ListTagsRequest" do
    optional :organization, :string, 1
    optional :selection, :message, 2, "hiber.tag.TagSelection"
    optional :modem_count, :bool, 3
    optional :webhook_count, :bool, 4
  end
  add_message "hiber.tag.ListTagsRequest.Response" do
    repeated :tags, :message, 1, "hiber.tag.Tag"
    optional :request, :message, 2, "hiber.tag.ListTagsRequest"
    map :tag_modem_count, :int64, :int32, 3
    map :tag_webhook_count, :int64, :int32, 4
  end
  add_message "hiber.tag.CreateTagRequest" do
    optional :organization, :string, 1
    optional :create, :message, 2, "hiber.tag.Tag.Label"
  end
  add_message "hiber.tag.UpdateTagRequest" do
    optional :organization, :string, 1
    optional :id, :int64, 2
    optional :update, :message, 3, "hiber.tag.Tag.Label"
  end
  add_message "hiber.tag.DeleteTagRequest" do
    optional :organization, :string, 1
    optional :id, :int64, 2
  end
  add_message "hiber.tag.DeleteTagRequest.Response" do
  end
end

module Hiber
  module Tag
    Tag = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.Tag").msgclass
    Tag::Label = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.Tag.Label").msgclass
    TagSelection = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.TagSelection").msgclass
    UpdateTagsForItem = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.UpdateTagsForItem").msgclass
    ListTagsRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.ListTagsRequest").msgclass
    ListTagsRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.ListTagsRequest.Response").msgclass
    CreateTagRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.CreateTagRequest").msgclass
    UpdateTagRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.UpdateTagRequest").msgclass
    DeleteTagRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.DeleteTagRequest").msgclass
    DeleteTagRequest::Response = Google::Protobuf::DescriptorPool.generated_pool.lookup("hiber.tag.DeleteTagRequest.Response").msgclass
  end
end
