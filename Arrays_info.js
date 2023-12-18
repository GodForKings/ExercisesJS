const fnWithError = () =>{
    throw new Error('Some error')
}
try {
    fnWithError()
} catch (error){
    console.error(error)
    console.log(error.message)
}

console.log ('continue. . .')


function Fn(a){
    a++
    console.table(a)
}

const b = 10;

let c = -1;

Fn(b+c)

const myArray = [1,'He!',3]
console.table(myArray)

myArray.push('Update',3,4) //добавляет новый элемент в конец массива
console.log(myArray)

myArray.pop() //удаляет последний по индексу элемент
console.table(myArray)
const removeElement = myArray.pop()
console.log(removeElement)
console.log(myArray)

myArray.unshift('abc') //добавляет в начало массива ноый элемент
console.log(myArray)
myArray.shift() //удаляет самый первый по индексу элемент
console.log(myArray)

let wpMin = 1000;
myArray.forEach(wp => {  //переберает каждый элемент массива не изменяя свойства оригинала, возвращает undefind
    if(wp < wpMin)
    wpMax = wp
    console.log(wp*2)
})
console.log('Min ',wpMax)

const updateArray = myArray.map((up) => { //возвращает новый массив
    return up +' UP!'
})
console.log(updateArray)
