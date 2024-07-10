const clientes = [
  {
    id: "66849dd55660ae943010438a",
    activo: true,
    ingresosMensuales: 19809.92,
    imagen: "http://placehold.it/32x32",
    edad: 26,
    nombres: "Lela Duffy",
    sexo: "female",
    email: "leladuffy@recrisys.com",
    celular: "+1 (808) 590-2203",
    direccion: "Hancock Street, 103, Moscow, Idaho, 3986",
    fechaRegistro: "2021-11-26T12:56:22 +05:00",
    carros: ["Nisan", "Nisan"],
  },
  {
    id: "66849dd5abcffca7b0564c6e",
    activo: false,
    ingresosMensuales: 13372.79,
    imagen: "http://placehold.it/32x32",
    edad: 32,
    nombres: "Melody Gould",
    sexo: "female",
    email: "melodygould@recrisys.com",
    celular: "+1 (952) 452-2634",
    direccion: "Whitwell Place, 537, Chical, West Virginia, 1051",
    fechaRegistro: "2024-03-28T01:00:41 +05:00",
    carros: ["Nisan", "Lamborghini"],
  },
  {
    id: "66849dd5f3358bf4d100f122",
    activo: false,
    ingresosMensuales: 14106.79,
    imagen: "http://placehold.it/32x32",
    edad: 44,
    nombres: "Allie Phelps",
    sexo: "female",
    email: "alliephelps@recrisys.com",
    celular: "+1 (901) 455-3428",
    direccion: "Emerson Place, 841, Fulford, American Samoa, 2673",
    fechaRegistro: "2022-02-17T10:45:34 +05:00",
    carros: ["Nisan", "Toyota"],
  },
  {
    id: "66849dd5bed049ab31e1c456",
    activo: false,
    ingresosMensuales: 19642.44,
    imagen: "http://placehold.it/32x32",
    edad: 35,
    nombres: "Campos Brennan",
    sexo: "male",
    email: "camposbrennan@recrisys.com",
    celular: "+1 (978) 512-3774",
    direccion: "Channel Avenue, 327, Greer, New Hampshire, 9417",
    fechaRegistro: "2023-04-24T03:05:15 +05:00",
    carros: ["Porsche", "Toyota"],
  },
  {
    id: "66849dd5dbaeb792c1ffaf0a",
    activo: false,
    ingresosMensuales: 19402.44,
    imagen: "http://placehold.it/32x32",
    edad: 41,
    nombres: "Branch Harper",
    sexo: "male",
    email: "branchharper@recrisys.com",
    celular: "+1 (995) 539-3004",
    direccion: "Division Avenue, 819, Idledale, Arizona, 1128",
    fechaRegistro: "2016-12-29T06:42:53 +05:00",
    carros: ["Lamborghini", "Audi"],
  },
  {
    id: "66849dd525922c84322e8002",
    activo: true,
    ingresosMensuales: 15676.79,
    imagen: "http://placehold.it/32x32",
    edad: 48,
    nombres: "Morrison Bishop",
    sexo: "male",
    email: "morrisonbishop@recrisys.com",
    celular: "+1 (896) 517-2669",
    direccion: "Schaefer Street, 644, Elwood, Iowa, 4181",
    fechaRegistro: "2016-08-07T11:47:39 +05:00",
    carros: ["Toyota", "Lamborghini"],
  },
];

console.log("Los clientes que tienen ingresos mensuales mayores a 10 000");
for (let cliente of clientes) {
  if (cliente.ingresosMensuales > 10000) {
    console.log(cliente.nombres, cliente.ingresosMensuales);
  }
}

console.log("");
console.log("Los clientes hombres");
for (let cliente of clientes) {
  if (cliente.sexo === "male") {
    console.log(cliente.nombres, cliente.sexo);
  }
}

console.log("");
console.log("Los clientes menores de 30 años");
for (let cliente of clientes) {
  if (cliente.edad < 30) {
    console.log(cliente.nombres, cliente.edad);
  }
}

//definicion de funcion
console.log(" ")
console.log("2. Implementar una función que recibe 2 argumentos y los sume, el resultado se deberá imprimir en consola")
function sumar(numero1, numero2){
    let suma = numero1 + numero2
    console.log("El resultado es " + suma)
}
//ejecucion de la funcion
sumar(10,96)

console.log("")
console.log("3. Un estudiante realiza 4 exámenes, calcular el promedio de estos")
function notas(nota1, nota2, nota3, nota4){
    let promedio= (nota1+nota2+nota3+nota4)/4
    console.log("El promedio es " + promedio)
}
notas(20,18,11,16)


console.log("")
console.log("4. Calcular el área de un rectángulo")
function rectangulo(largo, ancho){
    let area= (largo*ancho)
    console.log("El area del rectangulo es " + area)
    
}

rectangulo(15,5)


console.log("")
console.log("5. Calcular el área de un triángulo")
function triangulo(base, altura){
    let area = (base*altura)/2
    console.log("El area del triangulo es " + area)
}
triangulo(25,34)

console.log("")
console.log("6. Calcular el área de una circunferencia")


function calcularAreaCircunferencia(radio) {
    const pi = Math.PI;
    const area = pi * (radio ** 2)
    console.log("El area de la circunferencia es " + area)
 }
 calcularAreaCircunferencia(5)


 console.log(" ")
 console.log("7. Calcular sueldo de un trabajador")
 function calcularSueldo(horasTrabajadas, salarioHoraHombre){
     let sueldoTotal = horasTrabajadas * salarioHoraHombre
     console.log("El sueldo total es de $" + sueldoTotal)
 }
 
 calcularSueldo(40, 20)



 console.log("")
 console.log("8. Calcular cuantas pulgadas debe pedir una modista.")
 function metrosAPulgadas(metros) {
    const pulgadaEnMetros = 0.0254; 
    const pulgadas = metros / pulgadaEnMetros;
    console.log("La modista debe pedir " + pulgadas.toFixed(2) +" pulgadas.")
  }
  
 metrosAPulgadas(5)


 
console.log(" ")
console.log("9. Determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano")
function calcularDolares(soles, tipoCambio){
    let dolares = soles / tipoCambio
    console.log("Con " + soles + " soles, puede adquirir " + dolares.toFixed(2) + " dólares")
}

calcularDolares(800, 3.8)


console.log("")
console.log("10. Determinar la edad de una persona.")

function calcularEdad(anioNacimiento) {
  const anioActual = 2024; 
  const edad = anioActual - anioNacimiento;
  console.log("La edad de la persona es " + edad + " años.")
}

calcularEdad(1996)


