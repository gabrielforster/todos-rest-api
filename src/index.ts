import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import morgan from 'morgan'


import MessageResponse from './interfaces/MessageResponse';
import api from './routes';
import * as middlewares from './middlewares';

require('dotenv').config();

const app = express();
const {PORT = 5000} = process.env;

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1', api);

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({message: "It's working just Fine!"});
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listening: http://localhost:${PORT}`);
});

export default app;