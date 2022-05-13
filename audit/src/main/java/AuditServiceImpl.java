import com.xebia.inno.grpc.AuditService;
import com.xebia.inno.grpc.ChatAuditServiceGrpc;
import io.grpc.stub.StreamObserver;

public class AuditServiceImpl extends ChatAuditServiceGrpc.ChatAuditServiceImplBase {

    @Override
    public void message(AuditService.ChatMessage request, StreamObserver<AuditService.ChatStory> responseObserver) {
        printTheMessage(request);

        AuditService.ChatStory response = processMessage(request);
        responseObserver.onNext(response);
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
