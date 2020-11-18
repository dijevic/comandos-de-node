
const fs = require('fs');
let colors = require('colors');


let impTabla = (base,limite)=>{
    
    for(let i = 0; i <= limite;i++){
        console.log(`${base} * ${i} = ${base * i}`.rainbow)
    }
}
let crearArchivo =(base,limite)=>{

       
        return new Promise((resolve,reject)=>{
            let data = ''
            if(isNaN(base)){
               return reject(`${base} no es un numero`) 
            }else{
                 for(let i = 1 ; i <= limite;i++){
        data +=(`${base} * ${i} = ${base * i}\n`)
        }
        fs.writeFile(`tablas/tabla${base}.txt`,data,(err)=>{
        if(err) reject(err);
        return resolve(`tabla${base}.txt`)
    })
            }
       
        })
      
   
    }

module.exports = {crearArchivo,impTabla}