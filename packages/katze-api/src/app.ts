import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { db } from './db';
import { Cat, CatInput } from './Cat';

const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();
const port = 3000;

const catsDb = new db();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('h', catsDb.listCats());
  res.send(catsDb.listCats());
});

app.put('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const { body } = req;
  const newCat: CatInput = body;
  try {
    const cat = catsDb.createCat(newCat);
    res.send(cat);
  } catch (e) {
    console.log(e);
    res.status(403).send('Error creating cat')
  }
});

app.delete('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api-docs', (req: any, res: Response, next: NextFunction) => {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
