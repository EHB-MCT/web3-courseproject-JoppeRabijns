const server = require('@nexrender/server')

const port = 3003
const secret = 'myapisecret'

server.listen(port, secret)