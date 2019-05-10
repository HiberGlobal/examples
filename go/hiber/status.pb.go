// Code generated by protoc-gen-go. DO NOT EDIT.
// source: status.proto

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

type NetworkStatus struct {
	Health      Health     `protobuf:"varint,1,opt,name=health,enum=hiber.Health" json:"health,omitempty"`
	Message     string     `protobuf:"bytes,2,opt,name=message" json:"message,omitempty"`
	LastUpdated *Timestamp `protobuf:"bytes,3,opt,name=last_updated,json=lastUpdated" json:"last_updated,omitempty"`
}

func (m *NetworkStatus) Reset()                    { *m = NetworkStatus{} }
func (m *NetworkStatus) String() string            { return proto.CompactTextString(m) }
func (*NetworkStatus) ProtoMessage()               {}
func (*NetworkStatus) Descriptor() ([]byte, []int) { return fileDescriptor15, []int{0} }

func (m *NetworkStatus) GetHealth() Health {
	if m != nil {
		return m.Health
	}
	return Health_OK
}

func (m *NetworkStatus) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *NetworkStatus) GetLastUpdated() *Timestamp {
	if m != nil {
		return m.LastUpdated
	}
	return nil
}

type AreaStatus struct {
	Area        *Area      `protobuf:"bytes,1,opt,name=area" json:"area,omitempty"`
	Health      Health     `protobuf:"varint,2,opt,name=health,enum=hiber.Health" json:"health,omitempty"`
	Message     string     `protobuf:"bytes,3,opt,name=message" json:"message,omitempty"`
	LastUpdated *Timestamp `protobuf:"bytes,4,opt,name=last_updated,json=lastUpdated" json:"last_updated,omitempty"`
}

func (m *AreaStatus) Reset()                    { *m = AreaStatus{} }
func (m *AreaStatus) String() string            { return proto.CompactTextString(m) }
func (*AreaStatus) ProtoMessage()               {}
func (*AreaStatus) Descriptor() ([]byte, []int) { return fileDescriptor15, []int{1} }

func (m *AreaStatus) GetArea() *Area {
	if m != nil {
		return m.Area
	}
	return nil
}

func (m *AreaStatus) GetHealth() Health {
	if m != nil {
		return m.Health
	}
	return Health_OK
}

func (m *AreaStatus) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *AreaStatus) GetLastUpdated() *Timestamp {
	if m != nil {
		return m.LastUpdated
	}
	return nil
}

type OrganizationStatus struct {
	// Organization health, based on the values below.
	Health Health `protobuf:"varint,1,opt,name=health,enum=hiber.Health" json:"health,omitempty"`
	// Health for modems, based on the most severe state for all your modems.
	Modems Health `protobuf:"varint,2,opt,name=modems,enum=hiber.Health" json:"modems,omitempty"`
	// Health for publishers, based on the most severe state for all your publishers.
	Publishers Health `protobuf:"varint,3,opt,name=publishers,enum=hiber.Health" json:"publishers,omitempty"`
	// A detailed list of modems with a non-OK status.
	RelevantModems []*OrganizationStatus_ModemStatus `protobuf:"bytes,4,rep,name=relevant_modems,json=relevantModems" json:"relevant_modems,omitempty"`
	// A detailed list of publishers with a non-OK status.
	RelevantPublishers []*OrganizationStatus_PublisherStatus `protobuf:"bytes,5,rep,name=relevant_publishers,json=relevantPublishers" json:"relevant_publishers,omitempty"`
}

func (m *OrganizationStatus) Reset()                    { *m = OrganizationStatus{} }
func (m *OrganizationStatus) String() string            { return proto.CompactTextString(m) }
func (*OrganizationStatus) ProtoMessage()               {}
func (*OrganizationStatus) Descriptor() ([]byte, []int) { return fileDescriptor15, []int{2} }

func (m *OrganizationStatus) GetHealth() Health {
	if m != nil {
		return m.Health
	}
	return Health_OK
}

func (m *OrganizationStatus) GetModems() Health {
	if m != nil {
		return m.Modems
	}
	return Health_OK
}

