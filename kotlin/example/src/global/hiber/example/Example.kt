package global.hiber.example

import global.hiber.api.grpc.modem.ModemApi.Modem
import global.hiber.api.grpc.user.CurrentUserApi.CurrentUser
import io.grpc.ManagedChannel
import io.grpc.ManagedChannelBuilder

class Example(val host: String, val port: Int, val token: String) {
  private val channel: ManagedChannel = ManagedChannelBuilder.forAddress(host, port)
    .usePlaintext(true) // the mock server is http only, use https when connecting to https://dev.hiber.global
    .build()
  val currentUserServiceClient = CurrentUserServiceClient(channel, token)
  val modemServiceClient = ModemServiceClient(channel, token)
}

fun main(args: Array<String>) {
  val client = Example("localhost", 9090, "my-super-secret-token")

  val user = client.currentUserServiceClient.currentUser()
  System.out.println("Current user: $user")

  val modems = client.modemServiceClient.modems()
  System.out.println("Modems: $modems")
}
