package global.hiber.api.grpc

import global.hiber.api.grpc.account.AccountApi.*
import global.hiber.api.grpc.account.AccountServiceGrpc
import global.hiber.api.grpc.extensions.asGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

val account: Account = Account.newBuilder().apply {
  account = "example-account"
  displayName = "example-account"
  address = Account.Address.newBuilder().apply {
    addLines("example lane 1")
    city = "Example City"
    country = "Example Country"
    zipcode = "12345"
  }.build()
  contractSignatureDate = Instant.now().asGrpc
  createdAt = Instant.now().asGrpc
  updatedAt = Instant.now().asGrpc
}.build()

class AccountGrpcController : AccountServiceGrpc.AccountServiceImplBase(), GrpcController {

  override fun get(request: GetRequest, response: StreamObserver<Account>) = response.unary { account }
  override fun update(request: UpdateRequest, response: StreamObserver<Account>) = response.unary { account }
}
