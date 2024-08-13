# rpool-ui

An alternative UI of [PublicPoolUi](https://github.com/benjamin-wilson/public-pool-ui/).

![image](https://github.com/user-attachments/assets/076f5e43-a599-4db2-b841-83d8391e6951)

## Features

Tried to have feature parity with the original UI, but with a different design.

- [x] Dashbaoard
- [x] Statistics by Address
- [x] Statistics by Worker
- [x] Network Statistics
- [x] Support FOSSH (Free and Open Source Software and Hardware) devices
- [x] Dark/Light mode

## Installation

```bash
# Clone the repository
git clone https://github.com/bosonking/rpool-ui.git
cd rpool-ui

# Edit the .env file
cp .env.example .env
nano .env

# Install, build and serve the project
npm install
npm run build
pm2 serve --spa dist/index.html 8080 --name rpool-ui
```

## Docker

```bash
$ docker build -t rpool-ui .
$ docker run --name rpool-ui --rm -p 8080:80 rpool-ui
```

From Docker commands, website will be accessible on [http://localhost:8080](http://localhost:8080). By default Caddy server listen on port 80, but we bind it to port 8080 which allows you to launch image without root permissions.
