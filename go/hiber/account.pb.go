// Code generated by protoc-gen-go.
// source: account.proto
// DO NOT EDIT!

/*
Package hiber is a generated protocol buffer package.

It is generated from these files:
	account.proto
	base.proto
	currentuser.proto
	dashboard.proto
	event.proto
	map.proto
	modem.proto
	subscription.proto
	tag.proto
	testing.proto
	token.proto
	user.proto
	webhook.proto

It has these top-level messages:
	Account
	GetAccountRequest
	AccountTreeRequest
	UpdateAccountRequest
	UpdateZeroableInt
	UpdateClearableString
	UpdateBoolean
	TimeRange
	Timestamp
	Location
	Area
	Pagination
	Filter
	CurrentUser
	CurrentUserRequest
	RequestAccessRequest
	DeleteCurrentUserRequest
	DashboardRequest
	Event
	EventSelection
	ListEventsRequest
	EventStreamRequest
	MapSelection
	GroundStation
	MapBlock
	MapRequest
	Modem
	ModemSelection
	ModemMessage
	ModemMessageSelection
	ListModemsRequest
	GetModemRequest
	ListModemMessagesRequest
	MessageCountRequest
	RenameModemRequest
	UpdateModemPayloadTemplateRequest
	UpdateModemTagsRequest
	Tag
	TagSelection
	UpdateTagsForItem
	ListTagsRequest
	CreateTagRequest
	UpdateTagRequest
	DeleteTagRequest
	PushModemMessagesRequest
	Token
	TokenSelection
	ListTokensRequest
	CreateTokenRequest
	DeleteTokenRequest
	User
	UserSelection
	ListUsersRequest
	ListAccessRequestsRequest
	ApproveUserRequest
	RemoveUserRequest
	CreateUserRequest
	Webhook
	WebhookSelection
	WebhookCall
	WebhookHistorySelection
	ListWebhooksRequest
	WebhookHistoryRequest
	CreateWebhookRequest
	GetWebhookRequest
	EnableWebhookRequest
	DisableWebhookRequest
	UpdateWebhookFilterRequest
	UpdateWebhookRequest
	UpdateWebhookTagsRequest
	DeleteWebhookRequest
*/
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

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Account data. An Account can have many linked users, but the account is the owner
// of any modems and related data.
type Account struct {
	Account               string           `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
	DisplayName           string           `protobuf:"bytes,2,opt,name=display_name,json=displayName" json:"display_name,omitempty"`
	VatNumber             string           `protobuf:"bytes,3,opt,name=vat_number,json=vatNumber" json:"vat_number,omitempty"`
	Address               *Account_Address `protobuf:"bytes,4,opt,name=address" json:"address,omitempty"`
	BillingName           string           `protobuf:"bytes,5,opt,name=billing_name,json=billingName" json:"billing_name,omitempty"`
	BillingAddress        *Account_Address `protobuf:"bytes,6,opt,name=billing_address,json=billingAddress" json:"billing_address,omitempty"`
	Contact               *Account_Contact `protobuf:"bytes,7,opt,name=contact" json:"contact,omitempty"`
	ContractSignatureDate *Timestamp       `protobuf:"bytes,8,opt,name=contract_signature_date,json=contractSignatureDate" json:"contract_signature_date,omitempty"`
	CreatedAt             *Timestamp       `protobuf:"bytes,9,opt,name=created_at,json=createdAt" json:"created_at,omitempty"`
	UpdatedAt             *Timestamp       `protobuf:"bytes,10,opt,name=updated_at,json=updatedAt" json:"updated_at,omitempty"`
}

func (m *Account) Reset()                    { *m = Account{} }
func (m *Account) String() string            { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()               {}
func (*Account) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Account) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *Account) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Account) GetVatNumber() string {
	if m != nil {
		return m.VatNumber
	}
	return ""
}

func (m *Account) GetAddress() *Account_Address {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *Account) GetBillingName() string {
	if m != nil {
		return m.BillingName
	}
	return ""
}

func (m *Account) GetBillingAddress() *Account_Address {
	if m != nil {
		return m.BillingAddress
	}
	return nil
}

func (m *Account) GetContact() *Account_Contact {
	if m != nil {
		return m.Contact
	}
	return nil
}

func (m *Account) GetContractSignatureDate() *Timestamp {
	if m != nil {
		return m.ContractSignatureDate
	}
	return nil
}

func (m *Account) GetCreatedAt() *Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *Account) GetUpdatedAt() *Timestamp {
	if m != nil {
		return m.UpdatedAt
	}
	return nil
}

type Account_Address struct {
	Lines   []string `protobuf:"bytes,1,rep,name=lines" json:"lines,omitempty"`
	Zipcode string   `protobuf:"bytes,2,opt,name=zipcode" json:"zipcode,omitempty"`
	City    string   `protobuf:"bytes,3,opt,name=city" json:"city,omitempty"`
	State   string   `protobuf:"bytes,4,opt,name=state" json:"state,omitempty"`
	Country string   `protobuf:"bytes,5,opt,name=country" json:"country,omitempty"`
}

func (m *Account_Address) Reset()                    { *m = Account_Address{} }
func (m *Account_Address) String() string            { return proto.CompactTextString(m) }
func (*Account_Address) ProtoMessage()               {}
func (*Account_Address) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0, 0} }

func (m *Account_Address) GetLines() []string {
	if m != nil {
		return m.Lines
	}
	return nil
}

func (m *Account_Address) GetZipcode() string {
	if m != nil {
		return m.Zipcode
	}
	return ""
}

func (m *Account_Address) GetCity() string {
	if m != nil {
		return m.City
	}
	return ""
}

func (m *Account_Address) GetState() string {
	if m != nil {
		return m.State
	}
	return ""
}

func (m *Account_Address) GetCountry() string {
	if m != nil {
		return m.Country
	}
	return ""
}

type Account_Contact struct {
	Name  string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Email string `protobuf:"bytes,2,opt,name=email" json:"email,omitempty"`
	Phone string `protobuf:"bytes,3,opt,name=phone" json:"phone,omitempty"`
}

func (m *Account_Contact) Reset()                    { *m = Account_Contact{} }
func (m *Account_Contact) String() string            { return proto.CompactTextString(m) }
func (*Account_Contact) ProtoMessage()               {}
func (*Account_Contact) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0, 1} }

func (m *Account_Contact) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Account_Contact) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Account_Contact) GetPhone() string {
	if m != nil {
		return m.Phone
	}
	return ""
}

// Get your current account's data
type GetAccountRequest struct {
	Account string `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
}

