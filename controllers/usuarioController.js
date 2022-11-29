
const formularioLogin =(req, res) => {
    res.render('auth/Login', {
        autenticado: false
    })
}

const formularioregistro =(req, res) => {
    res.render('auth/registro', {
        autenticado: false
    })
}
                                
export{                 //export nombrado, se puede agregar multiples funciones
    formularioLogin,
    formularioregistro
}