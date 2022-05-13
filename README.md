# gRPC


### Envoy proxy

```sh
docker build -t gRPC/envoy .
docker run -d -p 9090:9090 gRPC/envoy
```
### Client

```sh
# from root
cd client
yarn install
yarn start
```

### Generate proto client
```sh
# from root
cd proto 
./gen_client.sh
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