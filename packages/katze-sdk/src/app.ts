import { Katze } from "./Katze";

const katze = new Katze();

katze.create({
  name: 'Milo',
  color: 'Black',
  tags: ['cute', 'puppy', 'colombia']
});

const cats = katze.listCats({
  page: 1,
  limit: 3
});

console.log(cats);
