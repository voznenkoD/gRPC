// package: com.xebia.inno.grpc
// file: AuditService.proto

import * as AuditService_pb from "./AuditService_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatAuditServicemessage = {
  readonly methodName: string;
  readonly service: typeof ChatAuditService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof AuditService_pb.ChatMessage;
  readonly responseType: typeof AuditService_pb.ChatStory;
};

export class ChatAuditService {
  static readonly serviceName: string;
  static readonly message: ChatAuditServicemessage;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatAuditServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  message(
    requestMessage: AuditService_pb.ChatMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: AuditService_pb.ChatStory|null) => void
  ): UnaryResponse;
  message(
    requestMessage: AuditService_pb.ChatMessage,
    callback: (error: ServiceError|null, responseMessage: AuditService_pb.ChatStory|null) => void
  ): UnaryResponse;
}

