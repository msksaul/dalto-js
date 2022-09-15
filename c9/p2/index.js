const alumnos = [
  {
    nombre: 'Lucas Dalto',
    email: 'soydalto@gmail.com',
    materia: 'Fisica 3'
  },
  {
    nombre: 'Karen Guerra',
    email: 'karento@gmail.com',
    materia: 'Bases'
  },
  {
    nombre: 'Jorge Dali',
    email: 'soyjorge@gmail.com',
    materia: 'Progra'
  },
  {
    nombre: 'Pedro Juan',
    email: 'pedroto@gmail.com',
    materia: 'Mate'
  },
  {
    nombre: 'Melvin Leys',
    email: 'somelo@gmail.com',
    materia: 'Fisica 1'
  }
]

const boton = document.querySelector('.boton-confirmar')

for(alumno in alumnos) {
  let datos = alumnos[alumno]
  let nombre = datos['nombre']
  let email = datos['email']
  let materia = datos['materia']
  let htmlCode = `
    <div class='grid-item nombre'>${nombre}</div>
    <div class='grid-item email'>${email}</div>
    <div class='grid-item materia'>${materia}</div>
    <div class='grid-item semana'>
      <select class='semana-elegida'>
        <option value="Semana 1">Semana 1</option>
        <option value="Semana 2">Semana 2</option>
      </select>
    </div>
  `
  document.querySelector('.grid-container').innerHTML+= htmlCode
}

boton.addEventListener('click', () => {
  let elementos = document.querySelectorAll('.semana')
  let semanasElegidas = document.querySelectorAll('.semana-elegida')
  for(elemento in elementos) {
    let semana = elementos[elemento]
    semana.innerHTML = semanasElegidas[elemento].value
  }
})