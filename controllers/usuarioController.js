import {check, validationResult } from 'express-validator'

import Usuario from '../models/Usuario.js'


const formularioLogin = (req, res) => {
    res.render('auth/Login', {
        pagina:  'Iniciar Sesión'
    })
}

const formularioregistro = (req, res) => {      //get se usa cuando un usuario visita el sitio web
    res.render('auth/registro', {              // funcion que muestra una vista(ubicacion)  
        pagina:  'Crear Cuenta'                                       //   autenticado: false              parametro pasado a la vista
    })
}

const registrar = async (req, res)=> {

    console.log(req.body)
    //validaciones
    // que el nombre no este vacio
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('No se parece a un email').run(req)
    await check('password').isLength({min: 6}).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    await check('repetir_password').equals('password').withMessage('Los password no son iguales').run(req)

    let resultado = validationResult(req)

    //verificar que el resultado este vacio para no agregar usuario null

    if(!resultado.isEmpty()){
        //errores
       return res.render('auth/registro', {
            pagina:  'Crear Cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email

            }
        })
    }
    //extraer los datos
    const {nombre, email, password } = req.body


    //verificar que el usuario no este duplicado
    const existeUsuario = await Usuario.findOne({where : {email  } })

    if(existeUsuario){
        return res.render('auth/registro', {
            pagina:  'Crear Cuenta',
            errores: [{msg: 'El usuario ya esta registrado'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email

            }
        })
    }
    

    console.log(existeUsuario)

    return;
                        
    //const usuario = await Usuario.create(req.body);         //leer y registrar los datosen la  BD
    //res.json(usuario)

}


const formularioOlvidePassword =(req, res) => {
    res.render('auth/olvide-password', {
        pagina:  'Recupera tu acceso a Bienes Raices'
    })
}


                                
export{                                        //export nombrado, se puede agregar multiples funciones
    formularioLogin,
    formularioregistro,
    registrar,
    formularioOlvidePassword
}