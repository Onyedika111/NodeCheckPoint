const http = require('http');


const server = http.createServer((req, res) => {
    console.log('request made')
    res.end('<h1>Hello Node!!!!</h1>')
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})

