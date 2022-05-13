// package: com.xebia.inno.grpc
// file: AuditService.proto

var AuditService_pb = require("./AuditService_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ChatAuditService = (function () {
  function ChatAuditService() {}
  ChatAuditService.serviceName = "com.xebia.inno.grpc.ChatAuditService";
  return ChatAuditService;
}());

ChatAuditService.message = {
  methodName: "message",
  service: ChatAuditService,
  requestStream: false,
  responseStream: false,
  requestType: AuditService_pb.ChatMessage,
  responseType: AuditService_pb.ChatStory
};

exports.ChatAuditService = ChatAuditService;

function ChatAuditServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ChatAuditServiceClient.prototype.message = function message(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatAuditService.message, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ChatAuditServiceClient = ChatAuditServiceClient;

