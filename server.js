import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@cluster0-shard-00-00.a44mf.mongodb.net:27017,cluster0-shard-00-01.a44mf.mongodb.net:27017,cluster0-shard-00-02.a44mf.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-vqp1zp-shard-0&authSource=admin&retryWrites=true&w=majority`;
Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server is Running Successfully on Port ${PORT} `));
DefaultData();