const bcrypt = require('brypt.js')
const asistenciaModel = require('../Modelo/asistencia_modelo');

function esDuplicado(error){
    return error.code === 'ER_DUP_ENTRY'|| error.code==='23505';
}

async function registrarAsistencia(req, res) {
    try{
        const{ idTaller, nombreAlumno, boleta}=req.body;
        const asistenciaRegistrada = await asistenciaModel.registrarAsistencia(idTaller, nombreAlumno, boleta);
        res.json({registrado: asistenciaRegistrada});
    }catch(error){
        res.status(500).json({error:error.message});
    }

}

async function consultarAsistenciaPorTaller(req,res) {
    try{
        const{idTaller}=req.params;
        const asistencias = await asistenciaModelo.consultarAsistenciaPorTaller(idTaller);
        res.json(asistencias);
    }catch (error){
        res.status(500).json({error:error.message})
    }
    
}


