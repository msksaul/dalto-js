'use strict'

const fecha = new Date()

console.log(fecha.getSeconds())

const addZeros = (n) => {
  if(n.toString().length < 2) return '0'.concat(n)
  return n
} 

const actualizarHora = () => {
  const time = new Date()
  let hora = addZeros(time.getHours())
  let minutos = addZeros(time.getMinutes())
  let segundos= addZeros(time.getSeconds())
  document.querySelector('.hora').textContent = hora
  document.querySelector('.min').textContent = minutos
  document.querySelector('.sec').textContent = segundos
}

actualizarHora()

setInterval(actualizarHora, 1000);

localStorage.setItem('nombre','pedro')
localStorage.removeItem('nombre')

const definirIdioma = () => {
  document.querySelector('.en').addEventListener('click', () => {
    localStorage.setItem('idioma', 'en')
    console.log(`Idioma: ${localStorage.getItem('idioma')}`)
    cerrarModal()
  })
  document.querySelector('.es').addEventListener('click', () => {
    localStorage.setItem('idioma', 'es')
    console.log(`Idioma: ${localStorage.getItem('idioma')}`)
    cerrarModal()
  })
}

const cerrarModal = () => {
  const modal = document.querySelector('.modal-overlay')
  modal.style.animation = 'desaparecer 1s forwards'
  setTimeout(() => modal.style.display = 'none', 1000);
}

const modal = document.querySelector('.modal-overlay')

const idioma = localStorage.getItem('idioma')

if(idioma === null) definirIdioma()
else {
  console.log(`Idioma: ${idioma}`)
  modal.style.display = 'none'
}


const circulo = document.querySelector('.circulo')
const rectangulo = document.querySelector('.rectangulo')
circulo.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('clase', e.target.className)
})
//circulo.addEventListener('drag', () => console.log('2'))
//circulo.addEventListener('dragend', () => console.log('3'))

//rectangulo.addEventListener('dragenter', () => console.log(1))
rectangulo.addEventListener('drop', (e) => {
  console.log(e.dataTransfer.getData('clase'))
})
rectangulo.addEventListener('dragover', (e) => {
  e.preventDefault()
})
//rectangulo.addEventListener('dragleave', () => console.log(4))

const cambiarFondo = (n,e) => {
  e.dataTransfer.setData('textura', n)
}

const zona = document.querySelector('.zona')
zona.addEventListener('dragover', (e) => {
  e.preventDefault()
})
zona.addEventListener('drop', (e) => {
  let n = e.dataTransfer.getData('textura')
  zona.style.backgroundColor = `#00${n}`
})

for(let i=1; i<document.querySelector('.texturas').children.length+1; i++){
  document.querySelector(`.textura${i}`).addEventListener('dragstart', (e) => cambiarFondo(i,e))
}

const posicion = (pos) => {
  console.log(pos)
}

const geolocation = navigator.geolocation
console.log(geolocation.getCurrentPosition(posicion))


console.log(history)

const archivo = document.getElementById('archivo')
archivo.addEventListener('change', (e) => {
  leerArchivo(archivo.files[0])
})

const leerArchivo = ar => {
  const reader = new FileReader()
  reader.readAsDataURL(ar)
  reader.addEventListener('load', (e) => {
    let newImg = `<img src='${e.currentTarget.result}'>`
    document.querySelector('.resultado').innerHTML = newImg
  })
}

const zone = document.querySelector('.zona-arrastre')

zone.addEventListener('dragover', (e) => {
  e.preventDefault()
  changeStyle(e.srcElement, '#444')
})

zone.addEventListener('dragleave', (e) => {
  e.preventDefault()
  changeStyle(e.srcElement, '#888')
})

zone.addEventListener('drop', (e) => {
  e.preventDefault()
  changeStyle(e.srcElement, '#888')
  cargarArchivo(e.dataTransfer.files[0])
  zone.style.border = `4px solid #888`
})

const changeStyle = (obj, color) => {
  obj.style.color = color
  obj.style.border = `4px dashed ${color}`
}

const cargarArchivoText = ar => {
  const reader = new FileReader()
  reader.readAsText(ar)
  reader.addEventListener('load', (e) => {
    document.querySelector('.result').textContent = e.currentTarget.result
  })
}

