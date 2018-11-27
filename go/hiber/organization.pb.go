// Code generated by protoc-gen-go.
// source: organization.proto
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

// Organization data. An Organization can have many linked users, but the organization is the owner
// of any modems and related data.
type Organization struct {
	Organization          string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	DisplayName           string                `protobuf:"bytes,2,opt,name=display_name,json=displayName" json:"display_name,omitempty"`
	VatNumber             string                `protobuf:"bytes,3,opt,name=vat_number,json=vatNumber" json:"vat_number,omitempty"`
	Address               *Organization_Address `protobuf:"bytes,4,opt,name=address" json:"address,omitempty"`
	BillingName           string                `protobuf:"bytes,5,opt,name=billing_name,json=billingName" json:"billing_name,omitempty"`
	BillingAddress        *Organization_Address `protobuf:"bytes,6,opt,name=billing_address,json=billingAddress" json:"billing_address,omitempty"`
	Contact               *Organization_Contact `protobuf:"bytes,7,opt,name=contact" json:"contact,omitempty"`
	ContractSignatureDate *Timestamp            `protobuf:"bytes,8,opt,name=contract_signature_date,json=contractSignatureDate" json:"contract_signature_date,omitempty"`
	CreatedAt             *Timestamp            `protobuf:"bytes,9,opt,name=created_at,json=createdAt" json:"created_at,omitempty"`
	UpdatedAt             *Timestamp            `protobuf:"bytes,10,opt,name=updated_at,json=updatedAt" json:"updated_at,omitempty"`
}

func (m *Organization) Reset()                    { *m = Organization{} }
func (m *Organization) String() string            { return proto.CompactTextString(m) }
func (*Organization) ProtoMessage()               {}
func (*Organization) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{0} }

func (m *Organization) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *Organization) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Organization) GetVatNumber() string {
	if m != nil {
		return m.VatNumber
	}
	return ""
}

func (m *Organization) GetAddress() *Organization_Address {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *Organization) GetBillingName() string {
	if m != nil {
		return m.BillingName
	}
	return ""
}

func (m *Organization) GetBillingAddress() *Organization_Address {
	if m != nil {
		return m.BillingAddress
	}
	return nil
}

func (m *Organization) GetContact() *Organization_Contact {
	if m != nil {
		return m.Contact
	}
	return nil
}

func (m *Organization) GetContractSignatureDate() *Timestamp {
	if m != nil {
		return m.ContractSignatureDate
	}
	return nil
}

func (m *Organization) GetCreatedAt() *Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *Organization) GetUpdatedAt() *Timestamp {
	if m != nil {
		return m.UpdatedAt
	}
	return nil
}

type Organization_Address struct {
	Lines   []string `protobuf:"bytes,1,rep,name=lines" json:"lines,omitempty"`
	ZipCode string   `protobuf:"bytes,2,opt,name=zip_code,json=zipCode" json:"zip_code,omitempty"`
	City    string   `protobuf:"bytes,3,opt,name=city" json:"city,omitempty"`
	State   string   `protobuf:"bytes,4,opt,name=state" json:"state,omitempty"`
	Country string   `protobuf:"bytes,5,opt,name=country" json:"country,omitempty"`
}

func (m *Organization_Address) Reset()                    { *m = Organization_Address{} }
func (m *Organization_Address) String() string            { return proto.CompactTextString(m) }
func (*Organization_Address) ProtoMessage()               {}
func (*Organization_Address) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{0, 0} }

func (m *Organization_Address) GetLines() []string {
	if m != nil {
		return m.Lines
	}
	return nil
}

func (m *Organization_Address) GetZipCode() string {
	if m != nil {
		return m.ZipCode
	}
	return ""
}

func (m *Organization_Address) GetCity() string {
	if m != nil {
		return m.City
	}
	return ""
}

func (m *Organization_Address) GetState() string {
	if m != nil {
		return m.State
	}
	return ""
}

func (m *Organization_Address) GetCountry() string {
	if m != nil {
		return m.Country
	}
	return ""
}

type Organization_Contact struct {
	Name  string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Email string `protobuf:"bytes,2,opt,name=email" json:"email,omitempty"`
	Phone string `protobuf:"bytes,3,opt,name=phone" json:"phone,omitempty"`
}

func (m *Organization_Contact) Reset()                    { *m = Organization_Contact{} }
func (m *Organization_Contact) String() string            { return proto.CompactTextString(m) }
func (*Organization_Contact) ProtoMessage()               {}
func (*Organization_Contact) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{0, 1} }

func (m *Organization_Contact) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Organization_Contact) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Organization_Contact) GetPhone() string {
	if m != nil {
		return m.Phone
	}
	return ""
}

// Selection object for child organizations.
// User for child organization list and tree.
type OrganizationSelection struct {
	Organizations *Filter_Organizations `protobuf:"bytes,1,opt,name=organizations" json:"organizations,omitempty"`
}

