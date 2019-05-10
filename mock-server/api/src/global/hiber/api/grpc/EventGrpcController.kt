package global.hiber.api.grpc

import global.hiber.api.grpc.data.eventModemLocationUpdated
import global.hiber.api.grpc.data.eventUserAccessRequest
import global.hiber.api.grpc.event.EventApi
import global.hiber.api.grpc.event.EventServiceGrpc
import global.hiber.api.grpc.extensions.asGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

object EventGrpcController : EventServiceGrpc.EventServiceImplBase(),
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
              addUnbundledEvents(eventModemLocationUpdated)
            }.build(),
            EventApi.ListEventsRequest.Response.EventTypeResponse.newBuilder().apply {
              type = EventType.USER_ACCESS_REQUEST
              pagination = Pagination.Result.newBuilder().setPage(0).setSize(1).setTotalPages(1).build()
              addUnbundledEvents(eventUserAccessRequest)
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

  override fun stream(request: EventApi.EventStreamRequest, response: StreamObserver<EventApi.Event>) {
//TODO
  }
}
