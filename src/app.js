import express from "express";
import horaActual from "./time.js";
const app = express();
app.get('/', (req,res)=>{
    res.send("Bienvenido!");
})

app.get('/hora', (req, res)=>{
    res.send("La hora es " + horaActual());
})

app.get('/fecha-completa', (req, res)=>{
    const fecha = new Date();
    res.send(fecha.toLocaleDateString());
})

app.use((req, res, next) => {
    res.status(404).send(":(");
})
export default app;