# Imagen base con Node.js (usa la versión que prefieras)
FROM node:18

# Crear y usar el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto que la app usa (ajústalo según tu app)
EXPOSE 3001

# Comando para ejecutar la app
CMD ["node", "index.js"]