const cargarArchivo = ar => {
  const reader = new FileReader()
  reader.readAsDataURL(ar)
  reader.addEventListener('progress', (e) => {
    let carga = Math.round((e.loaded/ar.size)*100)
    zone.textContent = `${carga}%`
    document.querySelector('.barra-de-carga').style.width = `${carga}%`
  })
  reader.addEventListener('loadend', (e) => {
    changeStyle(zone, 'green')
  })
  reader.addEventListener('load', (e) => {
    let url = URL.createObjectURL(ar)
    let img = document.createElement('IMG')
    img.setAttribute('src', url)
    document.querySelector('.result').appendChild(img)
  })
}

const cargarArchivoVideo = ar => {
  const reader = new FileReader()
  reader.readAsArrayBuffer(ar)
  reader.addEventListener('load', (e) => {
    let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
    let url = URL.createObjectURL(video)
    let img = document.createElement('VIDEO')
    img.setAttribute('src', url)
    document.querySelector('.result').appendChild(img)
    img.play()
  })
}


const IDBRequest = indexedDB.open('daltobase', 1)

IDBRequest.addEventListener('upgradeneeded', () => {
  const db = IDBRequest.result
  db.createObjectStore('nombres', {
    autoIncrement: true
  })
})

IDBRequest.addEventListener('success', () => {
  leerObjetos()
})

IDBRequest.addEventListener('error', () => {
  console.log('todo mal')
})

document.getElementById('add').addEventListener('click', () => {
  let nombre = document.getElementById('nombre').value
  if(nombre.length > 0) {
    if(document.querySelector('.posible') != undefined) {
      if(confirm('hay elementos sin guardar, quieres continuar?')) {
        addObjeto({nombre: nombre})
        leerObjetos()
      }
    }
    else {
      addObjeto({nombre: nombre})
      leerObjetos()
    }
  }
})

const addObjeto = objeto => {
  const IDBData = getIDBData('readwrite')
  IDBData[0].add(objeto)
  IDBData[1].addEventListener('complete', () => {
    console.log('objecto agregado')
  })
}

const leerObjetos = () => {
  const IDBData = getIDBData('readonly')
  const cursor = IDBData[0].openCursor()
  const fragment = document.createDocumentFragment()
  document.querySelector('.nombres').innerHTML = ''
  cursor.addEventListener('success', () => {
    if(cursor.result) {
      console.log(cursor.result)
      let elemento = nombresHTML(cursor.result.key, cursor.result.value)
      fragment.appendChild(elemento)
      cursor.result.continue()
    }
    else {
      document.querySelector('.nombres').appendChild(fragment)
    }
  })
}

const modificarObjeto = (key, objeto) => {
  const IDBData = getIDBData('readwrite')
  IDBData[0].put(objeto, key)
  IDBData[1].addEventListener('complete', () => {
    console.log('objecto modificado')
  })
}

const eliminarObjeto = (key) => {
  const IDBData = getIDBData('readwrite')
  IDBData[0].delete(key)
  IDBData[1].addEventListener('complete', () => {
    console.log('objecto eliminado')
  })
}

const getIDBData = (mode) => {
  const db = IDBRequest.result
  const IDBTransaction = db.transaction('nombres', mode)
  const objtStore = IDBTransaction.objectStore('nombres')
  return [objtStore, IDBTransaction]
}

const nombresHTML = (id, name) => {
  const container = document.createElement('DIV')
  const h2 = document.createElement('h2')
  const options = document.createElement('DIV')
  const saveButton = document.createElement('button')
  const deleteButton = document.createElement('button')

  container.classList.add('nombre')
  h2.classList.add('person')
  options.classList.add('options')
  saveButton.classList.add('imposible')
  deleteButton.classList.add('delete')

  saveButton.textContent = 'guardar'
  deleteButton.textContent = 'eliminar'

  h2.textContent = name.nombre
  h2.setAttribute('contenteditable', 'true')
  h2.setAttribute('spellcheck', 'false')

  options.appendChild(saveButton)
  options.appendChild(deleteButton)

  container.appendChild(h2)
  container.appendChild(options)

  h2.addEventListener('keyup', () => {
    saveButton.classList.replace('imposible', 'posible')
  })

  saveButton.addEventListener('click', () => {
    if(saveButton.className == 'posible') {
      modificarObjeto(id, {nombre: h2.textContent})
      saveButton.classList.replace('posible', 'imposible')
    }
  })

  deleteButton.addEventListener('click', () => {
    eliminarObjeto(id)
    document.querySelector('.nombres').removeChild(container)
  })

  return container
}