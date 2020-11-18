

const hola = (mensaje)=>{
    try{
        if(mensaje == 'hola'){
            console.log(mensaje)
        }else{
            throw new Error('mensaje incorrecto')
        }
    }catch(err){
        console.log(err)
    }
}
hola('jsjs')