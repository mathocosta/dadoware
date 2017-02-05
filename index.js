const dadoware = require('./dadoware.js')
const generateNumber = require('./generateNumber.js')

let numbers = []
let numOfWords = process.argv[2] || 3

for (let i = 0; i < numOfWords; i++) {
  numbers.push(generateNumber())
}


console.log(`Números sorteados: ${numbers}`)
console.log('Frase resultante: ')
console.log(dadoware(numbers))
