FROM node:22-alpine

WORKDIR /app

# Build tools
RUN apk add --no-cache python3 make g++ bash git

# Copia apenas package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# NÃO copia o restante do código se o volume do host já vai ser usado
# COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
