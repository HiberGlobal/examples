// Code generated by protoc-gen-go. DO NOT EDIT.
// source: map.proto

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

type TileMapRequest_Density int32

const (
	// Fills a tile with 8x8 icons.
	TileMapRequest_DEFAULT TileMapRequest_Density = 0
	// Fills a tile with 16x16 icons.
	TileMapRequest_DENSE TileMapRequest_Density = 1
	// Fills a tile with 4x4 icons.
	TileMapRequest_SPARSE TileMapRequest_Density = 2
)

var TileMapRequest_Density_name = map[int32]string{
	0: "DEFAULT",
	1: "DENSE",
	2: "SPARSE",
}
var TileMapRequest_Density_value = map[string]int32{
	"DEFAULT": 0,
	"DENSE":   1,
	"SPARSE":  2,
}

func (x TileMapRequest_Density) String() string {
	return proto.EnumName(TileMapRequest_Density_name, int32(x))
}
func (TileMapRequest_Density) EnumDescriptor() ([]byte, []int) { return fileDescriptor9, []int{3, 0} }

// The location of ground stations that receive the data sent from the satellite(s).
// Currently, ground station is just a marker on the map.
type GroundStation struct {
	Location *Location `protobuf:"bytes,1,opt,name=location" json:"location,omitempty"`
	Name     string    `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
}

func (m *GroundStation) Reset()                    { *m = GroundStation{} }
func (m *GroundStation) String() string            { return proto.CompactTextString(m) }
func (*GroundStation) ProtoMessage()               {}
func (*GroundStation) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{0} }

func (m *GroundStation) GetLocation() *Location {
	if m != nil {
		return m.Location
	}
	return nil
}

func (m *GroundStation) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type TileCoordinate struct {
	X int32 `protobuf:"varint,1,opt,name=x" json:"x,omitempty"`
	Y int32 `protobuf:"varint,2,opt,name=y" json:"y,omitempty"`
}

func (m *TileCoordinate) Reset()                    { *m = TileCoordinate{} }
func (m *TileCoordinate) String() string            { return proto.CompactTextString(m) }
func (*TileCoordinate) ProtoMessage()               {}
func (*TileCoordinate) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{1} }

func (m *TileCoordinate) GetX() int32 {
	if m != nil {
		return m.X
	}
	return 0
}

func (m *TileCoordinate) GetY() int32 {
	if m != nil {
		return m.Y
	}
	return 0
}

type MapTileItem struct {
	// Google maps tile coordinates, counted from the top left of the map.
	Tile *TileCoordinate `protobuf:"bytes,1,opt,name=tile" json:"tile,omitempty"`
	// Google maps in-tile coordinate, x axis, using a 256x256 grid in the tile.
	InTile *TileCoordinate `protobuf:"bytes,2,opt,name=in_tile,json=inTile" json:"in_tile,omitempty"`
	// The item is either a modem, or a group of modems.
	//
	// Types that are valid to be assigned to Modems:
	//	*MapTileItem_Modem_
	//	*MapTileItem_ModemGroup
	Modems isMapTileItem_Modems `protobuf_oneof:"modems"`
}

func (m *MapTileItem) Reset()                    { *m = MapTileItem{} }
func (m *MapTileItem) String() string            { return proto.CompactTextString(m) }
func (*MapTileItem) ProtoMessage()               {}
func (*MapTileItem) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{2} }

type isMapTileItem_Modems interface{ isMapTileItem_Modems() }

type MapTileItem_Modem_ struct {
	Modem *MapTileItem_Modem `protobuf:"bytes,3,opt,name=modem,oneof"`
}
type MapTileItem_ModemGroup struct {
	ModemGroup *MapTileItem_Group `protobuf:"bytes,4,opt,name=modem_group,json=modemGroup,oneof"`
}

func (*MapTileItem_Modem_) isMapTileItem_Modems()     {}
func (*MapTileItem_ModemGroup) isMapTileItem_Modems() {}

func (m *MapTileItem) GetModems() isMapTileItem_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *MapTileItem) GetTile() *TileCoordinate {
	if m != nil {
		return m.Tile
	}
	return nil
}

func (m *MapTileItem) GetInTile() *TileCoordinate {
	if m != nil {
		return m.InTile
	}
	return nil
}

func (m *MapTileItem) GetModem() *MapTileItem_Modem {
	if x, ok := m.GetModems().(*MapTileItem_Modem_); ok {
		return x.Modem
	}
	return nil
}

func (m *MapTileItem) GetModemGroup() *MapTileItem_Group {
	if x, ok := m.GetModems().(*MapTileItem_ModemGroup); ok {
		return x.ModemGroup
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*MapTileItem) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _MapTileItem_OneofMarshaler, _MapTileItem_OneofUnmarshaler, _MapTileItem_OneofSizer, []interface{}{
		(*MapTileItem_Modem_)(nil),
		(*MapTileItem_ModemGroup)(nil),
	}
}

func _MapTileItem_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*MapTileItem)
	// modems
	switch x := m.Modems.(type) {
	case *MapTileItem_Modem_:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Modem); err != nil {
			return err
		}
	case *MapTileItem_ModemGroup:
		b.EncodeVarint(4<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.ModemGroup); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("MapTileItem.Modems has unexpected type %T", x)
	}
	return nil
}

func _MapTileItem_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*MapTileItem)
	switch tag {
	case 3: // modems.modem
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(MapTileItem_Modem)
		err := b.DecodeMessage(msg)
		m.Modems = &MapTileItem_Modem_{msg}
		return true, err
	case 4: // modems.modem_group
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(MapTileItem_Group)
		err := b.DecodeMessage(msg)
		m.Modems = &MapTileItem_ModemGroup{msg}
		return true, err
	default:
		return false, nil
	}
}

func _MapTileItem_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*MapTileItem)
	// modems
	switch x := m.Modems.(type) {
	case *MapTileItem_Modem_:
		s := proto.Size(x.Modem)
		n += proto.SizeVarint(3<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *MapTileItem_ModemGroup:
		s := proto.Size(x.ModemGroup)
		n += proto.SizeVarint(4<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type MapTileItem_Modem struct {
	Number   string    `protobuf:"bytes,1,opt,name=number" json:"number,omitempty"`
	Location *Location `protobuf:"bytes,2,opt,name=location" json:"location,omitempty"`
}

func (m *MapTileItem_Modem) Reset()                    { *m = MapTileItem_Modem{} }
func (m *MapTileItem_Modem) String() string            { return proto.CompactTextString(m) }
func (*MapTileItem_Modem) ProtoMessage()               {}
func (*MapTileItem_Modem) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{2, 0} }

func (m *MapTileItem_Modem) GetNumber() string {
	if m != nil {
		return m.Number
	}
	return ""
}

func (m *MapTileItem_Modem) GetLocation() *Location {
	if m != nil {
		return m.Location
	}
	return nil
}

type MapTileItem_Group struct {
	Count int32 `protobuf:"varint,1,opt,name=count" json:"count,omitempty"`
	// Area that the group covers. Modems are somewhere in this area. More details can be requested from the modem list or by zooming in,
	Area *Area `protobuf:"bytes,2,opt,name=area" json:"area,omitempty"`
}

func (m *MapTileItem_Group) Reset()                    { *m = MapTileItem_Group{} }
func (m *MapTileItem_Group) String() string            { return proto.CompactTextString(m) }
func (*MapTileItem_Group) ProtoMessage()               {}
func (*MapTileItem_Group) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{2, 1} }

func (m *MapTileItem_Group) GetCount() int32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *MapTileItem_Group) GetArea() *Area {
	if m != nil {
		return m.Area
	}
	return nil
}

type TileMapRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	// Visible part of the map.
	Selection *LocationSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
	// Google Maps zoom level
	Level int32 `protobuf:"varint,3,opt,name=level" json:"level,omitempty"`
	// Selection to filter the modems on the map.
	ModemSelection *ModemSelection `protobuf:"bytes,4,opt,name=modem_selection,json=modemSelection" json:"modem_selection,omitempty"`
	// Whether to fill the "satellites" field in the Response.
	IncludeSatellites bool `protobuf:"varint,5,opt,name=include_satellites,json=includeSatellites" json:"include_satellites,omitempty"`
	// Whether to fill the "ground_stations" field in the Response.
	IncludeGroundStations bool `protobuf:"varint,6,opt,name=include_ground_stations,json=includeGroundStations" json:"include_ground_stations,omitempty"`
	// The icon density on the map.
	Density TileMapRequest_Density `protobuf:"varint,7,opt,name=density,enum=hiber.map.TileMapRequest_Density" json:"density,omitempty"`
	// Whether to include any modems from child organizations.
	ChildOrganizations *Filter_ChildOrganizations `protobuf:"bytes,8,opt,name=child_organizations,json=childOrganizations" json:"child_organizations,omitempty"`
}

func (m *TileMapRequest) Reset()                    { *m = TileMapRequest{} }
func (m *TileMapRequest) String() string            { return proto.CompactTextString(m) }
func (*TileMapRequest) ProtoMessage()               {}
func (*TileMapRequest) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{3} }

func (m *TileMapRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *TileMapRequest) GetSelection() *LocationSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

func (m *TileMapRequest) GetLevel() int32 {
	if m != nil {
		return m.Level
	}
	return 0
}

func (m *TileMapRequest) GetModemSelection() *ModemSelection {
	if m != nil {
		return m.ModemSelection
	}
	return nil
}

func (m *TileMapRequest) GetIncludeSatellites() bool {
	if m != nil {
		return m.IncludeSatellites
	}
	return false
}

func (m *TileMapRequest) GetIncludeGroundStations() bool {
	if m != nil {
		return m.IncludeGroundStations
	}
	return false
}

func (m *TileMapRequest) GetDensity() TileMapRequest_Density {
	if m != nil {
		return m.Density
	}
	return TileMapRequest_DEFAULT
}

func (m *TileMapRequest) GetChildOrganizations() *Filter_ChildOrganizations {
	if m != nil {
		return m.ChildOrganizations
	}
	return nil
}

type TileMapRequest_Response struct {
	GroundStations []*GroundStation `protobuf:"bytes,1,rep,name=ground_stations,json=groundStations" json:"ground_stations,omitempty"`
	MapItems       []*MapTileItem   `protobuf:"bytes,2,rep,name=map_items,json=mapItems" json:"map_items,omitempty"`
	Request        *TileMapRequest  `protobuf:"bytes,4,opt,name=request" json:"request,omitempty"`
	Satellites     []*Satellite     `protobuf:"bytes,5,rep,name=satellites" json:"satellites,omitempty"`
}

func (m *TileMapRequest_Response) Reset()                    { *m = TileMapRequest_Response{} }
func (m *TileMapRequest_Response) String() string            { return proto.CompactTextString(m) }
func (*TileMapRequest_Response) ProtoMessage()               {}
func (*TileMapRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{3, 0} }

func (m *TileMapRequest_Response) GetGroundStations() []*GroundStation {
	if m != nil {
		return m.GroundStations
	}
	return nil
}

func (m *TileMapRequest_Response) GetMapItems() []*MapTileItem {
	if m != nil {
		return m.MapItems
	}
	return nil
}

func (m *TileMapRequest_Response) GetRequest() *TileMapRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *TileMapRequest_Response) GetSatellites() []*Satellite {
	if m != nil {
		return m.Satellites
	}
	return nil
}

// This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
// It will be removed in a future version.
type Satellite struct {
	Id        int32                 `protobuf:"varint,1,opt,name=id" json:"id,omitempty"`
	Name      string                `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Positions []*Satellite_Position `protobuf:"bytes,3,rep,name=positions" json:"positions,omitempty"`
}

