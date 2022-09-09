const http = require('http')
const port = 3000;


const server = http.createServer(function(req,res) {
    if(isPrime(15)){
     res.write('1')
    }
    else {
     res.write('0')
    }
 res.end()
})


function isPrime (num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

server.listen(port,function(error) {})