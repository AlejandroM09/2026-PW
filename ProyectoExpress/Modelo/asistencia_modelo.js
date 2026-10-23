const pool = require('../bd-local');

const COLUMNAS_PUBLICAS = 'id, taller_id, nombre_alumno, boleta, fecha_registro';

async function registrarAsistencia(idTaller, nombreAlumno, boleta, fechaRegistro) {
    const [info]= await pool.query(
        `INSERT INTO asistencias (taller_id, nombre_alumno, boleta) VALUES (?, ?, ?)`, [idTaller, nombreAlumno, boleta]
    );
    const [filas] = await pool.query(
        `SELECT ${COLUMNAS_PUBLICAS} FROM asistencias WHERE id = ?`, [info.insertId]
    );
    return filas[0];
}

async function consultarAsistenciaPorTaller(idTaller) {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM asistencias WHERE taller_id = ?`, [idTaller]);
    return filas;
}

module.exports = {registrarAsistencia, consultarAsistenciaPorTaller};