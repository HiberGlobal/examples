// Code generated by protoc-gen-go.
// source: testing.proto
// DO NOT EDIT!

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

// Push any number of modem messages. These are marked as test messages, which means they will be treated
// differently in a few places (i.e. message sequence, to avoid errors on the next real messages).
// The message is handled like a real message, it's encrypted as if sent from a modem, then goes through
// the decryption process and all relevant events are triggered (including webhooks calls caused by the events).
type PushModemMessagesRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                                    `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Messages     []*PushModemMessagesRequest_MessageToPush `protobuf:"bytes,2,rep,name=messages" json:"messages,omitempty"`
}

func (m *PushModemMessagesRequest) Reset()                    { *m = PushModemMessagesRequest{} }
func (m *PushModemMessagesRequest) String() string            { return proto.CompactTextString(m) }
func (*PushModemMessagesRequest) ProtoMessage()               {}
func (*PushModemMessagesRequest) Descriptor() ([]byte, []int) { return fileDescriptor16, []int{0} }

func (m *PushModemMessagesRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *PushModemMessagesRequest) GetMessages() []*PushModemMessagesRequest_MessageToPush {
	if m != nil {
		return m.Messages
	}
	return nil
}

type PushModemMessagesRequest_Response struct {
	Request *PushModemMessagesRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *PushModemMessagesRequest_Response) Reset()         { *m = PushModemMessagesRequest_Response{} }
func (m *PushModemMessagesRequest_Response) String() string { return proto.CompactTextString(m) }
func (*PushModemMessagesRequest_Response) ProtoMessage()    {}
func (*PushModemMessagesRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor16, []int{0, 0}
}

func (m *PushModemMessagesRequest_Response) GetRequest() *PushModemMessagesRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

type PushModemMessagesRequest_MessageToPush struct {
	ModemNumber string     `protobuf:"bytes,1,opt,name=modem_number,json=modemNumber" json:"modem_number,omitempty"`
	Time        *Timestamp `protobuf:"bytes,2,opt,name=time" json:"time,omitempty"`
	Location    *Location  `protobuf:"bytes,3,opt,name=location" json:"location,omitempty"`
	Content     []byte     `protobuf:"bytes,4,opt,name=content,proto3" json:"content,omitempty"`
}

func (m *PushModemMessagesRequest_MessageToPush) Reset() {
	*m = PushModemMessagesRequest_MessageToPush{}
}
func (m *PushModemMessagesRequest_MessageToPush) String() string { return proto.CompactTextString(m) }
func (*PushModemMessagesRequest_MessageToPush) ProtoMessage()    {}
func (*PushModemMessagesRequest_MessageToPush) Descriptor() ([]byte, []int) {
	return fileDescriptor16, []int{0, 1}
}

func (m *PushModemMessagesRequest_MessageToPush) GetModemNumber() string {
	if m != nil {
		return m.ModemNumber
	}
	return ""
}

func (m *PushModemMessagesRequest_MessageToPush) GetTime() *Timestamp {
	if m != nil {
		return m.Time
	}
	return nil
}

func (m *PushModemMessagesRequest_MessageToPush) GetLocation() *Location {
	if m != nil {
		return m.Location
	}
	return nil
}

func (m *PushModemMessagesRequest_MessageToPush) GetContent() []byte {
	if m != nil {
		return m.Content
	}
	return nil
}

// Push a message using the data gotten from the modem debug port.
// This means the message is an encrypted string, which the server can parse.
type PushModemMessagesFromDebugPortRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization    string   `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	EncodedMessages []string `protobuf:"bytes,2,rep,name=encoded_messages,json=encodedMessages" json:"encoded_messages,omitempty"`
}

func (m *PushModemMessagesFromDebugPortRequest) Reset()         { *m = PushModemMessagesFromDebugPortRequest{} }
func (m *PushModemMessagesFromDebugPortRequest) String() string { return proto.CompactTextString(m) }
func (*PushModemMessagesFromDebugPortRequest) ProtoMessage()    {}
func (*PushModemMessagesFromDebugPortRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor16, []int{1}
}

func (m *PushModemMessagesFromDebugPortRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *PushModemMessagesFromDebugPortRequest) GetEncodedMessages() []string {
	if m != nil {
		return m.EncodedMessages
	}
	return nil
}

type PushModemMessagesFromDebugPortRequest_Response struct {
	Request *PushModemMessagesFromDebugPortRequest `protobuf:"bytes,1,opt,name=request" json:"request,omitempty"`
}

func (m *PushModemMessagesFromDebugPortRequest_Response) Reset() {
	*m = PushModemMessagesFromDebugPortRequest_Response{}
}
func (m *PushModemMessagesFromDebugPortRequest_Response) String() string {
	return proto.CompactTextString(m)
}
func (*PushModemMessagesFromDebugPortRequest_Response) ProtoMessage() {}
func (*PushModemMessagesFromDebugPortRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor16, []int{1, 0}
}

