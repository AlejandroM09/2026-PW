const express = require('express');
const tallerControlador = require('./Controlador/taller_controlador');
const asistenciaControlador = require('./Controlador/asistencia_controlador');
const usuarioControlador = require('./Controlador/usuario_controlador');


const app = express();

app.use(express.json());

const PORT= 4000;

app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Registro de Asistencia - CECyT 9 funcionando correctamente' });
});

//ejemplo de una petición por medio de una ruta principal GET
app.get('/saludo',(req,res)=>{
    res.json({mensaje:'Hola esto es una prueba en GET'})
});

app.post('/eco', (req,res)=>{
    const{texto}=req.body;
    if(!texto){
        return res.status(400).json({error:'El texto es obligatorio'});
        }
        res.status(201).json({eco:texto});
});

app.get('/api/talleres', tallerControlador.listarTalleres);
app.get('/api/talleres/:id', tallerControlador.obtenerTaller);
app.post('/api/talleres', tallerControlador.crearTaller);
app.post('/api/asistencias', asistenciaControlador.registrarAsistencia);
app.get('/api/talleres/:id/asistencias', asistenciaControlador.consultarAsistenciaPorTaller);
app.get('/api/usuarios', usuarioControlador.listarUsuarios);
app.get('/api/usuarios/:id', usuarioControlador.obtenerUsuario);



app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})

