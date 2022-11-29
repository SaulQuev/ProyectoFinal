import express from 'express';
import {formularioLogin,formularioregistro} from '../controllers/usuarioController.js'


const router =express.Router();


router.get('/login', formularioLogin);   
router.get('/registro', formularioregistro )                                                
                                       
                                                /*post se utiliza cuando el usuario llena un formulario y se quiere procesar
                                                router.post('/',function(req,res){
                                                    res.json({msg:'Respuesta de tipo post'})
                                                })
                                                */
export default router