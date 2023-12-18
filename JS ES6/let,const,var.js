'use strict'

var number = 10
console.log(number)
var number = 30
console.log(number)

function getNumber() {
	var number
	console.log(number)
}
getNumber()
var weight = 9
if (weight > 8) {
	var kg = `Вес ${weight} кг`
	console.log(kg)
}
console.log(kg) // Выходит в глобальную область видимости
let speed = 60
speed = 51
let shtraf = false
if (speed > 50) {
	let shtraf = true
	console.log(shtraf)
}
const car = {
	name: 'tesla',
	color: 'red',
}
car.name = 'nissan'
console.log(Object.assign(car))
Object.freeze(car)
//car.color = 'blue'
console.log(Object.assign(car))
