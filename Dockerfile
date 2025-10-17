# 1. Imagem base
FROM node:20-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# 3. Copiar package.json e package-lock.json (apenas dependências)
COPY package*.json ./

# 4. Instalar dependências
RUN npm install --production

# 5. Copiar todo o código da aplicação
COPY . .

# 6. Expor porta que a API vai rodar
EXPOSE 3005

# 7. Comando para iniciar a aplicação
CMD ["node", "app.js"]
