const asistenciaModel = require('../Modelo/asistencia_modelo');

function esDuplicado(error){
    return error.code === 'ER_DUP_ENTRY'|| error.code==='23505';
}

async function registrarAsistencia(req, res) {
    try{
        const{ taller_id, nombre_alumno, boleta, fecha_registro}=req.body;
        if (!taller_id || !nombre_alumno || !boleta) {
        return res.status(400).json({ error: 'taller_id, nombre_alumno y boleta son obligatorios' });
        }
        const asistencia = await asistenciaModel.registrarAsistencia(taller_id, nombre_alumno, boleta,fecha_registro);
        res.status(201).json(asistencia);
    }catch(error){
        res.status(500).json({error:error.message});
    }

}

async function consultarAsistenciaPorTaller(req,res) {
    try{
        const{id}=req.params;
        const asistencias = await asistenciaModel.consultarAsistenciaPorTaller(id);
        res.json(asistencias);
    }catch (error){
        res.status(500).json({error:error.message})
    }
    
}

module.exports = { registrarAsistencia, consultarAsistenciaPorTaller };