func (m *GetAccountRequest) Reset()                    { *m = GetAccountRequest{} }
func (m *GetAccountRequest) String() string            { return proto.CompactTextString(m) }
func (*GetAccountRequest) ProtoMessage()               {}
func (*GetAccountRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *GetAccountRequest) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

// Get your current account's account tree.
// The account tree contains your current account as the root of the tree, with all child accounts ordered below it.
type AccountTreeRequest struct {
	Account string `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
}

func (m *AccountTreeRequest) Reset()                    { *m = AccountTreeRequest{} }
func (m *AccountTreeRequest) String() string            { return proto.CompactTextString(m) }
func (*AccountTreeRequest) ProtoMessage()               {}
func (*AccountTreeRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *AccountTreeRequest) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

type AccountTreeRequest_AccountTree struct {
	Account     string                            `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
	CompanyName string                            `protobuf:"bytes,2,opt,name=company_name,json=companyName" json:"company_name,omitempty"`
	Children    []*AccountTreeRequest_AccountTree `protobuf:"bytes,3,rep,name=children" json:"children,omitempty"`
}

func (m *AccountTreeRequest_AccountTree) Reset()         { *m = AccountTreeRequest_AccountTree{} }
func (m *AccountTreeRequest_AccountTree) String() string { return proto.CompactTextString(m) }
func (*AccountTreeRequest_AccountTree) ProtoMessage()    {}
func (*AccountTreeRequest_AccountTree) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{2, 0}
}

func (m *AccountTreeRequest_AccountTree) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *AccountTreeRequest_AccountTree) GetCompanyName() string {
	if m != nil {
		return m.CompanyName
	}
	return ""
}

func (m *AccountTreeRequest_AccountTree) GetChildren() []*AccountTreeRequest_AccountTree {
	if m != nil {
		return m.Children
	}
	return nil
}

