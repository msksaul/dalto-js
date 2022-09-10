let parrafo = document.getElementById('parrafo')

document.write(parrafo.textContent + '<br>')

let tags = document.getElementsByTagName('p')

document.write(tags[0] + '<br>')

let query = document.querySelector('.rancio')
document.write(query + '<br>')

let rango = document.querySelector('.rango')

rango.setAttribute('type', 'range')

document.write(rango.getAttribute('type') + '<br>')


const titulo = document.querySelector('.titulo')

titulo.setAttribute('contentEditable', 'true')
titulo.setAttribute('dir', 'ltr')
titulo.setAttribute('tabindex', '1')
titulo.setAttribute('title', 'normal')

let input = document.querySelector('.input-normal')

document.write(input.placeholder = 'hola' + '<br>')

let elemento = document.querySelector('.elemento')

elemento.style.color = 'red'
elemento.style.backgroundColor = 'blue'
elemento.style.padding = '20px'

elemento.classList.add('grande')
elemento.classList.remove('grande')

let valor = elemento.classList.item(0)

document.write(valor)

valor = elemento.classList.contains('elemento')

document.write(valor + '<br>')

elemento.classList.toggle('grande')

const title = document.querySelector('.title')

let resultado = title.outerHTML

document.write(resultado + '<br>')

const contenedor = document.querySelector('.contenedor')

const item = document.createElement('LI')

const textDelItem = document.createTextNode('Esta es una lista')

item.appendChild(textDelItem)

contenedor.appendChild(item)

const fragmento = document.createDocumentFragment()

for(let i=0; i<20; i++){
  const item = document.createElement('LI')
  item.innerHTML = 'este es un item de la lista'
  fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)

console.log(item)
document.write(item)

const primerHijo = contenedor.firstElementChild
const hijos = contenedor.childNodes
const childs = contenedor.children

const paragraph = document.createElement('P')
const h2_nuevo = document.createElement('H2')
h2_nuevo.innerHTML = 'titulo'

const h2_antiguo = document.querySelector('.h2')

contenedor.replaceChild(h2_nuevo, h2_antiguo)
contenedor.removeChild(h2_nuevo)

let respuesta = contenedor.hasChildNodes()

if(respuesta) {
  document.write('el elemento si tiene hijos')
}
else {
  document.write('el elemento no tiene hijos')
}

console.log(childs)

console.log(contenedor.parentElement)

console.log(paragraph.previousElementSibling)