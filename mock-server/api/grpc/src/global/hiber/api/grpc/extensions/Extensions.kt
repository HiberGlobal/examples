package global.hiber.api.grpc.extensions

import global.hiber.api.grpc.Timestamp
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter


val Instant?.asGrpc: Timestamp
  get() = when (this) {
    null -> Timestamp.getDefaultInstance()
    else -> Timestamp.newBuilder().apply {
      timestamp = com.google.protobuf.Timestamp.newBuilder().apply {
        seconds = epochSecond
        nanos = nano
      }.build()
      textual = atZone(ZoneId.of("Z")).format(DateTimeFormatter.ISO_DATE_TIME)
    }.build()
  }
