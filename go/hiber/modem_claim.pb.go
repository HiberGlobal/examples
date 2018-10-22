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

type ModemClaim_Status int32

const (
	ModemClaim_OPEN     ModemClaim_Status = 0
	ModemClaim_ACCEPTED ModemClaim_Status = 1
	ModemClaim_REJECTED ModemClaim_Status = 2
)

var ModemClaim_Status_name = map[int32]string{
	0: "OPEN",
	1: "ACCEPTED",
	2: "REJECTED",
}
var ModemClaim_Status_value = map[string]int32{
	"OPEN":     0,
	"ACCEPTED": 1,
	"REJECTED": 2,
}

func (x ModemClaim_Status) String() string {
	return proto.EnumName(ModemClaim_Status_name, int32(x))
}
func (ModemClaim_Status) EnumDescriptor() ([]byte, []int) { return fileDescriptor5, []int{0, 0} }

type ModemClaim_RejectReason int32

const (
	ModemClaim_NOT_SET             ModemClaim_RejectReason = 0
	ModemClaim_UNKNOWN_RECIPIENT   ModemClaim_RejectReason = 1
	ModemClaim_INVALID_CLAIM       ModemClaim_RejectReason = 2
	ModemClaim_TRANSFERRED_INSTEAD ModemClaim_RejectReason = 3
	ModemClaim_OTHER               ModemClaim_RejectReason = 4
)

var ModemClaim_RejectReason_name = map[int32]string{
	0: "NOT_SET",
	1: "UNKNOWN_RECIPIENT",
	2: "INVALID_CLAIM",
	3: "TRANSFERRED_INSTEAD",
	4: "OTHER",
}
var ModemClaim_RejectReason_value = map[string]int32{
	"NOT_SET":             0,
	"UNKNOWN_RECIPIENT":   1,
	"INVALID_CLAIM":       2,
	"TRANSFERRED_INSTEAD": 3,
	"OTHER":               4,
}

func (x ModemClaim_RejectReason) String() string {
	return proto.EnumName(ModemClaim_RejectReason_name, int32(x))
}
func (ModemClaim_RejectReason) EnumDescriptor() ([]byte, []int) { return fileDescriptor5, []int{0, 1} }

type ModemClaim struct {
	ModemNumber          string                  `protobuf:"bytes,1,opt,name=modem_number,json=modemNumber" json:"modem_number,omitempty"`
	Status               ModemClaim_Status       `protobuf:"varint,2,opt,name=status,enum=hiber.modem.ModemClaim_Status" json:"status,omitempty"`
	RejectReason         ModemClaim_RejectReason `protobuf:"varint,3,opt,name=reject_reason,json=rejectReason,enum=hiber.modem.ModemClaim_RejectReason" json:"reject_reason,omitempty"`
	RejectComment        string                  `protobuf:"bytes,4,opt,name=reject_comment,json=rejectComment" json:"reject_comment,omitempty"`
	CreatedAt            *Timestamp              `protobuf:"bytes,5,opt,name=created_at,json=createdAt" json:"created_at,omitempty"`
	ClosedAt             *Timestamp              `protobuf:"bytes,6,opt,name=closed_at,json=closedAt" json:"closed_at,omitempty"`
	ClaimingOrganization string                  `protobuf:"bytes,7,opt,name=claiming_organization,json=claimingOrganization" json:"claiming_organization,omitempty"`
	// Only available for the owner of the modem
	Tags []*Tag `protobuf:"bytes,8,rep,name=tags" json:"tags,omitempty"`
}

func (m *ModemClaim) Reset()                    { *m = ModemClaim{} }
func (m *ModemClaim) String() string            { return proto.CompactTextString(m) }
func (*ModemClaim) ProtoMessage()               {}
func (*ModemClaim) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{0} }

func (m *ModemClaim) GetModemNumber() string {
	if m != nil {
		return m.ModemNumber
	}
	return ""
}

