// start your server here
const server = require('./api/server')

const Port = process.env.Port || 4000;

server.listen(Port, () => {
    console.log(`Api Running On Port: ${Port}`)
})