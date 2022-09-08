class Calculadora  {
  constructor(){
  }
  sumar(num1, num2){
    return parseInt(num1) + parseInt(num2)
  }
}

const calc = new Calculadora()

document.write(calc.sumar(1,2) + '<br></br>')

const obtenerInformacion = (materia) => {
  let materias = {
    fisica: ['perez', 'pedro', 'maria', 'pepito'],
    programacion: ['dalto', 'pedro', 'juan', 'pepito'],
    logica: ['arriola', 'pedro', 'maria', 'juan', 'pepito'],
    quimica: ['lopez', 'pedro', 'maria', 'juan']
  }
  if(materias[materia] !== undefined) {
    return [materias[materia], materia, materias]
  }
  else {
    return false
  }
}

let materia = 'fisica'

let informacion = obtenerInformacion(materia)

if(informacion !== false) {
  let profesor = informacion[0][0]
  document.write(`alumnos presentes en ${informacion[1]}: <b>${informacion[0].slice(1)}</b>, profesor: ${profesor}<br>`)
}

const cantidadDeClases = (alumno) => {
  let cantidadTotal = 0
  for(info in informacion[2]) {
    if(informacion[2][info].includes(alumno)) {
      cantidadTotal++
    }
  }
  return cantidadTotal
}

document.write(cantidadDeClases('perez') + '<br>')

const materias = {
  fisica: ['perez', 'pedro', 'maria', 'pepito'],
  programacion: ['dalto', 'pedro', 'juan', 'pepito'],
  logica: ['arriola', 'pedro', 'maria', 'juan', 'pepito'],
  quimica: ['lopez', 'pedro', 'maria', 'juan']
}

const inscribir = (alumno, materia) => {
  let personas = materias[materia]
  let alumnos = personas.shift()
  if(alumno.length >= 2) {
    document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
  }
  return alumnos
}

inscribir('pedrito', 'fisica')