const postPage = {
    title: 'Z',
    iq: 70
}

function iqdiff(postInfo){
    const downPage = {...postInfo}
    downPage.iq -= 10
    return downPage
}

const upDownPage = iqdiff(postPage)
console.log(postPage.iq)
console.log(upDownPage.iq)

const button = {
    width: 200,
    text: 'Buy'
}

const sizebuton = {
    size: 500,
    poz: 'left'
}
const redButton = {
    ...button,
    ...sizebuton,
    color: 'red'
}

const myName = 'Меня зовут Евгений'
const City = 'Я живу в Красноярске'

const sumstr = `${myName} ${City}` 
console.log(sumstr)

console.table(redButton)