func (m *Satellite) Reset()                    { *m = Satellite{} }
func (m *Satellite) String() string            { return proto.CompactTextString(m) }
func (*Satellite) ProtoMessage()               {}
func (*Satellite) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{4} }

func (m *Satellite) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Satellite) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Satellite) GetPositions() []*Satellite_Position {
	if m != nil {
		return m.Positions
	}
	return nil
}

type Satellite_Position struct {
	Time     *Timestamp `protobuf:"bytes,1,opt,name=time" json:"time,omitempty"`
	Location *Location  `protobuf:"bytes,2,opt,name=location" json:"location,omitempty"`
}

func (m *Satellite_Position) Reset()                    { *m = Satellite_Position{} }
func (m *Satellite_Position) String() string            { return proto.CompactTextString(m) }
func (*Satellite_Position) ProtoMessage()               {}
func (*Satellite_Position) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{4, 0} }

func (m *Satellite_Position) GetTime() *Timestamp {
	if m != nil {
		return m.Time
	}
	return nil
}

func (m *Satellite_Position) GetLocation() *Location {
	if m != nil {
		return m.Location
	}
	return nil
}

// This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
// It will be removed in a future version.
type SatellitesRequest struct {
}

func (m *SatellitesRequest) Reset()                    { *m = SatellitesRequest{} }
func (m *SatellitesRequest) String() string            { return proto.CompactTextString(m) }
func (*SatellitesRequest) ProtoMessage()               {}
func (*SatellitesRequest) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{5} }

