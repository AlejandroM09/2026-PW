const pool = require('../bd-local');

const COLUMNAS_PUBLICAS = 'id, taller_id, nombre_alumno, boleta';

async function registrarAsistencia(idTaller, nombreAlumno, boleta) {
    const [info]= await pool.query(
        `INSERT INTO asistencia (taller_id, nombre_alumno, boleta) VALUES (?, ?, ?)`, [idTaller, nombreAlumno, boleta]
    );
    return info.affectedRows > 0;
}

async function consultarAsistenciaPorTaller(idTaller) {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM asistencia WHERE taller_id = ?`, [idTaller]);
    return filas;
}