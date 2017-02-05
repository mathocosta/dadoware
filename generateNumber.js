
/**
 * Generates a number compatible with diceware, and return in a string.
 */
function generateNumber () {
  let finalnumber = ''
  for (var i = 0; i < 5; i++)
    finalnumber += Math.floor((Math.random() * 6) + 1)

  return finalnumber
}

module.exports = generateNumber
