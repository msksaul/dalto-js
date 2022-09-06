let cantidad = prompt('cuántos alumnos son?')
let alumnosTotales = []

for(let i=0; i<cantidad; i++) {
  alumnosTotales[i] = [prompt('nombre del alumno ' + (i+1)), 0]
}

const tomarAsistencia = (nombre, p) => {
  let presencia = prompt(nombre)
  if(presencia == 'p' || presencia == 'P') {
    alumnosTotales[p][1]++
  }
} 

for(let i=0; i<cantidad; i++) {
  for(alumno in alumnosTotales){
    tomarAsistencia(alumnosTotales[alumno][0], alumno)
  }
}

for(alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
  ----------Presentes: ${alumnosTotales[alumno][1]} <br>
  ----------Ausencias: ${10 - parseInt(alumnosTotales[alumno][1])}
  `
  if(10 - alumnosTotales[alumno][1] >= 2) {
    resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>"
  }
  else {
    resultado+= "<br> <br>"
  }
  document.write(resultado)
}

docu