const myFunc = function (a = 2, b = 1){
    let c
    a++
    c = a + b
    return c
}
console.log(myFunc(10,3))

const fncMy = (a,b) =>{
    let c = a + b
}

(abc,rgr) => abc+rgr 

const loL = (early= 15, late = 40) => {
    console.log((early+late)/2) 
}
loL(13,50)

const newPost = (post, addedAt = Date()) => {
    const nextPost = {...post,addedAt}
    return nextPost
}
const firstPost = {
    id:1,
    author: 'Evg'
}
console.log(newPost(firstPost))