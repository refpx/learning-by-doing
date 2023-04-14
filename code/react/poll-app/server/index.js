import * as dotenv from 'dotenv'
import Server from './models/server.js'

// Paquete para leer y establecer las variables de entorno
dotenv.config()

// Inicializar la instancia del server
const server = new Server()

// Ejecutar el server
server.execute()