func (m *OrganizationStatus) GetPublishers() Health {
	if m != nil {
		return m.Publishers
	}
	return Health_OK
}

func (m *OrganizationStatus) GetRelevantModems() []*OrganizationStatus_ModemStatus {
	if m != nil {
		return m.RelevantModems
	}
	return nil
}

func (m *OrganizationStatus) GetRelevantPublishers() []*OrganizationStatus_PublisherStatus {
	if m != nil {
		return m.RelevantPublishers
	}
	return nil
}

type OrganizationStatus_ModemStatus struct {
	ModemNumber string   `protobuf:"bytes,1,opt,name=modem_number,json=modemNumber" json:"modem_number,omitempty"`
	Health      Health   `protobuf:"varint,2,opt,name=health,enum=hiber.Health" json:"health,omitempty"`
	Messages    []string `protobuf:"bytes,3,rep,name=messages" json:"messages,omitempty"`
}

func (m *OrganizationStatus_ModemStatus) Reset()         { *m = OrganizationStatus_ModemStatus{} }
func (m *OrganizationStatus_ModemStatus) String() string { return proto.CompactTextString(m) }
func (*OrganizationStatus_ModemStatus) ProtoMessage()    {}
func (*OrganizationStatus_ModemStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor15, []int{2, 0}
}

func (m *OrganizationStatus_ModemStatus) GetModemNumber() string {
	if m != nil {
		return m.ModemNumber
	}
	return ""
}

func (m *OrganizationStatus_ModemStatus) GetHealth() Health {
	if m != nil {
		return m.Health
	}
	return Health_OK
}

func (m *OrganizationStatus_ModemStatus) GetMessages() []string {
	if m != nil {
		return m.Messages
	}
	return nil
}

type OrganizationStatus_PublisherStatus struct {
	PublisherId int64    `protobuf:"varint,1,opt,name=publisher_id,json=publisherId" json:"publisher_id,omitempty"`
	Health      Health   `protobuf:"varint,2,opt,name=health,enum=hiber.Health" json:"health,omitempty"`
	Messages    []string `protobuf:"bytes,3,rep,name=messages" json:"messages,omitempty"`
}

func (m *OrganizationStatus_PublisherStatus) Reset()         { *m = OrganizationStatus_PublisherStatus{} }
func (m *OrganizationStatus_PublisherStatus) String() string { return proto.CompactTextString(m) }
func (*OrganizationStatus_PublisherStatus) ProtoMessage()    {}
func (*OrganizationStatus_PublisherStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor15, []int{2, 1}
}

func (m *OrganizationStatus_PublisherStatus) GetPublisherId() int64 {
	if m != nil {
		return m.PublisherId
	}
	return 0
}

func (m *OrganizationStatus_PublisherStatus) GetHealth() Health {
	if m != nil {
		return m.Health
	}
	return Health_OK
}

func (m *OrganizationStatus_PublisherStatus) GetMessages() []string {
	if m != nil {
		return m.Messages
	}
	return nil
}

type StatusRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	// Whether to include a detailed list of modems with a non-OK status.
	IncludeModems bool `protobuf:"varint,2,opt,name=include_modems,json=includeModems" json:"include_modems,omitempty"`
	// Whether to include a detailed list of publishers with a non-OK status.
	IncludePublishers bool `protobuf:"varint,3,opt,name=include_publishers,json=includePublishers" json:"include_publishers,omitempty"`
}

func (m *StatusRequest) Reset()                    { *m = StatusRequest{} }
func (m *StatusRequest) String() string            { return proto.CompactTextString(m) }
func (*StatusRequest) ProtoMessage()               {}
func (*StatusRequest) Descriptor() ([]byte, []int) { return fileDescriptor15, []int{3} }

func (m *StatusRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *StatusRequest) GetIncludeModems() bool {
	if m != nil {
		return m.IncludeModems
	}
	return false
}

func (m *StatusRequest) GetIncludePublishers() bool {
	if m != nil {
		return m.IncludePublishers
	}
	return false
}

