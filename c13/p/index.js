const getInfo = async () => {
  try {
    resultado = await axios('informacion.txt')
    document.querySelector('.num-aprobados').innerHTML = resultado.data.aprobados
    document.querySelector('.num-desaprobados').innerHTML = resultado.data.desaprobados
  } catch (error) {
    console.log(error)
  }
}

document.getElementById('getInfo').addEventListener('click', getInfo)