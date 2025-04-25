import express from "express";

app.get('/', (req,res)=>{
    res.send("Bienvenido!");
})

app.get('/hora', (req, res)=>{

})

app.get('/fecha-completa', (req, res)=>{
    const fecha = newDate();
    res.send()
})