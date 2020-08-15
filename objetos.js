
var persona = {
    nombre: 'Maria',
    edad: 21,
    genero: 'F',
    tieneCarro: true
}

var nombre = persona.nombre
console.log(`nombre: ${nombre}`)

persona.sabeCocinar = true
persona.edad = 22

var carros = [
            { marca: 'Mazda', modelo: 2019 },
            { marca: 'Chevrolet', modelo: 2017 },
            { marca: 'Jeep', modelo: 2018 },
            { marca: 'Ferrari', modelo: 2015 },
            { marca: 'Nissan', modelo: 2021 },
]

carros.map(carro => console.log(carro.marca))