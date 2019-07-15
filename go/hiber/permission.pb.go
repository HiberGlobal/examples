// Code generated by protoc-gen-go. DO NOT EDIT.
// source: permission.proto

package hiber

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// Permissions limit what a user can do through the API.
// By default, everyone who has access to an organization, can access:
// - organization data
// - dashboard (including the map, and message count for the past days, and any events they have access to)
// - tags
// - deleting tags, but only if they are allowed to update the modems and webhooks the tag is assigned to
//
// Events are filtered by permission, i.e. if you cannot access the users, you would not see user-related events.
// Requesting user-related events explicitly if you cannot access the users will return an error.
type OrganizationPermission int32

const (
	OrganizationPermission_PERMISSION_DEFAULT OrganizationPermission = 0
	// Create a new child organization.
	OrganizationPermission_ORGANIZATION_CREATE OrganizationPermission = 1
	// Update the organizations data, such as billing information, address, and contact.
	OrganizationPermission_ORGANIZATION_UPDATE OrganizationPermission = 2
	// Delete child organizations.
	// You cannot delete your own organization. To delete your organization, contact support.
	OrganizationPermission_ORGANIZATION_DELETE OrganizationPermission = 3
	// List modems, see their details and health
	OrganizationPermission_MODEMS OrganizationPermission = 10
	// Update modems, such as their peripherals, display name and tags. Includes MODEMS permission.
	OrganizationPermission_MODEMS_UPDATE OrganizationPermission = 11
	// Show and regenerate license keys. Includes MODEMS permission.
	OrganizationPermission_MODEMS_LICENSE_KEYS OrganizationPermission = 12
	// Read modem messages.
	OrganizationPermission_MODEM_MESSAGES OrganizationPermission = 15
	// Send modem messages using the TestingService. Does not include MODEMS or MESSAGES permission.
	OrganizationPermission_MODEM_MESSAGES_SEND_TEST_MESSAGES OrganizationPermission = 16
	// Send modem messages using real message sources (i.e. gateway). Does not include MODEMS or MESSAGES permission.
	OrganizationPermission_MODEM_MESSAGES_SEND_REAL_MESSAGES OrganizationPermission = 41
	// See modem transfers, inbound and outbound modems. Includes modems permission.
	OrganizationPermission_MODEM_TRANSFERS OrganizationPermission = 20
	// Transfer modems to another organization, cancel open transfers and send return transfers.
	// Includes modems_transfers permission.
	OrganizationPermission_MODEM_TRANSFERS_SEND OrganizationPermission = 21
	// Mark transfers as received, prepare modems for return. This does not include actually sending the return transfer.
	// Includes modems_transfers permission.
	OrganizationPermission_MODEM_TRANSFERS_PROCESS OrganizationPermission = 22
	// Claiming modems.
	OrganizationPermission_MODEM_CLAIM OrganizationPermission = 25
	// List all users, see their names and email addresses.
	OrganizationPermission_USERS OrganizationPermission = 30
	// Approve or create new users, remove users from the organization. Includes users permission.
	OrganizationPermission_USERS_MANAGE OrganizationPermission = 31
	// Manage publishers.
	OrganizationPermission_PUBLISHERS OrganizationPermission = 35
	// Manage tokens.
	OrganizationPermission_TOKENS OrganizationPermission = 36
	// Read and use uploaded certificates (i.e. for publishers).
	OrganizationPermission_CERTIFICATES OrganizationPermission = 38
	// Upload certificates, and update or delete uploaded certificates.
	OrganizationPermission_CERTIFICATES_MANAGE OrganizationPermission = 39
)

