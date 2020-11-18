let {crearArchivo} = require('./multiplicacion/multiplicacion');
let {impTabla}= require('./multiplicacion/multiplicacion')
let {argumentos} = require('./config/yars');
let colors = require('colors');


// console.log(process.argv)


// console.log('argv',argumentos.base)n
let comando  = argumentos._[0];


switch (comando) {
    case 'listar':
        console.log(argumentos.limite)
        impTabla(argumentos.base,argumentos.limite)

        break;
    case 'crear':
        console.log('crear');
        
        
    crearArchivo(argumentos.base,argumentos.limite).then((archivo)=>{console.log(`se creo el archivo ${archivo}`.trap)})
                    .catch((err) => console.log(err));
    break
    default:
        console.log('comando no reconocido')
        break;
}
console.log(argumentos.limite)


