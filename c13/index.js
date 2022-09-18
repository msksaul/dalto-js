const objeto = {
  variable1 : 'pedro',
  variable2 : 'jorge'
}

const json = {
  'variable1' : 'pedro',
  'variable2' : 'jorge'
}

console.log(json)
console.log(objeto)
console.log(JSON.stringify(json))
console.log(JSON.parse(JSON.stringify(json)))

const peticion = new XMLHttpRequest()

peticion.addEventListener('readystatechange', () => {
  console.log(peticion.readyState)
  console.log(peticion.response)
})

peticion.addEventListener('load', () => {
  console.log(peticion.response)
})

peticion.open('GET', 'informacion.txt')

peticion.send()

if(window.XMLHttpRequest) {
  const req = new XMLHttpRequest()
}
else {
  const req = new ActiveXObject('Microsoft.XMLHTTP')
}

let peti = fetch('https://reqres.in/api/users?page=2')

peti
  .then(res => res.text())
  .then(res => console.log(res))

fetch('https://reqres.in/api/register', {
  method: 'POST',
  body: JSON.stringify({
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }),
  headers: {
    'Content-type': 'application/json'
  } 
}).then(res => res.json())
  .then(res => console.log(res))


axios.get('https://reqres.in/api/users?page=2')
  .then(res => console.log(res.data))

axios.post('https://reqres.in/api/register', {
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}).then(res => console.log(res.data))

const getName = async () => {
  let peticion = await fetch('https://reqres.in/api/users?page=2')
  let resultado = await peticion.json() 
  console.log(resultado)
}

document.getElementById('nombre').addEventListener('click', getName)

const getNameAxios = async () => {
  let resultado = await axios.get('https://reqres.in/api/users?page=2')
  console.log(resultado)
}

getNameAxios()