var OrganizationPermission_name = map[int32]string{
	0:  "PERMISSION_DEFAULT",
	1:  "ORGANIZATION_CREATE",
	2:  "ORGANIZATION_UPDATE",
	3:  "ORGANIZATION_DELETE",
	10: "MODEMS",
	11: "MODEMS_UPDATE",
	12: "MODEMS_LICENSE_KEYS",
	15: "MODEM_MESSAGES",
	16: "MODEM_MESSAGES_SEND_TEST_MESSAGES",
	41: "MODEM_MESSAGES_SEND_REAL_MESSAGES",
	20: "MODEM_TRANSFERS",
	21: "MODEM_TRANSFERS_SEND",
	22: "MODEM_TRANSFERS_PROCESS",
	25: "MODEM_CLAIM",
	30: "USERS",
	31: "USERS_MANAGE",
	35: "PUBLISHERS",
	36: "TOKENS",
	38: "CERTIFICATES",
	39: "CERTIFICATES_MANAGE",
}
var OrganizationPermission_value = map[string]int32{
	"PERMISSION_DEFAULT":                0,
	"ORGANIZATION_CREATE":               1,
	"ORGANIZATION_UPDATE":               2,
	"ORGANIZATION_DELETE":               3,
	"MODEMS":                            10,
	"MODEMS_UPDATE":                     11,
	"MODEMS_LICENSE_KEYS":               12,
	"MODEM_MESSAGES":                    15,
	"MODEM_MESSAGES_SEND_TEST_MESSAGES": 16,
	"MODEM_MESSAGES_SEND_REAL_MESSAGES": 41,
	"MODEM_TRANSFERS":                   20,
	"MODEM_TRANSFERS_SEND":              21,
	"MODEM_TRANSFERS_PROCESS":           22,
	"MODEM_CLAIM":                       25,
	"USERS":                             30,
	"USERS_MANAGE":                      31,
	"PUBLISHERS":                        35,
	"TOKENS":                            36,
	"CERTIFICATES":                      38,
	"CERTIFICATES_MANAGE":               39,
}

func (x OrganizationPermission) String() string {
	return proto.EnumName(OrganizationPermission_name, int32(x))
}
func (OrganizationPermission) EnumDescriptor() ([]byte, []int) { return fileDescriptor11, []int{0} }

type UserPermission int32

const (
	// Read your name, email, linked organizations and mission-control settings.
	UserPermission_READ UserPermission = 0
	// Update your personal information, mission-control settings and default organization. Includes read permission.
	UserPermission_UPDATE UserPermission = 1
	// Request access to an organization and cancel open requests. Does not include read permission.
	UserPermission_REQUEST_ACCESS UserPermission = 2
	// Delete your user account permanently. Includes read permission.
	UserPermission_DELETE UserPermission = 3
)

var UserPermission_name = map[int32]string{
	0: "READ",
	1: "UPDATE",
	2: "REQUEST_ACCESS",
	3: "DELETE",
}
var UserPermission_value = map[string]int32{
	"READ":           0,
	"UPDATE":         1,
	"REQUEST_ACCESS": 2,
	"DELETE":         3,
}

func (x UserPermission) String() string {
	return proto.EnumName(UserPermission_name, int32(x))
}
func (UserPermission) EnumDescriptor() ([]byte, []int) { return fileDescriptor11, []int{1} }

func init() {
	proto.RegisterEnum("hiber.OrganizationPermission", OrganizationPermission_name, OrganizationPermission_value)
	proto.RegisterEnum("hiber.UserPermission", UserPermission_name, UserPermission_value)
}

func init() { proto.RegisterFile("permission.proto", fileDescriptor11) }

