const fs = require('fs')

fs.readdir(__dirname, (err, files) => {
  if (err) throw err

  fs.readFile(`${__dirname}/${files[0]}`, 'utf8', (err, data) => {
    if (err) throw err

    let obj = {}
    let lines = data.toString().split('\n')
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].split(' ')
      obj[line[0]] = line[1]
    }

    let json = JSON.stringify(obj)
    fs.writeFile(`palavras.json`, json, (err) => {
      if (err) throw err
    })
  })
})

