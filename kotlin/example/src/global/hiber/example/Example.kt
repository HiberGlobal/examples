package global.hiber.example

import global.hiber.api.grpc.modem.ModemApi.Modem
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser
import io.grpc.ManagedChannel
import io.grpc.ManagedChannelBuilder

class Example(val host: String, val port: Int, val token: String) {
  private val channel: ManagedChannel = ManagedChannelBuilder.forAddress(host, port)
//    .useTransportSecurity()
    .usePlaintext()
    .build()
  val currentUserServiceClient = CurrentUserServiceClient(channel, token)
  val modemServiceClient = ModemServiceClient(channel, token)
}

fun main(args: Array<String>) {
//  val client = Example("api.dev.hiber.global", 443, "YOUR-HIBER-DEV-TOKEN-HERE") // with useTransportSecurity
  val client = Example("localhost", 9090, "my-super-secret-token") // use plaintext

  val user = client.currentUserServiceClient.currentUser()
  System.out.println("Current user: $user")

  val modems = client.modemServiceClient.modems()
  System.out.println("Modems: $modems")
}