func (m *PushModemMessagesFromDebugPortRequest_Response) GetRequest() *PushModemMessagesFromDebugPortRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func init() {
	proto.RegisterType((*PushModemMessagesRequest)(nil), "hiber.testing.PushModemMessagesRequest")
	proto.RegisterType((*PushModemMessagesRequest_Response)(nil), "hiber.testing.PushModemMessagesRequest.Response")
	proto.RegisterType((*PushModemMessagesRequest_MessageToPush)(nil), "hiber.testing.PushModemMessagesRequest.MessageToPush")
	proto.RegisterType((*PushModemMessagesFromDebugPortRequest)(nil), "hiber.testing.PushModemMessagesFromDebugPortRequest")
	proto.RegisterType((*PushModemMessagesFromDebugPortRequest_Response)(nil), "hiber.testing.PushModemMessagesFromDebugPortRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for TestingService service

type TestingServiceClient interface {
	PushModemMessages(ctx context.Context, in *PushModemMessagesRequest, opts ...grpc.CallOption) (*PushModemMessagesRequest_Response, error)
	PushModemMessagesFromDebugPort(ctx context.Context, in *PushModemMessagesFromDebugPortRequest, opts ...grpc.CallOption) (*PushModemMessagesFromDebugPortRequest_Response, error)
}

type testingServiceClient struct {
	cc *grpc.ClientConn
}

func NewTestingServiceClient(cc *grpc.ClientConn) TestingServiceClient {
	return &testingServiceClient{cc}
}

func (c *testingServiceClient) PushModemMessages(ctx context.Context, in *PushModemMessagesRequest, opts ...grpc.CallOption) (*PushModemMessagesRequest_Response, error) {
	out := new(PushModemMessagesRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.testing.TestingService/PushModemMessages", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *testingServiceClient) PushModemMessagesFromDebugPort(ctx context.Context, in *PushModemMessagesFromDebugPortRequest, opts ...grpc.CallOption) (*PushModemMessagesFromDebugPortRequest_Response, error) {
	out := new(PushModemMessagesFromDebugPortRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.testing.TestingService/PushModemMessagesFromDebugPort", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for TestingService service

type TestingServiceServer interface {
	PushModemMessages(context.Context, *PushModemMessagesRequest) (*PushModemMessagesRequest_Response, error)
	PushModemMessagesFromDebugPort(context.Context, *PushModemMessagesFromDebugPortRequest) (*PushModemMessagesFromDebugPortRequest_Response, error)
}

func RegisterTestingServiceServer(s *grpc.Server, srv TestingServiceServer) {
	s.RegisterService(&_TestingService_serviceDesc, srv)
}

func _TestingService_PushModemMessages_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushModemMessagesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TestingServiceServer).PushModemMessages(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.testing.TestingService/PushModemMessages",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TestingServiceServer).PushModemMessages(ctx, req.(*PushModemMessagesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TestingService_PushModemMessagesFromDebugPort_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushModemMessagesFromDebugPortRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TestingServiceServer).PushModemMessagesFromDebugPort(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.testing.TestingService/PushModemMessagesFromDebugPort",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TestingServiceServer).PushModemMessagesFromDebugPort(ctx, req.(*PushModemMessagesFromDebugPortRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _TestingService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.testing.TestingService",
	HandlerType: (*TestingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PushModemMessages",
			Handler:    _TestingService_PushModemMessages_Handler,
		},
		{
			MethodName: "PushModemMessagesFromDebugPort",
			Handler:    _TestingService_PushModemMessagesFromDebugPort_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "testing.proto",
}

func init() { proto.RegisterFile("testing.proto", fileDescriptor16) }

var fileDescriptor16 = []byte{
	// 405 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x9c, 0x53, 0x4d, 0x8f, 0xd3, 0x30,
	0x14, 0xc4, 0xed, 0xc2, 0x76, 0x5f, 0x5b, 0x76, 0xf1, 0x29, 0x8a, 0x04, 0x0a, 0x15, 0x88, 0x20,
	0xa4, 0x08, 0x95, 0x72, 0xe4, 0xd0, 0x0a, 0x71, 0xa2, 0x55, 0x31, 0x3d, 0xf5, 0x52, 0x25, 0xe9,
	0x53, 0x6a, 0xa9, 0xb6, 0x83, 0xed, 0x70, 0xe0, 0xc8, 0x7f, 0x40, 0xe2, 0xc6, 0x7f, 0xe2, 0x17,
	0xa1, 0x26, 0x4e, 0x20, 0x2a, 0x1f, 0xa5, 0x47, 0x8f, 0xe7, 0xcd, 0x78, 0xe6, 0x25, 0x30, 0xb4,
	0x68, 0x2c, 0x97, 0x59, 0x94, 0x6b, 0x65, 0x15, 0x1d, 0xee, 0x78, 0x82, 0x3a, 0x72, 0xa0, 0x0f,
	0x49, 0x6c, 0xb0, 0xba, 0x1a, 0x7d, 0xee, 0x82, 0xb7, 0x2c, 0xcc, 0x6e, 0xae, 0xb6, 0x28, 0xe6,
	0x68, 0x4c, 0x9c, 0xa1, 0x61, 0xf8, 0xa1, 0x40, 0x63, 0xe9, 0x08, 0x06, 0x4a, 0x67, 0xb1, 0xe4,
	0x9f, 0x62, 0xcb, 0x95, 0xf4, 0x48, 0x40, 0xc2, 0x2b, 0xd6, 0xc2, 0xe8, 0x3b, 0xe8, 0x09, 0x37,
	0xe6, 0x75, 0x82, 0x6e, 0xd8, 0x1f, 0xbf, 0x8c, 0x5a, 0x76, 0xd1, 0x9f, 0xe4, 0x23, 0x77, 0x5e,
	0xa9, 0x03, 0x83, 0x35, 0x32, 0xfe, 0x1c, 0x7a, 0x0c, 0x4d, 0xae, 0xa4, 0x41, 0x3a, 0x85, 0x4b,
	0x5d, 0xd1, 0xbd, 0x4e, 0x40, 0xc2, 0xfe, 0xf8, 0xc9, 0x89, 0xea, 0xac, 0x9e, 0xf3, 0xbf, 0x11,
	0x18, 0xb6, 0xac, 0xe8, 0x43, 0x18, 0x88, 0xc3, 0xc8, 0x46, 0x16, 0x22, 0x41, 0xed, 0x72, 0xf5,
	0x4b, 0x6c, 0x51, 0x42, 0xf4, 0x11, 0x5c, 0x58, 0x2e, 0xd0, 0x99, 0xde, 0x38, 0xd3, 0x15, 0x17,
	0x68, 0x6c, 0x2c, 0x72, 0x56, 0xde, 0xd2, 0x67, 0xd0, 0xdb, 0xab, 0xb4, 0x2a, 0xa7, 0x5b, 0x32,
	0xaf, 0x1d, 0xf3, 0xad, 0x83, 0x59, 0x43, 0xa0, 0x1e, 0x5c, 0xa6, 0x4a, 0x5a, 0x94, 0xd6, 0xbb,
	0x08, 0x48, 0x38, 0x60, 0xf5, 0x71, 0xf4, 0x9d, 0xc0, 0xe3, 0xa3, 0x1c, 0x6f, 0xb4, 0x12, 0xaf,
	0x31, 0x29, 0xb2, 0xa5, 0xd2, 0xf6, 0x7f, 0x36, 0xf2, 0x14, 0x6e, 0x50, 0xa6, 0x6a, 0x8b, 0xdb,
	0x4d, 0x6b, 0x33, 0x57, 0xec, 0xda, 0xe1, 0xb5, 0x85, 0xbf, 0xfe, 0xa5, 0xe9, 0xc5, 0xcf, 0xa6,
	0x49, 0x19, 0x65, 0xf2, 0xaf, 0xa6, 0x7f, 0xf7, 0xc2, 0xa6, 0xf6, 0xf1, 0xd7, 0x0e, 0xdc, 0x5d,
	0x55, 0xa3, 0xef, 0x51, 0x7f, 0xe4, 0x29, 0x52, 0x09, 0xf7, 0x8e, 0x44, 0xe8, 0xa9, 0x0b, 0xf5,
	0x9f, 0x9f, 0xfa, 0x5d, 0x35, 0x91, 0xbe, 0x10, 0x78, 0xf0, 0xf7, 0x57, 0xd3, 0xb3, 0x42, 0xfa,
	0xaf, 0xce, 0x99, 0x6a, 0xde, 0x35, 0x9b, 0xc0, 0xfd, 0x6c, 0xaf, 0x92, 0x78, 0xef, 0x64, 0xe2,
	0x9c, 0x47, 0x99, 0xce, 0xd3, 0x5a, 0x6f, 0x06, 0xae, 0xb8, 0x69, 0xce, 0x97, 0xb7, 0xd6, 0xb7,
	0x4b, 0x56, 0x72, 0xa7, 0xfc, 0x63, 0x5f, 0xfc, 0x08, 0x00, 0x00, 0xff, 0xff, 0x04, 0x44, 0x35,
	0x53, 0xdd, 0x03, 0x00, 0x00,
}
