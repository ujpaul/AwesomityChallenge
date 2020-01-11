// const dotenv = require('dotenv')
import dotenv from 'dotenv';
// const app = require('./app');
import app from './app';
dotenv.config()
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}...`);
})
