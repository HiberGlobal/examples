// Code generated by protoc-gen-go.
// source: currentuser.proto
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

type CurrentUser_Settings_Layout int32

const (
	CurrentUser_Settings_DEFAULT_LAYOUT CurrentUser_Settings_Layout = 0
	CurrentUser_Settings_LANDSCAPE      CurrentUser_Settings_Layout = 1
	CurrentUser_Settings_PORTRAIT       CurrentUser_Settings_Layout = 2
)

var CurrentUser_Settings_Layout_name = map[int32]string{
	0: "DEFAULT_LAYOUT",
	1: "LANDSCAPE",
	2: "PORTRAIT",
}
var CurrentUser_Settings_Layout_value = map[string]int32{
	"DEFAULT_LAYOUT": 0,
	"LANDSCAPE":      1,
	"PORTRAIT":       2,
}

func (x CurrentUser_Settings_Layout) String() string {
	return proto.EnumName(CurrentUser_Settings_Layout_name, int32(x))
}
func (CurrentUser_Settings_Layout) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor2, []int{0, 0, 0}
}

type CurrentUser_Settings_MapStyle int32

const (
	CurrentUser_Settings_DEFAULT_MAP_STYLE CurrentUser_Settings_MapStyle = 0
	CurrentUser_Settings_SATELLITE         CurrentUser_Settings_MapStyle = 1
	CurrentUser_Settings_HIBER_VISION      CurrentUser_Settings_MapStyle = 2
	CurrentUser_Settings_CLASSIC           CurrentUser_Settings_MapStyle = 3
)

var CurrentUser_Settings_MapStyle_name = map[int32]string{
	0: "DEFAULT_MAP_STYLE",
	1: "SATELLITE",
	2: "HIBER_VISION",
	3: "CLASSIC",
}
var CurrentUser_Settings_MapStyle_value = map[string]int32{
	"DEFAULT_MAP_STYLE": 0,
	"SATELLITE":         1,
	"HIBER_VISION":      2,
	"CLASSIC":           3,
}

func (x CurrentUser_Settings_MapStyle) String() string {
	return proto.EnumName(CurrentUser_Settings_MapStyle_name, int32(x))
}
func (CurrentUser_Settings_MapStyle) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor2, []int{0, 0, 1}
}

type CurrentUser_Settings_TimeFormat int32

const (
	CurrentUser_Settings_DEFAULT_TIME_FORMAT CurrentUser_Settings_TimeFormat = 0
	CurrentUser_Settings_TWENTYFOUR_HOUR     CurrentUser_Settings_TimeFormat = 1
	CurrentUser_Settings_TWELVE_HOUR         CurrentUser_Settings_TimeFormat = 2
)

var CurrentUser_Settings_TimeFormat_name = map[int32]string{
	0: "DEFAULT_TIME_FORMAT",
	1: "TWENTYFOUR_HOUR",
	2: "TWELVE_HOUR",
}
var CurrentUser_Settings_TimeFormat_value = map[string]int32{
	"DEFAULT_TIME_FORMAT": 0,
	"TWENTYFOUR_HOUR":     1,
	"TWELVE_HOUR":         2,
}

func (x CurrentUser_Settings_TimeFormat) String() string {
	return proto.EnumName(CurrentUser_Settings_TimeFormat_name, int32(x))
}
func (CurrentUser_Settings_TimeFormat) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor2, []int{0, 0, 2}
}

type CurrentUser_Settings_DateFormat int32

const (
	CurrentUser_Settings_DEFAULT_DATE_FORMAT CurrentUser_Settings_DateFormat = 0
	CurrentUser_Settings_DD_MM_YYYY          CurrentUser_Settings_DateFormat = 1
	CurrentUser_Settings_MM_DD_YYYY          CurrentUser_Settings_DateFormat = 2
	CurrentUser_Settings_YYYY_MM_DD          CurrentUser_Settings_DateFormat = 3
)

var CurrentUser_Settings_DateFormat_name = map[int32]string{
	0: "DEFAULT_DATE_FORMAT",
	1: "DD_MM_YYYY",
	2: "MM_DD_YYYY",
	3: "YYYY_MM_DD",
}
var CurrentUser_Settings_DateFormat_value = map[string]int32{
	"DEFAULT_DATE_FORMAT": 0,
	"DD_MM_YYYY":          1,
	"MM_DD_YYYY":          2,
	"YYYY_MM_DD":          3,
}

func (x CurrentUser_Settings_DateFormat) String() string {
	return proto.EnumName(CurrentUser_Settings_DateFormat_name, int32(x))
}
func (CurrentUser_Settings_DateFormat) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor2, []int{0, 0, 3}
}

