import  express  from 'express'                         //se importa para poder trabajar los modulos sintaxis js
import usuarioRoutes from './routes/usuarioRoutes.js'   //se importa para poder trabajar con usuarioRoutes.js
import db from './config/db.js'                         //se importa para poder trabajar con db.js

                                                        //const express = require('express')


const app = express()                           // crear app

//lectura de datos del formulario
app.use( express.urlencoded({extended: true}))

//conexion a la base de datos
try{
   await db.authenticate();
   //sincroniza para crear la tabla
   db.sync()
   console.log('Conexion correcta a la base de datos')
}catch(error){
    console.log(error)
}

                                                //habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

                                        //carpeta publica
app.use(express.static('public'))

                                        //routing(definir rutas de la app)
                                            
app.use('/auth', usuarioRoutes)         //use busca todas las rutas que se ponga la /  y se le asignaran las rutas de usuarioRoutes



const port = 4000;                  //definicion de puerto inicia proyecto

                                    //conectar al puerto
app.listen(port, () =>{
    console.log('El Servidor esta funcionando en el puerto',port)
});