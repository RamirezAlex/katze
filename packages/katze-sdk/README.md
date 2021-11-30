# `katze-sdk`

This is a SDK to use [The Katze API](https://github.com/RamirezAlex/katze/tree/main/packages/katze-api)
## Usage


### Create Cat

To create a cat you just need to past an object with the cat attributes

```
const katzeSdk = require('katze-sdk');

katzeSdk.create({
  name: 'Milo',
  color: 'Black'
  tags: 'puppy', 'cute', 'wild'
});
```

### Update Cat

It will update the Cat attibutes replacing the old ones

```
const katzeSdk = require('katze-sdk');

katzeSdk.upate(catId, {
  name: 'Milo',
  color: 'Black'
  tags: 'puppy', 'cute', 'wild'
});
```

### Delete Cat 

It will delete a Cat by id.

```
const katzeSdk = require('katze-sdk');

katzeSdk.delete(catId);
```

### List Cats

It return the list of cats in the db, it supports pagination params. When not parameters are passed, it returns the first 20 cats.

`page`: page number starting from 1. 
`limit`: number of cats per page. 
`searchTerm`: term use to search by name, color or tag.
```
const katzeSdk = require('katze-sdk');

katzeSdk.list({
  page: 1,
  limit: 10,
  serchTerm: 'black'
});
```
