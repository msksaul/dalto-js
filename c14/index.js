'use strict'

let objeto = {
  'propiedad': 'datos'
}

console.log(objeto.__proto__)

const funcion = function(){}

console.log(funcion.prototype.__proto__)

let arr = ['pedro', 234, null]

console.log(arr)

class Obj {
  constructor(){}
  hablar(){
    console.log('hola')
  }
}

let obj = new Obj()

obj.__proto__.hablar = () => {
  console.log('modificado afuera')
}

obj.hablar()

console.log(obj)

let lucas = 'lucas'

const ob = {}

Object.defineProperty(ob, 'nombre', {value: 'pedro', writable: false})
Object.preventExtensions(ob)

//ob.nombre = 'roberto'
//ob.apellido = 'dalto'

console.log(ob.nombre)
//console.log(ob.apellido)

console.log(window === this)

const validarEdad = (msg) => {
  let edad
  try {
    if(msg) edad = prompt(msg)
    else edad = prompt('introduce tu edad')
    if(isNaN(edad)) throw 'introduce un numero para la edad'
    if(edad > 18) console.log('sos mayor de edad')
    else console.log('sos menor de edad')
  }catch(e){
    validarEdad(e)
  }
}

const saludar = (nombre) => {
  return function(){
    console.log(nombre)
  }
}

let saludo = saludar('peter')

//addEventListener('load', saludo)

const cambiarTamaño = tamaño => {
  return () => {
    document.querySelector('.text').style.fontSize = `${tamaño}px`
  }
}

const px12 = cambiarTamaño(12)
const px14 = cambiarTamaño(14)
const px16 = cambiarTamaño(16)

document.querySelector('.t12').addEventListener('click', px12)
document.querySelector('.t14').addEventListener('click', px14)
document.querySelector('.t16').addEventListener('click', px16)

const suma = (frase, ...rest) => {
  let resultado = 0
  for(let i=0; i<rest.length; i++){
    resultado+=rest[i]
  }
  console.log(`${frase} ${resultado}`)
}

suma('pedro', 12, 23, 34)