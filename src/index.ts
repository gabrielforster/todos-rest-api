import express from 'express';
import cors from 'cors';

import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: "It's working just Fine!"
  });
});

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server Listening: http://localhost:${port}`);
});
