let alto = window.screen.availHeight
let ancho = window.screen.availWidth

let comprar = confirm(`el alto es: ${alto}, el ancho es: ${ancho}`)

if(comprar) {
  alert('compra realizada exitosamente')
}
else {
  alert('compra cancelada')
}