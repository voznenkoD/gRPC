import com.xebia.inno.grpc.AuditService;
import com.xebia.inno.grpc.StreamChatAuditServiceGrpc;
import io.grpc.stub.StreamObserver;

public class StreamAuditServiceImpl extends StreamChatAuditServiceGrpc.StreamChatAuditServiceImplBase {

    @Override
    public void streaming(AuditService.ChatMessage request, StreamObserver<AuditService.ChatStory> responseObserver) {
        printTheMessage(request);

        for (int i = 0; i < 10000; i++) {
            AuditService.ChatStory response = processMessage(request);
            responseObserver.onNext(response);
            try {
                Thread.sleep(100L);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        responseObserver.onCompleted();
    }

    private void printTheMessage(AuditService.ChatMessage request) {
        System.out.println("====================================");
        System.out.println(request);
        System.out.println("====================================");
    }

    private AuditService.ChatStory processMessage(AuditService.ChatMessage request) {
        return AuditService.ChatStory.newBuilder()
                .setChat(request.getChat())
                .addStory(request.getMessage())
                .addMembers(request.getSender())
                .build();
    }
}