func (m *ModemClaim) GetStatus() ModemClaim_Status {
	if m != nil {
		return m.Status
	}
	return ModemClaim_OPEN
}

func (m *ModemClaim) GetRejectReason() ModemClaim_RejectReason {
	if m != nil {
		return m.RejectReason
	}
	return ModemClaim_NOT_SET
}

func (m *ModemClaim) GetRejectComment() string {
	if m != nil {
		return m.RejectComment
	}
	return ""
}

func (m *ModemClaim) GetCreatedAt() *Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *ModemClaim) GetClosedAt() *Timestamp {
	if m != nil {
		return m.ClosedAt
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
	Modems           *Filter_Modems      `protobuf:"bytes,1,opt,name=modems" json:"modems,omitempty"`
	Statuses         []ModemClaim_Status `protobuf:"varint,2,rep,packed,name=statuses,enum=hiber.modem.ModemClaim_Status" json:"statuses,omitempty"`
	CreatedTimeRange *TimeRange          `protobuf:"bytes,3,opt,name=created_time_range,json=createdTimeRange" json:"created_time_range,omitempty"`
	ClosedTimeRange  *TimeRange          `protobuf:"bytes,4,opt,name=closed_time_range,json=closedTimeRange" json:"closed_time_range,omitempty"`
	OwnedOnly        bool                `protobuf:"varint,5,opt,name=owned_only,json=ownedOnly" json:"owned_only,omitempty"`
	ClaimedOnly      bool                `protobuf:"varint,6,opt,name=claimed_only,json=claimedOnly" json:"claimed_only,omitempty"`
}

func (m *ModemClaimSelection) Reset()                    { *m = ModemClaimSelection{} }
func (m *ModemClaimSelection) String() string            { return proto.CompactTextString(m) }
func (*ModemClaimSelection) ProtoMessage()               {}
func (*ModemClaimSelection) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{1} }

func (m *ModemClaimSelection) GetModems() *Filter_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *ModemClaimSelection) GetStatuses() []ModemClaim_Status {
	if m != nil {
		return m.Statuses
	}
	return nil
}

func (m *ModemClaimSelection) GetCreatedTimeRange() *TimeRange {
	if m != nil {
		return m.CreatedTimeRange
	}
	return nil
}

func (m *ModemClaimSelection) GetClosedTimeRange() *TimeRange {
	if m != nil {
		return m.ClosedTimeRange
	}
	return nil
}

func (m *ModemClaimSelection) GetOwnedOnly() bool {
	if m != nil {
		return m.OwnedOnly
	}
	return false
}

func (m *ModemClaimSelection) GetClaimedOnly() bool {
	if m != nil {
		return m.ClaimedOnly
	}
	return false
}

type ClaimModemRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                          `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Claims       []*ClaimModemRequest_ClaimModem `protobuf:"bytes,2,rep,name=claims" json:"claims,omitempty"`
}

func (m *ClaimModemRequest) Reset()                    { *m = ClaimModemRequest{} }
func (m *ClaimModemRequest) String() string            { return proto.CompactTextString(m) }
func (*ClaimModemRequest) ProtoMessage()               {}
func (*ClaimModemRequest) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{2} }

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
func (*ClaimModemRequest_ClaimModem) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{2, 0} }

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
func (*ClaimModemRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{2, 1} }

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
func (*ListModemClaimsRequest) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{3} }

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
	return fileDescriptor5, []int{3, 0}
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

type AcceptModemClaimsRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string               `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *ModemClaimSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
}

func (m *AcceptModemClaimsRequest) Reset()                    { *m = AcceptModemClaimsRequest{} }
func (m *AcceptModemClaimsRequest) String() string            { return proto.CompactTextString(m) }
func (*AcceptModemClaimsRequest) ProtoMessage()               {}
func (*AcceptModemClaimsRequest) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{4} }

func (m *AcceptModemClaimsRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *AcceptModemClaimsRequest) GetSelection() *ModemClaimSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