type StatusRequest_Response struct {
	Request *StatusRequest `protobuf:"bytes,1,opt,name=request" json:"request,omitempty"`
	// Status of the satellite network.
	Satellites *NetworkStatus `protobuf:"bytes,2,opt,name=satellites" json:"satellites,omitempty"`
	// Status of the ground station network.
	GroundStations *NetworkStatus `protobuf:"bytes,3,opt,name=ground_stations,json=groundStations" json:"ground_stations,omitempty"`
	// Areas of the globe that have a non-OK status, i.e. regions where coverage is hindered by external forces.
	GlobalAreas []*AreaStatus `protobuf:"bytes,4,rep,name=global_areas,json=globalAreas" json:"global_areas,omitempty"`
	// Status for your organization, i.e. whether you have modems that are having trouble, or failed publishers.
	Organization *OrganizationStatus `protobuf:"bytes,5,opt,name=organization" json:"organization,omitempty"`
	// Status for the server. Generally only used when the server is in read-only mode for maintenance.
	Server *NetworkStatus `protobuf:"bytes,6,opt,name=server" json:"server,omitempty"`
}

func (m *StatusRequest_Response) Reset()                    { *m = StatusRequest_Response{} }
func (m *StatusRequest_Response) String() string            { return proto.CompactTextString(m) }
func (*StatusRequest_Response) ProtoMessage()               {}
func (*StatusRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor15, []int{3, 0} }

func (m *StatusRequest_Response) GetRequest() *StatusRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *StatusRequest_Response) GetSatellites() *NetworkStatus {
	if m != nil {
		return m.Satellites
	}
	return nil
}

func (m *StatusRequest_Response) GetGroundStations() *NetworkStatus {
	if m != nil {
		return m.GroundStations
	}
	return nil
}

func (m *StatusRequest_Response) GetGlobalAreas() []*AreaStatus {
	if m != nil {
		return m.GlobalAreas
	}
	return nil
}

func (m *StatusRequest_Response) GetOrganization() *OrganizationStatus {
	if m != nil {
		return m.Organization
	}
	return nil
}

func (m *StatusRequest_Response) GetServer() *NetworkStatus {
	if m != nil {
		return m.Server
	}
	return nil
}

