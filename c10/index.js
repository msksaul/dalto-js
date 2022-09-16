let exp = 'pera'

switch(exp) {
  case 'banana': 
    console.log('esta fruta es amarilla')
    break
  case 'pera': 
    console.log('tiene forma de cabeza')
    break
  case 'manzana':
    console.log('los primeros humanos pecaron comiendola')
    break
  default:
    console.log('fruta indefinida')
}

try {
  asdfasdfa
} catch (error) {
  console.log(typeof(error))
}

try {
  asdfasdfa
} catch (error) {
  if(3>5) {
    console.log('ha ocurrido un error')
  }
  else {
    console.log('xd')
  }
} finally {
  console.log('me muestro igual')
}

try {
  throw {
    error: ':v'
  }
} catch (error) {
  console.log(error.error)
}