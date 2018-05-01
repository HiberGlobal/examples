package global.hiber.example;

import io.grpc.*;
import java.util.concurrent.Executor;

class Authenticated implements CallCredentials {

  private final String token;

  Authenticated(String token) {
    this.token = token;
  }

  @Override
  public void thisUsesUnstableApi() {
  }

  @Override
  public void applyRequestMetadata(
    MethodDescriptor<?, ?> method, Attributes attrs,
    Executor appExecutor, MetadataApplier applier) {

    Metadata metadata = new Metadata();
    metadata.put(Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER), "Bearer " + token);

    applier.apply(metadata);
  }
}
