#!/bin/sh

# Остановка скрипта при любой ошибке
set -e

cd /usr/src/app/

echo "Применение миграций Prisma..."
npx prisma migrate deploy

echo "Запуск NestJS приложения..."
exec bun run dist/src/main.js
