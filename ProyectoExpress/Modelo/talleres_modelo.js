const pool = require('../bd-local');
const { randomUUID } = require('crypto');

const COLUMNAS_PUBLICAS = 'id, nombre, instructor, fecha, cupo';

async function listarTalleres() {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM talleres ORDER BY id`);
    return filas;
}

async function obtenerPorId(id) {
    const [filas]= await pool.query(`SELECT t.id, t.nombre, t.instructor, t.fecha, t.cupo,
                (SELECT COUNT(*) FROM talleres a WHERE a.id = t.id) AS asistentes
         FROM talleres t WHERE t.id = ?`, [id]);
    return filas[0];
}

async function crearTaller(nombre, instructor, fecha, cupo) {
    const id = randomUUID();
    await pool.query(
        `INSERT INTO talleres (id, nombre, instructor, fecha, cupo) VALUES (?, ?, ?, ?, ?)`,
        [id, nombre, instructor, fecha, cupo]
    );
    return { id, nombre, instructor, fecha, cupo };
}

module.exports = {listarTalleres,obtenerPorId, crearTaller};