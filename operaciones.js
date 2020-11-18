const operaciones = require('./calculadora');
const fs = require('fs')

let suma           = operaciones.suma(2,1),
    resta          = operaciones.resta(2,1),
    divicion       = operaciones.divicion(2,1),
    multiplicacion = operaciones.multiplicacion(2,1)
let arrop = [];
arrop.push(suma);
arrop.push(resta);
arrop.push(divicion);
arrop.push(multiplicacion);

let entrada = arrop.join(`\n`)



fs.writeFile('operacion2.txt',entrada,(err)=>{
    if(err) throw err;
    console.log('tarea completada')
})


