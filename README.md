## Protobuf

- protoc: https://github.com/protocolbuffers/protobuf/releases
- protocol buffers are language "neutral", protoc is used to compile .proto files to language of your choice. Download protoc from the link above.
- Create proto file with : `protoc --js_out=import_style=commonjs,binary:. employees.proto`