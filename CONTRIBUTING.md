## OS-X Development Setup

We provide docker-composer.yml setup to get you up and running with an environment that matches production.

### Installation

If you have not used docker on this machine before, install boot2docker: http://docs.docker.com/installation/mac/ - and if your current version is below 1.7 please upgrade.

To make sure docker host is running and environment is correct in your terminal:
```bash
eval "$(boot2docker shellinit)"
```

To start all the containers: `docker-compose up -d`

The first time it may take a while because it needs to download docker images from docker hub.

### Setup

If you are not already using an external database, update your .env file to use the default credentials provided by our docker containers:
```
DB_HOST=db
DB_PORT=3306
DB_DATABASE=antidote
DB_USERNAME=antidote
DB_PASSWORD=antidoteSecret
```

To created and populate the database with sample data, and build assets for serving the site via PHP:
```bash
docker exec -it antidote_web_1 /var/www/scripts/setup.sh
```

NOTE: If your checkout is in a folder with a different name, the name of the contaniner will be different.

### Running

Get the IP address of your docker host and open it in a browser: `boot2docker ip`

### Troubleshooting

* See current running docker containers: `docker ps`
* See aggregated logs from all of them: `docker-compose logs`
* To login to shell on a container: `docker exec -it antidote_web_1 /bin/bash`