// Update account data.
// All fields are effectivly optional, though address, billing_address and contact are assumed to be complete objects,
// not partial updates
type UpdateAccountRequest struct {
	Account        string           `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
	DisplayName    string           `protobuf:"bytes,2,opt,name=display_name,json=displayName" json:"display_name,omitempty"`
	VatNumber      string           `protobuf:"bytes,3,opt,name=vat_number,json=vatNumber" json:"vat_number,omitempty"`
	Address        *Account_Address `protobuf:"bytes,4,opt,name=address" json:"address,omitempty"`
	BillingName    string           `protobuf:"bytes,5,opt,name=billing_name,json=billingName" json:"billing_name,omitempty"`
	BillingAddress *Account_Address `protobuf:"bytes,6,opt,name=billing_address,json=billingAddress" json:"billing_address,omitempty"`
	Contact        *Account_Contact `protobuf:"bytes,7,opt,name=contact" json:"contact,omitempty"`
}

func (m *UpdateAccountRequest) Reset()                    { *m = UpdateAccountRequest{} }
func (m *UpdateAccountRequest) String() string            { return proto.CompactTextString(m) }
func (*UpdateAccountRequest) ProtoMessage()               {}
func (*UpdateAccountRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *UpdateAccountRequest) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *UpdateAccountRequest) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *UpdateAccountRequest) GetVatNumber() string {
	if m != nil {
		return m.VatNumber
	}
	return ""
}

func (m *UpdateAccountRequest) GetAddress() *Account_Address {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *UpdateAccountRequest) GetBillingName() string {
	if m != nil {
		return m.BillingName
	}
	return ""
}

func (m *UpdateAccountRequest) GetBillingAddress() *Account_Address {
	if m != nil {
		return m.BillingAddress
	}
	return nil
}

func (m *UpdateAccountRequest) GetContact() *Account_Contact {
	if m != nil {
		return m.Contact
	}
	return nil
}

func init() {
	proto.RegisterType((*Account)(nil), "hiber.account.Account")
	proto.RegisterType((*Account_Address)(nil), "hiber.account.Account.Address")
	proto.RegisterType((*Account_Contact)(nil), "hiber.account.Account.Contact")
	proto.RegisterType((*GetAccountRequest)(nil), "hiber.account.GetAccountRequest")
	proto.RegisterType((*AccountTreeRequest)(nil), "hiber.account.AccountTreeRequest")
	proto.RegisterType((*AccountTreeRequest_AccountTree)(nil), "hiber.account.AccountTreeRequest.AccountTree")
	proto.RegisterType((*UpdateAccountRequest)(nil), "hiber.account.UpdateAccountRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for AccountService service

type AccountServiceClient interface {
	Tree(ctx context.Context, in *AccountTreeRequest, opts ...grpc.CallOption) (*AccountTreeRequest_AccountTree, error)
	Get(ctx context.Context, in *GetAccountRequest, opts ...grpc.CallOption) (*Account, error)
	Update(ctx context.Context, in *UpdateAccountRequest, opts ...grpc.CallOption) (*Account, error)
}

type accountServiceClient struct {
	cc *grpc.ClientConn
}

func NewAccountServiceClient(cc *grpc.ClientConn) AccountServiceClient {
	return &accountServiceClient{cc}
}

func (c *accountServiceClient) Tree(ctx context.Context, in *AccountTreeRequest, opts ...grpc.CallOption) (*AccountTreeRequest_AccountTree, error) {
	out := new(AccountTreeRequest_AccountTree)
	err := grpc.Invoke(ctx, "/hiber.account.AccountService/Tree", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) Get(ctx context.Context, in *GetAccountRequest, opts ...grpc.CallOption) (*Account, error) {
	out := new(Account)
	err := grpc.Invoke(ctx, "/hiber.account.AccountService/Get", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) Update(ctx context.Context, in *UpdateAccountRequest, opts ...grpc.CallOption) (*Account, error) {
	out := new(Account)
	err := grpc.Invoke(ctx, "/hiber.account.AccountService/Update", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for AccountService service

type AccountServiceServer interface {
	Tree(context.Context, *AccountTreeRequest) (*AccountTreeRequest_AccountTree, error)
	Get(context.Context, *GetAccountRequest) (*Account, error)
	Update(context.Context, *UpdateAccountRequest) (*Account, error)
}

func RegisterAccountServiceServer(s *grpc.Server, srv AccountServiceServer) {
	s.RegisterService(&_AccountService_serviceDesc, srv)
}

func _AccountService_Tree_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccountTreeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).Tree(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.account.AccountService/Tree",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).Tree(ctx, req.(*AccountTreeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.account.AccountService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).Get(ctx, req.(*GetAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.account.AccountService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).Update(ctx, req.(*UpdateAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AccountService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.account.AccountService",
	HandlerType: (*AccountServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Tree",
			Handler:    _AccountService_Tree_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _AccountService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _AccountService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "account.proto",
}

func init() { proto.RegisterFile("account.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 561 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xec, 0x55, 0xcb, 0x6e, 0x13, 0x31,
	0x14, 0x65, 0x9a, 0xc7, 0x34, 0x37, 0xb4, 0x80, 0x55, 0x60, 0x34, 0x52, 0x51, 0x1a, 0x36, 0xd9,
	0x34, 0x48, 0x81, 0x05, 0x3b, 0x94, 0x02, 0x0a, 0xdd, 0x54, 0x68, 0x5a, 0x24, 0xc4, 0x26, 0xf2,
	0x78, 0xae, 0x12, 0x4b, 0xf3, 0xc2, 0xe3, 0x89, 0x14, 0x24, 0x3e, 0x83, 0xaf, 0x61, 0xcf, 0x07,
	0xf0, 0x29, 0x7c, 0x01, 0xf2, 0x0b, 0x35, 0x25, 0x8f, 0xb2, 0x67, 0x15, 0xdf, 0xe3, 0x73, 0xce,
	0xb5, 0xe7, 0x5c, 0x2b, 0x70, 0x40, 0x19, 0x2b, 0xea, 0x5c, 0x0e, 0x4b, 0x51, 0xc8, 0x82, 0x1c,
	0xcc, 0x79, 0x8c, 0x62, 0x68, 0xc1, 0x10, 0x62, 0x5a, 0xa1, 0xd9, 0xea, 0x7f, 0x6f, 0x81, 0x3f,
	0x36, 0x38, 0x09, 0xc0, 0xb7, 0x94, 0xc0, 0xeb, 0x79, 0x83, 0x4e, 0xe4, 0x4a, 0x72, 0x02, 0x77,
	0x13, 0x5e, 0x95, 0x29, 0x5d, 0x4e, 0x73, 0x9a, 0x61, 0xb0, 0xa7, 0xb7, 0xbb, 0x16, 0xbb, 0xa0,
	0x19, 0x92, 0x63, 0x80, 0x05, 0x95, 0xd3, 0xbc, 0xce, 0x62, 0x14, 0x41, 0x43, 0x13, 0x3a, 0x0b,
	0x2a, 0x2f, 0x34, 0x40, 0x5e, 0x82, 0x4f, 0x93, 0x44, 0x60, 0x55, 0x05, 0xcd, 0x9e, 0x37, 0xe8,
	0x8e, 0x9e, 0x0c, 0x57, 0x0e, 0x35, 0x1c, 0xbb, 0x5f, 0xc3, 0x8a, 0x1c, 0x5d, 0xf5, 0x8e, 0x79,
	0x9a, 0xf2, 0x7c, 0x66, 0x7a, 0xb7, 0x4c, 0x6f, 0x8b, 0xe9, 0xde, 0x13, 0xb8, 0xe7, 0x28, 0xae,
	0x49, 0xfb, 0x56, 0x4d, 0x0e, 0xad, 0xcc, 0xd6, 0xea, 0x94, 0xac, 0xc8, 0x25, 0x65, 0x32, 0xf0,
	0xb7, 0x1a, 0xbc, 0x36, 0xac, 0xc8, 0xd1, 0xc9, 0x3b, 0x78, 0xac, 0x96, 0x82, 0x32, 0x39, 0xad,
	0xf8, 0x2c, 0xa7, 0xb2, 0x16, 0x38, 0x4d, 0xa8, 0xc4, 0x60, 0x5f, 0x3b, 0xdd, 0xb7, 0x4e, 0x57,
	0x3c, 0xc3, 0x4a, 0xd2, 0xac, 0x8c, 0x1e, 0x3a, 0xc1, 0xa5, 0xe3, 0xbf, 0xa1, 0x12, 0xc9, 0x33,
	0x00, 0x26, 0x90, 0x4a, 0x4c, 0xa6, 0x54, 0x06, 0x9d, 0x0d, 0xe2, 0x8e, 0xe5, 0x8c, 0xa5, 0x12,
	0xd4, 0x65, 0xe2, 0x04, 0xb0, 0x49, 0x60, 0x39, 0x63, 0x19, 0x7e, 0x05, 0xdf, 0x5d, 0xf8, 0x08,
	0x5a, 0x29, 0xcf, 0xb1, 0x0a, 0xbc, 0x5e, 0x63, 0xd0, 0x89, 0x4c, 0xa1, 0x06, 0xe1, 0x0b, 0x2f,
	0x59, 0x91, 0xb8, 0xa4, 0x5d, 0x49, 0x08, 0x34, 0x19, 0x97, 0x4b, 0x9b, 0xaf, 0x5e, 0x2b, 0x8f,
	0x4a, 0xaa, 0x8b, 0x36, 0x35, 0x68, 0x0a, 0xe5, 0xa1, 0x3f, 0x95, 0x58, 0xda, 0xc4, 0x5c, 0x19,
	0x9e, 0x83, 0x6f, 0x3f, 0x9f, 0xb2, 0xd3, 0x99, 0x9a, 0x71, 0xd3, 0x6b, 0x65, 0x87, 0x19, 0xe5,
	0xa9, 0x6d, 0x6d, 0x0a, 0x85, 0x96, 0xf3, 0x22, 0x47, 0xdb, 0xd9, 0x14, 0xfd, 0x53, 0x78, 0x30,
	0x41, 0x69, 0x43, 0x89, 0xf0, 0x73, 0x8d, 0xd5, 0x96, 0x31, 0xee, 0xff, 0xf0, 0x80, 0x58, 0xf2,
	0x95, 0x40, 0xdc, 0x29, 0x08, 0xbf, 0x79, 0xd0, 0xbd, 0x26, 0xd8, 0xfe, 0x42, 0x58, 0x91, 0x95,
	0x34, 0x5f, 0x7d, 0x21, 0x16, 0xd3, 0x53, 0x7a, 0x0e, 0xfb, 0x6c, 0xce, 0xd3, 0x44, 0x60, 0x1e,
	0x34, 0x7a, 0x8d, 0x41, 0x77, 0x74, 0xba, 0x7e, 0xba, 0xae, 0x9d, 0x6d, 0x05, 0xfa, 0x23, 0xef,
	0xff, 0xdc, 0x83, 0xa3, 0x0f, 0x3a, 0xcf, 0xdb, 0xde, 0xfd, 0xff, 0x13, 0xde, 0xf5, 0x84, 0x47,
	0xbf, 0x3c, 0x38, 0xb4, 0x9b, 0x97, 0x28, 0x16, 0x9c, 0x21, 0xf9, 0x08, 0x4d, 0x9d, 0xfb, 0xc9,
	0xce, 0xa0, 0xc2, 0x7f, 0xcb, 0x92, 0xbc, 0x82, 0xc6, 0x04, 0x25, 0xe9, 0xdd, 0x50, 0xfd, 0x35,
	0xcd, 0xe1, 0xa3, 0xf5, 0xbe, 0xe4, 0x2d, 0xb4, 0xcd, 0x04, 0x90, 0xa7, 0x37, 0x18, 0xeb, 0x06,
	0x63, 0x93, 0xcd, 0xd9, 0x0b, 0x38, 0x9e, 0xa5, 0x45, 0x4c, 0x53, 0xb7, 0x5f, 0xf2, 0xe1, 0x4c,
	0x94, 0xcc, 0x11, 0xcf, 0xc0, 0x32, 0xc7, 0x25, 0x7f, 0x7f, 0xe7, 0x53, 0x4b, 0xb3, 0xe2, 0xb6,
	0xfe, 0xf3, 0x78, 0xfe, 0x3b, 0x00, 0x00, 0xff, 0xff, 0x29, 0xdf, 0xc0, 0xb0, 0x68, 0x06, 0x00,
	0x00,
}