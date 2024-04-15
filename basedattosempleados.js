let empleados=Array(
    {
        id:1,
        nombre:"Laura Valentina Correa Cano",
        cargo:"Programadora",
        telefono:"3216255834",
        correo:"lalaceleste1205@gmail.com",
        salario:5000000,
        contactoEmergencia: "3215889612",
        foto:"./img/per1.jfif"
    },
    {
        id:2,
        nombre:"Laura Cano",
        cargo:"Comerciante",
        telefono:"3216255831",
        correo:"lalaceleste1206@gmail.com",
        salario:2000000,
        contactoEmergencia: "3215889610",
        foto:"./img/per2.jfif"
    },

    {
        id:3,
        nombre:"Laura Valentina Correa ",
        cargo:"Vendedora1",
        telefono:"3216255832",
        correo:"lalaceleste1205@gmail.com",
        salario:1300000,
        contactoEmergencia: "3215889611",
        foto:"./img/per3.webp"
    },

    {
        id:4,
        nombre:"Laura Valentina  Cano",
        cargo:"Aseadora",
        telefono:"3216255833",
        correo:"lalaceleste1207@gmail.com",
        salario:1200000,
        contactoEmergencia: "3215889613",
        foto:"/img/per4.webp"
    },
    {
        id:5,
        nombre:"Valentina Cano",
        cargo:"Gerente",
        telefono:"3216255835",
        correo:"lalaceleste1208@gmail.com",
        salario:4000000,
        contactoEmergencia: "3215889614",
        foto:"./img/per5.webp"
    },

    {
        id:6,
        nombre:"Valentina Correa ",
        cargo:"Administradora",
        telefono:"3216255836",
        correo:"lalaceleste1209@gmail.com",
        salario:2500000,
        contactoEmergencia: "3215889615",
        foto:"./img/per6.webp"
    },

    {
        id:7,
        nombre:"Valentina Correa Cano",
        cargo:"Secretaria",
        telefono:"3216255837",
        correo:"lalaceleste1201@gmail.com",
        salario:2500000,
        contactoEmergencia: "3215889616",
        foto:"./img/per7.webp"
    },
    {
        id:8,
        nombre:"Laura Correa Cano",
        cargo:"Agente de ventas",
        telefono:"3216255838",
        correo:"lalaceleste1202@gmail.com",
        salario:3000000,
        contactoEmergencia: "3215889617",
        foto:"./img/per8.webp"
    },

    {
        id:9,
        nombre:"Laura Correa",
        cargo:"Asesora comercial",
        telefono:"3216255839",
        correo:"lalaceleste1204@gmail.com",
        salario:1600000,
        contactoEmergencia: "3215889618",
        foto:"./img/per9.webp"
    },
    {
        id:10,
        nombre:"Brenda Laura Natalia Ortiz Garcia ",
        cargo:"Impulsadora",
        telefono:"3216255840",
        correo:"lalaceleste1210@gmail.com",
        salario:5000000,
        contactoEmergencia: "3215889619",
        foto:"./img/per10.jfif"
    },
    {
        id:11,
        nombre:"Laura Natalia Ortiz Garcia",
        cargo:"Diseñadora Gráfica",
        telefono:"3216255841",
        correo:"lalaceleste1211@gmail.com",
        salario:4200000,
        contactoEmergencia: "3215889620",
        foto:"./img/per11.jpg"
    },
    {
        id:12,
        nombre:"Brenda Laura",
        cargo:"Maquilladora",
        telefono:"3216255842",
        correo:"lalaceleste1212@gmail.com",
        salario:3000000,
        contactoEmergencia: "3215889621",
        foto:"./img/per12.webp"
    },

    {
        id:13,
        nombre:"Laura Ortiz",
        cargo:"Contratista",
        telefono:"3216255843",
        correo:"lalaceleste1213@gmail.com",
        salario:2900000,
        contactoEmergencia: "3215889622",
        foto:"./img/per13.jfif"
    },

    {
        id:14,
        nombre:"Brenda Garcia",
        cargo:"Recepcionista",
        telefono:"3216255844",
        correo:"lalaceleste1214@gmail.com",
        salario:2000000,
        contactoEmergencia: "3215889623",
        foto:"./img/per14.webp"
    },
    {
        id:15,
        nombre:"Natalia Garcia",
        cargo:"Programadora",
        telefono:"3216255845",
        correo:"lalaceleste1215@gmail.com",
        salario:6500000,
        contactoEmergencia: "3215889624",
        foto:"./img/per15.jpg"
    },

    {
        id:16,
        nombre:"Brenda Laura Ortiz",
        cargo:"Marketing Digital",
        telefono:"3216255846",
        correo:"lalaceleste1216@gmail.com",
        salario:4100000,
        contactoEmergencia: "3215889625",
        foto:"./img/per16.webp"
    },

    {
        id:17,
        nombre:"Brenda Natalia ",
        cargo:"Programadora",
        telefono:"3216255847",
        correo:"lalaceleste1217@gmail.com",
        salario:6500000,
        contactoEmergencia: "3215889626",
        foto:"./img/per17.webp"
    },
    {
        id:18,
        nombre:"Brenda Laura Natalia",
        cargo:"Técnica",
        telefono:"3216255848",
        correo:"lalaceleste1218@gmail.com",
        salario:4500000,
        contactoEmergencia: "3215889627",
        foto:"./img/per18.jfif"
    },

    {
        id:19,
        nombre:"Natalia Ortiz Garcia",
        cargo:"Directora Recursos Humanos",
        telefono:"3216255849",
        correo:"lalaceleste1219@gmail.com",
        salario:3900000,
        contactoEmergencia: "3215889628",
        foto:"./img/per19.webp"
    },
    {
        id:20,
        nombre:"Brenda Garcia",
        cargo:"Logistica",
        telefono:"3216255850",
        correo:"lalaceleste1220@gmail.com",
        salario:2900000,
        contactoEmergencia: "3215889629",
        foto:"./img/per20.web"
    },
)

//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinámica de elementos
//1. Debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid", "mx-auto", "d-block")
    foto.src=empleado.foto
    
    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    /*let cargo=document.createElement("h3")
    cargo.classList.add("col")

    let telefono=document.createElement("h3")
    telefono.textContent=("")

    let correo=document.createElement("h4")
    

    let salario=document.createElement("h4")*/
   

    //se asocian las estructuras en orden lógico
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    /*tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)*/

    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)


})









