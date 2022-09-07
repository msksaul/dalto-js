class Animal {
  constructor(especie, edad, color){
    this.especie = especie
    this.edad = edad
    this.color = color
    this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
  }
  verInfo(){
    document.write(this.info)
  }
}

class Perro extends Animal {
  constructor(especie, edad, color, raza){
    super(especie, edad, color)
    this.raza = null
  }
  set setRaza(newName){
    this.raza = newName
  }

  get getRaza(){
    return this.raza
  }
}

const firulais = new Perro('perro', 5, 'rojo', 'doberman')

firulais.verInfo()
firulais.setRaza = 'Pedro'

document.write(firulais.getRaza)