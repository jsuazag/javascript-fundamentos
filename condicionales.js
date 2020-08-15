// condiciones simples
var edad = 20

if (edad >= 18) {
    // puede pasar ya que es mayor de 18
    console.log('Puede acceder a la disco 😎')
} else {
    console.log('No tiene acceso, lo sentimos 😔')
}

// condiciones anidadas
var diaSemana = 'L'

if (diaSemana == 'L' || diaSemana == 'M') {
    console.log('🥱')
} else if (diaSemana == 'V') {
    console.log('🥳')
} else {
    console.log('🤓')
}

switch(diaSemana) {
    case 'L':
        console.log('🥱')
        break
    case 'V':
        console.log('🥳')
        break
    default:
        console.log('🤓')
}

var carita = diaSemana == 'L' ? '🥱' : '🤓'

var esDia = true
var mensage = esDia ? '¡Es día!' : 'Es noche'

