# Escolha a imagem base do Node
FROM node:21

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos `package.json` e `yarn.lock` (ou `package-lock.json`) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN yarn install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o aplicativo TypeScript para JavaScript
RUN yarn build

# Expõe a porta que o servidor Next.js utilizará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["sh", "-c", "CHOKIDAR_USEPOLLING=true yarn dev"]