type CurrentUser_Settings_ThousandsSeparatorsFormat int32

const (
	CurrentUser_Settings_DEFAULT_THOUSANDS_SEPARATORS_FORMAT CurrentUser_Settings_ThousandsSeparatorsFormat = 0
	CurrentUser_Settings_PERIOD                              CurrentUser_Settings_ThousandsSeparatorsFormat = 1
	CurrentUser_Settings_COMMA                               CurrentUser_Settings_ThousandsSeparatorsFormat = 2
)

var CurrentUser_Settings_ThousandsSeparatorsFormat_name = map[int32]string{
	0: "DEFAULT_THOUSANDS_SEPARATORS_FORMAT",
	1: "PERIOD",
	2: "COMMA",
}
var CurrentUser_Settings_ThousandsSeparatorsFormat_value = map[string]int32{
	"DEFAULT_THOUSANDS_SEPARATORS_FORMAT": 0,
	"PERIOD": 1,
	"COMMA":  2,
}

func (x CurrentUser_Settings_ThousandsSeparatorsFormat) String() string {
	return proto.EnumName(CurrentUser_Settings_ThousandsSeparatorsFormat_name, int32(x))
}
func (CurrentUser_Settings_ThousandsSeparatorsFormat) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor2, []int{0, 0, 4}
}

