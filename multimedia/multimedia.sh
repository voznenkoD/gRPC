python3 -m grpc_tools.protoc -I../proto/ --python_out=. --grpc_python_out=. AuditService.proto \
&& python3 multimedia_client.py