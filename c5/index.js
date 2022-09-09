const materias = {
  fisica: [90,6,4],
  matematica: [84,8,4],
  quimica: [92,8,4],
  programacion: [79,7,2],
  biologia: [75,9,4],
  algebra: [80,8,3],
  logica: [81,7,4],
}

const aprobo = () => {
  for(mat in materias){
    let asistencias = materias[mat][0]
    if(asistencias >= 90){
      console.log(mat)
      console.log(`%cAprobado`, 'color:green')
    }
    else {
      console.log(`%cDesaprobado`, 'color:red')
    }
  }
}

aprobo()

let trabajo = '240 minutos detrabajo'
let estudio = '100 minutos de estudio'
let tp = '100 minutos de trabajos practicos'
let homework = '30 minutos de cosas de la casa'
let descanso = '10 minutos de descanso'


console.log('TAREAS')

for(let i=0; i<14; i++) {
  if(i==0){
    console.group('semana 1')
  }
  console.group('dia ' + (i+1))
  console.log(trabajo)
  console.log(descanso)
  console.log(estudio)
  console.log(tp)
  console.log(homework)
  console.groupEnd()
  if(i==7){
    console.groupEnd()
    console.group('semana 2')
  }

  console.groupEnd()
  console.groupEnd()
}