var fileDescriptor11 = []byte{
	// 385 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0xc7, 0x9b, 0x96, 0x56, 0x30, 0x2d, 0xc9, 0x30, 0x6d, 0x53, 0x10, 0x12, 0x1f, 0xe2, 0x4b,
	0xf4, 0xe0, 0x0b, 0x4f, 0xb0, 0xb5, 0xc7, 0x61, 0x55, 0x7f, 0xb1, 0xb3, 0x3e, 0xd0, 0x8b, 0xe5,
	0xa0, 0x28, 0x58, 0x2a, 0xb1, 0xe5, 0xf4, 0xc4, 0x83, 0xf2, 0x3c, 0x68, 0xed, 0x86, 0x84, 0x44,
	0xbd, 0xad, 0xe6, 0xf7, 0x9b, 0xd1, 0xea, 0x3f, 0x03, 0xd8, 0xcc, 0xda, 0x5f, 0xd5, 0x72, 0x59,
	0xd5, 0x0b, 0xaf, 0x69, 0xeb, 0xbb, 0x9a, 0x0e, 0x7f, 0x56, 0xd3, 0x59, 0x7b, 0xf9, 0xe7, 0x00,
	0xc6, 0x69, 0x3b, 0x2f, 0x17, 0xd5, 0xef, 0xf2, 0xae, 0xaa, 0x17, 0xd9, 0x3f, 0x8f, 0xc6, 0x40,
	0x19, 0x9b, 0x58, 0x8b, 0xe8, 0x34, 0x29, 0x02, 0x0e, 0x55, 0x1e, 0x59, 0xdc, 0xa3, 0x0b, 0x38,
	0x4d, 0xcd, 0x44, 0x25, 0xfa, 0x46, 0x59, 0x47, 0x7c, 0xc3, 0xca, 0x32, 0x0e, 0x76, 0x40, 0x9e,
	0x05, 0x0e, 0xec, 0xef, 0x80, 0x80, 0x23, 0xb6, 0x8c, 0x07, 0x04, 0x70, 0x14, 0xa7, 0x01, 0xc7,
	0x82, 0x40, 0xcf, 0xe0, 0x69, 0xff, 0x5e, 0xf5, 0x1d, 0xbb, 0xbe, 0xfb, 0x52, 0xa4, 0x7d, 0x4e,
	0x84, 0x8b, 0x6b, 0xfe, 0x2e, 0x78, 0x42, 0x04, 0xc3, 0x0e, 0x14, 0x31, 0x8b, 0xa8, 0x09, 0x0b,
	0x8e, 0xe8, 0x03, 0xbc, 0xfd, 0xbf, 0x56, 0x08, 0x27, 0x41, 0x61, 0x59, 0xec, 0x5a, 0xc3, 0x87,
	0x34, 0xc3, 0x2a, 0x5a, 0x6b, 0x9f, 0xe9, 0x14, 0x46, 0xbd, 0x66, 0x8d, 0x4a, 0x24, 0x64, 0x23,
	0x78, 0x46, 0xcf, 0xe1, 0x6c, 0xab, 0xd8, 0x35, 0xe3, 0x39, 0xbd, 0x84, 0x8b, 0x6d, 0x92, 0x99,
	0xd4, 0x67, 0x11, 0x1c, 0xd3, 0x08, 0x8e, 0x7b, 0xe8, 0x47, 0x4a, 0xc7, 0xf8, 0x82, 0x9e, 0xc0,
	0x61, 0x2e, 0x6e, 0xe4, 0x2b, 0x42, 0x38, 0xe9, 0x9e, 0x45, 0xac, 0x12, 0x35, 0x61, 0x7c, 0x4d,
	0x43, 0x80, 0x2c, 0xbf, 0x8a, 0xb4, 0x7c, 0x75, 0xc6, 0x3b, 0x97, 0x91, 0x4d, 0xaf, 0x39, 0x11,
	0x7c, 0xef, 0x6c, 0x9f, 0x8d, 0xd5, 0xa1, 0xf6, 0x95, 0x65, 0xc1, 0x8f, 0x2e, 0xa2, 0xcd, 0xca,
	0x6a, 0xcc, 0xa7, 0xcb, 0x10, 0x86, 0xf9, 0x72, 0xd6, 0x6e, 0xec, 0xf3, 0x31, 0x3c, 0x32, 0xac,
	0x02, 0xdc, 0x73, 0x23, 0xef, 0x33, 0x1e, 0xb8, 0x28, 0x0d, 0x7f, 0xcb, 0x5d, 0x4a, 0xca, 0xef,
	0x3e, 0xbc, 0xef, 0xf8, 0x6a, 0x45, 0x57, 0x6f, 0xe0, 0x7c, 0x7e, 0x5b, 0x4f, 0xcb, 0x5b, 0xaf,
	0x3b, 0x18, 0xaf, 0x6c, 0x2a, 0x6f, 0xde, 0x36, 0x3f, 0xb2, 0xc1, 0x4d, 0x7f, 0x42, 0xd3, 0xa3,
	0xee, 0xa0, 0xbe, 0xfc, 0x0d, 0x00, 0x00, 0xff, 0xff, 0x82, 0xdf, 0x57, 0x60, 0x64, 0x02, 0x00,
	0x00,
}
