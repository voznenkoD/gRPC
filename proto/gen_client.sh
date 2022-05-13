yarn add ts-protoc-gen --save-dev
rm -f ./generated/*


# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    AuditService.proto

# grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ \
# --grpc_out=generate_package_definition:./ ../proto/*.proto

# grpc_tools_node_protoc \
# --js_out=import_style=commonjs,binary:./ \
# --grpc_out=./ \
# --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
# -I ../proto \
# ../proto/*.proto


# grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=generate_package_definition:./generated ../proto/AuditService.proto

# protoc \
# --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
# --ts_out=./generated \
# --js_out=./generated \
# -I ../proto \
# ../proto/*.proto