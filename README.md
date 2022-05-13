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
