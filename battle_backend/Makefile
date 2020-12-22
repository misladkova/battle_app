build:
	mvn assembly:assembly -DdescriptorId=jar-with-dependencies -Dmaven.test.skip=true

run:
	cd target && java -jar battle_backend-1.0-SNAPSHOT.jar

docker_build:
	cp target/battle_backend-1.0-SNAPSHOT.jar docker && cd docker && docker build -t myimage .