type AcceptModemClaimsRequest_Response struct {
	Claims  []*ModemClaim             `protobuf:"bytes,1,rep,name=claims" json:"claims,omitempty"`
	Request *AcceptModemClaimsRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *AcceptModemClaimsRequest_Response) Reset()         { *m = AcceptModemClaimsRequest_Response{} }
func (m *AcceptModemClaimsRequest_Response) String() string { return proto.CompactTextString(m) }
func (*AcceptModemClaimsRequest_Response) ProtoMessage()    {}
func (*AcceptModemClaimsRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor5, []int{4, 0}
}

func (m *AcceptModemClaimsRequest_Response) GetClaims() []*ModemClaim {
	if m != nil {
		return m.Claims
	}
	return nil
}

func (m *AcceptModemClaimsRequest_Response) GetRequest() *AcceptModemClaimsRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

type RejectModemClaimsRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization  string                  `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection     *ModemClaimSelection    `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	Reason        ModemClaim_RejectReason `protobuf:"varint,3,opt,name=reason,enum=hiber.modem.ModemClaim_RejectReason" json:"reason,omitempty"`
	ReasonComment string                  `protobuf:"bytes,4,opt,name=reason_comment,json=reasonComment" json:"reason_comment,omitempty"`
}

func (m *RejectModemClaimsRequest) Reset()                    { *m = RejectModemClaimsRequest{} }
func (m *RejectModemClaimsRequest) String() string            { return proto.CompactTextString(m) }
func (*RejectModemClaimsRequest) ProtoMessage()               {}
func (*RejectModemClaimsRequest) Descriptor() ([]byte, []int) { return fileDescriptor5, []int{5} }

func (m *RejectModemClaimsRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *RejectModemClaimsRequest) GetSelection() *ModemClaimSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *RejectModemClaimsRequest) GetReason() ModemClaim_RejectReason {
	if m != nil {
		return m.Reason
	}
	return ModemClaim_NOT_SET
}

func (m *RejectModemClaimsRequest) GetReasonComment() string {
	if m != nil {
		return m.ReasonComment
	}
	return ""
}

type RejectModemClaimsRequest_Response struct {
	Claims  []*ModemClaim             `protobuf:"bytes,1,rep,name=claims" json:"claims,omitempty"`
	Request *RejectModemClaimsRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *RejectModemClaimsRequest_Response) Reset()         { *m = RejectModemClaimsRequest_Response{} }
func (m *RejectModemClaimsRequest_Response) String() string { return proto.CompactTextString(m) }
func (*RejectModemClaimsRequest_Response) ProtoMessage()    {}
func (*RejectModemClaimsRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor5, []int{5, 0}
}

func (m *RejectModemClaimsRequest_Response) GetClaims() []*ModemClaim {
	if m != nil {
		return m.Claims
	}
	return nil
}

