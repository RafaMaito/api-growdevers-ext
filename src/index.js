import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server up and running on PORT ${port}`);
});

// DotEnv é para variaveis de ambiente
// colocando no nodemon.json o dotenv ele importa em todos os arquivos
