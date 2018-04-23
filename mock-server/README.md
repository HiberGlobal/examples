# Mock API Server

This is a mock of the Hiber GRPC API. It is an actual server, implementing the GRPC API in a minimal way.

This server is available as a docker image for your convenience as `hiberglobal/mock-server:latest`.

## Implementation

This implementation is written in Kotlin and uses Gradle to build.
The code is split into 3 modules: the api generation code, the grpc implementation and the server code.

- `api/public` contains the gradle configuration to generate java code from the proto files in the `hiber-api` folder
 in the root of this repository. You can find the generated java files under `mock-server/api/public/build/generated/source/proto/main`
- `api/grpc` contains the grpc implementation. Note most calls are implemented in a minimal way, using example strings.
- `server` contains the server code and token 'validation' (it just checks whether there is a token).

## Customizing

If you want to change the responses to support your development, the mock server is easy to alter.

In the `api/grpc` module, you will find all the grpc service implementations. For example (from `CurrentUserGrpcController.kt`):

```
class CurrentUserGrpcController : CurrentUserServiceGrpc.CurrentUserServiceImplBase(), GrpcController {

  override fun currentUser(
    request: CurrentUserApi.CurrentUserRequest,
    response: StreamObserver<CurrentUserApi.CurrentUser>
  ) = response.unary {
    CurrentUserApi.CurrentUser.newBuilder().apply {
      email = "example@example.example"
      id = "example-id"
      name = "example name"
      addAccounts("example-account")
    }.build()
  }

  override fun requestAccess(
    request: CurrentUserApi.RequestAccessRequest,
    response: StreamObserver<CurrentUserApi.RequestAccessRequest.Response>
  ) = response.unary { CurrentUserApi.RequestAccessRequest.Response.getDefaultInstance() }

  override fun deleteCurrentUser(
    request: CurrentUserApi.DeleteRequest,
    response: StreamObserver<CurrentUserApi.DeleteRequest.Response>
  ) = response.unary { CurrentUserApi.DeleteRequest.Response.getDefaultInstance() }
}
```
which implements
```
service CurrentUserService {
    rpc CurrentUser (CurrentUserRequest) returns (hiber.user.CurrentUser);
    rpc RequestAccess (RequestAccessRequest) returns (RequestAccessRequest.Response);
    rpc DeleteCurrentUser (DeleteRequest) returns (DeleteRequest.Response);
}
```

This is pretty straightforward; the methods correspond to the unary rpc calls.
The `unary` extension function is used to abstract away the `onNext` and `onComplete` calls on the response `StreamObserver`.  

### Building and running

Gradle is used for building and running the mock server.

To build the server, run `./gradlew build` in the `mock-server` directory.

To run the server, run `./gradlew run` in the `mock-server` directory.

### Building your changes to a Docker image

If you don't want to change the run scripts for the examples, but want to use your own, customized mock server for them,
you can build the server into a Docker image. 
Simply run `server/dockerize.sh` in the `mock-server` directory. 
This will run the Gradle build and create a Docker image that runs the server on start tagged as `hiberglobal/mock-server:latest`.
