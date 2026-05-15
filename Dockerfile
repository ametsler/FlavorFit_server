# Этап 1: Сборка приложения и генерация Prisma (Объединенный deps + builder)
FROM oven/bun:1.3.11-slim AS builder
WORKDIR /usr/src/app

# Устанавливаем Node.js 22 LTS и OpenSSL один раз
RUN apt-get update && apt-get install -y curl openssl && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Сначала копируем только файлы зависимостей для кэширования слоев Docker
COPY package.json bun.lock ./
RUN bun install

# Копируем остальной исходный код
COPY . .

# Генерируем клиент Prisma и собираем NestJS в dist/
#RUN npx prisma generate
RUN bun run build

# Этап 2: Финальный минимальный продакшн-образ
FROM oven/bun:1.3.11-slim AS runner
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y curl openssl && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/entrypoint.sh ./entrypoint.sh
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/prisma.config.ts ./prisma.config.ts

RUN chmod +x ./entrypoint.sh

EXPOSE 4200

ENTRYPOINT ["./entrypoint.sh"]