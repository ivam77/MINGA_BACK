import "dotenv/config.js"                     //configura las variables de entorno de la aplicacion
import "./config/db.js"                       //configura la conexion con la base de datos

// import createError from 'http-errors'      //modulo necesario para crear/configurar errores en nuestra aplicacion

import express from 'express'                 //modulo necesario para levantar y configurar un servidor
import path from 'path'                       //modulo necesario para conocer la ubicacion de nuestro servidor
import cookieParser from 'cookie-parser'      //modulo para configurar cookies
import logger from 'morgan'                   //modulo para registrar las peticiones que se realizan al servidor 
import { __dirname } from './utils.js'        //importo la configuracion de la ruta padre
import cors from 'cors'                       //modulo para permitir origenes cruzados (front con el back)
import indexRouter from './routes/index.js'   //enrutador principal de la app

import notFoundHandler from "./middlewares/not_found_handler.js"
import errorHandler from "./middlewares/error_handler.js"

let app = express();                          //defino una variable con la ejecucion del modulo express para CREAR un servidor 

// view engine setup
//set es un metodo que CONFIGURA algo
app.set('views', path.join(__dirname, 'views')) //configuro que las vistas generadas en el backend estan en la carpeta VIEWS
app.set('view engine', 'ejs');                  //configuro que las vistas se van a definir con el lengüaje de EJS (motor de plantilla)

//MIDDLEWARES
//son funciones que se ejecutan con cada peticion y que van a permitir o no permitir realizar algo
//use es un metodo que OBLIGA a (en este caso) A MI APLICACION a usar algo (ejecutar la funcion)
app.use(cors())                                             //obliga al servidor a permitir el cruce de origenes de front/back
app.use(logger('dev'))                                      //obliga a el servidor a usar el MIDDLEWARE de registro de peticion
app.use(express.json())                                     //obliga a el servidor a TRANSFORMAR/MANEJAR formato JSON (post/put)
app.use(express.urlencoded({ extended: false }))            //obliga a el servidor a ACCEDER a consultar complejas (permite leer querparams de una peticion)
app.use(express.static(path.join(__dirname, 'public')))     //obliga a el servidor a generar una carpeta de acceso PUBLICO al cliente


//ENDPOINTS
app.use('/api', indexRouter)  //obligo al servidor a usar las rutas definidas en el enrutador principal con la palabra "/api"

app.use(notFoundHandler);
app.use(errorHandler);

export default app