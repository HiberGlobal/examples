// Code generated by protoc-gen-go. DO NOT EDIT.
// source: integration_aws_iot.proto

package hiber

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

type AWSIoTConfiguration struct {
	PublisherId          int64          `protobuf:"varint,1,opt,name=publisher_id,json=publisherId" json:"publisher_id,omitempty"`
	Url                  string         `protobuf:"bytes,2,opt,name=url" json:"url,omitempty"`
	Modems               *Filter_Modems `protobuf:"bytes,3,opt,name=modems" json:"modems,omitempty"`
	CertificateId        int64          `protobuf:"varint,4,opt,name=certificate_id,json=certificateId" json:"certificate_id,omitempty"`
	CertificateName      string         `protobuf:"bytes,5,opt,name=certificate_name,json=certificateName" json:"certificate_name,omitempty"`
	CaCertificateId      int64          `protobuf:"varint,6,opt,name=ca_certificate_id,json=caCertificateId" json:"ca_certificate_id,omitempty"`
	CaCertificateName    string         `protobuf:"bytes,7,opt,name=ca_certificate_name,json=caCertificateName" json:"ca_certificate_name,omitempty"`
	Disabled             bool           `protobuf:"varint,8,opt,name=disabled" json:"disabled,omitempty"`
	MqttClientIdentifier string         `protobuf:"bytes,9,opt,name=mqtt_client_identifier,json=mqttClientIdentifier" json:"mqtt_client_identifier,omitempty"`
}

func (m *AWSIoTConfiguration) Reset()                    { *m = AWSIoTConfiguration{} }
func (m *AWSIoTConfiguration) String() string            { return proto.CompactTextString(m) }
func (*AWSIoTConfiguration) ProtoMessage()               {}
func (*AWSIoTConfiguration) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{0} }

func (m *AWSIoTConfiguration) GetPublisherId() int64 {
	if m != nil {
		return m.PublisherId
	}
	return 0
}

func (m *AWSIoTConfiguration) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *AWSIoTConfiguration) GetModems() *Filter_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *AWSIoTConfiguration) GetCertificateId() int64 {
	if m != nil {
		return m.CertificateId
	}
	return 0
}

func (m *AWSIoTConfiguration) GetCertificateName() string {
	if m != nil {
		return m.CertificateName
	}
	return ""
}

func (m *AWSIoTConfiguration) GetCaCertificateId() int64 {
	if m != nil {
		return m.CaCertificateId
	}
	return 0
}

func (m *AWSIoTConfiguration) GetCaCertificateName() string {
	if m != nil {
		return m.CaCertificateName
	}
	return ""
}

func (m *AWSIoTConfiguration) GetDisabled() bool {
	if m != nil {
		return m.Disabled
	}
	return false
}

func (m *AWSIoTConfiguration) GetMqttClientIdentifier() string {
	if m != nil {
		return m.MqttClientIdentifier
	}
	return ""
}

type InitializeAWSIoTIntegrationRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	// Your AWS IoT url, i.e. ${identifier}-ats.iot.${region}.amazonaws.com.
	AwsIotUrl string `protobuf:"bytes,2,opt,name=aws_iot_url,json=awsIotUrl" json:"aws_iot_url,omitempty"`
	// If you've previously uploaded your AWS IoT certificate, CA certificate and private key, use their id here.
	ExistingCertificateId int64 `protobuf:"varint,3,opt,name=existing_certificate_id,json=existingCertificateId" json:"existing_certificate_id,omitempty"`
	// If you've not previously uploaded your AWS IoT certificate, upload it now using this message.
	UploadCertificate *UploadCertificateRequest `protobuf:"bytes,4,opt,name=upload_certificate,json=uploadCertificate" json:"upload_certificate,omitempty"`
	// Limit the modems to activate AWS IoT integration for.
	Modems *Filter_Modems `protobuf:"bytes,5,opt,name=modems" json:"modems,omitempty"`
	// Identifier that the MQTT client uses. Defaults to 'hiber'.
	MqttClientIdentifier string `protobuf:"bytes,6,opt,name=mqtt_client_identifier,json=mqttClientIdentifier" json:"mqtt_client_identifier,omitempty"`
}

