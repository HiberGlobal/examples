package global.hiber.api.grpc

import global.hiber.api.grpc.data.childOrg
import global.hiber.api.grpc.data.modem
import global.hiber.api.grpc.data.organization
import global.hiber.api.grpc.organization.OrganizationApi.*
import global.hiber.api.grpc.organization.OrganizationServiceGrpc
import io.grpc.stub.StreamObserver

object OrganizationGrpcController : OrganizationServiceGrpc.OrganizationServiceImplBase(), GrpcController {

  override fun get(request: GetOrganizationRequest, response: StreamObserver<Organization>) =
    response.unary { organization }

  override fun update(request: UpdateOrganizationRequest, response: StreamObserver<Organization>) =
    response.unary { organization }

  override fun create(request: CreateOrganizationRequest, response: StreamObserver<Organization>) =
    response.unary { organization }

  override fun delete(
    request: DeleteOrganizationRequest,
    response: StreamObserver<DeleteOrganizationRequest.Response>
  ) = response.unary {
    DeleteOrganizationRequest.Response.newBuilder()
      .setDeletionToken("example-deletion-token")
      .addModems(modem.number)
      .build()
  }

  override fun deleteConfirmation(
    request: DeleteOrganizationConfirmationRequest,
    response: StreamObserver<DeleteOrganizationConfirmationRequest.Response>
  ) = response.unary { DeleteOrganizationConfirmationRequest.Response.getDefaultInstance() }

  override fun tree(
    request: OrganizationTreeRequest,
    response: StreamObserver<OrganizationTreeRequest.Response>
  ) = response.unary {
    OrganizationTreeRequest.Response.newBuilder()
      .setTree(
        OrganizationTree.newBuilder()
          .setOrganization(organization)
          .addChildren(
            OrganizationTree.newBuilder()
              .setOrganization(childOrg)
              .build()
          )
          .build()
      ).build()
  }

  override fun listChildOrganizations(
    request: ListChildOrganizationsRequest,
    response: StreamObserver<ListChildOrganizationsRequest.Response>
  ) = response.unary {
    ListChildOrganizationsRequest.Response.newBuilder()
      .addChildOrganizations(childOrg)
      .build()
  }

  override fun validateCreationToken(
    request: ValidateOrganizationCreationTokenRequest,
    response: StreamObserver<ValidateOrganizationCreationTokenRequest.Response>
  ) = response.unary { ValidateOrganizationCreationTokenRequest.Response.getDefaultInstance() }
}
