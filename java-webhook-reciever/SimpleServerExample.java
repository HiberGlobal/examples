import com.sun.net.httpserver.HttpServer;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.Charset;
import java.util.List;

public class SimpleServerExample {
  public static void main(String[] args) throws IOException {
    HttpServer httpServer = HttpServer.create(new InetSocketAddress(8070), 0);

    httpServer.createContext("/", request -> {
      try {

        BufferedReader clientSocketInputStream = new BufferedReader(new InputStreamReader(request.getRequestBody(), "UTF8"));
        String inputLine;
        StringBuilder bodyBuilder = new StringBuilder();
        while ((inputLine = clientSocketInputStream.readLine()) != null) {
          String message = inputLine;
          bodyBuilder.append('\n');
          bodyBuilder.append(message);
        }

        String bodyString = bodyBuilder.toString().substring(1);
        byte[] body = bodyString.getBytes(Charset.forName("UTF-8"));

        System.out.println("Received body (hex):");
        System.out.println(DatatypeConverter.printHexBinary(body));
        System.out.println("\nReceived body (utf8):");
        System.out.println(bodyString);

        String secretString = "this is a test for the secret";
        byte[] secret = secretString.getBytes(Charset.forName("UTF-8"));
        System.out.println("\n\nExpecting secret (utf8):");
        System.out.println(secretString);
        System.out.println("\nExpecting secret (hex) (should be 746869732069732061207465737420666F722074686520736563726574):");
        System.out.println(DatatypeConverter.printHexBinary(secret));

        List<String> signatureHeader = request.getRequestHeaders().get("X-Hub-Signature");
        if (signatureHeader == null) throw new IllegalArgumentException("header missing!");
        if (signatureHeader.size() == 0) throw new IllegalArgumentException("header missing!");
        String signature = signatureHeader.get(0);
        System.out.println("\n\nReceived signature (hex):");
        System.out.println(signature);

        Mac hmac = Mac.getInstance("HmacSHA256");
        hmac.init(new SecretKeySpec(secret, "HmacSHA256"));
        byte[] expectedSignature = hmac.doFinal(body);
        String expectedSignatureString = DatatypeConverter.printHexBinary(expectedSignature);
        System.out.println("\n\nExpecting signature (utf8):");
        System.out.println(expectedSignatureString);

        if (expectedSignatureString.equals(signature)) {
          System.out.println("Signature is correct!");
        } else {
          System.out.println("Signature did not match!");
        }

      } catch (Exception e) {
        System.out.println("failed with " + e.getMessage());
      } finally {
        request.sendResponseHeaders(200, 0);
        OutputStream response = request.getResponseBody();
        response.write("".getBytes());
        response.close();
      }
    });

    httpServer.start();
  }
}
