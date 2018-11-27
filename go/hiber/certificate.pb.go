// Code generated by protoc-gen-go.
// source: certificate.proto
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

type Certificate struct {
	Id                int64       `protobuf:"varint,1,opt,name=id" json:"id,omitempty"`
	Name              string      `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Certificate       *BytesOrHex `protobuf:"bytes,3,opt,name=certificate" json:"certificate,omitempty"`
	HasPrivateKey     bool        `protobuf:"varint,4,opt,name=has_private_key,json=hasPrivateKey" json:"has_private_key,omitempty"`
	CaCertificateName string      `protobuf:"bytes,5,opt,name=ca_certificate_name,json=caCertificateName" json:"ca_certificate_name,omitempty"`
	CaCertificateId   int64       `protobuf:"varint,6,opt,name=ca_certificate_id,json=caCertificateId" json:"ca_certificate_id,omitempty"`
}

func (m *Certificate) Reset()                    { *m = Certificate{} }
func (m *Certificate) String() string            { return proto.CompactTextString(m) }
func (*Certificate) ProtoMessage()               {}
func (*Certificate) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{0} }

func (m *Certificate) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Certificate) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Certificate) GetCertificate() *BytesOrHex {
	if m != nil {
		return m.Certificate
	}
	return nil
}

func (m *Certificate) GetHasPrivateKey() bool {
	if m != nil {
		return m.HasPrivateKey
	}
	return false
}

func (m *Certificate) GetCaCertificateName() string {
	if m != nil {
		return m.CaCertificateName
	}
	return ""
}

func (m *Certificate) GetCaCertificateId() int64 {
	if m != nil {
		return m.CaCertificateId
	}
	return 0
}

type CertificateSelection struct {
	CertificateIds   []int64 `protobuf:"varint,1,rep,packed,name=certificate_ids,json=certificateIds" json:"certificate_ids,omitempty"`
	Search           string  `protobuf:"bytes,2,opt,name=search" json:"search,omitempty"`
	CaCertificateIds []int64 `protobuf:"varint,3,rep,packed,name=ca_certificate_ids,json=caCertificateIds" json:"ca_certificate_ids,omitempty"`
}

func (m *CertificateSelection) Reset()                    { *m = CertificateSelection{} }
func (m *CertificateSelection) String() string            { return proto.CompactTextString(m) }
func (*CertificateSelection) ProtoMessage()               {}
func (*CertificateSelection) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{1} }

func (m *CertificateSelection) GetCertificateIds() []int64 {
	if m != nil {
		return m.CertificateIds
	}
	return nil
}

func (m *CertificateSelection) GetSearch() string {
	if m != nil {
		return m.Search
	}
	return ""
}

func (m *CertificateSelection) GetCaCertificateIds() []int64 {
	if m != nil {
		return m.CaCertificateIds
	}
	return nil
}

type ListCertificatesRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *CertificateSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	Pagination   *Pagination           `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListCertificatesRequest) Reset()                    { *m = ListCertificatesRequest{} }
func (m *ListCertificatesRequest) String() string            { return proto.CompactTextString(m) }
func (*ListCertificatesRequest) ProtoMessage()               {}
func (*ListCertificatesRequest) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{2} }

func (m *ListCertificatesRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *ListCertificatesRequest) GetSelection() *CertificateSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *ListCertificatesRequest) GetPagination() *Pagination {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type ListCertificatesRequest_Response struct {
	Certificates []*Certificate           `protobuf:"bytes,1,rep,name=certificates" json:"certificates,omitempty"`
	Request      *ListCertificatesRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
	Pagination   *Pagination_Result       `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *ListCertificatesRequest_Response) Reset()         { *m = ListCertificatesRequest_Response{} }
func (m *ListCertificatesRequest_Response) String() string { return proto.CompactTextString(m) }
func (*ListCertificatesRequest_Response) ProtoMessage()    {}
func (*ListCertificatesRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor1, []int{2, 0}
}

func (m *ListCertificatesRequest_Response) GetCertificates() []*Certificate {
	if m != nil {
		return m.Certificates
	}
	return nil
}

func (m *ListCertificatesRequest_Response) GetRequest() *ListCertificatesRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *ListCertificatesRequest_Response) GetPagination() *Pagination_Result {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type UploadCertificateRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization      string                                      `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	UploadCertificate *UploadCertificateRequest_UploadCertificate `protobuf:"bytes,2,opt,name=upload_certificate,json=uploadCertificate" json:"upload_certificate,omitempty"`
	// Optionally, either upload a CA certificate or provide the id of a previously uploaded CA certificate.
	UploadCaCertificate *UploadCertificateRequest_UploadCertificate `protobuf:"bytes,3,opt,name=upload_ca_certificate,json=uploadCaCertificate" json:"upload_ca_certificate,omitempty"`
	// Optionally, either upload a CA certificate or provide the id of a previously uploaded CA certificate.
	CaCertificateId int64 `protobuf:"varint,4,opt,name=ca_certificate_id,json=caCertificateId" json:"ca_certificate_id,omitempty"`
}

func (m *UploadCertificateRequest) Reset()                    { *m = UploadCertificateRequest{} }
func (m *UploadCertificateRequest) String() string            { return proto.CompactTextString(m) }
func (*UploadCertificateRequest) ProtoMessage()               {}
func (*UploadCertificateRequest) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{3} }

