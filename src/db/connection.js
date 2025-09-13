

// La configuracion para conectarnos con la DB
require('dotenv').config()
const mongoose = require('mongoose')


const DATABASE = process.env.DATABASE_URI;

(
    async () => {
        try{
            await mongoose.connect(DATABASE)
            console.log('Conectado a la DB Mongoose :D')
        } catch (e){
            console.log(e)
        }
    }
)();

