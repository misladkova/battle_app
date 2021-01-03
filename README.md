## BattleApp
BattleApp is a simple random game with Java backend and React frontend

### backend:
at first setup mongo database

#### Makefile
build app, need to set env variables: DB, DB_PASS, DB_USER
```bat
$ make build
```
run app
```bat
$ make run
```
run tests, need to export env variables: DB, DB_PASS, DB_USER
```bat
$ make test
```
build docker image
```bat
$ make docker_build
```
run docker image, set variables DB, DB_PASS, DB_USER
```bat
$ make docker_run DB=... DB_PASS=... DB_USER=...
```
### frontend

install dependencies
```bat
$ npm install
```
run development server
```bat
$ npm start
```
run jest tests
```bat
$ CI=true npm test
```
run cypress tests
```bat
$ npm run cypress:open
```
build production docker image
```bat
$ docker build -t battle_frontend .
```
run docker image
```bat
$ docker run -it --rm -p 3000:80 battle_frontend
```
### backend+frontend

run both, set env variables in .env file (DB, DB_PASS, DB_USER) 
```bat
$ docker-compose up -d
```

