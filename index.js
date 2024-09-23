import express from 'express';
const app = express();
const puerto = 3000;
//Ruta Principal
app.get('/', (req, res) => {
res.send('¡Hola, mundo con Express! ');
});
//Iniciar el servidor
app.listen(puerto, () => {
console.log(`Servidor en funcionamiento en el puerto${puerto}`);
});