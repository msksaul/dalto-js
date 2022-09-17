function prueba(callback){
  callback('pedro')
}

function decirNombre(nombre){
  console.log(nombre)
}

prueba(decirNombre)

class Persona {
  constructor(nombre, instagram) {
    this.nombre = nombre
    this.instagram = instagram
  }
}

const persona = new Persona('lucas dalto', '@soydalto')

console.log(persona)

const data = [
  ['lucas dalto', '@soydalto'],
  ['robertico', '@robert'],
  ['rancio ramirez', '@rancio'],
  ['camila nesa', '@milanesa'],
]

const personas = []

for(let i=0; i<data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1])
}

console.log(personas)

const obtenerInstagram = (id, cb) => {
  if(personas[id].instagram === undefined) {
    cb('no se ha encontrado el instagram')
  }
  else {
    cb(null,personas[id].instagram)
  }
}

const obtenerPersona = (id, cb) => {
  if(personas[id] === undefined) {
    cb('no se ha encontrado la persona')
  }
  else {
    cb(null,personas[id], id)
  }
}

obtenerPersona(5, (err, persona, id) => {
  if(err) {
    console.log(err)
  }
  else {
    console.log(persona.nombre)
    obtenerInstagram(id, (err,instagram) => {
      if(err) {
        console.log(err)
      }
      else {
        console.log(instagram)
      }
    })
  }
})

let nombre = 'pedr'

const promesa = new Promise((resolve, reject) => {
  if(nombre !== 'pedro') reject('lo siento el nombre no es pedro')
  else resolve(nombre)
})

promesa.then(resultado => {
  console.log(resultado)
}).catch(err => {
  console.log(err)
})


const obtenerInstagramC = (id) => {
  return new Promise((resolve, reject) => {
    if(personas[id].instagram == undefined) reject('no se ha encontrado el instagram')
    else{resolve(personas[id].instagram)}
  })
} 

const obtenerPersonaC = (id) => {
  return new Promise((resolve, reject) => {
    if(personas[id] == undefined) reject('no se ha encontrado la persona')
    else{resolve(personas[id])}
  })
}

obtenerPersonaC(1).then((persona) => {
  console.log(persona.nombre)
  return obtenerInstagramC(1)
}).then(instagram => {
  console.log(instagram)
}).catch(e => {console.log(e)})

const objeto = {
  propiedad1: 'valor 1',
  propiedad2: 'valor 2',
  propiedad3:  'valor 3'
}

const obtenerInformacion = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(objeto)}, 1000)
  })
}

obtenerInformacion().then(res => console.log(res))

const mostrarResultado = async () => {
  const resultado = await obtenerInformacion()
  console.log(resultado)
}

mostrarResultado()

const obtenerInformacionAsync = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(text)}, Math.random()*200)
  })
}

const mostrarData = async () => {
  const data1 = await obtenerInformacionAsync('1: primero')
  const data2 = await obtenerInformacionAsync('2: segundo')
  const data3 = await obtenerInformacionAsync('3: tercero')
  console.log(data1)
  console.log(data2)
  console.log(data3)
}

mostrarData()
