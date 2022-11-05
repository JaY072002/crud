const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const user_route = require('./server/routes/user');
app.use('/', user_route)


app.listen(PORT, () => {
    console.log('server setup successful');
})