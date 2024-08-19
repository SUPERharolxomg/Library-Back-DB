# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Instala Python y otras dependencias necesarias para la compilación
RUN apk add --no-cache python3 make g++ 

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
