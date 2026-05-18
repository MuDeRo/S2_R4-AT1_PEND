import 'dotenv/config';
import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(cors());
app.use(express.json()); 
app.use('/', routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.SERVER_PORT}`);
});