// Your personal data
type CurrentUser struct {
	Id                     string                `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Email                  string                `protobuf:"bytes,2,opt,name=email" json:"email,omitempty"`
	Name                   string                `protobuf:"bytes,3,opt,name=name" json:"name,omitempty"`
	Organizations          []string              `protobuf:"bytes,4,rep,name=organizations" json:"organizations,omitempty"`
	DefaultOrganization    string                `protobuf:"bytes,5,opt,name=default_organization,json=defaultOrganization" json:"default_organization,omitempty"`
	RequestedOrganizations []string              `protobuf:"bytes,6,rep,name=requested_organizations,json=requestedOrganizations" json:"requested_organizations,omitempty"`
	Settings               *CurrentUser_Settings `protobuf:"bytes,7,opt,name=settings" json:"settings,omitempty"`
}

func (m *CurrentUser) Reset()                    { *m = CurrentUser{} }
func (m *CurrentUser) String() string            { return proto.CompactTextString(m) }
func (*CurrentUser) ProtoMessage()               {}
func (*CurrentUser) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{0} }

func (m *CurrentUser) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *CurrentUser) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *CurrentUser) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CurrentUser) GetOrganizations() []string {
	if m != nil {
		return m.Organizations
	}
	return nil
}

func (m *CurrentUser) GetDefaultOrganization() string {
	if m != nil {
		return m.DefaultOrganization
	}
	return ""
}

func (m *CurrentUser) GetRequestedOrganizations() []string {
	if m != nil {
		return m.RequestedOrganizations
	}
	return nil
}

func (m *CurrentUser) GetSettings() *CurrentUser_Settings {
	if m != nil {
		return m.Settings
	}
	return nil
}

// Settings used by the UI
type CurrentUser_Settings struct {
	Layout                    CurrentUser_Settings_Layout                    `protobuf:"varint,1,opt,name=layout,enum=hiber.user.CurrentUser_Settings_Layout" json:"layout,omitempty"`
	MapStyle                  CurrentUser_Settings_MapStyle                  `protobuf:"varint,2,opt,name=map_style,json=mapStyle,enum=hiber.user.CurrentUser_Settings_MapStyle" json:"map_style,omitempty"`
	TimeFormat                CurrentUser_Settings_TimeFormat                `protobuf:"varint,3,opt,name=time_format,json=timeFormat,enum=hiber.user.CurrentUser_Settings_TimeFormat" json:"time_format,omitempty"`
	DateFormat                CurrentUser_Settings_DateFormat                `protobuf:"varint,4,opt,name=date_format,json=dateFormat,enum=hiber.user.CurrentUser_Settings_DateFormat" json:"date_format,omitempty"`
	ThousandsSeparatorsFormat CurrentUser_Settings_ThousandsSeparatorsFormat `protobuf:"varint,5,opt,name=thousands_separators_format,json=thousandsSeparatorsFormat,enum=hiber.user.CurrentUser_Settings_ThousandsSeparatorsFormat" json:"thousands_separators_format,omitempty"`
}

func (m *CurrentUser_Settings) Reset()                    { *m = CurrentUser_Settings{} }
func (m *CurrentUser_Settings) String() string            { return proto.CompactTextString(m) }
func (*CurrentUser_Settings) ProtoMessage()               {}
func (*CurrentUser_Settings) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{0, 0} }

func (m *CurrentUser_Settings) GetLayout() CurrentUser_Settings_Layout {
	if m != nil {
		return m.Layout
	}
	return CurrentUser_Settings_DEFAULT_LAYOUT
}

func (m *CurrentUser_Settings) GetMapStyle() CurrentUser_Settings_MapStyle {
	if m != nil {
		return m.MapStyle
	}
	return CurrentUser_Settings_DEFAULT_MAP_STYLE
}

func (m *CurrentUser_Settings) GetTimeFormat() CurrentUser_Settings_TimeFormat {
	if m != nil {
		return m.TimeFormat
	}
	return CurrentUser_Settings_DEFAULT_TIME_FORMAT
}

func (m *CurrentUser_Settings) GetDateFormat() CurrentUser_Settings_DateFormat {
	if m != nil {
		return m.DateFormat
	}
	return CurrentUser_Settings_DEFAULT_DATE_FORMAT
}

func (m *CurrentUser_Settings) GetThousandsSeparatorsFormat() CurrentUser_Settings_ThousandsSeparatorsFormat {
	if m != nil {
		return m.ThousandsSeparatorsFormat
	}
	return CurrentUser_Settings_DEFAULT_THOUSANDS_SEPARATORS_FORMAT
}

// Get your personal data
type CurrentUserRequest struct {
}

func (m *CurrentUserRequest) Reset()                    { *m = CurrentUserRequest{} }
func (m *CurrentUserRequest) String() string            { return proto.CompactTextString(m) }
func (*CurrentUserRequest) ProtoMessage()               {}
func (*CurrentUserRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{1} }

// Request access to an organization by name, if it exists.
// You request will be saved and the organization owner notified.
// Organization admins can approve or reject your request.
type RequestAccessRequest struct {
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *RequestAccessRequest) Reset()                    { *m = RequestAccessRequest{} }
func (m *RequestAccessRequest) String() string            { return proto.CompactTextString(m) }
func (*RequestAccessRequest) ProtoMessage()               {}
func (*RequestAccessRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{2} }

func (m *RequestAccessRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type RequestAccessRequest_Response struct {
}

func (m *RequestAccessRequest_Response) Reset()         { *m = RequestAccessRequest_Response{} }
func (m *RequestAccessRequest_Response) String() string { return proto.CompactTextString(m) }
func (*RequestAccessRequest_Response) ProtoMessage()    {}
func (*RequestAccessRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{2, 0}
}

// Cancel a previously made access request.
type CancelAccessRequestRequest struct {
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *CancelAccessRequestRequest) Reset()                    { *m = CancelAccessRequestRequest{} }
func (m *CancelAccessRequestRequest) String() string            { return proto.CompactTextString(m) }
func (*CancelAccessRequestRequest) ProtoMessage()               {}
func (*CancelAccessRequestRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{3} }

func (m *CancelAccessRequestRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type CancelAccessRequestRequest_Response struct {
}

func (m *CancelAccessRequestRequest_Response) Reset()         { *m = CancelAccessRequestRequest_Response{} }
func (m *CancelAccessRequestRequest_Response) String() string { return proto.CompactTextString(m) }
func (*CancelAccessRequestRequest_Response) ProtoMessage()    {}
func (*CancelAccessRequestRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{3, 0}
}

// Delete yourself.
// Removes all login information and personal data, except for you email address for auditing purposes.
type DeleteCurrentUserRequest struct {
}

func (m *DeleteCurrentUserRequest) Reset()                    { *m = DeleteCurrentUserRequest{} }
func (m *DeleteCurrentUserRequest) String() string            { return proto.CompactTextString(m) }
func (*DeleteCurrentUserRequest) ProtoMessage()               {}
func (*DeleteCurrentUserRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{4} }

type DeleteCurrentUserRequest_Response struct {
}

func (m *DeleteCurrentUserRequest_Response) Reset()         { *m = DeleteCurrentUserRequest_Response{} }
func (m *DeleteCurrentUserRequest_Response) String() string { return proto.CompactTextString(m) }
func (*DeleteCurrentUserRequest_Response) ProtoMessage()    {}
func (*DeleteCurrentUserRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{4, 0}
}

// Set the default organization to use when it is not specified in the call.
// Note: this can be a child organization of one of the owned organizations.
type UpdateDefaultOrganizationRequest struct {
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
}

func (m *UpdateDefaultOrganizationRequest) Reset()         { *m = UpdateDefaultOrganizationRequest{} }
func (m *UpdateDefaultOrganizationRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateDefaultOrganizationRequest) ProtoMessage()    {}
func (*UpdateDefaultOrganizationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{5}
}

func (m *UpdateDefaultOrganizationRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

type UpdateDefaultOrganizationRequest_Response struct {
	DefaultOrganization string `protobuf:"bytes,1,opt,name=default_organization,json=defaultOrganization" json:"default_organization,omitempty"`
}

func (m *UpdateDefaultOrganizationRequest_Response) Reset() {
	*m = UpdateDefaultOrganizationRequest_Response{}
}
func (m *UpdateDefaultOrganizationRequest_Response) String() string { return proto.CompactTextString(m) }
func (*UpdateDefaultOrganizationRequest_Response) ProtoMessage()    {}
func (*UpdateDefaultOrganizationRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{5, 0}
}

func (m *UpdateDefaultOrganizationRequest_Response) GetDefaultOrganization() string {
	if m != nil {
		return m.DefaultOrganization
	}
	return ""
}

type UpdateSettingsRequest struct {
	UpdateSettings *CurrentUser_Settings `protobuf:"bytes,1,opt,name=update_settings,json=updateSettings" json:"update_settings,omitempty"`
}

func (m *UpdateSettingsRequest) Reset()                    { *m = UpdateSettingsRequest{} }
func (m *UpdateSettingsRequest) String() string            { return proto.CompactTextString(m) }
func (*UpdateSettingsRequest) ProtoMessage()               {}
func (*UpdateSettingsRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{6} }

func (m *UpdateSettingsRequest) GetUpdateSettings() *CurrentUser_Settings {
	if m != nil {
		return m.UpdateSettings
	}
	return nil
}

type UpdateSettingsRequest_Response struct {
	Settings *CurrentUser_Settings `protobuf:"bytes,1,opt,name=settings" json:"settings,omitempty"`
}

func (m *UpdateSettingsRequest_Response) Reset()         { *m = UpdateSettingsRequest_Response{} }
func (m *UpdateSettingsRequest_Response) String() string { return proto.CompactTextString(m) }
func (*UpdateSettingsRequest_Response) ProtoMessage()    {}
func (*UpdateSettingsRequest_Response) Descriptor() ([]byte, []int) {
	return fileDescriptor2, []int{6, 0}
}

func (m *UpdateSettingsRequest_Response) GetSettings() *CurrentUser_Settings {
	if m != nil {
		return m.Settings
	}
	return nil
}

func init() {
	proto.RegisterType((*CurrentUser)(nil), "hiber.user.CurrentUser")
	proto.RegisterType((*CurrentUser_Settings)(nil), "hiber.user.CurrentUser.Settings")
	proto.RegisterType((*CurrentUserRequest)(nil), "hiber.user.CurrentUserRequest")
	proto.RegisterType((*RequestAccessRequest)(nil), "hiber.user.RequestAccessRequest")
	proto.RegisterType((*RequestAccessRequest_Response)(nil), "hiber.user.RequestAccessRequest.Response")
	proto.RegisterType((*CancelAccessRequestRequest)(nil), "hiber.user.CancelAccessRequestRequest")
	proto.RegisterType((*CancelAccessRequestRequest_Response)(nil), "hiber.user.CancelAccessRequestRequest.Response")
	proto.RegisterType((*DeleteCurrentUserRequest)(nil), "hiber.user.DeleteCurrentUserRequest")
	proto.RegisterType((*DeleteCurrentUserRequest_Response)(nil), "hiber.user.DeleteCurrentUserRequest.Response")
	proto.RegisterType((*UpdateDefaultOrganizationRequest)(nil), "hiber.user.UpdateDefaultOrganizationRequest")
	proto.RegisterType((*UpdateDefaultOrganizationRequest_Response)(nil), "hiber.user.UpdateDefaultOrganizationRequest.Response")
	proto.RegisterType((*UpdateSettingsRequest)(nil), "hiber.user.UpdateSettingsRequest")
	proto.RegisterType((*UpdateSettingsRequest_Response)(nil), "hiber.user.UpdateSettingsRequest.Response")
	proto.RegisterEnum("hiber.user.CurrentUser_Settings_Layout", CurrentUser_Settings_Layout_name, CurrentUser_Settings_Layout_value)
	proto.RegisterEnum("hiber.user.CurrentUser_Settings_MapStyle", CurrentUser_Settings_MapStyle_name, CurrentUser_Settings_MapStyle_value)
	proto.RegisterEnum("hiber.user.CurrentUser_Settings_TimeFormat", CurrentUser_Settings_TimeFormat_name, CurrentUser_Settings_TimeFormat_value)
	proto.RegisterEnum("hiber.user.CurrentUser_Settings_DateFormat", CurrentUser_Settings_DateFormat_name, CurrentUser_Settings_DateFormat_value)
	proto.RegisterEnum("hiber.user.CurrentUser_Settings_ThousandsSeparatorsFormat", CurrentUser_Settings_ThousandsSeparatorsFormat_name, CurrentUser_Settings_ThousandsSeparatorsFormat_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for CurrentUserService service

type CurrentUserServiceClient interface {
	CurrentUser(ctx context.Context, in *CurrentUserRequest, opts ...grpc.CallOption) (*CurrentUser, error)
	RequestAccess(ctx context.Context, in *RequestAccessRequest, opts ...grpc.CallOption) (*RequestAccessRequest_Response, error)
	CancelAccessRequest(ctx context.Context, in *CancelAccessRequestRequest, opts ...grpc.CallOption) (*CancelAccessRequestRequest_Response, error)
	DeleteCurrentUser(ctx context.Context, in *DeleteCurrentUserRequest, opts ...grpc.CallOption) (*DeleteCurrentUserRequest_Response, error)
	UpdateDefaultOrganization(ctx context.Context, in *UpdateDefaultOrganizationRequest, opts ...grpc.CallOption) (*UpdateDefaultOrganizationRequest_Response, error)
	UpdateSettings(ctx context.Context, in *UpdateSettingsRequest, opts ...grpc.CallOption) (*UpdateSettingsRequest_Response, error)
}

type currentUserServiceClient struct {
	cc *grpc.ClientConn
}

func NewCurrentUserServiceClient(cc *grpc.ClientConn) CurrentUserServiceClient {
	return &currentUserServiceClient{cc}
}

func (c *currentUserServiceClient) CurrentUser(ctx context.Context, in *CurrentUserRequest, opts ...grpc.CallOption) (*CurrentUser, error) {
	out := new(CurrentUser)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/CurrentUser", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *currentUserServiceClient) RequestAccess(ctx context.Context, in *RequestAccessRequest, opts ...grpc.CallOption) (*RequestAccessRequest_Response, error) {
	out := new(RequestAccessRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/RequestAccess", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *currentUserServiceClient) CancelAccessRequest(ctx context.Context, in *CancelAccessRequestRequest, opts ...grpc.CallOption) (*CancelAccessRequestRequest_Response, error) {
	out := new(CancelAccessRequestRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/CancelAccessRequest", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *currentUserServiceClient) DeleteCurrentUser(ctx context.Context, in *DeleteCurrentUserRequest, opts ...grpc.CallOption) (*DeleteCurrentUserRequest_Response, error) {
	out := new(DeleteCurrentUserRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/DeleteCurrentUser", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *currentUserServiceClient) UpdateDefaultOrganization(ctx context.Context, in *UpdateDefaultOrganizationRequest, opts ...grpc.CallOption) (*UpdateDefaultOrganizationRequest_Response, error) {
	out := new(UpdateDefaultOrganizationRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/UpdateDefaultOrganization", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *currentUserServiceClient) UpdateSettings(ctx context.Context, in *UpdateSettingsRequest, opts ...grpc.CallOption) (*UpdateSettingsRequest_Response, error) {
	out := new(UpdateSettingsRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.user.CurrentUserService/UpdateSettings", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for CurrentUserService service

type CurrentUserServiceServer interface {
	CurrentUser(context.Context, *CurrentUserRequest) (*CurrentUser, error)
	RequestAccess(context.Context, *RequestAccessRequest) (*RequestAccessRequest_Response, error)
	CancelAccessRequest(context.Context, *CancelAccessRequestRequest) (*CancelAccessRequestRequest_Response, error)
	DeleteCurrentUser(context.Context, *DeleteCurrentUserRequest) (*DeleteCurrentUserRequest_Response, error)
	UpdateDefaultOrganization(context.Context, *UpdateDefaultOrganizationRequest) (*UpdateDefaultOrganizationRequest_Response, error)
	UpdateSettings(context.Context, *UpdateSettingsRequest) (*UpdateSettingsRequest_Response, error)
}

func RegisterCurrentUserServiceServer(s *grpc.Server, srv CurrentUserServiceServer) {
	s.RegisterService(&_CurrentUserService_serviceDesc, srv)
}

func _CurrentUserService_CurrentUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CurrentUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).CurrentUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/CurrentUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).CurrentUser(ctx, req.(*CurrentUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CurrentUserService_RequestAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RequestAccessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).RequestAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/RequestAccess",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).RequestAccess(ctx, req.(*RequestAccessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CurrentUserService_CancelAccessRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CancelAccessRequestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).CancelAccessRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/CancelAccessRequest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).CancelAccessRequest(ctx, req.(*CancelAccessRequestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CurrentUserService_DeleteCurrentUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteCurrentUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).DeleteCurrentUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/DeleteCurrentUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).DeleteCurrentUser(ctx, req.(*DeleteCurrentUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CurrentUserService_UpdateDefaultOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDefaultOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).UpdateDefaultOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/UpdateDefaultOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).UpdateDefaultOrganization(ctx, req.(*UpdateDefaultOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CurrentUserService_UpdateSettings_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateSettingsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CurrentUserServiceServer).UpdateSettings(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.user.CurrentUserService/UpdateSettings",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CurrentUserServiceServer).UpdateSettings(ctx, req.(*UpdateSettingsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _CurrentUserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.user.CurrentUserService",
	HandlerType: (*CurrentUserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CurrentUser",
			Handler:    _CurrentUserService_CurrentUser_Handler,
		},
		{
			MethodName: "RequestAccess",
			Handler:    _CurrentUserService_RequestAccess_Handler,
		},
		{
			MethodName: "CancelAccessRequest",
			Handler:    _CurrentUserService_CancelAccessRequest_Handler,
		},
		{
			MethodName: "DeleteCurrentUser",
			Handler:    _CurrentUserService_DeleteCurrentUser_Handler,
		},
		{
			MethodName: "UpdateDefaultOrganization",
			Handler:    _CurrentUserService_UpdateDefaultOrganization_Handler,
		},
		{
			MethodName: "UpdateSettings",
			Handler:    _CurrentUserService_UpdateSettings_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "currentuser.proto",
}

func init() { proto.RegisterFile("currentuser.proto", fileDescriptor2) }

var fileDescriptor2 = []byte{
	// 879 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x9c, 0x96, 0xdd, 0x6e, 0xe3, 0x44,
	0x14, 0xc7, 0xd7, 0x69, 0x93, 0x4d, 0x4e, 0xda, 0xd4, 0x9d, 0x76, 0x69, 0x6a, 0x24, 0x14, 0xcc,
	0x6a, 0xb7, 0xcb, 0x47, 0x10, 0x41, 0x2b, 0x04, 0x02, 0x21, 0x37, 0x76, 0x54, 0x0b, 0xbb, 0x8e,
	0xc6, 0xce, 0xae, 0x02, 0x48, 0xa3, 0x69, 0x32, 0xdb, 0x5a, 0x4a, 0x6c, 0x63, 0x4f, 0x90, 0x76,
	0xaf, 0xb8, 0xe1, 0x6d, 0x78, 0x00, 0x9e, 0x83, 0xa7, 0xe1, 0x12, 0xf9, 0x23, 0x8e, 0x4d, 0x6b,
	0xa5, 0xdd, 0xbb, 0x99, 0xf3, 0xf1, 0x3b, 0xc7, 0x67, 0xfe, 0x3d, 0x0d, 0x1c, 0xce, 0x56, 0x61,
	0xc8, 0x3c, 0xbe, 0x8a, 0x58, 0xd8, 0x0f, 0x42, 0x9f, 0xfb, 0x08, 0x6e, 0xdc, 0x2b, 0x16, 0xf6,
	0x63, 0x8b, 0xfc, 0x4f, 0x13, 0xda, 0xc3, 0x34, 0x62, 0x12, 0xb1, 0x10, 0x75, 0xa0, 0xe6, 0xce,
	0xbb, 0x42, 0x4f, 0x38, 0x6b, 0xe1, 0x9a, 0x3b, 0x47, 0xc7, 0x50, 0x67, 0x4b, 0xea, 0x2e, 0xba,
	0xb5, 0xc4, 0x94, 0x5e, 0x10, 0x82, 0x5d, 0x8f, 0x2e, 0x59, 0x77, 0x27, 0x31, 0x26, 0x67, 0xf4,
	0x14, 0xf6, 0xfd, 0xf0, 0x9a, 0x7a, 0xee, 0x3b, 0xca, 0x5d, 0xdf, 0x8b, 0xba, 0xbb, 0xbd, 0x9d,
	0xb3, 0x16, 0x2e, 0x1b, 0xd1, 0x57, 0x70, 0x3c, 0x67, 0x6f, 0xe8, 0x6a, 0xc1, 0x49, 0xd1, 0xd1,
	0xad, 0x27, 0xa4, 0xa3, 0xcc, 0x67, 0x15, 0x5c, 0xe8, 0x1b, 0x38, 0x09, 0xd9, 0x6f, 0x2b, 0x16,
	0x71, 0x36, 0x27, 0xe5, 0x12, 0x8d, 0xa4, 0xc4, 0x07, 0xb9, 0xdb, 0x2a, 0xd5, 0xfa, 0x1e, 0x9a,
	0x11, 0xe3, 0xdc, 0xf5, 0xae, 0xa3, 0xee, 0xe3, 0x9e, 0x70, 0xd6, 0x1e, 0xf4, 0xfa, 0x9b, 0x4f,
	0xef, 0x17, 0x3e, 0xbb, 0x6f, 0x67, 0x71, 0x38, 0xcf, 0x90, 0xfe, 0x6e, 0x40, 0x73, 0x6d, 0x46,
	0x3f, 0x42, 0x63, 0x41, 0xdf, 0xfa, 0x2b, 0x9e, 0x8c, 0xa6, 0x33, 0x78, 0xbe, 0x0d, 0xd4, 0x37,
	0x92, 0x70, 0x9c, 0xa5, 0xa1, 0x11, 0xb4, 0x96, 0x34, 0x20, 0x11, 0x7f, 0xbb, 0x60, 0xc9, 0x2c,
	0x3b, 0x83, 0x17, 0x5b, 0x19, 0x26, 0x0d, 0xec, 0x38, 0x01, 0x37, 0x97, 0xd9, 0x09, 0x19, 0xd0,
	0xe6, 0xee, 0x92, 0x91, 0x37, 0x7e, 0xb8, 0xa4, 0x3c, 0x79, 0x80, 0xce, 0xe0, 0xb3, 0xad, 0x24,
	0xc7, 0x5d, 0xb2, 0x51, 0x92, 0x82, 0x81, 0xe7, 0xe7, 0x98, 0x36, 0xa7, 0x3c, 0xa7, 0xed, 0xde,
	0x93, 0xa6, 0x52, 0x9e, 0xd3, 0xe6, 0xf9, 0x19, 0xbd, 0x83, 0x0f, 0xf9, 0x8d, 0xbf, 0x8a, 0xa8,
	0x37, 0x8f, 0x48, 0xc4, 0x02, 0x1a, 0x52, 0xee, 0x87, 0xd1, 0x9a, 0x5e, 0x4f, 0xe8, 0xdf, 0x6d,
	0xef, 0x75, 0xcd, 0xb0, 0x73, 0x44, 0x56, 0xec, 0x94, 0x57, 0xb9, 0xe4, 0x6f, 0xa1, 0x91, 0x4e,
	0x1c, 0x21, 0xe8, 0xa8, 0xda, 0x48, 0x99, 0x18, 0x0e, 0x31, 0x94, 0xa9, 0x35, 0x71, 0xc4, 0x47,
	0x68, 0x1f, 0x5a, 0x86, 0x72, 0xa9, 0xda, 0x43, 0x65, 0xac, 0x89, 0x02, 0xda, 0x83, 0xe6, 0xd8,
	0xc2, 0x0e, 0x56, 0x74, 0x47, 0xac, 0xc9, 0x16, 0x34, 0xd7, 0x83, 0x46, 0x4f, 0xe0, 0x70, 0x9d,
	0x6c, 0x2a, 0x63, 0x62, 0x3b, 0x53, 0x43, 0x4b, 0xf3, 0x6d, 0xc5, 0xd1, 0x0c, 0x43, 0x77, 0xe2,
	0x7c, 0x11, 0xf6, 0x2e, 0xf4, 0x73, 0x0d, 0x93, 0x57, 0xba, 0xad, 0x5b, 0x97, 0x62, 0x0d, 0xb5,
	0xe1, 0xf1, 0xd0, 0x50, 0x6c, 0x5b, 0x1f, 0x8a, 0x3b, 0xf2, 0x4f, 0x00, 0x9b, 0x79, 0xa3, 0x13,
	0x38, 0x5a, 0x23, 0x1d, 0xdd, 0xd4, 0xc8, 0xc8, 0xc2, 0xa6, 0x12, 0x37, 0x75, 0x04, 0x07, 0xce,
	0x6b, 0xed, 0xd2, 0x99, 0x8e, 0xac, 0x09, 0x26, 0x17, 0xd6, 0x04, 0x8b, 0x02, 0x3a, 0x80, 0xb6,
	0xf3, 0x5a, 0x33, 0x5e, 0x69, 0xa9, 0xa1, 0x26, 0x4f, 0x00, 0x36, 0xe3, 0x2e, 0xc2, 0x54, 0xc5,
	0x29, 0xc0, 0x3a, 0x00, 0xaa, 0x4a, 0x4c, 0x93, 0x4c, 0xa7, 0xd3, 0xa9, 0x28, 0xc4, 0x77, 0xd3,
	0x24, 0xaa, 0x9a, 0xde, 0x6b, 0xf1, 0x3d, 0x3e, 0x91, 0xc4, 0x28, 0xee, 0xc8, 0xbf, 0xc0, 0x69,
	0xe5, 0x9c, 0xd1, 0x73, 0xf8, 0x24, 0x6f, 0xf9, 0xc2, 0x9a, 0xd8, 0xf1, 0xe8, 0x88, 0xad, 0x8d,
	0x15, 0xac, 0x38, 0x16, 0xb6, 0x37, 0x55, 0x01, 0x1a, 0x63, 0x0d, 0xeb, 0x96, 0x2a, 0x0a, 0xa8,
	0x05, 0xf5, 0xa1, 0x65, 0x9a, 0x8a, 0x58, 0x93, 0x8f, 0x01, 0x15, 0x5e, 0x16, 0xa7, 0x7f, 0x9d,
	0xf2, 0x08, 0x8e, 0xb3, 0xa3, 0x32, 0x9b, 0xb1, 0x28, 0xca, 0x2e, 0x48, 0x86, 0xbd, 0xd2, 0x2a,
	0x48, 0x97, 0x4f, 0xc9, 0x26, 0x01, 0x34, 0x31, 0x8b, 0x02, 0xdf, 0x8b, 0x98, 0x6c, 0x80, 0x34,
	0xa4, 0xde, 0x8c, 0x2d, 0x4a, 0x98, 0xf7, 0xa5, 0x3d, 0x83, 0xae, 0xca, 0x16, 0x8c, 0xb3, 0xdb,
	0x1d, 0x97, 0xe2, 0xfe, 0x14, 0xa0, 0x37, 0x09, 0x62, 0xb5, 0xab, 0xb7, 0x77, 0xd4, 0x43, 0x8a,
	0xff, 0xb0, 0x81, 0x56, 0x6e, 0x43, 0xa1, 0x72, 0x1b, 0xca, 0x7f, 0x09, 0xf0, 0x24, 0xed, 0x23,
	0xdf, 0x59, 0x59, 0x71, 0x1d, 0x0e, 0x56, 0x89, 0x83, 0xe4, 0x5b, 0x4f, 0xb8, 0xe7, 0xd6, 0xeb,
	0xac, 0x4a, 0x44, 0xe9, 0xa2, 0xd0, 0x63, 0x71, 0x8b, 0x0a, 0x0f, 0xdd, 0xa2, 0x83, 0x7f, 0x77,
	0x4b, 0x5a, 0xb0, 0x59, 0xf8, 0xbb, 0x3b, 0x63, 0x68, 0x54, 0xfe, 0xaf, 0xf3, 0x51, 0x05, 0x71,
	0xfd, 0x10, 0x27, 0x15, 0x7e, 0xf4, 0x2b, 0xec, 0x97, 0x34, 0x85, 0x4a, 0xbd, 0xdd, 0x25, 0x37,
	0xe9, 0xc5, 0xb6, 0x88, 0x7e, 0xfe, 0xe9, 0x1e, 0x1c, 0xdd, 0xa1, 0x34, 0xf4, 0xac, 0xd4, 0x4d,
	0xa5, 0x14, 0xa5, 0x2f, 0xef, 0x17, 0xb7, 0xa9, 0x77, 0x03, 0x87, 0xb7, 0xb4, 0x88, 0x9e, 0x16,
	0x29, 0x95, 0x52, 0xfd, 0xe2, 0x3e, 0x51, 0x9b, 0x4a, 0x7f, 0x08, 0x70, 0x5a, 0xa9, 0x66, 0xf4,
	0x79, 0x11, 0xb6, 0x4d, 0xf4, 0xd2, 0xcb, 0x87, 0x44, 0x6f, 0x5a, 0x20, 0xd0, 0x29, 0xeb, 0x18,
	0x7d, 0x7c, 0x1b, 0xf4, 0x3f, 0x8d, 0x4b, 0x9f, 0x6e, 0x0d, 0xc9, 0x0b, 0x9c, 0xbf, 0x04, 0xe9,
	0x7a, 0xe1, 0x5f, 0xd1, 0x45, 0x96, 0x43, 0x03, 0xb7, 0x7f, 0x1d, 0x06, 0xb3, 0x24, 0xf9, 0xbc,
	0x53, 0x18, 0x8f, 0x12, 0xb8, 0xe3, 0x47, 0x3f, 0xd7, 0x93, 0xb0, 0xab, 0x46, 0xf2, 0x23, 0xe9,
	0xeb, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0xef, 0x67, 0xb6, 0xc2, 0x39, 0x09, 0x00, 0x00,
}
