const fs = require('fs')

// CALLBACK

const callback = (err, content) => {
    console.log(err, 'CALLBACK  ' + String(content))
}

console.log('CALL BACK')
console.log('1')
fs.readFile('./text1.txt', callback)
console.log('2')
console.log('3')

//PROMISES

const readFile = file =>
    new Promise((resolve, reject) => {
        fs.readFile(file, (err, content) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        })
    })


console.log('PROMISE')
console.log('1')

readFile('./text1.txt')
    .then(content => {
        console.log('PROMISE  ' + String(content))
    })

console.log('2')
console.log('3')

//ASYNC AWAIT

const read = async () => {
    try {
        const result = await readFile('./text1.txt')
        console.log('ASYNC/AWAIT  ' + result)
    } catch (err) {
        console.log(err)
    }
}

console.log('ASYNC/AWAIT')
console.log('1')
read()
console.log('2')
console.log('3')
