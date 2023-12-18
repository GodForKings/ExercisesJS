const myPromise = new Promise((resolve, reject) =>{
/**выполнение асинхронных действий
//внутри этой функции нужно в результате вызвать одну из фукций resolve
or reject
*/
});

fetch('https://jsonplaceholder.typicode.com/todos/10') //запрос на сервер
    .then(response => { //если всё ок
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error)) //если всё не ок

const getData = (url) =>
    new Promise ((resolve, reject) => 
        fetch(url)
            .then (response => response.json())
            .then(json => resolve(json))
            .catch(error=> reject(error))
    )
getData('https://jsonplaceholder.typicode.com/todos/15')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

async function asyncFn(){
    //возвращает промис
}
const asyncFnn = async () => {
    return 'Выполнено'
}
asyncFnn()
    .then(value => console.log(value))

const asyncFnError = async () => {
    throw new Error('Это была ошибка')
}
asyncFnError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

const timerPromise = () =>
    new Promise((resolve, reject)=>
        setTimeout(()=> resolve(), 2000))

const asyncFnTime = async () => {
    console.log ('начало')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Время вышло', endTime - startTime)
}
asyncFnTime()

const getDataNew = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/10'

try {
    const data = await getDataNew(url)
    console.log(data)
} catch (error){
    console.log(error.message)
}