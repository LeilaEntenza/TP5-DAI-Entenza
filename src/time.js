const horaActual =() =>{
    let horas;
    const actual = new Date();
    return horas = [actual.getHours(), actual.getMinutes(), actual.getSeconds()]; 

}

module.exports = horaActual;