type SatellitesRequest_Response struct {
	Satellites []*Satellite `protobuf:"bytes,1,rep,name=satellites" json:"satellites,omitempty"`
}

func (m *SatellitesRequest_Response) Reset()                    { *m = SatellitesRequest_Response{} }
func (m *SatellitesRequest_Response) String() string            { return proto.CompactTextString(m) }
func (*SatellitesRequest_Response) ProtoMessage()               {}
func (*SatellitesRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{5, 0} }

func (m *SatellitesRequest_Response) GetSatellites() []*Satellite {
	if m != nil {
		return m.Satellites
	}
	return nil
}

// Selection object for map data. Filter modems on the map by id, (child)organization.
// Also, filter the map data by level and area restriction, to only display a small area at a detailed map level.
//
// This message has been deprecated in favour of the LocationSelection, to separate the location filtering from level
// and data filtering.
type MapSelection struct {
	Modems *Filter_Modems                 `protobuf:"bytes,1,opt,name=modems" json:"modems,omitempty"`
	Level  int32                          `protobuf:"varint,3,opt,name=level" json:"level,omitempty"`
	Area   *MapSelection_AreaRestriction  `protobuf:"bytes,4,opt,name=area" json:"area,omitempty"`
	Shape  *MapSelection_ShapeRestriction `protobuf:"bytes,5,opt,name=shape" json:"shape,omitempty"`
}

func (m *MapSelection) Reset()                    { *m = MapSelection{} }
func (m *MapSelection) String() string            { return proto.CompactTextString(m) }
func (*MapSelection) ProtoMessage()               {}
func (*MapSelection) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{6} }

func (m *MapSelection) GetModems() *Filter_Modems {
	if m != nil {
		return m.Modems
	}
	return nil
}

func (m *MapSelection) GetLevel() int32 {
	if m != nil {
		return m.Level
	}
	return 0
}

func (m *MapSelection) GetArea() *MapSelection_AreaRestriction {
	if m != nil {
		return m.Area
	}
	return nil
}

