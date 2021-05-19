import express, { ErrorRequestHandler } from 'express';

import todoRoutes from './todos/routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

/* eslint-disable-next-line */
const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  res.status(500).json({ message: err.message });
};

app.use(errorHandler);

app.listen(PORT, () => {
  return console.log(`\n Application Started on PORT: "${PORT}" \n`);
});
