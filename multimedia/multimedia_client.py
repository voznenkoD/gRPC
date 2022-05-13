import grpc

import AuditService_pb2
import AuditService_pb2_grpc


def run():
	with grpc.insecure_channel('localhost:9080') as channel:
		stub = AuditService_pb2_grpc.ChatAuditServiceStub(channel)
		response = stub.message(AuditService_pb2.ChatMessage(chat="chat", sender="Python Client", message="Hisss"))
	print(response)


def stream_run():
	with grpc.insecure_channel('localhost:9080') as channel:
		stub = AuditService_pb2_grpc.StreamChatAuditServiceStub(channel)
		for response in stub.streaming(AuditService_pb2.ChatMessage(chat="chat", sender="Python Client", message="Hisss")):
			print(response)

stream_run()