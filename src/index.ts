import express from 'express';
const app = express();

import IndexRoutes from './routers/index'

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});
app.use(IndexRoutes);

app.listen(4000);
    console.log('server on port 4000');

