// Code generated by protoc-gen-go.
// source: modem_claim.proto
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

type ModemClaim struct {
	ModemNumber          string     `protobuf:"bytes,1,opt,name=modem_number,json=modemNumber" json:"modem_number,omitempty"`
	CreatedAt            *Timestamp `protobuf:"bytes,5,opt,name=created_at,json=createdAt" json:"created_at,omitempty"`
	ClaimingOrganization string     `protobuf:"bytes,7,opt,name=claiming_organization,json=claimingOrganization" json:"claiming_organization,omitempty"`
	// Tags the modem had when it was claimed.
	Tags []*Tag `protobuf:"bytes,8,rep,name=tags" json:"tags,omitempty"`
}

func (m *ModemClaim) Reset()                    { *m = ModemClaim{} }
func (m *ModemClaim) String() string            { return proto.CompactTextString(m) }
func (*ModemClaim) ProtoMessage()               {}
func (*ModemClaim) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{0} }

func (m *ModemClaim) GetModemNumber() string {
	if m != nil {
		return m.ModemNumber
	}
	return ""
}

func (m *ModemClaim) GetCreatedAt() *Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *ModemClaim) GetClaimingOrganization() string {
	if m != nil {
		return m.ClaimingOrganization
	}
	return ""
}

func (m *ModemClaim) GetTags() []*Tag {
	if m != nil {
		return m.Tags
	}
	return nil
}

type ModemClaimSelection struct {
	Modems    *Filter_Modems `protobuf:"bytes,1,opt,name=modems" json:"modems,omitempty"`
	TimeRange *TimeRange     `protobuf:"bytes,3,opt,name=time_range,json=timeRange" json:"time_range,omitempty"`
}

func (m *ModemClaimSelection) Reset()                    { *m = ModemClaimSelection{} }
func (m *ModemClaimSelection) String() string            { return proto.CompactTextString(m) }
func (*ModemClaimSelection) ProtoMessage()               {}
func (*ModemClaimSelection) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{1} }

func (m *ModemClaimSelection) GetModems() *Filter_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *ModemClaimSelection) GetTimeRange() *TimeRange {
	if m != nil {
		return m.TimeRange
	}
	return nil
}

type ClaimModemRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                          `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Claims       []*ClaimModemRequest_ClaimModem `protobuf:"bytes,2,rep,name=claims" json:"claims,omitempty"`
}

func (m *ClaimModemRequest) Reset()                    { *m = ClaimModemRequest{} }
func (m *ClaimModemRequest) String() string            { return proto.CompactTextString(m) }
func (*ClaimModemRequest) ProtoMessage()               {}
func (*ClaimModemRequest) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{2} }

func (m *ClaimModemRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *ClaimModemRequest) GetClaims() []*ClaimModemRequest_ClaimModem {
	if m != nil {
		return m.Claims
	}
	return nil
}

type ClaimModemRequest_ClaimModem struct {
	ModemNumber string `protobuf:"bytes,1,opt,name=modem_number,json=modemNumber" json:"modem_number,omitempty"`
	Verifier    string `protobuf:"bytes,2,opt,name=verifier" json:"verifier,omitempty"`
}

func (m *ClaimModemRequest_ClaimModem) Reset()                    { *m = ClaimModemRequest_ClaimModem{} }
func (m *ClaimModemRequest_ClaimModem) String() string            { return proto.CompactTextString(m) }
func (*ClaimModemRequest_ClaimModem) ProtoMessage()               {}
func (*ClaimModemRequest_ClaimModem) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{2, 0} }

func (m *ClaimModemRequest_ClaimModem) GetModemNumber() string {
	if m != nil {
		return m.ModemNumber
	}
	return ""
}

func (m *ClaimModemRequest_ClaimModem) GetVerifier() string {
	if m != nil {
		return m.Verifier
	}
	return ""
}

type ClaimModemRequest_Response struct {
	Request *ClaimModemRequest `protobuf:"bytes,1,opt,name=request" json:"request,omitempty"`
	Claims  []*ModemClaim      `protobuf:"bytes,2,rep,name=claims" json:"claims,omitempty"`
}

func (m *ClaimModemRequest_Response) Reset()                    { *m = ClaimModemRequest_Response{} }
func (m *ClaimModemRequest_Response) String() string            { return proto.CompactTextString(m) }
func (*ClaimModemRequest_Response) ProtoMessage()               {}
func (*ClaimModemRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{2, 1} }

func (m *ClaimModemRequest_Response) GetRequest() *ClaimModemRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *ClaimModemRequest_Response) GetClaims() []*ModemClaim {
	if m != nil {
		return m.Claims
	}
	return nil
}

type ListModemClaimsRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string               `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *ModemClaimSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	Pagination   *Pagination          `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListModemClaimsRequest) Reset()                    { *m = ListModemClaimsRequest{} }
func (m *ListModemClaimsRequest) String() string            { return proto.CompactTextString(m) }
func (*ListModemClaimsRequest) ProtoMessage()               {}
func (*ListModemClaimsRequest) Descriptor() ([]byte, []int) { return fileDescriptor7, []int{3} }

func (m *ListModemClaimsRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *ListModemClaimsRequest) GetSelection() *ModemClaimSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *ListModemClaimsRequest) GetPagination() *Pagination {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type ListModemClaimsRequest_Response struct {
	Claims     []*ModemClaim           `protobuf:"bytes,1,rep,name=claims" json:"claims,omitempty"`
	Request    *ListModemClaimsRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
	Pagination *Pagination_Result      `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListModemClaimsRequest_Response) Reset()         { *m = ListModemClaimsRequest_Response{} }