func (m *RejectModemClaimsRequest_Response) GetRequest() *RejectModemClaimsRequest {
	if m != nil {
		return m.Request
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
	proto.RegisterType((*AcceptModemClaimsRequest)(nil), "hiber.modem.AcceptModemClaimsRequest")
	proto.RegisterType((*AcceptModemClaimsRequest_Response)(nil), "hiber.modem.AcceptModemClaimsRequest.Response")
	proto.RegisterType((*RejectModemClaimsRequest)(nil), "hiber.modem.RejectModemClaimsRequest")
	proto.RegisterType((*RejectModemClaimsRequest_Response)(nil), "hiber.modem.RejectModemClaimsRequest.Response")
	proto.RegisterEnum("hiber.modem.ModemClaim_Status", ModemClaim_Status_name, ModemClaim_Status_value)
	proto.RegisterEnum("hiber.modem.ModemClaim_RejectReason", ModemClaim_RejectReason_name, ModemClaim_RejectReason_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for ModemClaimService service

type ModemClaimServiceClient interface {
	// Add a claim for a number of modems
	Claim(ctx context.Context, in *ClaimModemRequest, opts ...grpc.CallOption) (*ClaimModemRequest_Response, error)
	// List your modems that have been claimed by another organization
	ListClaims(ctx context.Context, in *ListModemClaimsRequest, opts ...grpc.CallOption) (*ListModemClaimsRequest_Response, error)
	// Accept a claim on a selection of your modems
	AcceptClaims(ctx context.Context, in *AcceptModemClaimsRequest, opts ...grpc.CallOption) (*AcceptModemClaimsRequest_Response, error)
	// Reject a claim on a selection of your modems
	RejectClaims(ctx context.Context, in *RejectModemClaimsRequest, opts ...grpc.CallOption) (*RejectModemClaimsRequest_Response, error)
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

func (c *modemClaimServiceClient) AcceptClaims(ctx context.Context, in *AcceptModemClaimsRequest, opts ...grpc.CallOption) (*AcceptModemClaimsRequest_Response, error) {
	out := new(AcceptModemClaimsRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.modem.ModemClaimService/AcceptClaims", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modemClaimServiceClient) RejectClaims(ctx context.Context, in *RejectModemClaimsRequest, opts ...grpc.CallOption) (*RejectModemClaimsRequest_Response, error) {
	out := new(RejectModemClaimsRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.modem.ModemClaimService/RejectClaims", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for ModemClaimService service

type ModemClaimServiceServer interface {
	// Add a claim for a number of modems
	Claim(context.Context, *ClaimModemRequest) (*ClaimModemRequest_Response, error)
	// List your modems that have been claimed by another organization
	ListClaims(context.Context, *ListModemClaimsRequest) (*ListModemClaimsRequest_Response, error)
	// Accept a claim on a selection of your modems
	AcceptClaims(context.Context, *AcceptModemClaimsRequest) (*AcceptModemClaimsRequest_Response, error)
	// Reject a claim on a selection of your modems
	RejectClaims(context.Context, *RejectModemClaimsRequest) (*RejectModemClaimsRequest_Response, error)
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

func _ModemClaimService_AcceptClaims_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AcceptModemClaimsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModemClaimServiceServer).AcceptClaims(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.modem.ModemClaimService/AcceptClaims",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModemClaimServiceServer).AcceptClaims(ctx, req.(*AcceptModemClaimsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModemClaimService_RejectClaims_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RejectModemClaimsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModemClaimServiceServer).RejectClaims(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.modem.ModemClaimService/RejectClaims",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModemClaimServiceServer).RejectClaims(ctx, req.(*RejectModemClaimsRequest))
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
		{
			MethodName: "AcceptClaims",
			Handler:    _ModemClaimService_AcceptClaims_Handler,
		},
		{
			MethodName: "RejectClaims",
			Handler:    _ModemClaimService_RejectClaims_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "modem_claim.proto",
}

func init() { proto.RegisterFile("modem_claim.proto", fileDescriptor5) }

var fileDescriptor5 = []byte{
	// 908 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xc4, 0x56, 0xdd, 0x8e, 0xdb, 0x44,
	0x14, 0x5e, 0x27, 0xd9, 0x6c, 0x72, 0x9c, 0x5d, 0x9c, 0x69, 0x4b, 0x2d, 0x23, 0xaa, 0x60, 0xa8,
	0x58, 0xa4, 0xe2, 0x8a, 0x54, 0xa0, 0x0a, 0x95, 0x22, 0x37, 0x71, 0x45, 0xe8, 0xd6, 0x89, 0x26,
	0x06, 0x24, 0x6e, 0x2c, 0xc7, 0x3b, 0x18, 0x23, 0xff, 0x04, 0x7b, 0x52, 0x54, 0xc4, 0x63, 0xf0,
	0x1a, 0xdc, 0x71, 0x0d, 0xcf, 0xc2, 0x0d, 0x4f, 0xc1, 0x05, 0xf2, 0xcc, 0xc4, 0x76, 0x76, 0xd7,
	0x34, 0x80, 0xaa, 0xde, 0x65, 0xce, 0xf9, 0xce, 0xdf, 0x77, 0xbe, 0xf1, 0x04, 0x86, 0x71, 0x7a,
	0x4e, 0x62, 0xd7, 0x8f, 0xbc, 0x30, 0x36, 0xd6, 0x59, 0x4a, 0x53, 0x24, 0x7f, 0x1b, 0xae, 0x48,
	0x66, 0x30, 0x87, 0x06, 0x2b, 0x2f, 0x27, 0xdc, 0xa1, 0xc9, 0xcc, 0x24, 0x0e, 0x7d, 0xea, 0x05,
	0xfc, 0xa7, 0xfe, 0x4b, 0x07, 0xe0, 0x69, 0xe1, 0x9a, 0x14, 0x59, 0xd0, 0x5b, 0x30, 0xe0, 0x49,
	0x93, 0x4d, 0xbc, 0x22, 0x99, 0x2a, 0x8d, 0xa4, 0xd3, 0x3e, 0xe6, 0xc1, 0x36, 0x33, 0xa1, 0x8f,
	0xa0, 0x9b, 0x53, 0x8f, 0x6e, 0x72, 0xb5, 0x35, 0x92, 0x4e, 0x4f, 0xc6, 0xb7, 0x8c, 0x5a, 0x4d,
	0xa3, 0xca, 0x65, 0x2c, 0x19, 0x0a, 0x0b, 0x34, 0x9a, 0xc1, 0x71, 0x46, 0xbe, 0x23, 0x3e, 0x75,
	0x33, 0xe2, 0xe5, 0x69, 0xa2, 0xb6, 0x59, 0xf8, 0x3b, 0x4d, 0xe1, 0x98, 0x81, 0x31, 0xc3, 0xe2,
	0x41, 0x56, 0x3b, 0xa1, 0xdb, 0x70, 0x22, 0x52, 0xf9, 0x69, 0x1c, 0x93, 0x84, 0xaa, 0x1d, 0xd6,
	0xa7, 0x28, 0x30, 0xe1, 0x46, 0x74, 0x17, 0xc0, 0xcf, 0x88, 0x47, 0xc9, 0xb9, 0xeb, 0x51, 0xf5,
	0x70, 0x24, 0x9d, 0xca, 0x63, 0x45, 0x94, 0x73, 0xc2, 0x98, 0xe4, 0xd4, 0x8b, 0xd7, 0xb8, 0x2f,
	0x30, 0x26, 0x45, 0xef, 0x43, 0xdf, 0x8f, 0xd2, 0x9c, 0xe3, 0xbb, 0x0d, 0xf8, 0x1e, 0x87, 0x98,
	0x14, 0xdd, 0x83, 0x1b, 0x8c, 0xfb, 0x30, 0x09, 0xdc, 0x34, 0x0b, 0xbc, 0x24, 0xfc, 0xd1, 0xa3,
	0x61, 0x9a, 0xa8, 0x47, 0xac, 0x9b, 0xeb, 0x5b, 0xe7, 0xbc, 0xe6, 0x43, 0x3a, 0x74, 0xa8, 0x17,
	0xe4, 0x6a, 0x6f, 0xd4, 0x3e, 0x95, 0xc7, 0x27, 0x22, 0x7d, 0xb1, 0x10, 0xc7, 0x0b, 0x30, 0xf3,
	0xe9, 0x06, 0x74, 0x39, 0x79, 0xa8, 0x07, 0x9d, 0xf9, 0xc2, 0xb2, 0x95, 0x03, 0x34, 0x80, 0x9e,
	0x39, 0x99, 0x58, 0x0b, 0xc7, 0x9a, 0x2a, 0x52, 0x71, 0xc2, 0xd6, 0xe7, 0xd6, 0xa4, 0x38, 0xb5,
	0xf4, 0x10, 0x06, 0x75, 0xb6, 0x90, 0x0c, 0x47, 0xf6, 0xdc, 0x71, 0x97, 0x96, 0xa3, 0x1c, 0xa0,
	0x1b, 0x30, 0xfc, 0xc2, 0x7e, 0x62, 0xcf, 0xbf, 0xb2, 0x5d, 0x6c, 0x4d, 0x66, 0x8b, 0x99, 0x65,
	0x3b, 0x8a, 0x84, 0x86, 0x70, 0x3c, 0xb3, 0xbf, 0x34, 0xcf, 0x66, 0x53, 0x77, 0x72, 0x66, 0xce,
	0x9e, 0x2a, 0x2d, 0x74, 0x13, 0xae, 0x39, 0xd8, 0xb4, 0x97, 0x8f, 0x2d, 0x8c, 0xad, 0xa9, 0x3b,
	0xb3, 0x97, 0x8e, 0x65, 0x4e, 0x95, 0x36, 0xea, 0xc3, 0xe1, 0xdc, 0xf9, 0xcc, 0xc2, 0x4a, 0x47,
	0xff, 0xbd, 0x05, 0xd7, 0xaa, 0x25, 0x2d, 0x49, 0x44, 0x7c, 0x36, 0xd6, 0x1d, 0xe8, 0xb2, 0x0d,
	0xe6, 0x4c, 0x32, 0xf2, 0xf8, 0xba, 0x18, 0xec, 0x71, 0x18, 0x51, 0x92, 0xf1, 0xbd, 0xe6, 0x58,
	0x60, 0xd0, 0xc7, 0xd0, 0xe3, 0xaa, 0x20, 0x85, 0x8a, 0xda, 0x7b, 0xa8, 0xa8, 0xc4, 0xa3, 0x87,
	0x80, 0xb6, 0x5b, 0xa5, 0x61, 0x4c, 0xdc, 0xcc, 0x4b, 0x02, 0xc2, 0xc4, 0xb4, 0xbb, 0x2d, 0x5c,
	0xd8, 0xb1, 0x22, 0xb0, 0xa5, 0x05, 0x3d, 0x80, 0xa1, 0x58, 0x72, 0x2d, 0xbc, 0xd3, 0x10, 0xfe,
	0x1a, 0x87, 0x56, 0xd1, 0x6f, 0x02, 0xa4, 0x3f, 0x24, 0xe4, 0xdc, 0x4d, 0x93, 0xe8, 0x39, 0xd3,
	0x54, 0x0f, 0xf7, 0x99, 0x65, 0x9e, 0x44, 0xcf, 0x8b, 0xfb, 0xc3, 0xb6, 0xbe, 0x05, 0x74, 0x19,
	0x40, 0x16, 0xb6, 0x02, 0xa2, 0xff, 0xd6, 0x82, 0x21, 0x1b, 0x8d, 0x0d, 0x89, 0xc9, 0xf7, 0x1b,
	0x92, 0x53, 0xa4, 0xc3, 0x60, 0x47, 0x42, 0xfc, 0xe2, 0xed, 0xd8, 0x90, 0x09, 0x5d, 0x96, 0x88,
	0x73, 0x26, 0x8f, 0xdf, 0xdb, 0xe1, 0xec, 0x52, 0xce, 0xba, 0x45, 0x04, 0x6a, 0x4f, 0x00, 0x2a,
	0xeb, 0x3e, 0xb7, 0x5d, 0x83, 0xde, 0x33, 0x92, 0x85, 0xdf, 0x84, 0x24, 0x63, 0xf7, 0xbd, 0x8f,
	0xcb, 0xb3, 0xb6, 0x81, 0x1e, 0x26, 0xf9, 0x3a, 0x4d, 0x72, 0x82, 0xee, 0xc3, 0x51, 0xc6, 0xcb,
	0x0a, 0x01, 0xdc, 0xfa, 0xe7, 0xe6, 0xf0, 0x16, 0x8e, 0xee, 0x5e, 0x98, 0xea, 0x66, 0x83, 0x12,
	0xb6, 0x33, 0xe8, 0x7f, 0xb6, 0xe0, 0xf5, 0xb3, 0x30, 0xa7, 0x95, 0x2b, 0xff, 0x37, 0x2c, 0x3e,
	0x84, 0x7e, 0xbe, 0x95, 0x2d, 0x1b, 0x49, 0x1e, 0x8f, 0x1a, 0x4a, 0x96, 0xf2, 0xc6, 0x55, 0x08,
	0xfa, 0x00, 0x60, 0xed, 0x05, 0x61, 0xc2, 0x2b, 0x70, 0xdd, 0x0d, 0x45, 0x82, 0x45, 0xe9, 0xc0,
	0x35, 0x90, 0xf6, 0xab, 0x54, 0x63, 0xaa, 0x9a, 0x57, 0xda, 0x6b, 0x5e, 0xf4, 0x49, 0x45, 0x2d,
	0x6f, 0xf7, 0xed, 0x9d, 0x88, 0xab, 0xa9, 0xa8, 0xf8, 0xbd, 0x7f, 0x45, 0xbf, 0xea, 0xa5, 0x7e,
	0x0d, 0x4c, 0xf2, 0x4d, 0x44, 0xeb, 0x6d, 0xeb, 0x7f, 0x49, 0xa0, 0x9a, 0xbe, 0x4f, 0xd6, 0xaf,
	0x88, 0x6a, 0xed, 0xa7, 0xff, 0x43, 0xdb, 0xa7, 0x17, 0x69, 0xbb, 0xbd, 0x13, 0xd1, 0x34, 0x58,
	0x49, 0x9c, 0xfe, 0x47, 0x0b, 0x54, 0xfe, 0x59, 0x7d, 0x45, 0x4a, 0x7b, 0x00, 0xdd, 0xff, 0xf0,
	0x54, 0x8a, 0x18, 0xfe, 0x48, 0x16, 0xbf, 0x2e, 0x3f, 0x92, 0x85, 0x55, 0x3c, 0x92, 0x2f, 0x95,
	0xe3, 0x26, 0xf6, 0x4a, 0x8e, 0xc7, 0x3f, 0xb7, 0x61, 0x58, 0x67, 0x21, 0x7b, 0x16, 0xfa, 0x04,
	0x2d, 0xe0, 0x90, 0xff, 0x1d, 0x79, 0xc1, 0x47, 0x44, 0x7b, 0xf7, 0x05, 0x5f, 0xc0, 0x72, 0x32,
	0x17, 0xa0, 0xb8, 0x27, 0xbc, 0x0b, 0xb4, 0xcf, 0x05, 0xd2, 0xee, 0xec, 0x01, 0xaa, 0x0a, 0x10,
	0x18, 0x70, 0x45, 0x89, 0x12, 0xfb, 0x89, 0x4d, 0x33, 0xf6, 0x82, 0xed, 0x94, 0xe1, 0xa4, 0x5e,
	0x59, 0xa6, 0x89, 0xef, 0x0b, 0x65, 0x9a, 0x60, 0x65, 0x99, 0x47, 0x1f, 0xc2, 0x1b, 0x41, 0x94,
	0xae, 0xbc, 0x48, 0xc4, 0x79, 0xeb, 0xd0, 0x08, 0xb2, 0xb5, 0xcf, 0x13, 0x3c, 0x3a, 0xae, 0x62,
	0xcd, 0x75, 0xb8, 0x38, 0xf8, 0xfa, 0x90, 0xc1, 0x56, 0x5d, 0xf6, 0x9f, 0xf2, 0xde, 0xdf, 0x01,
	0x00, 0x00, 0xff, 0xff, 0x8c, 0xc8, 0x2e, 0xaa, 0x99, 0x0a, 0x00, 0x00,
}
