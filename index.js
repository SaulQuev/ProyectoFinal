import  express  from 'express'                         //se importa para poder trabajar los modulos sintaxis js
import usuarioRoutes from './routes/usuarioRoutes.js'   //se importa para poder trabajar con usuarioRoutes.js

                                                        //const express = require('express')


const app = express()                           // crear app

                                                //habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')


                                        //routing(definir rutas de la app)
                                            
app.use('/auth', usuarioRoutes)         //use busca todas las rutas que se ponga la /  y se le asignaran las rutas de usuarioRoutes



const port = 4000;                  //definicion de puerto inicia proyecto

                                    //conectar al puerto
app.listen(port, () =>{
    console.log('El Servidor esta funcionando en el puerto',port)
});