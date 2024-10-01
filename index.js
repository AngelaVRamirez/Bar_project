const express = require('express')
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const api = require('./routes/api.routes')
const path = require('path')



dotenv.config();


const port = process.env.PORT;
const connectDatabase = require ('./db/config');
connectDatabase ();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/', express.static(__dirname + '/dist/bar-project-frontend/browser'));
app.get('/*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname + "/dist/bar-project-frontend/browser/index.html"));
});
app.use('/', api)

module.exports = app



