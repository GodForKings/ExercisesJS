const userProfile = {
    name: 'Boba',
    commentQty: 20,
    hasSignedAgreement: false
}

const userInfo = ({name,commentQty}) => {
    if (!commentQty){
        return `У пользователя ${name} нет комментариев`
    }
    return `У пользователя ${name} есть ${commentQty} комментариев`
}

console.log(userInfo(userProfile))

const {name, commentQty, hasSignedAgreement} = userProfile

console.log(name,commentQty, hasSignedAgreement)

const Gender = ['Male','Female']

const[Gender1,Gender2] = Gender

console.log(Gender1,Gender2)
