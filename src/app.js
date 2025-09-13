require('dotenv').config()
const app = require('./server/server')
require('./db/connection')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`))