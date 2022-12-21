/*const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain')
    response.end('Sam Junior Garcia Figueroa')
})

server.listen(port, hostname,() => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`)
})*/

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send(`la suma de 10+10 = ${10+10}`)
})
app.listen(port,() => {
    console.log(`el servidor esta ejecutandose en http://localhost:${port}`)
    
})