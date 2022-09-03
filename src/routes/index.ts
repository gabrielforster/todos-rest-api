import express from 'express';

import todos from './todos/todos.routes';

const router = express.Router();

router.get<{}, {message: string}>('/', (req, res) => {
  res.json({
    message: 'API TODO',
  });
});

router.use('/todos', todos);

export default router;
