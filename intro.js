let miNombre = "Federico"
let miApellido = "Tarable"
let miEdad = 32
let miMascota = "nubecita"
let edadMascota = 22

console.log(miApellido, miEdad, miMascota, miNombre, edadMascota)

let nombreCompleto = miNombre + miApellido

console.log(nombreCompleto)

let textoPresentacion = "Hola mi nombre es " + miNombre + " " + miApellido + " tengo " + miEdad + " años, " + "mi mascota se llama " + miMascota + " y su edad es " + edadMascota + "."

console.log(textoPresentacion)

let sumaEdades = edadMascota + miEdad
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades, restaEdades, productoEdades, divisionEdades)

const alumno = {

    "nombre": "Federico",
    "edad": 32,
    "curso": "JavaScript",
    "año": "primero",
    "nota": 10

}

console.table(alumno)

console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.curso)
console.log(alumno.año)
console.log(alumno.nota)

const mascota = {

    "nombre": "Nubecita",
    "edad": 22,
    "color": "negro",
    "mordida": "pequeña",
    "manchas": 3

}

console.table(mascota)

console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.mordida)
console.log(mascota.manchas)

const frutas = ["manzana", "pera", "banana", "mandarina", "tomtate"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])


const numeros = [1, 2, 3, 4, 5]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

const familia = ["madre", "padre", "hermano", "abuelo", "abuela"]

console.log(familia)

console.log(familia[1])
console.log(familia[0])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio = "me encanta la " + frutas[1] + " me las como de a " + numeros[3] + ", pero a mi " + familia[4] + " no."

console.log(textoAleatorio)

let edadDeFede = prompt("cual es mi edad?")
console.log("mi edad " + edadDeFede)

let edadDeCompañero = prompt("cual es la edad de tu compañero?")
console.log("edad compañero " + edadDeCompañero)

if (edadDeFede > edadDeCompañero) {
    console.log("Federico es mas grande")
}
else if (edadDeCompañero > edadDeFede) {
    console.log("mi compañero es mas grande")
}
else {
    console.log("Tenemos la misma edad")
}

let soyMayorDeEdad = edadDeFede > 18 ? "Soy mayor" : "Soy menor de edad"
console.log(soyMayorDeEdad)

let edadPersona = prompt("que edad tiene la persona?")
let alturaPersona = prompt("que altura tiene la persona en centimetros?")

let puedeSubir = edadPersona >= 6 && alturaPersona > 120 ? "puede subir a la atraccion" : "no puede subir"

console.log(puedeSubir)

let invitado = prompt("Ud es un invitado VIP, Normal o Limitado?")
let saldo = prompt("Que saldo dispone?")

let puedePasar = invitado == "VIP" || saldo >= 1000 ? "puede pasar" : "no puede pasar"

console.log(puedePasar)