func (m *InitializeAWSIoTIntegrationRequest) Reset()         { *m = InitializeAWSIoTIntegrationRequest{} }
func (m *InitializeAWSIoTIntegrationRequest) String() string { return proto.CompactTextString(m) }
func (*InitializeAWSIoTIntegrationRequest) ProtoMessage()    {}
func (*InitializeAWSIoTIntegrationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{1}
}

func (m *InitializeAWSIoTIntegrationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *InitializeAWSIoTIntegrationRequest) GetAwsIotUrl() string {
	if m != nil {
		return m.AwsIotUrl
	}
	return ""
}

func (m *InitializeAWSIoTIntegrationRequest) GetExistingCertificateId() int64 {
	if m != nil {
		return m.ExistingCertificateId
	}
	return 0
}

func (m *InitializeAWSIoTIntegrationRequest) GetUploadCertificate() *UploadCertificateRequest {
	if m != nil {
		return m.UploadCertificate
	}
	return nil
}

func (m *InitializeAWSIoTIntegrationRequest) GetModems() *Filter_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *InitializeAWSIoTIntegrationRequest) GetMqttClientIdentifier() string {
	if m != nil {
		return m.MqttClientIdentifier
	}
	return ""
}

type InitializeAWSIoTIntegrationRequest_Response struct {
	AwsIotConfiguration *AWSIoTConfiguration                `protobuf:"bytes,1,opt,name=aws_iot_configuration,json=awsIotConfiguration" json:"aws_iot_configuration,omitempty"`
	Request             *InitializeAWSIoTIntegrationRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *InitializeAWSIoTIntegrationRequest_Response) Reset() {
	*m = InitializeAWSIoTIntegrationRequest_Response{}
}
func (m *InitializeAWSIoTIntegrationRequest_Response) String() string {
	return proto.CompactTextString(m)
}
func (*InitializeAWSIoTIntegrationRequest_Response) ProtoMessage() {}
func (*InitializeAWSIoTIntegrationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{1, 0}
}

func (m *InitializeAWSIoTIntegrationRequest_Response) GetAwsIotConfiguration() *AWSIoTConfiguration {
	if m != nil {
		return m.AwsIotConfiguration
	}
	return nil
}

func (m *InitializeAWSIoTIntegrationRequest_Response) GetRequest() *InitializeAWSIoTIntegrationRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

type AWSIoTIntegrationConfigurationRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *AWSIoTIntegrationConfigurationRequest) Reset()         { *m = AWSIoTIntegrationConfigurationRequest{} }
func (m *AWSIoTIntegrationConfigurationRequest) String() string { return proto.CompactTextString(m) }
func (*AWSIoTIntegrationConfigurationRequest) ProtoMessage()    {}
func (*AWSIoTIntegrationConfigurationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{2}
}

func (m *AWSIoTIntegrationConfigurationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type AWSIoTIntegrationConfigurationRequest_Response struct {
	AwsIotConfiguration *AWSIoTConfiguration `protobuf:"bytes,1,opt,name=aws_iot_configuration,json=awsIotConfiguration" json:"aws_iot_configuration,omitempty"`
}

func (m *AWSIoTIntegrationConfigurationRequest_Response) Reset() {
	*m = AWSIoTIntegrationConfigurationRequest_Response{}
}
func (m *AWSIoTIntegrationConfigurationRequest_Response) String() string {
	return proto.CompactTextString(m)
}
func (*AWSIoTIntegrationConfigurationRequest_Response) ProtoMessage() {}
func (*AWSIoTIntegrationConfigurationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{2, 0}
}

func (m *AWSIoTIntegrationConfigurationRequest_Response) GetAwsIotConfiguration() *AWSIoTConfiguration {
	if m != nil {
		return m.AwsIotConfiguration
	}
	return nil
}

type EnableAWSIoTIntegrationRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *EnableAWSIoTIntegrationRequest) Reset()                    { *m = EnableAWSIoTIntegrationRequest{} }
func (m *EnableAWSIoTIntegrationRequest) String() string            { return proto.CompactTextString(m) }
func (*EnableAWSIoTIntegrationRequest) ProtoMessage()               {}
func (*EnableAWSIoTIntegrationRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{3} }

func (m *EnableAWSIoTIntegrationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type EnableAWSIoTIntegrationRequest_Response struct {
	AwsIotConfiguration *AWSIoTConfiguration `protobuf:"bytes,1,opt,name=aws_iot_configuration,json=awsIotConfiguration" json:"aws_iot_configuration,omitempty"`
}

func (m *EnableAWSIoTIntegrationRequest_Response) Reset() {
	*m = EnableAWSIoTIntegrationRequest_Response{}
}
func (m *EnableAWSIoTIntegrationRequest_Response) String() string { return proto.CompactTextString(m) }
func (*EnableAWSIoTIntegrationRequest_Response) ProtoMessage()    {}
func (*EnableAWSIoTIntegrationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{3, 0}
}

func (m *EnableAWSIoTIntegrationRequest_Response) GetAwsIotConfiguration() *AWSIoTConfiguration {
	if m != nil {
		return m.AwsIotConfiguration
	}
	return nil
}

type DisableAWSIoTIntegrationRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *DisableAWSIoTIntegrationRequest) Reset()                    { *m = DisableAWSIoTIntegrationRequest{} }
func (m *DisableAWSIoTIntegrationRequest) String() string            { return proto.CompactTextString(m) }
func (*DisableAWSIoTIntegrationRequest) ProtoMessage()               {}
func (*DisableAWSIoTIntegrationRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{4} }

func (m *DisableAWSIoTIntegrationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type DisableAWSIoTIntegrationRequest_Response struct {
	AwsIotConfiguration *AWSIoTConfiguration `protobuf:"bytes,1,opt,name=aws_iot_configuration,json=awsIotConfiguration" json:"aws_iot_configuration,omitempty"`
}

func (m *DisableAWSIoTIntegrationRequest_Response) Reset() {
	*m = DisableAWSIoTIntegrationRequest_Response{}
}
func (m *DisableAWSIoTIntegrationRequest_Response) String() string { return proto.CompactTextString(m) }
func (*DisableAWSIoTIntegrationRequest_Response) ProtoMessage()    {}
func (*DisableAWSIoTIntegrationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{4, 0}
}

func (m *DisableAWSIoTIntegrationRequest_Response) GetAwsIotConfiguration() *AWSIoTConfiguration {
	if m != nil {
		return m.AwsIotConfiguration
	}
	return nil
}

type UpdateAWSIoTIntegrationConfigurationRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization         string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	AwsIotUrl            string                `protobuf:"bytes,2,opt,name=aws_iot_url,json=awsIotUrl" json:"aws_iot_url,omitempty"`
	CertificateId        int64                 `protobuf:"varint,3,opt,name=certificate_id,json=certificateId" json:"certificate_id,omitempty"`
	Modems               *Filter_Modems_Update `protobuf:"bytes,6,opt,name=modems" json:"modems,omitempty"`
	MqttClientIdentifier string                `protobuf:"bytes,5,opt,name=mqtt_client_identifier,json=mqttClientIdentifier" json:"mqtt_client_identifier,omitempty"`
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) Reset() {
	*m = UpdateAWSIoTIntegrationConfigurationRequest{}
}
func (m *UpdateAWSIoTIntegrationConfigurationRequest) String() string {
	return proto.CompactTextString(m)
}
func (*UpdateAWSIoTIntegrationConfigurationRequest) ProtoMessage() {}
func (*UpdateAWSIoTIntegrationConfigurationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{5}
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) GetAwsIotUrl() string {
	if m != nil {
		return m.AwsIotUrl
	}
	return ""
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) GetCertificateId() int64 {
	if m != nil {
		return m.CertificateId
	}
	return 0
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) GetModems() *Filter_Modems_Update {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest) GetMqttClientIdentifier() string {
	if m != nil {
		return m.MqttClientIdentifier
	}
	return ""
}