func (m *OrganizationSelection) Reset()                    { *m = OrganizationSelection{} }
func (m *OrganizationSelection) String() string            { return proto.CompactTextString(m) }
func (*OrganizationSelection) ProtoMessage()               {}
func (*OrganizationSelection) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{1} }

func (m *OrganizationSelection) GetOrganizations() *Filter_Organizations {
	if m != nil {
		return m.Organizations
	}
	return nil
}

// Get your current organization's data
type GetOrganizationRequest struct {
	// Pick the organization to get the details for. If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *GetOrganizationRequest) Reset()                    { *m = GetOrganizationRequest{} }
func (m *GetOrganizationRequest) String() string            { return proto.CompactTextString(m) }
func (*GetOrganizationRequest) ProtoMessage()               {}
func (*GetOrganizationRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{2} }

func (m *GetOrganizationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

// Update organization data.
// All fields are effectively optional, though address, billing_address and contact are assumed to be complete objects,
// not partial updates.
// Note that the organization field specifies the organization, it is not used to update the current organization identifier.
type UpdateOrganizationRequest struct {
	Organization   string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	DisplayName    string                `protobuf:"bytes,2,opt,name=display_name,json=displayName" json:"display_name,omitempty"`
	VatNumber      string                `protobuf:"bytes,3,opt,name=vat_number,json=vatNumber" json:"vat_number,omitempty"`
	Address        *Organization_Address `protobuf:"bytes,4,opt,name=address" json:"address,omitempty"`
	BillingName    string                `protobuf:"bytes,5,opt,name=billing_name,json=billingName" json:"billing_name,omitempty"`
	BillingAddress *Organization_Address `protobuf:"bytes,6,opt,name=billing_address,json=billingAddress" json:"billing_address,omitempty"`
	Contact        *Organization_Contact `protobuf:"bytes,7,opt,name=contact" json:"contact,omitempty"`
}

func (m *UpdateOrganizationRequest) Reset()                    { *m = UpdateOrganizationRequest{} }
func (m *UpdateOrganizationRequest) String() string            { return proto.CompactTextString(m) }
func (*UpdateOrganizationRequest) ProtoMessage()               {}
func (*UpdateOrganizationRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{3} }

func (m *UpdateOrganizationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *UpdateOrganizationRequest) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *UpdateOrganizationRequest) GetVatNumber() string {
	if m != nil {
		return m.VatNumber
	}
	return ""
}

func (m *UpdateOrganizationRequest) GetAddress() *Organization_Address {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *UpdateOrganizationRequest) GetBillingName() string {
	if m != nil {
		return m.BillingName
	}
	return ""
}

func (m *UpdateOrganizationRequest) GetBillingAddress() *Organization_Address {
	if m != nil {
		return m.BillingAddress
	}
	return nil
}

func (m *UpdateOrganizationRequest) GetContact() *Organization_Contact {
	if m != nil {
		return m.Contact
	}
	return nil
}

// Get your current organization's organization tree.
// The organization tree contains your current organization as the root of the tree, with all child organizations ordered below it.
type OrganizationTreeRequest struct {
	// Pick the organization to use (/impersonate) for this call, overriding your default organization
	Organization string                 `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *OrganizationSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
}

func (m *OrganizationTreeRequest) Reset()                    { *m = OrganizationTreeRequest{} }
func (m *OrganizationTreeRequest) String() string            { return proto.CompactTextString(m) }
func (*OrganizationTreeRequest) ProtoMessage()               {}
func (*OrganizationTreeRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{4} }

func (m *OrganizationTreeRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *OrganizationTreeRequest) GetSelection() *OrganizationSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

type OrganizationTreeRequest_Response struct {
	Request *OrganizationTreeRequest `protobuf:"bytes,1,opt,name=request" json:"request,omitempty"`
	Tree    *OrganizationTree        `protobuf:"bytes,2,opt,name=tree" json:"tree,omitempty"`
}

func (m *OrganizationTreeRequest_Response) Reset()         { *m = OrganizationTreeRequest_Response{} }
func (m *OrganizationTreeRequest_Response) String() string { return proto.CompactTextString(m) }
func (*OrganizationTreeRequest_Response) ProtoMessage()    {}
func (*OrganizationTreeRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor10, []int{4, 0}
}

func (m *OrganizationTreeRequest_Response) GetRequest() *OrganizationTreeRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *OrganizationTreeRequest_Response) GetTree() *OrganizationTree {
	if m != nil {
		return m.Tree
	}
	return nil
}

type OrganizationTree struct {
	Organization *Organization       `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Children     []*OrganizationTree `protobuf:"bytes,3,rep,name=children" json:"children,omitempty"`
}

func (m *OrganizationTree) Reset()                    { *m = OrganizationTree{} }
func (m *OrganizationTree) String() string            { return proto.CompactTextString(m) }
func (*OrganizationTree) ProtoMessage()               {}
func (*OrganizationTree) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{5} }

