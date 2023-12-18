const person = {
    name: 'Vova',
    age: 22,
    popular : {
        face: 'male',
        size: 186
    }
}
person.age = 23
person.isAdult = true

//const person2 = {...person} 
//const person2 = Object.assign({},person)
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Lox'

person2.popular.size = 150

console.log(person.age)
console.log(person.isAdult)
console.log(person2.name)
console.log(person.name)
console.log(person.popular.size)
console.log(person2.popular.size)

const soldier = {

}