type UpdateAWSIoTIntegrationConfigurationRequest_Response struct {
	AwsIotConfiguration *AWSIoTConfiguration                         `protobuf:"bytes,1,opt,name=aws_iot_configuration,json=awsIotConfiguration" json:"aws_iot_configuration,omitempty"`
	Request             *UpdateAWSIoTIntegrationConfigurationRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest_Response) Reset() {
	*m = UpdateAWSIoTIntegrationConfigurationRequest_Response{}
}
func (m *UpdateAWSIoTIntegrationConfigurationRequest_Response) String() string {
	return proto.CompactTextString(m)
}
func (*UpdateAWSIoTIntegrationConfigurationRequest_Response) ProtoMessage() {}
func (*UpdateAWSIoTIntegrationConfigurationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor6, []int{5, 0}
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest_Response) GetAwsIotConfiguration() *AWSIoTConfiguration {
	if m != nil {
		return m.AwsIotConfiguration
	}
	return nil
}

func (m *UpdateAWSIoTIntegrationConfigurationRequest_Response) GetRequest() *UpdateAWSIoTIntegrationConfigurationRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func init() {
	proto.RegisterType((*AWSIoTConfiguration)(nil), "hiber.integration.awsiot.AWSIoTConfiguration")
	proto.RegisterType((*InitializeAWSIoTIntegrationRequest)(nil), "hiber.integration.awsiot.InitializeAWSIoTIntegrationRequest")
	proto.RegisterType((*InitializeAWSIoTIntegrationRequest_Response)(nil), "hiber.integration.awsiot.InitializeAWSIoTIntegrationRequest.Response")
	proto.RegisterType((*AWSIoTIntegrationConfigurationRequest)(nil), "hiber.integration.awsiot.AWSIoTIntegrationConfigurationRequest")
	proto.RegisterType((*AWSIoTIntegrationConfigurationRequest_Response)(nil), "hiber.integration.awsiot.AWSIoTIntegrationConfigurationRequest.Response")
	proto.RegisterType((*EnableAWSIoTIntegrationRequest)(nil), "hiber.integration.awsiot.EnableAWSIoTIntegrationRequest")
	proto.RegisterType((*EnableAWSIoTIntegrationRequest_Response)(nil), "hiber.integration.awsiot.EnableAWSIoTIntegrationRequest.Response")
	proto.RegisterType((*DisableAWSIoTIntegrationRequest)(nil), "hiber.integration.awsiot.DisableAWSIoTIntegrationRequest")
	proto.RegisterType((*DisableAWSIoTIntegrationRequest_Response)(nil), "hiber.integration.awsiot.DisableAWSIoTIntegrationRequest.Response")
	proto.RegisterType((*UpdateAWSIoTIntegrationConfigurationRequest)(nil), "hiber.integration.awsiot.UpdateAWSIoTIntegrationConfigurationRequest")
	proto.RegisterType((*UpdateAWSIoTIntegrationConfigurationRequest_Response)(nil), "hiber.integration.awsiot.UpdateAWSIoTIntegrationConfigurationRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for AWSIoTService service

type AWSIoTServiceClient interface {
	Initialize(ctx context.Context, in *InitializeAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*InitializeAWSIoTIntegrationRequest_Response, error)
	Configuration(ctx context.Context, in *AWSIoTIntegrationConfigurationRequest, opts ...grpc.CallOption) (*AWSIoTIntegrationConfigurationRequest_Response, error)
	Enable(ctx context.Context, in *EnableAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*EnableAWSIoTIntegrationRequest_Response, error)
	Disable(ctx context.Context, in *DisableAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*DisableAWSIoTIntegrationRequest_Response, error)
	UpdateConfiguration(ctx context.Context, in *UpdateAWSIoTIntegrationConfigurationRequest, opts ...grpc.CallOption) (*UpdateAWSIoTIntegrationConfigurationRequest_Response, error)
}

type aWSIoTServiceClient struct {
	cc *grpc.ClientConn
}

func NewAWSIoTServiceClient(cc *grpc.ClientConn) AWSIoTServiceClient {
	return &aWSIoTServiceClient{cc}
}

func (c *aWSIoTServiceClient) Initialize(ctx context.Context, in *InitializeAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*InitializeAWSIoTIntegrationRequest_Response, error) {
	out := new(InitializeAWSIoTIntegrationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.integration.awsiot.AWSIoTService/Initialize", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aWSIoTServiceClient) Configuration(ctx context.Context, in *AWSIoTIntegrationConfigurationRequest, opts ...grpc.CallOption) (*AWSIoTIntegrationConfigurationRequest_Response, error) {
	out := new(AWSIoTIntegrationConfigurationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.integration.awsiot.AWSIoTService/Configuration", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aWSIoTServiceClient) Enable(ctx context.Context, in *EnableAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*EnableAWSIoTIntegrationRequest_Response, error) {
	out := new(EnableAWSIoTIntegrationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.integration.awsiot.AWSIoTService/Enable", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aWSIoTServiceClient) Disable(ctx context.Context, in *DisableAWSIoTIntegrationRequest, opts ...grpc.CallOption) (*DisableAWSIoTIntegrationRequest_Response, error) {
	out := new(DisableAWSIoTIntegrationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.integration.awsiot.AWSIoTService/Disable", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *aWSIoTServiceClient) UpdateConfiguration(ctx context.Context, in *UpdateAWSIoTIntegrationConfigurationRequest, opts ...grpc.CallOption) (*UpdateAWSIoTIntegrationConfigurationRequest_Response, error) {
	out := new(UpdateAWSIoTIntegrationConfigurationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.integration.awsiot.AWSIoTService/UpdateConfiguration", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for AWSIoTService service

type AWSIoTServiceServer interface {
	Initialize(context.Context, *InitializeAWSIoTIntegrationRequest) (*InitializeAWSIoTIntegrationRequest_Response, error)
	Configuration(context.Context, *AWSIoTIntegrationConfigurationRequest) (*AWSIoTIntegrationConfigurationRequest_Response, error)
	Enable(context.Context, *EnableAWSIoTIntegrationRequest) (*EnableAWSIoTIntegrationRequest_Response, error)
	Disable(context.Context, *DisableAWSIoTIntegrationRequest) (*DisableAWSIoTIntegrationRequest_Response, error)
	UpdateConfiguration(context.Context, *UpdateAWSIoTIntegrationConfigurationRequest) (*UpdateAWSIoTIntegrationConfigurationRequest_Response, error)
}

func RegisterAWSIoTServiceServer(s *grpc.Server, srv AWSIoTServiceServer) {
	s.RegisterService(&_AWSIoTService_serviceDesc, srv)
}

func _AWSIoTService_Initialize_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InitializeAWSIoTIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AWSIoTServiceServer).Initialize(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.integration.awsiot.AWSIoTService/Initialize",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AWSIoTServiceServer).Initialize(ctx, req.(*InitializeAWSIoTIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AWSIoTService_Configuration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AWSIoTIntegrationConfigurationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AWSIoTServiceServer).Configuration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.integration.awsiot.AWSIoTService/Configuration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AWSIoTServiceServer).Configuration(ctx, req.(*AWSIoTIntegrationConfigurationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AWSIoTService_Enable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EnableAWSIoTIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AWSIoTServiceServer).Enable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.integration.awsiot.AWSIoTService/Enable",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AWSIoTServiceServer).Enable(ctx, req.(*EnableAWSIoTIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AWSIoTService_Disable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DisableAWSIoTIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AWSIoTServiceServer).Disable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.integration.awsiot.AWSIoTService/Disable",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AWSIoTServiceServer).Disable(ctx, req.(*DisableAWSIoTIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AWSIoTService_UpdateConfiguration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAWSIoTIntegrationConfigurationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AWSIoTServiceServer).UpdateConfiguration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.integration.awsiot.AWSIoTService/UpdateConfiguration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AWSIoTServiceServer).UpdateConfiguration(ctx, req.(*UpdateAWSIoTIntegrationConfigurationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AWSIoTService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.integration.awsiot.AWSIoTService",
	HandlerType: (*AWSIoTServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Initialize",
			Handler:    _AWSIoTService_Initialize_Handler,
		},
		{
			MethodName: "Configuration",
			Handler:    _AWSIoTService_Configuration_Handler,
		},
		{
			MethodName: "Enable",
			Handler:    _AWSIoTService_Enable_Handler,
		},
		{
			MethodName: "Disable",
			Handler:    _AWSIoTService_Disable_Handler,
		},
		{
			MethodName: "UpdateConfiguration",
			Handler:    _AWSIoTService_UpdateConfiguration_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "integration_aws_iot.proto",
}

func init() { proto.RegisterFile("integration_aws_iot.proto", fileDescriptor6) }

var fileDescriptor6 = []byte{
	// 740 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xd4, 0x56, 0xcd, 0x6e, 0xd3, 0x4c,
	0x14, 0xfd, 0xa6, 0x49, 0xdc, 0xe4, 0xa6, 0xfd, 0xda, 0x4c, 0x5a, 0x30, 0x46, 0x2a, 0x21, 0x52,
	0xa5, 0x40, 0xc1, 0x8b, 0x14, 0x21, 0x90, 0x10, 0xa8, 0x2d, 0x45, 0x18, 0x89, 0x0a, 0xb9, 0x14,
	0xa4, 0x6e, 0xac, 0x89, 0x3d, 0x4d, 0x47, 0x72, 0x6c, 0xd7, 0x9e, 0x50, 0xd4, 0x25, 0x12, 0x12,
	0x5b, 0xb6, 0x3c, 0x01, 0x0b, 0x76, 0xb0, 0x62, 0xcf, 0x96, 0x07, 0xe0, 0x49, 0x58, 0xa2, 0x8c,
	0x5d, 0xc7, 0x4e, 0xe3, 0xa6, 0x34, 0x55, 0x24, 0x76, 0xed, 0xfd, 0x39, 0x73, 0x7d, 0xee, 0x3d,
	0x47, 0x81, 0x2b, 0xcc, 0xe1, 0xb4, 0xed, 0x13, 0xce, 0x5c, 0xc7, 0x20, 0x87, 0x81, 0xc1, 0x5c,
	0xae, 0x7a, 0xbe, 0xcb, 0x5d, 0x2c, 0xef, 0xb3, 0x16, 0xf5, 0xd5, 0x44, 0x81, 0x4a, 0x0e, 0x03,
	0xe6, 0x72, 0x05, 0x5a, 0x24, 0xa0, 0x61, 0x95, 0x52, 0x31, 0xa9, 0xcf, 0xd9, 0x1e, 0x33, 0x09,
	0x8f, 0x42, 0xf5, 0xdf, 0x53, 0x50, 0x5d, 0x7b, 0xbd, 0xad, 0xb9, 0x2f, 0x37, 0x5c, 0x67, 0x8f,
	0xb5, 0xbb, 0x61, 0x37, 0xbe, 0x0e, 0x33, 0x5e, 0xb7, 0x65, 0xb3, 0x60, 0x9f, 0xfa, 0x06, 0xb3,
	0x64, 0x54, 0x43, 0x8d, 0x9c, 0x5e, 0x8e, 0x63, 0x9a, 0x85, 0xe7, 0x21, 0xd7, 0xf5, 0x6d, 0x79,
	0xaa, 0x86, 0x1a, 0x25, 0xbd, 0xf7, 0x27, 0xbe, 0x05, 0x52, 0xc7, 0xb5, 0x68, 0x27, 0x90, 0x73,
	0x35, 0xd4, 0x28, 0x37, 0x17, 0xd4, 0x70, 0xac, 0x27, 0xcc, 0xe6, 0xd4, 0x57, 0x9f, 0x8b, 0x9c,
	0x1e, 0xd5, 0xe0, 0x65, 0xf8, 0x3f, 0x31, 0x4f, 0xef, 0x91, 0xbc, 0x78, 0x64, 0x36, 0x11, 0xd5,
	0x2c, 0x7c, 0x03, 0xe6, 0x93, 0x65, 0x0e, 0xe9, 0x50, 0xb9, 0x20, 0xde, 0x9c, 0x4b, 0xc4, 0xb7,
	0x48, 0x87, 0xe2, 0x9b, 0x50, 0x31, 0x89, 0x31, 0x00, 0x2a, 0x09, 0xd0, 0x39, 0x93, 0x6c, 0xa4,
	0x60, 0x55, 0xa8, 0x0e, 0xd4, 0x0a, 0xe4, 0x69, 0x81, 0x5c, 0x49, 0x55, 0x0b, 0x6c, 0x05, 0x8a,
	0x16, 0x0b, 0x48, 0xcb, 0xa6, 0x96, 0x5c, 0xac, 0xa1, 0x46, 0x51, 0x8f, 0xff, 0xc7, 0x77, 0xe0,
	0x52, 0xe7, 0x80, 0x73, 0xc3, 0xb4, 0x19, 0x75, 0xb8, 0xc1, 0x2c, 0xea, 0xf4, 0x7a, 0xa9, 0x2f,
	0x97, 0x04, 0xdc, 0x42, 0x2f, 0xbb, 0x21, 0x92, 0x5a, 0x9c, 0xab, 0x7f, 0xce, 0x43, 0x5d, 0x73,
	0x18, 0x67, 0xc4, 0x66, 0x47, 0x34, 0x5c, 0x82, 0xd6, 0x5f, 0xa0, 0x4e, 0x0f, 0xba, 0x34, 0xe0,
	0xb8, 0x0e, 0x33, 0xae, 0xdf, 0x26, 0x0e, 0x3b, 0x12, 0x61, 0xb1, 0x89, 0x92, 0x9e, 0x8a, 0xe1,
	0x25, 0x28, 0x47, 0xf7, 0x60, 0xf4, 0x57, 0x52, 0x22, 0x87, 0x81, 0xe6, 0xf2, 0x1d, 0xdf, 0xc6,
	0x77, 0xe1, 0x32, 0x7d, 0xcb, 0x02, 0xce, 0x9c, 0xf6, 0x20, 0x3d, 0x39, 0x41, 0xcf, 0xe2, 0x71,
	0x3a, 0x4d, 0xd2, 0x2e, 0xe0, 0xae, 0x67, 0xbb, 0xc4, 0x4a, 0x76, 0x89, 0x35, 0x95, 0x9b, 0x2b,
	0xd1, 0x72, 0x93, 0x37, 0xb5, 0x23, 0x8a, 0x13, 0x18, 0xd1, 0x47, 0xe8, 0x95, 0xee, 0x60, 0x26,
	0x71, 0x2c, 0x85, 0x33, 0x1c, 0x4b, 0x36, 0xc5, 0x52, 0x36, 0xc5, 0xca, 0x0f, 0x04, 0x45, 0x9d,
	0x06, 0x9e, 0xeb, 0x04, 0x14, 0x13, 0x58, 0x3c, 0x26, 0xc9, 0x4c, 0xde, 0xba, 0x60, 0xb4, 0xdc,
	0xbc, 0xad, 0x66, 0x69, 0x48, 0x1d, 0x22, 0x10, 0xbd, 0x1a, 0xb2, 0x9b, 0x56, 0xcd, 0x2b, 0x98,
	0xf6, 0xc3, 0x2f, 0x16, 0x3b, 0x28, 0x37, 0x1f, 0x64, 0x83, 0x8e, 0x5e, 0xbd, 0x7e, 0x0c, 0x56,
	0xff, 0x8e, 0x60, 0xf9, 0x44, 0x55, 0x7a, 0x9e, 0xb3, 0x5f, 0x8b, 0xd2, 0x99, 0x28, 0x29, 0xf5,
	0xaf, 0x08, 0x96, 0x36, 0x9d, 0x9e, 0x52, 0xc6, 0xb9, 0xf1, 0x49, 0x4f, 0xfd, 0x0d, 0xc1, 0xb5,
	0xc7, 0xa1, 0xc0, 0xff, 0xa5, 0xb1, 0x7f, 0xe5, 0x60, 0x65, 0xc7, 0xb3, 0x08, 0xa7, 0x17, 0x76,
	0x2f, 0x23, 0xdd, 0xe5, 0xa4, 0x91, 0xe7, 0x86, 0x19, 0xf9, 0x6a, 0x2c, 0x78, 0x49, 0x7c, 0xee,
	0xd5, 0x61, 0x82, 0x57, 0xc3, 0xe1, 0xcf, 0xa0, 0xfb, 0xc2, 0x29, 0xba, 0xff, 0x39, 0x61, 0xdd,
	0x1b, 0x83, 0xba, 0xdf, 0xcc, 0x06, 0xfd, 0x8b, 0xed, 0xc4, 0x06, 0xf0, 0x2c, 0x5f, 0xcc, 0xcf,
	0x17, 0x9a, 0xef, 0x24, 0x98, 0x0d, 0x1b, 0xb7, 0xa9, 0xff, 0x86, 0x99, 0x14, 0x7f, 0x44, 0x00,
	0x7d, 0x23, 0xc1, 0x63, 0xd9, 0x8d, 0xb2, 0x39, 0x4e, 0xb7, 0x1a, 0xf3, 0xfd, 0x09, 0xc1, 0x6c,
	0x9a, 0x9e, 0x47, 0xa3, 0x28, 0x1e, 0xc1, 0x83, 0xf2, 0x74, 0x4c, 0x80, 0xfe, 0x70, 0xef, 0x11,
	0x48, 0xa1, 0x19, 0xe1, 0x7b, 0xd9, 0xa0, 0xa7, 0xdb, 0x95, 0xb2, 0x76, 0xde, 0xce, 0xfe, 0x1c,
	0x1f, 0x10, 0x4c, 0x47, 0xf6, 0x82, 0xef, 0x67, 0xc3, 0x8d, 0x70, 0x20, 0x65, 0xfd, 0xdc, 0xad,
	0xfd, 0x51, 0xbe, 0x20, 0xa8, 0x86, 0x47, 0x99, 0xde, 0xda, 0xc5, 0xdc, 0xb0, 0xb2, 0x75, 0x21,
	0x30, 0xf1, 0xb8, 0xeb, 0x0f, 0xa1, 0xd1, 0xb6, 0xdd, 0x16, 0xb1, 0x23, 0x5c, 0xe2, 0x31, 0xb5,
	0xed, 0x7b, 0xe6, 0x90, 0x07, 0xd6, 0x4b, 0x21, 0xf6, 0x9a, 0xc7, 0x5e, 0xfc, 0xb7, 0x5b, 0x10,
	0xf5, 0x2d, 0x49, 0xfc, 0xf0, 0x5d, 0xfd, 0x13, 0x00, 0x00, 0xff, 0xff, 0x33, 0x86, 0x16, 0x0c,
	0x4e, 0x0b, 0x00, 0x00,
}
