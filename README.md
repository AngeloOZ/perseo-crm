
# Proyecto Perseo CRM

Este CRM esta construido en base a la plantilla de VISTRO de la cual se tiene los derechos.

Para su contrucción se está empleando el framework Laravel y React.js con ayuda de Inertia.js
## Variables de entorno

Para ejecutar este proyecto, deberá añadir las siguientes variables de entorno a su archivo .env

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=perseo_crm
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```

## Instalación

Para la instalación del proyecto se debe contar con el gestor de paquetes NPM y Composer

```bash
  composer install
  npm install
```
    
## Desarrollo

Para realizar modificaciones dentro del proyecto se debe primero ejecutar 

```bash
  npm run dev
```
Este es un servidor que estará a la escucha de los cambios que se realizarán en la parte de React.js

Para ejecutar el lado de Laravel se puede ejecutar el comando
```bash
  php artisan serv
```
tambien se puede ejecutar en un servidor como XAMP o Laragon

## Despliegue

Para realizar el despliegue se debe primero ejecutar el comando
```bash
  npm run build
```
Una vez se haya acabado la construcción este se despliega como un proyecto común de Laravel
