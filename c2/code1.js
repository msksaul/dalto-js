let free = false

const validarCliente = (time) => {
  let edad = prompt('cuál es tu edad?')
  if(edad > 18) {
    if(time >= 2 && time < 7 && free == false) {
      alert('podés pasar gratis')
      free = true
    }
    else {
      alert('podés pasar pero tenés que pagar la entrada')
    }
  }
  else {
    alert('sos menor de edad, no puedes pasar')
  }
}

validarCliente(2)
validarCliente(3)