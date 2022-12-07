import express from 'express';
import {formularioLogin, formularioregistro, registrar, formularioOlvidePassword} from '../controllers/usuarioController.js'


const router =express.Router();


router.get('/login', formularioLogin);  

router.get('/registro', formularioregistro )   
router.post('/registro', registrar )   
router.get('/olvide-password', formularioOlvidePassword )                                              
                                       
                                                /*post se utiliza cuando el usuario llena un formulario y se quiere procesar
                                                router.post('/',function(req,res){
                                                    res.json({msg:'Respuesta de tipo post'})
                                                })
                                                */
export default router