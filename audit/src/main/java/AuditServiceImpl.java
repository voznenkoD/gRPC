import com.xebia.inno.grpc.AuditService;
import com.xebia.inno.grpc.ChatAuditServiceGrpc;
import io.grpc.stub.StreamObserver;

public class AuditServiceImpl extends ChatAuditServiceGrpc.ChatAuditServiceImplBase {

    @Override
    public void message(AuditService.ChatMessage request, StreamObserver<AuditService.ChatStory> responseObserver) {
        System.out.println("====================================");
        System.out.println(request);
        System.out.println("====================================");

        AuditService.ChatStory response = processMessage(request);
        responseObserver.onNext(response);
        responseObserver.onCompleted();

    }
    private AuditService.ChatStory processMessage(AuditService.ChatMessage request) {
        return AuditService.ChatStory.newBuilder()
                .setChat(request.getChat())
                .setStory(0, request.getMessage())
                .setMembers(0, request.getSender())
                .build();
    }
}
