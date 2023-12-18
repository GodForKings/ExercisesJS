class Human {
    constructor(gender){
        this.gender = gender
        this.age = 0
    }

    upAge(){
        this.age +=1
    }

    static mergehuman(first, second){ //не наследуется экземплярами класса
        return `${first}${second}`
    }
}

const newHuman = new Human ('Male')
const nextHuman = new Human ('Female')
nextHuman.upAge()
newHuman.upAge()

console.log(newHuman)

class NumberArray extends Array {
    sum(){
        return this.reduce((sum,current)=>sum+current,0)
    }
}