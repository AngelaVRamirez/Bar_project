const express = require('express')
const app = express();
const dotenv = require('dotenv');
const api = require('./routes/api.routes')
<<<<<<< HEAD
=======



>>>>>>> 98768aa9b828293d96151e3d6de39388fc8f0d28
dotenv.config();


const port = process.env.PORT;
const connectDatabase = require ('./db/config');
connectDatabase ();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', api)



app.listen(port, () =>{
    console.log(`Servidor conectado en el puerto ${port}`)
})