const pool = require('../bd-local');

const COLUMNAS_PUBLICAS = 'id, nombre, instructor, fecha, cupo';

async function ObtenerPorNombre(nombre) {
    const [filas]= await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM talleres WHERE nombre = ?`, [nombre]);
    return filas[0];
}

async function registrarAlumno(idTaller, idAlumno) {
    const [info]= await pool.query(
        `INSERT INTO asistencia (id_taller, id_alumno) VALUES (?, ?)`, [idTaller, idAlumno]
    );
    return info.affectedRows > 0;
}