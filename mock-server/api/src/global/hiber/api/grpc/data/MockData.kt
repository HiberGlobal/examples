package global.hiber.api.grpc.data

import global.hiber.api.grpc.Health
import global.hiber.api.grpc.event.EventApi
import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.modem.ModemApi
import global.hiber.api.grpc.modem.ModemTransferApi
import global.hiber.api.grpc.organization.OrganizationApi
import global.hiber.api.grpc.publisher.PublisherApi
import global.hiber.api.grpc.tag.TagApi
import global.hiber.api.grpc.token.TokenApi
import global.hiber.api.grpc.user.CurrentUserApi
import global.hiber.api.grpc.user.UserApi
import global.hiber.api.grpc.webhook.WebhookApi
import java.time.Instant

val organization: OrganizationApi.Organization = OrganizationApi.Organization.newBuilder().apply {
  organization = "example-organization"
  displayName = "example-organization"
  address = OrganizationApi.Organization.Address.newBuilder().apply {
    addLines("example lane 1")
    city = "Example City"
    country = "Example Country"
    zipCode = "12345"
  }.build()
  contractSignatureDate = Instant.now().asGrpc
  createdAt = Instant.now().asGrpc
  updatedAt = Instant.now().asGrpc
}.build()

val userCurrent: CurrentUserApi.CurrentUser = CurrentUserApi.CurrentUser.newBuilder().apply {
  email = "example@example.example"
  id = "example-id"
  name = "example name"
  addOrganizations(organization.organization)
}.build()

val user: UserApi.User = UserApi.User.newBuilder().apply {
  id = "example-user"
  name = "example-user"
  email = "example@example.example"
}.build()

val tag: TagApi.Tag = TagApi.Tag.newBuilder().apply {
  id = 1L
  label = TagApi.Tag.Label.newBuilder().apply {
    name = "example-tag"
  }.build()
}.build()

val eventModemLocationUpdated: EventApi.Event = EventApi.Event.newBuilder().apply {
  modemLocationUpdated = EventApi.Event.ModemEvent.ModemLocationUpdatedEvent.newBuilder().apply {
    organization = global.hiber.api.grpc.data.organization.organization
    location = locationBuilder.setLatitude(10.0).setLongitude(10.0).build()
    modemNumber = "example-modem"
    title = "location updated"
    description = "location updated example"
    addTags(tag)
  }.build()
}.build()

val eventUserAccessRequest: EventApi.Event = EventApi.Event.newBuilder().apply {
  userAccessRequest = EventApi.Event.UserEvent.UserAccessRequestEvent.newBuilder().apply {
    organization = global.hiber.api.grpc.data.organization.organization
    time = Instant.now().asGrpc
    user = "example-user-2"
    title = "user requested access"
    description = "user requested access example"
  }.build()
}.build()

val modem: ModemApi.Modem = ModemApi.Modem.newBuilder().apply {
  organization = global.hiber.api.grpc.data.organization.organization
  maximumInactivityPeriod = 10
  health = Health.OK
  lastMessageReceivedAt = Instant.now().asGrpc
  location = global.hiber.api.grpc.Location.newBuilder().setLatitude(10.0).setLongitude(10.0).build()
  name = "example-modem"
  number = "example-modem-number"
  technical = ModemApi.Modem.TechnicalData.newBuilder().apply {
    firmwareVersionName = "example-firmware-version"
    hardwareName = "example-hardware"
    hardwareProductionBatch = "example-batch"
  }.build()
  addTags(tag)
}.build()

val token: TokenApi.Token = TokenApi.Token.newBuilder().apply {
  organization = global.hiber.api.grpc.data.organization.organization
  expiresAt = Instant.now().plusSeconds(3600).asGrpc
  id = 1
  name = "example-token"
  userId = "example-user"
}.build()

val childOrg = organization.toBuilder()
  .setOrganization("example-child-organization")
  .build()

val modemTransfer: ModemTransferApi.ModemTransfer = ModemTransferApi.ModemTransfer.newBuilder()
  .setCreatedAt(Instant.now().asGrpc)
  .setIdentifier("example-transfer")
  .addModemNumbers("ABCD EF12")
  .setRecipientOrganization("some-recipient")
  .setSenderOrganization(organization.organization)
  .setStatus(ModemTransferApi.ModemTransfer.Status.IN_TRANSIT)
  .setType(ModemTransferApi.ModemTransfer.Type.TRANSFER)
  .build()

val modemTransferCancelled
  get() = modemTransfer.toBuilder()
    .setCancelledAt(Instant.now().asGrpc)
    .setStatus(ModemTransferApi.ModemTransfer.Status.CANCELLED)
    .build()
val modemTransferReceived
  get() = modemTransfer.toBuilder()
    .setReceivedAt(Instant.now().asGrpc)
    .setStatus(ModemTransferApi.ModemTransfer.Status.RECEIVED)
    .build()
val modemTransferNotReceived
  get() = modemTransfer.toBuilder()
    .setNotReceivedAt(Instant.now().asGrpc)
    .setStatus(ModemTransferApi.ModemTransfer.Status.NOT_RECEIVED)
    .build()

val publisher: PublisherApi.Publisher = PublisherApi.Publisher.newBuilder()
  .setId(1)
  .setFilters(PublisherApi.Publisher.Filters.getDefaultInstance())
  .setData(
    PublisherApi.Publisher.Data.newBuilder()
      .setContentType(PublisherApi.Publisher.ContentType.JSON)
      .setHttp(PublisherApi.Publisher.Data.HTTPConfig.newBuilder().setSecret("secret").build())
      .setUrl("https://example.com")
      .build()
  )
  .setHealth(Health.OK)
  .setType(PublisherApi.Publisher.Type.HTTP)
  .build()

val webhook: WebhookApi.Webhook = WebhookApi.Webhook.newBuilder().apply {
  id = 1L
  organization = global.hiber.api.grpc.data.organization.organization
  data = WebhookApi.Webhook.WebhookData.newBuilder().apply {
    contentType = WebhookApi.Webhook.ContentType.PROTO
    secret = "example-secret"
    url = "https://example.example/example"
  }.build()
  filters = WebhookApi.Webhook.WebhookFilters.getDefaultInstance()
  addTags(tag)
}.build()
