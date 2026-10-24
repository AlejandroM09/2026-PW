const bcrypt = require('bcryptjs');
const usuarioModel= require('../Modelo/usuarios_modelo');

const {validarCorreo, validarBoleta, validarContraseña}=require('../validaciones');

function esDuplicado(error){
    return error.code === 'ER_DUP_ENTRY' || error.code === '23505';
}

async function listarUsuarios(req,res) {
    try{
        const usuarios = await usuarioModel.listar();
        res.json(usuarios);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


async function crearUsuario(req, res) {
    try {
        const { nombre, correo, contrasena, boleta } = req.body;

        if (!nombre || !correo || !contrasena || !boleta) {
            return res.status(400).json({ error: 'nombre, correo, contrasena y boleta son obligatorios' });
        }
        if (!validarCorreo(correo)) {
            return res.status(400).json({ error: 'El correo no tiene un formato válido' });
        }
        if (!validarBoleta(boleta)) {
            return res.status(400).json({ error: 'La boleta debe tener 10 dígitos' });
        }
        if (!validarContraseña(contrasena)) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
        }

        const contrasenaHash = await bcrypt.hash(contrasena, 10);
        const usuario = await usuarioModel.crear({ nombre, correo, contrasenaHash, boleta: String(boleta) });
        res.status(201).json(usuario);
    } catch (error) {
        if (esDuplicado(error)) {
            return res.status(409).json({ error: 'Ya existe un usuario con ese correo o boleta' });
        }
        res.status(500).json({ error: error.message });
    }
}

async function obtenerUsuario(req, res) {
    try{
        const usuario = await usuarioModel.obtenerPorId(req.params.id);
        if(!usuario)return res.status(404).json({error: 'Usuario no encontrado'});
        res.json(usuario);
    }catch(error){
        res.status(500).json({error:error.message});
    }
    
}
module.exports = {listarUsuarios, obtenerUsuario,crearUsuario};
