let options = {
    base : {
        demand : true,
        alias : 'b'
    },
    limite : {
        alias : 'l',
        default : 20

    }
}

const argumentos = require('yargs')
            .command('listar','mostrar la tabla de multiplicar',options)
            .command('crear','genera un txt de la tabla de multiplicar',options)
            .help()
            .argv;


module.exports = {
    argumentos
}