func (m *MapSelection) GetShape() *MapSelection_ShapeRestriction {
	if m != nil {
		return m.Shape
	}
	return nil
}

type MapSelection_AreaRestriction struct {
	BottomLeft *Location `protobuf:"bytes,1,opt,name=bottom_left,json=bottomLeft" json:"bottom_left,omitempty"`
	TopRight   *Location `protobuf:"bytes,2,opt,name=top_right,json=topRight" json:"top_right,omitempty"`
}

func (m *MapSelection_AreaRestriction) Reset()                    { *m = MapSelection_AreaRestriction{} }
func (m *MapSelection_AreaRestriction) String() string            { return proto.CompactTextString(m) }
func (*MapSelection_AreaRestriction) ProtoMessage()               {}
func (*MapSelection_AreaRestriction) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{6, 0} }

func (m *MapSelection_AreaRestriction) GetBottomLeft() *Location {
	if m != nil {
		return m.BottomLeft
	}
	return nil
}

func (m *MapSelection_AreaRestriction) GetTopRight() *Location {
	if m != nil {
		return m.TopRight
	}
	return nil
}

type MapSelection_ShapeRestriction struct {
	Path []*Location `protobuf:"bytes,1,rep,name=path" json:"path,omitempty"`
}

func (m *MapSelection_ShapeRestriction) Reset()         { *m = MapSelection_ShapeRestriction{} }
func (m *MapSelection_ShapeRestriction) String() string { return proto.CompactTextString(m) }
func (*MapSelection_ShapeRestriction) ProtoMessage()    {}
func (*MapSelection_ShapeRestriction) Descriptor() ([]byte, []int) {
	return fileDescriptor9, []int{6, 1}
}

func (m *MapSelection_ShapeRestriction) GetPath() []*Location {
	if m != nil {
		return m.Path
	}
	return nil
}

// Map block that specifies a modem count in a specific area, bounded by a latitude / longitude 'square' (not really a
// square, since the earth is not flat).
//
// This message has been deprecated in favour of the MapTileItem.
type MapBlock struct {
	Area            *Area   `protobuf:"bytes,1,opt,name=area" json:"area,omitempty"`
	ModemCount      int32   `protobuf:"varint,2,opt,name=modem_count,json=modemCount" json:"modem_count,omitempty"`
	ErrorCount      int32   `protobuf:"varint,3,opt,name=error_count,json=errorCount" json:"error_count,omitempty"`
	ErrorPercentage float32 `protobuf:"fixed32,4,opt,name=error_percentage,json=errorPercentage" json:"error_percentage,omitempty"`
}

func (m *MapBlock) Reset()                    { *m = MapBlock{} }
func (m *MapBlock) String() string            { return proto.CompactTextString(m) }
func (*MapBlock) ProtoMessage()               {}
func (*MapBlock) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{7} }

func (m *MapBlock) GetArea() *Area {
	if m != nil {
		return m.Area
	}
	return nil
}

func (m *MapBlock) GetModemCount() int32 {
	if m != nil {
		return m.ModemCount
	}
	return 0
}

func (m *MapBlock) GetErrorCount() int32 {
	if m != nil {
		return m.ErrorCount
	}
	return 0
}

func (m *MapBlock) GetErrorPercentage() float32 {
	if m != nil {
		return m.ErrorPercentage
	}
	return 0
}

// This message has been deprecated in favour of the TileMapRequest, which is significantly faster.
type MapRequest struct {
	// Pick the organization to use (/impersonate). If unset, your default organization is used.
	Organization string        `protobuf:"bytes,1,opt,name=organization" json:"organization,omitempty"`
	Selection    *MapSelection `protobuf:"bytes,2,opt,name=selection" json:"selection,omitempty"`
}

func (m *MapRequest) Reset()                    { *m = MapRequest{} }
func (m *MapRequest) String() string            { return proto.CompactTextString(m) }
func (*MapRequest) ProtoMessage()               {}
func (*MapRequest) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{8} }

func (m *MapRequest) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *MapRequest) GetSelection() *MapSelection {
	if m != nil {
		return m.Selection
	}
	return nil
}

type MapRequest_Response struct {
	GroundStations []*GroundStation `protobuf:"bytes,1,rep,name=ground_stations,json=groundStations" json:"ground_stations,omitempty"`
	MapBlocks      []*MapBlock      `protobuf:"bytes,2,rep,name=map_blocks,json=mapBlocks" json:"map_blocks,omitempty"`
	Request        *MapRequest      `protobuf:"bytes,4,opt,name=request" json:"request,omitempty"`
	Satellites     []*Satellite     `protobuf:"bytes,5,rep,name=satellites" json:"satellites,omitempty"`
}

func (m *MapRequest_Response) Reset()                    { *m = MapRequest_Response{} }
func (m *MapRequest_Response) String() string            { return proto.CompactTextString(m) }
func (*MapRequest_Response) ProtoMessage()               {}
func (*MapRequest_Response) Descriptor() ([]byte, []int) { return fileDescriptor9, []int{8, 0} }

func (m *MapRequest_Response) GetGroundStations() []*GroundStation {
	if m != nil {
		return m.GroundStations
	}
	return nil
}

