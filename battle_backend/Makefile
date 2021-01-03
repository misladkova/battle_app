build:
	mvn assembly:assembly -DdescriptorId=jar-with-dependencies -Dmaven.test.skip=true

run:
	cd target && java -jar battle_backend-1.0-SNAPSHOT.jar

test:
	mvn test

docker_build:
	docker build -t battle_backend .

docker_run:
	docker run -it --rm -p 8080:8080 -e DB=${DB} -e DB_PASS=${DB_PASS} -e DB_USER=${DB_USER}  battle_backend
