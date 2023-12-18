const user = {
    age: 20
}

if (user.size){
    console.log(user.size)
} 
else if (user.size>180){
}
else {
    console.log('NO!')
}

const month = 11

switch(month){
    case 11:
        console.log('Dec')
        break
    case 1:
        console.log('Jn')
        break
    case 2:
        console.log('Feb')
        break
    default:
        console.log('другой месяц')
    }

let val = 0
function fn(val){
    val+=30
    return val
}
const res = val !==0 
    ?fn(val)
    :-val
console.log(res)