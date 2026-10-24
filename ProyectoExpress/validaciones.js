//vamos a dejarles de las 3 funciones para validar

function validarCorreo(correo){
    if(typeof correo !== 'string') return false;

    const correoV = /^[^\s@]+@[^\s@]+$/;

    return correoV.test(correo);
}

function validarBoleta(boleta){
    return /^\d{10}$/.test(String(boleta));
}

function validarContraseña(contrasena){
    if (typeof contrasena !== 'string')return false;
    return contrasena.length >=8;
}

module.exports={validarCorreo,validarBoleta,validarContraseña}