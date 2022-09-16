const sendButton = document.getElementById('enviar-nota')

sendButton.addEventListener('click', () => {
  let resultado, mensaje
  try {
    let prevRes = parseInt(document.getElementById('nota-alumno').value)
    if(isNaN(prevRes)){
      throw 'Gracioso'
    }
    mensaje = definirMensaje(prevRes)
    resultado = verificarAprobacion(8,5,prevRes)
  } catch (error) {
    resultado = 'Sos gracioso?'
    mensaje = 'he descubierto que intentaste hackear el sitio'
  }
  abrirModal(resultado, mensaje)
})

const definirMensaje = (pr) => {
  let resultado
  switch(pr) {
    case 1: resultado = 'No podes ser tan malo'
      break
    case 2: resultado = 'Malisimo'
      break
    case 3: resultado = 'No sabes casi nada'
      break
    case 4: resultado = 'Muy Mal'
      break
    case 5: resultado =  'Mal'
      break
    case 6: resultado =  'Regular'
      break
    case 7: resultado =  'Bien, pero puede mejorar'
      break
    case 8: resultado =  'Muy bien'
      break
    case 9: resultado =  'Excelente'
      break
    case 10: resultado =  'Insuperable'
      break
    default: resultado = null
  }
  return resultado
}

const verificarAprobacion = (nota1, nota2, pr) => {
  let promedio = (nota1 + nota2 + pr) / 3
  if(promedio >= 7){
    return '<span class="green">APROBADO</span>'
  }
  return '<span class="red">DESAPROBADO</span>'
}

const abrirModal = (res, msg) => {
  document.querySelector('.resultado').innerHTML = res
  document.querySelector('.mensaje').innerHTML = msg
  let modal = document.querySelector('.modal-background')
  modal.style.display = 'flex'
  modal.style.animation = 'aparecer 1s forwards'
}