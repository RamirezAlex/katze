import { v4 as uuidv4 } from 'uuid'

import { Cat, CatInput } from '../Cat';

export class db {
  constructor(
    private cats = new Map()
  ) { }

  public createCat (cat: CatInput) {
    const catId = uuidv4();

    const newCat: Cat = {
      id: catId,
      ...cat
    }
    this.cats.set(newCat.id, cat);
    return newCat;
  }
  
  public deleteCat () {

  }

  public updateCat () {

  }

  public listCats () {
    return this.cats;
  }

  public searchCats () {

  }
} 

