# Documentación del Proyecto
## 1. Configuración del Backend con Flask
### 1.1 Instalación de Dependencias
 Primero, asegúrate de tener Flask, flask_mysqldb, y flask_cors instalados en tu entorno de Python.
 pip install Flask flask_mysqldb flask_cors

### 1.2 Creación del Archivo de Configuración
 Crea un archivo config.py para almacenar la configuración de la base de datos.

## config.py
class Config:
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'your_mysql_user'
    MYSQL_PASSWORD = 'your_mysql_password'
    MYSQL_DB = 'your_database_name'
    MYSQL_CURSORCLASS = 'DictCursor'

### 1.3 Creación de las Rutas y Endpoints
Crea un archivo routes.py para definir los endpoints de tu API.

### 1.4 Creación del Archivo Principal de la Aplicación
Crea un archivo app.py para iniciar la aplicación Flask.

## app.py
from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from config import Config
from routes import init_routes

app = Flask(__name__)
app.config.from_object(Config)

### Inicializar MySQL
mysql = MySQL(app)

### Inicializar CORS
CORS(app)

### Inicializar rutas
init_routes(app, mysql)

if __name__ == '__main__':
    app.run(debug=True)



## 2. Configuración del Frontend con React
 ### 2.1 Crear la Aplicación React
Usa create-react-app para iniciar una nueva aplicación React.

npx create-react-app my-app
cd my-app

### 2.2 Instalación de Dependencias
Instala react-router-dom y axios para la gestión de rutas y solicitudes HTTP.

npm install react-router-dom axios

### 2.3 Creación de Componentes
Crea los componentes necesarios en la carpeta src/components.

## 3. Iniciar los Servidores
Asegúrate de que el servidor Flask está corriendo.

python app.py

Inicia la aplicación React.

npm start

## 4. Verificar la Aplicación
Abre tu navegador y navega a http://localhost:3000.
Usa la barra de navegación para moverte entre las vistas de clientes, habitaciones y reservas.
Asegúrate de que los datos se muestran correctamente y que las peticiones a la API están funcionando como se espera.
## 5. Depuración y Mejoras
Utiliza la consola del navegador para verificar los datos que se reciben.
Asegúrate de que los datos se están mostrando correctamente en cada componente.
Aplica estilos adicionales según sea necesario para mejorar la interfaz de usuario.
Con esta documentación, deberías tener una guía completa de cómo configurar y crear tu aplicación con Flask y React, incluyendo la configuración del backend, la API y el frontend con navegación entre vistas.