func (m *UploadCertificateRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *UploadCertificateRequest) GetUploadCertificate() *UploadCertificateRequest_UploadCertificate {
	if m != nil {
		return m.UploadCertificate
	}
	return nil
}

func (m *UploadCertificateRequest) GetUploadCaCertificate() *UploadCertificateRequest_UploadCertificate {
	if m != nil {
		return m.UploadCaCertificate
	}
	return nil
}

func (m *UploadCertificateRequest) GetCaCertificateId() int64 {
	if m != nil {
		return m.CaCertificateId
	}
	return 0
}

type UploadCertificateRequest_Response struct {
	Certificate *Certificate              `protobuf:"bytes,1,opt,name=certificate" json:"certificate,omitempty"`
	Request     *UploadCertificateRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *UploadCertificateRequest_Response) Reset()         { *m = UploadCertificateRequest_Response{} }
func (m *UploadCertificateRequest_Response) String() string { return proto.CompactTextString(m) }
func (*UploadCertificateRequest_Response) ProtoMessage()    {}
func (*UploadCertificateRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor1, []int{3, 0}
}

func (m *UploadCertificateRequest_Response) GetCertificate() *Certificate {
	if m != nil {
		return m.Certificate
	}
	return nil
}

func (m *UploadCertificateRequest_Response) GetRequest() *UploadCertificateRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

type UploadCertificateRequest_UploadCertificate struct {
	Name        string      `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Certificate *BytesOrHex `protobuf:"bytes,2,opt,name=certificate" json:"certificate,omitempty"`
	// Private key is optional, and will not be retrievable from the API
	PrivateKey *BytesOrHex `protobuf:"bytes,3,opt,name=private_key,json=privateKey" json:"private_key,omitempty"`
}

func (m *UploadCertificateRequest_UploadCertificate) Reset() {
	*m = UploadCertificateRequest_UploadCertificate{}
}
func (m *UploadCertificateRequest_UploadCertificate) String() string {
	return proto.CompactTextString(m)
}
func (*UploadCertificateRequest_UploadCertificate) ProtoMessage() {}
func (*UploadCertificateRequest_UploadCertificate) Descriptor() ([]byte, []int) {
	return fileDescriptor1, []int{3, 1}
}

func (m *UploadCertificateRequest_UploadCertificate) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UploadCertificateRequest_UploadCertificate) GetCertificate() *BytesOrHex {
	if m != nil {
		return m.Certificate
	}
	return nil
}

func (m *UploadCertificateRequest_UploadCertificate) GetPrivateKey() *BytesOrHex {
	if m != nil {
		return m.PrivateKey
	}
	return nil
}

type RenameCertificateRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *CertificateSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	NewName      string                `protobuf:"bytes,3,opt,name=new_name,json=newName" json:"new_name,omitempty"`
}

func (m *RenameCertificateRequest) Reset()                    { *m = RenameCertificateRequest{} }
func (m *RenameCertificateRequest) String() string            { return proto.CompactTextString(m) }
func (*RenameCertificateRequest) ProtoMessage()               {}
func (*RenameCertificateRequest) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{4} }

func (m *RenameCertificateRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *RenameCertificateRequest) GetSelection() *CertificateSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *RenameCertificateRequest) GetNewName() string {
	if m != nil {
		return m.NewName
	}
	return ""
}

type RenameCertificateRequest_Response struct {
	Certificates []*Certificate            `protobuf:"bytes,1,rep,name=certificates" json:"certificates,omitempty"`
	Request      *RenameCertificateRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
	Pagination   *Pagination_Result        `protobuf:"bytes,3,opt,name=pagination" json:"pagination,omitempty"`
}

func (m *RenameCertificateRequest_Response) Reset()         { *m = RenameCertificateRequest_Response{} }
func (m *RenameCertificateRequest_Response) String() string { return proto.CompactTextString(m) }
func (*RenameCertificateRequest_Response) ProtoMessage()    {}
func (*RenameCertificateRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor1, []int{4, 0}
}

func (m *RenameCertificateRequest_Response) GetCertificates() []*Certificate {
	if m != nil {
		return m.Certificates
	}
	return nil
}

func (m *RenameCertificateRequest_Response) GetRequest() *RenameCertificateRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *RenameCertificateRequest_Response) GetPagination() *Pagination_Result {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type DeleteCertificateRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string                `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *CertificateSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
}

