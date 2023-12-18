let i = 0 
i++
i++
i++

const myArray = [true,'zxc', 204]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

for (let i = 0; i < 5; i++){
    console.log(i)
}

for(let g = 0; g < myArray.length;g++){
    console.log(myArray[g])
}

myArray.forEach((element, index) => {
    console.log(element, index)
})

while (10>let){
    let--
}

Test1 = -1
do {
    // тело цикла выполнится гарантированно 1 раз
} while (Test1>0)

const testObj = {
    Name: 'Evg',
    LastName: 'Zaitsev'
}
for (const key in testObj){
    console.log(key)
}

Object.keys({}) //возврашает массив ключей
Object.values({}) //возвращает массив значений свойств 

const myStr = 'Itme'
for(const letter of myStr){ //проходит по всей строке !не подходит для объектов
    //тело цикла
}