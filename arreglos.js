

// aninales[0] -> 🐶
function listarAnimales (animales) {
    console.log('Animales en la fiesta')
    for(var i = 0; i < animales.length; i++) {
        console.log(animales[i])
    }
}

var animales = ['🐶', '🦊', '🐷', '🐵']
listarAnimales(animales)
animales.push('🐻')
listarAnimales(animales)

// find / map / filter
var animalEncontrado = animales.find(function (animal) {
    return animal == '🦊'
})
var animalEncontrado2 = animales.find(item => item == '🦊')

var fiestaPrivada = animales.filter(item => item != '🐻')

fiestaPrivada.map(item => console.log(item))
