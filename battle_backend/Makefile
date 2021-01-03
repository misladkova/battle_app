build:
	mvn assembly:assembly -DdescriptorId=jar-with-dependencies -Dmaven.test.skip=true

run:
	cd target && java -jar battle_backend-1.0-SNAPSHOT.jar

test:
	mvn test

docker_build:
	docker build -t battle_backend .