# gRPC

Quick project to try out protobuf and gRPC. Simple sending the message project to Java service(located in folder 'audit'). Protofile os located in folder proto. Try to keep that fodler without subfolders, because protoc generator is trying to get into subfolders and fail (so if node_modules folder appeared there, please remove it if you are trying to re-generate a code from proto files). Client folder contains a WEB client developed in TS. Multimedia folder contains another client side implementation with example of both non-streaming and streaming usage of protobuf. More detailed on each component in paragraphs corresponding to those.


### WEB Client

#### Generate proto client
```sh
# from root
cd proto 
./gen_client.sh
```

```sh
# from root
cd client
yarn install
yarn start
```

#### Envoy proxy
For compatibility of WEB client using Http1 with service using Http2 so far envoy(or any other proxy is needed). For convinience of testing quick simple envoy proxy setup is provided in the project code, please check following steps described below in order to make it work: 
```sh
docker build -t gRPC/envoy .
docker run -d -p 9090:9090 gRPC/envoy
```

### Python client in multimedia folder
#### Prerequesites
```sh
python3 -m pip install grpcio
python3 -m pip install grpcio-tools
```
To run it please use:
```sh
multimedia.sh
```
