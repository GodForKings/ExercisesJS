'use strict'
function printName(){
    console.log('Vova')
}

setTimeout(printName,500)

let a,b

function myFn(){
    let b 
    a = true
    b = 10 
    console.log(b)
}

myFn()
console.log(a,b)

const Test = 5

function aTest(){
    let Test = 12
    function innerTest(){
        //let Test = 0
        console.log(Test)
    }
    innerTest()
}

aTest()