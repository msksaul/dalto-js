const button = document.querySelector('.button')
const contenedor = document.querySelector('.contenedor')
const contenedor2 = document.querySelector('.contenedor2')
const input = document.querySelector('.input-prueba')

/* button.addEventListener('click', (event) => {
  console.log(event.target)
  event.stopPropagation()
})

contenedor.addEventListener('click', (e) => {
  console.log(e.target)
}) */

button.addEventListener('dblclick', (event) => {
  console.log(event.target)
  event.stopPropagation()
})

contenedor.addEventListener('mouseover', (e) => {
  console.log(e.target)
})

contenedor2.addEventListener('contextmenu', (e) => {
  console.log('click derecho en el contenedor')
})

input.addEventListener('keydown', (e) => {
  console.log('una tecla fue presionada')
})
input.addEventListener('keypress', (e) => {
  console.log('una tecla fue presionada y soltada')
})
input.addEventListener('keyup', (e) => {
  console.log('una tecla fue soltada')
})

addEventListener('resize', () => {
  console.log('se ha actualizado la resolucion')
})

input.addEventListener('select', () => {
  console.log('se ha seleccionado')
})

const temporizador = setTimeout(() => {
  document.write('hola')
}, 500);

clearTimeout(temporizador)

const intervalo = setInterval(() => {
  console.log('hola')
}, 500);

clearInterval(intervalo)