const http = require('http')
const fs = require ('fs')

http.createServer((Request, Response)=>{
Response.end('<h1> Hello world ! <h1>')
})
.listen(5000)

console.log('server is running on: http://127.0.0.1:5000/')