func (m *OrganizationTree) GetOrganization() *Organization {
	if m != nil {
		return m.Organization
	}
	return nil
}

func (m *OrganizationTree) GetChildren() []*OrganizationTree {
	if m != nil {
		return m.Children
	}
	return nil
}

// List the child organizations for the given organization
type ListChildOrganizationsRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                 `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *OrganizationSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	Pagination   *Pagination            `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListChildOrganizationsRequest) Reset()                    { *m = ListChildOrganizationsRequest{} }
func (m *ListChildOrganizationsRequest) String() string            { return proto.CompactTextString(m) }
func (*ListChildOrganizationsRequest) ProtoMessage()               {}
func (*ListChildOrganizationsRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{6} }

func (m *ListChildOrganizationsRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *ListChildOrganizationsRequest) GetSelection() *OrganizationSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *ListChildOrganizationsRequest) GetPagination() *Pagination {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type ListChildOrganizationsRequest_Response struct {
	ChildOrganizations []*Organization                `protobuf:"bytes,1,rep,name=child_organizations,json=childOrganizations" json:"child_organizations,omitempty"`
	Request            *ListChildOrganizationsRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
	Pagination         *Pagination_Result             `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListChildOrganizationsRequest_Response) Reset() {
	*m = ListChildOrganizationsRequest_Response{}
}
func (m *ListChildOrganizationsRequest_Response) String() string { return proto.CompactTextString(m) }
func (*ListChildOrganizationsRequest_Response) ProtoMessage()    {}
func (*ListChildOrganizationsRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor10, []int{6, 0}
}

func (m *ListChildOrganizationsRequest_Response) GetChildOrganizations() []*Organization {
	if m != nil {
		return m.ChildOrganizations
	}
	return nil
}

func (m *ListChildOrganizationsRequest_Response) GetRequest() *ListChildOrganizationsRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *ListChildOrganizationsRequest_Response) GetPagination() *Pagination_Result {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type CreateOrganizationRequest struct {
	// Pick the organization to use as parent. If unset, your default organization is used.
	ParentOrganization string `protobuf:"bytes,1,opt,name=parent_organization,json=parentOrganization" json:"parent_organization,omitempty"`
	// Required
	NewOrganization string                `protobuf:"bytes,2,opt,name=new_organization,json=newOrganization" json:"new_organization,omitempty"`
	DisplayName     string                `protobuf:"bytes,3,opt,name=display_name,json=displayName" json:"display_name,omitempty"`
	IsBusiness      bool                  `protobuf:"varint,4,opt,name=is_business,json=isBusiness" json:"is_business,omitempty"`
	VatNumber       string                `protobuf:"bytes,5,opt,name=vat_number,json=vatNumber" json:"vat_number,omitempty"`
	Address         *Organization_Address `protobuf:"bytes,6,opt,name=address" json:"address,omitempty"`
	BillingName     string                `protobuf:"bytes,7,opt,name=billing_name,json=billingName" json:"billing_name,omitempty"`
	BillingAddress  *Organization_Address `protobuf:"bytes,8,opt,name=billing_address,json=billingAddress" json:"billing_address,omitempty"`
	// Required
	Contact *Organization_Contact `protobuf:"bytes,9,opt,name=contact" json:"contact,omitempty"`
}

func (m *CreateOrganizationRequest) Reset()                    { *m = CreateOrganizationRequest{} }
func (m *CreateOrganizationRequest) String() string            { return proto.CompactTextString(m) }
func (*CreateOrganizationRequest) ProtoMessage()               {}
func (*CreateOrganizationRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{7} }

func (m *CreateOrganizationRequest) GetParentOrganization() string {
	if m != nil {
		return m.ParentOrganization
	}
	return ""
}

func (m *CreateOrganizationRequest) GetNewOrganization() string {
	if m != nil {
		return m.NewOrganization
	}
	return ""
}

func (m *CreateOrganizationRequest) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *CreateOrganizationRequest) GetIsBusiness() bool {
	if m != nil {
		return m.IsBusiness
	}
	return false
}

func (m *CreateOrganizationRequest) GetVatNumber() string {
	if m != nil {
		return m.VatNumber
	}
	return ""
}

func (m *CreateOrganizationRequest) GetAddress() *Organization_Address {
	if m != nil {
		return m.Address
	}
	return nil
}

func (m *CreateOrganizationRequest) GetBillingName() string {
	if m != nil {
		return m.BillingName
	}
	return ""
}

func (m *CreateOrganizationRequest) GetBillingAddress() *Organization_Address {
	if m != nil {
		return m.BillingAddress
	}
	return nil
}

func (m *CreateOrganizationRequest) GetContact() *Organization_Contact {
	if m != nil {
		return m.Contact
	}
	return nil
}

type DeleteOrganizationRequest struct {
	// The organization to delete. If unset, your default organization is used
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *DeleteOrganizationRequest) Reset()                    { *m = DeleteOrganizationRequest{} }
func (m *DeleteOrganizationRequest) String() string            { return proto.CompactTextString(m) }
func (*DeleteOrganizationRequest) ProtoMessage()               {}
func (*DeleteOrganizationRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{8} }

func (m *DeleteOrganizationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type DeleteOrganizationRequest_Response struct {
	Organization             string            `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	ConfirmationCode         string            `protobuf:"bytes,2,opt,name=confirmation_code,json=confirmationCode" json:"confirmation_code,omitempty"`
	OrganizationsToBeDeleted *OrganizationTree `protobuf:"bytes,3,opt,name=organizations_to_be_deleted,json=organizationsToBeDeleted" json:"organizations_to_be_deleted,omitempty"`
}

func (m *DeleteOrganizationRequest_Response) Reset()         { *m = DeleteOrganizationRequest_Response{} }
func (m *DeleteOrganizationRequest_Response) String() string { return proto.CompactTextString(m) }
func (*DeleteOrganizationRequest_Response) ProtoMessage()    {}
func (*DeleteOrganizationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor10, []int{8, 0}
}

func (m *DeleteOrganizationRequest_Response) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *DeleteOrganizationRequest_Response) GetConfirmationCode() string {
	if m != nil {
		return m.ConfirmationCode
	}
	return ""
}

