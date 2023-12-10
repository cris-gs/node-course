const { readFile } = require('node:fs/promises')


async function init() {
    const text = await readFile('./file-text.txt', 'utf-8')
    console.log('text:', text)

    console.log('Do things while reading the file')
}

init()


// IIFE - Inmediatly Invoked Function Expression
// ;(
//     async () => {
//         const text = await readFile('./file-text.txt', 'utf-8')
//         console.log('text:', text)

//         console.log('Do things while reading the file')
//     }
// )()