func (m *DeleteCertificateRequest) Reset()                    { *m = DeleteCertificateRequest{} }
func (m *DeleteCertificateRequest) String() string            { return proto.CompactTextString(m) }
func (*DeleteCertificateRequest) ProtoMessage()               {}
func (*DeleteCertificateRequest) Descriptor() ([]byte, []int) { return fileDescriptor1, []int{5} }

func (m *DeleteCertificateRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *DeleteCertificateRequest) GetSelection() *CertificateSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

type DeleteCertificateRequest_Response struct {
	DeletedCertificateIds []int64                   `protobuf:"varint,1,rep,packed,name=deleted_certificate_ids,json=deletedCertificateIds" json:"deleted_certificate_ids,omitempty"`
	Request               *DeleteCertificateRequest `protobuf:"bytes,2,opt,name=request" json:"request,omitempty"`
}

func (m *DeleteCertificateRequest_Response) Reset()         { *m = DeleteCertificateRequest_Response{} }
func (m *DeleteCertificateRequest_Response) String() string { return proto.CompactTextString(m) }
func (*DeleteCertificateRequest_Response) ProtoMessage()    {}
func (*DeleteCertificateRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor1, []int{5, 0}
}

func (m *DeleteCertificateRequest_Response) GetDeletedCertificateIds() []int64 {
	if m != nil {
		return m.DeletedCertificateIds
	}
	return nil
}

