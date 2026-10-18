//vamos a dejarles de las 3 funciones para validar

function ValidarCorreo(){
    if(typeof correo !== 'string') return false;

    const correoV = /@/;

    return correoV,test(correo);
}

function validarBoleta(){
    if(typeof boleta !== 'number' || Number.isNaN(boleta)) return false;
    return String(boleta).length === 10;
}

function validarContraseña(){
    if (typeof contrasena !== 'string')return false;
    return constrasena.lenght >=8;
}

module.exports={validarBoleta,validarBoleta,validarContraseña}