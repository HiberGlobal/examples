# Hiber API Versioning

This is an summary of versioning techniques in our API.

## Deprecation

Protobuf has deprecation support, which is the easiest way to handle versioning in the API.
We can deprecate a field, message, method or service, and track usage until we can remove it.

Deprecation has some downsides, though.
It's not supported in all of the languages that protobuf supports, so for some clients, deprecation would not be visible. 

## Fields

Field are the most flexible parts of the API to version.
We can either deprecate or replace them with a new index.

Functionally, from the server, both options work mostly the same,
in that the old value would either be converted to a new value or use old code instead of newer code.
Similarly, tracking usage is also easily done.

The difference is mostly in how it's communicated to the API client and whether the client is encouraged to upgrade.

### Deprecation

A deprecated field can still be used with any version of the proto files.
The server still explicitly supports it, and we can easily track usage of deprecated fields.
The downside, as stated above, is that it's not visible in some languages, which could
result in the field having to be supported forever.

### Removal

Since protobuf fields are numbered, we can remove a field and add it with a new number.
We reserve the previous number and can detect users of old api versions / proto files by their
usage of that field.

Even though our server technically does not know about the field anymore, we can still provide backwards
compatibility by parsing the field anyway, if it's present, and converting it to the current field. 

When a client would upgrade to the current version of the protobuf definition,
the field would be replaced, requiring an update in their implementation.
In this way, it is more strict than deprecation, but also more explicit. 

## Messages

Messages can only be deprecated, which limits the flexibility for versioning.
However, most backwards incompatible changes will be either at field level, or
require a new message type, allowing us to use deprecation.

## RPC methods

For methods, only deprecation is available.
Like messages, though, any backwards incompatible changes would probable be either on field level or 
require a new rpc call, which means deprecation should be enough.

## Services

Services can only be deprecated. In reality, we may end up with versioned services, i.e. ModemServiceV2.
This would be equivalent to classic REST versioned APIs, but within the protobuf/GRPC framework. 
