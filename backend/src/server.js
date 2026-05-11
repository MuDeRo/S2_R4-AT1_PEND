import 'dotenv/config';
import express from 'express';
import routes from './routes/routes.js';

const app = express();
app.use(express.json()); 
app.use('/', routes); 

app.listen(process.env.SERVER_PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em: http://10.87.169.65:${process.env.SERVER_PORT}`);
});