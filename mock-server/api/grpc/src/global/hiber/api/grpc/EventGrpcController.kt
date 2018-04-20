package global.hiber.api.grpc

import global.hiber.api.grpc.event.EventApi
import global.hiber.api.grpc.event.EventServiceGrpc
import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.tag.TagApi
import io.grpc.stub.StreamObserver
import java.time.Instant

class EventGrpcController : EventServiceGrpc.EventServiceImplBase(),
  GrpcController {

  override fun list(request: EventApi.ListRequest, response: StreamObserver<EventApi.ListRequest.Response>) =
    response.unary {
      EventApi.ListRequest.Response.newBuilder().apply {
        addAllEvents(
          listOf(

            EventApi.Event.newBuilder().apply {
              modemLocationUpdated = EventApi.Event.ModemEvent.ModemLocationUpdatedEvent.newBuilder().apply {
                account = "example-account"
                location = locationBuilder.setLatitude(10.0).setLongitude(10.0).build()
                modemNumber = "example-modem"
                title = "location updated"
                description = "location updated example"
                addTags(tag)
              }.build()
            }.build(),

            EventApi.Event.newBuilder().apply {
              userAccessRequest = EventApi.Event.UserEvent.UserAccessRequestEvent.newBuilder().apply {
                account = "example-account"
                time = Instant.now().asGrpc
                user = "example-user-2"
                title = "user requested access"
                description = "user requested access example"
              }.build()
            }.build()

          )
        )
      }.build()
    }
}
