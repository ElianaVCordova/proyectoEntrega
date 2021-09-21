// BOTON DE INICIO DE FOMULARIO AGREGADO CON DOM
$("#arrancarFormulario").prepend(' <button id="iniciar">¡SII!</button> ');


let i = 0
let porcion =0
let semanal= 0
let mensual=0
let peso=0


const listaPerro =[]
//CREACION DE OBJETO
class Perro {
    constructor(nombre, edad, peso, raza, genero, porcion, semanal, mensual){
    this.nombre = nombre.toUpperCase();
    this.edad = edad;
    this.peso = peso;
    this.raza= raza;
    this.genero = genero;
    this.porcion = porcion;
    this.semanal = semanal;
    this.mensual= mensual;
    }
}
let agregar= $("#agregarPerro"); 
//EVENTO CLICK EN BOTON AGREGARPERRO DEL HTML
agregar.on("click", guardarPerro)
    function guardarPerro (){

        let nombre = $("#nombre").val();
        let edad = $("#edad").val();
        let raza = $("#razaPerro").val();
        let peso =  $("#peso").val();
        let genero =  $("#genero").val();
        if((nombre.trim()=="") || (edad=="") || (raza=="") || (peso=="") || (genero =="")){
            alert("Hay campos vacios");
        }
        else {
            //PUSH AL ARRAY DE CADA PERRO
            const perro1 = new Perro (nombre, edad, peso, raza, genero, porcion, semanal, mensual)
            calcularPerro(perro1)
            listaPerro.push(perro1);
            //ALAMCENAMIENTO EN EL SESSION STORAGE Y TRANSFORMACION DE ARRAY A JSON
            let datoStorage= sessionStorage.getItem("listaPerro")
            let datoParseado=JSON.stringify(listaPerro);
            console.log(datoParseado); 
            alert(`${nombre} agregado`)
            
        }

    }    

   //FUNCIONES DE CALCULOS DEL OBJETO PERRO 
   
function porcentaje (peso){
    //listaPerro[i].porcion = parseFloat(peso * 2/100);
    porcion = parseFloat(peso * 2/100);
    return porcion;
    
}
function semana (porcion){
    semanal= parseFloat( porcion * 7);
    return semanal;
}
function mes (porcion){
    mensual= parseFloat( porcion * 31);
    return mensual;
}

function calcularPerro (perro1){
    perro1.porcion= porcentaje(perro1.peso);
    perro1.semanal= semana(perro1.porcion);
    perro1.mensual= mes(perro1.porcion);     

console.log(perro1);
mostrar(perro1);
}



//EVENTO CLICK EN BOTON INICIAR CREADO CON DOM
$("#iniciar").click(() => { 
    $("#formulario").fadeIn("3000");

    //LLAMADO AL API CON AJAX PARA SELECT RAZAS DEL FORMULARIO
    let URLGET = "https://run.mocky.io/v3/369252d5-222f-4e97-b160-098f323e2ce9"

    $.get(URLGET, function (respuesta, estado) {
        if(estado === "success")
        
        console.log(respuesta);
        
        for(let raza= 0 ; raza<respuesta.data.length; raza++) {
        $("#razaPerro").append(`<option value=${respuesta.data[raza]}>${respuesta.data[raza]}</option>`);
        }
                              });
});


//FUNCION FINAL APLICADA EN EL BOTON AGREGARPERRO INSERTANDO CON DOM EN LISTAPERROSHTML
function mostrar (perro1){
    $("#listaPerrosHtml").append(`<ul style="border: 2px darkgreen solid">
                                <li> ${perro1.nombre}</li>
                                <li> ${perro1.edad} años.</li>
                                <li> Su peso es ${perro1.peso} kilos.</li>
                                <li> ${perro1.raza}</li>
                                <li> ${perro1.genero}</li>
                                <li> La porcion diaria es ${perro1.porcion} kilos,dividilo por la cantidad de veces que le des de comer.</li>
                                <li> Come ${perro1.semanal} kilos por semana.</li>
                                <li> Come ${perro1.mensual} kilos por mes.</li>
                                </ul>`);                            
                            }

//M0DIFICACIONES CSS CON JQUERY

$("#arrancarFormulario").css({
    "text-align": "center",
    "justify-content": "center",
    "padding-bottom": "20px"});

$("#listaPerrosHtml").css({
    "display": "flex",
    "color": "seashell",
    "font-family": "'Benne', serif",
    "width": "auto"});                            
