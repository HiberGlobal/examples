package global.hiber.api.grpc

import global.hiber.api.grpc.organization.OrganizationApi.*
import global.hiber.api.grpc.organization.OrganizationServiceGrpc
import global.hiber.api.grpc.extensions.asGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

val organization: Organization = Organization.newBuilder().apply {
  organization = "example-organization"
  displayName = "example-organization"
  address = Organization.Address.newBuilder().apply {
    addLines("example lane 1")
    city = "Example City"
    country = "Example Country"
    zipCode = "12345"
  }.build()
  contractSignatureDate = Instant.now().asGrpc
  createdAt = Instant.now().asGrpc
  updatedAt = Instant.now().asGrpc
}.build()

class OrganizationGrpcController : OrganizationServiceGrpc.OrganizationServiceImplBase(), GrpcController {
  override fun get(request: GetOrganizationRequest, response: StreamObserver<Organization>) = response.unary { organization }
  override fun update(request: UpdateOrganizationRequest, response: StreamObserver<Organization>) = response.unary { organization }
}
