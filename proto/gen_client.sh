yarn add ts-protoc-gen --save-dev
rm -rd './generated'
mkdir './generated' 
echo 'import AuditService from "./AuditService_pb_service";
import Audit from "./AuditService_pb_service";
export { AuditService, Audit };' > ./generated/index.ts

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    AuditService.proto