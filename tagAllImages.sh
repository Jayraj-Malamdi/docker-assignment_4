#!bin/bash
echo "hello worl";
docker-compose -f docker-compose.load.yml build;

for i in $(docker-compose -f docker-compose.load.yml images -q);
do
    docker tag $(i) jayrajmalamdi/mernapp-dockerise:1.0;
done