func init() {
	proto.RegisterType((*NetworkStatus)(nil), "hiber.status.NetworkStatus")
	proto.RegisterType((*AreaStatus)(nil), "hiber.status.AreaStatus")
	proto.RegisterType((*OrganizationStatus)(nil), "hiber.status.OrganizationStatus")
	proto.RegisterType((*OrganizationStatus_ModemStatus)(nil), "hiber.status.OrganizationStatus.ModemStatus")
	proto.RegisterType((*OrganizationStatus_PublisherStatus)(nil), "hiber.status.OrganizationStatus.PublisherStatus")
	proto.RegisterType((*StatusRequest)(nil), "hiber.status.StatusRequest")
	proto.RegisterType((*StatusRequest_Response)(nil), "hiber.status.StatusRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for StatusService service

type StatusServiceClient interface {
	Status(ctx context.Context, in *StatusRequest, opts ...grpc.CallOption) (*StatusRequest_Response, error)
}

type statusServiceClient struct {
	cc *grpc.ClientConn
}

func NewStatusServiceClient(cc *grpc.ClientConn) StatusServiceClient {
	return &statusServiceClient{cc}
}

func (c *statusServiceClient) Status(ctx context.Context, in *StatusRequest, opts ...grpc.CallOption) (*StatusRequest_Response, error) {
	out := new(StatusRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.status.StatusService/Status", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for StatusService service

type StatusServiceServer interface {
	Status(context.Context, *StatusRequest) (*StatusRequest_Response, error)
}

func RegisterStatusServiceServer(s *grpc.Server, srv StatusServiceServer) {
	s.RegisterService(&_StatusService_serviceDesc, srv)
}

func _StatusService_Status_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StatusServiceServer).Status(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.status.StatusService/Status",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StatusServiceServer).Status(ctx, req.(*StatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _StatusService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.status.StatusService",
	HandlerType: (*StatusServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Status",
			Handler:    _StatusService_Status_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "status.proto",
}

func init() { proto.RegisterFile("status.proto", fileDescriptor15) }

var fileDescriptor15 = []byte{
	// 603 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x95, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0xc6, 0x49, 0x93, 0xba, 0xc9, 0xd8, 0x49, 0x61, 0xb9, 0x58, 0x01, 0x89, 0x10, 0x51, 0x29,
	0x07, 0xb0, 0x90, 0x2b, 0x4e, 0x3d, 0xb5, 0xe2, 0x00, 0x42, 0x2d, 0xd5, 0x96, 0x5e, 0x10, 0x92,
	0xb5, 0xae, 0x47, 0xc9, 0x0a, 0xff, 0x63, 0x77, 0xdd, 0x4a, 0xdc, 0x91, 0x78, 0x0f, 0x9e, 0x82,
	0x77, 0xe3, 0x80, 0xbc, 0xbb, 0x0e, 0x76, 0x2b, 0xd2, 0x22, 0x71, 0xab, 0x67, 0xbe, 0xf9, 0xf6,
	0xb7, 0x33, 0xd3, 0x0d, 0x78, 0x52, 0x31, 0x55, 0xc9, 0xa0, 0x14, 0x85, 0x2a, 0x88, 0xb7, 0xe2,
	0x31, 0x8a, 0xc0, 0xc4, 0xa6, 0x10, 0x33, 0x89, 0x26, 0x33, 0xff, 0xd6, 0x83, 0xf1, 0x09, 0xaa,
	0xab, 0x42, 0x7c, 0x3e, 0xd3, 0x59, 0xb2, 0x07, 0xce, 0x0a, 0x59, 0xaa, 0x56, 0x7e, 0x6f, 0xd6,
	0x5b, 0x4c, 0xc2, 0x71, 0x60, 0x8a, 0xdf, 0xe8, 0x20, 0xb5, 0x49, 0xe2, 0xc3, 0x4e, 0x86, 0x52,
	0xb2, 0x25, 0xfa, 0x5b, 0xb3, 0xde, 0x62, 0x44, 0x9b, 0x4f, 0xb2, 0x0f, 0x5e, 0xca, 0xa4, 0x8a,
	0xaa, 0x32, 0x61, 0x0a, 0x13, 0xbf, 0x3f, 0xeb, 0x2d, 0xdc, 0xf0, 0xbe, 0xb5, 0xf9, 0xc0, 0x33,
	0x94, 0x8a, 0x65, 0x25, 0x75, 0x6b, 0xd5, 0xb9, 0x11, 0xcd, 0x7f, 0xf4, 0x00, 0x0e, 0x05, 0x32,
	0x0b, 0xf1, 0x04, 0x06, 0x4c, 0x20, 0xd3, 0x08, 0x6e, 0xe8, 0xda, 0xda, 0x5a, 0x40, 0x75, 0xa2,
	0x45, 0xb9, 0x75, 0x47, 0xca, 0xfe, 0x66, 0xca, 0xc1, 0x5d, 0x28, 0x7f, 0x0e, 0x80, 0xbc, 0x17,
	0x4b, 0x96, 0xf3, 0xaf, 0x4c, 0xf1, 0x22, 0xff, 0xb7, 0x96, 0xed, 0x81, 0x93, 0x15, 0x09, 0x66,
	0xf2, 0x2f, 0xcc, 0x26, 0x49, 0x5e, 0x00, 0x94, 0x55, 0x9c, 0x72, 0xb9, 0x42, 0x21, 0x35, 0xf6,
	0x0d, 0x69, 0x4b, 0x40, 0xce, 0x61, 0x57, 0x60, 0x8a, 0x97, 0x2c, 0x57, 0x91, 0xb5, 0x1f, 0xcc,
	0xfa, 0x0b, 0x37, 0x7c, 0x1e, 0xb4, 0xa7, 0x1e, 0xdc, 0xe4, 0x0e, 0x8e, 0x6b, 0xb9, 0xf9, 0x9b,
	0x4e, 0x1a, 0x93, 0x63, 0x43, 0xc1, 0xe0, 0xe1, 0xda, 0xb6, 0x85, 0xb3, 0xad, 0xad, 0x5f, 0xde,
	0x6a, 0x7d, 0xda, 0x94, 0x58, 0x7b, 0xd2, 0x98, 0xad, 0x13, 0x72, 0x2a, 0xc1, 0x6d, 0x11, 0x90,
	0xa7, 0xe0, 0x69, 0xfe, 0x28, 0xaf, 0xb2, 0x18, 0x85, 0xee, 0xe5, 0x88, 0xba, 0x3a, 0x76, 0xa2,
	0x43, 0x77, 0x9d, 0xfa, 0x14, 0x86, 0x76, 0xcc, 0x75, 0xff, 0xfa, 0x8b, 0x11, 0x5d, 0x7f, 0x4f,
	0xaf, 0x60, 0xf7, 0x1a, 0x5b, 0x7d, 0xf0, 0xfa, 0x86, 0x11, 0x4f, 0xf4, 0xc1, 0x7d, 0xea, 0xae,
	0x63, 0x6f, 0x93, 0xff, 0x70, 0xf0, 0xfc, 0xfb, 0x00, 0xc6, 0xb6, 0x19, 0xf8, 0xa5, 0x42, 0xa9,
	0xc8, 0x1c, 0xbc, 0xa2, 0xd5, 0x39, 0x7b, 0xe1, 0x4e, 0x8c, 0xec, 0xc1, 0x84, 0xe7, 0x17, 0x69,
	0x95, 0x60, 0xd4, 0xda, 0x9d, 0x21, 0x1d, 0xdb, 0xe8, 0x71, 0xb3, 0x33, 0xa4, 0x91, 0x5d, 0xdb,
	0x9d, 0x21, 0x7d, 0x60, 0x33, 0xad, 0xce, 0xff, 0xda, 0x82, 0x21, 0x45, 0x59, 0x16, 0xb9, 0x44,
	0xf2, 0x0a, 0x76, 0x84, 0x21, 0xb2, 0xff, 0x6e, 0x8f, 0xba, 0xd3, 0xed, 0x40, 0xd3, 0x46, 0x4b,
	0x0e, 0x00, 0x24, 0x53, 0x98, 0xa6, 0x5c, 0xa1, 0xa1, 0xba, 0x51, 0xd9, 0x79, 0x58, 0x68, 0x4b,
	0x4e, 0x5e, 0xc3, 0xee, 0x52, 0x14, 0x55, 0x9e, 0x44, 0xb5, 0x94, 0x17, 0xb9, 0xb4, 0xcf, 0xc4,
	0x46, 0x87, 0x89, 0xa9, 0x39, 0xb3, 0x25, 0xe4, 0x00, 0xbc, 0x65, 0x5a, 0xc4, 0x2c, 0x8d, 0xea,
	0x37, 0xa1, 0xd9, 0x7b, 0xbf, 0x6b, 0xf1, 0xe7, 0x55, 0xa1, 0xae, 0x51, 0xd7, 0x91, 0x1a, 0xa1,
	0xdb, 0xfd, 0x6d, 0x7d, 0xfe, 0xec, 0xb6, 0xcd, 0xbe, 0x36, 0x9f, 0x7d, 0x70, 0x24, 0x8a, 0x4b,
	0x14, 0xbe, 0x73, 0x3b, 0xbf, 0x95, 0x86, 0x9f, 0x9a, 0x4d, 0x38, 0x43, 0x71, 0xc9, 0x2f, 0x90,
	0xbc, 0x03, 0xc7, 0xee, 0xe2, 0xa6, 0xde, 0x4f, 0x9f, 0x6d, 0x48, 0x06, 0xcd, 0x3c, 0x8f, 0x42,
	0x78, 0x6c, 0xee, 0x69, 0xd5, 0xac, 0xe4, 0xc1, 0x52, 0x94, 0x17, 0xb6, 0xec, 0x68, 0x64, 0xea,
	0x0e, 0x4b, 0x7e, 0x7a, 0xef, 0xe3, 0xb6, 0xd6, 0xc4, 0x8e, 0xfe, 0x35, 0xd8, 0xff, 0x1d, 0x00,
	0x00, 0xff, 0xff, 0x85, 0xbc, 0x3c, 0x98, 0x37, 0x06, 0x00, 0x00,
}