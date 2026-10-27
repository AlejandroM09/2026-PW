//vamos a dejarles de las 3 funciones para validar

function validarCorreo(correo){
    if(typeof correo !== 'string') return false;

    const correoV = /^[^\s@]+@[^\s@]+$/;

    return correoV.test(correo);
}

function validarNombres(nombre) {
    if (typeof nombre !== 'string') return false;
    const limpio = nombre.trim();
    if (limpio.length < 2 || limpio.length > 50) return false;
    return /^\p{L}+(?:[ '’-]\p{L}+)*$/u.test(limpio);
}

function validarBoleta(boleta){
    return /^\d{10}$/.test(String(boleta));
}

function validarContraseña(contrasena){
    if (typeof contrasena !== 'string')return false;
    return contrasena.length >=8;
}

module.exports={validarCorreo,validarNombres,validarBoleta,validarContraseña}