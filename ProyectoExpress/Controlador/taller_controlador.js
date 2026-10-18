const bcrypt = require('bcrypt.js');
const tallerModel= require('../Modelo/usuarios_modelo');

function esDuplicado(error){
    return error.code === 'ER_DUP.ENTRY' || error.code === '23505';
}

async function listarTalleres(req, res) {
    try {
        const talleres = await talleresModelo.listarTalleres();
        res.json(talleres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function registrarAlumno(req, res) {
    try {
        const { idTaller, idAlumno } = req.body;
        const alumnoRegistrado = await tuModelo.registrarAlumno(idTaller, idAlumno);
        res.json({ registrado: alumnoRegistrado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
