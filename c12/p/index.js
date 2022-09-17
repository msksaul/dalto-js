const materiasHTML = document.querySelector('.materias')

const materias = [
  {
    nombre: 'fisica 4',
    nota: 7
  },
  {
    nombre: 'calculo 3',
    nota: 8
  },
  {
    nombre: 'bases de datos 3',
    nota: 6
  },
  {
    nombre: 'matematicas discretas 2',
    nota: 9
  },
  {
    nombre: 'programacion 4',
    nota: 10
  },
]

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id]
    if(materia == undefined) reject('la materia no existe')
    else setTimeout(() => {resolve(materia)}, Math.random()*400)
  })
}

obtenerMateria(0).then(res => console.log(res))
obtenerMateria(1).then(res => console.log(res))
obtenerMateria(2).then(res => console.log(res))
obtenerMateria(3).then(res => console.log(res))
obtenerMateria(4).then(res => console.log(res))

const devolverMaterias = async () => {
  let materia = []
  for(let i=0; i<materias.length; i++) {
    materia[i] = await obtenerMateria(i)
    console.log(materia[i])
    let newHTMLCode = `
      <div class='materia'>
        <div class='nombre'>${materia[i].nombre}</div>
        <div class='nota'>${materia[i].nota}</div>
      </div>
    `
    materiasHTML.innerHTML += newHTMLCode
  }
}

devolverMaterias()