func (m *MapRequest_Response) GetMapBlocks() []*MapBlock {
	if m != nil {
		return m.MapBlocks
	}
	return nil
}

func (m *MapRequest_Response) GetRequest() *MapRequest {
	if m != nil {
		return m.Request
	}
	return nil
}

func (m *MapRequest_Response) GetSatellites() []*Satellite {
	if m != nil {
		return m.Satellites
	}
	return nil
}

func init() {
	proto.RegisterType((*GroundStation)(nil), "hiber.map.GroundStation")
	proto.RegisterType((*TileCoordinate)(nil), "hiber.map.TileCoordinate")
	proto.RegisterType((*MapTileItem)(nil), "hiber.map.MapTileItem")
	proto.RegisterType((*MapTileItem_Modem)(nil), "hiber.map.MapTileItem.Modem")
	proto.RegisterType((*MapTileItem_Group)(nil), "hiber.map.MapTileItem.Group")
	proto.RegisterType((*TileMapRequest)(nil), "hiber.map.TileMapRequest")
	proto.RegisterType((*TileMapRequest_Response)(nil), "hiber.map.TileMapRequest.Response")
	proto.RegisterType((*Satellite)(nil), "hiber.map.Satellite")
	proto.RegisterType((*Satellite_Position)(nil), "hiber.map.Satellite.Position")
	proto.RegisterType((*SatellitesRequest)(nil), "hiber.map.SatellitesRequest")
	proto.RegisterType((*SatellitesRequest_Response)(nil), "hiber.map.SatellitesRequest.Response")
	proto.RegisterType((*MapSelection)(nil), "hiber.map.MapSelection")
	proto.RegisterType((*MapSelection_AreaRestriction)(nil), "hiber.map.MapSelection.AreaRestriction")
	proto.RegisterType((*MapSelection_ShapeRestriction)(nil), "hiber.map.MapSelection.ShapeRestriction")
	proto.RegisterType((*MapBlock)(nil), "hiber.map.MapBlock")
	proto.RegisterType((*MapRequest)(nil), "hiber.map.MapRequest")
	proto.RegisterType((*MapRequest_Response)(nil), "hiber.map.MapRequest.Response")
	proto.RegisterEnum("hiber.map.TileMapRequest_Density", TileMapRequest_Density_name, TileMapRequest_Density_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for MapService service

type MapServiceClient interface {
	TileMap(ctx context.Context, in *TileMapRequest, opts ...grpc.CallOption) (*TileMapRequest_Response, error)
	// This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
	// It will be removed in a future version.
	Satellites(ctx context.Context, in *SatellitesRequest, opts ...grpc.CallOption) (*SatellitesRequest_Response, error)
	// This is the old map request. It has been deprecated and will be removed in a future version.
	Map(ctx context.Context, in *MapRequest, opts ...grpc.CallOption) (*MapRequest_Response, error)
}

type mapServiceClient struct {
	cc *grpc.ClientConn
}

func NewMapServiceClient(cc *grpc.ClientConn) MapServiceClient {
	return &mapServiceClient{cc}
}

func (c *mapServiceClient) TileMap(ctx context.Context, in *TileMapRequest, opts ...grpc.CallOption) (*TileMapRequest_Response, error) {
	out := new(TileMapRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.map.MapService/TileMap", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mapServiceClient) Satellites(ctx context.Context, in *SatellitesRequest, opts ...grpc.CallOption) (*SatellitesRequest_Response, error) {
	out := new(SatellitesRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.map.MapService/Satellites", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mapServiceClient) Map(ctx context.Context, in *MapRequest, opts ...grpc.CallOption) (*MapRequest_Response, error) {
	out := new(MapRequest_Response)
	err := grpc.Invoke(ctx, "/hiber.map.MapService/Map", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for MapService service

type MapServiceServer interface {
	TileMap(context.Context, *TileMapRequest) (*TileMapRequest_Response, error)
	// This call has been deprecated in favour of the Path (ListSatellitesPathRequest) call in SatelliteService.
	// It will be removed in a future version.
	Satellites(context.Context, *SatellitesRequest) (*SatellitesRequest_Response, error)
	// This is the old map request. It has been deprecated and will be removed in a future version.
	Map(context.Context, *MapRequest) (*MapRequest_Response, error)
}

func RegisterMapServiceServer(s *grpc.Server, srv MapServiceServer) {
	s.RegisterService(&_MapService_serviceDesc, srv)
}

func _MapService_TileMap_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TileMapRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MapServiceServer).TileMap(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.map.MapService/TileMap",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MapServiceServer).TileMap(ctx, req.(*TileMapRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MapService_Satellites_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SatellitesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MapServiceServer).Satellites(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.map.MapService/Satellites",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MapServiceServer).Satellites(ctx, req.(*SatellitesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MapService_Map_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MapRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MapServiceServer).Map(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hiber.map.MapService/Map",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MapServiceServer).Map(ctx, req.(*MapRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MapService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hiber.map.MapService",
	HandlerType: (*MapServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TileMap",
			Handler:    _MapService_TileMap_Handler,
		},
		{
			MethodName: "Satellites",
			Handler:    _MapService_Satellites_Handler,
		},
		{
			MethodName: "Map",
			Handler:    _MapService_Map_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "map.proto",
}

func init() { proto.RegisterFile("map.proto", fileDescriptor9) }

var fileDescriptor9 = []byte{
	// 1080 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x56, 0x5b, 0x6f, 0x1b, 0x45,
	0x14, 0xce, 0xae, 0xbd, 0xbe, 0x1c, 0x87, 0xc4, 0x9d, 0xa6, 0xed, 0x66, 0x29, 0xd4, 0x2c, 0x20,
	0x82, 0x48, 0x0c, 0x72, 0x4b, 0x91, 0x88, 0x54, 0x70, 0x2e, 0x25, 0xa0, 0x18, 0xc2, 0x38, 0x20,
	0x81, 0x84, 0xac, 0xb1, 0x3d, 0x75, 0x46, 0xec, 0x65, 0xba, 0x3b, 0xae, 0x1a, 0xde, 0x91, 0xf8,
	0x11, 0xfc, 0x27, 0xfe, 0x00, 0xe2, 0x99, 0x17, 0x1e, 0xf8, 0x05, 0xa0, 0xb9, 0x78, 0xbd, 0xeb,
	0xd8, 0xbd, 0x48, 0x7d, 0xdb, 0x39, 0xf3, 0x7d, 0xc7, 0x67, 0xbe, 0x73, 0x33, 0xd4, 0x43, 0xc2,
	0xdb, 0x3c, 0x89, 0x45, 0x8c, 0xea, 0x17, 0x6c, 0x48, 0x93, 0x76, 0x48, 0xb8, 0x07, 0x43, 0x92,
	0x52, 0x6d, 0xf6, 0x1a, 0x61, 0x3c, 0xa6, 0xa1, 0x3e, 0xf8, 0x67, 0xf0, 0xda, 0x17, 0x49, 0x3c,
	0x8d, 0xc6, 0x7d, 0x41, 0x04, 0x8b, 0x23, 0xf4, 0x01, 0xd4, 0x82, 0x78, 0xa4, 0xbe, 0x5d, 0xab,
	0x65, 0xed, 0x34, 0x3a, 0x9b, 0x6d, 0xed, 0xe7, 0xd4, 0x98, 0x71, 0x06, 0x40, 0x08, 0xca, 0x11,
	0x09, 0xa9, 0x6b, 0xb7, 0xac, 0x9d, 0x3a, 0x56, 0xdf, 0xfe, 0x2e, 0x6c, 0x9c, 0xb3, 0x80, 0x1e,
	0xc6, 0x71, 0x32, 0x66, 0x11, 0x11, 0x14, 0xad, 0x83, 0xf5, 0x54, 0xf9, 0x72, 0xb0, 0xf5, 0x54,
	0x9e, 0x2e, 0x15, 0xc1, 0xc1, 0xd6, 0xa5, 0xff, 0x9f, 0x0d, 0x8d, 0x1e, 0xe1, 0x92, 0xf1, 0xa5,
	0xa0, 0x21, 0xda, 0x83, 0xb2, 0x60, 0x01, 0x35, 0x3f, 0xbd, 0xdd, 0xce, 0x9e, 0xd0, 0x2e, 0x3a,
	0xc5, 0x0a, 0x86, 0x3a, 0x50, 0x65, 0xd1, 0x40, 0x31, 0xec, 0xe7, 0x31, 0x2a, 0x2c, 0x92, 0x16,
	0x74, 0x0f, 0x1c, 0xa5, 0x80, 0x5b, 0x52, 0x8c, 0xdb, 0x39, 0x46, 0x2e, 0x92, 0x76, 0x4f, 0x62,
	0x4e, 0xd6, 0xb0, 0x06, 0xa3, 0xcf, 0x40, 0xeb, 0x36, 0x98, 0x24, 0xf1, 0x94, 0xbb, 0xe5, 0x67,
	0x72, 0xa5, 0xa4, 0xfc, 0x64, 0x0d, 0x83, 0xa2, 0xa8, 0x93, 0x77, 0x0a, 0x8e, 0x72, 0x89, 0x6e,
	0x42, 0x25, 0x9a, 0x86, 0x43, 0x9a, 0xa8, 0x47, 0xd6, 0xb1, 0x39, 0x15, 0x94, 0xb7, 0x9f, 0xa3,
	0xbc, 0xf7, 0x00, 0x1c, 0xe5, 0x16, 0x6d, 0x81, 0x33, 0x8a, 0xa7, 0x91, 0x30, 0x02, 0xeb, 0x03,
	0xba, 0x03, 0x65, 0x92, 0x50, 0x62, 0xfc, 0x34, 0x8c, 0x9f, 0x6e, 0x42, 0x09, 0x56, 0x17, 0x07,
	0x35, 0xa8, 0xa8, 0xd8, 0x52, 0xff, 0x2f, 0x47, 0x27, 0xac, 0x47, 0x38, 0xa6, 0x8f, 0xa7, 0x34,
	0x15, 0xc8, 0x87, 0xf5, 0x38, 0x99, 0x90, 0x88, 0xfd, 0x32, 0xaf, 0x83, 0x3a, 0x2e, 0xd8, 0xd0,
	0x7d, 0xa8, 0xa7, 0x34, 0xa0, 0xa3, 0x5c, 0xb8, 0xee, 0x42, 0xb8, 0xfd, 0xd9, 0x3d, 0x9e, 0x43,
	0x65, 0xbc, 0x01, 0x7d, 0x42, 0x03, 0xa5, 0xbe, 0x83, 0xf5, 0x01, 0x1d, 0xc1, 0xa6, 0x56, 0x77,
	0xee, 0x53, 0x2b, 0xfc, 0xfa, 0x4c, 0x61, 0x55, 0xb3, 0x4a, 0xc0, 0xb9, 0xdb, 0x8d, 0xb0, 0x70,
	0x46, 0x7b, 0x80, 0x58, 0x34, 0x0a, 0xa6, 0x63, 0x3a, 0x48, 0x89, 0xa0, 0x41, 0xc0, 0x04, 0x4d,
	0x5d, 0xa7, 0x65, 0xed, 0xd4, 0xf0, 0x35, 0x73, 0xd3, 0xcf, 0x2e, 0xd0, 0x7d, 0xb8, 0x35, 0x83,
	0x4f, 0x54, 0x0f, 0x0c, 0x52, 0xdd, 0x04, 0xa9, 0x5b, 0x51, 0x9c, 0x1b, 0xe6, 0xba, 0xd0, 0x21,
	0x29, 0xda, 0x87, 0xea, 0x98, 0x46, 0x29, 0x13, 0x97, 0x6e, 0xb5, 0x65, 0xed, 0x6c, 0x74, 0xde,
	0x5a, 0x28, 0xba, 0xb9, 0x94, 0xed, 0x23, 0x0d, 0xc4, 0x33, 0x06, 0xfa, 0x16, 0xae, 0x8f, 0x2e,
	0x58, 0x30, 0x1e, 0xe4, 0xd5, 0x4c, 0xdd, 0x9a, 0x7a, 0x6d, 0xcb, 0x38, 0x7a, 0xc8, 0x02, 0x41,
	0x93, 0xf6, 0xa1, 0x04, 0x7e, 0x93, 0xc7, 0x61, 0x34, 0xba, 0x62, 0xf3, 0xfe, 0xb1, 0xa0, 0x86,
	0x69, 0xca, 0xe3, 0x28, 0xa5, 0xa8, 0x0b, 0x9b, 0x8b, 0x8f, 0xb1, 0x5a, 0xa5, 0x5c, 0x76, 0x64,
	0x90, 0x85, 0x07, 0xe1, 0x8d, 0x49, 0xf1, 0x7d, 0x77, 0xd5, 0x10, 0x19, 0x30, 0x41, 0xc3, 0xd4,
	0xb5, 0x15, 0xf9, 0xe6, 0xf2, 0x42, 0xc7, 0xb5, 0x90, 0x70, 0xf9, 0x21, 0x49, 0xd5, 0x44, 0xbf,
	0xd9, 0x64, 0x6e, 0x7b, 0xa5, 0x28, 0x78, 0x86, 0x44, 0xf7, 0x00, 0x0a, 0x89, 0x92, 0x3f, 0xb5,
	0x95, 0xe3, 0x65, 0xc9, 0xc2, 0x39, 0x9c, 0xbf, 0x07, 0x55, 0x23, 0x2b, 0x6a, 0x40, 0xf5, 0xe8,
	0xf8, 0x61, 0xf7, 0xbb, 0xd3, 0xf3, 0xe6, 0x1a, 0xaa, 0x83, 0x73, 0x74, 0xfc, 0x75, 0xff, 0xb8,
	0x69, 0x21, 0x80, 0x4a, 0xff, 0xac, 0x8b, 0xfb, 0xc7, 0x4d, 0xdb, 0xff, 0xc3, 0x82, 0x7a, 0xe6,
	0x08, 0x6d, 0x80, 0xcd, 0xc6, 0xa6, 0x59, 0x6c, 0x36, 0x5e, 0x36, 0xc2, 0xd0, 0x3e, 0xd4, 0x79,
	0x9c, 0x32, 0xad, 0x5e, 0x49, 0x45, 0xf5, 0xc6, 0xb2, 0xa8, 0xda, 0x67, 0x06, 0x85, 0xe7, 0x78,
	0xef, 0x27, 0xa8, 0xcd, 0xcc, 0xe8, 0x1d, 0x39, 0xcd, 0xc2, 0xd9, 0x34, 0x6b, 0x1a, 0x1f, 0xe7,
	0x2c, 0xa4, 0xa9, 0x20, 0x21, 0xc7, 0xea, 0xf6, 0xa5, 0x1a, 0xff, 0x53, 0xdb, 0xb5, 0xfc, 0x1f,
	0xe0, 0xda, 0xbc, 0x8c, 0x8d, 0xa8, 0xde, 0xe7, 0xb9, 0x22, 0x28, 0xea, 0x6a, 0xbd, 0x98, 0xae,
	0xca, 0xf5, 0xaf, 0x25, 0x58, 0xef, 0x11, 0x3e, 0xef, 0xa9, 0xdd, 0xd9, 0xa0, 0x30, 0x8f, 0xd8,
	0x2a, 0x96, 0xa8, 0xea, 0xc8, 0x14, 0x1b, 0xcc, 0x8a, 0xee, 0xde, 0x37, 0xd3, 0x48, 0x17, 0xc6,
	0x7b, 0xc5, 0x5a, 0xca, 0x7e, 0x4a, 0x8f, 0x27, 0x9a, 0x8a, 0x84, 0xe9, 0xf6, 0x56, 0x24, 0xf4,
	0x00, 0x9c, 0xf4, 0x82, 0x70, 0xaa, 0xfa, 0xb8, 0xd1, 0xd9, 0x59, 0xc5, 0xee, 0x4b, 0x50, 0x9e,
	0xae, 0x69, 0xde, 0x63, 0xd8, 0x5c, 0x70, 0x8c, 0x3e, 0x82, 0xc6, 0x30, 0x16, 0x22, 0x0e, 0x07,
	0x01, 0x7d, 0x24, 0x56, 0xad, 0x39, 0xd0, 0x98, 0x53, 0xfa, 0x48, 0xa0, 0x5d, 0xa8, 0x8b, 0x98,
	0x0f, 0x12, 0x36, 0xb9, 0x10, 0x2b, 0x73, 0x24, 0x62, 0x8e, 0x25, 0xc0, 0xfb, 0x04, 0x9a, 0x8b,
	0xd1, 0xa0, 0xb7, 0xa1, 0xcc, 0x89, 0xb8, 0x30, 0xc9, 0xb8, 0x42, 0x56, 0x97, 0x32, 0x03, 0x5f,
	0x95, 0x6b, 0x76, 0xb3, 0xe4, 0xff, 0x6e, 0x41, 0xad, 0x47, 0xf8, 0x41, 0x10, 0x8f, 0x7e, 0xce,
	0xa6, 0xb9, 0xb5, 0x62, 0x9a, 0xa3, 0x3b, 0xb3, 0xe5, 0xa4, 0x57, 0x81, 0xde, 0xae, 0x7a, 0xf9,
	0x1c, 0x9a, 0x7d, 0xd0, 0xa0, 0x49, 0x12, 0x27, 0x06, 0xa0, 0xb3, 0x03, 0xca, 0xa4, 0x01, 0xef,
	0x43, 0x53, 0x03, 0x38, 0x4d, 0x46, 0x34, 0x12, 0x64, 0x42, 0x55, 0xba, 0x6c, 0xbc, 0xa9, 0xec,
	0x67, 0x99, 0x59, 0x95, 0xc9, 0x9f, 0x36, 0xc0, 0x4b, 0x2e, 0x8c, 0x8f, 0xaf, 0x2e, 0x8c, 0x5b,
	0x2b, 0x72, 0x99, 0xdb, 0x17, 0xde, 0xdf, 0xaf, 0x78, 0xb8, 0x75, 0x00, 0xe4, 0x70, 0x1b, 0x4a,
	0x61, 0x67, 0xd3, 0xed, 0x7a, 0x31, 0x0e, 0x25, 0x3a, 0x96, 0x33, 0x50, 0x7d, 0xa5, 0xe8, 0xc3,
	0xc5, 0xd9, 0x76, 0xa3, 0x48, 0x78, 0x35, 0x73, 0xcd, 0x64, 0xbf, 0xd4, 0x2c, 0x77, 0xfe, 0xb5,
	0x94, 0xbc, 0x7d, 0x9a, 0x3c, 0x61, 0x23, 0x8a, 0x4e, 0xa0, 0x6a, 0x26, 0x28, 0x5a, 0x3d, 0x55,
	0x3d, 0x7f, 0xf5, 0x16, 0xca, 0x04, 0xfc, 0x1e, 0x20, 0xb7, 0x00, 0x6f, 0x2f, 0x0b, 0x29, 0x1b,
	0x28, 0xef, 0x3e, 0xeb, 0x36, 0x73, 0xe9, 0x97, 0x7e, 0xb3, 0x2d, 0xd4, 0x85, 0x92, 0x8c, 0x6e,
	0xb9, 0x2e, 0xde, 0x9b, 0x4b, 0xcd, 0x45, 0x17, 0x07, 0xbb, 0xb0, 0x3d, 0x09, 0xe2, 0x21, 0x09,
	0x0c, 0x98, 0x70, 0xd6, 0x9e, 0x24, 0x7c, 0x24, 0x59, 0x07, 0x95, 0x1e, 0xe1, 0x5d, 0xce, 0xce,
	0xd6, 0x7e, 0x74, 0xd4, 0xed, 0xb0, 0xa2, 0xfe, 0xbe, 0xde, 0xfd, 0x3f, 0x00, 0x00, 0xff, 0xff,
	0x5a, 0x66, 0xc9, 0x59, 0xef, 0x0a, 0x00, 0x00,
}
