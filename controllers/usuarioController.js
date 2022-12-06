
const formularioLogin =(req, res) => {
    res.render('auth/Login', {
        pagina:  'Iniciar Sesión'
    })
}

const formularioregistro =(req, res) => {      //get se usa cuando un usuario visita el sitio web
    res.render('auth/registro', {              // funcion que muestra una vista(ubicacion)  
        pagina:  'Crear Cuenta'                                       //   autenticado: false              parametro pasado a la vista
    })
}

const formularioOlvidePassword =(req, res) => {
    res.render('auth/olvide-password', {
        pagina:  'Recupera tu acceso a Bienes Raices'
    })
}
                                
export{                                        //export nombrado, se puede agregar multiples funciones
    formularioLogin,
    formularioregistro,
    formularioOlvidePassword
}