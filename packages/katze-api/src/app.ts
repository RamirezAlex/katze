import express, { Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { db } from './db';
import { Cat, CatInput } from './Cat';

const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();
const port = 3000;

const catsDb = new db();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/list', (req, res) => {
  const { page, limit } = req.query;
  const cats = catsDb.listCats({
    page: page ? parseInt(page as string) : 1,
    limit: limit ? parseInt(limit as string) : 3
  });
  res.send(cats);
});

app.get('/:catId', (req, res) => {
  const { catId } = req.params;
  const cat = catsDb.searchCats({
    catId
  });
  if (!cat) {
    res.status(404).send('Cat not found');
  }
  res.send(cat);
});

app.put('/:catId', (req, res) => {
  const { catId } = req.params;
  const { name, color, tags } = req.body;
  const newCat: CatInput = {
    name,
    color,
    tags
  };
  if (!catId) {
    res.status(400).send('Invalid ID supplied, please provide a catId');
  }
  catsDb.updateCat(catId, newCat);
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const { name, color, tags } = req.body;
  const newCat: CatInput = {
    name,
    color,
    tags
  };
  try {
    const cat: Cat = catsDb.createCat(newCat);
    res.send(cat);
  } catch (e) {
    res.status(405).send('Invalid Input. Error creating cat');
  }
});

app.delete('/:catId', (req, res) => {
  const { catId } = req.params;
  if (!catId) {
    res.status(400).send('Invalid ID supplied, please provide a catId');
  }
  res.send({ 'isDeleted': catsDb.deleteCat(catId) });
});

app.use('/api-docs', (req: any, res: Response, next: NextFunction) => {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
