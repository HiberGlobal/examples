package global.hiber.example;

import io.grpc.*
import java.util.concurrent.Executor

class Authenticated(val token: String) : CallCredentials {
  override fun thisUsesUnstableApi() = Unit
  override fun applyRequestMetadata(
    method: MethodDescriptor<*, *>, attrs: Attributes,
    appExecutor: Executor, applier: CallCredentials.MetadataApplier
  ) = applier.apply(Metadata().withToken(token))

  private fun Metadata.withToken(token: String): Metadata = apply { put(authorizationKey, "Bearer $token") }

  companion object {
    private val authorizationKey = Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER)
  }
}
