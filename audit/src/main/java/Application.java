import io.grpc.Server;
import io.grpc.ServerBuilder;
import java.io.IOException;

public class Application {
  public static void main(String[] args) {
      AuditServiceImpl auditService = new AuditServiceImpl();
      Server auditServer = ServerBuilder.forPort(9080).addService(auditService).build();
      try {
          auditServer.start();
          System.out.println("=== Lock and load ===");
          auditServer.awaitTermination();
      } catch (IOException|InterruptedException e) {
          throw new RuntimeException(e);
      }
  }
}
