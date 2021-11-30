import { Katze } from "./Katze";


(async () => {
  const katze = new Katze();

  katze.create({
    name: 'Milo',
    color: 'Black',
    tags: ['cute', 'puppy', 'colombia']
  });

  const cats = await katze.listCats({
    page: 1,
    limit: 3
  });

  console.log(cats.data);
})();

