##ServerApp
Battle is a simple random game with Java backend and React frontend, 
running on http server, port 8080

###backend:
####Makefile
build app, need to set environmental variables: DB, DB_PASS, DB_USER
```bat
$ make build
```
run app
```bat
$ make run
```
run tests, need to export environmental variables: DB, DB_PASS, DB_USER
```bat
$ make test
```
build docker image
```bat
$ make docker_build
```
run docker image, use variables DB, DB_PASS, DB_USER
```bat
$ docker run -it --rm -p 8080:8080 -e DB='' -e DB_PASS='' -e DB_USER='' battle_backend
```
###frontend

build docker image
```bat
$ docker build -t battle_frontend .
```
run docker image
```bat
$ docker run -it --rm -p 1337:80 battle_frontend
```
###backend+frontend

run both, use variables DB, DB_PASS, DB_USER
```bat
$ docker-compose up -d
```

