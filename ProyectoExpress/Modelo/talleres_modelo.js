const pool = require('../bd-local');

const COLUMNAS_PUBLICAS = 'id, nombre, instructor, fecha, cupo';

async function listarTalleres() {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM talleres ORDER BY id`);
    return filas;
}

async function ObtenerPorId(id) {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM talleres WHERE id = ?`, [id]);
    return filas[0];
}

async function registrarAlumno(idTaller, idAlumno) {
    const [info]= await pool.query(
        `INSERT INTO asistencia (id_taller, id_alumno) VALUES (?, ?)`, [idTaller, idAlumno]
    );
    return info.affectedRows > 0;
}

module.exports = {ObtenerPorId, registrarAlumno};