func (m *DeleteOrganizationRequest_Response) GetOrganizationsToBeDeleted() *OrganizationTree {
	if m != nil {
		return m.OrganizationsToBeDeleted
	}
	return nil
}

type DeleteOrganizationConfirmationRequest struct {
	// The organization to delete. If unset, your default organization is used
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	// The confirmation code for deletion
	ConfirmationCode string `protobuf:"bytes,2,opt,name=confirmation_code,json=confirmationCode" json:"confirmation_code,omitempty"`
}

func (m *DeleteOrganizationConfirmationRequest) Reset()         { *m = DeleteOrganizationConfirmationRequest{} }
func (m *DeleteOrganizationConfirmationRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteOrganizationConfirmationRequest) ProtoMessage()    {}
func (*DeleteOrganizationConfirmationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor10, []int{9}
}

func (m *DeleteOrganizationConfirmationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *DeleteOrganizationConfirmationRequest) GetConfirmationCode() string {
	if m != nil {
		return m.ConfirmationCode
	}
	return ""
}

type DeleteOrganizationConfirmationRequest_Response struct {
}

func (m *DeleteOrganizationConfirmationRequest_Response) Reset() {
	*m = DeleteOrganizationConfirmationRequest_Response{}
}
func (m *DeleteOrganizationConfirmationRequest_Response) String() string {
	return proto.CompactTextString(m)
}
func (*DeleteOrganizationConfirmationRequest_Response) ProtoMessage() {}
func (*DeleteOrganizationConfirmationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor10, []int{9, 0}
}

