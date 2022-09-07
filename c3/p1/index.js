class Celular {
  constructor(color, peso, resolucion, camara, ram){
    this.color = color
    this.peso = peso
    this.resolucion = resolucion
    this.camara = camara
    this.ram = ram
    this.encendido = false
  }
  presionarBotonEncendido(){
    if(this.encendido == false){
      alert('celular encendido')
      this.encendido = true
    }
    else {
      alert('celular apagado')
      this.encendido = false
    }
  }
  reiniciar(){
    if(this.encendido == true){
      alert('reiniciando celular')
    }
    else {
      alert('celular apagado')
    }
  }
  tomarFoto(){
    alert(`foto tomada en una resolucion de ${this.resolucion}`)
  }
  grabarVideo(){
    alert(`grabando video en una resolucion de ${this.resolucion}`)
  }
  mostrarInfo(){
    return `
      color: <b>${this.color}</b>
      peso: <b>${this.peso}</b>
    `
  }
}

class CelularAltaGama extends Celular {
  constructor(color, peso, resolucion, camara, ram, camaraLenta){
    super(color, peso, resolucion, camara, ram)
    this.camaraLenta = camaraLenta
  }
  videoLento(){
    alert('grabando en camara lenta')
  }
  reconocimientoFacial(){
    alert('reconocimiento facial')
  }
  infoAlta(){
    return this.mostrarInfo() + `resolucion de camara trasera: ${this.camaraLenta}`
  }
}

const celular1 = new Celular('rojo', '150g', "5'", 'hd', '2GB')
const gamaAltaC1 = new CelularAltaGama('verde', '130g', "5.2'", '4k', '3GB', 'full hd')

celular1.presionarBotonEncendido()
celular1.tomarFoto()
celular1.grabarVideo()
celular1.reiniciar()
celular1.presionarBotonEncendido()

document.write(`${celular1.mostrarInfo()} <br> ${gamaAltaC1.infoAlta()}`)


class App {
  constructor(descargas, puntuacion, peso){
    this.descargas = descargas
    this.puntuacion = puntuacion
    this.peso = peso
    this.iniciada = false
    this.instalada = false
  }
  abrir(){
    if(this.iniciada = false && this.instalada == true){
      this.iniciada == true
      alert('app iniciada')
    }
  }
  cerrar(){
    if(this.iniciada == true && this.instalada == true){
      this.iniciada = false
      alert('app cerrada')
    }
  }
  instalar(){
    if(this.instalada == false){
      this.instalada = true
      alert('app instalada')
    }
  }
  desinstalar(){
    if(this.instalada == true){
      this.instalada = false
      alert('app desinstalada')
    }
  }
  appInfo(){
    return `
      Descargas: ${this.descargas}
    `
  }
}

const app = new App('16,000', '5 estrellas', '900MB')

document.write(app.appInfo())

