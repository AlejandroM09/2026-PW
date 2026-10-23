<<<<<<< HEAD
const bcrypt = require('bcrypt.js');
const tallerModel= require('../Modelo/usuarios_modelo');
=======
const talleresModelo = require('../Modelo/talleres_modelo');
const tallerModelo= require('../Modelo/talleres_modelo');
>>>>>>> lider

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

<<<<<<< HEAD
async function registrarAlumno(req, res) {
    try {
        const { idTaller, idAlumno } = req.body;
        const alumnoRegistrado = await tuModelo.registrarAlumno(idTaller, idAlumno);
        res.json({ registrado: alumnoRegistrado });
=======
async function obtenerTaller(req, res) {
    try {
        const taller = await talleresModelo.obtenerPorId(req.params.id);
        if (!taller) return res.status(404).json({ error: 'Taller no encontrado' });
        res.json(taller);
>>>>>>> lider
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
<<<<<<< HEAD
=======

async function crearTaller(req, res) {
    try {
        const { nombre, instructor, fecha, cupo } = req.body;
        if (!nombre || !fecha) {
            return res.status(400).json({ error: 'nombre y fecha son obligatorios' });
        }
        const taller = await talleresModelo.crearTaller(nombre, instructor, fecha, cupo);
        res.status(201).json(taller);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { listarTalleres, obtenerTaller, crearTaller };


>>>>>>> lider
