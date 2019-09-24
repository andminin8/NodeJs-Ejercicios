

console.log("Hola Clase, hoy es: ", Date(Date.now()));

var data_entry = {

    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function (){

        if( data_entry.C > data_entry.B &&
            data_entry.D > data_entry.B &&
            data_entry.D > data_entry.C &&
            data_entry.D > data_entry.A ) {
                return true;
            }

            return false;
    },
    intervalo: setInterval( function(){

        data_entry.A = Math.ceil( Math.random()*4 )
        data_entry.B = Math.ceil( Math.random()*4 )
        data_entry.C = Math.ceil( Math.random()*4 )
        data_entry.D = Math.ceil( Math.random()*4 )


        if( data_entry.resultado()){

            clearInterval( data_entry.intervalo );
            console.log("el orden de las llamadas es:  ", data_entry.A)
            console.log("el orden de las llamadas es:  ", data_entry.B)
            console.log("el orden de las llamadas es:  ", data_entry.C)
            console.log("el orden de las llamadas es:  ", data_entry.D)

        } 
    },10)

}