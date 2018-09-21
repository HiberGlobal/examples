package global.hiber.api.grpc

import global.hiber.api.grpc.event.EventApi
import global.hiber.api.grpc.event.EventServiceGrpc
import global.hiber.api.grpc.extensions.asGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

class EventGrpcController : EventServiceGrpc.EventServiceImplBase(),
  GrpcController {

  override fun list(
    request: EventApi.ListEventsRequest,
    response: StreamObserver<EventApi.ListEventsRequest.Response>
  ) = response.unary {
    EventApi.ListEventsRequest.Response.newBuilder().apply {
      if (request.selection.unbundledEvents)
        addAllUnbundledEvents(
          listOf(
            EventApi.ListEventsRequest.Response.EventTypeResponse.newBuilder().apply {
              type = EventType.MODEM_LOCATION_UPDATED
              pagination = Pagination.Result.newBuilder().setPage(0).setSize(1).setTotalPages(1).build()
              addUnbundledEvents(
                EventApi.Event.newBuilder().apply {
                  modemLocationUpdated = EventApi.Event.ModemEvent.ModemLocationUpdatedEvent.newBuilder().apply {
                    organization = "example-organization"
                    location = locationBuilder.setLatitude(10.0).setLongitude(10.0).build()
                    modemNumber = "example-modem"
                    title = "location updated"
                    description = "location updated example"
                    addTags(tag)
                  }.build()
                }.build()
              )
            }.build(),
            EventApi.ListEventsRequest.Response.EventTypeResponse.newBuilder().apply {
              type = EventType.USER_ACCESS_REQUEST
              pagination = Pagination.Result.newBuilder().setPage(0).setSize(1).setTotalPages(1).build()
              addUnbundledEvents(
                EventApi.Event.newBuilder().apply {
                  userAccessRequest = EventApi.Event.UserEvent.UserAccessRequestEvent.newBuilder().apply {
                    organization = "example-organization"
                    time = Instant.now().asGrpc
                    user = "example-user-2"
                    title = "user requested access"
                    description = "user requested access example"
                  }.build()
                }.build()
              )
            }.build()
          )
        )
      else
        addAllEvents(
          listOf(
            EventApi.BundledEvent.newBuilder().apply {
              type = EventType.MODEM_LOCATION_UPDATED
              amount = 1
              title = "Modem location updates"
              description = "Location has changed for $amount modems."
              lastEvent = Instant.now().asGrpc
            }.build(),
            EventApi.BundledEvent.newBuilder().apply {
              type = EventType.USER_ACCESS_REQUEST
              amount = 1
              title = "Access requests"
              description = "$amount users have requested access to your organization."
              lastEvent = Instant.now().asGrpc
            }.build()
          )
        )
    }.build()
  }
}
