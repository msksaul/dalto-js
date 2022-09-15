const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const materia = document.getElementById('materia')
const boton = document.getElementById('btn-enviar')
const resuldato = document.querySelector('.resultado')

boton.addEventListener('click', (e) => {
  e.preventDefault()
  let error = validarCampos()
  if(error[0]) {
    resuldato.innerHTML = error[1]
    resuldato.classList.remove('green')
    resuldato.classList.add('red')
  }
  else {
    resuldato.innerHTML = 'Solicitud enviada correctamente'
    resuldato.classList.remove('red')
    resuldato.classList.add('green')
  }
})

const validarCampos = () => {
  let error = []
  if(nombre.value.length < 5) {
    error[0] = true
    error[1] = 'El nombre no puede contener menos de 5 caracteres'
    return error
  }
  else if (nombre.value.length > 40) {
    error[0] = true
    error[1] = 'El nombre no puede contener mas de 40 caracteres'
    return error
  }
  else if (email.value.length < 5 || email.value.length > 40 || email.value.indexOf('@') === -1) {
    error[0] = true
    error[1] = 'El email es invalido'
    return error
  }
  else if (materia.value.length < 4 || materia.value.length > 40) {
    error[0] = true
    error[1] = 'La materia no existe'
    return error
  } 
  else {
    error[0] = false
    return error
  }
}