func init() {
	proto.RegisterType((*Organization)(nil), "hiber.organization.Organization")
	proto.RegisterType((*Organization_Address)(nil), "hiber.organization.Organization.Address")
	proto.RegisterType((*Organization_Contact)(nil), "hiber.organization.Organization.Contact")
	proto.RegisterType((*OrganizationSelection)(nil), "hiber.organization.OrganizationSelection")
	proto.RegisterType((*GetOrganizationRequest)(nil), "hiber.organization.GetOrganizationRequest")
	proto.RegisterType((*UpdateOrganizationRequest)(nil), "hiber.organization.UpdateOrganizationRequest")
	proto.RegisterType((*OrganizationTreeRequest)(nil), "hiber.organization.OrganizationTreeRequest")
	proto.RegisterType((*OrganizationTreeRequest_Response)(nil), "hiber.organization.OrganizationTreeRequest.Response")
	proto.RegisterType((*OrganizationTree)(nil), "hiber.organization.OrganizationTree")
	proto.RegisterType((*ListChildOrganizationsRequest)(nil), "hiber.organization.ListChildOrganizationsRequest")
	proto.RegisterType((*ListChildOrganizationsRequest_Response)(nil), "hiber.organization.ListChildOrganizationsRequest.Response")
	proto.RegisterType((*CreateOrganizationRequest)(nil), "hiber.organization.CreateOrganizationRequest")
	proto.RegisterType((*DeleteOrganizationRequest)(nil), "hiber.organization.DeleteOrganizationRequest")
	proto.RegisterType((*DeleteOrganizationRequest_Response)(nil), "hiber.organization.DeleteOrganizationRequest.Response")
	proto.RegisterType((*DeleteOrganizationConfirmationRequest)(nil), "hiber.organization.DeleteOrganizationConfirmationRequest")
	proto.RegisterType((*DeleteOrganizationConfirmationRequest_Response)(nil), "hiber.organization.DeleteOrganizationConfirmationRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for OrganizationService service

type OrganizationServiceClient interface {
	Create(ctx context.Context, in *CreateOrganizationRequest, opts ...grpc.CallOption) (*Organization, error)
	Get(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*Organization, error)
	Update(ctx context.Context, in *UpdateOrganizationRequest, opts ...grpc.CallOption) (*Organization, error)
	Delete(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationRequest_Response, error)
	DeleteConfirmation(ctx context.Context, in *DeleteOrganizationConfirmationRequest, opts ...grpc.CallOption) (*DeleteOrganizationConfirmationRequest_Response, error)
	Tree(ctx context.Context, in *OrganizationTreeRequest, opts ...grpc.CallOption) (*OrganizationTreeRequest_Response, error)
	ListChildOrganizations(ctx context.Context, in *ListChildOrganizationsRequest, opts ...grpc.CallOption) (*ListChildOrganizationsRequest_Response, error)
}

type organizationServiceClient struct {
	cc *grpc.ClientConn
}

func NewOrganizationServiceClient(cc *grpc.ClientConn) OrganizationServiceClient {
	return &organizationServiceClient{cc}
}

func (c *organizationServiceClient) Create(ctx context.Context, in *CreateOrganizationRequest, opts ...grpc.CallOption) (*Organization, error) {
	out := new(Organization)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/Create", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) Get(ctx context.Context, in *GetOrganizationRequest, opts ...grpc.CallOption) (*Organization, error) {
	out := new(Organization)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/Get", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) Update(ctx context.Context, in *UpdateOrganizationRequest, opts ...grpc.CallOption) (*Organization, error) {
	out := new(Organization)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/Update", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) Delete(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationRequest_Response, error) {
	out := new(DeleteOrganizationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/Delete", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) DeleteConfirmation(ctx context.Context, in *DeleteOrganizationConfirmationRequest, opts ...grpc.CallOption) (*DeleteOrganizationConfirmationRequest_Response, error) {
	out := new(DeleteOrganizationConfirmationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/DeleteConfirmation", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) Tree(ctx context.Context, in *OrganizationTreeRequest, opts ...grpc.CallOption) (*OrganizationTreeRequest_Response, error) {
	out := new(OrganizationTreeRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/Tree", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *organizationServiceClient) ListChildOrganizations(ctx context.Context, in *ListChildOrganizationsRequest, opts ...grpc.CallOption) (*ListChildOrganizationsRequest_Response, error) {
	out := new(ListChildOrganizationsRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.organization.OrganizationService/ListChildOrganizations", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for OrganizationService service

type OrganizationServiceServer interface {
	Create(context.Context, *CreateOrganizationRequest) (*Organization, error)
	Get(context.Context, *GetOrganizationRequest) (*Organization, error)
	Update(context.Context, *UpdateOrganizationRequest) (*Organization, error)
	Delete(context.Context, *DeleteOrganizationRequest) (*DeleteOrganizationRequest_Response, error)
	DeleteConfirmation(context.Context, *DeleteOrganizationConfirmationRequest) (*DeleteOrganizationConfirmationRequest_Response, error)
	Tree(context.Context, *OrganizationTreeRequest) (*OrganizationTreeRequest_Response, error)
	ListChildOrganizations(context.Context, *ListChildOrganizationsRequest) (*ListChildOrganizationsRequest_Response, error)
}

func RegisterOrganizationServiceServer(s *grpc.Server, srv OrganizationServiceServer) {
	s.RegisterService(&_OrganizationService_serviceDesc, srv)
}

func _OrganizationService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).Create(ctx, req.(*CreateOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).Get(ctx, req.(*GetOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).Update(ctx, req.(*UpdateOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).Delete(ctx, req.(*DeleteOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_DeleteConfirmation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOrganizationConfirmationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).DeleteConfirmation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/DeleteConfirmation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).DeleteConfirmation(ctx, req.(*DeleteOrganizationConfirmationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_Tree_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OrganizationTreeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).Tree(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/Tree",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).Tree(ctx, req.(*OrganizationTreeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OrganizationService_ListChildOrganizations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListChildOrganizationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OrganizationServiceServer).ListChildOrganizations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.organization.OrganizationService/ListChildOrganizations",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OrganizationServiceServer).ListChildOrganizations(ctx, req.(*ListChildOrganizationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _OrganizationService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.organization.OrganizationService",
	HandlerType: (*OrganizationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _OrganizationService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _OrganizationService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _OrganizationService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _OrganizationService_Delete_Handler,
		},
		{
			MethodName: "DeleteConfirmation",
			Handler:    _OrganizationService_DeleteConfirmation_Handler,
		},
		{
			MethodName: "Tree",
			Handler:    _OrganizationService_Tree_Handler,
		},
		{
			MethodName: "ListChildOrganizations",
			Handler:    _OrganizationService_ListChildOrganizations_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "organization.proto",
}

func init() { proto.RegisterFile("organization.proto", fileDescriptor10) }

var fileDescriptor10 = []byte{
	// 1002 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xec, 0x57, 0x4d, 0x6f, 0xe3, 0x44,
	0x18, 0x26, 0x75, 0x9b, 0x8f, 0x37, 0x85, 0x76, 0xa7, 0xec, 0xae, 0xeb, 0xd5, 0x8a, 0x60, 0x81,
	0xd4, 0x65, 0x45, 0x56, 0x1b, 0x10, 0x02, 0x84, 0x10, 0x49, 0x0a, 0x05, 0x81, 0xf6, 0xc3, 0x2d,
	0x87, 0xdd, 0x8b, 0x35, 0xb1, 0x5f, 0xd2, 0x91, 0x1c, 0xdb, 0xd8, 0x93, 0xae, 0xda, 0x03, 0x07,
	0x84, 0xc4, 0x81, 0x23, 0x9c, 0x10, 0x67, 0x7e, 0x07, 0x3f, 0x83, 0x1f, 0xc0, 0x85, 0x5f, 0x01,
	0xf2, 0xcc, 0x38, 0x19, 0x37, 0x4e, 0xeb, 0x94, 0x95, 0xb8, 0xec, 0xcd, 0x33, 0xf3, 0xbc, 0xcf,
	0x3c, 0xef, 0xc7, 0xbc, 0x33, 0x06, 0x12, 0x25, 0x63, 0x1a, 0xb2, 0x33, 0xca, 0x59, 0x14, 0x76,
	0xe3, 0x24, 0xe2, 0x11, 0x21, 0xc7, 0x6c, 0x84, 0x49, 0x57, 0x5f, 0xb1, 0x60, 0x44, 0x53, 0x94,
	0xeb, 0xf6, 0xdf, 0x1b, 0xb0, 0xf9, 0x50, 0x5b, 0x24, 0x36, 0x6c, 0xea, 0x60, 0xb3, 0xd6, 0xa9,
	0xed, 0xb5, 0x9c, 0xc2, 0x1c, 0x79, 0x1d, 0x36, 0x7d, 0x96, 0xc6, 0x01, 0x3d, 0x75, 0x43, 0x3a,
	0x41, 0x73, 0x4d, 0x60, 0xda, 0x6a, 0xee, 0x01, 0x9d, 0x20, 0xb9, 0x0d, 0x70, 0x42, 0xb9, 0x1b,
	0x4e, 0x27, 0x23, 0x4c, 0x4c, 0x43, 0x00, 0x5a, 0x27, 0x94, 0x3f, 0x10, 0x13, 0x64, 0x00, 0x0d,
	0xea, 0xfb, 0x09, 0xa6, 0xa9, 0xb9, 0xde, 0xa9, 0xed, 0xb5, 0x7b, 0x7b, 0xdd, 0x45, 0xa1, 0x5d,
	0x5d, 0x58, 0xb7, 0x2f, 0xf1, 0x4e, 0x6e, 0x98, 0xa9, 0x18, 0xb1, 0x20, 0x60, 0xe1, 0x58, 0xaa,
	0xd8, 0x90, 0x2a, 0xd4, 0x9c, 0x50, 0xf1, 0x18, 0xb6, 0x72, 0x48, 0xbe, 0x5d, 0x7d, 0xc5, 0xed,
	0x5e, 0x51, 0x04, 0x6a, 0x9c, 0x29, 0xf7, 0xa2, 0x90, 0x53, 0x8f, 0x9b, 0x8d, 0x8a, 0x54, 0x43,
	0x89, 0x77, 0x72, 0x43, 0xf2, 0x39, 0xdc, 0xcc, 0x3e, 0x13, 0xea, 0x71, 0x37, 0x65, 0xe3, 0x90,
	0xf2, 0x69, 0x82, 0xae, 0x4f, 0x39, 0x9a, 0x4d, 0xc1, 0xb9, 0xad, 0x38, 0x8f, 0xd8, 0x04, 0x53,
	0x4e, 0x27, 0xb1, 0x73, 0x3d, 0x37, 0x38, 0xcc, 0xf1, 0xfb, 0x94, 0x23, 0xb9, 0x07, 0xe0, 0x25,
	0x48, 0x39, 0xfa, 0x2e, 0xe5, 0x66, 0x6b, 0x89, 0x71, 0x4b, 0x61, 0xfa, 0x3c, 0x33, 0x98, 0xc6,
	0x7e, 0x6e, 0x00, 0xcb, 0x0c, 0x14, 0xa6, 0xcf, 0xad, 0xef, 0xa0, 0x91, 0xbb, 0xfe, 0x2a, 0x6c,
	0x04, 0x2c, 0xc4, 0xd4, 0xac, 0x75, 0x8c, 0xbd, 0x96, 0x23, 0x07, 0x64, 0x17, 0x9a, 0x67, 0x2c,
	0x76, 0xbd, 0xc8, 0xcf, 0x0b, 0xa1, 0x71, 0xc6, 0xe2, 0x61, 0xe4, 0x23, 0x21, 0xb0, 0xee, 0x31,
	0x7e, 0xaa, 0xd2, 0x2f, 0xbe, 0x33, 0x92, 0x94, 0x67, 0x9e, 0xae, 0x8b, 0x49, 0x39, 0x20, 0x66,
	0x16, 0xd5, 0x69, 0xc8, 0x93, 0x53, 0x95, 0xc6, 0x7c, 0x68, 0x7d, 0x01, 0x0d, 0x15, 0xbf, 0x8c,
	0x4e, 0x24, 0x5a, 0x96, 0xa4, 0xf8, 0xce, 0xe8, 0x70, 0x42, 0x59, 0xa0, 0xb6, 0x96, 0x83, 0x6c,
	0x36, 0x3e, 0x8e, 0x42, 0x54, 0x3b, 0xcb, 0x81, 0xfd, 0x14, 0xae, 0xeb, 0x79, 0x39, 0xc4, 0x00,
	0x3d, 0x51, 0xcf, 0x7d, 0x78, 0x59, 0xcf, 0x5e, 0x2a, 0x76, 0x68, 0xf7, 0x6e, 0xa9, 0xb8, 0x7c,
	0xc6, 0x02, 0x8e, 0x49, 0x21, 0xa7, 0xa9, 0x53, 0xb4, 0xb0, 0x3f, 0x82, 0x1b, 0x07, 0xc8, 0x75,
	0x88, 0x83, 0xdf, 0x4e, 0x31, 0xe5, 0x55, 0x0e, 0x94, 0xfd, 0xcf, 0x1a, 0xec, 0x7e, 0x2d, 0x42,
	0x7e, 0x45, 0x86, 0x17, 0x47, 0xf2, 0xbf, 0x1d, 0x49, 0xfb, 0x97, 0x35, 0xb8, 0xa9, 0x23, 0x8e,
	0x12, 0xc4, 0x55, 0xe2, 0x7f, 0x00, 0xad, 0x34, 0xaf, 0x27, 0x11, 0xfc, 0x76, 0xef, 0xce, 0x65,
	0x2a, 0x66, 0x05, 0xe8, 0xcc, 0x6d, 0xad, 0x9f, 0x6a, 0xd0, 0x74, 0x30, 0x8d, 0xa3, 0x30, 0x45,
	0xf2, 0x29, 0x34, 0x12, 0x29, 0x42, 0x95, 0xe4, 0xdd, 0xcb, 0x38, 0x35, 0xdd, 0x4e, 0x6e, 0x4b,
	0xde, 0x87, 0x75, 0x9e, 0x20, 0x2a, 0x5d, 0x6f, 0x54, 0xe2, 0x10, 0x16, 0xf6, 0xaf, 0x35, 0xd8,
	0x3e, 0xbf, 0x44, 0xf6, 0x4b, 0xe2, 0xd1, 0xee, 0x75, 0x2e, 0xa3, 0x3d, 0x17, 0xb1, 0x4f, 0xa0,
	0xe9, 0x1d, 0xb3, 0xc0, 0x4f, 0x30, 0x34, 0x8d, 0x8e, 0x51, 0x59, 0xd8, 0xcc, 0xca, 0xfe, 0xdd,
	0x80, 0xdb, 0x5f, 0xb1, 0x94, 0x0f, 0xb3, 0x89, 0xe2, 0xe9, 0xfc, 0x1f, 0x32, 0x47, 0xee, 0x03,
	0xc4, 0x74, 0xcc, 0x42, 0xb9, 0x95, 0x21, 0x98, 0xae, 0x29, 0xa6, 0x47, 0xb3, 0x05, 0x47, 0x03,
	0x59, 0x7f, 0xe9, 0xc9, 0x7e, 0x0c, 0x3b, 0xc2, 0x35, 0xf7, 0x7c, 0x2f, 0x32, 0x2a, 0x45, 0x97,
	0x78, 0x0b, 0x61, 0x20, 0x5f, 0xce, 0xeb, 0x47, 0x7a, 0x76, 0xbf, 0x8c, 0xe6, 0xc2, 0x18, 0xea,
	0x55, 0xb4, 0xe8, 0x9f, 0xb9, 0xe0, 0x5f, 0xd7, 0xc1, 0x74, 0x1a, 0x70, 0xdd, 0x4d, 0xfb, 0x4f,
	0x03, 0x76, 0x87, 0xe2, 0x0a, 0x2a, 0x6b, 0x6f, 0xf7, 0x60, 0x27, 0xa6, 0x09, 0x86, 0xdc, 0x2d,
	0xc9, 0x15, 0x91, 0x4b, 0x85, 0x27, 0xca, 0x1d, 0xd8, 0x0e, 0xf1, 0x59, 0x11, 0x2d, 0xfb, 0xdd,
	0x56, 0x88, 0xcf, 0x1e, 0x5e, 0xd4, 0x16, 0x8d, 0xc5, 0xb6, 0xf8, 0x1a, 0xb4, 0x59, 0xea, 0x8e,
	0xa6, 0x69, 0x76, 0x9b, 0xc9, 0xde, 0xd7, 0x74, 0x80, 0xa5, 0x03, 0x35, 0x73, 0xae, 0x6f, 0x6e,
	0x5c, 0xd0, 0x37, 0xeb, 0xcf, 0xab, 0x6f, 0x36, 0x2a, 0xf5, 0xcd, 0xe6, 0xf3, 0xeb, 0x9b, 0xad,
	0xab, 0xf6, 0xcd, 0xef, 0xd7, 0x60, 0x77, 0x1f, 0x03, 0xbc, 0xf2, 0xcd, 0x65, 0xfd, 0xa1, 0x9f,
	0x81, 0x2a, 0x07, 0xf6, 0x2e, 0x5c, 0xf3, 0xa2, 0xf0, 0x1b, 0x96, 0x4c, 0xc4, 0x58, 0x7f, 0x79,
	0x6c, 0xeb, 0x0b, 0xe2, 0x09, 0xe2, 0xc1, 0xad, 0xc2, 0x71, 0x72, 0x79, 0xe4, 0x8e, 0xd0, 0xf5,
	0x85, 0x64, 0x5f, 0x55, 0x71, 0xb5, 0xc6, 0x63, 0x16, 0x88, 0x8e, 0xa2, 0x01, 0x4a, 0xc7, 0x7d,
	0xfb, 0x87, 0x1a, 0xbc, 0xb9, 0x18, 0x84, 0xa1, 0xa6, 0x65, 0x95, 0x86, 0xb4, 0x8a, 0x7f, 0x16,
	0xcc, 0x83, 0xd7, 0xfb, 0xad, 0x0e, 0x3b, 0xc5, 0x2e, 0x95, 0x9c, 0x30, 0x0f, 0xc9, 0x13, 0xa8,
	0xcb, 0xd3, 0x47, 0xde, 0x2e, 0x73, 0x74, 0xe9, 0xc9, 0xb4, 0x2e, 0x6d, 0x3a, 0xe4, 0x10, 0x8c,
	0x03, 0xe4, 0xe4, 0xad, 0x32, 0x60, 0xf9, 0x7b, 0xa8, 0x02, 0xe9, 0x13, 0xa8, 0xcb, 0xc7, 0x50,
	0xb9, 0xde, 0xa5, 0x0f, 0xa5, 0x0a, 0xd4, 0x11, 0xd4, 0x65, 0xa2, 0xca, 0xa9, 0x97, 0x56, 0xb2,
	0xf5, 0xde, 0x4a, 0xf0, 0xee, 0xac, 0xa0, 0x7f, 0xae, 0x01, 0x91, 0x30, 0xbd, 0x1c, 0xc8, 0x07,
	0xd5, 0xe8, 0x4a, 0x4a, 0xc8, 0x1a, 0x5c, 0xd9, 0x74, 0xae, 0x8a, 0xc1, 0xba, 0xb8, 0xc9, 0x57,
	0x79, 0x4e, 0x58, 0xef, 0xae, 0x00, 0x9e, 0x6f, 0xf5, 0x63, 0x0d, 0x6e, 0x94, 0x5f, 0x30, 0x64,
	0xf5, 0xcb, 0xc8, 0xfa, 0x70, 0x65, 0x93, 0x99, 0x92, 0xc1, 0xc7, 0x60, 0x8f, 0x83, 0x68, 0x44,
	0x03, 0xc5, 0x41, 0x63, 0xd6, 0x1d, 0x27, 0xb1, 0x57, 0x20, 0x1b, 0x6c, 0xe9, 0x24, 0xfd, 0x98,
	0x3d, 0x7a, 0xe9, 0xe9, 0x86, 0xc0, 0x8f, 0xea, 0xe2, 0x8f, 0xf9, 0x9d, 0x7f, 0x03, 0x00, 0x00,
	0xff, 0xff, 0xb7, 0xca, 0xbe, 0x16, 0x67, 0x0f, 0x00, 0x00,
}