func (m *ListModemClaimsRequest_Response) String() string { return proto.CompactTextString(m) }
func (*ListModemClaimsRequest_Response) ProtoMessage()    {}
func (*ListModemClaimsRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor7, []int{3, 0}
}

func (m *ListModemClaimsRequest_Response) GetClaims() []*ModemClaim {
	if m != nil {
		return m.Claims
	}
	return nil
}

func (m *ListModemClaimsRequest_Response) GetRequest() *ListModemClaimsRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *ListModemClaimsRequest_Response) GetPagination() *Pagination_Result {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*ModemClaim)(nil), "hiber.modem.ModemClaim")
	proto.RegisterType((*ModemClaimSelection)(nil), "hiber.modem.ModemClaimSelection")
	proto.RegisterType((*ClaimModemRequest)(nil), "hiber.modem.ClaimModemRequest")
	proto.RegisterType((*ClaimModemRequest_ClaimModem)(nil), "hiber.modem.ClaimModemRequest.ClaimModem")
	proto.RegisterType((*ClaimModemRequest_Response)(nil), "hiber.modem.ClaimModemRequest.Response")
	proto.RegisterType((*ListModemClaimsRequest)(nil), "hiber.modem.ListModemClaimsRequest")
	proto.RegisterType((*ListModemClaimsRequest_Response)(nil), "hiber.modem.ListModemClaimsRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for ModemClaimService service

type ModemClaimServiceClient interface {
	// Claim a number of modems.
	Claim(ctx context.Context, in *ClaimModemRequest, opts ...grpc.CallOption) (*ClaimModemRequest_Response, error)
	// List modems that have been claimed. They are no longer part if your organization.
	ListClaims(ctx context.Context, in *ListModemClaimsRequest, opts ...grpc.CallOption) (*ListModemClaimsRequest_Response, error)
}

type modemClaimServiceClient struct {
	cc *grpc.ClientConn
}

func NewModemClaimServiceClient(cc *grpc.ClientConn) ModemClaimServiceClient {
	return &modemClaimServiceClient{cc}
}

func (c *modemClaimServiceClient) Claim(ctx context.Context, in *ClaimModemRequest, opts ...grpc.CallOption) (*ClaimModemRequest_Response, error) {
	out := new(ClaimModemRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.modem.ModemClaimService/Claim", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modemClaimServiceClient) ListClaims(ctx context.Context, in *ListModemClaimsRequest, opts ...grpc.CallOption) (*ListModemClaimsRequest_Response, error) {
	out := new(ListModemClaimsRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.modem.ModemClaimService/ListClaims", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for ModemClaimService service

type ModemClaimServiceServer interface {
	// Claim a number of modems.
	Claim(context.Context, *ClaimModemRequest) (*ClaimModemRequest_Response, error)
	// List modems that have been claimed. They are no longer part if your organization.
	ListClaims(context.Context, *ListModemClaimsRequest) (*ListModemClaimsRequest_Response, error)
}

func RegisterModemClaimServiceServer(s *grpc.Server, srv ModemClaimServiceServer) {
	s.RegisterService(&_ModemClaimService_serviceDesc, srv)
}

func _ModemClaimService_Claim_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ClaimModemRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModemClaimServiceServer).Claim(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.modem.ModemClaimService/Claim",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModemClaimServiceServer).Claim(ctx, req.(*ClaimModemRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModemClaimService_ListClaims_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListModemClaimsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModemClaimServiceServer).ListClaims(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.modem.ModemClaimService/ListClaims",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModemClaimServiceServer).ListClaims(ctx, req.(*ListModemClaimsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ModemClaimService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.modem.ModemClaimService",
	HandlerType: (*ModemClaimServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Claim",
			Handler:    _ModemClaimService_Claim_Handler,
		},
		{
			MethodName: "ListClaims",
			Handler:    _ModemClaimService_ListClaims_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "modem_claim.proto",
}

func init() { proto.RegisterFile("modem_claim.proto", fileDescriptor7) }

var fileDescriptor7 = []byte{
	// 564 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x94, 0x54, 0xcd, 0x6e, 0xd3, 0x4c,
	0x14, 0xfd, 0x9c, 0x38, 0x89, 0x73, 0xdd, 0x0f, 0x39, 0x43, 0x01, 0xcb, 0x48, 0x28, 0x84, 0x05,
	0x41, 0xaa, 0x5c, 0x91, 0x0a, 0xa9, 0x1b, 0x90, 0x52, 0x24, 0x16, 0xe1, 0x2f, 0x1a, 0xba, 0x62,
	0x13, 0x4d, 0xd2, 0x8b, 0x19, 0xc9, 0x7f, 0xcc, 0x4c, 0xba, 0xe0, 0x19, 0x78, 0x1c, 0xd6, 0x2c,
	0xd9, 0xf3, 0x12, 0x3c, 0x07, 0xf2, 0x8c, 0x63, 0x3b, 0xa4, 0xd0, 0xb0, 0xb3, 0xef, 0xb9, 0xe7,
	0xde, 0x73, 0xce, 0x8c, 0x06, 0x06, 0x49, 0x76, 0x81, 0xc9, 0x62, 0x15, 0x33, 0x9e, 0x84, 0xb9,
	0xc8, 0x54, 0x46, 0xdc, 0x8f, 0x7c, 0x89, 0x22, 0xd4, 0x40, 0x00, 0x4b, 0x26, 0xd1, 0x00, 0x81,
	0xab, 0x4b, 0xe5, 0x4f, 0x5f, 0xb1, 0xc8, 0x7c, 0x8e, 0x7e, 0x58, 0x00, 0xaf, 0x0b, 0xe8, 0x79,
	0x31, 0x85, 0xdc, 0x87, 0x03, 0x33, 0x34, 0x5d, 0x27, 0x4b, 0x14, 0xbe, 0x35, 0xb4, 0xc6, 0x7d,
	0x6a, 0xc8, 0x6f, 0x74, 0x89, 0x1c, 0x03, 0xac, 0x04, 0x32, 0x85, 0x17, 0x0b, 0xa6, 0xfc, 0xce,
	0xd0, 0x1a, 0xbb, 0x13, 0x2f, 0x34, 0x7b, 0xcf, 0x79, 0x82, 0x52, 0xb1, 0x24, 0xa7, 0xfd, 0xb2,
	0x67, 0xaa, 0xc8, 0x09, 0xdc, 0xd2, 0x12, 0x79, 0x1a, 0x2d, 0x32, 0x11, 0xb1, 0x94, 0x7f, 0x66,
	0x8a, 0x67, 0xa9, 0xdf, 0xd3, 0xc3, 0x0f, 0x37, 0xe0, 0xdb, 0x06, 0x46, 0x46, 0x60, 0x2b, 0x16,
	0x49, 0xdf, 0x19, 0xb6, 0xc7, 0xee, 0xe4, 0x46, 0x39, 0xbf, 0xd0, 0x7d, 0xce, 0x22, 0xaa, 0xb1,
	0x99, 0xed, 0xb4, 0xbc, 0xf6, 0xcc, 0x76, 0xda, 0x9e, 0x3d, 0xb3, 0x1d, 0xdb, 0xeb, 0xcc, 0x6c,
	0xa7, 0xeb, 0xf5, 0x46, 0x5f, 0x2c, 0xb8, 0x59, 0x7b, 0x7a, 0x87, 0x31, 0xae, 0xf4, 0xcc, 0x23,
	0xe8, 0x6a, 0x23, 0x52, 0xdb, 0x72, 0x27, 0x87, 0xe5, 0xd4, 0x17, 0x3c, 0x56, 0x28, 0x42, 0x4d,
	0x91, 0xb4, 0xec, 0x29, 0x7c, 0x2a, 0x9e, 0xe0, 0x42, 0xb0, 0x34, 0x42, 0xbf, 0xbd, 0xe3, 0x93,
	0x16, 0x75, 0xda, 0x57, 0x9b, 0xcf, 0x4a, 0x8e, 0x11, 0xd2, 0xf1, 0xba, 0xa5, 0x9c, 0x6f, 0x2d,
	0x18, 0x68, 0x25, 0x7a, 0x01, 0xc5, 0x4f, 0x6b, 0x94, 0x8a, 0x8c, 0xe0, 0x60, 0x2b, 0x0c, 0x93,
	0xf4, 0x56, 0x8d, 0x4c, 0xa1, 0xab, 0xc3, 0x91, 0x7e, 0x4b, 0xc7, 0xf0, 0x28, 0x6c, 0x1c, 0x6f,
	0xb8, 0x33, 0xb3, 0x59, 0x29, 0x89, 0xc1, 0x4b, 0x80, 0xba, 0xba, 0xcf, 0xf1, 0x06, 0xe0, 0x5c,
	0xa2, 0xe0, 0x1f, 0x38, 0x0a, 0xbf, 0xa5, 0xe1, 0xea, 0x3f, 0x58, 0x83, 0x43, 0x51, 0xe6, 0x59,
	0x2a, 0x91, 0x9c, 0x42, 0x4f, 0x98, 0xb5, 0x65, 0x9a, 0xf7, 0xfe, 0x2e, 0x8e, 0x6e, 0xda, 0xc9,
	0xf1, 0x6f, 0xae, 0xee, 0x6c, 0x11, 0xeb, 0x83, 0xdb, 0x78, 0x18, 0xfd, 0x6c, 0xc1, 0xed, 0x57,
	0x5c, 0xaa, 0x1a, 0x92, 0xff, 0x92, 0xe2, 0x33, 0xe8, 0xcb, 0xcd, 0x1d, 0xd0, 0x96, 0xdc, 0xc9,
	0xf0, 0x0f, 0x2b, 0xab, 0xbb, 0x42, 0x6b, 0x0a, 0x79, 0x0c, 0x90, 0xb3, 0x88, 0xa7, 0x66, 0x83,
	0xb9, 0x08, 0x83, 0x72, 0xc0, 0xbc, 0x02, 0x68, 0xa3, 0x29, 0xf8, 0x6a, 0x35, 0x92, 0xaa, 0xfd,
	0x5a, 0x7b, 0xf9, 0x25, 0x4f, 0xeb, 0x68, 0x8d, 0xdc, 0x07, 0x5b, 0x8c, 0xab, 0xa3, 0xa8, 0xf3,
	0x3d, 0xbd, 0x42, 0xaf, 0xbf, 0xa3, 0x37, 0xa4, 0x28, 0xd7, 0xb1, 0x6a, 0xca, 0x9e, 0x7c, 0xb7,
	0x60, 0xd0, 0x0c, 0x43, 0x5c, 0xf2, 0x15, 0x92, 0x39, 0x74, 0xcc, 0xe3, 0x70, 0xcd, 0x09, 0x07,
	0x0f, 0xaf, 0xb9, 0x9e, 0x55, 0x22, 0x0b, 0x80, 0xc2, 0x84, 0xd1, 0x4f, 0xf6, 0x71, 0x17, 0x1c,
	0xed, 0xd1, 0x54, 0x2d, 0x38, 0x7b, 0x02, 0x77, 0xa3, 0x38, 0x5b, 0xb2, 0xb8, 0x64, 0xb1, 0x9c,
	0x87, 0x91, 0xc8, 0x57, 0x86, 0x7e, 0xf6, 0x7f, 0xcd, 0x9d, 0xe6, 0x7c, 0xfe, 0xdf, 0xfb, 0x8e,
	0x6e, 0x5b, 0x76, 0xf5, 0x9b, 0x78, 0xf2, 0x2b, 0x00, 0x00, 0xff, 0xff, 0x80, 0xdd, 0x55, 0x66,
	0x59, 0x05, 0x00, 0x00,
}
