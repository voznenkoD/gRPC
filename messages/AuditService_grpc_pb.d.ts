// package: com.xebia.inno.grpc
// file: AuditService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as AuditService_pb from "./AuditService_pb";

interface IChatAuditServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    message: IChatAuditServiceService_Imessage;
}

interface IChatAuditServiceService_Imessage extends grpc.MethodDefinition<AuditService_pb.ChatMessage, AuditService_pb.ChatStory> {
    path: "/com.xebia.inno.grpc.ChatAuditService/message";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuditService_pb.ChatMessage>;
    requestDeserialize: grpc.deserialize<AuditService_pb.ChatMessage>;
    responseSerialize: grpc.serialize<AuditService_pb.ChatStory>;
    responseDeserialize: grpc.deserialize<AuditService_pb.ChatStory>;
}

export const ChatAuditServiceService: IChatAuditServiceService;

export interface IChatAuditServiceServer {
    message: grpc.handleUnaryCall<AuditService_pb.ChatMessage, AuditService_pb.ChatStory>;
}

export interface IChatAuditServiceClient {
    message(request: AuditService_pb.ChatMessage, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
    message(request: AuditService_pb.ChatMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
    message(request: AuditService_pb.ChatMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
}

export class ChatAuditServiceClient extends grpc.Client implements IChatAuditServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public message(request: AuditService_pb.ChatMessage, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
    public message(request: AuditService_pb.ChatMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
    public message(request: AuditService_pb.ChatMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuditService_pb.ChatStory) => void): grpc.ClientUnaryCall;
}