func (m *DeleteCertificateRequest_Response) GetRequest() *DeleteCertificateRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func init() {
	proto.RegisterType((*Certificate)(nil), "hiber.certificate.Certificate")
	proto.RegisterType((*CertificateSelection)(nil), "hiber.certificate.CertificateSelection")
	proto.RegisterType((*ListCertificatesRequest)(nil), "hiber.certificate.ListCertificatesRequest")
	proto.RegisterType((*ListCertificatesRequest_Response)(nil), "hiber.certificate.ListCertificatesRequest.Response")
	proto.RegisterType((*UploadCertificateRequest)(nil), "hiber.certificate.UploadCertificateRequest")
	proto.RegisterType((*UploadCertificateRequest_Response)(nil), "hiber.certificate.UploadCertificateRequest.Response")
	proto.RegisterType((*UploadCertificateRequest_UploadCertificate)(nil), "hiber.certificate.UploadCertificateRequest.UploadCertificate")
	proto.RegisterType((*RenameCertificateRequest)(nil), "hiber.certificate.RenameCertificateRequest")
	proto.RegisterType((*RenameCertificateRequest_Response)(nil), "hiber.certificate.RenameCertificateRequest.Response")
	proto.RegisterType((*DeleteCertificateRequest)(nil), "hiber.certificate.DeleteCertificateRequest")
	proto.RegisterType((*DeleteCertificateRequest_Response)(nil), "hiber.certificate.DeleteCertificateRequest.Response")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for CertificateService service

type CertificateServiceClient interface {
	List(ctx context.Context, in *ListCertificatesRequest, opts ...grpc.CallOption) (*ListCertificatesRequest_Response, error)
	Rename(ctx context.Context, in *RenameCertificateRequest, opts ...grpc.CallOption) (*RenameCertificateRequest_Response, error)
	Upload(ctx context.Context, in *UploadCertificateRequest, opts ...grpc.CallOption) (*UploadCertificateRequest_Response, error)
	Delete(ctx context.Context, in *DeleteCertificateRequest, opts ...grpc.CallOption) (*DeleteCertificateRequest_Response, error)
}

type certificateServiceClient struct {
	cc *grpc.ClientConn
}

func NewCertificateServiceClient(cc *grpc.ClientConn) CertificateServiceClient {
	return &certificateServiceClient{cc}
}

func (c *certificateServiceClient) List(ctx context.Context, in *ListCertificatesRequest, opts ...grpc.CallOption) (*ListCertificatesRequest_Response, error) {
	out := new(ListCertificatesRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.certificate.CertificateService/List", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *certificateServiceClient) Rename(ctx context.Context, in *RenameCertificateRequest, opts ...grpc.CallOption) (*RenameCertificateRequest_Response, error) {
	out := new(RenameCertificateRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.certificate.CertificateService/Rename", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *certificateServiceClient) Upload(ctx context.Context, in *UploadCertificateRequest, opts ...grpc.CallOption) (*UploadCertificateRequest_Response, error) {
	out := new(UploadCertificateRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.certificate.CertificateService/Upload", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *certificateServiceClient) Delete(ctx context.Context, in *DeleteCertificateRequest, opts ...grpc.CallOption) (*DeleteCertificateRequest_Response, error) {
	out := new(DeleteCertificateRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.certificate.CertificateService/Delete", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for CertificateService service

type CertificateServiceServer interface {
	List(context.Context, *ListCertificatesRequest) (*ListCertificatesRequest_Response, error)
	Rename(context.Context, *RenameCertificateRequest) (*RenameCertificateRequest_Response, error)
	Upload(context.Context, *UploadCertificateRequest) (*UploadCertificateRequest_Response, error)
	Delete(context.Context, *DeleteCertificateRequest) (*DeleteCertificateRequest_Response, error)
}

func RegisterCertificateServiceServer(s *grpc.Server, srv CertificateServiceServer) {
	s.RegisterService(&_CertificateService_serviceDesc, srv)
}

func _CertificateService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCertificatesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CertificateServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.certificate.CertificateService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CertificateServiceServer).List(ctx, req.(*ListCertificatesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CertificateService_Rename_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RenameCertificateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CertificateServiceServer).Rename(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.certificate.CertificateService/Rename",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CertificateServiceServer).Rename(ctx, req.(*RenameCertificateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CertificateService_Upload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UploadCertificateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CertificateServiceServer).Upload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.certificate.CertificateService/Upload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CertificateServiceServer).Upload(ctx, req.(*UploadCertificateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CertificateService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteCertificateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CertificateServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.certificate.CertificateService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CertificateServiceServer).Delete(ctx, req.(*DeleteCertificateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _CertificateService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.certificate.CertificateService",
	HandlerType: (*CertificateServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _CertificateService_List_Handler,
		},
		{
			MethodName: "Rename",
			Handler:    _CertificateService_Rename_Handler,
		},
		{
			MethodName: "Upload",
			Handler:    _CertificateService_Upload_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _CertificateService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "certificate.proto",
}

func init() { proto.RegisterFile("certificate.proto", fileDescriptor1) }

var fileDescriptor1 = []byte{
	// 702 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xc4, 0x56, 0x41, 0x6f, 0xd3, 0x4a,
	0x10, 0x7e, 0x8e, 0xd3, 0xb4, 0x9d, 0xf4, 0xb5, 0xcf, 0xd3, 0xd7, 0x57, 0x3f, 0x1f, 0x50, 0xc8,
	0x81, 0x46, 0x05, 0x59, 0x22, 0x45, 0x88, 0x03, 0x48, 0x10, 0x5a, 0x09, 0x04, 0x82, 0x6a, 0x11,
	0x17, 0x2e, 0xd1, 0xc6, 0x5e, 0x92, 0x55, 0x8d, 0xed, 0x7a, 0x9d, 0x96, 0x72, 0x47, 0x82, 0x1b,
	0x88, 0xbf, 0xc4, 0x19, 0xfe, 0x07, 0x47, 0xc4, 0x0f, 0x40, 0x59, 0xbb, 0xee, 0x3a, 0xb1, 0x21,
	0x86, 0x4a, 0xdc, 0xda, 0xdd, 0x99, 0xf9, 0xbe, 0x6f, 0x66, 0xf6, 0x73, 0xc0, 0x70, 0x58, 0x14,
	0xf3, 0xe7, 0xdc, 0xa1, 0x31, 0xb3, 0xc3, 0x28, 0x88, 0x03, 0x34, 0x46, 0x7c, 0xc0, 0x22, 0x5b,
	0xb9, 0xb0, 0x60, 0x40, 0x45, 0x7a, 0xdd, 0xfe, 0xa2, 0x41, 0xf3, 0xee, 0xd9, 0x1d, 0xae, 0x42,
	0x8d, 0xbb, 0xa6, 0xd6, 0xd2, 0x3a, 0x3a, 0xa9, 0x71, 0x17, 0x11, 0xea, 0x3e, 0x7d, 0xc1, 0xcc,
	0x5a, 0x4b, 0xeb, 0x2c, 0x13, 0xf9, 0x37, 0xee, 0x40, 0x53, 0x29, 0x67, 0xea, 0x2d, 0xad, 0xd3,
	0xec, 0x1a, 0x76, 0x02, 0xd4, 0x3b, 0x89, 0x99, 0x78, 0x1c, 0xdd, 0x63, 0x2f, 0x89, 0x1a, 0x85,
	0x97, 0x60, 0x6d, 0x44, 0x45, 0x3f, 0x8c, 0xf8, 0x11, 0x8d, 0x59, 0xff, 0x80, 0x9d, 0x98, 0xf5,
	0x96, 0xd6, 0x59, 0x22, 0x7f, 0x8f, 0xa8, 0xd8, 0x4f, 0x4e, 0x1f, 0xb0, 0x13, 0xb4, 0x61, 0xdd,
	0xa1, 0x7d, 0x25, 0xb3, 0x2f, 0xf1, 0x17, 0x24, 0xbe, 0xe1, 0x50, 0x85, 0xec, 0xa3, 0x09, 0x99,
	0x6d, 0x30, 0xa6, 0xe2, 0xb9, 0x6b, 0x36, 0x24, 0xff, 0xb5, 0x5c, 0xf4, 0x7d, 0xb7, 0xfd, 0x5a,
	0x83, 0x7f, 0x95, 0x93, 0x27, 0xcc, 0x63, 0x4e, 0xcc, 0x03, 0x1f, 0xb7, 0x60, 0x2d, 0x5f, 0x41,
	0x98, 0x5a, 0x4b, 0xef, 0xe8, 0x64, 0xd5, 0x51, 0x0b, 0x08, 0xfc, 0x0f, 0x1a, 0x82, 0xd1, 0xc8,
	0x19, 0xa5, 0x0d, 0x49, 0xff, 0xc3, 0x2b, 0x80, 0x33, 0x2c, 0x84, 0xa9, 0xcb, 0x1a, 0xff, 0x4c,
	0xd1, 0x10, 0xed, 0x37, 0x3a, 0x6c, 0x3e, 0xe4, 0x22, 0x56, 0x8e, 0x05, 0x61, 0x87, 0x63, 0x26,
	0x62, 0x6c, 0xc3, 0x4a, 0x10, 0x0d, 0xa9, 0xcf, 0x5f, 0xd1, 0x09, 0x35, 0x39, 0x8a, 0x65, 0x92,
	0x3b, 0xc3, 0x3d, 0x58, 0x16, 0xa7, 0xdc, 0x25, 0x91, 0x66, 0x77, 0xcb, 0x9e, 0x99, 0xb3, 0x5d,
	0x24, 0x95, 0x9c, 0x65, 0xe2, 0x55, 0x80, 0x90, 0x0e, 0xb9, 0x9f, 0x00, 0xe5, 0xc7, 0xb8, 0x9f,
	0x5d, 0x10, 0x25, 0xc8, 0xfa, 0xa4, 0xc1, 0x12, 0x61, 0x22, 0x0c, 0x7c, 0xc1, 0xb0, 0x07, 0x2b,
	0x0a, 0x5c, 0xd2, 0xb2, 0x66, 0xf7, 0xc2, 0x8f, 0x99, 0x90, 0x5c, 0x0e, 0xee, 0xc2, 0x62, 0x94,
	0x28, 0x4f, 0x85, 0x6c, 0x17, 0xa4, 0x97, 0xf4, 0x8a, 0x9c, 0xa6, 0xe2, 0x8d, 0x02, 0x25, 0xe6,
	0x8c, 0x12, 0x9b, 0x30, 0x31, 0xf6, 0x62, 0x55, 0x50, 0xfb, 0x5b, 0x1d, 0xcc, 0xa7, 0xa1, 0x17,
	0x50, 0x57, 0xe5, 0x58, 0x61, 0x16, 0x1e, 0xe0, 0x58, 0xe6, 0xab, 0xd3, 0x4f, 0xb5, 0xdc, 0x2a,
	0xd0, 0x52, 0x06, 0x56, 0x70, 0x61, 0x8c, 0xa7, 0x8f, 0xf0, 0x10, 0x36, 0x4e, 0xd1, 0x72, 0xeb,
	0x96, 0x6a, 0xfe, 0x4d, 0xc0, 0xf5, 0x14, 0x50, 0xdd, 0xd7, 0xe2, 0x07, 0x56, 0x2f, 0x7c, 0x60,
	0xd6, 0x07, 0x75, 0x3d, 0x6e, 0xe7, 0x6d, 0x42, 0x93, 0x0c, 0x7f, 0xb6, 0x1d, 0x39, 0xcf, 0xd8,
	0x9b, 0x5e, 0x8e, 0xcb, 0x15, 0xf4, 0x65, 0xdb, 0x61, 0xbd, 0xd3, 0xc0, 0x98, 0x89, 0xca, 0x9c,
	0x4d, 0x2b, 0x77, 0xb6, 0xda, 0x5c, 0xce, 0xd6, 0x85, 0xa6, 0xea, 0x6a, 0xa5, 0x76, 0x08, 0x61,
	0xe6, 0x72, 0xed, 0xaf, 0x35, 0x30, 0x09, 0x9b, 0x60, 0xfe, 0xe2, 0xda, 0x9d, 0x93, 0x05, 0xfc,
	0x0f, 0x4b, 0x3e, 0x3b, 0x4e, 0x2c, 0x56, 0x97, 0x30, 0x8b, 0x3e, 0x3b, 0x9e, 0x18, 0xab, 0xf5,
	0xf9, 0xbc, 0x9f, 0xfa, 0x5c, 0xd3, 0x2c, 0x6b, 0xca, 0x79, 0xbc, 0xf5, 0xf7, 0x35, 0x30, 0x77,
	0x99, 0xc7, 0xe2, 0x3f, 0xdb, 0x74, 0xeb, 0xad, 0xda, 0xd9, 0xeb, 0xb0, 0xe9, 0x4a, 0x4e, 0x6e,
	0xbf, 0xf8, 0x13, 0xb4, 0x91, 0x5e, 0xe7, 0xbf, 0x21, 0xf3, 0x75, 0xb3, 0x4c, 0x6d, 0xd6, 0xcd,
	0xee, 0x47, 0x1d, 0x30, 0xc7, 0x37, 0x3a, 0xe2, 0x0e, 0xc3, 0x21, 0xd4, 0x27, 0xa6, 0x8b, 0x15,
	0xdc, 0xd8, 0xda, 0x99, 0x3f, 0xd6, 0xce, 0xe4, 0x1f, 0x40, 0x23, 0x19, 0x39, 0x56, 0xd9, 0x06,
	0xeb, 0x5a, 0x85, 0xe0, 0x1c, 0x58, 0xe2, 0x03, 0x58, 0xc5, 0x48, 0x0a, 0xc1, 0x4a, 0x5d, 0x55,
	0x05, 0x4b, 0xda, 0x8f, 0x55, 0x26, 0x53, 0x08, 0x56, 0x16, 0x9c, 0x81, 0xf5, 0x6e, 0xc2, 0xc5,
	0xa1, 0x17, 0x0c, 0xa8, 0x97, 0x66, 0xd3, 0x90, 0xdb, 0xc3, 0x28, 0x74, 0xd4, 0x32, 0xbd, 0x55,
	0xa5, 0xc2, 0x9d, 0x90, 0xef, 0xff, 0xf5, 0x6c, 0x41, 0x46, 0x0f, 0x1a, 0xf2, 0xb7, 0xe0, 0xce,
	0xf7, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb5, 0x57, 0xf5, 0x58, 0x3f, 0x0a, 0x00, 0x00,
}
