# tailwind-config-generator

A visual solution to design system setup for Tailwind CSS.

## Usage

```bash
git clone https://github.com/Luzefiru/tailwind-config-generator.git
cd tailwind-config-generator
```

NOTE: You will need the [Docker Client](https://docs.docker.com/get-docker/) with Docker Compose in order to run `docker compose` commands.

```bash
# to start a production instance on localhost:8080
docker compose up -d
# stops the container
docker compose down

# to start a containerized dev environment with hot reload on localhost:3000, may be delayed on Windows
docker compose -f dev.docker-compose.yml up -d
# stops the container
docker compose -f dev.docker-compose.yml down
```

For local development, you can install all the dependencies and spin up a React environment.

```bash
npm ci
npm run start
```

## TODO

1. Create a function to import colors from an existing `tailwind.config.js` file.
2. Add backend server data persistence with Express.
3. Create a gallery to share color systems with other users.
