# node-entrega-talento-tech

## API REST con Node.js, estructurada por capas, conectada a Firebase Firestore, con autenticación mediante JWT, y con manejo completo de productos.

### Incluye:

#### Configuración inicial del proyecto

- Creación del proyecto en Node.js.

- Uso de index.js como punto de entrada.

- Configuración de ESModules.

- Creación del script start.

#### Instalación y uso de dependencias

- Express para el servidor.

- CORS para permitir peticiones externas.

- Body-parser para leer JSON.

- Dotenv para variables de entorno.

- Firebase para base de datos.

- Jsonwebtoken para autenticación.

#### Servidor web con Express

- Configuración completa del servidor.

- Middleware de CORS.

- Middleware global de JSON.

- Manejo de errores 404.

- Uso de archivo .env.

#### Sistema de rutas

- Rutas de productos (listar, buscar por ID, crear y eliminar).

- Ruta de login para autenticación de usuarios.

- Ruta para creacion de usuario.

#### Arquitectura por capas

- Capa de rutas.

- Capa de controladores.

- Capa de modelos.

#### Conexión con Firebase Firestore

- Creación del proyecto en Firebase.

- Creación de colección de productos y usuarios

- Conexión del backend con la base de datos remota.

- Operaciones CRUD sobre productos.

#### Sistema de autenticación con JWT

- Login de usuario.

- Generación de token.

- Middleware de validación.

- Protección de rutas privadas
