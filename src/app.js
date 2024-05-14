import express from 'express';
import routesMailer from './routes/mailler.routes.js';
import 'dotenn/config'

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    next();
});


app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/api/v1/mailler', routesMailer)

app.listen(process.env.PORT, () => {
  console.log(`'Example app listening on port ${PORT}'`);
});