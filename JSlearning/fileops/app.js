var file = require('fs')
// fs module is exposed by the OS

file.writeFileSync("./demo.txt", "Goutham")

var dataFromFile = file.readFileSync("./demo.txt", {encoding: 'utf-8'})
console.log(dataFromFile)

//appendFileSync:append data to an existing file