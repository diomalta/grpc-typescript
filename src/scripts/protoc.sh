#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

for f in ./src/proto/*; do
    BASENAME="$(basename "$f")"
    if [ "$BASENAME" == "index.ts" ]; then
        continue
    fi

    DIRECTORY="${f}"/generated
    if [ ! -d "$DIRECTORY" ]; then
        mkdir "${DIRECTORY}"
    fi

    if [ "$1" == "--full" ]; then
        ${GRPC_TOOLS_NODE_PROTOC} \
            --js_out=import_style=commonjs,binary:"${DIRECTORY}" \
            --grpc_out="${DIRECTORY}" \
            --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
            -I "${f}" \
            "${f}"/*.proto
    fi

    ${GRPC_TOOLS_NODE_PROTOC} \
        --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
        --ts_out="${DIRECTORY}" \
        -I "${f}" \
        "${f}"/*.proto
    
    echo -e "\033[1m\033[92mOK\033[39m\033[21m \033[90mGenerated files from ${BASENAME} proto\033[39m"
done