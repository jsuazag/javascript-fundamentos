
var edad = 17
var esHombre = true
var esMujer = false

var esMayor = edad == 18
var tiene18 = edad != 18

var esMayor18 = edad > 18
var esMenor18 = edad < 18

var tieneAcceso = esHombre && (edad > 18)
var tieneAcceso2 = esHombre && esMayor18

var tieneAcceso3 = (esHombre || esMujer) && esMayor18

var operacion = 10 + 3 * 5