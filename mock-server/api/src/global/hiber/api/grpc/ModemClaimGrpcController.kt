package global.hiber.api.grpc

import global.hiber.api.grpc.data.childOrg
import global.hiber.api.grpc.extensions.asGrpc
import global.hiber.api.grpc.modem.ModemClaimApi
import global.hiber.api.grpc.modem.ModemClaimServiceGrpc
import io.grpc.stub.StreamObserver
import java.time.Instant

object ModemClaimGrpcController : ModemClaimServiceGrpc.ModemClaimServiceImplBase(), GrpcController {

  override fun claim(
    request: ModemClaimApi.ClaimModemRequest,
    response: StreamObserver<ModemClaimApi.ClaimModemRequest.Response>
  ) = response.unary {
    ModemClaimApi.ClaimModemRequest.Response.newBuilder().also {
      it.addClaims(
        ModemClaimApi.ModemClaim.newBuilder()
          .setClaimingOrganization(childOrg.organization)
          .setCreatedAt(Instant.now().asGrpc)
          .setModemNumber("ABCD EF12")
          .build()
      )
      it.request = request
    }.build()
  }

  override fun listClaims(
    request: ModemClaimApi.ListModemClaimsRequest,
    response: StreamObserver<ModemClaimApi.ListModemClaimsRequest.Response>
  ) = response.unary {
    ModemClaimApi.ListModemClaimsRequest.Response.newBuilder().also {
      it.addClaims(
        ModemClaimApi.ModemClaim.newBuilder()
          .setClaimingOrganization(childOrg.organization)
          .setCreatedAt(Instant.now().asGrpc)
          .setModemNumber("ABCD EF12")
          .build()
      )
      it.request = request
      it.pagination = Pagination.Result.newBuilder().setSize(1).setTotal(1).setTotalPages(1).build()
    }.build()
  }
}
