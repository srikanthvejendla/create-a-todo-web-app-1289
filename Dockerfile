# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* .npmrc* ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env* ./
EXPOSE 4000
CMD ["node", "dist/server/index.js"]
