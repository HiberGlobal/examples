package global.hiber.api.grpc

import io.grpc.Status
import io.grpc.StatusException
import io.grpc.StatusRuntimeException
import io.grpc.stub.StreamObserver
import mu.KotlinLogging

private val logger = KotlinLogging.logger { }

interface GrpcController {

  fun <R> StreamObserver<R>.unary(result: () -> R) {
    try {
      onNext(result())
      onCompleted()
    } catch (e: StatusException) {
      onError(e)
    } catch (e: StatusRuntimeException) {
      onError(e)
    } catch (e: IllegalArgumentException) {
      if (e.message == "Assertion failed") logger.error(e) { "Failed requirement during GRPC call without message" }
      onError(StatusException(Status.INVALID_ARGUMENT.withCause(e)))
    } catch (t: Throwable) {
      logger.error(t) { "Unexpected error during grpc call" }
      onError(t)
    }
  }
}
