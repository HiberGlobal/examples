package global.hiber.api.grpc

import global.hiber.api.grpc.data.organization
import global.hiber.api.grpc.data.userCurrent
import global.hiber.api.grpc.user.CurrentUserApi
import global.hiber.api.grpc.user.CurrentUserServiceGrpc
import io.grpc.stub.StreamObserver

object CurrentUserGrpcController : CurrentUserServiceGrpc.CurrentUserServiceImplBase(), GrpcController {

  override fun currentUser(
    request: CurrentUserApi.CurrentUserRequest,
    response: StreamObserver<CurrentUserApi.CurrentUser>
  ) = response.unary { userCurrent }

  override fun requestAccess(
    request: CurrentUserApi.RequestAccessRequest,
    response: StreamObserver<CurrentUserApi.RequestAccessRequest.Response>
  ) = response.unary {
    CurrentUserApi.RequestAccessRequest.Response.getDefaultInstance()
  }

  override fun cancelAccessRequest(
    request: CurrentUserApi.CancelAccessRequestRequest,
    response: StreamObserver<CurrentUserApi.CancelAccessRequestRequest.Response>
  ) = response.unary {
    CurrentUserApi.CancelAccessRequestRequest.Response.getDefaultInstance()
  }

  override fun deleteCurrentUser(
    request: CurrentUserApi.DeleteCurrentUserRequest,
    response: StreamObserver<CurrentUserApi.DeleteCurrentUserRequest.Response>
  ) = response.unary {
    CurrentUserApi.DeleteCurrentUserRequest.Response.getDefaultInstance()
  }

  override fun updateDefaultOrganization(
    request: CurrentUserApi.UpdateDefaultOrganizationRequest,
    response: StreamObserver<CurrentUserApi.UpdateDefaultOrganizationRequest.Response>
  ) = response.unary {
    CurrentUserApi.UpdateDefaultOrganizationRequest.Response.newBuilder()
      .setDefaultOrganization(request.organization)
      .build()
  }

  override fun updateMissionControlSettings(
    request: CurrentUserApi.UpdateMissionControlSettingsRequest,
    response: StreamObserver<CurrentUserApi.UpdateMissionControlSettingsRequest.Response>
  ) = response.unary {
    CurrentUserApi.UpdateMissionControlSettingsRequest.Response.newBuilder()
      .setMissionControlSettings(request.update)
      .build()
  }

  override fun accessibleOrganizations(
    request: CurrentUserApi.AccessibleOrganizationsRequest,
    response: StreamObserver<CurrentUserApi.AccessibleOrganizationsRequest.Response>
  ) = response.unary {
    CurrentUserApi.AccessibleOrganizationsRequest.Response.newBuilder()
      .addOrganizations(CurrentUserApi.AccessibleOrganizationsRequest.AccessibleOrganization.newBuilder().also {
        it.organization = organization.organization
        it.displayName = organization.displayName
        it.defaultOrganization = true
        it.member = true
      }.build())
      .build()
  }
}
