// Code generated by protoc-gen-go.
// source: permission.proto
// DO NOT EDIT!

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
	// 382 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x64, 0x92, 0x4d, 0x6f, 0xd3, 0x40,
	0x10, 0x86, 0x9b, 0x7e, 0xa9, 0x4c, 0x4b, 0x32, 0x4c, 0xdb, 0x14, 0x84, 0xc4, 0x77, 0x40, 0xea,
	0xc1, 0x17, 0x7e, 0xc1, 0xd6, 0x1e, 0x87, 0x55, 0xfd, 0xc5, 0xce, 0xfa, 0x40, 0x2f, 0x96, 0x83,
	0xa2, 0x60, 0xa9, 0xc4, 0x96, 0xd3, 0x13, 0xff, 0x8b, 0xff, 0x87, 0xd6, 0x6e, 0x20, 0x24, 0xb7,
	0xd5, 0xfb, 0xbc, 0x33, 0xda, 0x99, 0x79, 0x01, 0x9b, 0x79, 0xfb, 0xb3, 0x5a, 0xad, 0xaa, 0x7a,
	0xe9, 0x35, 0x6d, 0xfd, 0x50, 0xd3, 0xd1, 0x8f, 0x6a, 0x36, 0x6f, 0xaf, 0x7f, 0x1f, 0xc0, 0x38,
	0x6d, 0x17, 0xe5, 0xb2, 0xfa, 0x55, 0x3e, 0x54, 0xf5, 0x32, 0xfb, 0xeb, 0xa3, 0x31, 0x50, 0xc6,
	0x26, 0xd6, 0x22, 0x3a, 0x4d, 0x8a, 0x80, 0x43, 0x95, 0x47, 0x16, 0xf7, 0xe8, 0x0a, 0xce, 0x53,
	0x33, 0x55, 0x89, 0xbe, 0x53, 0xd6, 0x11, 0xdf, 0xb0, 0xb2, 0x8c, 0x83, 0x1d, 0x90, 0x67, 0x81,
	0x03, 0xfb, 0x3b, 0x20, 0xe0, 0x88, 0x2d, 0xe3, 0x01, 0x01, 0x1c, 0xc7, 0x69, 0xc0, 0xb1, 0x20,
	0xd0, 0x33, 0x78, 0xda, 0xbf, 0xd7, 0x75, 0xa7, 0xae, 0xee, 0x51, 0x8a, 0xb4, 0xcf, 0x89, 0x70,
	0x71, 0xcb, 0xdf, 0x04, 0xcf, 0x88, 0x60, 0xd8, 0x81, 0x22, 0x66, 0x11, 0x35, 0x65, 0xc1, 0x11,
	0x4d, 0xe0, 0xed, 0xff, 0x5a, 0x21, 0x9c, 0x04, 0x85, 0x65, 0xb1, 0xff, 0x6c, 0x48, 0xe7, 0x30,
	0xea, 0x6d, 0xd6, 0xa8, 0x44, 0x42, 0x36, 0x82, 0x17, 0xf4, 0x1c, 0x2e, 0xb6, 0xc4, 0xae, 0x18,
	0x2f, 0xe9, 0x25, 0x5c, 0x6d, 0x93, 0xcc, 0xa4, 0x3e, 0x8b, 0xe0, 0x98, 0x46, 0x70, 0xda, 0x43,
	0x3f, 0x52, 0x3a, 0xc6, 0x17, 0xf4, 0x04, 0x8e, 0x72, 0x71, 0x2d, 0x5f, 0x11, 0xc2, 0x59, 0xf7,
	0x2c, 0x62, 0x95, 0xa8, 0x29, 0xe3, 0x6b, 0x1a, 0x02, 0x64, 0xf9, 0x4d, 0xa4, 0xe5, 0x8b, 0x73,
	0xbc, 0x77, 0xc3, 0xdb, 0xf4, 0x96, 0x13, 0xc1, 0x0f, 0xce, 0xed, 0xb3, 0xb1, 0x3a, 0xd4, 0xbe,
	0xb2, 0x2c, 0xf8, 0xd1, 0xcd, 0xbe, 0xa9, 0xac, 0xdb, 0x7c, 0x7a, 0x77, 0x78, 0x32, 0xc1, 0xc9,
	0x75, 0x08, 0xc3, 0x7c, 0x35, 0x6f, 0x37, 0xce, 0x75, 0x02, 0x87, 0x86, 0x55, 0x80, 0x7b, 0xae,
	0xf1, 0xe3, 0x0a, 0x07, 0x6e, 0x53, 0x86, 0xbf, 0xe6, 0x6e, 0x09, 0xca, 0xef, 0xbe, 0xbd, 0xef,
	0xf8, 0xfa, 0x02, 0x37, 0x6f, 0xe0, 0x72, 0x71, 0x5f, 0xcf, 0xca, 0x7b, 0xaf, 0xcb, 0x83, 0x57,
	0x36, 0x95, 0xb7, 0x68, 0x9b, 0xef, 0xd9, 0xe0, 0xae, 0x4f, 0xc8, 0xec, 0xb8, 0xcb, 0xcb, 0xe7,
	0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xf9, 0xd0, 0xa7, 0x22, 0x43, 0x02, 0x00, 0x00,
}
