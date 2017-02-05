const generateNumber = require('./generateNumber.js')
const dadoware = require('./dadoware.js')
const { expect } = require('chai')

describe('generateNumber', () => {
  it('Deve retornar uma string', () => {
    expect(generateNumber()).to.be.a('string')
  })

  it('Deve ter tamanho 5', () => {
    expect(generateNumber()).to.have.lengthOf(5)
  })
})

describe('dadoware', () => {
  let array = ['11122', '11345', '52346']

  it('Numero de palavras correto', () => {
    expect(dadoware(array).split(' ')).to.have.lengthOf(array.length+1)
  })

  it('Teste de saída', () => {
    expect(dadoware(array)).to.be.equal('abafar acolher peito ')
  })
})
