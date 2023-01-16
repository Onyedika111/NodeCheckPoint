const fs = require('fs')


//Creating file
fs.writeFile('./welcome.txt',   "Hello Node", () => {
    console.log('file was written')
})

//ReadFile
fs.readFile('./welcome.txt', (err, data) => {
    if (err) {
        console.log(err)
    } console.log(data.toString())
})